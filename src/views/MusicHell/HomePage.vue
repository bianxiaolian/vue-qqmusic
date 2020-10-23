<template>
  <div class="home-page">
    <div class="card recommended" >
      <div class="content">
        <h1>歌单推荐</h1>
        <!-- 推荐分类  @mouseover="overCardId=1" @mouseout="overCardId=null"-->
        <ul class="sub-title">
          <li
            v-for="(item, index) in recommendedCate"
            :key="index"
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
        <!-- 左箭头 -->
        <div class="slide-handle left-handle" @click="clickSlide" :class="{'left-handle-ani':overCardId===1}">
          <img src="../../assets/icon/back.svg" alt="" />
        </div>
        <!--歌单区域-->
        <div class="list-border">
          <ul
            class="play-list"
            :class="{
              'list-slide-left': slideToLeft === true,
              'list-slide-right': slideToLeft === false
            }"
          >
            <li
              v-for="(listItem, index) in recommendedList"
              :key="index"
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
        </div>
        <!-- 右箭头 -->
        <div class="slide-handle right-handle" @click="clickSlide">
          <img src="../../assets/icon/back.svg" alt="" />
        </div>
      </div>
      <!-- 圆点 -->
      <ul class="dot-bar">
        <li
          v-for="(item, index) in [0, 1]"
          :key="index"
          :style="{
            'background-color':
              slideToLeft && item === 0
                ? 'rgb(143, 143, 143)'
                : 'rgb(183, 183, 183)'
          }"
        ></li>
      </ul>
    </div>
    <div class="card new-song">
      <div class="content">
        <h1>新歌首发</h1>
        <ul class="sub-title">
          <li
            v-for="item in newCate"
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
        <div class="slide-handle left-handle" @click="clickSlide">
          <img src="../../assets/icon/back.svg" alt="" />
        </div>
        <!--    -->
        <div class="list-border">
          <ul
            class="play-list"
            :class="{
              'list-slide-left': slideToLeft === true,
              'list-slide-right': slideToLeft === false
            }"
          >
            <li
              v-for="(listItem, index) in newSongList"
              :key="index"
              class="list-item"
              :style="{
                'margin-right':
                  listItem.id != 0 && listItem.id % 4 == 0 ? '30px' : '10px'
              }"
            >
              <div class="cover">
                <img class="list-cover" :src="listItem.poster" alt="" />
                <i class="cover-mask"></i>
                <i class="play-btn" />
              </div>
              <div class="detail">
                <a>{{ listItem.name }}</a>
                <p class="count">{{ listItem.singer }}</p>
              </div>
              <div class="duration">{{ listItem.duration }}</div>
            </li>
          </ul>
        </div>
        <div class="slide-handle right-handle" @click="clickSlide">
          <img src="../../assets/icon/back.svg" alt="" />
        </div>
      </div>

      <ul class="dot-bar">
        <li
          v-for="(item, index) in [0, 1, 2]"
          :key="index"
          :style="{
            'background-color':
              slideToLeft && item === 0
                ? 'rgb(143, 143, 143)'
                : 'rgb(183, 183, 183)'
          }"
        ></li>
      </ul>
    </div>

    <div class="card excellent-recommend">
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
          coverSrc: require("../../assets/images/listCover8.jpg"),
          title: "耳熟能详民歌荟萃",
          playedCount: 4 * 10e5
        },
        {
          id: 9,
          coverSrc: require("../../assets/images/listCover9.jpg"),
          title: "探索中的秘密花园",
          playedCount: 5 * 10e5
        }
      ],
      selectedListId: 0,
      slideToLeft: null,
      newCate: [
        { id: 0, name: "最新" },
        { id: 1, name: "内地" },
        { id: 2, name: "港台" },
        { id: 3, name: "欧美" },
        { id: 4, name: "韩国" },
        { id: 5, name: "日本" }
      ],
      newSongList: [
        {
          id: 0,
          name: "positions",
          singer: "Ariana Grande",
          duration: "02:52",
          poster: require("../../assets/images/listCover.jpg")
        },
        {
          id: 1,
          name: "纸上飞行",
          singer: "刘宇宁",
          duration: "02:41",
          poster: require("../../assets/images/listCover1.jpg")
        },
        {
          id: 2,
          name: "说好的再见",
          singer: "彭昱畅/张婧仪",
          duration: "03:52",
          poster: require("../../assets/images/listCover.jpg")
        }
      ],
      overCardId:1
    };
  },
  created() {
    this.getVirtualData();
  },
  methods: {
    getVirtualData() {
      let { recommendedList, newSongList } = this;
      recommendedList.unshift(...recommendedList.slice(5, 10));
      recommendedList.push(...recommendedList.slice(5, 10));
      recommendedList.forEach((item, index) => {
        recommendedList[index].id = index;
      });
      this.recommendedList = recommendedList;

      for (let i = 0; i < 8; i++) {
        newSongList = newSongList.concat(this.newSongList);
      }
      for (let i = 0; i < newSongList.length; i++) {
        newSongList[i].id = i;
      }
      this.newSongList = newSongList;
    },
    clickSlide() {
      this.slideToLeft = !this.slideToLeft;
    }
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    font-size: 14px;
  }
  ul {
    margin: 8px 0;
    li {
      display: inline-block;
    }
  }

  .sub-title {
    height: 30px;
    li {
      display: inline-block;
      padding: 0 25px;
      a {
        font-size: 15px;
      }
    }
  }
  h1 {
    letter-spacing: 20px;
  }

  .card {
    position: relative;
    margin: 0 auto;
    width: 100%;
    background: linear-gradient(#eee, #fff);
    .content {
      max-width: $max-width + 50px;
      min-width: $min-width;
      margin: 0 auto;
      padding: 10px 50px 0 50px;

      display: flex;
      flex-direction: column;
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
      //transition: opacity 1s, left 1s;
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
      right: -80px;
      transition: opacity 1s, right 1s;
    }

    .list-border {
      position: relative;
      width: 100%;
      min-height: 300px;
      overflow: hidden;
      .play-list {
        position: absolute;
        top: 0;
        padding: 0 20px;
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: row;
        .list-item {
          width: 18.5%;
          flex-shrink: 0;
          margin: 0 10px;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          .cover {
            position: relative;
            width: 100%;
            overflow: hidden;
            cursor: pointer;
          }
          .list-cover {
            width: 100%;
            height: 100%;
            transition: transform 1s;
          }
          .cover:hover .list-cover {
            transform: scale(1.1);
          }
          .cover-mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0;
            transition: opacity 1s;
          }

          .cover:hover .cover-mask {
            opacity: 0.5;
          }

          .play-btn {
            position: absolute;
            top: 31%;
            left: 31%;
            width: 38%;
            height: 38%;
            border-radius: 50%;
            background-color: #fff;
            opacity: 0;
            transform: scale(0.6);
            transition: opacity 1s, transform 1s;
          }

          .play-btn::after {
            content: "";
            position: absolute;
            top: 30%;
            left: 40%;
            width: 0;
            height: 0;
            border: 12px solid transparent;
            border-left: 20px solid rgb(83, 83, 83);
          }

          .cover:hover .play-btn {
            transform: scale(1);
            opacity: 1;
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
    }
    .dot-bar {
      width: 100%;
      height: 65px;
      margin: 0;
      padding: 0;
      min-width: $min-width;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: rgb(248, 248, 248);
      li {
        margin: 0 10px;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: rgb(184, 183, 183);
      }
    }
  }

  .new-song {
    .list-border {
      min-height: 340px;
      .play-list {
        flex-wrap: wrap;
        .list-item {
          margin: 10px;
          width: 28%;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .cover {
            width: 35%;
          }
          .play-btn::after {
            border: 6px solid transparent;
            border-left: 10px solid rgb(83, 83, 83);
          }
          .detail {
            margin-left: -10%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .duration{
            font-size:14px;
            color:#a7a7a7;
          }
        }
      }
    }
  }

 .left-handle-ani {
   transition: opacity 1s, left 1s;
    opacity: 1;
    left: 0;
  }

  .recommended:hover .right-handle {
    opacity: 1;
    right: 0;
  }

  .list-slide-left {
    animation: list_slide_left 1s 1;
    left: -100%;
  }
  @keyframes list_slide_left {
    from {
      left: 0;
    }
    to {
      left: -100%;
    }
  }
  .list-slide-right {
    animation: list_slide_right 1s 1;
    left: 0;
  }
  @keyframes list_slide_right {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }
}
</style>
