<template>
    <div>
        <div class="bg-img1"></div>
        <div class="incubation margin-bottom">
            <!--翻转-->
            <div class="distance rotate">
                <div class="container">
                    <el-row :gutter="20" class="incubation_overturn clearfix">
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front bdColor">
                                        <img src="static/img/kongjianzulin.png" alt="">
                                        <p class="incubator_one_p">空间租赁</p>
                                        <p class="index_why_p  text-ellipsis-muti text-ellipsis-2">办公设施设备齐全</p>
                                        <button type="button" class="btn btn1 bgColor white f14" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">空间租赁</p>
                                        <p class="index_why_p  text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">办公设施设备齐全 管家式服务、互联网+企业社群</p>
                                        <button type="button" class="btn btn2 f14 fontColor" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo" style="margin-top:20px;line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front bdColor">
                                        <img src="static/img/xsfh.png" alt="">
                                        <p class="incubator_one_p">线上孵化</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-2">通过虚拟办公室开拓市场。</p>
                                        <button type="button" class="btn btn1 bgColor white f14" data-toggle="modal" data-target="#onlineIncubation" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">线上孵化</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">通过我们的虚拟办公室计划，您可以选择合适的虚拟地址无需额外费用。</p>
                                        <button type="button" class="btn btn2 f14 fontColor" data-toggle="modal" data-target="#onlineIncubation" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front bdColor">
                                        <img src="static/img/gongxiangbangong.png" alt="">
                                        <p class="incubator_one_p">共享办公</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-2">全配置拎包入驻，1天起租</p>
                                        <button type="button" class="btn btn1 bgColor white f14" data-toggle="modal" data-target="#createSpace" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">共享办公</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3 white" style="height:43px;">移动办公，根据您的需求随意选择每天的办公桌位置，租期无限灵活。</p>
                                        <button type="button" class="btn btn2 f14 fontColor" data-toggle="modal" data-target="#createSpace" data-whatever="@mdo" style="margin-top:20px;line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front bdColor">
                                        <img src="static/img/gongxianghuiyishi.png" alt="">
                                        <p class="incubator_one_p">共享会议室</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-2">即约即用，灵活高效</p>
                                        <button type="button" class="btn btn1 bgColor white f14" data-toggle="modal" data-target="#shareMeetingRoom" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                        <!--<button type="text" @click="spaceForm = true" class="btn btn1"style="line-height:20px;">立即申请 ></button>-->
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">共享会议室</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">提供路演、采访、演讲、培训等会议室租赁服务。满足您在会议期间的餐饮、咖啡、放映设备等各种需求。</p>
                                        <button type="button" class="btn btn2 f14 fontColor" data-toggle="modal" data-target="#shareMeetingRoom" data-whatever="@mdo" style="margin-top:20px;line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <!--云创孵化-->
            <div class="cloud_incubation margin-bottom">
                <div class="container">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24">
                            <p class="title" style="margin-top: -50px;">云创孵化</p>
                            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                <el-row  :gutter="20" class="clearfix">
                                    <el-col :lg="8" :md="8" :sm="12" :xs="24" v-for="(item,index) in incubators" :key="index" v-if="index<3">
                                       <router-link :to="{ name: 'incubator',params: { id: item.id}}" class="index_headline">
                                            <img :src="item.uri" alt="">
                                            <div class="index_headline_content">
                                                <h4 class="h4 text-ellipsis">{{ item.title }}</h4>
                                                <p class="p3 line-height text-ellipsis">地址: {{ item.address }}</p>
                                                <p class="p3 line-height">联系电话: {{ item.phone }}</p>
                                                <p class="p3 line-height" v-if="item.level == subItem.id" v-for="(subItem,index) in dicts" :key="index">
                                                    级别: {{ subItem.value }}
                                                </p>
                                                <p class="p3 line-height text-ellipsis" v-if="item.region == subItem.id" v-for="(subItem,index) in dicts" :key="index">
                                                    地区: {{ subItem.value }}
                                                </p>
                                                <div style="height:40px;overflow: hidden;">
                                                    <p class="dib" v-for="(upItem,index) in item.label" :key="index">
                                                        <span class="label2 fontColor" v-if="upItem == subItem.id" v-for="(subItem,index) in dicts" :key="index">
                                                            {{ subItem.value }}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
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
            <!--孵化项目-->
            <div class="distance margin-bottom bg_title">
                <div class="container">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <p class="title">孵化项目</p>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <el-row class="clearfix">
                                    <el-col :lg="6" :md="8" :sm="12" :xs="24" class="incubation_project" v-for="(item,index) in seeds" :key="index">
                                       <router-link :to="{ name: 'seed',params: { id: item.id}}">
                                            <h1 class="f24 tc fontColor">{{ item.name }}</h1>
                                            <p class="text-ellipsis-muti text-ellipsis-2 f14 white tc">{{ item.intro }}</p>
                                        </router-link>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <!--入孵企业-->
            <div class="hatchedList margin-bottom">
                <div class="container">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <p class="title carousel_height">入孵企业</p>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="clearfix">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" class="port-1 effect-2" v-for="(item,index) in enterprises" :key="index">
                            <router-link :to="{ name: 'enterprise',params: { id: item.id}}" class="item db image-box" style="margin-bottom: 0;">
                                <h1 class="tc text-ellipsis p_padding black1 f18">{{ item.name }}</h1>
                                <div class="line_green bgColor"></div>
                                <p class="tc text-ellipsis-muti text-ellipsis-4 f14 black2" style="height:80px">优势 : {{ item.advantage }}</p>
                                <p class="tc f14 black2">
                                    <span>所属领域 : {{ item.field }}</span>
                                </p>
                                <div class="rel">
                                    <div class="img_wrap abs">
                                        <img :src="item.icon" alt="">
                                    </div>
                                    <div class="img_line abs"></div>
                                </div>
                            </router-link>

                            <router-link :to="{ name: 'enterprise',params: { id: item.id}}" class="item db text-desc i-p bgColor">
                                <div class="rel"  style="margin-top:-20px;">
                                    <div class="img_wrap abs">
                                        <img :src="item.icon" style="border:none;">
                                    </div>
                                    <div class="img_line abs" style="background-color:#fff;"></div>
                                </div>
                                <p class="tc text-ellipsis-muti text-ellipsis-6 white" style="height:120px;">简介 : {{ item.intro }}</p>
                            </router-link>
                        </el-col>
                    </el-row>
                    <router-link to="/hatchedList" class="view_more db tc">
                        查看更多
                        <i class="el-icon-d-arrow-right" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
            <!--入孵流程图-->
            <div class="appli_process">
                <div class="container">
                    <el-row class="appli_process_list clearfix">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="appli_process_r_2 rel"></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
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
                incubators: '',
                seeds: '',
                enterprises: '',
                dicts: '',
                upItem: '',
                subItem: '',
            }
        },
        components: {

        },
        created() {
            this.setIncubatorsApi();
        },
        filters: {

        },
        methods: {
            setIncubatorsApi() {
                var _this = this;
                _this.getRequest('/pub/cloud')
                    .then(res => {
                        if (res && res.status == 200) {
                            this.incubators = res['data']['incubators']; //云创孵化
                            this.seeds = res['data']['seeds']; //孵化项目
                            this.enterprises = res['data']['enterprises']; //孵化项目
                            this.dicts = res['data']['dicts'];
                        }
                    })
            },




        }



    }
</script>
<style>

</style>
