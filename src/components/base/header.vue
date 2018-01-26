<template>
    <div class="header">
        <div class="top bgColor" style="position:fixed;top:0;background-color:#2e2a3f;width:100%;z-index:1000">
            <div class="container" style="margin-top:0;">
                <el-row :gutter="0">
                    <el-col :xs="0" :sm="0" :md="9" :lg="9">
                        <p class="solgan_word f14">创新创业孵化公共服务平台 中小企业一站式服务平台</p>
                    </el-col>
                    <el-col :xs="14" :sm="8" :md="6" :lg="6" :offset="5" class="header-nav-left tr">
                        <a href="javascript:;" @click="alertDemand" class="index_btn white bgColor">发布需求></a>
                        <a href="javascript:;" @click="alertVisit" class="index_btn white bgColor">预约参观></a>
                    </el-col>
                    <el-col :xs="10" :sm="6" :md="4" :lg="4">
                        <a v-if="loginFlag" href="javascript:;" @click="logout" class="text r">退出</a>
                        <router-link v-if="!loginFlag" to="/register" class="text r">免费注册</router-link>
                        <i class="r hr">&nbsp;&nbsp;|&nbsp;&nbsp;</i>
                        <router-link v-if="!loginFlag" to="/login" class="text cur r">登录</router-link>
                        <router-link v-if="loginFlag" to="/personalCenter" class="text r">{{username}}</router-link>
                        <!-- <p v-if="loginFlag" class="text r">{{username}}</p> -->
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="main shadow-bottom">
            <div class="container clear" style="position:relative;display:block;height:auto;overflow: inherit;">
                <el-col :xs="0" :sm="4" :md="4" :lg="4">
                    <a href="" class="l logo"><img src="static/img/logo_header.png" class="padder-vx" style="margin-top:15px;"></a>
                </el-col>
                <div class="nav nav_pc">
                    <div id="menu-button">菜单</div>
                    <ul>
                        <li>
                            <router-link to="/index">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/incubators">云创空间</router-link>
                        </li>
                        <li>
                            <router-link to="/college">云创学院</router-link>
                        </li>
                        <li>
                            <router-link to="/service">云创服务</router-link>
                        </li>
                        <!-- <li>
                                                                                         <a href="">云创咖啡</a>
                                                                                     </li> -->
                        <li>
                            <router-link to="_blank" href="http://www.hangowa.com/" target="_blank">云创电商</router-link>
                        </li>
                        <li>
                            <router-link to="_blank" href="http://www.gobaowa.com" target="_blank">云创保险 </router-link>
                        </li>
                        <li>
                            <router-link to="/financial">云创金融</router-link>
                        </li>
                        <li>
                            <router-link to="/news">资讯中心</router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav nav_mobile r">
                    <div id="menu-button" @click='showMenu()'>菜单</div>
                    <ul v-show="visible">
                        <li>
                            <router-link to="/index" @click='visible = false'>首页</router-link>
                        </li>
                        <li>
                            <router-link to="/incubators">云创空间</router-link>
                        </li>
                        <li>
                            <router-link to="/college">云创学院</router-link>
                        </li>
                        <li>
                            <router-link to="/service">云创服务</router-link>
                        </li>
                        <!-- <li>
                                                                                         <a href="">云创咖啡</a>
                                                                                     </li> -->
                        <li>
                            <router-link to="_blank" href="http://www.hangowa.com/" target="_blank">云创电商</router-link>
                        </li>
                        <li>
                            <router-link to="_blank" href="http://www.gobaowa.com" target="_blank">云创保险 </router-link>
                        </li>
                        <li>
                            <router-link to="/financial">云创金融</router-link>
                        </li>
                        <li>
                            <router-link to="/news">资讯中心</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--客服-->
        <div class="call">
            <div>
                <!--电话-->
                <div id="telnumber" class="text-center">
                    <a href="tel:027-59103557" style="color:unset;">
                        <img src="static/img/dianhua.png" alt="">
                        <!--<i class="el-icon-phone animate_opatoshow animate_start"></i>-->
                    </a>
                    <span class="text-xs block">
                                                                        <i class="el-icon-phone"></i> 027-59103580<br>
                                                                        </span>
                </div>
                <!--QQ-->
                <div id="qq" class="text-center">
                    <img src="static/img/qq.png" alt="">
                    <!--<i class="icon fa fa-qq animate_opatoshow animate_start"></i>-->
                    <span class="text-xs block">
                                                                            <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3453276422&amp;site=qq&amp;menu=yes" target="_blank" class="pull-left text-2x padder-xs tras-03 b-r b-r-dashed">
                                                                                <img src="static/img/qq.png" alt="" >
                                                                            </a>
                                                                            <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3425454889&amp;site=qq&amp;menu=yes" target="_blank" class="pull-left text-2x padder-xs tras-03 b-r b-r-dashed">
                                                                                <img src="static/img/qq.png" alt="" >
                                                                            </a>
                                                                        </span>
                </div>
                <!--微信-->
                <div id="code" class="text-center tras-03">
                    <img src="static/img/weixin.png" alt="">
                    <span class="text-xs" style="line-height:10px;box-shadow:0 0 10px 5px #ddd;">
                                                                            <img src="http://www.egowork.com/themes/egowork/img/egowork.jpg" style="width:120px; height:120px;">
                                                                        </span>
                </div>
            </div>
        </div>
        <!-- 预约参观表单 -->
        <el-dialog title="" :visible.sync="visitFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">预约参观表单</h1>
            <el-form ref="visitForm" :model="visitForm" :rules="visitRules">
                <el-form-item label="联系人" :label-width="visitLabelWidth" prop="contact">
                    <el-input v-model="visitForm.contact" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="visitLabelWidth" prop="phone">
                    <el-input v-model="visitForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="选择参观孵化器" :label-width="visitLabelWidth" prop="incubator">
                    <el-select v-model="visitForm.incubator" placeholder="请选择活动区域">
                        <el-option :label="item.title" :value="item.title+','+item.id" v-for="(item, index) in incubators" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="参观时间" :label-width="visitLabelWidth" prop="visitAt">
                    <el-date-picker v-model="visitForm.visitAt" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="感兴趣产品" :label-width="visitLabelWidth" prop="interest">
                    <el-select v-model="visitForm.interest" placeholder="请选择活动区域">
                        <el-option :label="item.value" :value="item.value+','+item.id" v-for="(item, index) in interestProducts" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="了解更多" :label-width="visitLabelWidth" prop="interest">
                                <el-input type="textarea" :rows="3" v-model="visitForm.interest" auto-complete="off"></el-input>
                            </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="submitVisit('visitForm')">确 定</el-button>
            </div>
        </el-dialog>
        <DemandForm v-bind:demandFormProps="demandFormVisible"></DemandForm>
    </div>
</template>

<script>
    import DemandForm from '../common/demandForm.vue' //投资机构组件
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
                demandFormVisible: {
                    flag: false,
                    needsClassify: ""
                },
                loginFlag: false,
                username: '',
                visible: false,
                visitLabelWidth: '100px',
                visitFormVisible: false, //预约参观flag
                needsClassify: "",
                interestProducts: "",
                incubators: "",
                // 预约参观
                visitForm: {
                    contact: '',
                    phone: '',
                    incubator: '',
                    visitAt: new Date(),
                    interestId: '',
                    interest: ''
                },
                visitRules: {
                    contact: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写联系人的姓名'
                    }, {
                        min: 1,
                        max: 10,
                        message: '最多10个字符',
                        trigger: 'blur'
                    }],
                    phone: [{
                        required: true,
                        validator: validatePhone,
                        trigger: 'blur',
                        message: '请填写联系方式'
                    }],
                    incubator: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择参观孵化器'
                    }],
                    visitAt: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择参观时间'
                    }],
                    interestId: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择感兴趣产品'
                    }],
                    interest: [{
                        required: false,
                        trigger: 'blur',
                    }, {
                        min: 2,
                        max: 250,
                        message: '最多200个字符',
                        trigger: 'blur'
                    }]
                }
            }
        },
        mounted() {
            let userInfoStr = window.localStorage.getItem('userinfo');
            if (userInfoStr) {
                let userinfo = JSON.parse(userInfoStr);
                this.loginFlag = true;
                this.username = userinfo['userName'];
            }
        },
        methods: {
            showMenu() {
                if (this.visible == true) {
                    this.visible = false;
                } else {
                    this.visible = true;
                }
            },
            logout() {
                this.$confirm('退出当前账号, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    window.localStorage.clear();
                    window.location.reload();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            showMenu_sub() {
                if (this.visible == true) {
                    this.visible = false;
                } else {
                    this.visible = true;
                }
            },
            //发布需求类别
            initDemandClassify() {
                var _this = this;
                _this.getRequest('/dict/needsApply')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.demandFormVisible.needsClassify = res['data'];
                        }
                    })
            },
            alertDemand() {
                if (this.demandFormVisible.flag == true) {
                    this.demandFormVisible.flag = false;
                } else {
                    this.demandFormVisible.flag = true;
                    this.initDemandClassify();
                }
            },
            // 感兴趣产品
            initVisitClassify() {
                var _this = this;
                _this.getRequest('/dict/visitApply')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.interestProducts = res['data'];
                        }
                    })
            },
            initIncubators() {
                var _this = this;
                _this.getRequest('/qb/list')
                    .then(res => {
                        if (res && res.status == 200) {
                            _this.incubators = res['data'];
                        }
                    })
            },
            // 弹出发布需求表单
            submitDemand(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var demandClassifyArr = _this.demandForm.classify.split(',');
                        var params = {
                            contact: _this.demandForm.contact,
                            phone: _this.demandForm.phone,
                            enterprise: _this.demandForm.enterprise,
                            classifyId: demandClassifyArr[1],
                            classify: demandClassifyArr[0],
                            title: _this.demandForm.title,
                            needs: _this.demandForm.needs
                        };
                        _this.postRequest("/apply/needs", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "服务需求发布成功",
                                    type: 'success'
                                });
                                _this.demandFormVisible = false;
                                _this.demandForm.classify = _this.demandForm.classifyId = _this.demandForm.title = _this.demandForm.needs = _this.demandForm.enterprise = _this.demandForm.contact = _this.demandForm.phone = "";
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("服务需求发布失败!");
                        return false;
                    }
                });
            },
            // 弹出预约参观表单
            alertVisit() {
                if (this.visitFormVisible == true) {
                    this.visitFormVisible = false;
                } else {
                    this.visitFormVisible = true;
                    this.initVisitClassify();
                    this.initIncubators();
                }
            },
            submitVisit(formName) {
                var _this = this;
                _this.$refs[formName].validate(valid => {
                    if (valid) {
                        var interestArr = _this.visitForm.interest.split(',');
                        var incubatorArr = _this.visitForm.incubator.split(',');
                        var visitTime = new Date(_this.visitForm.visitAt).getTime();
                        var params = {
                            contact: _this.visitForm.contact,
                            phone: _this.visitForm.phone,
                            incubatorId: incubatorArr[1],
                            incubator: incubatorArr[0],
                            visitAt: visitTime,
                            interestId: interestArr[1],
                            interest: interestArr[0]
                        };
                        _this.postRequest("/apply/visit", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "预约参观发布成功",
                                    type: 'success'
                                });
                                _this.visitFormVisible = false;
                                _this.visitForm.contact = _this.visitForm.phone = _this.visitForm.incubatorId = _this.visitForm.incubator = _this.visitForm.interestId = _this.visitForm.interest = "";
                                _this.visitForm.visitAt = new Date();
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    } else {
                        this.$message.error("预约参观发布失败!");
                        return false;
                    }
                });
            }
        },
        components: {
            DemandForm
        }
    }
</script>

<style scoped>
    .header .top .el-col {
        padding: 10px 0;
    }
    .solgan_word {
        color: #fff;
        padding: 0;
    }
    .header .text {
        display: inline-block;
        padding: 0 5px;
        color: #fff;
    }
    .header .cur {
        padding: 0 10px;
        border-radius: 3px;
        background-color: transparent!important;
    }
    .header .hr {
        color: #fff;
    }
    .el-col-xs-0 {
        display: none;
    }
    @media (min-width: 768px) {
        .el-col-xs-0 {
            display: none;
        }
    }
    @media (max-width: 768px) {
        .header-nav-left {
            margin-left: 0;
        }
        .index_btn {
            width: 90px;
            height: 30px;
            border-radius: 16px;
            font-size: 12px;
            border: none;
            display: inline-block;
            line-height: 30px;
            text-align: center;
        }
    }
    @media (min-width: 992px) {
        .el-col-xs-0 {
            display: block;
        }
    }
    .nav,
    .nav ul,
    .nav ul li,
    .nav ul li a,
    .nav #menu-button {
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        line-height: 1;
        display: block;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .nav:after,
    .nav>ul:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
    }
    .nav #menu-button {
        display: none;
    }
    .nav {
        width: auto;
        line-height: 1;
        background: #ffffff;
        padding: 12px 0;
        display: block;
        position: absolute;
        right: 0;
        z-index: 10;
    }
    .nav>ul>li {
        float: left;
    }
    .nav.align-center>ul {
        font-size: 0;
        text-align: center;
    }
    .nav.align-center>ul>li {
        display: inline-block;
        float: none;
    }
    .nav.align-center ul ul {
        text-align: left;
    }
    .nav.align-right>ul>li {
        float: right;
    }
    .nav.align-right ul ul {
        text-align: right;
    }
    .nav>ul>li>a {
        line-height: 20px;
        padding: 16px 10px;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        color: #000000;
        -webkit-transition: color .2s ease;
        -moz-transition: color .2s ease;
        -ms-transition: color .2s ease;
        -o-transition: color .2s ease;
        transition: color .2s ease;
    }
    .nav>ul>li:hover>a,
    .nav>ul>li.active>a {
        color: #18b494;
        border-bottom: 2px solid #18b494;
    }
    .nav ul li .active {
        color: #18b494;
        border-bottom: 2px solid #18b494;
    }
    .nav>ul>li.has-sub>a {
        padding-right: 25px;
    }
    .nav>ul>li.has-sub>a::after {
        position: absolute;
        top: 22px;
        right: 10px;
        width: 6px;
        height: 6px;
        border-bottom: 1px solid #000000;
        border-right: 1px solid #000000;
        content: "";
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition: border-color 0.2s ease;
        -moz-transition: border-color 0.2s ease;
        -ms-transition: border-color 0.2s ease;
        -o-transition: border-color 0.2s ease;
        transition: border-color 0.2s ease;
    }
    .nav>ul>li.has-sub:hover>a::after {
        border-color: #18b494;
    }
    .nav ul ul {
        position: absolute;
        left: -9999px;
    }
    .nav li:hover>ul {
        left: auto;
    }
    .nav.align-right li:hover>ul {
        right: 0;
    }
    .nav ul ul ul {
        margin-left: 100%;
        top: 0;
    }
    .nav.align-right ul ul ul {
        margin-left: 0;
        margin-right: 100%;
    }
    .nav ul ul li {
        height: 0;
        -webkit-transition: height .2s ease;
        -moz-transition: height .2s ease;
        -ms-transition: height .2s ease;
        -o-transition: height .2s ease;
        transition: height .2s ease;
    }
    .nav ul li:hover>ul>li {
        height: 32px;
    }
    .nav ul ul li a {
        padding: 10px 20px;
        width: 160px;
        font-size: 12px;
        background: #333333;
        text-decoration: none;
        color: #dddddd;
        -webkit-transition: color .2s ease;
        -moz-transition: color .2s ease;
        -ms-transition: color .2s ease;
        -o-transition: color .2s ease;
        transition: color .2s ease;
    }
    .nav ul ul li:hover>a,
    .nav ul ul li a:hover {
        color: #ffffff;
    }
    .nav ul ul li.has-sub>a::after {
        position: absolute;
        top: 13px;
        right: 10px;
        width: 4px;
        height: 4px;
        border-bottom: 1px solid #dddddd;
        border-right: 1px solid #dddddd;
        content: "";
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transition: border-color 0.2s ease;
        -moz-transition: border-color 0.2s ease;
        -ms-transition: border-color 0.2s ease;
        -o-transition: border-color 0.2s ease;
        transition: border-color 0.2s ease;
    }
    .nav.align-right ul ul li.has-sub>a::after {
        right: auto;
        left: 10px;
        border-bottom: 0;
        border-right: 0;
        border-top: 1px solid #dddddd;
        border-left: 1px solid #dddddd;
    }
    .nav ul ul li.has-sub:hover>a::after {
        border-color: #ffffff;
    }
    @media all and (min-width: 120px) {
        .nav_pc {
            display: block;
        }
        .nav_mobile {
            display: none;
        }
    }
    @media all and (max-width: 768px) {
        .logo {
            display: none;
        }
        .nav {
            width: 100%;
            padding: 12px 0 0;
        }
        .nav ul {
            width: 100%;
        }
        .nav>ul>li:hover>a,
        .nav>ul>li.active>a {
            color: #18b494;
            border-bottom: none;
        }
        .nav.align-center>ul,
        .nav.align-right ul ul {
            text-align: left;
        }
        .nav ul li,
        .nav ul ul li,
        .nav ul li:hover>ul>li {
            width: 100%;
            height: auto;
            border-top: 1px solid rgba(120, 120, 120, 0.15);
        }
        .nav ul li a,
        .nav ul ul li a {
            width: 100%
        }
        .nav ul li a {
            font-size: 14px;
        }
        .nav>ul>li,
        .nav.align-center>ul>li,
        .nav.align-right>ul>li {
            float: none;
            display: block;
        }
        .nav ul ul li a {
            padding: 20px 20px 20px 30px;
            font-size: 12px;
            color: #000000;
            background: none;
        }
        .nav ul ul li:hover>a,
        .nav ul ul li a:hover {
            color: #000000;
        }
        .nav ul ul ul li a {
            padding-left: 40px;
        }
        .nav ul ul,
        .nav ul ul ul {
            position: relative;
            left: 0;
            right: auto;
            width: 100%;
            margin: 0;
        }
        .nav>ul>li.has-sub>a::after,
        .nav ul ul li.has-sub>a::after {
            display: none;
        }
        #menu-line {
            display: none;
        }
        .nav #menu-button {
            display: block;
            border: 1px solid #eee;
            padding: 10px;
            color: #000000;
            cursor: pointer;
            font-size: 14px;
            background-color: #fff;
            text-transform: uppercase;
            border-radius: 3px;
        }
        .nav #menu-button::after {
            content: '';
            position: absolute;
            top: 10px;
            right: 20px;
            display: block;
            width: 15px;
            height: 2px;
            background: #000000;
        }
        .nav #menu-button::before {
            content: '';
            position: absolute;
            top: 15px;
            right: 20px;
            display: block;
            width: 15px;
            height: 3px;
            border-top: 2px solid #000000;
            border-bottom: 2px solid #000000;
        }
        .nav .submenu-button {
            position: absolute;
            z-index: 10;
            right: 0;
            top: 0;
            display: block;
            border-left: 1px solid rgba(120, 120, 120, 0.15);
            height: 52px;
            width: 57px;
            cursor: pointer;
        }
        .nav .submenu-button::after {
            content: '';
            position: absolute;
            top: 21px;
            left: 26px;
            display: block;
            width: 1px;
            height: 11px;
            background: #000000;
            z-index: 99;
        }
        .nav .submenu-button::before {
            content: '';
            position: absolute;
            left: 21px;
            top: 26px;
            display: block;
            width: 11px;
            height: 1px;
            background: #000000;
            z-index: 99;
        }
        .nav .submenu-button.submenu-opened:after {
            display: none;
        }
        .nav_pc {
            display: none;
        }
        .nav_mobile {
            display: block;
        }
    }
</style>
