<template>
  <div
    class="search-box"
    :class="{ 'box-show': showSearch, 'box-hidden': showSearch === false }"
  >
    <!--:style="{ 'min-width': showSearch ? '220px' : '35px' }"   -->
    <input
      class="search-input"
      type="text"
      placeholder="搜索音乐、MV、歌单、用户"
    />
    <span class="icon-box"> <img :src="searchIconSrc" @mouseover="searchIconSrc=require('../assets/icon/search_green.svg')" @mouseout="searchIconSrc=require('../assets/icon/search.svg')" alt=""/></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSearch: null,
      searchIconSrc:require('../assets/icon/search.svg')
    };
  },
  created() {
    this.show();
  },
  mounted() {
    window.onresize = () => {
      this.show();
    };
  },
  methods: {
    show() {
      //console.log(window.innerWidth)
      if (window.innerWidth < 1000) {
        this.showSearch = false;
      } else {
        this.showSearch = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  position: absolute;
  right: 10px;
  height: 36px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  overflow: hidden;
  .search-input {
    position: absolute;
    top: 0;
    right: 35px;
    outline: none;
    background: transparent;
    border: none;
    height: 100%;
    z-index: 1;
  }
  .icon-box {
    cursor: pointer;
    z-index: 2;
    margin-right: 0;
    width: 35px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 20px;
    }
  }
}

.box-show {
  animation: box_show 1s 1;
  min-width: 220px;
}
@keyframes box_show {
  from {
    min-width: 35px;
  }
  to {
    min-width: 220px;
  }
}
.box-hidden {
  animation: box_hidden 1s 1;
  min-width: 35px;
}
@keyframes box_hidden {
  from {
    min-width: 220px;
  }
  to {
    min-width: 35px;
  }
}

.box-hidden:hover {
  animation: box_show 1s 1;
  min-width: 220px;
}
</style>
