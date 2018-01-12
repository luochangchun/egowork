<template>
    <div style="background-color:#f1f1f1;width:100%;padding:20px 10px;">
        <div class="container">
            <p>全部孵化器 : </p>
            <el-row style="margin-top: 20px;">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" v-for="(item,index) in 4" :key="index">
                            <el-row :gutter="20" class="clearfix">
                                <el-col :lg="8" :md="8" :sm="12" :xs="24" style="clear:both;">
                                    <div class="index_headline" style="margin-right:0;border:none;">
                                        <a href="/" style="height:227px;display:block;">
                                            <img src="static/img/fh_bg1.png" alt="" style="height:224px;">
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :lg="16" :md="16" :sm="12" :xs="24">
                                    <div class="index_headline_content">
                                        <h4 class="h4 text-ellipsis">的课程纳斯达克承诺书戴口罩</h4>
                                        <p class="p3 line-height text-ellipsis">地址:啥东窗事发厕所的VC</p>
                                        <p class="p3 line-height text-ellipsis">联系电话: 123456789</p>
                                        <p class="p3 line-height text-ellipsis">级别:国家级</p>
                                        <p class="p3 line-height text-ellipsis">地区:地方岁的GV的</p>
                                        <router-link to="/incubator" class="btn5">
                                            查看详情
                                        </router-link>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    //    import api from '../axios/api.js'
    //  import Swiper from '../components/swiper.vue'
//    import {
//        formatDate
//    } from '../../static/js/date.js'
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

