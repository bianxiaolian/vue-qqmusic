<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-part">
          <div class="logo">
            <img src="./assets/images/logo.png" alt="" />
          </div>
          <div class="nav-area">
            <div
              class="nav-option"
              v-for="item in navOption"
              :key="item.id"
              :class="[selectedNav === item.id ? 'isSelected' : 'notSelected']"
              @click="selectedNav = item.id"
            >
              <a href="" @click.prevent>{{ item.title }} </a>
            </div>
          </div>
        </div>
        <div class="nav-part" style="position:relative;flex:1">
          <SearchBox></SearchBox>
        </div>
        <div class="nav-part">
          <div class="login"><a href="" @click.prevent>登录</a></div>
          <!--vip通道-->
          <div
            class="open-to-pay"
            @mouseover="isOverVip = true"
            @mouseleave="isOverVip = false"
          >
            <div class="open-vip">
              <a href="" @click.prevent>开通VIP</a>
              <div
                class="triangle"
                :class="{
                  'triangle-top': !isOverVip,
                  'triangle-bottom': isOverVip
                }"
              ></div>
            </div>

            <div
              :style="{ display: isOverVip ? 'block' : 'none' }"
              style="top: 40px"
              class="other-pay"
            >
              <a href="" @click.prevent>开通绿钻豪华版</a>
            </div>

            <div
              :style="{ display: isOverVip ? 'block' : 'none' }"
              class="other-pay open-paid"
            >
              <a href="" @click.prevent>开通付费包</a>
            </div>
          </div>
          <!-- 充值通道 -->
          <div
            class="open-to-pay pay-money"
            @mouseover="isOverPay = true"
            @mouseleave="isOverPay = false"
          >
            <div class="open-vip">
              <a href="" @click.prevent>充值</a>
              <div class="triangle triangle-top"></div>
            </div>

            <div
              :style="{ display: isOverPay ? 'block' : 'none' }"
              style="top: 40px"
              class="other-pay"
            >
              <!--  -->
              <a href="" @click.prevent>购买乐币</a>
            </div>

            <div
              :style="{ display: isOverPay ? 'block' : 'none' }"
              class="other-pay open-paid"
            >
              <a href="" @click.prevent>充值饭票</a>
            </div>
          </div>
        </div>
        <!-- <router-link to="/">Flat</router-link>  -->
      </nav>
      <div class="sub-nav">
        <div
          class="detail-option"
          v-for="item in subNavOption"
          :key="item.id"
          @click="selectedSubNav = item.id"
        >
          <a
            :style="{
              color: selectedSubNav === item.id ? '#31c27c' : ''
            }"
            href=""
            @click.prevent
          >
            {{ item.title }}</a
          >
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>
<script>
import SearchBox from "./components/SearchBox";
export default {
  components: {
    SearchBox: SearchBox
  },
  data() {
    return {
      navOption: [
        { id: 0, title: "音乐馆" },
        { id: 1, title: "我的音乐" },
        { id: 2, title: "客户端" },
        { id: 3, title: "开放平台" },
        { id: 4, title: "VIP" }
      ],
      selectedNav: 0,
      isOverVip: false,
      isOverPay: false,
      selectedSubNav: 0,
      subNavOption: [
        { id: 0, title: "首页" },
        { id: 1, title: "歌手" },
        { id: 2, title: "新碟" },
        { id: 3, title: "排行榜" },
        { id: 4, title: "分类歌单" },
        { id: 5, title: "电台" },
        { id: 6, title: "MV" },
        { id: 7, title: "数字专辑" },
        { id: 8, title: "票务" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

header {
  margin: 0 50px;
}
nav {
  position: relative;
  margin: 0 auto;
  height: 90px;
  max-width: $max-width;
  min-width: $min-width;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  .logo {
    margin-right: 30px;
  }
  .nav-part {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .nav-area {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    .nav-option {
      cursor: pointer;
      position: relative;
      min-width: 90px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-option:nth-child(3)::before {
      content: "";
      position: absolute;
      top: 20px;
      right: 0;
      width: 37px;
      height: 14px;
      border-radius: 1px;
      background-color: rgb(223, 189, 126);
    }
    .nav-option:nth-child(3)::after {
      content: "抢特权";
      position: absolute;
      top: 20px;
      right: 0;
      width: 37px;
      height: 14px;
      font-size: 8px;
      color: rgb(138, 103, 38);
      -webkit-transform: scale(0.72);
    }
    .isSelected {
      background-color: $main-color;
      a {
        color: #ffffff;
      }
      color: #ffffff;
    }
    .notSelected {
      color: #000000;
    }
  }
  .login {
    min-width: 50px;
    font-size: 16px;
  }
  .open-to-pay {
    cursor: pointer;
    position: relative;
    top: 43%;
    min-width: 120px;
    height: 120px;
    font-size: 13px;
    border-radius: 4px;
    overflow: hidden;
    div {
      position: absolute;
      width: 120px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .open-vip {
      top: 0;
      border-radius: 4px;
      background-color: $main-color;

      a {
        color: #fff;
      }
      .triangle {
        position: absolute;
        right: 10px;
        width: 0;
        height: 0;
        border: 4px solid transparent;
      }
      .triangle-top {
        top: calc(50% - 2px);
        border-top: 5px solid #fff;
      }
      .triangle-bottom {
        top: 35%;
        border-bottom: 5px solid #fff;
      }
    }
    .other-pay {
      top: 35px;
      border: 1px solid#c9c9c9;
      border-top: 1px solid transparent;
      z-index: 99;
      a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        color: #000;
        z-index: 99;
      }
      a:hover {
        background-color: $main-color;
        color: #fff;
      }
    }
    .open-paid {
      top: 80px;
      border-radius: 0 0 4px 4px;
    }
  }

  .pay-money {
    cursor: pointer;
    margin-left: 10px;
    div {
      width: 83px;
    }
    .open-vip {
      border: 1px solid #ccc;
      background-color: #fff;
      a {
        color: #000;
      }

      .triangle-top {
        border-top: 5px solid #000;
      }
      // .triangle-bottom{
      //   border-bottom:5px solid #fff;
      // }
    }
    .open-vip:hover {
      background-color: $main-color;
      a {
        color: #fff;
      }
      .triangle-top {
        top: 35%;
        border-top: 5px solid transparent;
        border-bottom: 5px solid #fff;
      }
    }
  }
}

.sub-nav {
  margin: 0 auto;
  padding-left: 230px;
  padding-right: 20px;
  max-width: $max-width;
  min-width: $min-width;
  height: 52px;
  min-height: 52px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .detail-option {
    margin: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}

</style>
