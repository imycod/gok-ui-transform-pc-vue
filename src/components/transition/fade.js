import styled from 'vue-styled-components'
import Vue from "vue"

import TransitionFake from "./fade.vue"
// const Transition = Vue.component('transition',TransitionFake)
const TransitionProps = {speed: Number}
const TransitionFade = styled(TransitionFake, TransitionProps)`
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: ${props=>props.speed ? `opacity ${props.speed}ms ease-out`: `opacity 5000ms ease-out`};
  }
`

export default TransitionFade
