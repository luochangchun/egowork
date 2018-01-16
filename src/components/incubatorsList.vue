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
                                    <div class="index_headline" style="margin-right:0;border:none;">
                                        <a href="/" style="height:227px;display:block;">
                                            <img :src="item.icon" alt="" style="height:224px;">
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :lg="16" :md="16" :sm="12" :xs="24">
                                    <div class="index_headline_content">
                                        <h4 class="h4 text-ellipsis">{{ item.title }}</h4>
                                        <p class="p3 line-height text-ellipsis">地址: {{ item.address }}</p>
                                        <p class="p3 line-height text-ellipsis">联系电话: {{ item.phone }}</p>
                                        <p class="p3 line-height text-ellipsis">级别: {{ item.level }}</p>
                                        <p class="p3 line-height text-ellipsis">地区: {{ item.region }}</p>
                                        <router-link :to="{ name: 'incubator',params: { id: item.id}}" class="btn5">
                                            查看详情
                                        </router-link>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <!--分页-->
                        <el-row :gutter="10" style="margin-bottom: 50px;">
                            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                <div class="block">
                                    <el-pagination :current-page="0" :total="totalPages"  @current-change="handleCurrentChange" layout="prev, pager, next">
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
    import api from '../axios/api.js'
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                content: '',
                totalPages: '',
            }
        },
        components: {

        },
        created() {
            this.setNewsApiList()
        },
        filters: {

        },
        methods: {
            setNewsApiList() {
                let url = '/qb/' + '8' + '/' + '0';
                api.Get(url)
                    .then(res =>{
                        console.log(res);
                        this.content = res['content']; //孵化器列表
                        this.totalPages = res['totalPages'] * 10; //分页
                    })
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/qb/' + '8' + '/' + val;
                api.Get(url)
                    .then(res =>{
                        this.content = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    })
            }


        },



    }
</script>

<style>
</style>

