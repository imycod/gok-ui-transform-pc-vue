<template>
  <div class="swiper1">
    <div class="carousel-gallery">
      <div class="swiper-container" ref="container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in list" :key="index">
            <a :href="item.normalUrl"
               data-fancybox="gallery">
              <div class="image"
                   :style="`background-image: url(${item.previewUrl})`">
                <div class="overlay">
                  <em class="mdi mdi-magnify-plus"></em>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'swiper1',
  components: {},
  data () {
    return {
      swiper: null,
      list: [
        {
          normalUrl: 'https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }, {
          normalUrl: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }, {
          normalUrl: 'https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }, {
          normalUrl: 'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }, {
          normalUrl: 'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }, {
          normalUrl: 'https://images.pexels.com/photos/277477/pexels-photo-277477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/277477/pexels-photo-277477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }, {
          normalUrl: 'https://images.pexels.com/photos/928276/pexels-photo-928276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          previewUrl: 'https://images.pexels.com/photos/928276/pexels-photo-928276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
      ]
    }
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      this.swiper = new Swiper(this.$refs.container, {
        effect: 'slide',
        speed: 900,
        slidesPerView: 5,
        spaceBetween: 20,
        simulateTouch: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.carousel-gallery .swiper-pagination',
          clickable: true
        },
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 5
          },
          // when window width is <= 480px
          425: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is <= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.swiper1 {
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  /*Carousel Gallery*/

  .carousel-gallery {
    margin: 50px 0;
    padding: 0 30px;

    .swiper-slide {
      a {
        display: block;
        width: 100%;
        height: 200px;
        border-radius: 4px;
        overflow: hidden;
        position: relative;

        -webkit-box-shadow: 3px 2px 20px 0px rgba(0, 0, 0, .2);
        -moz-box-shadow: 3px 2px 20px 0px rgba(0, 0, 0, .2);
        box-shadow: 3px 2px 20px 0px rgba(0, 0, 0, .2);

        &:hover {
          .image {
            .overlay {
              opacity: 1
            }
          }
        }

        .image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center center;

          .overlay {
            width: 100%;
            height: 100%;
            background-color: rgba(20, 20, 20, .8);
            text-align: center;
            opacity: 0;

            -webkit-transition: all .2s linear;
            -o-transition: all .2s linear;
            transition: all .2s linear;

            em {
              color: #fff;
              font-size: 26px;
              position: relative;
              top: 50%;
              -webkit-transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              -o-transform: translateY(-50%);
              transform: translateY(-50%);
              display: inline-block;
            }
          }
        }
      }
    }

    .swiper-pagination {
      position: relative;
      bottom: auto;
      text-align: center;
      margin-top: 25px;

      .swiper-pagination-bullet {
        -webkit-transition: all .2s linear;
        -o-transition: all .2s linear;
        transition: all .2s linear;

        &:hover {
          opacity: .7;
        }

        &.swiper-pagination-bullet-active {
          background-color: #d63031;
          transform: scale(1.1, 1.1)
        }
      }
    }
  }

  /*# Carousel Gallery*/
}
</style>
