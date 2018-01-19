<template>
    <!-- 热门课程 -->
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="item">
        <a class="item rel">
            <h2 class="text-ellipsis">{{hotCourse.courseName}}</h2>
            <p class="text-ellipsis-muti text-ellipsis-2" v-html="hotCourse.context"></p>
            <p> <i class="fa fa-graduation-cap"></i><span>{{hotCourse.pageBuycount}}</span>&nbsp;&nbsp;|&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> <span>{{hotCourse.pageViewcount}}</span> </p>
            <div class="rel ovh" style="height:186px;"> <img :src="hotCourse.logo">
                <div class="abs onlineMask courseMask"><a target="__blank" :href="hotCourse.courseId" class="tc white db">开始学习</a></div>
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

