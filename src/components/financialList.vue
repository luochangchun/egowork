<template>
    <div class="financialList bdColor">
        <div class="container">
            <el-row class="nowLocation ml0">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/financial' }">云创金融</el-breadcrumb-item>
                        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="30" v-if="type=='project'" class="financial_common financial_projects clearfix" style="background-color:#f1f1f1;padding-top:0px">
                <!-- 融资项目组件 -->
                <FinancialProjectItem v-for="item in projectList" v-bind:financialProject="item" v-bind:key="item.id"></FinancialProjectItem>
                <el-col class="tc">
                    <el-pagination background layout="prev, pager, next" @current-change="handleChangeProject" :total="totalPages">
                    </el-pagination>
                </el-col>
            </el-row>
            <el-row :gutter="30" v-if="type=='agency'" class="financial_common financial_agency clearfix" style="background-color:#f1f1f1;">
                <!-- 融资项目组件 -->
                <AgencyItem  v-for="item in AgencyList" v-bind:agency="item" v-bind:key="item.id"></AgencyItem>
                <el-col class="tc">
                    <el-pagination v-if="type=='agency'" background layout="prev, pager, next" @current-change="handleChangeAgency" :total="totalPages">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import FinancialProjectItem from './common/financialProjectItem.vue' //融资项目组件
    import AgencyItem from './common/agencyItem.vue' //投资机构组件
    export default {
        data() {
            return {
                title: "",
                type: "",
                projectList: "",
                AgencyList: ""
            }
        },
        mounted() {
            let type = this.$route.params.type;
            this.type = type;
            if (type == "project") {
                this.title = "融资项目列表";
                this.type = "project";
                this.InitProjectList();
            } else if (type == "agency") {
                this.type = "agency";
                this.title = "知名投资机构列表";
                this.InitAgencyList();
            }
        },
        methods: {
            InitProjectList() {
                var _this = this;
                let url = "/project/10/0"
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.projectList = res['data']['content'];
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
            InitAgencyList() {
                var _this = this;
                var domain = "http://www.egowork.com/";
                let url = "/investor/10/0"
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.AgencyList = res['data']['content'];
                        for (var i = 0; i < _this.AgencyList.length; i++) {
                            _this.AgencyList[i]['icon'] = domain + _this.AgencyList[i]['icon'];
                        }
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
            handleChangeProject(val) {
                var _this = this;
                let url = "/project/10/" + val
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.projectList = res['data']['content'];
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            },
            handleChangeAgency(val) {
                var _this = this;
                var domain = "http://www.egowork.com/";
                let url = "/investor/10/" + val;
                _this.getRequest(url).then(res => {
                    if (res && res.status == 200) {
                        _this.AgencyList = res['data']['content'];
                        for (var i = 0; i < _this.AgencyList.length; i++) {
                            _this.AgencyList[i]['icon'] = domain + _this.AgencyList[i]['icon'];
                        }
                        _this.totalPages = res['data']['total'] * 10;
                    }
                });
            }
        },
        components: {
            FinancialProjectItem,
            AgencyItem
        }
    }
</script>

<style scoped>
    .nowLocation {
        margin-top: 20px;
    }
    .financial_agency {
        background-color: #fff;
        padding-top: 0;
    }
</style>

