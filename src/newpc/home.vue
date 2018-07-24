<template>
  <div class="MainBox">
    <vue-scroll ref="vs" :ops="opsB" @handle-scroll="handleScroll">
      <div class="swiper-banner">
        <v-banner @click="dyClick"></v-banner>
      </div>
      <div class="swiper-second">
        <v-second></v-second>
      </div>
      <div class="swiper-laboratory">
        <v-thirdly></v-thirdly>
      </div>
      <div class="swiper-fourthly">
        <v-fourthly></v-fourthly>
      </div>
      <div class="swiper-fifth">
        <fifth></fifth>
      </div>
    </vue-scroll>
    <div class="backTop" @click="backHomeCLick" v-show="isBackShow">
      <img src="/static/img/返回顶部.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import banner from "./banner"; //
import fourthly from "./fourthly"; //
import thirdly from "./thirdly"; //
import second from "./second"; //
import fifth from "./fifth"; //

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
      isBackShow: false,
      opsB: {
        vBar: {
          background: "#000",
          pos: "right",
          keepShow: false,
          opacity: 1,
          hover: false
        }
      }
    };
  },
  filters: {},
  created: function() {
    let self = this;
  },
  mounted: function() {
    let self = this;
  },
  watch: {
    hei(val) {
      let self = this;
      self.$refs["vs"].scrollBy({
        dx: 0,
        dy: "100%"
      });
    }
  },
  methods: {
    handleScroll(vertical, horizontal, nativeEvent) {
      if (vertical.process > 0.1) {
        this.isBackShow = true;
      } else {
        this.isBackShow = false;
      }
    },
    backHomeCLick() {
      let self = this;
      self.$refs["vs"].scrollTo({
        x: 0,
        y: 0
      });
    },
    dyClick() {
      let self = this;
      self.$refs["vs"].scrollBy({
        dx: 0,
        dy: "100%"
      });
    },
    soluDetailsClick(t, d) {
      let self = this;
      self.$refs["vs"].scrollTo({
        x: 0,
        y: 0
      });
    },
    labDetailsClick(t, d) {
      let self = this;
      self.$refs["vs"].scrollTo({
        x: 0,
        y: 0
      });
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
  background-color: #f4f4f4;
}

.MainBox {
  height: 4000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.backTop {
  position: fixed;
  bottom: 50px;
  right: 280px;
  width: 1200px;
  height: 42px;
  cursor: pointer;
  display: flex;
  z-index: 2000;
  justify-content: flex-end;
}
</style>