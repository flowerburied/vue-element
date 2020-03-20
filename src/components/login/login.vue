<template>
  <div class="login-wrap">
    <el-form class="login-form" :label-position="labelPosition" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="getlogin">登录</el-button>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formdata: {
        username: "ewqwe",
        password: "wq w"
      }
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      let option = {
        page: 1,
        page_size: 20,
        status: 1
      };
      this.api.shop.shoplist(option).then(res => {
        console.log(res);
      });
    },
    getlogin() {
      console.log("跳转");

      let option = {
        name: "qwer",
        password: "123456"
      };
      this.api.user.login(option).then(res => {
        console.log(res);
        if (res.code == 1) {
          // this.$router.push({ name: "home" });
          this.$message({
            message: "登录成功",
            type: "success"
          });
        }
      });
    }
  }
};
</script>
<style >
.login-wrap {
  height: 100%;
  background-color: #2e86de;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
</style>