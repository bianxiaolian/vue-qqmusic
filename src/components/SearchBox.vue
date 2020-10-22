<template>
  <div class="search-box">
    <input
      class="search-input"
      :style="{ 'min-width': showSearch ? '220px' : '35px' }"
      :class="{ 'box':showSearch===false}"
      type="text"
      placeholder="搜索音乐、MV、歌单、用户"
    />
    <span class="icon-box"> <img src="../assets/icon/search.svg" alt=""/></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSearch: true
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
      if (window.innerWidth < 1100) {
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
    border-radius: 3px;
    border-left: 1px solid #ccc;
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
.box{
  min-width:35px;
}
.box:hover {
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
</style>
