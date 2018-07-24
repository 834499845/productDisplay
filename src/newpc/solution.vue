<template>
  <div class="solutionBox">
    <vue-scroll ref="vs" :ops="ops" @handle-scroll="handleScroll">
      <ul>
        <li class="headLI"></li>
        <li class="solutionLI solutionLIO">
          <div>
            大数据驱动 融合业务场景定制化开发
          </div>
          <div>集成丰富的应用，结合企业需求进行定制化开发，支持通过SDK/API引入第三方数据，利用大数据驱动打造融合业务场景的一站式办公应用，为各行各业提供完美的移动办公方案。</div>
        </li>
        <li class="solutionLI solutionLIT solutionLITL">
          <div class="solutionLITLLeft">
            <div>医疗行业</div>
            <div>XX办公可通过场景化的智能管理和远程交互，以平台连接人和硬件、 业务和硬件，助力医疗健康企业往互联网+方向发展。</div>
          </div>
          <div class="solutionLITLRight">
            <img src="/static/img/解决方案－医疗行业.png" alt="">
          </div>
        </li>
        <li class="solutionLI solutionLIS solutionLITR">
          <div class="solutionLITRLeft">
            <img src="/static/img/解决方案－制造业.png" alt="">
          </div>
          <div class="solutionLITRRight">
            <div>制造行业</div>
            <div>XX办公帮助制造业企业实现业务处理移动化，全面掌控公司订单、采购、生产、库存、财务等环节，实时掌握企业经营情况及业绩趋势等。</div>
          </div>
        </li>
        <li class="solutionLI solutionLIF solutionLITL">
          <div class="solutionLITLLeft">
            <div>互联网行业</div>
            <div>XX办公通过云计算、大数据等技术，让互联网企业员工能从繁琐机械化的工作中解放出来，打造轻量化的工作模式和扁平化工作理念。</div>
          </div>
          <div class="solutionLITLRight">
            <img src="/static/img/解决方案－互联网行业.png" alt="">
          </div>
        </li>
        <li class="solutionLI solutionLIA solutionLITR">
          <div class="solutionLITRLeft">
            <img src="/static/img/解决方案－零售业.png" alt="">
          </div>
          <div class="solutionLITRRight">
            <div>新零售行业</div>
            <div>XX办公能通过API/SDK等方式，接入新零售企业的财务、客户、人力资源、供应链、市场营销等管理系统，真正做到一站式一体化移动办公。</div>
          </div>
        </li>
        <li class="solutionLI solutionLIQ">
          <ul>
            <li class="solutionLIQTitle">
              企业案例
            </li>
            <li class="solutionLIQLI" v-for="(item,index) in qLists" :key="index">
              <div>
                <img :src="item.img" alt="">
              </div>
              <div>
                <!-- {{item.name}} -->
              </div>
              <div>
                {{item.text}}
              </div>
            </li>
          </ul>
        </li>
        <li class="solutionLI solutionLIG">
          <fifth></fifth>
        </li>
      </ul>
    </vue-scroll>
    <div class="backTop" @click="backHomeCLick" v-show="isBackShow">
      <img src="/static/img/返回顶部.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import fifth from "./fifth";
import footer from "./footer";
export default {
  components: {
    "v-footer": footer,
    fifth
  },
  props: {
    hei: {}
  },
  data() {
    return {
      isBackShow: false,
      qLists: [
        {
          name: "BICON",
          img: "/static/img/必康logo.png",
          text:
            "XX办公为必康制药提供移动办公解决方案，满足了该企业对遍布全国各地子公司进行统一管理，提高母公司与子公司之间的流程审批和沟通效率，接入企业生产、销售、库存、客户管理等系统，管理人员可随时随地监控企业运营情况，并通过大数据分析，为企业管理及决策提供数据支撑。同时通过自主服务器安全部署及消息多重保护功能，保障企业内部资料文档及企业消息的安全性"
        }
      ],
      isBackShow: false,
      ops: {
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
    }
  }
};
</script>
<style scoped>
.solutionLITRRight {
  width: 503px;
  height: 320px;
  margin-left: 80px;
  overflow: hidden;
}
.solutionLITRRight > div:nth-child(1) {
  height: 50px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(68, 97, 133, 1);
  line-height: 50px;
  margin-top: 92px;
}
.solutionLITRRight > div:nth-child(2) {
  width: 500px;
  height: 78px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(92, 112, 135, 1);
  line-height: 26px;
  margin-top: 34px;
}

.solutionLITRLeft {
  width: 320px;
  height: 320px;
  overflow: hidden;
  margin-right: 80px;
}
.solutionLITLLeft {
  width: 563px;
  height: 320px;
  margin-right: 40px;
  overflow: hidden;
}
.solutionLITLLeft > div:nth-child(1) {
  height: 50px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(68, 97, 133, 1);
  line-height: 50px;
  margin-top: 81px;
}

.solutionLITLLeft > div:nth-child(2) {
  width: 563px;
  height: 52px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(92, 112, 135, 1);
  line-height: 26px;
  margin-top: 56px;
}
.solutionLITRLeft img,
.solutionLITLRight img {
  width: 100%;
  height: 100%;
}
.solutionLITLRight {
  height: 320px;
  width: 320px;
  margin-left: 40px;
  overflow: hidden;
}
.solutionLITR {
  display: flex;
  justify-content: center;
  align-items: center;
}
.solutionLITL {
  display: flex;
  justify-content: center;
  align-items: center;
}
.solutionLIO > div:nth-child(1) {
  height: 56px;
  font-size: 36px;
  font-family: MicrosoftYaHei;
  color: rgba(24, 56, 95, 1);
  line-height: 56px;
  width: 100%;
  text-align: center;
  margin-top: 140px;
}
.solutionLIO > div:nth-child(2) {
  width: 905px;
  height: 60px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(89, 118, 153, 1);
  line-height: 30px;
  margin: 0 auto;
  margin-top: 32px;
  text-align: center;
}

.solutionLIO {
  height: 500px;
  background: rgba(117, 202, 254, 0.9);
  overflow: hidden;
}
.solutionLIT {
  height: 560px;
  background: rgba(237, 247, 241, 1);
}
.solutionLIS {
  height: 560px;
  background: rgba(243, 251, 253, 1);
}
.solutionLIF {
  height: 560px;
  background: rgba(237, 247, 241, 1);
}
.solutionLIA {
  height: 560px;
  background: rgba(243, 251, 253, 1);
}
.solutionLIQLI > div:nth-child(1) {
  margin-left: 50px;
  overflow: hidden;
}

.solutionLIQLI > div:nth-child(2) {
  font-size: 18px;
  color: rgba(114, 113, 111, 1);
}

.solutionLIQLI > div:nth-child(3) {
  width: 817px;
  height: 98px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(110, 110, 110, 1);
  line-height: 24px;
  margin-left: 48px;
}

.solutionLIQLI {
  width: 1126px;
  height: 202px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 1px rgba(206, 211, 217, 0.6);
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 64px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.solutionLIQTitle {
  height: 193px;
  line-height: 193px;
  text-align: center;
  width: 100%;
  font-size: 56px;
  font-family: MicrosoftYaHei;
  color: rgba(68, 97, 133, 1);
}
.solutionLIQ {
  min-height: 459px;
  background: rgba(255, 255, 255, 1);
}
.solutionLIG {
  height: 800px;
  background: rgba(255, 255, 255, 1);
}
.solutionLI {
  min-height: 119px;
  width: 100%;
  overflow: hidden;
}
.headLI {
  height: 60px;
  width: 100%;
}
.footerLI {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 128px;
  left: 0;
}
.solutionBox {
  height: 100%;
  background: rgba(234, 235, 236, 1);
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
  justify-content: flex-end;
  z-index: 2000;
}
</style>