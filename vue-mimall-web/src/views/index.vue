<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item" v-for="(menu,index) in menuList" :key="index">
              <a href="javascript:;">
                {{menu}}
                <i class="iconfont icon-youbian"></i>
              </a>
              <div class="children">
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
                    <span>小米10 青春版</span>
                  </a>
                </div>
                <div class="child-item">
                  <a href="">
                    <img src="../assets/imgs/mi10.webp" alt="">
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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import {menuList} from "../utils/api"

export default {
  data() {
    return {
      menuList,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev'
        },
        autoplay:true,
        loop:true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';

.index {
  .swiper-box {
    .nav-menu{
      position: absolute;
      height: 460px;
      box-sizing: border-box;
      width: 234px;
      z-index: 9;
      padding: 20px 0;
      background-color: rgba(105,101,101,.6);
      .menu-wrap{
        .menu-item{
          height: 42px;
          line-height: 42px;
          cursor: pointer;
          a{
            font-size: 14px;
            color: $colorG;
            padding-left: 30px;
            i{
              position: absolute;
              right: 20px;
            }
          }
          &:hover{
            background-color: $colorA;
            .children{
              display: grid;
            }
          }
          .children{
            min-width: 248px;
            height: 460px;
            position: absolute;
            top: 0;
            left: 234px;
            background-color: $colorG;
            border: 1px solid #e0e0e0;
            display: none;
            grid-template-columns: repeat(auto-fill,248px);
            grid-template-rows: repeat(auto-fill,76px);
            grid-auto-flow: column;
            box-sizing: border-box;
            .child-item{
              width: 248px;
              padding: 10px 0;
              a{
                color: $colorB;
                span{
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
      img{
        width: 100%;
      }
      .swiper-button-prev{
        left: 244px;
      }
    }
  }
}
</style>