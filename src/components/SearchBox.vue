<template>
  <div class="search-box">
      <input class="search-input" type="text" placeholder="搜索音乐、MV、歌单、用户">
      <span class="icon-box">
      <img src="../assets/icon/search.svg" alt=""></span>
  </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>

<style lang="scss" scoped>
.search-box{
    min-width:220px;
    height: 36px;
    border:1px solid #ccc;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    overflow: hidden;
    .search-input{
        outline:none;
         background:transparent;
        border:none;
        height: 100%;
    }
    .icon-box{
        margin-right: 0;
        width:35px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
        width: 20px;
    }
    }
    
}
</style>
