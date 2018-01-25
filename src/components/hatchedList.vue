<template>
    <div class="hatchedList">
        <div class="container">
            <el-row :gutter="20" class="clearfix">
                <el-col :lg="6" :md="6" :sm="12" :xs="24"  v-for="(item,index) in hatchedList" :key="index">
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
            <el-row>
                <el-col class="tc margin-bottom">
                    <el-pagination background layout="prev, pager, next" @current-change="getHatchedList" :total="totalPages">
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
                hatchedList: '',
                totalPages: '',
            }
        },
        components: {

        },
        created() {
            this.setEnterpriseList();
            this.getHatchedList(val);
        },
        filters: {

        },
        methods: {
            setEnterpriseList() {
                var _this = this;
                var domain = "http://www.egowork.com/";
                let url = '/enterprise/12/0';
                _this.getRequest(url)
                    .then(res =>{
                        if (res && res.status == 200) {
                            _this.hatchedList = res['data']['content']; //入孵企业列表
                            for (var i = 0; i<_this.hatchedList.length; i++) {
                                _this.hatchedList[i]['icon'] = domain + _this.hatchedList[i]['icon'];
                            }
                            this.totalPages = res['data']['total'] * 10; //分页
                        }
                    })
            },
            getHatchedList(val) {
                var _this = this;
                var domain = "http://www.egowork.com/";
                //获取到当前分页页码，获取当前页面数据
                var url = '/enterprise/12/' + val;
                _this.getRequest(url)
                    .then(res =>{
                        if (res && res.status == 200){
                            _this.hatchedList = res['data']['content'];
                            for (var i = 0; i<_this.hatchedList.length; i++) {
                                _this.hatchedList[i]['icon'] = domain + _this.hatchedList[i]['icon'];
                            }
                            this.totalPages = res['data']["total"] * 10;
                        }
                    })
            }


        },



    }
</script>
<style>

</style>