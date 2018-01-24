<template>
    <div class="register bdColor">
        <div class="container">
            <div class="registerBox loginBox">
                <h1 class="tc">账号登录</h1>
                <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="100px">
                    <el-form-item label="账号:" prop="name">
                        <el-input v-model="loginForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" prop="pass">
                        <el-input type="password" v-model="loginForm.pass"></el-input>
                    </el-form-item>
                    <el-form-item class="tc">
                        <el-button class="submitBtn" type="primary" @click="login('loginForm')">登录</el-button>
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
                    name: "",
                    pass: "",
                },
                loginRules: {
                    name: [{
                        required: true,
                        message: '请输入正确手机号',
                        trigger: 'blur'
                    }, {
                        min: 2,
                        max: 11,
                        message: '最多11个字符',
                        trigger: 'blur'
                    }],
                    pass: [{
                        required: true,
                        trigger: "blur",
                        message: '请输入正确密码'
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
            login(formName) {
                var _this = this;
                _this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {
                            name: _this.loginForm.name,
                            pass: _this.loginForm.pass
                        };
                        _this.postRequest("/account/login", params).then(res => {
                            if (res['data']["suc"] == true) {
                                _this.$message({
                                    message: "登录成功",
                                    type: 'success'
                                });
                                _this.loginForm.name = _this.loginForm.pass = "";
                            } else {
                                _this.$message({
                                    message: res["data"]["msg"],
                                    type: 'warning'
                                });
                            }
                        });
                    }
                })
            }
        }
    }
</script>

