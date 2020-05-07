<template>
  <div class="container">
    <div class="logo">
      <div class="logo-img">
        <img src="../assets/imgs/logo-footer.png" alt="" />
      </div>
      <div class="logo-title">
        <h1>小米商城</h1>
        <p>让每个人都能享受科技的乐趣</p>
      </div>
    </div>
    <div class="login-box">
      <div class="login-title">
        <span>账号登录</span>
        <span>扫码登录</span>
      </div>
      <form action="" method="post" class="login-form" @submit="loginSubmit">
        <div class="form-box">
          <input type="text" v-model="username" placeholder="邮箱/手机号码/小米ID" />
        </div>
        <div class="form-box">
          <input type="password" v-model="password" placeholder="密码" />
        </div>
        <div class="form-button">
          <input type="submit" value="登录">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visiable:true,
      username: '',
      password:''
    }
  },
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      console.log(this.username);
      console.log(this.password);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";

.logo {
  height: 98px;
  display: flex;
  align-items: center;
  .logo-title {
    margin-left: 10px;
    h1 {
      font-weight: 400;
    }
    p {
      font-size: 6px;
    }
  }
}
.login-box {
  width: 410px;
  margin: 30px auto;
  .login-title {
    font-size: 24px;
    height: 83px;
    span {
      color: $colorC;
      margin-left: 50px;
    }
  }
  .login-form {
    .form-box {
      width: 348px;
      height: 50px;
      border: 1px solid #f3f3f3;
      margin-bottom: 10px;
      box-sizing: border-box;
      input {
        width: 340px;
        height: 48px;
        padding: 0 15px;
      }
    }
    .form-button{
      width: 375px;
      height: 50px;
      input{
        width: 100%;
        height: 50px;
        background-color: red;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
