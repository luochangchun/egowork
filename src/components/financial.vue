<template>
    <div class="financial">
        <div class="financial_banner"></div>
        <div class="financial_top">
            <div class="container">
                <div class="financial_top_info">
                    <h1 class="tc">联合国内外知名投资机构，共同成立“云创产业投资基金”</h1>
                    <p>为推进江汉区战略性新兴产业，打造有产业特色的江汉创谷，实现创新驱动，更好服务于武汉市及江汉区的企业，充分发挥国家和地方政府引导基金的优势，火凤凰联合国内外知名投资机构飞戈资本、盈禧投资，共同发起成立云创产业投资基金，基金规模为1亿元人民币。</p>
                    <p>基金将广泛吸引社会资本参与，以专业的投资管理团队和先进的投资理念，共同打造一流的战略性新兴产业基金，推进江汉区的发展，为基金投资人创造财富，为江汉区承接产业转移和产业升级</p>
                </div>
                <el-row class="financial_top_icon row clearfix">
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc iconl">政府引导</div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc icon02">专业运作</div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc icon04">国际化</div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="item">
                        <div class="icon tc icon03 iconr">防范风险</div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="financial_areas">
            <div class="container">
                <el-row :gutter="30" class="clearfix">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="item">
                            <h1 class="dib">投资方向</h1>
                            <p>主要投资于新一代信息技术、云计算、大数据、电子商务、互联网+、新零售等，处于早中期并且具备高成长性的中小型企业。</p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                        <div class="item">
                            <h1 class="dib">投资模式</h1>
                            <p>以产业基金模式对企业进行参控股，并形成产业协同帮助。所投项目主要通过IPO、被收购、新三板挂牌、股东回购等方式退出。</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 融资项目 -->
        <div class="financial_common financial_projects">
            <div class="container">
                <h1 class="tc rel">融资项目 <a class="abs goLogin" href="/signin.html">我要融资</a> <a data-toggle="modal" data-target="#financialForm" data-whatever="@mdo" class="abs" style="display: none;">机构入驻</a> </h1>
                <el-row :gutter="30" class="clearfix">
                    <!-- 融资项目组件 -->
                    <FinancialProjectItem v-for="item in projectList" v-bind:financialProject="item" v-bind:key="item.id">></FinancialProjectItem>
                    <!-- 融资项目组件 -->
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <a href="" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 投资机构 -->
        <div class="financial_common financial_agency">
            <div class="container">
                <h1 class="tc rel">知名投资机构 <a class="abs goLogin" href="/signin.html">机构入驻</a> <a data-toggle="modal" data-target="#agencyForm" data-whatever="@mdo" class="abs" style="display: none;">机构入驻</a></h1>
                <el-row :gutter="30" class="row clearfix">
                    <AgencyItem v-for="item in AgencyList" v-bind:agency="item" v-bind:key="item.id">></AgencyItem>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <a href="" class="view_more db tc">查看更多<i class="el-icon-d-arrow-right"></i> </a>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="financial_mail">
            <div class="container ovh"> <img src="http://www.egowork.com/themes/newego/img/financial_mail.png" class="mail db">
                <p class="tc white">如你的公司符合投资要求，请将商业计划书发送</p>
                <p class="tc white">至：<span>lugang@hansap.com</span></p> <a href="" onclick="window.open('mailto:lugang@hansap.com')" class="db white sendMail tc">立即发送</a> </div>
        </div>
    </div>
</template>

<script>
    import api from "../axios/api.js";
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
                    'name':'红杉资本',
                    'info':'非常好',
                    'label':'天使基金人'
                },
                {
                    'name':'红杉资本',
                    'info':'非常好',
                    'label':'天使基金人'
                },
                {
                    'name':'红杉资本',
                    'info':'非常好',
                    'label':'天使基金人'
                },
                {
                    'name':'红杉资本',
                    'info':'非常好',
                    'label':'天使基金人'
                }]
            }
        },
        components: {
            FinancialProjectItem,
            AgencyItem
        }
    }
</script>

