<template>
    <div>
        <div class="bg-img3"></div>
        <div class="service margin-bottom">
            <!-- 创业服务 -->
            <div class="container margin-bottom">
                <el-row>
                    <p class="title carousel_height">创业服务</p>
                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                        <el-tabs @tab-click="handleClick" type="card">
                            <el-tab-pane label="企业信息化">
                                <p class="s-p">点击查看更多</p>
                            </el-tab-pane>
                            <el-tab-pane v-for="(item,index) in 7" :key="index" label="知识产权大" :cid="item.id">
                                <el-row>
                                    <router-link to="/serviceDetail">
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6">
                                            <div class="s-img">
                                                <img src="static/img/fw_left1.png" class="rel">
                                                <p class="abs white f14 serp">招聘类服务招聘类服务招聘类服务招聘类服务
                                                    招聘类服务招聘类服务招聘类服务招聘类服务
                                                    招聘类服务招聘类服务招聘类服务招聘类服务招聘类服务招聘类服务招聘类服务
                                                    招聘类服务招聘类服务招聘类服务招聘类服务招聘类服务
                                                </p>
                                            </div>
                                        </el-col>
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6"  v-for="(item, index) in 9" :key="index">
                                            <ul class="service_index_ul cl">
                                                <router-link to="/serviceDetail">
                                                    <li class="service_index_li">
                                                        <h1>招聘类服务</h1>
                                                        <p class="text-ellipsis-muti text-ellipsis-3">1、高端人才猎头、2、招聘外包、3、背景调查、4、人才测评</p>
                                                    </li>
                                                </router-link>
                                            </ul>
                                        </el-col>
                                    </router-link>
                                </el-row>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </div>
            <!-- 创业服务 -->

            <!-- 企业培训申请流程 -->
            <div class="appli_process">
                <div class="container">
                    <el-row class="appli_process_list clearfix">
                        <el-col :lg="4" :md="4" :sm="4" :xs="4">
                            <div class="appli_process_l">
                                <p class="tc">服务</p>
                                <p class="tc">申请流程</p>
                                <a type="button" class="tc" data-toggle="modal" data-target="#demandForm" data-whatever="@mdo">发布需求</a>
                            </div>
                        </el-col>
                        <el-col :lg="20" :md="20" :sm="20" :xs="20">
                            <div class="appli_process_r_1 rel"></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!-- 企业培训申请流程 -->

            <!--成功案例-->
            <div class="bg_title distance">
                <div class="container">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <p class="title">成功案例</p>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <img src="static/img/06.png" alt="">
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <img src="static/img/07.png" alt="">
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <img src="static/img/02.png" alt="">
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <img src="static/img/03.png" alt="">
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <img src="static/img/04.png" alt="">
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <img src="static/img/05.png" alt="">
                            </el-col>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!--成功案例-->

            <!--合作伙伴-->
            <div class="partner">
                <div class="container">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <p class="title carousel_height">合作伙伴</p>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo1"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo2"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo3"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo4"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo5"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo6"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo7"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo8"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo9"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo10"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo11"></div>
                            </el-col>
                            <el-col :lg="4" :md="4" :sm="6" :xs="8">
                                <div class="partner_logo partner_logo12"></div>
                            </el-col>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!--合作伙伴-->

        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {

            };
        },
        created() {
//            this.newApi();
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }


        },
        filters: {

        }
    };
</script>
<style>

</style>