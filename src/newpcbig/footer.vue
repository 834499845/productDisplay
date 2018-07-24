<template>
  <div class="footerBox">
    <div>
      联系邮箱：yunjing@vv.cc&nbsp;&nbsp;|&nbsp;&nbsp;联系电话：029-88879417&nbsp;&nbsp;|&nbsp;&nbsp;联系地址：陕西省西安市雁塔区丈八六路与南三环辅道32号天网园区9号楼
    </div>
    <div>Copyright © 2014-2018 vv.All Rights Reserved. 运璟网络 版权所有 苏ICP备15001498号-1</div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  created: function() {
    var self = this;
  },
  mounted: function() {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.footerBox > div:nth-child(1) {
  width: 100%;
  text-align: center;
  height: 20px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  margin-top: 32px;
  letter-spacing: 1px;
}
.footerBox > div:nth-child(2) {
  width: 100%;
  text-align: center;
  height: 20px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  margin-top: 24px;
  letter-spacing: 1px;
}
.footerBox {
  height: 100%;
  width: 100%;
  z-index: 10000;
  background: rgba(64, 84, 109, 1);
  overflow: hidden;
}
</style>