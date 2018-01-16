<template>
    <el-row style="background-color:#f1f1f1;width:100%;padding-top:30px;padding-bottom:50px;">
        <div class="container" v-for="(item,index) in incubator" :key="item">
            <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="index_headline i-d">
                                <div class="incubation_detail_content float_left">
                                    <h4 class="h4 black1">{{ item.title }}</h4>
                                    <p class="line-height black3 f14">地址: {{ item.address }}</p>
                                    <p class="line-height black3 f14">联系电话: {{ item.phone }}</p>
                                    <p class="line-height black3 f14">级别: {{ item.level }}</p>
                                    <p class="line-height black3 f14">地区: {{ item.region }}</p>
                                    <button class="btn3" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo">申请入驻</button>
                                    <p class="p4 color2 text-ellipsis-muti text-ellipsis-4 black2">{{ item.settled }}</p>
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
                                                <span class="label2 fontColor" v-for="(item,index) in 10" :key="index">大数据</span>
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
                                                    <p>{{ item.facility}}</p>
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
    import api from '../axios/api.js'
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                incubator: '',
            }
        },
        components: {

        },
        created() {
            let id = this.$route.params.id;
            this.setNewsApiDetail(id);
        },
        filters: {

        },
        methods: {
            setNewsApiDetail(id) {
                api.Get('/qb/' + id)
                    .then(res =>{
                        this.incubator = res; //孵化器详情
                        console.log(res);
                    })
            },
        },




    }
</script>

<style>
</style>

