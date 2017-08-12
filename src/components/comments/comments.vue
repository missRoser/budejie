<template>
  <div class="comments">
    <div class="comments-link" @click="goBack"><i class="iconfont icon-back"></i>返回</div>
    <div></div>
    <ul v-show="datanormal.length">
      <li v-for="data in datanormal">
        <div class="box_top">
          <img class="imgs" :src="data.user.profile_image">
          <div class="headers">{{data.user.room_name}}</div>
          <div class="timer">{{data.ctime}}</div>
        </div>
        <div class="box_bom">
          <div class="txts">{{data.content||'此版本无法显示该评论,请升级到最新版本'}}</div>
          <div><i class="icon-up"></i>{{data.like_count}}</div>
        </div>
      </li>
    </ul>
    <div class="hot">热门评论</div>
    <ul v-show="datahot.length">
      <li v-for="data in datahot">
        <div class="box_top">
          <img class="imgs" :src="data.user.profile_image">
          <div class="headers">{{data.user.room_name}}</div>
          <div class="timer">{{data.ctime}}</div>
        </div>
        <div class="box_bom">
          <div class="txts">{{data.content}}</div>
          <div><i class="icon-up"></i>{{data.like_count}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    data () {
        return {
          data: {
            params: this.$route.params
          },
          datahot: [],
          datanormal: []
        }
    },
    created() {
        var _this = this;
        _this.axios.get('http://localhost:8088/comment.json',{
          params: {
            id: this.data.params.id
          }
        }).then(function(reson){
          console.log(reson.data.hot.list);
          _this.datahot = reson.data.hot.list;
          _this.datanormal = reson.data.normal.list;
        });
    },
    methods: {
      goBack () {
        window.history.back();
      },
      handleScroll (event) {
        console.log(111);
      }
    },
    ready () {
      console.log(11111111111111111111111);
      window.addEventListener('scroll',this.handleScroll,false)
    },
    watch :{
      "$route" () {
        console.log(123);
      }
    }
}
</script>

<style lang="scss">
@import "../../common/sass/common.scss";

.comments{
  margin-top: 88px;
  background-color: #ececec;
  .comments-link{
    height: 42px;
    padding-left: 3%;
    border-bottom: 1px solid #eaeaea;
    line-height: 42px;
    color: #111;
    background-color: #fff;
  }
  ul{
    width: 100%;
    li{
      padding: 5px 3%;
      border-bottom: 1px solid #eaeaea;
      box-sizing: border-box;
      background-color: #fff;
      :last-child{
        border-bottom: none;
      }
      .box_top{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 13px;
        color: #898989;
        .imgs{
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
        .headers{
          margin-left: 5px;
        }
        .timer{
          margin-left: 5px;
        }
      }
      .box_bom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0 5px 33px;
        font-size: 13px;
        .txts{
          width: 80%;
          color: #111;
        }
        .icon-up{
          display: inline-block;
          height: 0;
          position: relative;
          overflow: visible;
          width: 16px;
          height: 16px;
          margin-right: 5px;
          &:before{
            width: 16px;
            height: 16px;
            @include icon_before('../../common/img/app.png');
            background-position: -18px -48px;
            margin-top: 1px;
          }
        }
      }
    }
    
  }
  .hot{
    height: 42px;
    padding-left: 20px;
    line-height: 42px;
    font-size: 14px;
  }
}
</style>
