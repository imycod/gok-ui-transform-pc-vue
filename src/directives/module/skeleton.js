import "./skeleton.styl"
const state = new Vue({
  data: {
    loading: false,
    list: [],
  },
  watch: {
    loading: {
      handler(n, o) {
        const children = this.list.map((el) => {
          const constructor = Vue.extend({
            render(h) {
              return h('div', {
                class: 'skeleton-item__v-skeleton skeleton-line',
                style: {
                  position: 'absolute',
                  top: el.getBoundingClientRect().top + 'px',
                  left: el.getBoundingClientRect().left + 'px',
                  width: el.getBoundingClientRect().width + 'px',
                  height: el.getBoundingClientRect().height + 'px',
                  // background: '#e5e5e5',
                  borderRadius: getComputedStyle(el).borderRadius,
                }
              })
            }
          })
          return constructor
        });

        if (this.loading) {
          children.map(constructor => {
            const component = new constructor().$mount();
            document.body.appendChild(component.$el)
          })
        } else {
          const children = document.querySelectorAll('.skeleton-item__v-skeleton')
          children.forEach(node => {
            document.body.removeChild(node)
          });
        }
      },
    }
  },
})

const Skeleton = {
  inserted(el, binding) {
    state.loading = binding.value
  },
  update(el, binding) {
    state.loading = binding.value
  },
  unbind(el) {
    state.loading = false
  }
}

const SkeletonItem = {
  inserted(el, binding) {
    // 保存 el
    state.list.push(el)
  },
  unbind(el) {
    // 删除 el
    const i = state.list.indexOf(el)
    if (i == -1) return
    state.list.splice(i, 1)
  }
}

export default {
  install: app => {
    app.directive('skeleton', Skeleton)
    app.directive('skeleton-item', SkeletonItem)
  }
}
