<template>
    <div class="register bdColor">
        <div class="container">
            <div class="registerBox">
                <h1 class="tc">手机号注册</h1>
                <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="100px">
                    <el-form-item label="手机号:" prop="name">
                        <el-input v-model="registerForm.name"></el-input>
                    </el-form-item>
                    <el-row :gutter="10">
                        <el-col :xs="17" :sm="17" :md="17" :lg="17" :xl="17">
                            <el-form-item label="验证码:" prop="captcha">
                                <el-input placeholder="请输入短信验证码" v-model="registerForm.captcha"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                            <el-button type="primary" @click="sendCaptcha" v-show="show" :disabled="!show">获取验证码</el-button>
                            <el-button type="primary" v-show="!show" :disabled="!show">{{count}}s</el-button>
                        </el-col>
                    </el-row>
                    <el-form-item label="密码:" prop="passw">
                        <el-input v-model="registerForm.passw"></el-input>
                    </el-form-item>
                    <el-form-item class="tc">
                        <el-button class="submitBtn" type="primary" @click="register('registerForm')">立即注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    const TIME_COUNT = 60;
    export default {
        data() {
            //联系方式
            let validatePhone = (rule, value, callback) => {
                let re = /^1[34578]\d{9}$/;
                if (value === "" || !re.test(value) || value.length < 7) {
                    callback(new Error("请输入正确联系方式！"));
                } else {
                    this.validatePhone();
                    callback();
                }
            };
            return {
                show: true,
                count: '',
                timer: null,
                registerForm: {
                    name: "",
                    captcha: "",
                    passw: "",
                },
                registerRules: {
                    name: [{
                        required: true,
                        validator: validatePhone,
                        message: '请输入正确手机号',
                        trigger: 'blur'
                    }, {
                        min: 2,
                        max: 11,
                        message: '最多11个字符',
                        trigger: 'blur'
                    }],
                    captcha: [{
                        required: true,
                        message: '请正确的验证码',
                        trigger: 'blur'
                    }],
                    passw: [{
                        required: true,
                        trigger: "blur",
                        message: '请输入正确密码',
                    }, {
                        min: 6,
                        max: 22,
                        message: '密码长度最少6位',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            validatePhone() {
                var _this = this;
                let re = /^1[34578]\d{9}$/;
                let tel = _this.registerForm.name;
                if (tel === "" || !re.test(tel) || tel.length < 11) {
                    _this.$message({
                        message: "请输入正确手机号",
                        type: 'error'
                    });
                    return false;
                }
                let validateUrl = '/account/validate/' + tel;
                _this.getRequest(validateUrl)
                    .then(res => {
                        if (res['suc'] == true) {
                            _this.$message({
                                message: "短信已发送到您手机",
                                type: 'error'
                            });
                        } else if (res['suc'] == false) {
                            _this.$message(res['msg']);
                        }
                    });
            },
            sendCaptcha() {
                var _this = this;
                let re = /^1[34578]\d{9}$/;
                let tel = this.registerForm.name;
                if (this.registerForm.phone === "" || !re.test(tel) || tel.length < 11) {
                    this.$message({
                        message: "请输入正确手机号",
                        type: 'error'
                    });
                    return false;
                }
                let url = '/account/captcha/' + tel;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
                _this.getRequest(url)
                    .then(res => {
                        if (res['suc'] == true) {
                            this.$message({
                                message: "短信已发送到您手机",
                                type: 'success'
                            });
                        } else if (res['suc'] == false) {
                            this.$message(res['msg']);
                        }
                    });
            },
            // 注册表单
            register(formName) {
                var _this = this;
                this.$refs[formName].validate((valid) => {
                    if (_this.registerForm.captcha.length == "") {
                        _this.$message({
                            message: "验证码不能为空",
                            type: 'error'
                        });
                    }
                    if (valid) {
                        var params = {
                            name: _this.registerForm.name,
                            passw: _this.registerForm.passw,
                            captcha: _this.registerForm.captcha
                        };
                        _this.postRequest("/account/signup", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "注册成功",
                                    type: 'success'
                                });
                                _this.registerForm.name = _this.registerForm.passw = _this.registerForm.captcha = "";
                            } else {
                                _this.$message(res["data"]["msg"]);
                            }
                        });
                    }
                })
            }
        }
    }
</script>

