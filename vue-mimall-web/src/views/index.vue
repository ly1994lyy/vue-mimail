<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li
              class="menu-item"
              v-for="(menu, index) in menuList"
              :key="index"
            >
              <a href="javascript:;">
                {{ menu }}
                <i class="iconfont icon-youbian"></i>
              </a>
              <div class="children">
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href>
                    <img src="../assets/imgs/mi10.webp" alt />
                    <span>小米10 青春版</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <a href="javascript:;">
              <img src="../assets/imgs/lub03.webp" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:;">
              <img src="../assets/imgs/lubo02.webp" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:;">
              <img src="../assets/imgs/lubo05.webp" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:;">
              <img src="../assets/imgs/lubo1.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:;">
              <img src="../assets/imgs/lunbo04.webp" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:;">
              <img src="../assets/imgs/lunbo1.webp" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <div class="span4">
          <div class="home-channel">
            <a href>
              <i class="iconfont icon-shijian"></i>
              小米秒杀
            </a>
          </div>
          <div class="home-channel">
            <a href>
              <i class="iconfont icon-ziyuan"></i>
              企业团购
            </a>
          </div>
          <div class="home-channel">
            <a href>
              <i class="iconfont icon-Fma"></i>
              F码通道
            </a>
          </div>
          <div class="home-channel">
            <a href>
              <i class="iconfont icon-SIMCard"></i>
              米粉卡
            </a>
          </div>
          <div class="home-channel">
            <a href>
              <i class="iconfont icon-qian"></i>
              以旧换新
            </a>
          </div>
          <div class="home-channel">
            <a href>
              <i class="iconfont icon-huafeichongzhi"></i>
              话费充值
            </a>
          </div>
        </div>
        <div class="ads-span3">
          <a href>
            <img
              src="../assets/imgs/35a2239e10e392af73b6b7a737a039d6.jpg"
              alt
            />
          </a>
          <a href>
            <img
              src="../assets/imgs/35a2239e10e392af73b6b7a737a039d6.jpg"
              alt
            />
          </a>
          <a href>
            <img
              src="../assets/imgs/35a2239e10e392af73b6b7a737a039d6.jpg"
              alt
            />
          </a>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <div class="ads">
          <a href="">
            <img src="../assets/imgs/ads.webp" alt="" />
          </a>
        </div>
        <div class="product-container">
          <div class="product-header">
            <div class="title">手机</div>
            <div class="more">
              <a href="">
                查看全部
                <i class="iconfont icon-youbian"></i>
              </a>
            </div>
          </div>
          <div class="product">
            <div class="ads-img">
              <a href=""><img src="../assets/imgs/shoujiads.webp" alt=""/></a>
            </div>
            <div class="product-list">
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
              <div class="product-detail">
                <a href="">
                  <img
                    src="../assets/imgs/8729282b199b3ec51e31c1b6b15f3f93.webp"
                    alt=""
                  />
                  <h3>小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">2099</span>
                    元
                    <span>起</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { menuList } from "../utils/api";

export default {
  data() {
    return {
      menuList,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
        loop: true,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      height: 460px;
      box-sizing: border-box;
      width: 234px;
      z-index: 9;
      padding: 20px 0;
      background-color: rgba(105, 101, 101, 0.6);
      .menu-wrap {
        .menu-item {
          height: 42px;
          line-height: 42px;
          cursor: pointer;
          a {
            font-size: 14px;
            color: $colorG;
            padding-left: 30px;
            i {
              position: absolute;
              right: 20px;
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: grid;
            }
          }
          .children {
            min-width: 248px;
            height: 460px;
            position: absolute;
            top: 0;
            left: 234px;
            background-color: $colorG;
            border: 1px solid #e0e0e0;
            display: none;
            grid-template-columns: repeat(auto-fill, 248px);
            grid-template-rows: repeat(auto-fill, 76px);
            grid-auto-flow: column;
            box-sizing: border-box;
            .child-item {
              width: 248px;
              padding: 10px 0;
              a {
                color: $colorB;
                span {
                  position: absolute;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      width: 100%;
      height: 460px;
      img {
        width: 100%;
      }
      .swiper-button-prev {
        left: 244px;
      }
    }
  }
  .ads-box {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    .span4 {
      width: 234px;
      height: 170px;
      box-sizing: border-box;
      background-color: #5f5750;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      .home-channel {
        text-align: center;
        padding-top: 18px;
        a {
          color: #fff;
          opacity: 0.7;
          font-size: 12px;
          i {
            font-size: 25px;
            opacity: 0.7;
            display: block;
          }
          &:hover{
            color: #fff;
            opacity: 1;
            i{
              opacity: 1;
            }
          }
        }
      }
    }
    .ads-span3 {
      display: flex;
      justify-content: space-between;
      width: 978px;
      height: 170px;
      a {
        width: 316px;
        img {
          width: 100%;
        }
      }
    }
  }
  .product-box {
    width: 100%;
    margin-top: 30px;
    background-color: #f5f5f5;
    .ads {
      img {
        width: 100%;
      }
    }
    .product-container {
      margin-top: 10px;
      width: 100%;
      height: 686px;
      .product-header {
        width: 100%;
        height: 58px;
        @include flex();
        .title {
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }
        .more {
          font-size: 16px;
          line-height: 58px;
          a {
            color: #333;
            i {
              background-color: #757575;
              border-radius: 50%;
              color: $colorG;
            }
          }
          &:hover {
            a {
              color: red;
              i {
                background-color: red;
              }
            }
          }
        }
      }
      .product {
        width: 100%;
        display: flex;
        .ads-img {
          width: 234px;
          height: 614px;
          img {
            height: 100%;
          }
          &:hover {
            @include up1();
          }
        }
        .product-list {
          width: 992px;
          height: 627px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          justify-items: end;
          .product-detail {
            width: 234px;
            height: 300px;
            background-color: $colorG;
            text-align: center;
            &:hover {
              @include up1();
            }
            img {
              width: 160px;
              height: 160px;
              margin-top: 23px;
            }
            .title {
              text-align: center;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .desc {
              margin: 0 10px 10px;
              height: 18px;
              font-size: 12px;
              color: #b0b0b0;
            }
            .price {
              text-align: center;
              color: #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>
