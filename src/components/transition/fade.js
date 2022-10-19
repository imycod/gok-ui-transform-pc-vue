import styled from 'vue-styled-components'
import Vue from "vue"

import TransitionFake from "./fade.vue"
// const Transition = Vue.component('fade',TransitionFake)
const TransitionProps = {speed: Number}
// console.log(styled)
const TransitionFade = styled(Transition, {})`
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: ${props=>props.speed ? `opacity 5000ms ease-out`: `opacity 5000ms ease-out`};
  }
`

export default TransitionFade
