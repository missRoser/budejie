<template>
  <div id="app" class="app">
    <div class="app-top">
      <div class="logo">
        <i class="icon_logo"></i>
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/alls">全部</router-link>
          </li>
          <li>
            <router-link to="/imgs">图片</router-link>
          </li>
          <li>
            <router-link to="/txts">段子</router-link>
          </li>
        </ul>
      </div>
      </div>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>

      <i class="icon-back" @click="backTop">返回</i>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      txt: {}
    }
  },
  methods: {
    backTop () {
      document.body.scrollTop = 0;
    }
  }
}
</script>

<style lang="scss">
@import "./common/sass/reset.scss";
@import "./common/sass/common.scss";
@import "./common/font/scss/font-awesome.scss";

.app-top{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
}
.logo{
  height: 44px;
  line-height: 44px;
  padding: 5px;
  box-sizing: border-box;
  border-color: #b30d37;
  background-color: #e21145;
  background-image: linear-gradient(0deg,#b30d37,#b30d37 50%,transparent 50%);
  .icon_logo{
    @include icon;
    width: 115px;
    height: 35px;
    margin-left: 10px;
    &:before{
      width: 115px;
      height: 35px;
      @include icon_before('./common/img/app.png');
      background-position: -15px -2px;
    }
  }
}
.nav{
  width: 100%;
  height: 44px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #444;
  clear: both;
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    li{
      flex: 1;
      height: 44px;
      text-align: center;
      line-height: 44px;
      a{
        display: block;
        font-size: 14px;
        color: #333;
        &.router-link-active{
          font-weight: 500;
          color: #e21145;
          box-shadow: inset 0 -2px 0 #e21145;
        }
      }
    }
  }
}
.icon-back{
  position: fixed;
  right: 10px;
  bottom: 20px;
}

</style>
