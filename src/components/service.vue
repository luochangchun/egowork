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
                                <a href="https://www.hansap.com/portal/welcome" target="__blank" class="s-p">点击查看更多</a>
                            </el-tab-pane>
                            <el-tab-pane v-for="(item,index) in services" :key="index" :label="item.category.name" :cid="item.category.id">
                                <el-row>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6">
                                        <div class="s-img">
                                                <span v-if="item.category.id == 163">
                                                    <img src="static/img/163.png" alt="" class="rel">
                                                </span>
                                            <span v-if="item.category.id == 164">
                                                    <img src="static/img/164.png" alt="" class="rel">
                                                </span>
                                            <span v-if="item.category.id == 165" >
                                                    <img src="static/img/165.png" alt="" class="rel">
                                                </span>
                                            <span v-if="item.category.id == 166">
                                                    <img src="static/img/166.png" alt="" class="rel">
                                                </span>
                                            <span v-if="item.category.id == 167">
                                                    <img src="static/img/167.png" alt="" class="rel">
                                                </span>
                                            <span v-if="item.category.id == 168">
                                                    <img src="static/img/168.png" alt="" class="rel">
                                                </span>
                                            <span v-if="item.category.id == 169">
                                                    <img src="static/img/169.png" alt="" class="rel">
                                                </span>
                                            <p class="abs white f14 serp">{{ item.category.description }}</p>
                                            {{item.category.id}}
                                        </div>
                                    </el-col>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6"  v-for="(item, index) in item.products" :key="index" :cid="item.id" v-if="index<9">
                                        <ul class="service_index_ul cl">
                                            <router-link :to="{ name: 'serviceDetail',params: { id: item.id}}">
                                                <li class="service_index_li">
                                                    <h1>{{ item.title }}</h1>
                                                    {{item.id}}
                                                    <p class="text-ellipsis-muti text-ellipsis-3">{{ item.intro }}</p>
                                                </li>
                                            </router-link>
                                        </ul>
                                    </el-col>
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
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                services: '',
                cid: '',
            };
        },
        created() {
            this.setService();
        },
        methods: {
            handleClick(tab, event) {
//                console.log(tab, event);
//                this.cid = cid;
//                window.localStorage.setItem("servicesCategoryId",id);
            },
            setService() {
                var _this = this;
                _this.getRequest('/pub/service')
                    .then(res => {
                        if (res && res.status == 200) {
                            this.services = res['data'];  //服务分类
//                            console.log(res['data']);
//                        console.log(res);
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