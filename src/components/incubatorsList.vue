<template>
    <div style="background-color:#f1f1f1;width:100%;padding:20px 10px;box-sizing:border-box;">
        <div class="container">
            <el-row :gutter="20" class="clearfix" v-for="(item,index) in incubatorsList" :key="index">
                <el-col :lg="8" :md="8" :sm="12" :xs="24" style="clear:both;">
                    <div class="index_headline" style="margin-right:0;border:none;">
                        <div style="height:227px;">
                            <img :src="item['icon']" alt="" style="height:224px;">
                        </div>
                    </div>
                </el-col>
                <el-col :lg="16" :md="16" :sm="12" :xs="24">
                    <div class="index_headline_content">
                        <h4 class="h4 text-ellipsis">{{ item.title }}</h4>
                        <p class="p3 line-height text-ellipsis">地址: {{ item.address }}</p>
                        <p class="p3 line-height text-ellipsis">联系电话: {{ item.phone }}</p>
                        <p class="p3 line-height text-ellipsis" v-if="item.level == subItem.id" v-for="(subItem,index) in dictLevel" :key="index">
                            级别: {{ subItem.value }}
                        </p>
                        <p class="p3 line-height text-ellipsis" v-if="item.region == subItem.id" v-for="(subItem,index) in dictRegion" :key="index">
                            地区: {{ subItem.value }}
                        </p>
                        <router-link :to="{ name: 'incubator',params: { id: item.id}}" class="btn5">
                            查看详情
                        </router-link>
                    </div>
                </el-col>
            </el-row>
            <!--分页-->
            <el-row>
                <el-col class="tc margin-bottom">
                    <el-pagination background layout="prev, pager, next" @current-change="getIncubatorsList" :total="totalPages">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                photos: '',
                incubatorsList: '',
                totalPages: '',
            }
        },
        components: {
        },
        created() {
            this.setIncubator();
            this.setIncubatorsList();
        },
        filters: {
        },
        methods: {
            setIncubatorsList() {
                var _this = this;
                var domain = "http://www.egowork.com/";
                let url = '/qb/10/0';
                _this.getRequest(url)
                    .then(res => {
                        if (res && res.status == 200) {
                            this.incubatorsList = res['data']['content']; //孵化器列表
                            for (var i = 0; i < _this.incubatorsList.length; i++) {
                                _this.incubatorsList[i]['icon'] = domain + _this.incubatorsList[i]['icon'];
                            }
                            this.totalPages = res['data']['total'] * 10; //分页
                        }
                    })
            },
            getIncubatorsList(val) {
                var _this = this;
                //获取到当前分页页码，获取当前页面数据
                var url = '/qb/10/' + val;
                _this.getRequest(url)
                    .then(res => {
                        if (res && res.status == 200) {
                            this.incubatorsList = res['data']['content'];
                            this.totalPages = res['data']['total'] * 10;
                        }
                    })
            },
            setIncubator() {
                var _this = this;
                _this.getRequest('/dict/' + 'incubator')
                    .then(res => {
                        if (res && res.status == 200) {
                            this.dictLevel = res['data']; //级别
                            this.dictRegion = res['data']; //地区
                        }
                    })
            },
        },
    }
</script>