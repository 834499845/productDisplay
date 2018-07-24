<template>
  <div class="secondBox">
    <div class="secondMain">
      <div class="secondMainLeft">
        <img src="/static/img/首页－定制化.png" alt="">
      </div>
      <div class="secondMainRight">
        <div>定制化，更懂你</div>
        <div>重新定义移动办公、更贴合企业需求、更高效的协同办公</div>
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
.secondMainLeft {
  width: 355px;
  height: 300px;
}
.secondMainRight {
  width: calc(100% - 365px);
  height: 300px;
  margin-left: 113px;
}
.secondMainRight > div:nth-child(1) {
  height: 50px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(68, 97, 133, 1);
  line-height: 50px;
  min-width: 454px;
  margin-top: 106px;
}

.secondMainRight > div:nth-child(2) {
  min-width: 454px;
  height: 26px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(92, 112, 135, 1);
  line-height: 26px;
  margin-top: 32px;
}
.secondMain {
  height: 300px;
  min-width: 922px;
  display: flex;
  justify-content: space-between;
}
.secondBox {
  height: 800px;
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