<template>
    <el-row style="background-color:#f1f1f1;width:100%;padding-top:30px;padding-bottom:50px;">
        <div class="container">
            <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;">
                                <div class="incubation_detail_content float_left">
                                    <h4 class="h4 black1">宜昌慧云电子商务创业园</h4>
                                    <p class="line-height black3 f14">地址:宜昌市西湖路32号2号楼</p>
                                    <p class="line-height black3 f14">联系电话:121342342333</p>
                                    <p class="line-height black3 f14">级别:国家级</p>
                                    <p class="line-height black3 f14">地区:西陵区</p>
                                    <button class="btn3" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo">申请入驻</button>
                                    <p class="p4 color2 text-ellipsis-muti text-ellipsis-4 black2">宜昌慧云科技孵化器定位为互联网云计算、电子商务的科技企业专业孵化器。
                                        宜昌慧云科技孵化器充分依托武汉火凤凰云基地的云计算大数据的优势资源，搭建“中小企业信息化云服务平台”，为园区及孵化器内的企业利用“互联网+技术”，改变企业的经营方式，促进企业创新创业。
                                        孵化器聘请了4位创业导师为在孵企业提供创业辅导、咨询、企业诊断、市场对接、投融资等形式多样的创业服务。</p>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <!--空间展示-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span>空间展示</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <el-col class="space_show_img" style="margin-right:0;;border:none;">
                                <el-row :gutter="20">
                                    <el-col :lg="18" :md="18" :sm="18" :xs="24" style="background-color:#fff;padding:20px;">
                                        <el-row :gutter="20">
                                            <el-col :lg="8" :md="8" :sm="8" :xs="8"  v-for="(item,index) in 3" :key="index">
                                                <div class="s_show_img">
                                                    <img src="static/img/incubator_img.png" alt="">
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="24" class="space_show_right">
                                        <div style="border-bottom:1px solid #A53B3B;padding-bottom:10px;">
                                            <h1 class="detail_title"><span>|</span> 直投基金</h1>
                                            <p>有</p>
                                        </div>
                                        <div style="padding-bottom:30px;">
                                            <h1 class="detail_title"><span>|</span> 入驻类型</h1>
                                                <span class="label2" v-for="(item,index) in 10" :key="index">大数据</span>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-col>
                    </el-row>

                    <!--招商政策-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 招商政策</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="investment_policy">
                                <ul>
                                    <li  v-for="(item,index) in 4" :key="index">空间服务空间服务空间服务空间服务空间服务空间服务空间服务</li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 空间服务</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;padding-left:20px;padding-right:20px;">
                                <el-row>
                                    <el-col :lg="2" :md="2" :sm="6" :xs="8" class="space_show" v-for="(item,index) in 14" :key="index">
                                        <div class="space_img">
                                            <div>
                                                <img src="static/img/kjfw.png" alt="">
                                                <p>信息化服务</p>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 配套设施</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;padding-left:20px;padding-right:20px;">
                                <el-row>
                                    <el-col :lg="2" :md="2" :sm="6" :xs="8" class="space_show" v-for="(item,index) in 5" :key="index">
                                            <div class="space_img">
                                                <div>
                                                    <img src="static/img/ptss.png" alt="">
                                                    <p>会议室</p>
                                                </div>
                                            </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </el-row>
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

