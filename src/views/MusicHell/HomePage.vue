<template>
  <div class="home-page">
    <div class="playlist-recommended">
      <h1>歌单推荐</h1>
      <ul class="sub-title">
        <li
          v-for="item in playList"
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
      <div class="slider">
        <img src="../../assets/icon/back.svg" alt="" />
      </div>
      <ul class="play-list">
        <li class="list-item">
          <div class="cover">
            <img
              class="list-cover"
              src="../../assets/images/listCover.jpg"
              alt=""
            />
            <i class="cover-mask"></i>
            <i class="play-btn" />
          </div>
          <a>华语Live | 动听歌喉，实力演绎</a>
          <p class="count">播放量：7000万</p>
        </li>
      </ul>
      <div class="dot-bar"></div>
    </div>
    <div class="playlist-recommended new-song">
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
      playList: [
        { id: 0, name: "为你推荐" },
        { id: 1, name: "轻音乐" },
        { id: 2, name: "背景音乐" },
        { id: 3, name: "九月推荐" },
        { id: 4, name: "官方歌单" },
        { id: 5, name: "情歌" }
      ],
      selectedListId: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  min-width: $min-width;
  a {
    font-size: 14px;
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
   .playlist-recommended:hover .slider {
      left: 0;
      opacity: 1;
      animation: slide 1s 1;
    }
    @keyframes slide {
      from {
        opacity: 0;
        left: -80px;
      }
      to {
        opacity: 1;
        left: 0;
      }
    }

  .playlist-recommended {
    position: relative;
    height: 400px;
    padding-top: 10px;
    background-color: $bg-dark;

    .slider::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 80px;
      height: 100px;
      background-color: #000;
      opacity: 0.1;
    }
    .slider {
      position: absolute;
      left: -80px;
      top: 45%;
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
   
    .list-item {
      width: 164px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      .cover {
        position: relative;
        width: 164px;
        height: 164px;
        overflow: hidden;
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
        top: 52px;
        left: 52px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        opacity: 0;
        background-color: #fff;
      }
      .cover:hover .play-btn {
        width: 60px;
        height: 60px;
        opacity: 1;
        animation: c_icon 1s 1;
      }
      .play-btn::after {
        content: "";
        position: absolute;
        left: 37%;
        bottom: 27%;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-left: 20px solid rgb(83, 83, 83);
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
}
</style>
