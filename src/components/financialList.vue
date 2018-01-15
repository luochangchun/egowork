<template>
    <div class="financialList">
        <div class="container">
            <el-row class="nowLocation ml0">
                <el-col>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/college' }">云创金融</el-breadcrumb-item>
                        <el-breadcrumb-item>精彩活动列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="30" class="financial_common financial_agency clearfix">
                <AgencyItem v-for="item in AgencyList" v-bind:agency="item" v-bind:key="item.id">></AgencyItem>
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
                projectList: [{
                        'title': '三峡创谷',
                        'componyName': '利农',
                        'money': 200
                    },
                    {
                        'title': '三峡创谷',
                        'componyName': '利农',
                        'money': 200
                    },
                    {
                        'title': '三峡创谷',
                        'componyName': '利农',
                        'money': 200
                    },
                    {
                        'title': '三峡创谷',
                        'componyName': '利农',
                        'money': 200
                    },
                ],
                AgencyList: [{
                        'name': '红杉资本',
                        'info': '非常好',
                        'label': '天使基金人'
                    },
                    {
                        'name': '红杉资本',
                        'info': '非常好',
                        'label': '天使基金人'
                    },
                    {
                        'name': '红杉资本',
                        'info': '非常好',
                        'label': '天使基金人'
                    },
                    {
                        'name': '红杉资本',
                        'info': '非常好',
                        'label': '天使基金人'
                    }
                ]
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
        padding-top: 30px;
    }
</style>

