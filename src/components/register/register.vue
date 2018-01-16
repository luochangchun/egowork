<template>
    <div class="register bdColor">
        <div class="container">
            <div class="registerBox">
                <h1 class="tc">手机号注册</h1>
                <el-form ref="registerForm" :model="registerForm" label-width="100px">
                    <el-form-item label="手机号:">
                        <el-input v-model="registerForm.phone"></el-input>
                    </el-form-item>
                    <el-row :gutter="10">
                        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                            <el-form-item label="验证码:">
                                <el-input placeholder="请输入短信验证码" v-model="registerForm.captcha"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <el-button type="primary" @click="sendCaptcha" v-show="show" :disabled="!show">获取验证码</el-button>
                            <el-button type="primary" v-show="!show" :disabled="!show">{{count}}s</el-button>
                        </el-col>
                    </el-row>
                    <el-form-item label="密码:">
                        <el-input v-model="registerForm.password"></el-input>
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
    export default {
        data() {
            return {
                show: false,
                count: 0,
                registerForm: {
                    phone: "",
                    captcha: "",
                    pass: "",
                },
                registerRules: {
                    phone: [{
                        required: true,
                        message: '请输入正确手机号',
                        trigger: 'blur'
                    }],
                    pass: [{
                        required: true,
                        trigger: "blur"
                    }]
                }
            };
        },
        methods: {
            sendCaptcha() {
                let re = /^1[34578]\d{9}$/;
                let tel = this.personalForm.phone;
            },
            // 注册表单
            register(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {}
                })
            }
        }
    }
</script>

