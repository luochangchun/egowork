<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in imgArrs" :key="index" :style="{backgroundImage: 'url(' +item.src+ ')'}" style="margin-bottom:0;height: 500px;background-size: cover;background-repeat: no-repeat;background-position: center center;overflow:hidden;">
      <div class="inner rel">
        <div class="sliword clearfix">
            <img class="l img" :class="curIndex == index ? 'b'+index+'0' : 'animate_after' " :src="item.b0">
            <img class="l img" :class="curIndex == index ? 'b'+index+'1' : 'animate_after' " :src="item.b1">
            <img class="l img" :class="curIndex == index ? 'b'+index+'2' : 'animate_after' " :src="item.b2">
            <img class="l img" :class="curIndex == index ? 'b'+index+'3' : 'animate_after' " :src="item.b3">
        </div>
        <img class="img s05 db" :class="curIndex == index ? 'b'+index+'4' : 'animate_after' " :src="item.b4">
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
     <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      curIndex: "",
      activeIndex: "",
      imgArrs: [
        {
          id: "1",
          src: "../static/img/bg01.jpg",
          b0: "../static/img/s07.png",
          b1: "../static/img/s08.png",
          b2: "../static/img/s03.png",
          b3: "../static/img/s04.png",
          b4: "../static/img/s09.png",
        },
        {
          id: "2",
          src: "../static/img/bg02.jpg",
          b0: "../static/img/s11.png",
          b1: "../static/img/s12.png",
          b2: "../static/img/s15.png",
          b3: "../static/img/s16.png",
          b4: "../static/img/s17.png",
        },
        {
          id: "3",
          src: "../static/img/bg03.jpg",
          b0: "../static/img/s21.png",
          b1: "../static/img/s22.png",
          b2: "../static/img/s23.png",
          b3: "../static/img/s24.png",
          b4: "../static/img/s25.png",
        }
      ],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        initialSlide: 0, //设定初始化时slide的索引
        pagination: ".swiper-pagination",
        effect: "fade",
        // loop: true,
        speed: 1000,
        autoplay: 6000,
        autoplayDisableOnInteraction: false,
        paginationClickable: false,
        onSlideChangeStart: swiper => {
          //这个位置放swiper的回调方法
          this.curIndex = this.index = swiper.realIndex;
          this.activeIndex = swiper.activeIndex;
        },
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.curIndex = swiper.realIndex;
          this.activeIndex = swiper.activeIndex;
        }
      }
    };
  },
  //定义这个swiper对象
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
  }
};
</script>

<style scoped>
.el-carousel__container img {
  width: 100%;
  height: 100%;
}
.sw_btn {
  width: 260px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  margin-left: 0px;
}

</style>

