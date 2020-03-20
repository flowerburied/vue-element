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
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>
<style  scoped>
/* 头部布局 */
.imgStyle{
  width: 100px;
}
.middle{
align-items: center;
}
.loginOut{
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