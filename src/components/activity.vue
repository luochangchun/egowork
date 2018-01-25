<template>
    <div class="activity_detail">
        <div class="container detail">
            <el-row class="nowLocation">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/college' }">云创学院</el-breadcrumb-item>
                        <el-breadcrumb-item v-if="activity.cid == '129'" :to="{ path: '/activityList/activity' }">精彩活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item v-if="activity.cid == '157'" :to="{ path: '/activityList/train' }">培训集锦列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="activity_top clearfix">
                <el-col :sm="24" :lg="6" :xl="6"><img src="http://www.egowork.com/upload/images/articleimage/2017091916/1505811548599_e1980b59fa3e4e6f9c0ace3bf228b882.jpeg" alt=""> </el-col>
                <el-col :sm="24" :lg="18" :xl="18" class="info">
                    <h1 class="text-ellipsis">{{activity.title}}</h1>
                    <p class="f14 text-ellipsis">活动时间： <span>{{activity.activeTime | formatDate}}</span> </p>
                    <p class="f14 text-ellipsis">活动地址： <span>{{activity.address}}</span> </p>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="activity_bottom clearfix" style="margin-bottom:20px">
                <el-col>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="活动详情" name="first">
                            <div class="activity_bottom_body" v-html="activity.content"></div>
                        </el-tab-pane>
                        <el-tab-pane label="活动评价" name="second">
                            <div class="reply_list">
                                <div class="item rel">
                                    <p class="name f16">游客：</p>
                                    <p class="content f14">'123'</p>
                                    <div class="time clearfix f14">
                                        <p>
                                            <span class="l">‘2017-01-10’</span>
                                            <img src="static/img/dialog_icon.png" style="cursor: pointer" class="dialogIcon">
                                        </p>
                                    </div>
                                    <div class="item rel" style="margin-left:20px;">
                                        <p class="name f16">admin：</p>
                                        <p class="content f14">'123'</p>
                                        <div class="time clearfix f14">
                                            <p>
                                                <span class="l">‘2017-01-10’</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="line line_b"></div>
                                </div>
                            </div>
                            <el-form ref="form" :label-position="labelPosition" :model="form" label-width="0px">
                                <el-form-item label="">
                                    <el-input type="textarea" :rows="5" v-model="form.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" class="r">评论</el-button>
                                    <!-- <el-button>取消</el-button> -->
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {
        formatDate
    } from "../../static/js/date.js";
    export default {
        data() {
            return {
                labelPosition: 'right',
                activeName: "first",
                form: {
                    desc: ''
                },
                activity: ""
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, "yyyy-MM-dd");
            }
        },
        mounted() {
            let id = this.$route.params.id;
            this.initActivity(id);
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            initActivity(id) {
                var _this = this;
                let url = "/activity/" + id;
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        this.activity = res['data'];
                    }
                });
            }
        }
    };
</script>
<style scoped>
    .activity_bottom img {
        width: auto!important;
    }
</style>

