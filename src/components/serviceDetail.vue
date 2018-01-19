<template>
    <div class="bdColor sdp">
        <div class="container sdw">
            <el-row>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/service' }">云创服务</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
            <el-row :gutter="20">
                <el-col :lg="6" :md="6" :sm="24" :xs="24">
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <a target="_blank" href="https://www.hansap.com/portal/welcome" style="color:#333;">
                                    <span slot="title">企业信息化</span>
                                </a>
                            </template>
                        </el-submenu>
                        <el-submenu index="item.index" v-for="(item,index) in services" :key="index">
                            <template slot="title">
                                <span slot="title">{{ item.category.name }}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="item.index" v-for="(item, index) in item.products" :key="index">{{ item.title }}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :lg="18" :md="18" :sm="24" :xs="24" class="category-bg">
                    <div class="service_detail_title">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="service_body">
                                <div>
                                    <p class="f20 b" style="color:#18b494;display: inline-block; margin-bottom:30px;">小微企业贷款</p>
                                    <!--QQ-->
                                    <a id="category-qq" class="text-center ng-scope" href="http://wpa.qq.com/msgrd?v=3&amp;uin=3453276422&amp;site=qq&amp;menu=yes" target="_blank">
                                        <!--<i class="icon fa fa-qq animate_opatoshow animate_start"> 在线咨询</i>-->
                                        <img src="static/img/btn_zxzx.png" alt="">
                                    </a>
                                    <div style="border-top:1px dashed #ddd;padding-top:20px;">
                                        申请要求：
                                        <br/>
                                        1、企业或个体工商户经营实体在武汉，经营时间满一年。
                                        <br/>
                                        2、企业、法人或股东名下在武汉有房产（包括按揭房或全款房，证明稳定性）。
                                        <br/>
                                        3、暂时对能源煤炭、及房地产行业不开放授信。
                                        <br/>
                                        4、信用保证类贷款要求企业负债率不高于75%及以上。
                                        <br/>
                                        5、抵押类贷款抵押物可以是公司、法人、股东或直系亲属名下固定资产（纯土地不能作抵押）。
                                    </div>
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
            services: '',
            servicesDetail: '',
        }
    },
    components: {

    },
    created() {
        this.setServiceList();
        this.setServiceDetail();
    },
    filters: {

    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        setServiceList() {
            api.Get('/pub/service')
                .then(res =>{
                    this.services = res;  //服务分类
                    console.log(res);
                })
        },
        setServiceDetail() {
            let scid = window.localStorage.getItem("scid");
            api.Get('/product/cat' + "/?cid=" + scid)
                .then(res =>{
                    this.servicesDetail = res;  //服务产品详情
                    console.log(res);
                })
        }



    }

}
</script>


<style>

</style>