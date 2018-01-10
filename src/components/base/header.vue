<template>
    <div class="header">
        <div class="top"  style="position:fixed;top:0;background-color:#2e2a3f;width:100%;z-index:100000">
            <div class="container" style="margin-top:0;">
                <el-row :gutter="0">
                    <el-col :xs="0" :sm="0" :md="9" :lg="9">
                        <p class="solgan_word f14">创新创业孵化公共服务平台 中小企业一站式服务平台</p>
                    </el-col>
                    <el-col :xs="18" :sm="18" :md="12" :lg="8" :offset="6">
                        <a type="button" class="index_btn">预约参观></a>
                        <a type="button" class="index_btn">发布需求></a>
                        <a class="text r ">免费注册</a>
                        <i class="r hr">&nbsp;&nbsp;|&nbsp;&nbsp;</i>
                        <a v-if="!name" to="/login" class="text cur r">登录</a>
                        <p v-if="name" class="text r">{{name}}</p>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="main">
            <div class="container clear" style="position:relative;display:block;height:auto;overflow: inherit;">
                <a href="" class="l logo"><img src="static/img/logo_header.png" alt="" class="padder-vx"></a>
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
                            <router-link to="/university">云创学院</router-link>
                        </li>
                        <li>
                            <router-link to="/service">云创服务</router-link>
                        </li>
                        <!-- <li>
                                 <a href="">云创咖啡</a>
                             </li> -->
                        <li>
                            <router-link to="http://www.hangowa.com/" target="_blank">云创电商</router-link>
                        </li>
                        <li>
                            <router-link to="_blank" href="http://www.gobaowa.com" target="_blank">云创保险 </router-link>
                        </li>
                        <li>
                            <router-link to="/financialIndex.html">云创金融</router-link>
                        </li>
                        <li>
                            <router-link to="/news.html">资讯中心</router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav nav_mobile r">
                    <div id="menu-button" @click='showMenu()'>菜单</div>
                    <ul v-show="visible">
                        <li>
                            <router-link to="/index">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/incubators">云创空间</router-link>
                        </li>
                        <li>
                            <router-link to="/university">云创学院</router-link>
                        </li>
                        <li>
                            <router-link to="/service">云创服务</router-link>
                        </li>
                        <!-- <li>
                                 <a href="">云创咖啡</a>
                             </li> -->
                        <li>
                            <router-link to="http://www.hangowa.com/" target="_blank">云创电商</router-link>
                        </li>
                        <li>
                            <router-link to="_blank" href="http://www.gobaowa.com" target="_blank">云创保险 </router-link>
                        </li>
                        <li>
                            <router-link to="/financialIndex">云创金融</router-link>
                        </li>
                        <li>
                            <router-link to="/news">资讯中心</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
//    import api from '../axios/api.js'
    export default {
        data() {
            return {
                visible: false,
                visible_sub: false,
                name:"",
            }
        },
        created() {
            this.getName();
            this.name = window.localStorage.getItem('nickname');
        },
        methods: {
            showMenu() {
                if (this.visible == true) {
                    this.visible = false;
                } else {
                    this.visible = true;
                }
            },
            showMenu_sub() {
                if (this.visible_sub == true) {
                    this.visible_sub = false;
                } else {
                    this.visible_sub = true;
                }
            },
            getName() {
                api.CheckCookie();
            }


        },
    }
</script>
<style scoped>
    .top {
        background-color: #0089e3;
    }

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

    @media (min-width: 992px) {
        .el-col-xs-0 {
            display: block;
        }
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
        color: #0089e3;
        border-bottom: 2px solid #0089e3;
    }
    .nav ul li .active {
        color: #0089e3;
        border-bottom: 2px solid #0089e3;
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
        border-color: #009ae1;
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
            color: #0089e3;
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
            top: 12px;
            right: 20px;
            display: block;
            width: 15px;
            height: 2px;
            background: #000000;
        }
        .nav #menu-button::before {
            content: '';
            position: absolute;
            top: 17px;
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
