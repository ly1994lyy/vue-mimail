<template>
  <div class="footer">
    <div class="site-footer">
      <div class="container">
        <div class="footer-service">
          <ul>
            <li v-for="(icon,index) in iconList" :key="index">
              <a href="javascript:;">
                <i :class="icon.icon"></i>
                {{icon.title}}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <div class="col-links">
            <dl v-for="(link,index) in linkList" :key="index">
              <dt>{{link.linkTitle}}</dt>
              <dd v-for="(title,index) in link.link" :key="index">{{title}}</dd>
            </dl>
          </div>
          <div class="col-contact">
            <p class="phone">400-100-5678</p>
            <p>8:00-18:00（仅收市话费)</p>
            <a href>
              <i class="iconfont icon-ziyuanxhdpi"></i>
              人工客服
            </a>
            <div class="follow">
              关注小米:
              <a href>
                <i class="iconfont icon-icon4"></i>
              </a>
              <a href>
                <i class="iconfont icon-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { iconList, linkList } from "../utils/api";

export default {
  data() {
    return {
      iconList,
      linkList
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.footer {
  height: 272px;
  width: 100%;
  .site-footer {
    height: 272px;
    .footer-service {
      display: flex;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #e0e0e0;
      ul {
        @include flex();
        width: 100%;
        li {
          width: 20%;
          text-align: center;
          a {
            color: #616160;
            font-size: 16px;
            transition: all 0.2s;
            i {
              font-size: 24px;
            }
            &:hover {
              color: $colorA;
            }
          }
        }
      }
    }
    .footer-links {
      height: 192px;
      width: 100%;
      @include flex();
      .col-links {
        @include flex();
        width: 80%;
        margin-right: 130px;
        dt{
          font-size: 14px;
          color: #424242;
          margin: -1px 0 26px;
        }
        dd{
          color: #757575;
          font-size: 12px;
          margin: 10px 0 0;
        }
      }
      .col-contact {
        width: 20%;
        font-size: 12px;
        color: #616161;
        padding-left: 60px;
        border-left: 1px solid #e0e0e0;
        .phone {
          color: $colorA;
          font-size: 22px;
          margin-bottom: 5px;
        }
        & > a {
          color: $colorA;
          display: flex;
          width: 120px;
          height: 30px;
          justify-content: center;
          align-items: center;
          border: 1px solid $colorA;
          &:hover {
            background-color: $colorA;
            color: $colorG;
          }
        }
        .follow {
          margin-top: 10px;
          a {
            i {
              font-size: 23px;
              color: #757575;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
}
</style>