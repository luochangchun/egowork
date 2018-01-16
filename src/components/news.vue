<template>
    <div>
        <div class="container">
            <el-row :gutter="20" class="margin-bottom">
                <el-col :lg="17" :md="17" :sm="24" :xs="24">
                    <el-row :gutter="20">
                        <el-col :lg="12" :md="12" :sm="24" :xs="24"  v-for="(item, index) in 2" :key="index">
                            <div>
                                <router-link to="/article" >
                                    <span class="news_header_img">
                                        <img src="static/img/nl.jpg" alt="">
                                        <p class="text-ellipsis">第十届武汉金融博览会暨中国中部</p>
                                    </span>
                                </router-link>
                            </div>
                        </el-col>
                    </el-row>


                    <!--导航切换-->
                    <el-tabs>
                        <el-tab-pane v-for="(item,index) in 5" :key="index" label="今日头条">
                            <el-row :gutter="10" class="news-leftlist" v-for="(item, index) in 4" :key="index">
                                <router-link to="/serviceList" class="news-left news-clear">
                                    <el-col :lg="8" :md="8" :sm="8" :xs="8" class="news-left-img">
                                        <router-link to="/article">
                                            <img src="static/img/nl.jpg" class="w-full">
                                        </router-link>
                                    </el-col>
                                    <el-col :lg="16" :md="16" :sm="16" :xs="16" class="news-left-content">
                                        <p class="news-text-ellipsis news-margin">
                                            <a href="/" class="text-dark-lt f16 b">第十届武汉金融博览会暨中国中部（湖北）创业投资大会举办</a>
                                        </p>
                                        <p class="text-ellipsis-muti text-ellipsis-4 f14 black1">11月22日，由湖北省人民政府、科技部、中国人民银行、武汉市人民政府等共同主办的第十届武汉金融博览会暨中国中部（湖北）创业投资大会开幕。</p>
                                        <div class="pos-abt" style="bottom:25px;">
                                            <p class="text-muted pull-left m-r"><i class="el-icon-time"></i> <span>时间：2017-11-28</span></p>
                                            <p class="text-muted pull-left m-r"><i class="el-icon-view"></i> <span>浏览次数:1,006</span></p>
                                            <p class="text-muted pull-left"><i class="el-icon-edit-outline"></i> <span>云创空间</span></p>
                                        </div>
                                    </el-col>
                                </router-link>
                            </el-row>
                            <!--分页-->
                            <!--<el-row :gutter="10" style="margin-bottom: 50px;">-->
                            <!--<el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">-->
                            <!--<div class="block">-->
                            <!--<el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">-->
                            <!--</el-pagination>-->
                            <!--</div>-->
                            <!--</el-col>-->
                            <!--</el-row>-->
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <!--右边热门排行-->
                <el-col :lg="7" :md="7" :sm="24" :xs="24">
                    <div class="news-rightlist bdColor">
                        <p class="f16 b">热门资讯 : </p>
                        <el-row class="news-rightlist">
                            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="m-t m-right" v-for="(item, index) in 12" :key="index">
                                <div>
                                    <router-link to="/article">
                                        <p style="margin-bottom:5px;clear:both;color:#428bca;"> 省科技厅关于组织申报2018年度大学生科技创业专项计划项目的通知</p>
                                        <div>
                                            <p class="text-muted pull-left m-r"><i class="el-icon-time"></i><span> 时间：2017-11-28</span></p>
                                            <p class="text-muted pull-left"><i class="el-icon-view"></i> <span>浏览:1134次</span></p>
                                        </div>
                                    </router-link>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        created() {
//            this.newApi();
        },
        methods: {
//            handleClick(tab, event) {
//                console.log(tab, event);
//            }


        },
        filters: {

        }
    };
</script>
<style>

</style>