<template>
    <div class="bdColor sdp">
        <div class="container sdw serviceDetail">
            <el-row>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/service' }">云创服务</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
            <el-row :gutter="20">
                <el-col :lg="6" :md="6" :sm="24" :xs="24">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <a target="_blank" href="https://www.hansap.com/portal/welcome" style="color:#333;">
                                    <span slot="title" class="f15 b">企业信息化</span>
                                </a>
                            </template>
                        </el-submenu>
                        <el-submenu :index="item.category.id" v-for="(item,index) in products" :key="index" :cid="item.category.id" @tab-click="handleClick">
                            <template slot="title">
                                <span slot="title" class="f15 b" :cid="item.id">{{ item.category.name }}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1" v-if="services.category.id == servicesList.pid" v-for="(item, index) in servicesList" :key="index" :cid="item.pid">
                                    <el-menu-item index="1-1">
                                        <router-link :to="{ name: 'serviceDetail',params: { id: item.id}}" :router="true" class="black2 f14">
                                            {{ item.title }}
                                        </router-link>
                                    </el-menu-item>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :lg="18" :md="18" :sm="24" :xs="24" class="category-bg">
                    <div class="service_detail_title">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="service_body">
                            <div>
                                <p class="f20 b" style="color:#18b494;display: inline-block; margin-bottom:30px;">
                                    {{ servicesDetail.title }}
                                </p>
                                <!--QQ-->
                                <a id="category-qq" class="text-center ng-scope" href="http://wpa.qq.com/msgrd?v=3&amp;uin=3453276422&amp;site=qq&amp;menu=yes" target="_blank">
                                    <!--<i class="icon fa fa-qq animate_opatoshow animate_start"> 在线咨询</i>-->
                                    <img src="static/img/btn_zxzx.png" alt="">
                                </a>
                                <div v-html="servicesDetail.content" style="border-top:1px dashed #ddd;padding-top:20px;"></div>
                            </div>
                        </el-col>
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
                category: '',
                products: '',
                servicesDetail: '',
//                id: 'services.category.id',
//                servicesList: '',
            }
        },
        components: {

        },
        created() {
            let id = this.$route.params.id;
            this.setServiceList();
            this.setServiceDetail(id);
//            this.setService();
        },
        filters: {

        },
//路由监听
        watch: {
            '$route' (to, from) { //监听路由是否变化
                if(this.$route.params.id){//是否有文章id /文章id
                    //获取文章数据
                    //this.setServiceDetail(id);//获取id
                    this.setServiceDetail(this.$route.params.id);//传入文章id
//                console.log(this.$route.params.id);
                }
            }
        },

        methods: {
            handleOpen(key, keyPath) {
//            console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//            console.log(key, keyPath);
            },
//            setService() {
//                var _this = this;
//                _this.getRequest('/pub/service')
//                    .then(res =>{
//                        if (res && res.status == 200) {
//                            this.services = res['data'];  //服务分类
////                        console.log(res['data']);
////                        console.log(res);
//                        }
//                    })
//            },
//点击
            handleClick(tab, event) {
                //点击切换tab,切换文章列表类别
                this.setServiceList(tab["$attrs"]["servicesCategory"]);
                console.log(tab["$attrs"]["servicesCategory"]);
                window.localStorage.setItem("servicesCategory",tab["$attrs"]["servicesCategory"]);
                console.log("servicesCategory",tab["$attrs"]["servicesCategory"]);
            },

            setServiceList(cid) {
                var _this = this;
                let id=window.localStorage.getItem("servicesCategory");
                _this.getRequest('/product/cat/top/' + id )
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.products = res['data'];  //服务分类
                            console.log(res['data']);
//                        console.log(res);
                        }
                    })
            },
            setServiceDetail() {
                var _this = this;
//                let id=window.localStorage.getItem("servicesCategory");
                _this.getRequest('/product/' + id)
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.servicesDetail = res['data'];  //服务产品详情
//                        console.log(res);
                        }
                    })
            }



        }

    }
</script>


<style>

</style>