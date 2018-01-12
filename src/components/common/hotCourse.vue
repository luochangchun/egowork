<template>
    <!-- 热门课程 -->
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="item">
        <a class="item rel">
            <h2 class="text-ellipsis">{{hotCourse.title}}</h2>
            <p class="text-ellipsis-muti text-ellipsis-2">{{hotCourse.info}}</p>
            <p> <i class="fa fa-graduation-cap"></i><span>0</span>&nbsp;&nbsp;|&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> <span>18</span> </p>
            <div class="rel ovh" style="height:186px;"> <img src="http://vedio.whwomen.org.cn/upload/course/20171228/1514432697609.png" alt="">
                <div class="abs onlineMask courseMask"><a target="__blank" href="http://vedio.whwomen.org.cn/free/play/54" class="tc white db">开始学习</a></div>
            </div>
            <div class="line line_r abs"></div>
            <div class="line line_b abs"></div>
        </a>
    </el-col>
</template>

<script>
    export default {
        props: ['hotCourse'],
    }
</script>

