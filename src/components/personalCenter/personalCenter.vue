<template>
    <div class="personalCenter">
        <div class="container">
            <el-row>
                <el-col :span="24" class="box">
                    <el-menu default-active="/apply/01" :router="true" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
                        <el-submenu index="/apply/01">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                <span>我的申请</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/apply/01" class="tc">空间租赁申请</el-menu-item>
                                <el-menu-item index="/apply/02">线上孵化申请</el-menu-item>
                                <el-menu-item index="/apply/03">共享办公申请</el-menu-item>
                                <el-menu-item index="/apply/04">共享会议室申请</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/apply">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                <span>我的活动</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="">我的活动报名</el-menu-item>
                                <el-menu-item index="">我的培训报名</el-menu-item>
                                <el-menu-item index="">学历课程</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/apply">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                <span>项目管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="">我发布的项目</el-menu-item>
                                <el-menu-item index="">我融资的项目</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <!-- <el-submenu index="/apply">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                <span>账户管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="">个人资料</el-menu-item>
                                <el-menu-item index="">账户安全</el-menu-item>
                                <el-menu-item index="">我的优惠券</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu> -->
                        <!-- <el-submenu index="/apply">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                <span>客服服务</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="">我的退款</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu> -->
                    </el-menu> 
                    <section class="content-container">
                        <router-view></router-view>
                    </section>   
                </el-col>
            </el-row>
        </div>
  </div>
</template>

<script>
    export default {
        updated() { //路径及按键操作时调用
            this.updateForcus();
        },
        mounted() { //载入时调用，F5刷新会起效
            this.updateForcus();
        },
        methods: {
            updateForcus() {
                var path = this.$route.path;
                if (path == "/apply/01") {
                   
                }
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>
