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
                                        <button type="button" class="btn btn1 bgColor white f14" @click="alertRent(2)" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">空间租赁</p>
                                        <p class="index_why_p  text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:42px;">办公设施设备齐全 管家式服务、互联网+企业社群</p>
                                        <button type="button" class="btn btn2 f14 fontColor" @click="alertRent(2)" style="margin-top:20px;line-height:20px;">立即申请 ></button>
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
                                        <button type="button" class="btn btn1 bgColor white f14" @click="alertOnline" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">线上孵化</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:42px;">通过我们的虚拟办公室计划，您可以选择合适的虚拟地址无需额外费用。</p>
                                        <button type="button" class="btn btn2 f14 fontColor" @click="alertOnline" style="line-height:20px;">立即申请 ></button>
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
                                        <button type="button" class="btn btn1 bgColor white f14" @click="alertRent(1)" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">共享办公</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3 white" style="height:42px;">移动办公，根据您的需求随意选择每天的办公桌位置，租期无限灵活。</p>
                                        <button type="button" class="btn btn2 f14 fontColor" @click="alertRent(1)" style="margin-top:20px;line-height:20px;">立即申请 ></button>
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
                                        <button type="button" class="btn btn1 bgColor white f14" @click="alertShare" style="line-height:20px;">立即申请 ></button>
                                    </div>
                                    <div class="back bgColor">
                                        <p class="incubator_one_p">共享会议室</p>
                                        <p class="index_why_p text-ellipsis-muti text-ellipsis-3" style="color:#fff;height:42px;">提供路演、采访、演讲、培训等会议室租赁服务。满足您在会议期间的餐饮、咖啡、放映设备等各种需求。</p>
                                        <button type="button" class="btn btn2 f14 fontColor" @click="alertShare" style="margin-top:20px;line-height:20px;">立即申请 ></button>
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
                                <el-row :gutter="20" class="clearfix">
                                    <el-col :lg="8" :md="8" :sm="12" :xs="24" v-for="(item,index) in incubators" :key="index" v-if="index<3">
                                        <router-link :to="{ name: 'incubator',params: { id: item.id}}" class="index_headline">
                                            <img :src="item['icon']" alt="">
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
                                                    <p class="dib" v-for="(upItem,index) in item.label.split(',')" :key="index">
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
                                        <router-link :to="{ name: 'seed',params: { id: item.id}}" style="height:100%;padding-top:55px;">
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
                                <div class="rel" style="margin-top:-20px;">
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
        <!-- 空间租赁申请表 -->
        <el-dialog title="" :visible.sync="rentFromVisible" class="commmonForm">
            <h1 class="tc fontColor form_title" v-show="applyType == 2">空间租赁申请表</h1>
            <h1 class="tc fontColor form_title" v-show="applyType == 1">共享办公申请表</h1>
            <el-form ref="rentFrom" :model="rentFrom" :rules="rentRules">
                <el-form-item label="选择入驻孵化器" :label-width="formLabelWidth" prop="incubator">
                    <el-select v-model="rentFrom.incubator" placeholder="请选择入驻孵化器">
                        <el-option :label="item.title" :value="item.title+','+item.id" v-for="(item, index) in rentIncubators" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="公司名称" :label-width="formLabelWidth" prop="appellation">
                    <el-input v-model="rentFrom.appellation" placeholder="请输入您的企业名称" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="团队人数" :label-width="formLabelWidth" prop="quantity">
                    <el-input v-model="rentFrom.quantity" type="number" placeholder="请输入团队企业人数" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="成立情况" :label-width="formLabelWidth" prop="cases">
                    <el-select v-model="rentFrom.cases" placeholder="请选择">
                        <el-option label="请选择" value="请选择"></el-option>
                        <el-option label="筹建" value="筹建"></el-option>
                        <el-option label="初建" value="初建"></el-option>
                        <el-option label="2年以内" value="2年以内"></el-option>
                        <el-option label="2年以上" value="2年以上"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="毕业5年以内大学生" :label-width="formLabelWidth" prop="graduate">
                    <el-radio-group v-model="rentFrom.graduate">
                        <el-radio label='true'>是</el-radio>
                        <el-radio label='false'>否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="公司经营范围" :label-width="formLabelWidth" prop="range">
                    <el-input v-model="rentFrom.range" placeholder="请详细介绍公司经营范围" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item v-if="applyType == 2" label="所需办公面积" :label-width="formLabelWidth" prop="area">
                    <el-input v-model="rentFrom.area" type="number" placeholder="请输入公司所需办公面积,以m²为单位" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item v-if="applyType == 1" label="所需工位" :label-width="formLabelWidth" prop="area">
                    <el-input v-model="rentFrom.area" type="number" placeholder="请输入公司需要工位的数量,以个为单位" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="rentFrom.name" placeholder="请填写联系人的姓名" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="rentFrom.phone" placeholder="请填写联系人的手机号码" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="submitRent('rentFrom')">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 线上孵化申请表 -->
        <el-dialog title="" :visible.sync="onlineFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">线上孵化申请表</h1>
            <el-form ref="onlineForm" :model="onlineForm" :rules="onlineRules">
                <el-form-item label="企业名称" :label-width="formLabelWidth" prop="enterprise">
                    <el-input placeholder="请输入您的企业名称,选填" v-model="onlineForm.enterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="企业性质" :label-width="formLabelWidth" prop="substance">
                    <el-select v-model="onlineForm.substance" placeholder="请选择企业性质">
                        <el-option :label="item.value" :value="item.value+','+item.id" v-for="(item, index) in substances" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="企业在职人数" :label-width="formLabelWidth" prop="employee">
                    <el-input type="number" placeholder="请输入您的企业在职人数" v-model="onlineForm.employee" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="经营范围及主营业务" :label-width="formLabelWidth" prop="business">
                    <el-input placeholder="请输入您企业的经营范围及主营业务,不超过200字" type="textarea" :rows="3" v-model="onlineForm.business" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册时间" :label-width="formLabelWidth" prop="signup">
                    <el-date-picker v-model="onlineForm.signup" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="注册地址" :label-width="formLabelWidth" prop="signupAddr">
                    <el-input v-model="onlineForm.signupAddr" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册资金(万元)" :label-width="formLabelWidth" prop="capital">
                    <el-input type="number" v-model="onlineForm.capital" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="contact">
                    <el-input v-model="onlineForm.contact" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="onlineForm.phone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="submitOnline('onlineForm')">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 共享会议室预定申请表 -->
        <el-dialog title="" :visible.sync="shareFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">共享会议室申请表</h1>
            <el-form ref="shareForm" :model="shareForm" :rules="shareRules">
                <el-form-item label="预定企业名称" :label-width="formLabelWidth" prop="enterprise">
                    <el-input v-model="shareForm.enterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="contact">
                    <el-input v-model="shareForm.contact" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="shareForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="会议活动名称" :label-width="formLabelWidth" prop="subject">
                    <el-input v-model="shareForm.subject" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="预定会议地址" :label-width="formLabelWidth" prop="addr">
                    <el-select v-model="shareForm.addr" placeholder="请预定选择会议地址">
                        <el-option v-if="item.name == 'address'" :label="item.value" :value="item.value+','+item.id" v-for="(item, index) in shareData" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预定会议室使用时间" :label-width="formLabelWidth">
                    <el-form-item class="el-col-lg-11" prop="from">
                        <el-date-picker v-model="shareForm.from" type="datetime" placeholder="选择开始时间">
                        </el-date-picker>
                    </el-form-item>
                    <div class="el-col-lg-2 tc">至</div>
                    <el-form-item class="el-col-lg-11" prop="to">
                        <el-date-picker v-model="shareForm.to" type="datetime" placeholder="选择结束时间">
                        </el-date-picker>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="预定会议室用途" :label-width="formLabelWidth" prop="usage">
                    <el-select v-model="shareForm.usage" placeholder="预定会议室用途">
                        <el-option v-if="item.name == 'usage'" :label="item.value" :value="item.value+','+item.id" v-for="(item, index) in shareData" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="参会人数" :label-width="formLabelWidth" prop="attender">
                    <el-input type="number" v-model="shareForm.attender" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="参会需求" :label-width="formLabelWidth" prop="request">
                    <el-checkbox-group v-model="shareForm.request">
                        <el-checkbox v-if="item.name == 'request'" :label="item.value" v-for="(item, index) in shareData" :key="index"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="submitShare('shareForm')">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 培训服务需求表单 -->
        <el-dialog title="" :visible.sync="trainFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">线上孵化申请表</h1>
            <el-form ref="trainForm" :model="trainForm" :rules="trainRules">
                <el-form-item label="培训主题" :label-width="formLabelWidth" prop="trainTitle">
                    <el-input v-model="trainForm.trainTitle" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="培训人数" :label-width="formLabelWidth" prop="trainAmount">
                    <el-input v-model="trainForm.trainAmount" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" :label-width="formLabelWidth" prop="trainEnterprise">
                    <el-input v-model="trainForm.trainEnterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="trainPhone">
                    <el-input v-model="trainForm.trainPhone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="trainFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            //联系方式
            let validatePhone = (rule, value, callback) => {
                let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
                if (value === "" || !re.test(value) || value.length < 7) {
                    console.log(value);
                    callback(new Error("请输入正确联系方式！"));
                } else {
                    callback();
                }
            };
            return {
                incubators: '',
                seeds: '',
                enterprises: '',
                dicts: '',
//                upItem: '',
//                subItem: '',
                rentIncubators: '',
                substances: "",
                applyType: '',
                shareData: '',
                rentFromVisible: false, //空间租赁flag
                onlineFormVisible: false, //线上孵化flag
                shareFormVisible: false, //共享会议flag
                trainFormVisible: false, //培训服务需求flag
                formLabelWidth: '150px',
                rentFrom: {
                    type: "",
                    name: "",
                    phone: "",
                    incubator: "",
                    appellation: "",
                    quantity: "",
                    cases: "",
                    graduate: "",
                    range: "",
                    area: ""
                },
                rentRules: {
                    type: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    name: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写联系人姓名'
                    }],
                    phone: [{
                        required: true,
                        trigger: 'blur',
                        validator: validatePhone,
                        message: '请填写联系方式'
                    }],
                    incubator: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写选择入住孵化器'
                    }],
                    appellation: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写您的企业名称'
                    }],
                    quantity: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写团队人数'
                    }],
                    cases: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择成立情况'
                    }],
                    graduate: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择是否是毕业5年以内大学生'
                    }],
                    range: [{
                        required: true,
                        trigger: 'blur',
                        message: '请详细介绍公司经营范围'
                    }],
                    area: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入所需办公面积/工位'
                    }]
                },
                onlineForm: {
                    contact: "",
                    phone: "",
                    enterprise: "",
                    signup: "",
                    signupAddr: "",
                    business: "",
                    substance: "",
                    employee: "",
                    capital: ""
                },
                onlineRules: {
                    contact: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写联系人的姓名'
                    }],
                    phone: [{
                        required: true,
                        validator: validatePhone,
                        trigger: 'blur',
                        message: '请填写联系人的手机号码'
                    }],
                    enterprise: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    signup: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    signupAddr: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    business: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入经营范围及主营业务'
                    }],
                    substance: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择企业性质'
                    }],
                    employee: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入您的企业在职人数'
                    }],
                    capital: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入企业注册资金'
                    }],
                },
                shareForm: {
                    contact: '',
                    phone: '',
                    enterprise: '',
                    subject: '',
                    addr: '',
                    from: '',
                    to: '',
                    usage: '',
                    attender: '',
                    request: []
                },
                shareRules: {
                    contact: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写联系人的姓名'
                    }],
                    phone: [{
                        required: true,
                        validator: validatePhone,
                        trigger: 'blur',
                        message: '请填写联系方式'
                    }],
                    enterprise: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入您的企业名称'
                    }],
                    subject: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写此次会议的活动主题'
                    }],
                    addr: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择预定会议地址'
                    }],
                    from: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择开始时间'
                    }],
                    to: [{
                        required: true,
                        trigger: '请选择结束时间'
                    }],
                    usage: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择会议室用途'
                    }],
                    attender: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写此次会议的参与人数'
                    }],
                    request: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择额外会议要求'
                    }]
                },
                trainForm: {
                    trainTitle: '',
                    trainAmount: '',
                    trainEnterprise: '',
                    trainPhone: ''
                },
                trainRules: {
                    trainTitle: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    trainAmount: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    trainEnterprise: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    trainPhone: [{
                        required: true,
                        trigger: 'blur'
                    }]
                }
            }
        },
        mounted() {
            this.setIncubatorsApi();
        },
        methods: {
            setIncubatorsApi() {
                var _this = this;
                var domain = "http://www.egowork.com/";
                _this.getRequest('/pub/cloud')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.incubators = res['data']['incubators']; //云创孵化
                            for (var i = 0; i < _this.incubators.length; i++) {
                                _this.incubators[i]['icon'] = domain + _this.incubators[i]['icon'];
                            }
                            this.seeds = res['data']['seeds']; //孵化项目
                            _this.enterprises = res['data']['enterprises']; //孵化项目
                            for (var i = 0; i<_this.enterprises.length; i++) {
                                _this.enterprises[i]['icon'] = domain + _this.enterprises[i]['icon'];
                            }
                            this.dicts = res['data']['dicts'];
                        }
                    })
            },
            // 弹出发布需求表单
            alertRent(type) {
                if (this.rentFromVisible == true) {
                    this.rentFromVisible = false;
                } else {
                    this.rentFromVisible = true;
                    this.initRentIncubators();
                }
                if (type == 2) {
                    this.applyType = 2;
                    window.localStorage.setItem('type', 2);
                } else if (type == 1) {
                    this.applyType = 1;
                    window.localStorage.setItem('type', 1);
                }
            },
            initRentIncubators() {
                var _this = this;
                _this.getRequest('/qb/list')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.rentIncubators = res['data'];
                        }
                    })
            },
            submitRent(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var incubatorArr = _this.rentFrom.incubator.split(',');
                        var type = window.localStorage.getItem('type');
                        var params = {
                            type: type,
                            name: _this.rentFrom.name,
                            phone: _this.rentFrom.phone,
                            incubatorId: incubatorArr[1],
                            incubator: incubatorArr[0],
                            appellation: _this.rentFrom.appellation,
                            quantity: _this.rentFrom.quantity,
                            cases: _this.rentFrom.cases,
                            graduate: _this.rentFrom.graduate,
                            range: _this.rentFrom.range,
                            area: _this.rentFrom.area
                        };
                        _this.postRequest("/apply/space", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "发布成功",
                                    type: 'success'
                                });
                                _this.rentFromVisible = false;
                                _this.rentFrom.classify = _this.rentFrom.classifyId = _this.rentFrom.title = _this.rentFrom.needs = _this.rentFrom.enterprise = _this.rentFrom.contact = _this.rentFrom.phone = "";
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("发布失败!");
                        return false;
                    }
                });
            },
            // 弹出线上孵化表单
            alertOnline() {
                if (this.onlineFormVisible == true) {
                    this.onlineFormVisible = false;
                } else {
                    this.onlineFormVisible = true;
                    this.initShareAddr();
                    this.initShareUsage();
                    this.initShareRequest();
                }
            },
            initSubstances() {
                var _this = this;
                _this.getRequest('/dict/onlineApply')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.substances = res['data'];
                        }
                    })
            },
            submitOnline(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var substanceArr = _this.onlineForm.substance.split(',');
                        var signupTime = new Date(_this.onlineForm.signup).getTime();
                        var params = {
                            contact: _this.onlineForm.contact,
                            phone: _this.onlineForm.phone,
                            enterprise: _this.onlineForm.enterprise,
                            signup: signupTime,
                            signupAddr: _this.onlineForm.signupAddr,
                            business: _this.onlineForm.business,
                            substanceId: substanceArr[1],
                            substance: substanceArr[0],
                            employee: _this.onlineForm.employee,
                            capital: _this.onlineForm.capital
                        };
                        _this.postRequest("/apply/online", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "线上孵化发布成功",
                                    type: 'success'
                                });
                                _this.onlineFormVisible = false;
                                _this.onlineForm.contact = _this.onlineForm.phone = _this.onlineForm.enterprise = _this.onlineForm.signup = _this.onlineForm.signupAddr = _this.onlineForm.business = _this.onlineForm.substanceId = _this.onlineForm.substance = _this.onlineForm.employee = this.onlineForm.capital = "";
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("线上孵化发布失败!");
                        return false;
                    }
                });
            },
            // 弹出共享会议室
            initShare() {
                var _this = this;
                _this.getRequest('/dict/roomApply')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.shareData = res['data'];
                        }
                    })
            },
            alertShare() {
                var _this = this;
                if (_this.shareFormVisible == true) {
                    _this.shareFormVisible = false;
                } else {
                    _this.shareFormVisible = true;
                    _this.initShare();
                }
            },
            submitShare(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var addrArr = _this.shareForm.addr.split(',');
                        var from = new Date(_this.shareForm.from).getTime();
                        var to = new Date(_this.shareForm.to).getTime();
                        var usageArr = _this.shareForm.usage.split(',');
                        var requestArr = _this.shareForm.request;
                        var shareData = _this.shareData;
                        var requestArrId = '';
                        if (requestArr.length > 0) {
                            for (var i = 0; i < requestArr.length; i++) {
                                for (var j = 0; j < shareData.length; j++) {
                                    if (requestArr[i] == shareData[j].value) {
                                        requestArrId += shareData[j].id+',';
                                    }
                                }
                            }
                            requestArrId = requestArrId.substr(0, requestArrId.length - 1);
                        }
                        var params = {
                            contact: _this.shareForm.contact,
                            phone: _this.shareForm.phone,
                            enterprise: _this.shareForm.enterprise,
                            subject: _this.shareForm.subject,
                            addrId: addrArr[1],
                            addr: addrArr[0],
                            from: from,
                            to: to,
                            usageId: usageArr[1],
                            usage: usageArr[0],
                            attender: _this.shareForm.attender,
                            requestId: requestArrId,
                            request: requestArr.toString()
                        };
                        _this.postRequest("/apply/room", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "发布成功",
                                    type: 'success'
                                });
                                _this.shareFormVisible = false;
                                _this.shareForm.contact = _this.shareForm.phone = _this.shareForm.enterprise = _this.shareForm.subject = _this.shareForm.addr = _this.shareForm.from = _this.shareForm.to =_this.shareForm.usage =_this.shareForm.attender =_this.shareForm.request = "";
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("发布失败!");
                        return false;
                    }
                });
            },
        }
    }
</script>

<style>

</style>
