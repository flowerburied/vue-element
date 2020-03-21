<template>

  <el-container class="container">
    <el-header class="header">
      <el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img class="imgStyle" src="../../assets/timg.jpg" alt="无法显示图片">
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h3>后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a href="#" class="loginOut">退出</a>
          </div>
        </el-col>
      </el-col>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 侧边导航栏 -->
        <el-menu :unique-opened="true">
          <el-submenu index="1">

            <template slot="title">
              <i class="el-icon-location"></i>
              <span>分组一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">

            <template slot="title">
              <i class="el-icon-location"></i>
              <span>分组一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  data() {
    return {};
  },
  // newVue之前自动触发
  beforeCreate(){
const token =localStorage.getItem('token')
if(!token){
  this.$router.push({name:'login'})
}
  },

  mounted() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>
/* 头部布局 */
.imgStyle {
  width: 100px;
}
.middle {
  align-items: center;
}
.loginOut {
  line-height: 60px;
  text-decoration: none;
}
/* 大体布局 */
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  height: 100%;
  background-color: #e9eef3;
}
</style>