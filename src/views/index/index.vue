<template>
  <div id="index">
    <headers style="position:fixed"></headers>
    <div class="body">
      <div class="text">
        <span>猜你喜欢</span>
        <div @click="channgePic">
          <div :class="['switch',switchPic?'':'switch-color']">
            <div :class="['circular',switchPic?'':'switch-circular']"></div>
          </div>
          <span>自动播放</span>
        </div>
      </div>
      <!-- 轮播图 -->
      <rotation :imgArray="arr" :switchPic="switchPic" class="center" />

    </div>
  </div>
</template>

<script>
import headers from "@/components/headers";
import rotation from "./component/rotation";
import index1 from "@/assets/index.jpg";
import index2 from "@/assets/index2.jpg";
import index3 from "@/assets/index3.jpg";

export default {
  data() {
    return {
      arr: [index1, index2, index3],
      switchPic: true,
    };
  },
  components: {
    headers,
    rotation,
  },
  methods: {
    channgePic() {
      this.switchPic = !this.switchPic;
    },
  },
};
</script>

<style lang="scss" scoped>
.switch-color {
  background: #d6d6d6 !important;
}

.switch-circular {
  background: #fff !important;
  right: 27px !important;
}

.center {
  margin: 0 auto;
}

.body {
  padding-top: 56px;
  width: 1032px;
  margin: 0 auto;
  .text {
    display: flex;
    padding-left: 6px;
    width: 100%;
    height: 66px;
    align-items: center;
    justify-content: space-between;
    div {
      cursor: pointer;
      width: 130px;
      display: flex;
      align-self: center;
      justify-content: space-between;
      .switch {
        position: relative;
        width: 48px;
        height: 24px;
        border-radius: 15px;
        background-color: #a9a9b3;
        transition: all 0.3s;
        .circular {
          top: 3px;
          right: 4px;
          position: absolute;
          width: 18px;
          height: 18px;
          background-color: black;
          border-radius: 50%;
          transition: all 0.3s;
        }
      }
      span {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    span {
      font-size: 1.25rem;
      line-height: 66px;
    }
  }
}
</style>