<template>
    <div class="financial">
        <div class="financial_banner"></div>
        <div class="financial_top">
            <div class="container">
                <div class="financial_top_info">
                    <h1 class="tc">联合国内外知名投资机构，共同成立“云创产业投资基金”</h1>
                    <p>为推进江汉区战略性新兴产业，打造有产业特色的江汉创谷，实现创新驱动，更好服务于武汉市及江汉区的企业，充分发挥国家和地方政府引导基金的优势，火凤凰联合国内外知名投资机构飞戈资本、盈禧投资，共同发起成立云创产业投资基金，基金规模为1亿元人民币。</p>
                    <p>基金将广泛吸引社会资本参与，以专业的投资管理团队和先进的投资理念，共同打造一流的战略性新兴产业基金，推进江汉区的发展，为基金投资人创造财富，为江汉区承接产业转移和产业升级</p>
                </div>
                <el-row class="financial_top_icon row clearfix">
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc iconl">政府引导</div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc icon02">专业运作</div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc icon04">国际化</div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc icon03 iconr">防范风险</div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="financial_areas">
            <div class="container">
                <el-row :gutter="30" class="clearfix">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="item">
                            <h1 class="dib">投资方向</h1>
                            <p>主要投资于新一代信息技术、云计算、大数据、电子商务、互联网+、新零售等，处于早中期并且具备高成长性的中小型企业。</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="item">
                            <h1 class="dib">投资模式</h1>
                            <p>以产业基金模式对企业进行参控股，并形成产业协同帮助。所投项目主要通过IPO、被收购、新三板挂牌、股东回购等方式退出。</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 融资项目 -->
        <div class="financial_common financial_projects">
            <div class="container">
                <h1 class="tc rel">融资项目 <a class="abs" href="javascript:;" @click="alertFinancial">我要融资</a></h1>
                <el-row :gutter="30" class="clearfix">
                    <!-- 融资项目组件 -->
                    <FinancialProjectItem v-for="item in projectList" v-bind:financialProject="item" v-bind:key="item.id"></FinancialProjectItem>
                    <!-- 融资项目组件 -->
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <router-link :to="{ name: 'financialList', params: { type: 'project'} }" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i></router-link>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 投资机构 -->
        <div class="financial_common financial_agency">
            <div class="container">
                <h1 class="tc rel">知名投资机构 <a class="abs" @click="alertInvestor">机构入驻</a></h1>
                <el-row :gutter="30" class="row clearfix">
                    <AgencyItem v-for="item in AgencyList" v-bind:agency="item" v-bind:key="item.id"></AgencyItem>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <router-link :to="{ name: 'financialList', params: { type: 'agency'} }" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i></router-link>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="financial_mail">
            <div class="container ovh"> <img src="http://www.egowork.com/themes/newego/img/financial_mail.png" class="mail db">
                <p class="tc white">如你的公司符合投资要求，请将商业计划书发送</p>
                <p class="tc white">至：<span>lugang@hansap.com</span></p> <a href="" onclick="window.open('mailto:lugang@hansap.com')" class="db white sendMail tc">立即发送</a> </div>
        </div>

        <!-- 发布融资项目 -->
        <el-dialog title="" :visible.sync="financialFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">发布融资项目</h1>
            <el-form ref="financialForm" :model="financialForm" :rules="financialRules">
                <el-form-item label="公司名称" :label-width="formLabelWidth" prop="enterprise">
                    <el-input placeholder="请输入您的公司名称" v-model="financialForm.enterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="行业领域" :label-width="formLabelWidth" prop="field">
                    <el-input placeholder="请输入公司行业领域" v-model="financialForm.field" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="项目名称" :label-width="formLabelWidth" prop="name">
                    <el-input placeholder="请填写您要发布的项目名称" v-model="financialForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="项目优势" :label-width="formLabelWidth" prop="advantage">
                    <el-input placeholder="请简要描述发布项目的优势" v-model="financialForm.advantage" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="融资金额" :label-width="formLabelWidth" prop="capital">
                    <el-input type="number" placeholder="请填写发布项目的融资金额（单位：万元）" v-model="financialForm.capital" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="contact">
                    <el-input placeholder="请填写联系人姓名" v-model="financialForm.contact" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
                    <el-input placeholder="请填写联系人的邮箱地址" v-model="financialForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                    <el-input placeholder="请填写联系人的邮箱地址" v-model="financialForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司简介" :label-width="formLabelWidth" prop="intro">
                    <el-input type="textarea" row="3" placeholder="请简单介绍您的公司" v-model="financialForm.intro" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="submitFinancial('financialForm')">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 投资机构入驻 -->
        <el-dialog title="" :visible.sync="investorFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">机构入驻申请表</h1>
            <el-form ref="investorForm" :model="investorForm" :rules="investorRules">
                <el-form-item label="投资机构名称" :label-width="formLabelWidth" prop="title">
                    <el-input placeholder="请输入您的机构名称" v-model="investorForm.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="简介与优势" :label-width="formLabelWidth" prop="eprofile">
                    <el-input placeholder="请简要介绍机构的简介与优势" v-model="investorForm.eprofile" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="投资领域" :label-width="formLabelWidth" prop="serviceField">
                    <el-input placeholder="请输入企业所要投资的领域" v-model="investorForm.serviceField" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="投资案例" :label-width="formLabelWidth" prop="cas">
                    <el-input placeholder="请输入企业以往投资的案例" v-model="investorForm.cas" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="投资阶段" :label-width="formLabelWidth" prop="phase">
                    <el-radio-group v-model="investorForm.phase">
                        <el-radio :label="item.id" v-for="(item, index) in phases" :key="index">{{item.value}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="contacts">
                    <el-input placeholder="请填写联系人姓名" v-model="investorForm.contacts" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
                    <el-input placeholder="请填写联系方式" v-model="investorForm.phone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="submitInvestor('investorForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import FinancialProjectItem from './common/financialProjectItem.vue' //融资项目组件
    import AgencyItem from './common/agencyItem.vue' //投资机构组件
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
            let validateEmail = (rule, value, callback) => {
                let re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if (value === "" || !re.test(value) || value.length < 7) {
                    console.log(value);
                    callback(new Error("请输入有效的邮箱地址！"));
                } else {
                    callback();
                }
            };
            return {
                financialFormVisible: false, //发布融资项目flag
                investorFormVisible: false, //投资机构flag
                formLabelWidth: '80px',
                type:"",
                phases: [
                    {id:1,value:"天使轮"},
                    {id:2,value:"早期"},
                    {id:3,value:"中期"},
                    {id:4,value:"成熟期"}
                ],
                projectList: "",
                AgencyList: "",
                financialForm: {
                    name: "",
                    enterprise: "",
                    advantage: "",
                    capital: "",
                    progress: "",
                    field: "",
                    contact: "",
                    phone: "",
                    email: "",
                    intro: ""
                },
                financialRules: {
                    name: [{
                        required: true,
                        trigger: 'blur',
                        message: "请输入项目名称"
                    }],
                    enterprise: [{
                        required: true,
                        trigger: 'blur',
                        message: "请输入您的公司名称"
                    }],
                    advantage: [{
                        required: true,
                        trigger: 'blur',
                        message: '请简要描述发布项目的优势'
                    }],
                    capital: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写发布项目的融资金额（单位：万元）'
                    }],
                    progress: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    field: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入公司行业领域'
                    }],
                    contact: [{
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
                    email: [{
                        required: false,
                        validator: validateEmail,
                        trigger: 'blur'
                    }],
                    intro: [{
                        required: false,
                        trigger: 'blur'
                    }],
                },
                investorForm: {
                    title: "",
                    contacts: "",
                    phone: "",
                    serviceField: "",
                    address: "",
                    eprofile: "",
                    cas: "",
                    phase: "",
                    icon: "",
                    remarks: ""
                },
                investorRules: {
                    title: [{
                        required: true,
                        trigger: 'blur',
                        message: "请输入您的机构名称"
                    }],
                    contacts: [{
                        required: true,
                        trigger: 'blur',
                        message: "请输入联系人姓名"
                    }],
                    phone: [{
                        required: true,
                        validator: validatePhone,
                        trigger: 'blur',
                        message: '请输入联系人手机号'
                    }],
                    serviceField: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入企业所要投资的领域'
                    }],
                    address: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    eprofile: [{
                        required: true,
                        trigger: 'blur',
                        message: '请简要介绍机构的简介与优势'
                    }],
                    cas: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    phase: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择投资阶段'
                    }],
                    remarks: [{
                        required: false,
                        trigger: 'blur'
                    }]
                },
            }
        },
        components: {
            FinancialProjectItem,
            AgencyItem
        },
        mounted() {
            this.getFinancial();
        },
        methods: {
            alertFinancial() {
                if (this.financialFormVisible == true) {
                    this.financialFormVisible = false;
                } else {
                    this.financialFormVisible = true;
                }
            },
            alertInvestor() {
                if (this.investorFormVisible == true) {
                    this.investorFormVisible = false;
                } else {
                    this.investorFormVisible = true;
                }
            },
            getFinancial() {
                var _this = this;
                var domain = "http://www.egowork.com/";
                _this.getRequest("/pub/finance").then(res => {
                    if (res && res.status == 200) {
                        _this.projectList = res['data']['projects'];
                        _this.AgencyList = res['data']['investors'];
                        for(var i=0;i<_this.AgencyList.length;i++) {
                            _this.AgencyList[i]['icon'] = domain + _this.AgencyList[i]['icon'];
                        }
                    }
                });
            },
            submitFinancial(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var params = {
                            name: this.financialForm.name,
                            enterprise: this.financialForm.enterprise,
                            advantage: this.financialForm.advantage,
                            capital: this.financialForm.capital,
                            progress: "",
                            field: this.financialForm.field,
                            contact: this.financialForm.contact,
                            phone: this.financialForm.phone,
                            email: this.financialForm.email,
                            intro: this.financialForm.intro,
                            sort: 0
                        };
                        _this.postRequest("/project", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "融资项目发布成功",
                                    type: 'success'
                                });
                                _this.financialFormVisible = false;
                                _this.financialForm.name=_this.financialForm.enterprise=_this.financialForm.advantage=_this.financialForm.capital=_this.financialForm.field=_this.financialForm.contact=_this.financialForm.phone=_this.financialForm.mail=_this.financialForm.intro="";
                                _this.financialForm.visitAt=new Date();
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("融资项目发布失败!");
                        return false;
                    }
                });
            },
            submitInvestor(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var params = {
                            title: this.investorForm.title,
                            contacts: this.investorForm.contacts,
                            phone: this.investorForm.phone,
                            serviceField: this.investorForm.serviceField,
                            address: "",
                            eprofile: this.investorForm.eprofile,
                            cas: this.investorForm.cas,
                            phase: this.investorForm.phase,
                            icon: "",
                            status: 0,
                            top: 0,
                            remarks: ""
                        };
                        _this.postRequest("/investor", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "机构入驻申请成功",
                                    type: 'success'
                                });
                                _this.investorFormVisible = false;
                                _this.investorForm.title=_this.investorForm.contacts=_this.investorForm.phone=_this.investorForm.serviceField=_this.investorForm.eprofile=_this.investorForm.cas=_this.investorForm.phase=_this.investorForm.mail=_this.investorForm.remarks="";
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("机构入驻申请失败!");
                        return false;
                    }
                });
            }
        }
    }
</script>

