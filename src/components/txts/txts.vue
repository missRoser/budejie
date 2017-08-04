<template>
  <div class="alls">
  	<div class="alls-step" v-for="dataList in data">
		<div class="title">
			<img class="imgs" :src="dataList.u.header[0]" >
			<span class="txt">{{dataList.u.name}}</span>
		</div>
		<div class="tip">{{dataList.text}}</div>

      <div class="tool">
        <span class="comment"><i class="icon-comment"></i>{{dataList.comment}}</span>
        <span class="up"><i class="icon-up"></i>{{dataList.up}}</span>
        <span class="down"><i class="icon-down"></i>{{dataList.down}}</span>
        <span class="forward"><i class="icon-forward"></i>{{dataList.forward}}</span>
      </div>
  	</div>

    <div class="next-btn" @click="next">next page</div>
    <transition name="up">
      <div id="loader" class="up-transition" v-show="!finish">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
        <span class="loader_span">Loading</span>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  	data () {
  		return {
  			data: {},
        limit: 20,
        page: 1,
        np: 0,
        finish: true
  		}
  	},
  	created () {
	    var _this = this;
      _this.finish = false;
	    if(!_this.data.length){
		    _this.axios.get('http://localhost:8088/txts.json').then(function(reson){
		        console.log(reson.list);
            _this.finish = true;
		        _this.data = reson.data.list;
            _this.page++;
            _this.np = reson.data.info.np;
		    });
	    }
  	},
    methods: {
      next () {
        var _this = this;
        _this.finish = false;
        this.axios.get('http://localhost:8088/txts.json',{
          params: {
            np: _this.np
          }
        }).then(function(reson){
          _this.finish = true;
          _this.data = _this.data.concat(reson.data.list);
          _this.page++;
          _this.np = reson.data.info.np;
        })
      }
    },
  	computed: {
  		getAllList: function() {
  			this.axios.get('http://localhost:8088/txts.json').then(function(reson){
  				_this.data = reson.data.list.concat(_this.data);
  			})
  		}
  	}
}
</script>

<style lang="scss">
@import "../../common/sass/common.scss";

.alls{
  margin-top: 88px;
  background-color: #ececec;
}
.alls-step{
  padding: 0 3%;
  margin-bottom: 10px;
  background-color: #fff;
  &:last-child{
  	margin-bottom: 0;
  }
  .title{
    padding-top: 10px;
    @include dis_flexS;
    .imgs{
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .txt{
      width: 80%;
      @include esp;
      margin-left: 10px;
      color: #898989;
      font-size: 13px;
    }
  }
  .tip{
    margin: 5px 0;
    color: #111;
    font-size: 15px;
  }
  .tool{
    @include dis_flexC;
    padding: 10px 0;
    font-size: 13px;
    color: #666;
    .icon-comment{
      @include icon;
      width: 16px;
      height: 16px;
      margin-right: 5px;
      &:before{
        width: 16px;
        height: 16px;
        @include icon_before('../../common/img/app.png');
        background-position: -118px -48px;
        margin-top: 1px;
      }
    }
    .icon-up{
      @include icon;
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
    .icon-down{
      @include icon;
      width: 16px;
      height: 16px;
      margin-right: 5px;
      &:before{
        width: 16px;
        height: 16px;
        @include icon_before('../../common/img/app.png');
        background-position: -50px -48px;
        margin-top: 1px;
      }
    }
    .icon-forward{
      @include icon;
      width: 16px;
      height: 16px;
      margin-right: 5px;
      &:before{
        width: 16px;
        height: 16px;
        @include icon_before('../../common/img/app.png');
        background-position: -85px -48px;
        margin-top: 1px;
      }
    }
  }
}
.next-btn{
  width: 100%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #fff;
  background-color: #111;
}
.loader_span{
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
}
.up-transition,.up-enter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}
.up-enter-active {
  animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
  bottom: auto;
  top: 0;
}
.up-leave-active {
  animation: collapse 1s 1 cubic-bezier(0, 1, 0, 1) both;
  top: auto;
  bottom: 0;
}
@keyframes expand {
  0% {
    height: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    height: 100%;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes collapse {
  0% {
    height: 100%;
    transform: translate3d(0, 0, 0);
  }
  100% {
    height: 0;
    transform: translate3d(0, 0, 0);
  }
}

.spinner {
  width: 60px;
  height: 60px;
  position: relative;
  margin: 100px auto 10px;
}
 
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #67CF22;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
   
  -webkit-animation: bounce 2.0s infinite ease-in-out;
  animation: bounce 2.0s infinite ease-in-out;
}
 
.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
@-webkit-keyframes bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}
 
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
