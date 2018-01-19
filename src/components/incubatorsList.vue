<template>
    <div style="background-color:#f1f1f1;width:100%;padding:20px 10px;">
        <div class="container">
            <p>全部孵化器 : </p>
            <el-row style="margin-top: 20px;">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" v-for="(item,index) in content" :key="index">
                            <el-row :gutter="20" class="clearfix">
                                <el-col :lg="8" :md="8" :sm="12" :xs="24" style="clear:both;">
                                    <div class="index_headline" style="margin-right:0;border:none;" >
                                        <div style="height:227px;">
                                            <img :src="item.photos[0]['uri']" alt="" style="height:224px;">
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
                        </el-col>
                        <!--分页-->
                        <el-row :gutter="10" class="margin-bottom">
                            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                <div class="block">
                                    <el-pagination :current-page="0" :total="total"  @current-change="getIncubatorsList" layout="prev, pager, next">
                                    </el-pagination>
                                </div>
                            </el-col>
                        </el-row>
                    </el-row>
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
                content: '',
                total: '',
            }
        },
        components: {

        },
        created() {
            this.setIncubator();
            this.setNewsApiList();
        },
        filters: {

        },
        methods: {
            setNewsApiList() {
                let url = '/qb/' + '3' + '/' + '0';
                api.Get(url)
                    .then(res =>{
                        this.content = res['content']; //孵化器列表
                        this.total = res['total'] * 10; //分页
                    })
            },
            getIncubatorsList(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/qb/' + '3' + '/' + count;
                api.Get(url)
                    .then(res =>{
                        this.content = res['content'];
                        this.total = res['total'] * 10;
                    })
            },
            setIncubator() {
                api.Get('/dict/' + 'incubator')
                    .then(res =>{
                        this.dictLevel = res;//级别
                        this.dictRegion = res;//地区
                    })
            },

        },



    }
</script>

<style>
</style>

