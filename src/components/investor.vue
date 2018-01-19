<template>
    <div class="financial_index">
        <div class="container">
            <el-row class="nowLocation ml0">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/financial' }">云创金融</el-breadcrumb-item>
                        <el-breadcrumb-item v-if="type == 'project'">融资项目列表</el-breadcrumb-item>
                        <el-breadcrumb-item v-if="type == 'agency'">投资机构列表</el-breadcrumb-item>
                        <el-breadcrumb-item>{{investor.name}}{{investor.title}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
        </div>
        <div class="project_detail">
            <div class="container" v-if="type == 'project'">
                <el-row :gutter="0" class="detail_top clearfix">
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="rel db">
                        <div class="img_wrap abs">
                            <img src="http://www.egowork.com/themes/newego/img/mr.jpg" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="info">
                        <h1>{{investor.name}} <span>{{investor.progress}}</span></h1>
                        <p class="b">{{investor.enterpirse}}</p>
                        <ul>
                            <li>{{investor.field}}</li>
                        </ul>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="detail_body row clearfix">
                    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="detail_body_info">
                        <h1><i class="fa fa-file-text-o" aria-hidden="true"></i>公司简介</h1>
                        <p>{{investor.intro}}</p>
                        <h1><i class="fa fa-file-word-o" aria-hidden="true"></i>项目优势</h1>
                        <p>{{investor.advantage}}</p>
                        <h1><i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>融资计划</h1>
                        <p>{{investor.capital}}万元</p>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="detail_body_recommend">
                        <h1>更多机构</h1>
                        <ul>
                            <li v-for="(item, index) in more" :key="index">
                                <router-link :to="{ name: 'investor', params: {type: 'project', id: item.id} }">
                                    <img src="http://www.egowork.com/themes/newego/img/mr.jpg">
                                </router-link>
                                <p>{{item.name}}</p>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <div class="container" v-if="type == 'agency'">
                <el-row :gutter="0" class="detail_top clearfix">
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="rel db">
                        <div class="img_wrap abs">
                            <img :src="investor.icon">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="info">
                        <h1>{{investor.title}}</h1>
                        <p class="b">{{investor.intro}}</p>
                        <ul>
                            <li>{{investor.remarks}}</li>
                        </ul>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="detail_body row clearfix">
                    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="detail_body_info">
                        <h1>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>公司简介</h1>
                        <p>{{investor.eprofile}}</p>
                        <h1>
                            <i class="fa fa-file-word-o" aria-hidden="true"></i>投资领域</h1>
                        <p>{{investor.serviceField}}</p>
                        <h1>
                            <i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>投资案例</h1>
                        <p>{{investor.cas}}</p>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="detail_body_recommend">
                        <h1>更多机构</h1>
                        <ul>
                            <li v-for="(item, index) in more" :key="index">
                                <router-link :to="{ name: 'investor', params: {type: 'agency', id: item.id} }">
                                    <img src="http://www.egowork.com/themes/newego/img/mr.jpg">
                                </router-link>
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "123",
                investor: "",
                type: "",
                more: ""
            }
        },
        mounted() {
            let type = this.$route.params.type;
            let id = this.$route.params.id;
            this.type = type;
            if (type == "project") {
                this.InitProject(id);
            } else if (type == "agency") {
                this.InitAgency(id);
            }
        },
        methods: {
            InitProject(id) {
                var _this = this;
                var url = "/project/" + id;
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.investor = res['data']['project'];
                        _this.more = res['data']['more'];
                    }
                })
            },
            InitAgency(id) {
                var _this = this;
                var domain = "http://www.egowork.com/";
                var url = "/investor/" + id;
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.investor = res['data']['investor'];
                        _this.investor['icon'] = domain + _this.investor['icon'];
                        _this.more = res['data']['more'];
                    }
                })
            }
        },
        watch: {
            '$route' (to, from) { //监听路由是否变化
                if (this.$route.params.id) {
                    let type = this.$route.params.type;
                    let id = this.$route.params.id;
                    this.type = type;
                    if (type == "project") {
                        this.InitProject(id);
                    } else if (type == "agency") {
                        this.InitAgency(id);
                    }
                }
            }
        }
    }
</script>
