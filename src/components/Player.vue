<template>
  <div class="viewer">
    <!-- 遮罩层  屏幕中播放/暂停按钮 -->
    <div id="videoMask" class="videoMask">
      <div id="center-btn" class="center-btn">
        <img src="../assets/icon/play.svg" alt="" />
      </div>
    </div>
    <div id="container" ref="container" class="container">
      <video class="myVideo" src="../assets/football.mp4" />
      <!-- 底部控制区域 -->
      <div id="bottomBar" class="bottomBar">
        <!-- 播放/暂停按钮 -->
        <img
          id="playIcon"
          class="playIcon"
          src="../assets/icon/playerIcon/fdoi-play.svg"
          alt=""
        />

        <!-- 播放时长 -->
        <div id="progressTimer" class="timer">00:00</div>

        <!-- 进度条 -->
        <div id="progressBg" class="progressBg">
          <div id="progressBar" class="progressBar">
            <div id="bufferBar" class="bufferBar" data-index="0" />
          </div>
          <div class="point">
            <img
              style="width:11px"
              src="../assets/icon/soccerball_black.svg"
              alt=""
            />
          </div>
        </div>
        <!-- 视频总时长 -->
        <div id="durationTimer" class="timer">00:00</div>
        <!-- 放大按钮 -->
        <img
          style="height:18px;margin-right:9px;"
          src="../assets/icon/magnify.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
// import {panoViewer} from '@egjs/view360'
export default {
  data() {
    return {
      panoViewer: null,
      video: null
    };
  },
  created() {},
  mounted() {
    // const container = this.$refs.container
    // this.createPanoViewer(container)
  },
  methods: {
    // createPanoViewer(container) {
    //   const PanoViewer =eg.view360.PanoViewer
    //   console.log('pano',PanoViewer)
    //   const panoViewer = new PanoViewer(container, {
    //     video: '../assets/football.mp4',
    //     pitch: -20,
    //     yaw: -7,
    //     pitchRange: [-65, 25],
    //     yawRange: [-90, 90],
    //     fovRange: [30, 90],
    //     projectionType: 'fisheye',
    //     projectionConfig: {
    //       rotationOffset: {
    //         pitch: -20,
    //         roll: -4
    //       },
    //       fisheyeRadius: {
    //         x: 0.48,
    //         y: 0.85
    //       }
    //     }
    //   })
    //   this.video = panoViewer.getVideo()
    //   //panoViewer.on('ready', function(e) {})
    // }
  }
};
</script>
<style lang="scss" scoped>
.viewer {
  position: relative;
  width: 100%;
  video {
    position: absolute;
    //visibility: hidden;
  }
  canvas {
    width: 100%;
    height: 100%;
  }
}

.back-bar {
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  opacity: 90%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(255, 255, 255, 0)
  );
  color: white;
  z-index: 999;
  .back-border {
    width: 40%;
    img {
      width: 20px;
    }
  }
}

.videoMask {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  margin: auto;
  .center-btn {
    border-radius: 50%;
    width: 50px;
    z-index: 30;
    img {
      width: 100%;
    }
  }
}

.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  background-image: url("../assets/images/video_bg.png");
  background-size: 100%;
  .myVideo {
    width: 100%;
  }
  .bottomBar {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    opacity: 80%;
    background: linear-gradient(
      to bottom,
      rgba(200, 200, 200, 0),
      rgba(0, 0, 0, 1)
    );
    .playIcon {
      height: 40px;
    }
    .timer {
      color: white;
      font-size: 10px;
    }
    .progressBg {
      position: relative;
      width: 60%;
      height: 80%;
      display: flex;
      align-items: center;
      -webkit-overflow-scrolling: touch;
      .point {
        position: absolute;
        left: 48%;
        height: 11px;
        border-radius: 11px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .progressBar {
        min-width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 1px;
        overflow: hidden;
        .bufferBar {
          position: absolute;
          top: 0;
          width: 50%;
          height: 2px;
          display: inline-block;
          background-color: $main-color;
        }
      }
    }
  }
}

.panoviewer-control {
  top: 40px;
}
</style>
