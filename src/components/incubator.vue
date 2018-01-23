<template>
    <el-row style="background-color:#f1f1f1;width:100%;padding-top:30px;padding-bottom:50px;">
        <div class="container">
            <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="index_headline i-d">
                                <div class="incubation_detail_content float_left">
                                    <h4 class="h4 black1">{{ incubator.title }}</h4>
                                    <p class="line-height black3 f14">地址: {{ incubator.address }}</p>
                                    <p class="line-height black3 f14">联系电话: {{ incubator.phone }}</p>
                                    <p class="line-height black3 f14" v-if="incubator.level == subItem.id" v-for="(subItem,index) in dictLevel" :key="index">
                                        级别: {{ subItem.value }}
                                    </p>
                                    <p class="line-height black3 f14" v-if="incubator.region == subItem.id" v-for="(subItem,index) in dictLevel" :key="index">
                                        地区: {{ subItem.value }}
                                    </p>
                                    <button class="btn3" @click="alertRent">申请入驻</button>
                                    <p class="p4 color2 text-ellipsis-muti text-ellipsis-4 black2">{{ incubator.settled }}</p>
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
                                            <el-col :lg="8" :md="8" :sm="8" :xs="8" v-for="(item,index) in photos" :key="index">
                                                <div class="s_show_img">
                                                    <img :src="item.uri" alt="">
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="24" class="space_show_right">
                                        <div style="border-bottom:1px solid #A53B3B;padding-bottom:10px;">
                                            <h1 class="detail_title"><span>|</span> 直投基金</h1>
                                            <p>{{ incubator.fund }}</p>
                                        </div>
                                        <div style="padding-bottom:30px;">
                                            <h1 class="detail_title"><span>|</span> 入驻类型</h1>
                                            <p class="dib" v-for="(upItem,index) in enter" :key="index">
                                                <span class="label2 fontColor" v-if="upItem == subItem.id" v-for="(subItem,index) in dictLevel" :key="index">
                                                        {{ subItem.value }}
                                                    </span>
                                            </p>
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
                            <div class="investment_policy" v-html="incubator.policy">
                            </div>
                        </el-col>
                    </el-row>
                    <!--空间服务-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 空间服务</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;padding-left:20px;padding-right:20px;">
                                <el-row>
                                    <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                                        <div class="space_img">
                                            <div>
                                                <span v-for="(upItem,index) in service" :key="index">
                                                        <el-col v-if="upItem == subItem.id" v-for="(subItem,index) in dictLevel" :key="index" :lg="2" :md="2" :sm="6" :xs="8" class="space_show">
                                                            <span v-if="subItem.id == 28">
                                                                <img src="static/img/xinxihuafuwu.png" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 29">
                                                                <img src="static/img/dianzishangwu.png" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 30">
                                                                <img src="static/img/xiangmushenbao.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 31">
                                                                <img src="static/img/chuangyedaoshi.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 32">
                                                                <img src="static/img/chuangyeshalong.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 33">
                                                                <img src="static/img/rongziduijie.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 34">
                                                                <img src="static/img/zhengcheduijie.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 35">
                                                                <img src="static/img/gaoxinjishu.png" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 36">
                                                                <img src="static/img/jiaoyupeixun.png" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 37">
                                                                <img src="static/img/gongshangcaishui.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 38">
                                                                <img src="static/img/renshidaili.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 93">
                                                                <img src="static/img/zhishichanquan.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 94">
                                                                <img src="static/img/falvfuwu.jpg" alt="">
                                                            </span>
                                                <span v-if="subItem.id == 95">
                                                                <img src="static/img/wuyeguanli.png" alt="">
                                                            </span>
                                                <p style="margin-bottom: 30px;">{{ subItem.value }}</p>
                                    </el-col>
                                    </span>
                                    </div>
                                    </div>
                        </el-col>
                        </el-row>
                        </div>
                </el-col>
                </el-row>
                <!--配套设施-->
                <el-row>
                    <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                        <h1 class="detail_title"><span>|</span> 配套设施</h1>
                    </el-col>
                    <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                        <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;padding-left:20px;padding-right:20px;">
                            <el-row>
                                <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                                    <div class="space_img">
                                        <div>
                                            <span v-for="(upItem,index) in facility" :key="index">
                                                            <el-col v-if="upItem == subItem.id" v-for="(subItem,index) in dictLevel" :key="index" :lg="2" :md="2" :sm="6" :xs="8" class="space_show">
                                                                <span v-if="subItem.id == 39">
                                                                    <img src="static/img/huiyishi.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 40">
                                                                    <img src="static/img/xiuxianqu.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 41">
                                                                    <img src="static/img/chashuijian.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 42">
                                                                    <img src="static/img/luyanting.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 89">
                                                                    <img src="static/img/huodongshi.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 90">
                                                                    <img src="static/img/tingchechang.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 91">
                                                                    <img src="static/img/zhibojian.png" alt="">
                                                                </span>
                                            <span v-if="subItem.id == 92">
                                                                    <img src="static/img/duogongnengshi.png" alt="">
                                                                </span>
                                            <p style="margin-bottom: 30px;">{{ subItem.value }}</p>
                                </el-col>
                                </span>
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
        <!-- 空间租赁申请表 -->
        <el-dialog title="" :visible.sync="rentFromVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">空间租赁申请表</h1>
            <el-form ref="rentFrom" :model="rentFrom" :rules="rentRules">
                <el-form-item label="选择入驻孵化器" :label-width="formLabelWidth" prop="incubators">
                    <el-select v-model="rentFrom.incubators" placeholder="请选择入驻孵化器">
                        <el-option :label="incubator.title" :value="incubator.title+','+incubator.id" ></el-option>
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
                <el-form-item label="所需办公面积" :label-width="formLabelWidth" prop="area">
                    <el-input v-model="rentFrom.area" type="number" placeholder="请输入公司所需办公面积,以m²为单位" auto-complete="off"></el-input>
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
    </el-row>
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
                incubator: '',
                enter: "",
                service: "",
                facility: "",
                photos: '',
                dictLevel: '',
                
                applyType: '',
                formLabelWidth: '150px',
                rentFromVisible: false, //空间租赁flag
                rentFrom: {
                    type: "",
                    name: "",
                    phone: "",
                    incubators: "",
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
                    incubators: [{
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
            }
        },
        components: {
        },
        created() {
            let id = this.$route.params.id;
            this.setNewsApiDetail(id);
            this.setIncubator();
        },
        filters: {
        },
        methods: {
            setNewsApiDetail(id) {
                var _this = this;
                _this.getRequest('/qb/' + id)
                    .then(res => {
                        if (res && res.status == 200) {
                            this.incubator = res['data'];
                            this.enter = res['data']['enter'].split(',');
                            this.service = res['data']['service'].split(',');
                            this.facility = res['data']['facility'].split(',');
                            this.photos = res['data']['photos']; //空间展示
                        }
                    })['data']
            },
            setIncubator() {
                var _this = this;
                _this.getRequest('/dict/' + 'incubator')
                    .then(res => {
                        if (res && res.status == 200) {
                            this.dictLevel = res['data'];
                        }
                    })
            },
            // 弹出发布需求表单
            alertRent() {
                if (this.rentFromVisible == true) {
                    this.rentFromVisible = false;
                } else {
                    this.rentFromVisible = true;  
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
                        var incubatorArr = _this.rentFrom.incubators.split(',');
                        console.log(incubatorArr);
                        var params = {
                            type: 2,
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
        },
    }
</script>

<style>

</style>

