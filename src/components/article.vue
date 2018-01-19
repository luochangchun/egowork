<template>
    <div>
        <div class="padder-v-xxl article bdColor" style="padding-top:15px;">
            <div class="container">
                <el-row :gutter="20">
                    <el-col :lg="17" :md="17" :sm="24" :xs="24" class="m_article">
                        <div class="text-center article-header">
                            <p class="text-xxxl article_title f16 black">推出15个武汉市重点基础设施建设</p>
                            <div>
                                <p class="black2" style="margin-right:20px;">时间：12-12-11</p>
                                <p class="black2">浏览次数：1234</p>
                            </div>
                        </div>
                        <hr>
                        <div class="wrapper-lg">
                            <p>长江网11月27日讯(长江日报记者张隽玮 通讯员周钢)27日,记者从武汉市发改委获悉,第六期“N+C”投融资论坛武汉市专场近日在北京举行,
                                共推出15个武汉市重点基础设施建设项目,总额728亿元。
                                投融资论坛由国家发改委国际合作中心投融资办公室策划组织,N代表国家,C代表城市,旨在邀请与基础设施建设密切相关的政府官员、
                                专家学者、社会资本方和金融机构代表等,针对具体的政府和社会资本合作基础设施项目进行深入探讨,
                                以便更好地促进PPP项目的规范实施和有效推进。自去年10月首次举办以来,已有广州、西安等城市进行了投融资项目对接。</p>
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
            };
        },
        created() {
            this.setNews();
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            setNews() {
                var _this = this;
                _this.getRequest('/pub/news')
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.ranking = res['data']['ranking'];  //右侧热门资讯
                            console.log(res['data']['ranking']);
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