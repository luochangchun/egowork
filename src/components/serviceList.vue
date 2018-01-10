<template>
    <el-row style="background-color:#f1f1f1;width:100%;padding-top:30px;padding-bottom:50px;">
        <div class="container">
            <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane v-for="(item,index) in category" :key="index" :label="item.name" :name="item.cname" :cid="item.id">
                            <el-row :gutter="10" class="news-leftlist">
                                <router-link :to="{ name: 'article', params: { id: item.id} }" class="m-t b-b clea" v-for="(item, index) in newsListData" :key="index">
                                    <el-col :lg="8" :md="8" :sm="8" :xs="8" class="no-padder">
                                        <div>
                                            <img :src="item.icon" class="w-full">
                                        </div>
                                    </el-col>
                                    <el-col :lg="16" :md="16" :sm="16" :xs="16" class="pos">
                                        <p class="text-md font-bold text-ellipsis">
                                            <a href="" class="text-dark-lt">{{item['title']}}</a>
                                        </p>
                                        <p class="text-ellipsis-3" v-html="item['description']"></p>
                                        <div style="bottom:15px;">
                                            <p class="text-muted pull-left m-r">
                                                <i class="el-icon-time fa fa-clock-o m-r-xs"></i>
                                                <span>时间：{{item['time'] | formatDate}}</span>
                                            </p>
                                            <p class="text-muted pull-left">
                                                <i class="el-icon-edit fa fa-edit m-r-xs"></i>
                                                <span>{{item['views']}}</span>
                                            </p>
                                        </div>
                                    </el-col>
                                </router-link>
                            </el-row>
                            <!--分页-->
                            <el-row :gutter="10" style="margin-bottom: 50px;">
                                <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                    <div class="block">
                                        <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                        </el-pagination>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </el-row>
</template>

<script>
    //    import api from '../axios/api.js'
    //  import Swiper from '../components/swiper.vue'
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {

            }
        },
        components: {
//      commonSwiper: Swiper
        },
        created() {

        },
        filters: {

        },
        methods: {

        },



    }
</script>

<style>
</style>

