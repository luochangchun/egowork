<template>
    <div class="hatchedList">
        <div class="container">
            <el-row :gutter="20" class="clearfix">
                <el-col :lg="6" :md="6" :sm="12" :xs="24"  v-for="(item,index) in content" :key="index">
                    <router-link :to="{ name: 'enterprise',params: { id: item.id}}" class="item db">
                        <h1 class="tc text-ellipsis p_padding black1 f18">{{ item.name }}</h1>
                        <div class="line_green"></div>
                        <p class="tc text-ellipsis-muti text-ellipsis-2 f14 black2" style="height:100px;">{{ item.intro }}</p>
                        <p class="tc">
                            <span>{{ item.field }}</span>
                        </p>
                        <div class="rel">
                            <div class="img_wrap abs">
                                <img :src="item.icon" alt="">
                            </div>
                            <div class="img_line abs"></div>
                        </div>
                    </router-link>
                </el-col>
            </el-row>
            <!--分页-->
            <el-row class="margin-bottom tc">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="block">
                        <el-pagination :current-page="0" :total="total"  @current-change="getHatchedList" layout="prev, pager, next">
                        </el-pagination>
                    </div>
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
                total: '',
            }
        },
        components: {

        },
        created() {
            this.setEnterpriseList()
        },
        filters: {

        },
        methods: {
            setEnterpriseList() {
                let url = '/enterprise/' + '8' + '/' + '0';
                api.Get(url)
                    .then(res =>{
                        console.log(res);
                        this.content = res['content']; //入孵企业列表
                        this.total = res['total'] * 10; //分页
                    })
            },
            getHatchedList(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/enterprise/' + '8' + '/' + val;
                api.Get(url)
                    .then(res =>{
                        this.content = res['content'];
                        this.total = res["total"] * 10;
                    })
            }


        },



    }
</script>
<style>

</style>