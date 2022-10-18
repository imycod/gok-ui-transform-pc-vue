<template>
  <div class="tabs">
    <template v-for="(tab,index) in list">
      <input type="radio" :id="`radio-${index+1}`" @click="$emit('tabClick',tab.currentTab)" name="tabs"
             :checked="tab.currentTab === active"/>
      <label class="tab" :for="`radio-${index+1}`">{{ tab.name }}<span
          class="notification">{{ tab.count }}</span></label>
    </template>
    <span class="glider"></span>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {
    list: {
      type: Array,
      default: [],
      required: true,
    },
    active: {
      type: String,
      default: '',
      required: true,
    }
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");

$--primary-color = #185ee0;
$--secondary-color = #e6eef9;

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background-color: rgba(#e6eef9, 0.5);
}

.tabs {
  display: flex;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
  padding: 0.75rem;
  border-radius: 99px; // just a high number to create pill effect

  * {
    z-index: 2;
  }
}

input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px; // just a high number to create pill effect
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: $--secondary-color;
  transition: 0.15s ease-in;
}

input[type="radio"] {
  &:checked {
    & + label {
      color: $--primary-color;

      & > .notification {
        background-color: $--primary-color;
        color: #fff;
      }
    }
  }
}

input[id="radio-1"] {
  &:checked {
    & ~ .glider {
      transform: translateX(0);
    }
  }
}

input[id="radio-2"] {
  &:checked {
    & ~ .glider {
      transform: translateX(100%);
    }
  }
}

input[id="radio-3"] {
  &:checked {
    & ~ .glider {
      transform: translateX(200%);
    }
  }
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: $--secondary-color;
  z-index: 1;
  border-radius: 99px; // just a high number to create pill effect
  transition: 0.25s ease-out;
}

</style>
