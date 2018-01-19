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
                            <h4 class="text-ellipsis">{{item.title}}</h4>
                            <p class="text-ellipsis">活动时间: {{item.activeTime | formatDate}} <span class="black3 flag f12">[已结束]</span> </p>
                            <p class="text-ellipsis">地址: {{item.address}}</p>
                            <router-link :to="{ name: 'activity', params: { id: item.id} }" class="btn_betail fontColor tc dib">查看详情</router-link>
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
    import {formatDate} from "../../static/js/date.js";
    export default {
        data() {
            return {
                List: '',
                title: "精彩活动列表",
                totalPages: '',
                type: ""
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, "yyyy-MM-dd");
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
                var _this = this;
                let url = "/activity/12/0?cid=129"
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.List = res['data']['content'];
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
            initTrainList() {
                var _this = this;
                let url = "/activity/12/0?cid=157"
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.List = res['data']['content'];
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
            handleChangeActivity(val) {
                var _this = this;
                let url = "/activity/12/" + val + "?cid=129"
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.List = res['data']['content'];
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
            handleChangeTrain(val) {
                var _this = this;
                let url = "/activity/12/" + val + "?cid=157"
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        this.List = res['data']['content'];
                        this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
        }
    };
</script>
