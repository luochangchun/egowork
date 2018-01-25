<template>
    <div>
        <div class="container">
            <el-row :gutter="20" class="margin-bottom">
                <el-col :lg="17" :md="17" :sm="24" :xs="24">
                    <el-row :gutter="20">
                        <el-col :lg="12" :md="12" :sm="24" :xs="24" v-for="(item, index) in top" :key="index">
                            <div>
                                <router-link :to="{ name: 'article',params: { id: item.id}}">
                                    <span class="news_header_img">
                                                <img :src="item.icon" alt="">
                                                <p class="text-ellipsis">{{ item.title }}</p>
                                            </span>
                                </router-link>
                            </div>
                        </el-col>
                    </el-row>
                    <!--导航切换-->
                    <el-tabs v-model="activeName"  @tab-click="handleClick">
                        <el-tab-pane v-for="(item,index) in categories" :key="index" :label="item.name" :name="item.cname" :cid="item.id">
                            <el-row :gutter="10" class="news-leftlist">
                                <router-link :to="{ name: 'article',params: { id: item.id}}" class="news-left news-clear" v-for="(item, index) in newsList" :key="index">
                                    <el-col :lg="8" :md="8" :sm="8" :xs="8" class="news-left-img">
                                        <img :src="item.icon" class="w-full">
                                    </el-col>
                                    <el-col :lg="16" :md="16" :sm="16" :xs="16" class="news-left-content">
                                        <p class="news-text-ellipsis news-margin">
                                            <a class="text-dark-lt f16 b">{{ item.title }}</a>
                                        </p>
                                        <p class="text-ellipsis-muti text-ellipsis-4 f14 black1 news-height">{{ item.description }}</p>
                                        <div style="bottom:25px;">
                                            <p class="text-muted pull-left m-r"><i class="el-icon-time"></i> <span>时间：{{item.time | formatDate}}</span></p>
                                            <p class="text-muted pull-left m-r"><i class="el-icon-view"></i> <span>浏览次数: {{ item.views }}</span></p>
                                            <p class="text-muted pull-left"><i class="el-icon-edit-outline"></i> <span>云创空间</span></p>
                                        </div>
                                    </el-col>
                                </router-link>
                            </el-row>
                            <!--分页-->
                            <el-row>
                                <el-col class="tc margin-bottom">
                                    <el-pagination background :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                   </el-pagination>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <!--右边热门排行-->
                <el-col :lg="7" :md="7" :sm="24" :xs="24">
                    <div class="news-rightlist bdColor">
                        <p class="f16 b">热门资讯 : </p>
                        <el-row class="news-rightlist">
                            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="m-t m-right" v-for="(item, index) in ranking" :key="index">
                                <div>
                                    <router-link :to="{ name: 'article',params: { id: item.id}}">
                                        <p style="margin-bottom:5px;clear:both;color:#428bca;">{{ item.title }}</p>
                                        <div>
                                            <p class="text-muted pull-left m-r"><i class="el-icon-time"></i><span> 时间：{{item.time | formatDate}}</span></p>
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
</template>

<script>
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                activeName: "tab0",
                top: '',
                categories: '',
                newsList: '',
                ranking: '',
                totalPages: '',
            };
        },
        mounted() {
            this.setNews(); //资讯页
        },
        methods: {
            handleClick(tab, event) {
                //点击切换tab,切换文章列表类别
                this.setNewsList(tab["$attrs"]["cid"]);
                window.localStorage.setItem("cid", tab["$attrs"]["cid"]);
            },
            setNews() {
                var _this = this;
                var domain = "http://www.egowork.com/";
                _this.getRequest('/pub/news')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.top = res['data']['top']; //左侧顶部两个资讯
                            for (var i = 0; i < _this.top.length; i++) {
                                _this.top[i]['icon'] = domain + _this.top[i]['icon'];
                            }
                            _this.categories = res['data']['categories']; //分类  
                            _this.categories.forEach((value, index, array) => {
                                _this.categories[index]["cname"] = "tab" + index;
                                if (index == 0) {
                                    //打开新闻资讯首页，默认加载每日头条第1页
                                    this.setNewsList(_this.categories[index]["id"]);
                                    window.localStorage.setItem("nid", _this.categories[index]["id"]);
                                }
                            });
                            this.ranking = res['data']['ranking']; //右侧热门资讯
                        }
                    })
            },
            setNewsList(id) {
                var _this = this;
                var domain = "http://www.egowork.com/";
                var url = "/article/" + "8" + "/" + "0" + '?cid=' + id;
                _this.getRequest(url)
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.newsList = res['data']['content']; //资讯列表
                            for (var i = 0; i < _this.newsList.length; i++) {
                                _this.newsList[i]['icon'] = domain + _this.newsList[i]['icon'];
                            }
                            _this.totalPages = res['data']['total'] * 10; //分页
                        }
                    })
            },
            handleCurrentChange(val) {
                var _this = this;
                var value = val-1;
                var domain = "http://www.egowork.com/";
                //获取到当前分页页码，获取当前页面数据
                let cid = window.localStorage.getItem("cid");
                var url = "/article/" + "8" + "/" + value + '?cid=' + cid;
                _this.getRequest(url)
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.newsList = res['data']['content']; //资讯列表
                            for (var i = 0; i < _this.newsList.length; i++) {
                                _this.newsList[i]['icon'] = domain + _this.newsList[i]['icon'];
                            }
                            _this.totalPages = res['data']['total'] * 10; //分页
                        }
                    })
            }
        },
    };
</script>
