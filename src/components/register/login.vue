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
    import * as types from '../store/types'
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
        mounted() {
            console.log(this.$store);
            this.$store.commit(types.TITLE, 'Login');
            this.$store.commit(types.TITLE, 'userinfo');
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
                                this.$confirm('登录成功', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'success'
                                    }).then(() => {
                                        var userInfo = {
                                            "userId": res['data']['data']['userId'],
                                            "userName": res['data']['data']['userName'],
                                        }
                                        userInfo = JSON.stringify(userInfo);//存取用户信息
                                        if (userInfo) {
                                            this.$store.commit(types.USERINFO, userInfo)
                                            let redirect = decodeURIComponent('/index');
                                            this.$router.push({
                                                path: redirect
                                            });
                                            window.location.reload();
                                        }
                                    }).catch(() => {
                                        //点击取消
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

