<template>
  <div class="fifthBox">
    <div class="fifthBoxT">
      <div class="fifthBoxTL">
        <div class="fifthBoxTLTitle">
          欢迎申请体验，我们可以根据您的实际需求，做定制性开发
        </div>
        <div class="fifthBoxTLInput fifthBoxTLInputT">
          <div class="fifthBoxTLInputI">
            <img src="/static/img/公司名.png" alt="">
          </div>
          <div class="fifthBoxTLInputP">
            <input type="text" placeholder="请输入企业名称" v-model="nameVal">
          </div>
        </div>
        <div class="fifthBoxTLInput">
          <div class="fifthBoxTLInputI">
            <img src="/static/img/邮箱.png" alt="">
          </div>
          <div class="fifthBoxTLInputP">
            <input type="text" placeholder="请输入企业邮箱" v-model="emailVal">
          </div>
        </div>
        <div class="fifthBoxTLInput">
          <div class="fifthBoxTLInputI">
            <img src="/static/img/联系方式.png" alt="">
          </div>
          <div class="fifthBoxTLInputP">
            <input type="text" placeholder="请输入联系方式" v-model="phoneVal">
          </div>
        </div>
        <div class="fifthBoxTLIBut" @click="butBclick">
          提交
        </div>
      </div>
      <div class="fifthBoxTR">
        <div>
          发送邮件联系我们
        </div>
        <div>
          <img src="/static/img/邮件.png" alt="">
        </div>
        <div>
          联系邮箱：yunjing@vv.cc
        </div>
        <div>
          联系电话：029-88879417
        </div>
        <div class="fifthBoxTRCode">
          <div class="fifthBoxTRCodeList">
            <div>
              <img src="/static/img/微信.png" alt="">
            </div>
            <div>微信公众号</div>
          </div>
          <div class="fifthBoxTRCodeList fifthBoxTRCodeListb">
            <div>
              <img src="/static/img/微博.png" alt="">
            </div>
            <div>XX微博</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fifthBoxB">
      <footerMode></footerMode>
    </div>
    <div class="butTost" v-show="isbutTost">
      提交成功
    </div>
  </div>
</template>
<script>
import footerMode from "./footer";
export default {
  components: {
    footerMode
  },
  props: [],
  data() {
    return {
      nameVal: "",
      emailVal: "",
      phoneVal: "",
      isbutTost: false
    };
  },
  created: function() {},
  mounted: function() {},
  filters: {},
  watch: {},
  methods: {
    butBclick() {
      let self = this;
      if (
        this.nameVal.length > 0 &&
        this.emailVal.length > 0 &&
        this.phoneVal.length > 0
      ) {
        this.nameVal = "";
        this.emailVal = "";
        this.phoneVal = "";
        this.isbutTost = true;
        setTimeout(() => {
          self.isbutTost = false;
        }, 2000);
      }
    }
  }
};
</script>
<style scoped>
.butTost {
  position: absolute;
  top: 80px;
  width: 220px;
  height: 40px;
  border-radius: 4px;
  background-color: rgba(138, 171, 218, 1);
  z-index: 100000;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  left: calc(50% - 110px);
}
.fifthBoxTRCodeList > div:nth-child(1) {
  width: 90px;
  height: 90px;
}
.fifthBoxTRCodeList > div:nth-child(1) img {
  width: 90px;
  height: 90px;
}
.fifthBoxTRCodeListb {
  margin-left: 19px;
}
.fifthBoxTRCodeList > div:nth-child(2) {
  width: 90px;
  height: 20px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(38, 38, 38, 1);
  line-height: 20px;
  text-align: center;
  margin-top: 4px;
  overflow: hidden;
}
.fifthBoxTRCode {
  height: 110px;
  width: 200px;
  display: flex;
  margin-top: 19px;
}
.fifthBoxTR > div:nth-child(3) {
  height: 20px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(38, 38, 38, 1);
  line-height: 20px;
  margin-top: 24px;
}
.fifthBoxTR > div:nth-child(4) {
  height: 20px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(38, 38, 38, 1);
  line-height: 20px;
  margin-top: 16px;
}
.fifthBoxTR > div:nth-child(2) {
  width: 80px;
  height: 80px;
  background: rgba(138, 171, 218, 1);
  margin-top: 56px;
  border-radius: 50%;
}
.fifthBoxTR > div:nth-child(1) {
  height: 28px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(74, 87, 103, 1);
  line-height: 28px;
}
.fifthBoxTR {
  min-height: 372px;
  width: 217px;
  margin-left: 94px;
  overflow: hidden;
}
.fifthBoxTLIBut {
  width: 395px;
  height: 48px;
  background: rgba(138, 171, 218, 1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  margin-top: 59px;
  cursor: pointer;
}
.fifthBoxTLInputI {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(138, 171, 218, 1);
}

.fifthBoxTLInputP {
  width: 345px;
  height: 48px;
  overflow: hidden;
}
.fifthBoxTLInputP input {
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: rgba(74, 87, 103, 1);
  width: 330px;
  padding-left: 15px;
  overflow: hidden;
}
.fifthBoxTLTitle {
  width: 629px;
  height: 28px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(74, 87, 103, 1);
  line-height: 28px;
}
.fifthBoxTLInput {
  display: flex;
  width: 395px;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(215, 215, 215, 1);
  justify-content: space-between;
  overflow: hidden;
  margin-top: 24px;
}
.fifthBoxTLInputT {
  margin-top: 56px;
}
.fifthBoxTL {
  min-height: 372px;
  width: 629px;
  margin-right: 94px;
  overflow: hidden;
}

.fifthBoxT {
  width: 100%;
  height: calc(100% - 128px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fifthBoxB {
  height: 128px;
  background: rgba(64, 84, 109, 1);
  width: 100%;
  position: absolute;
  bottom: 0;
}

.fifthBox {
  user-select: none;
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>