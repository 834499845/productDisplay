<template>
  <div :class="{'pcView':isPcShow}">
    <header :class="{'header':true}">
      <div class="headerMain">
        <div class="header-left">
          <img @click="headliCLick(99)" src="/static/img/伯通logo.png" alt="">
          <div>XX</div>
        </div>
        <div class="header-right">
          <ul>
            <li @click="headliCLick(index)" :class="{'header-rightLi':true,'header-rightLiSelect':isRightLiSelect == index}" v-for="(item,index) in mainLists"
              :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <router-view :hei="heiVal" keep-alive></router-view>
    </main>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      heiVal: 0,
      isPcShow: true,
      isHeaderSelect: false,
      isRightLiSelect: 0,
      mainLists: [
        {
          name: "首页",
          id: "1",
          swiper: "swiper1",
          path: "home",
          pathb: "bhome",
          ptheight: 0,
          height: 1265
        },
        {
          name: "微应用",
          id: "2",
          swiper: "swiper2",
          path: "mApp",
          pathb: "mApp",
          ptheight: 0,
          height: 868
        },
        {
          name: "解决方案",
          id: "4",
          swiper: "swiper4",
          path: "solution",
          pathb: "solution",
          ptheight: 0,
          height: 731
        },
        {
          name: "支持与服务",
          id: "6",
          swiper: "swiper6",
          path: "server",
          pathb: "server",
          ptheight: 0,
          height: 819
        }
      ] // 导航
    };
  },
  filters: {},
  computed: {},
  mounted() {
    let self = this;
    self.isPcShow = true;
    let pathStr = self.$route.path;
    if (self.$route.path == "/home" || self.$route.path == "/bhome") {
      if (
        document.body.clientWidth > 1280 &&
        document.body.clientHeight > 900
      ) {
        self.$router.push({
          path: "/bhome"
        });
      } else {
        self.$router.push({
          path: "/home"
        });
      }
    } else {
    }
    window.onresize = function() {
      if (self.$route.path == "/home" || self.$route.path == "/bhome") {
        if (
          document.body.clientWidth > 1220 &&
          document.body.clientHeight > 850
        ) {
          self.$router.push({
            path: "/bhome"
          });
        } else {
          self.$router.push({
            path: "/home"
          });
        }
      }
    };
  },
  created: function() {
    let self = this;
    self.isRightLiSelect = sessionStorage.getItem("selectIndex") || 0;
  },
  methods: {
    // 导航
    headliCLick(index) {
      let self = this;
      if (
        document.body.clientWidth > 1220 &&
        document.body.clientHeight > 850
      ) {
        if (self.mainLists[index].name == "支持与服务") {
          self.heiVal = `${self.mainLists[index].name}?${new Date().getTime()}`;
        } else {
          self.isRightLiSelect = index;
          sessionStorage.setItem("selectIndex", index);
          self.$router.push({
            path: `/${self.mainLists[index].pathb}`
          });
        }
      } else {
        if (self.mainLists[index].name == "支持与服务") {
          self.heiVal = `${self.mainLists[index].name}?${new Date().getTime()}`;
        } else {
          self.isRightLiSelect = index;
          sessionStorage.setItem("selectIndex", index);
          self.$router.push({
            path: `/${self.mainLists[index].path}`
          });
        }
      }
    }
  }
};
</script>
<style scoped>
main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header-left div {
  font-size: 22px;
  font-family: MicrosoftYaHei;
  color: rgba(67, 144, 225, 1);
  margin-left: 16px;
}
.header-left {
  height: 86px;
  min-width: 140px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.swiper-page {
  width: 16px;
  height: 2px;
  margin-right: 10px;
  float: left;
  background: rgba(92, 92, 92, 1);
}

.header-left img {
  width: 36px;
  height: 36px;
}

.header-rightLi {
  min-width: 20px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 16px;
  margin-left: 42px;
  cursor: pointer;
  color: rgba(87, 160, 209, 1);
}

.header-rightLi:hover {
  color: rgba(24, 56, 95, 1) !important;
}

.header-rightLiSelect {
  color: rgba(24, 56, 95, 1) !important;
}

.header-rightLi:nth-child(1) {
  margin-left: 0;
}

.header-right > ul {
  float: right;
  margin: 0;
  padding: 0;
  /* width: 580px; */
  height: 86px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-right {
  min-width: 240px;
  height: 86px;
  overflow: hidden;
}

.headerMain {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 auto;
}

.header {
  position: absolute;
  width: 100%;
  height: 60px;
  min-width: 1200px;
  background-color: rgba(241, 248, 254, 1);
  color: #fff;
  z-index: 9;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.pcView {
  width: 100%;
  height: 100% !important;
  background-color: #fff;
  user-select: none;
  min-width: 1280px;
  overflow: hidden;
  position: relative;
}
</style>