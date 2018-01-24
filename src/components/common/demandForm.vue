<template>
    <!-- 发布服务需求表单 -->
    <el-dialog title="" :visible.sync="demandFormProps.flag" class="commmonForm">
        <h1 class="tc fontColor form_title">发布服务需求表单</h1>
        <el-form ref="demandForm" :model="demandForm" :rules="demandRules">
            <el-form-item label="需求类别" :label-width="demandLabelWidth" prop="classify">
                <el-select v-model="demandForm.classify" placeholder="请选择活动区域">
                    <el-option :label="item.value" :id="item.id" :value="item.value+','+item.id" v-for="(item, index) in demandFormProps.needsClassify" :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="需求标题" :label-width="demandLabelWidth" prop="title">
                <el-input v-model="demandForm.title" placeholder="请输入你的需求标题" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="需求描述" :label-width="demandLabelWidth" prop="needs">
                <el-input type="textarea" :rows="2" placeholder="请输入您的需求描述,不超过250字" v-model="demandForm.needs" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="企业名称" :label-width="demandLabelWidth" prop="enterprise">
                <el-input v-model="demandForm.enterprise" placeholder="请填写企业名称" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系人" :label-width="demandLabelWidth" prop="contact">
                <el-input v-model="demandForm.contact" placeholder="请填写联系人的姓名" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="demandLabelWidth" prop="phone">
                <el-input v-model="demandForm.phone" placeholder="请填写联系方式" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer tc">
            <el-button type="primary" @click="submitDemand('demandForm')">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        props: ['demandFormProps'],
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
                demandLabelWidth: '80px',
                demandFormVisible: {
                    flag:false
                },
                // demandFormVisible: false, //发布服务需求flag
                // 发布需求
                demandForm: {
                    classify: '',
                    title: '',
                    needs: '',
                    enterprise: '',
                    contact: '',
                    phone: ''
                },
                demandRules: {
                    classify: [{
                        required: true,
                        trigger: 'blur',
                        message: '请选择需求类别'
                    }],
                    title: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入需求类别'
                    }],
                    needs: [{
                        required: true,
                        trigger: 'blur',
                        message: '请输入需求类别'
                    }, {
                        min: 2,
                        max: 250,
                        message: '最多250个字符',
                        trigger: 'blur'
                    }],
                    enterprise: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写企业名称'
                    }],
                    contact: [{
                        required: true,
                        trigger: 'blur',
                        message: '请填写联系人姓名'
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
                    }]
                }
            }
        },
         methods: {
            
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
            // alertDemand() {
            //     if (this.demandFormVisible == true) {
            //         this.demandFormVisible = false;
            //     } else {
            //         this.demandFormVisible = true;
            //         this.initDemandClassify();
            //     }
            // },
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
                                _this.demandFormProps.flag = false;
                                _this.demandForm.classify=_this.demandForm.classifyId=_this.demandForm.title=_this.demandForm.needs=_this.demandForm.enterprise=_this.demandForm.contact=_this.demandForm.phone="";
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
            
        }
    }
</script>

