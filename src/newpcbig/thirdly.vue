<template>
  <div class="thirdlyBox">
    <div class="thirdlyMain">
      <div class="thirdlyMainLeft">
        <div>
          丰富微应用 更多拓展可能
        </div>
        <div>
          业务流程优化、运营成本控制、业务机会发现、 经营风险识别，给你更多可能的拓展 。<small>[更多微应用]</small>
        </div>
      </div>
      <div class="thirdlyMainRight">
        <img src="/static/img/首页－微应用.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {};
  },
  created: function() {},
  mounted: function() {},
  filters: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.thirdlyMainLeft {
  width: 547px;
  height: 300px;
  margin-right: 40px;
}
.thirdlyMainLeft > div:nth-child(1) {
  width: 547px;
  height: 50px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(68, 97, 133, 1);
  line-height: 50px;
  margin-top: 110px;
}
.thirdlyMainLeft > div:nth-child(2) {
  width: 441px;
  height: 52px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(92, 112, 135, 1);
  line-height: 26px;
  margin-top: 32px;
}
.thirdlyMainLeft > div:nth-child(2) small {
  color: rgb(206, 128, 128);
  font-size: 18px;
  cursor: pointer;
}
.thirdlyMainRight {
  width: 344px;
  height: 300px;
  margin-left: 40px;
}

.thirdlyMain {
  height: 300px;
  min-width: 922px;
  display: flex;
  justify-content: space-between;
}
.thirdlyBox {
  height: 100%;
  width: 100%;
  user-select: none;
  overflow: hidden;
  position: relative;
  background: rgba(237, 247, 241, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>