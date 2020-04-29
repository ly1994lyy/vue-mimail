<template>
  <div class="header">
    <div class="nav-toabar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;" v-for="(menu,index) in menuList" :key="index">{{menu}}</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="cartBtn">
            <span class="iconfont icon-chat-gray"></span>&nbsp;购物车&nbsp;(0)
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu" v-for="(item,index) in headMenu" :key="index">
            <span>{{item}}</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blak">
                    <div class="pro-img">
                      <img src="../assets/imgs/82ddffd7562c54f9166fa876c143ff22.webp" alt />
                    </div>
                    <div class="pro-name">小米10Pro</div>
                    <div class="pro-price">4999起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blak">
                    <div class="pro-img">
                      <img src="../assets/imgs/82ddffd7562c54f9166fa876c143ff22.webp" alt />
                    </div>
                    <div class="pro-name">小米10Pro</div>
                    <div class="pro-price">4999起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blak">
                    <div class="pro-img">
                      <img src="../assets/imgs/82ddffd7562c54f9166fa876c143ff22.webp" alt />
                    </div>
                    <div class="pro-name">小米10Pro</div>
                    <div class="pro-price">4999起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blak">
                    <div class="pro-img">
                      <img src="../assets/imgs/82ddffd7562c54f9166fa876c143ff22.webp" alt />
                    </div>
                    <div class="pro-name">小米10Pro</div>
                    <div class="pro-price">4999起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blak">
                    <div class="pro-img">
                      <img src="../assets/imgs/82ddffd7562c54f9166fa876c143ff22.webp" alt />
                    </div>
                    <div class="pro-name">小米10Pro</div>
                    <div class="pro-price">4999起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blak">
                    <div class="pro-img">
                      <img src="../assets/imgs/82ddffd7562c54f9166fa876c143ff22.webp" alt />
                    </div>
                    <div class="pro-name">小米10Pro</div>
                    <div class="pro-price">4999起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>服务</span>
          </div>
          <div class="item-menu">
            <span>社区</span>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;">
              <span class="iconfont icon-search"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        "小米商城",
        "MIUI",
        "IoT",
        "云服务",
        "金融",
        "有品",
        "小爱开放平台",
        "企业团购",
        "资质证照",
        "协议规则",
        "下载app",
        "Select Location"
      ],
      headMenu: [
        "小米手机",
        "Redmi 红米",
        "电视",
        "笔记本",
        "家电",
        "路由器",
        "智能硬件"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.header {
  .nav-toabar {
    height: 40px;
    line-height: 40px;
    background-color: $colorB;
    font-size: 12px;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:hover {
          color: $colorG;
        }
      }
      .topbar-user {
        .cartBtn {
          width: 120px;
          height: 40px;
          background-color: #424242;
          text-align: center;
          margin: 0;
          &:hover {
            color: #ff6600;
            background-color: $colorG;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      @include flex();
      height: 100px;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 55px;
          height: 55px;
          overflow: hidden;
          &:before {
            content: " ";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("../assets/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("../assets/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 850px;
        margin-left: 180px;
        .item-menu {
          display: inline-block;
          color: $colorB;
          font-size: 16px;
          line-height: 100px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 100px;
            left: 0;
            width: 1226px;
            overflow: hidden;
            transition: all 0.5s;
            height: 0;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                width: 1px;
                height: 100px;
              }
              &:last-child::before{
                display: none;
              }
              a {
                display: inline-block;
              }
              img {
                width: 160px;
                height: 110px;
                margin-top: 26px;
              }
              .pro-name {
                color: $colorB;
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
          transition: color 0.2s;
        }
      }
      .header-search {
        width: 296px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 245px;
            height: 50px;
            padding: 0 10px;
          }
          a {
            display: flex;
            height: 52px;
            width: 50px;
            justify-content: center;
            align-items: center;
            transition: all 0.2s;
            &:hover {
              background-color: #ff6600;
              span {
                color: $colorG;
              }
            }
            span {
              color: #616161;
              font-size: 22px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>