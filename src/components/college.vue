<template>
  <div class="college_index">
    <div class="banner_college"></div>
    <!-- 精彩活动 -->
    <div class="container mb50">
      <div class="activity">
        <h1 class="commonTitle tc">精彩活动</h1>
        <el-row :gutter="30" class="commonList clearfix">
          <!-- 引入培训精彩活动 -->
          <ActivityItem v-for="item in activityList" v-bind:activity="item" v-bind:key="item.id">></ActivityItem>
          <!-- 引入培训精彩活动 -->
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <router-link :to="{ name: 'activityList', params: { type: 'activity'} }" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i></router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 培训集锦 -->
    <div class="train">
      <div class="container train_wrap">
        <h1 class="commonTitle tc">培训集锦</h1>
        <el-row :gutter="30" class="commonList clearfix">
          <!-- 引入培训集锦组件 -->
          <ActivityItem v-for="item in trainList" v-bind:activity="item" v-bind:key="item.id">></ActivityItem>
          <!-- 引入培训集锦组件 -->
          <el-col class="pb50" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <router-link :to="{ name: 'activityList', params: { type: 'train'} }" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i></router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 热门课程 -->
    <div class="container">
      <div class="hot_course">
        <div class="hot_course">
          <h1 class="commonTitle tc">热门课程</h1>
          <el-row :gutter="30" class="courseList clearfix">
            <HotCourseItem v-for="item in HotCourseList" v-bind:hotCourse="item" v-bind:key="item.id"></HotCourseItem>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <a href="http://vedio.whwomen.org.cn/front/showcoulist" target="__blank" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 企业培训申请流程 -->
    <div class="appli_process">
      <div class="container">
        <el-row :gutter="0" class="appli_process_list clearfix">
          <el-col :md="4" :lg="4" :xl="4">
            <div class="appli_process_l">
              <p class="tc">企业培训</p>
              <p class="tc">申请流程</p>
              <a class="" href="">提交培训申请</a>
            </div>
          </el-col>
          <el-col :md="20" :lg="20" :xl="20">
            <div class="appli_process_r rel"></div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 金牌导师 -->
    <div class="container">
      <div class="tutor">
        <h1 class="commonTitle tc">金牌导师</h1>
        <el-row :gutter="30" class="tutorList clearfix">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="(item, index) in teacherList" :key="index">
            <a target="__blank" :href="item.id" class="item col-lg-3 col-md-3 col-sm-6 col-sm-12"> <img :src="item.picPath">
              <h1 class="tc">{{item.name}}</h1>
              <p class="tc f14 text-ellipsis">{{item.career}}
              </p>
              <p class="tc f14 text-ellipsis-muti text-ellipsis-2" style="height:40px">{{item.education}}</p>
            </a>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a href="http://vedio.whwomen.org.cn/front/teacherlist" target="__blank" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div class="whyChangeUs">
      <div class="container">
        <h1 class="commonTitle tc">为什么选择我们?</h1>
        <el-row class="usList ">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="item clearfix">
              <el-col :md="6" :lg="6" :xl="6"> <img src="static/img/goldIcon.png"> </el-col>
              <el-col :md="18" :lg="18" :xl="18">
                <h1 class="f24 text-ellipsis">打造精英社交平台</h1>
                <p class="f16 text-ellipsis-muti text-ellipsis-2"> 云创学院通过各种线上线下的交流活动，资源整合，增进企业家、创业者们的深入了解，增加彼此的合作机会、业务机会和工作机会</p>
              </el-col>
            </div>
            <div class="item clearfix">
              <el-col :md="6" :lg="6" :xl="6"> <img src="static/img/courseIcon.png"> </el-col>
              <el-col :md="18" :lg="18" :xl="18">
                <h1 class="f24 text-ellipsis">平台+模块的课程体系</h1>
                <p class="f16 text-ellipsis-muti text-ellipsis-2"> 依据行业内企业最新技术要求，制定相应的教学目标、教学大纲、教师指导、项目操作等相关手册，使每个阶段学员培养目标明确和落地</p>
              </el-col>
            </div>
            <div class="item clearfix">
              <el-col :md="6" :lg="6" :xl="6"> <img src="static/img/friendIcon.png"> </el-col>
              <el-col :md="18" :lg="18" :xl="18">
                <h1 class="text-ellipsis">基地化产、学、研深度结合</h1>
                <p class="text-ellipsis-muti text-ellipsis-2"> 与多所知名大学开展校企合作，和武汉大学共同成立联合云安全实验室，和中南民族大学共同成立联合电子商务研发基地</p>
              </el-col>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="usImg"> </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "../axios/api.js";
  import ActivityItem from './common/activityItem.vue' //活动组件
  import HotCourseItem from './common/hotCourse.vue' //热门课程组件
  export default {
    data() {
      return {
        activityList: [],
        trainList: [],
        HotCourseList: [],
        teacherList: ""
      }
    },
    components: {
      ActivityItem,
      HotCourseItem
    },
    mounted() {
      this.getCollege();
      this.getCourseList();
      this.getTeacherList();
    },
    methods: {
      getCollege() {
        api.Get("/pub/college").then(res => {
          this.activityList = res['activities'];
          this.trainList = res['educates'];
        });
      },
      getCourseList() {
        var domain = "http://vedio.whwomen.org.cn";
        var turl ="http://vedio.whwomen.org.cn/free/play/";
        api.outGet("http://vedio.whwomen.org.cn/webapp/cou/list?currentPage=1&pageSize=6").then(res => {
          if (res['success'] == true) {
            this.HotCourseList = res['entity']['courseList'];
            for (var i = 0; i < res['entity']['courseList'].length; i++) {
              res['entity']['courseList'][i]['logo'] = domain + res['entity']['courseList'][i]['logo'];
              res['entity']['courseList'][i]['courseId'] = turl + res['entity']['courseList'][i]['courseId'];
            }
          }
        });
      },
      getTeacherList() {
        var domain = "http://vedio.whwomen.org.cn";
        var turl = "http://vedio.whwomen.org.cn/front/teacher/";
        api.outGet("http://vedio.whwomen.org.cn/webapp/teacher/list?currentPage=1&pageSize=8").then(res => {
          if (res['success'] == true) {
            this.teacherList = res['entity']['teacherList'];
            for (var i = 0; i < res['entity']['teacherList'].length; i++) {
              res['entity']['teacherList'][i]['id'] = turl + res['entity']['teacherList'][i]['id'];
              res['entity']['teacherList'][i]['picPath'] = domain + res['entity']['teacherList'][i]['picPath'];
            }
          }
        });
      }
    }
  }
</script>
