<template>
    <div>
        <div class="padder-v-xxl article bdColor" style="padding-top:15px;">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :lg="17" :md="17" :sm="24" :xs="24" class="m_article">
                        <div class="text-center article-header">
                            <p class="text-xxxl article_title f16 black">{{ article.title }}</p>
                            <div>
                                <p class="black2" style="margin-right:20px;">时间：{{article.time | formatDate}}</p>
                                <p class="black2">浏览次数：{{ article.views }}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="wrapper-lg">
                            <p v-html="article.content"></p>
                        </div>
                    </el-col>
                    <!--右边热门排行-->
                    <el-col :lg="7" :md="7" :sm="24" :xs="24">
                        <div class="news-rightlist" style="background-color:#fff">
                            <p class="f16 b">热门资讯 : </p>
                            <el-row class="news-rightlist">
                                <el-col :lg="24" :md="24" :sm="24" :xs="24" class="m-t" v-for="(item, index) in ranking" :key="index" style="margin: 10px 5px 20px 5px;">
                                    <div>
                                        <router-link :to="{ name: 'article',params: { id: item.id}}">
                                            <p style="margin-bottom: 5px;clear:both;color: #428bca;"> {{ item.title }}</p>
                                            <div style="margin-bottom:20px;">
                                                <p class="text-muted pull-left m-r"><i class="el-icon-time"></i><span>时间：{{ item.time | formatDate }}</span></p>
                                                <p class="text-muted pull-left"><i class="el-icon-view"></i> <span>浏览:{{ item.views }}次</span></p>
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
    </div>
</template>
<script>
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                ranking: '',
                article: '',
            };
        },
        created() {
            let id = this.$route.params.id;
            this.setNews();
            this.setNewsDetail(id);
        },
        //路由监听
        watch: {
            '$route' (to, from) { //监听路由是否变化
                if(this.$route.params.id){//是否有文章id /文章id
                    //获取文章数据
                    //this.setServiceDetail(id);//获取id
                    this.setNewsDetail(this.$route.params.id);//传入文章id
                console.log(this.$route.params.id);
                }
            }
        },
        methods: {
            setNews() {
                var _this = this;
                _this.getRequest('/pub/news')
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.ranking = res['data']['ranking'];  //右侧热门资讯
                            console.log(res['data']['ranking']);
                        }
                    })
            },
            setNewsDetail(id) {
                var _this = this;
                _this.getRequest('/article/' + id)
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.article = res['data'];  //资讯详情页
                            console.log(res['data']);
                        }
                    })
            }


        },


        filters: {

        }
    };
</script>
<style>

</style>