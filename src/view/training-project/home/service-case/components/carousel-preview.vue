<template>
  <div class="carousel-item">
    <div class="close-btn" @click="closeClick">×</div>
    <!--  easing="none"-->
    <Carousel v-model="imageIndex" >
        <CarouselItem v-for="(item,index) in images" :key="index">
            <div class="demo-carousel">
                 <img :src="item.mediaType == 'VIDEO' ? item.coverUrl : item.bannerUrl" alt="" class="carousel-img">
                  <div class="player-mask-c" v-if="item.mediaType == 'VIDEO'">
                      <img src="@/assets/images/player-icon.png" alt="" class="player-icon" @click="toPlayer(item,index)">
                  </div>
            </div>
        </CarouselItem>
    </Carousel>
    <div class="player-mask"  v-if="isVideo" :id="imageIndex"></div>
  </div>
</template>

<script>
import HlsJsPlayer from "xgplayer-hls.js";
export default {
  components: {},
  props: {
    images: Array,
    imageIndex: Number
  },
  data () {
    return {
         value1: 0,
         isVideo: false
    };
  },
  mounted(){},
  methods: {
    closeClick() {
      if (this.isVideo) {
        this.isVideo =  false;
        return
      }
      this.$emit('closeHandle');
    },
    toPlayer(item,id) {
      this.isVideo = true;
      let companyId = this.$route.query.companyId;
      request(this.$API.TAC.mediaInfoUrl(companyId,item.id), {}).then(res => {
        const data = res.data;
        let player = new HlsJsPlayer({
            id,
            url: data.address,
            poster: data.coverAddress,
            cssFullscreen: true,
            autoplay:true
        })
      })

    }
  }
}
</script>
<style lang='stylus' scoped>
.carousel-item {
   position: relative;
  //  width: 100vw;
  //  height: 100vh;
   left: 0;
   top:0;
    .close-btn {
        position: fixed;
        right: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
        background: rgba(0,0,0,0.3);
        color: #fff;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        border-radius: 50%;
        z-index: 1006;
        cursor: pointer;
    }
    /deep/ .ivu-carousel {
         width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index:1000;
        background: #000;
    }
    .demo-carousel {
       position: relative;
        .carousel-img {
            width: 100vw;
            height: 100vh;
            object-position: 50% 50%;
            object-fit: contain;
        }
        .player-icon {
          width: 100px;

        }

    }
    .player-mask-c {
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
    }
     .player-mask {
          position: fixed;
          left: 0;
          top: 0;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 1005;
          overflow:hidden;
        }

}
</style>
