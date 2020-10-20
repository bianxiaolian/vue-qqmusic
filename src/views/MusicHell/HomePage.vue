<template>
  <div class="home-page">
    <div class="recommended">
      <div class="content">
        <h1>歌单推荐</h1>
        <ul class="sub-title">
          <li
            v-for="item in recommendedCate"
            :key="item.id"
            @click="selectedListId = item.id"
          >
            <a
              href=""
              :style="{
                color: selectedListId === item.id ? '#31c27c' : ''
              }"
              @click.prevent
              >{{ item.name }}</a
            >
          </li>
        </ul>
        <div class="slide-handle left-handle" @click="slideList(true)">
          <img src="../../assets/icon/back.svg" alt="" />
        </div>
        <ul class="play-list">
          <li
            v-for="listItem in recommendedList"
            :key="listItem.id"
            class="list-item"
            :style="{
              'margin-right':
                listItem.id != 0 && listItem.id % 4 == 0 ? '30px' : '10px'
            }"
          >
            <div class="cover">
              <img class="list-cover" :src="listItem.coverSrc" alt="" />
              <i class="cover-mask"></i>
              <i class="play-btn" />
            </div>
            <a>{{ listItem.title }}</a>
            <p class="count">播放量：{{ listItem.playedCount / 10000 }}万</p>
          </li>
        </ul>
        <div class="slide-handle right-handle" @click="slideList(false)">
          <img src="../../assets/icon/back.svg" alt="" />
        </div>
      </div>
      <ul class="dot-bar">
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="recommended new-song">
      <h1>新歌首发</h1>
      <ul class="sub-title">
        <li>最新</li>
      </ul>
      <ul class="song-list">
        <li>
          <img src="" alt="" />
          <div class="introduce">
            <p>千百度</p>
            <p>张靓颖</p>
          </div>
          <span>04:01</span>
        </li>
      </ul>
    </div>
    <div class="excellent-recommend">
      <h1>精彩推荐</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommendedCate: [
        { id: 0, name: "为你推荐" },
        { id: 1, name: "轻音乐" },
        { id: 2, name: "背景音乐" },
        { id: 3, name: "九月推荐" },
        { id: 4, name: "官方歌单" },
        { id: 5, name: "情歌" }
      ],
      recommendedList: [
        {
          id: 0,
          coverSrc: require("../../assets/images/listCover.jpg"),
          title: "华语Live | 动听歌喉，实力演绎",
          playedCount: 7 * 10e5
        },
        {
          id: 1,
          coverSrc: require("../../assets/images/listCover1.jpg"),
          title: "怀旧流行 都是青春的回忆啊",
          playedCount: 3 * 10e5
        },
        {
          id: 2,
          coverSrc: require("../../assets/images/listCover2.jpg"),
          title: "欧美：前奏不够听，高潮high起",
          playedCount: 5 * 10e6
        },
        {
          id: 3,
          coverSrc: require("../../assets/images/listCover3.jpg"),
          title: "1996年度国语流行精选",
          playedCount: 7 * 10e5
        },
        {
          id: 4,
          coverSrc: require("../../assets/images/listCover4.jpg"),
          title: "歌声里的古老时光",
          playedCount: 7 * 10e5
        },
        {
          id: 5,
          coverSrc: require("../../assets/images/listCover5.jpg"),
          title: "耳熟能详民歌荟萃",
          playedCount: 7 * 10e5
        },
        {
          id: 6,
          coverSrc: require("../../assets/images/listCover6.jpg"),
          title: "探索中的秘密花园",
          playedCount: 7 * 10e5
        },
        {
          id: 7,
          coverSrc: require("../../assets/images/listCover7.jpg"),
          title: "生活中的止疼药",
          playedCount: 7 * 10e5
        },
        {
          id: 8,
          coverSrc: require("../../assets/images/listCover5.jpg"),
          title: "耳熟能详民歌荟萃",
          playedCount: 4 * 10e5
        },
        {
          id: 9,
          coverSrc: require("../../assets/images/listCover6.jpg"),
          title: "探索中的秘密花园",
          playedCount: 5 * 10e5
        }
      ],
      selectedListId: 0,
      slideToLeft: true
    };
  },
  methods: {
    slideList(toLeft) {
      this.slideToLeft = toLeft;
    }
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    font-size: 14px;
  }
  li {
    display: inline-block;
  }
  .sub-title {
    height: 30px;
    li {
      display: inline-block;
      padding: 0 25px;
    }
  }
  h1 {
    letter-spacing: 20px;
  }

  .recommended {
    position: relative;
   padding:0;
    background: linear-gradient(#eee, #fff);
    .content {
      max-width: $max-width + 50px;
      min-width: $min-width;
      margin: 0 auto;
      padding-top: 10px;
    }
    .slide-handle {
      position: absolute;

      top: 40%;
      width: 80px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      opacity: 0;
      cursor: pointer;
      img {
        width: 50%;
        opacity: 0.8;
      }
    }
    .left-handle::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 80px;
      height: 100px;
      background-color: #000;
      opacity: 0.1;
    }
    .left-handle {
      left: -80px;
    }

    .right-handle::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 80px;
      height: 100px;
      background-color: #000;
      opacity: 0.1;
    }
    .right-handle {
      transform: scaleX(-1);
      right: 0;
    }

    //列表向左滑动
    .left-slide {
      animation: left_slide_ani 2s 1;
    }
    @keyframes left_slide_ani {
      from {
        left: 0;
      }
      from {
        left: -100%;
      }
    }

    .play-list {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      .list-item {
        width: 18.5%;
        flex-shrink: 0;

        margin: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        .cover {
          position: relative;
          width: 100%;
          overflow: hidden;
          cursor: pointer;
        }
        .list-cover {
          width: 100%;
          height: 100%;
        }
        .cover:hover .list-cover {
          transform: scale(1.1);
          animation: cover_ani 1s 1;
          //animation: cover_ani2 1s 1;
        }
        @keyframes cover_ani {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        @keyframes cover_ani2 {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        .cover-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0;
        }

        .cover:hover .cover-mask {
          animation: cover_mask 1s 1;
          opacity: 0.5;
        }
        @keyframes cover_mask {
          from {
            opacity: 0.1;
          }
          to {
            opacity: 0.5;
          }
        }
        .play-btn {
          position: absolute;
          top: 35%;
          left: 35%;
          //transform: translate(-30px, -30px);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          opacity: 0;
          background-color: #fff;
        }

        .play-btn::after {
          content: "";
          position: absolute;
          top: 18px;
          left: 24px;
          width: 0;
          height: 0;
          border: 12px solid transparent;
          border-left: 20px solid rgb(83, 83, 83);
        }

        .cover:hover .play-btn {
          opacity: 1;
       
          animation: c_icon 1s 1;
           //transform-origin:left;
        }
        @keyframes c_icon {
          from {
            transform: scale(0.6);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        a {
          margin-top: 12px;
          text-align: left;
        }
        .count {
          margin-top: 5px;
          color: gray;
          font-size: 14px;
        }
      }
    }
    .dot-bar {
      width: 100%;
      height: 60px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: rgb(247, 247, 247);
      li {
        margin: 0 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgb(184, 183, 183);
      }
    }
  }

  .recommended:hover .left-handle {
    left: 0;
    opacity: 1;
    animation: handle_left_slide 1s 1;
  }
  @keyframes handle_left_slide {
    from {
      opacity: 0;
      left: -80px;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }

  .recommended:hover .right-handle {
    right: 0;
    opacity: 1;
    animation: handle_right_slide 1s 1;
  }
  @keyframes handle_right_slide {
    from {
      opacity: 0;
      right: -80px;
    }
    to {
      opacity: 1;
      right: 0;
    }
  }
}
</style>
