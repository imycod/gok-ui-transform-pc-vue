<template>
  <vue-qr :text="$attrs.qrContent" :size="250" :margin="0">
        </vue-qr>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  components: { VueQr }
}
</script>
