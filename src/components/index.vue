<template>
    <div class="index">
        <!--轮播-->
        <!-- <template>
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,index) in bImgs" :key="item.id" class="header-banner-imgs">
                    <img :src="item.src">
                </el-carousel-item>
            </el-carousel>
        </template> -->
        <commonSwiper></commonSwiper>

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
                    <el-col :lg="6" :md="6" :sm="6" :xs="8" class="index_color" v-for="(item,index) in categories" :key="index">
                        <router-link :to="{ name: 'serviceDetail',params: { id: item.id}}">
                            <a style="color:#333;">
                                <div class="index_service tc image-box">
                                    <span v-if="item.id == 163">
                                        <img src="static/img/1631.png" alt="">
                                    </span>
                                    <span v-if="item.id == 164">
                                        <img src="static/img/1641.png" alt="">
                                    </span>
                                    <span v-if="item.id == 165" >
                                        <img src="static/img/1651.png" alt="">
                                    </span>
                                    <span v-if="item.id == 166">
                                        <img src="static/img/1661.png" alt="">
                                    </span>
                                    <span v-if="item.id == 167">
                                        <img src="static/img/1671.png" alt="">
                                    </span>
                                    <span v-if="item.id == 168">
                                        <img src="static/img/1681.png" alt="">
                                    </span>
                                    <span v-if="item.id == 169">
                                        <img src="static/img/1691.png" alt="">
                                    </span>
                                    <p class="f20">{{ item.name }}</p>
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
                                        <el-carousel-item v-for="(item , index) in incubators" :key="index" class="index_incubator_img">
                                            <span>
                                                <img :src="item.photos[0]['uri']" alt="">
                                            </span>

                                            <div class="index_incubator_content">
                                                <h3 class="f16 white">{{ item.title }}</h3>
                                                <p class="text-ellipsis-muti text-ellipsis-6 f14 white">{{ item.settled }}</p>
                                                <span class="label white tc f12">云计算/大数据平台</span>
                                            </div>
                                        </el-carousel-item>
                                    </el-carousel>
                                </el-col>
                                <el-col :lg="12" :md="12" :sm="24" :xs="24" v-for="(item,index) in incubators" :key="index" class="index-fh-mb" v-if="index<3">
                                    <router-link :to="{ name: 'incubator',params: { id: item.id}}">
                                        <el-col :lg="10" :md="10" :sm="10" :xs="10">
                                            <div class="right_img">
                                                <img :src="item.uri" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :lg="14" :md="14" :sm="14" :xs="14" class="right_content">
                                            <h3 class="text-ellipsis black1 f16">{{ item.title }}</h3>
                                            <p class="text-ellipsis">地址: {{ item.address }}</p>
                                            <p>联系电话: {{ item.phone }}</p>
                                            <p v-if="item.level == subItem.id" v-for="(subItem,index) in dictLevel" :key="index">
                                                级别: {{ subItem.value }}
                                            </p>
                                            <p v-if="item.region == subItem.id" v-for="(subItem,index) in dictRegion" :key="index">
                                                地区: {{ subItem.value }}
                                            </p>

                                            <div style="height:40px;overflow: hidden;">
                                                <p class="dib" v-for="(upItem,index) in item.label.split(',')" :key="index">
                                                    <span class="label2 fontColor" v-if="upItem == subItem.id" v-for="(subItem,index) in dictIncubator" :key="index">
                                                        {{ subItem.value }}
                                                    </span>
                                                </p>
                                            </div>
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
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num01" >
                                            <div class="index_number num01">
                                                <div class="num" v-html="chips.providers"></div>
                                                <div class="index_number_title f16 white">服务商(家)</div>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num02">
                                            <div class="index_number num02">
                                                <div class="num" v-html="chips.mentors"></div>
                                                <div class="index_number_title f16 white">导师(位)</div>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num03">
                                            <div class="index_number num03">
                                                <div class="num" v-html="chips.categories"></div>
                                                <div class="index_number_title f16 white">服务产品种类(种)</div>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6" class="num04">
                                            <div class="index_number num04">
                                                <div class="num" v-html="chips.area"></div>
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
    import api from '../axios/api.js'
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
                categories: '',
                incubators: '',
                chips: '',
                dictIncubator: '',
                upItem: '',
                subItem: '',
                dictLevel: '',
                dictRegion: '',
            }
        },
        components: {

        },
        created() {
            this.setNewsApi();
            this.setIncubator();
        },
        filters: {

        },
        methods: {
            setNewsApi() {
                api.Get('/pub/index')
                    .then(res =>{
                        this.categories = res['categories'];  //全面专业的服务体系
                        this.incubators = res['incubators']; //国家级孵化器
//                        console.log(res['incubators']);
                        this.chips = res['chips']; //数字
                    })
            },
            setIncubator() {
                api.Get('/dict/' + 'incubator')
                    .then(res =>{
                        this.dictLevel = res;//级别
                        this.dictRegion = res;//地区
                        this.dictIncubator = res;//label
                    })
            },





        }




};
</script>

<style>

</style>

