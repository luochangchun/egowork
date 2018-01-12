<template>
    <div>
        <div class="bg-img1"></div>
        <div class="incubation" style="padding-bottom:150px;">
            <!--翻转-->
            <div class="distance rotate">
                <div class="container">
                    <el-row :gutter="20" class="incubation_overturn clearfix">
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front">
                                        <img src="static/img/kongjianzulin.png" alt="">
                                        <p class="incubator_one_p">空间租赁</p>
                                        <p class="index_why_p  text-ellipsis-muti text-ellipsis-2">办公设施设备齐全</p>
                                        <button type="button" class="btn btn1" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back">
                                        <p class="incubator_one_p">空间租赁</p>
                                        <p class="index_why_p  text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">办公设施设备齐全 管家式服务、互联网+企业社群</p>
                                        <button type="button" class="btn btn2" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo" style="margin-top:20px;line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front">
                                        <img src="static/img/xsfh.png" alt="">
                                        <p class="incubator_one_p">线上孵化</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-2">通过虚拟办公室开拓市场。</p>
                                        <button type="button" class="btn btn1" data-toggle="modal" data-target="#onlineIncubation" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back">
                                        <p class="incubator_one_p">线上孵化</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">通过我们的虚拟办公室计划，您可以选择合适的虚拟地址无需额外费用。</p>
                                        <button type="button" class="btn btn2" data-toggle="modal" data-target="#onlineIncubation" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front">
                                        <img src="static/img/gongxiangbangong.png" alt="">
                                        <p class="incubator_one_p">共享办公</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-2">全配置拎包入驻，1天起租</p>
                                        <button type="button" class="btn btn1" data-toggle="modal" data-target="#createSpace" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back">
                                        <p class="incubator_one_p">共享办公</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">移动办公，根据您的需求随意选择每天的办公桌位置，租期无限灵活。</p>
                                        <button type="button" class="btn btn2" data-toggle="modal" data-target="#createSpace" data-whatever="@mdo" style="margin-top:20px;line-height:20px;">立即申请 ></button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="6" :lg="6" class="item">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div class="front">
                                        <img src="static/img/gongxianghuiyishi.png" alt="">
                                        <p class="incubator_one_p">共享会议室</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-2">即约即用，灵活高效</p>
                                        <button type="button" class="btn btn1" data-toggle="modal" data-target="#shareMeetingRoom" data-whatever="@mdo" style="line-height:20px;">立即申请 ></button>
                                        <!--<button type="text" @click="spaceForm = true" class="btn btn1"style="line-height:20px;">立即申请 ></button>-->
                                    </div>
                                    <div class="back">
                                        <p class="incubator_one_p">共享会议室</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:44px;">提供路演、采访、演讲、培训等会议室租赁服务。满足您在会议期间的餐饮、咖啡、放映设备等各种需求。</p>
                                        <button type="button" class="btn btn2" data-toggle="modal" data-target="#shareMeetingRoom" data-whatever="@mdo" style="margin-top:20px;line-height:20px;">立即申请 ></button>
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
                                <el-row class="clearfix">
                                    <el-col :lg="8" :md="8" :sm="12" :xs="24" v-for="(item,index) in 3" :key="index">
                                        <router-link to="/incubator" class="index_headline">
                                            <img src="static/img/ccfh.png" alt="">
                                            <div class="index_headline_content">
                                                <h4 class="h4 text-ellipsis">${incubator.title!}</h4>
                                                <p class="p3 line-height text-ellipsis">地址: ${incubator.address!}</p>
                                                <p class="p3 line-height">联系电话: ${incubator.phone!}</p>
                                                <p class="p3 line-height">级别:${dictionaries.value}</p>
                                                <p class="p3 line-height text-ellipsis">地区:${dictionaries.value}</p>
                                                <div>
                                                    <span class="label2">${dictionaries.value}</span>
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
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
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
                                    <el-col :lg="6" :md="8" :sm="12" :xs="24" class="incubation_project" v-for="(item,index) in 4" :key="index">
                                        <router-link to="/seed">
                                            <h1>${seed.name!}</h1>
                                            <p class="text-ellipsis-muti text-ellipsis-2">${seed.intro!}</p>
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
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" class="port-1 effect-2" v-for="(item,index) in 4" :key="index">
                            <router-link to="/enterprise" class="item db image-box" style="margin-bottom: 0;">
                                <h1 class="tc text-ellipsis p_padding">鹏博士电信传媒集团股份有限公司武汉分公司</h1>
                                <div class="line_green"></div>
                                <p class="tc text-ellipsis-muti text-ellipsis-4" style="height:80px">优势 : 200-1000M超宽带 大麦盒子 长宽电视 鹏云课堂 云游戏 15米家庭信息化全管服务</p>
                                <p class="tc">
                                    <span>所属领域 : 信息通讯</span>
                                </p>
                                <div class="rel">
                                    <div class="img_wrap abs">
                                        <img src="static/img/yunzhikangjian.png" alt="">
                                    </div>
                                    <div class="img_line abs"></div>
                                </div>
                            </router-link>

                            <router-link to="/enterprise" class="item db text-desc" style="padding-bottom: 55px;height:231px;display:none;z-index:10;margin-bottom: 0!important;background-color:#18b494;">
                                <div class="rel"  style="margin-top: 0;">
                                    <div class="img_wrap abs">
                                        <img src="static/img/yunzhikangjian.png" alt="" style="border:none;">
                                    </div>
                                    <div class="img_line abs" style="background-color:#fff;"></div>
                                </div>
                                <p class="tc text-ellipsis-muti text-ellipsis-6" style="height:120px;color:#fff;">简介 : ${enterprise.intro!}</p>
                            </router-link>
                        </el-col>
                    </el-row>
                    <router-link to="/hatchedList" class="view_more db tc">
                        查看更多
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
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

</script>
<style>

</style>
