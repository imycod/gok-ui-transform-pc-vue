<template>
  <div>
    <!-- {{dialog}} -->
    <login-card></login-card>
  </div>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import { mapGetters } from "vuex";
import LoginCard from "@/components/authentication/login-card/index.vue";

export default defineComponent({
  components: {
    LoginCard,
  },

  setup() {
    // const dialog=ref(false)
    // dialog.value=computed(() => {
    //   return {
    //     ...mapGetters(["dialog"]),
    //   };
    // });
    return {
        // dialog
    };
  },
});
</script>
