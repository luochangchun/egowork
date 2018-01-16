<template>
    <div class="index">
        <!--轮播-->
        <template>
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,index) in bImgs" :key="item.id" class="header-banner-imgs">
                    <img :src="item.src">
                </el-carousel-item>
            </el-carousel>
        </template>

        <!-- 全面专业的服务体系 -->
        <div class="distance margin-bottom">
            <div class="container">
                <p class="title">全面专业的服务体系</p>
                <el-row>
                    <el-col :lg="6" :md="6" :sm="6" :xs="8" class="index_color">
                        <a target="_blank" href="https://www.hansap.com/portal/welcome" style="color:#333;">
                            <div class="index_service tc image-box">
                                <img src="static/img/1621.png">
                                <p class="f20">企业信息化</p>
                            </div>
                        </a>
                    </el-col>
                    <el-col :lg="6" :md="6" :sm="6" :xs="8" class="index_color" v-for="(item,index) in 7" :key="index">
                        <router-link to="/serviceDetail">
                            <a style="color:#333;">
                                <div class="index_service tc image-box">
                                    <img src="static/img/1631.png">
                                    <p class="f20">企业信息化</p>
                                </div>
                            </a>
                        </router-link>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 全面专业的服务体系 -->

        <!--国家孵化器-->
        <div class="bg_title distance carousel_btn">
            <div class="container">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <p  class="incubator title">国家级孵化器</p>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <el-row :gutter="20">
                                <el-col :lg="12" :md="12" :sm="24" :xs="24">
                                    <el-carousel  :interval="5000" arrow="always" class="index_incubator">
                                        <el-carousel-item v-for="item in imgArrs" :key="item.id" class="index_incubator_img">
                                            <img :src="item.src">
                                            <div class="index_incubator_content">
                                                <h3 class="f16 white">武汉火凤凰云计算孵化器管理有限公司{{ item }}</h3>
                                                <p class="text-ellipsis-muti text-ellipsis-6 f14 white">孵化器主要集聚云计算创新研发、大数据服务、小微创新创业、投融资服务等企业，孵化器依托火凤凰云基地云服务平台的优势资源，自建了线上“双云双创”孵化服务平台，线下孵化器...</p>
                                                <span class="label white tc f12">云计算/大数据平台</span>
                                            </div>
                                        </el-carousel-item>
                                    </el-carousel>
                                </el-col>
                                <el-col :lg="12" :md="12" :sm="24" :xs="24" v-for="item in imgArrs" :key="item.id" class="index-fh-mb">
                                    <router-link to="/incubator">
                                        <el-col :lg="10" :md="10" :sm="10" :xs="10">
                                            <div class="right_img">
                                                <img :src="item.src" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :lg="14" :md="14" :sm="14" :xs="14" class="right_content">
                                            <h3 class="text-ellipsis black1 f16">武汉火凤凰云计算孵化器管理有限公司</h3>
                                            <p class="text-ellipsis">地址: 武汉火凤凰云计算孵化器管理有限公司</p>
                                            <p>联系电话:027-59103580</p>
                                            <p>级别:国家级</p>
                                            <p>地区:江汉区</p>
                                            <span class="label2 fontColor" v-for="(item , index) in 3" :key="index">创业圣地</span>
                                        </el-col>
                                    </router-link>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-col>
                </el-row>
                <router-link to="/incubatorsList" class="view_more db tc">
                    查看更多
                    <i class="el-icon-d-arrow-right" aria-hidden="true"></i>
                </router-link>
            </div>
        </div>
        <!--国家孵化器-->

        <!--数字-->
        <el-col :lg="24" :md="24" :sm="24" :xs="0" class="number height">
            <img src="static/img/banner_1.png" alt="">
            <el-row class="container">
                <el-row>
                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                        <el-col class="fullwidth-block-inner">
                            <el-col class="container">
                                <el-col class="vc_row wpb_row vc_inner vc_row-fluid">
                                    <el-row id="numList">
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num01">
                                            <div class="index_number num01">
                                                <div class="num">
                                                    222
                                                </div>
                                                <div class="index_number_title f16 white">服务商(家)</div>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num02">
                                            <div class="index_number num02">
                                                <div class="num">
                                                   555
                                                </div>
                                                <div class="index_number_title f16 white">导师(位)</div>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num03">
                                            <div class="index_number num03">
                                                <div class="num">
                                                    888
                                                </div>
                                                <div class="index_number_title f16 white">服务产品种类(种)</div>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num04">
                                            <div class="index_number num04">
                                                <div class="num">
                                                    50000
                                                </div>
                                                <div class="index_number_title f16 white">孵化面积(m²)</div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-col>
                        </el-col>
                    </el-col>
                </el-row>
            </el-row>
        </el-col>
        <!--数字-->

        <!--线上课堂-->
        <div class="onlineCourse">
            <div class="container">
                <p class="title">线上课堂</p>
                <el-row :gutter="20" class="clearfix" id="onlineList">
                    <el-col :lg="6" :md="6" :sm="12" :xs="24" class="item db" style="margin-bottom: 20px" v-for="(item,index) in 4" :key="index">
                        <div class="onlineWrap rel ovh">
                            <img src="static/img/fh_bg1.png" style="height:170px;">
                            <div class="abs onlineMask">
                                <a target="__blank" href="http://vedio.whwomen.org.cn/free/play/54" class="tc white db">开始学习</a>
                            </div>
                        </div>
                        <div class="onlineWord">
                            <p class="text-ellipsis f14">工厂互联网巨头模式的优势与劣势</p>
                            <p class="clearfix">
                                <i class="fa fa-graduation-cap"></i>
                                <span>0</span>&nbsp;&nbsp;|&nbsp;
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                <span>18</span>
                                <strong class="r white tc bgColor">免费</strong>
                            </p>
                        </div>
                    </el-col>
                </el-row>
                <a target="_blank" href="http://vedio.whwomen.org.cn/front/showcoulist" class="view_more db tc">
                    查看更多
                    <i class="el-icon-d-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <!--线上课堂-->
    </div>





</template>

<script>
//    import api from '../axios/api.js'
    //  import Swiper from '../components/swiper.vue'
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                bImgs: [
                    { "id": '1', "src": "../static/img/banner01.jpg" },
                    { "id": '2', "src": "../static/img/banner02.jpg" },
                    { "id": '3', "src": "../static/img/banner03.jpg" }
                ],
                imgArrs: [
                    { "id": '1', "src": "../static/img/fh_bg1.png" },
                    { "id": '2', "src": "../static/img/fh_bg2.png" },
                    { "id": '4', "src": "../static/img/fh_bg3.png" }
                ],
                newStr: '',
                count: '',

            }
        },
        components: {
//      commonSwiper: Swiper
        },
        created() {

        },
        filters: {

        },
        methods: {

        },



    }
</script>

<style>
</style>

