<template>
  <div class="MainBox">
    <div id="swiperMainBox" class="mainLi swiper-container swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <v-banner @click="sendtoclick"></v-banner>
        </div>
        <div class="swiper-slide swiper-second">
          <v-second></v-second>
        </div>
        <div class="swiper-slide swiper-laboratory">
          <v-thirdly></v-thirdly>
        </div>
        <div class="swiper-slide swiper-fourthly">
          <v-fourthly></v-fourthly>
        </div>
        <div class="swiper-slide swiper-fifth">
          <fifth></fifth>
        </div>
      </div>
    </div>
    <div class="backTop" @click="backHomeCLick" v-show="isBackShow">
      <img src="/static/img/返回顶部.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import banner from "./banner"; // banner
import fourthly from "./fourthly"; // 合作伙伴
import thirdly from "./thirdly"; // 实验室
import second from "./second"; // 解决方案
import fifth from "./fifth"; // 解决方案

export default {
  components: {
    "v-banner": banner,
    "v-fourthly": fourthly,
    "v-thirdly": thirdly,
    "v-second": second,
    fifth
  },
  props: {
    hei: {}
  },
  data() {
    return {
      SlectIndex: 0,
      isBackShow: false
    };
  },
  filters: {},
  created: function() {
    var self = this;
  },
  mounted: function() {
    let self = this;
    self.swiperMainBox = new Swiper("#swiperMainBox", {
      autoplay: false,
      direction: "vertical",
      loop: false,
      speed: 700,
      mousewheel: true,
      on: {
        slideChangeTransitionEnd: function() {
          self.SlectIndex = this.activeIndex;
          if (this.activeIndex > 0) {
            self.isBackShow = true;
          } else {
            self.isBackShow = false;
          }
        }
      }
    });
  },
  watch: {
    hei(val) {
      let self = this;
      self.swiperMainBox.slideTo(5);
    }
  },
  methods: {
    backHomeCLick() {
      let self = this;
      self.swiperMainBox.slideTo(0);
    },
    sendtoclick() {
      let self = this;
      self.swiperMainBox.slideTo(5);
    }
  }
};
</script>
<style scoped>
.swiper-fifth {
  height: 800px;
  background-color: #fff;
  width: 100%;
}
.swiper-banner {
  height: 860px;
  background-color: #fff;
  width: 100%;
}

.swiper-fourthly {
  height: 800px;
  background: rgba(237, 247, 241, 1);
  width: 100%;
}

.swiper-laboratory {
  height: 800px;
  background: rgba(243, 251, 253, 1);
  width: 100%;
}

.swiper-second {
  height: 800px;
  background: rgba(243, 251, 253, 1);
  width: 100%;
}

.mainLi .swiper-slide {
  width: 100%;
  height: 100% !important;
}

.mainLi .swiper-wrapper {
  height: 100% !important;
}

.mainLi {
  height: 100% !important;
}

.swiper-container {
  height: 100% !important;
}

#swiperMainBox {
  width: 100%;
  height: 100% !important;
  position: relative;
  overflow: hidden;
  background-color: #ccc;
}

.MainBox {
  height: 100% !important;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.backTop {
  position: fixed;
  bottom: 50px;
  right: 280px;
  width: 1200px;
  height: 42px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
}
</style>