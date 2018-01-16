<template>
    <div class="register bdColor">
        <div class="container">
            <div class="registerBox loginBox">
                <h1 class="tc">账号登录</h1>
                <el-form ref="loginForm" :model="loginForm" label-width="100px">
                    <el-form-item label="账号:">
                        <el-input v-model="loginForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:">
                        <el-input v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item class="tc">
                        <el-button class="submitBtn" type="primary" @click="login('registerForm')">登录</el-button>
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
                loginForm: {
                    phone: "",
                    captcha: "",
                    pass: "",
                },
                loginRules: {
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

