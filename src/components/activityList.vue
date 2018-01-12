<template>
    <div class="activityList">
        <div class="container">
            <el-row class="nowLocation ml0">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/college' }">云创学院</el-breadcrumb-item>
                        <el-breadcrumb-item>精彩活动列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
        </div>
        <div class="activityListWrap bdColor">
            <div class="container">
                <el-row :gutter="30" class="item clearfix" v-for="(item,index) in 10" :key="index">
                    <el-col :xs="24" :sm="24" :md="12" :lg="7" :xl="7">
                        <a>
                            <img src="static/img/default.jpeg" alt="">
                        </a>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="17" :xl="17">
                        <div class="info">
                            <h4 class="text-ellipsis"> 11月8日，首届武汉女性创业大赛颁奖典礼及女性云创空间揭牌仪式诚邀请您参加！ </h4>
                            <p class="text-ellipsis">活动时间: 2017-11-08 <span class="black3 flag f12">[已结束]</span> </p>
                            <p class="text-ellipsis">地址: 武汉市江汉区常青五路25号武汉妇女新技术创业中心</p>
                            <a class="btn_betail fontColor tc dib" href="">查看详情</a>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="tc">
                        <el-pagination background layout="prev, pager, next" :total="100">
                        </el-pagination>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let type = this.$route.params.type;
            if (type == "enterprise") {
                // alert('服务需求页面');
                this.getServiceClass();
            } else if (type == "consult") {
                this.problemFlag = true;
                this.getConsultClass();
            }
        },
    };
</script>
