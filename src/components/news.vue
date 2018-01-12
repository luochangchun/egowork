<template>
    <div>
        <div class="container">
            <el-row :gutter="20">
                <el-col :lg="17" :md="17" :sm="24" :xs="24">

                    <!--导航切换-->
                    <el-tabs>
                        <el-tab-pane v-for="(item,index) in 5" :key="index" label="今日头条">
                            <el-row :gutter="10" class="news-leftlist" v-for="(item, index) in 8" :key="index">
                                <router-link to="/serviceList.html" class="news-left news-clear">
                                    <el-col :lg="8" :md="8" :sm="8" :xs="8" class="news-left-img">
                                        <div>
                                            <img src="static/img/nl.jpg" class="w-full">
                                        </div>
                                    </el-col>
                                    <el-col :lg="16" :md="16" :sm="16" :xs="16" class="news-left-content">
                                        <p class="news-text-ellipsis news-margin">
                                            <a href="${article.url}" class="text-dark-lt">${article.title!}</a>
                                        </p>
                                        <p class="text-ellipsis-muti text-ellipsis-4"> ${article.description!}</p>
                                        <div class="pos-abt" style="bottom:0px;">
                                            <p class="text-muted pull-left m-r"><i class="fa fa-clock-o m-r-xs"></i><span>时间：${article.time?string("yyyy-MM-dd")}</span></p>
                                            <p class="text-muted pull-left m-r"><i class="glyphicon glyphicon-eye-open"></i> <span>浏览次数:${article.views}</span></p>
                                            <p class="text-muted pull-left"><i class="fa fa-edit m-r-xs"></i><span>云创空间</span></p>
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
                    <div class="news-rightlist" style="background-color:#f1f1f1;">
                        <p class="news-rightlist-p" style="margin-top:10px;">热门资讯 : </p>
                        <div class="news-rightlist">
                            <div class="m-t" style="margin: 10px 5px 20px 5px;">
                                <div>
                                    <a href="${article.url}">
                                        <p style="margin-bottom: 5px;clear:both;"> ${article.title!}</p>
                                        <div style="margin-bottom:20px;">
                                            <p class="text-muted pull-left m-r"><i class="fa fa-clock-o m-r-xs"></i><span>时间：${article.time?string("yyyy-MM-dd")}</span></p>
                                            <p class="text-muted pull-left"><i class="glyphicon glyphicon-eye-open"></i> <span>浏览:${article.views}次</span></p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
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
            handleClick(tab, event) {
                console.log(tab, event);
            }


        },
        filters: {

        }
    };
</script>
<style>

</style>