<template>
  <div class="layout">
    <div class="bg">
      <vue-particles
        color="#777777"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#bebebe"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
    <div class="header">
      <p>
        <span>
          <b>慢节奏</b>
          小菜的个人博客
        </span>
      </p>
      <div class="menu">
        <div>
          <el-menu
            :default-active="$route.path"
            :router="true"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#d56464">
            <el-menu-item index="/layout/home">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">技术杂谈</template>
              <el-menu-item index="/layout/technique/1">html/js/css</el-menu-item>
              <el-menu-item index="/layout/technique/2">java</el-menu-item>
              <el-menu-item index="/layout/technique/3">python</el-menu-item>
              <el-menu-item index="/layout/technique/4">资源</el-menu-item>
            </el-submenu>
            <el-menu-item index="/layout/lifeNotes">记录笔记</el-menu-item>
            <el-menu-item index="/layout/my">关于自己</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="bottom">
      <p>慢节奏 版权所有者：caiheping（小菜）</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
  .layout{
    background: #eee;
    overflow: auto;
    .bg{
      position: fixed;
      height: calc(100vh);
      width: calc(100vw);
      div{
        width: 100%;
        height: 100%;
      }
    }
    .header{
      background: none repeat scroll 0 0 rgba(213,100,100,1);
      position: relative;
      p{
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        &:hover{
          letter-spacing: 5px;
          b{
            letter-spacing: 10px;
          }
        }
        span{
          line-height: 30px;
          position: relative;
          color: #fff;
          font-weight: 400;
          font-size: 24px;
          text-shadow: 0 0 1px rgba(94,255,216,.8);
          margin-left: 5px;
          letter-spacing: 1px;
          padding: 0;
          z-index: 2;
          transition: all .5s ease-out;
          b{
            letter-spacing: 2px;
            color: #fff;
            font-size: 54px;
            transition: all .5s ease-out;
            font-weight: normal;
          }
        }
      }
      .menu{
        background-color: rgb(84, 92, 100);
        div{
          max-width: 1226px;
          margin: 0 auto;
          .el-menu.el-menu--horizontal{
            border-bottom: none;
          }
        }
      }
    }
    .container{
      max-width: 1226px;
      margin: 20px auto;
      text-align: left;
      position: relative;
      box-sizing: border-box;
      min-height: calc(100vh - 260px);
    }
    .bottom{
      background: #333;
      position: relative;
      p{
        font-size: 14px;
        color: #ccc;
        line-height: 40px;
        text-align: center;
      }
    }
  }
</style>
