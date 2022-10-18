import directive from './directives'

const importDirective = Vue => {
  Vue.directive('imageErr', directive.imageErr)
}

export default importDirective
