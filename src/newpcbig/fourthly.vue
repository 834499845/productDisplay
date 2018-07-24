<template>
  <div class="fourthlyBox">
    <div class="fourthlyMain">
      <div class="fourthlyMainLeft">
      <img src="/static/img/首页－制造安全.png" alt="">
      </div>
      <div class="fourthlyMainRight">
        <div>智造安全，安享工作</div>
        <div>独立服务器部署，多重信息保护，安全性可随时把控，工作更放心</div>
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
.fourthlyMainLeft {
  width: 495px;
  height: 308px;
  margin-right: 35px;
}
.fourthlyMainRight {
  width: calc(100% - 365px);
  height: 308px;
  margin-left: 35px;
  overflow: hidden;
}
.fourthlyMainRight > div:nth-child(1) {
  height: 50px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(68, 97, 133, 1);
  line-height: 50px;
  min-width: 500px;
  margin-top: 132px;
}

.fourthlyMainRight > div:nth-child(2) {
  width: 500px;
  height: 26px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(92, 112, 135, 1);
  line-height: 26px;
  margin-top: 34px;
}
.fourthlyMain {
  height: 308px;
  min-width: 922px;
  display: flex;
  justify-content: space-between;
}
.fourthlyBox {
  height: 100%;
  width: 100%;
  user-select: none;
  overflow: hidden;
  position: relative;
  background: rgba(243, 251, 253, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>