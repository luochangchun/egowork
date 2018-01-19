<template>
    <div class="activityList">
        <div class="container">
            <el-row class="nowLocation ml0">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/college' }">云创学院</el-breadcrumb-item>
                        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
        </div>
        <div class="activityListWrap bdColor">
            <div class="container">
                <el-row :gutter="30" class="item clearfix" v-for="(item,index) in List" :key="index">
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
                        <el-pagination v-if="type == 'activity'" background layout="prev, pager, next" @current-change="handleChangeActivity" :total="totalPages">
                        </el-pagination>
                        <el-pagination v-if="type == 'train'" background layout="prev, pager, next" @current-change="handleChangeActivity" :total="totalPages">
                        </el-pagination>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                List: '',
                title: "精彩活动列表",
                totalPages: '',
                type:""
            }
        },
        mounted() {
            let type = this.$route.params.type;
            this.type = type;
            if (type == "activity") {
                this.title = "精彩活动列表";
                this.InitActivityList();
            } else if (type == "train") {
                this.title = "培训集锦列表";
                this.initTrainList();
            }
        },
        methods: {
            InitActivityList() {
                let url = "/activity/12/1?cid=129"
                api.Get(url).then(res => {
                    this.List = res;
                    this.totalPages = res['total'] * 10;
                });
            },
            initTrainList() {
                let url = "/activity/12/1?cid=157"
                api.Get(url).then(res => {
                    this.List = res;
                    this.totalPages = res['total'] * 10;
                });
            },
            handleChangeActivity(val) {
                let url = "/activity/12/"+val+"?cid=129"
                api.Get(url).then(res => {
                    this.List = res;
                    this.totalPages = res['total'] * 10;
                });
            },
             handleChangeTrain(val) {
                let url = "/activity/12/"+val+"?cid=157"
                api.Get(url).then(res => {
                    this.List = res;
                    this.totalPages = res['total'] * 10;
                });
            },
        }
    };
</script>
