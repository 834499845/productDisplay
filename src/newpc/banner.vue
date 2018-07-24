<template>
  <div class="bannerBox">
    <div class="bannerBoxT">
    </div>
    <div class="bannerBoxB">
      <div class="bannerBoxBo">知你所想，予你所需</div>
      <div class="bannerBoxBt">一站式智能办公平台</div>
      <div class="bannerBoxBs">
        <img class="bannerBoxBsImg" src="/static/img/第一屏图.png" alt="">
        <div class="bannerBoxBsCode">
          <img src="/static/img/app下载二维码.png" alt="">
        </div>
      </div>
      <div class="bannerBoxBf">
        <ul>
          <li :class="{'bannerBoxBfLI':true}" v-for="(item,index) in lists" :key="index" @click="listsClick(index)">
            {{item.name}}
            <div v-show="item.name == '申请体验'" class="bannerBoxBfLIAfter">

            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      lists: [
        { name: "安卓版下载" },
        { name: "IOS版下载" },
        { name: "申请体验" }
      ]
    };
  },
  created: function() {},
  mounted: function() {},
  filters: {},
  watch: {},
  methods: {
    listsClick(index) {
      let self = this;
      if (self.lists[index].name == "安卓版下载") {
        window.open("http://app.qq.com/#id=detail&appid=1106798623");
      } else if (self.lists[index].name == "IOS版下载") {
        window.open(
          "https://itunes.apple.com/cn/app/%E4%BC%AF%E9%80%9A%E5%B7%A5%E4%BD%9C/id1377951225?mt=8"
        );
      } else if (self.lists[index].name == "申请体验") {
        self.$emit("click", true);
      }
    }
  }
};
</script>
<style scoped>
.bannerBoxBfLIAfter {
  width: 36px;
  height: 6px;
  background: rgba(132, 172, 220, 1);
  border-radius: 4px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: calc(50% - 18px);
}
.bannerBoxBfLI:nth-child(1) {
  margin-left: 0;
}
.bannerBoxBfLI:hover {
  color: rgba(68, 97, 133, 1);
}
.bannerBoxBfLI {
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(132, 172, 220, 1);
  margin-left: 41px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  height: 45px;
}
.bannerBoxBf ul {
  display: flex;
  justify-content: center;
  height: 45px;
  width: 100%;
}
.bannerBoxBo {
  width: 100%;
  text-align: center;
  margin-top: 94px;
  height: 56px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(24, 56, 95, 1);
  line-height: 56px;
}
.bannerBoxBt {
  width: 100%;
  text-align: center;
  margin-top: 16px;
  height: 30px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(89, 118, 153, 1);
  line-height: 30px;
}
.bannerBoxBsImg {
  width: 100%;
  height: 100%;
}
.bannerBoxBsCode {
  position: absolute;
  width: 141px;
  height: 119px;
  right: -122px;
  top: 55px;
}
.bannerBoxBs {
  width: 627px;
  height: 365px;
  margin: 0 auto;
  margin-top: 45px;
  position: relative;
}
.bannerBoxBf {
  width: 100%;
  margin-top: 60px;
}

.bannerBoxT {
  width: 100%;
  height: 60px;
}
.bannerBoxB {
  width: 100%;
  height: 800px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100% 100%;
  background-image: url("/static/img/第一屏.png");
}

.bannerBox {
  height: 860px;
  width: 100%;
  user-select: none;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}
</style>