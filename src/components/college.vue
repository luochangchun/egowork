<template>
  <div class="college_index">
    <div class="banner_college"></div>
    <!-- 精彩活动 -->
    <div class="container">
      <div class="activity">
        <h1 class="commonTitle tc">精彩活动</h1>
        <el-row :gutter="30" class="commonList clearfix">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="item" v-for="(item, index) in 4" :key="index">
            <a class="rel">
              <div class="img_wrap rel"> <span class="abs flag f12">已结束</span> <img src="http://localhost:8080/themes/newego/img/01.png" alt="">
                <p class="tc white abs text-ellipsis-muti text-ellipsis-2"> 11月8日，首届武汉女性创业大赛颁奖典礼及女性云创空间揭牌仪式诚邀请您参加！</p>
              </div>
              <div class="para">
                <p class="f14 text-ellipsis-muti text-ellipsis-2">11月8日，首届武汉女性创业大赛颁奖典礼及女性云创空间揭牌仪式诚邀请您参加！</p>
                <p class="f12">活动时间： <span>2017-11-08</span> </p>
              </div>
              <div class="top_line" style="width: 0px"></div>
              <div class="bottom_line" style="width: 0px;"></div>
              <div class="left_line" style="height: 0px;"></div>
              <div class="right_line" style="height: 0px;"></div>
            </a>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a href="" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 培训集锦 -->
    <div class="train">
      <div class="container train_wrap">
        <h1 class="commonTitle tc">培训集锦</h1>
        <el-row :gutter="30" class="commonList clearfix">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="item" v-for="(item, index) in 4" :key="index">
            <a href="" class="item">
              <div class="rel">
                <div class="img_wrap rel"> <span class="abs flag f12">已结束</span> <img src="http://localhost:8080/themes/newego/img/01.png" alt="">
                  <p class="tc white abs text-ellipsis-muti text-ellipsis-2"> 创业者如何做好融资路演PPT </p>
                </div>
                <div class="para">
                  <p class="f14">创业者如何做好融资路演PPT</p>
                  <p class="f12">活动时间： <span>2017-06-29</span> </p>
                </div>
                <div class="top_line" style="width: 0px"></div>
                <div class="bottom_line" style="width: 0px;"></div>
                <div class="left_line" style="height: 0px;"></div>
                <div class="right_line" style="height: 0px;"></div>
              </div>
            </a>
          </el-col>
          <el-col class="pb50" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a href="" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i></a>
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
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="item" v-for="(item, index) in 6" :key="index">
              <a class="item rel">
                <h2 class="text-ellipsis">工厂互联网巨头模式的优势与劣势</h2>
                <p class="text-ellipsis-muti text-ellipsis-2">由火凤凰云计算有限公司副总裁郑丽主讲</p>
                <p> <i class="fa fa-graduation-cap"></i><span>0</span>&nbsp;&nbsp;|&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> <span>18</span> </p>
                <div class="rel ovh" style="height:186px;"> <img src="http://vedio.whwomen.org.cn/upload/course/20171228/1514432697609.png" alt="">
                  <div class="abs onlineMask courseMask"><a target="__blank" href="http://vedio.whwomen.org.cn/free/play/54" class="tc white db">开始学习</a></div>
                </div>
                <div class="line line_r abs"></div>
                <div class="line line_b abs"></div>
              </a>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <a href="" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
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
        <el-row :gutter="0" class="tutorList clearfix">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="(item, index) in 4" :key="index">
            <a target="__blank" href="" class="item col-lg-3 col-md-3 col-sm-6 col-sm-12"> <img src="http://vedio.whwomen.org.cn/upload/teacher/20171228/1514427617583.png">
              <h1 class="tc">郑丽</h1>
              <p class="tc f14 text-ellipsis">武汉火凤凰云计算服务股份有限公司运营总裁。 湖北盛世安康保险代理有限公司创始人，股东。 工信部千人领军计划领军人才，武汉商学院创业导师。
              </p>
              <p class="tc f14 text-ellipsis-muti text-ellipsis-2">湖北盛世安康保险代理有限公司创始人，股东。</p>
            </a>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a href="" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
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
              <el-col :md="6" :lg="6" :xl="6"> <img src="http://localhost:8080/themes/newego/img/goldIcon.png"> </el-col>
              <el-col :md="18" :lg="18" :xl="18">
                <h1 class="f24 text-ellipsis">打造精英社交平台</h1>
                <p class="f16 text-ellipsis-muti text-ellipsis-2"> 云创学院通过各种线上线下的交流活动，资源整合，增进企业家、创业者们的深入了解，增加彼此的合作机会、业务机会和工作机会</p>
              </el-col>
            </div>
            <div class="item clearfix">
              <el-col :md="6" :lg="6" :xl="6"> <img src="http://localhost:8080/themes/newego/img/courseIcon.png"> </el-col>
              <el-col :md="18" :lg="18" :xl="18">
                <h1 class="f24 text-ellipsis">平台+模块的课程体系</h1>
                <p class="f16 text-ellipsis-muti text-ellipsis-2"> 依据行业内企业最新技术要求，制定相应的教学目标、教学大纲、教师指导、项目操作等相关手册，使每个阶段学员培养目标明确和落地</p>
              </el-col>
            </div>
            <div class="item clearfix">
              <el-col :md="6" :lg="6" :xl="6"> <img src="http://localhost:8080/themes/newego/img/friendIcon.png"> </el-col>
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
  export default {}
</script>
