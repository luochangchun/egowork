<template>
    <div class="hatchedDetail">
        <div class="bgColor">
            <div class="container">
                <div class="hatchedWrap clearfix">
                    <img :src="enterprise.icon" alt="" class="l hatchedImg">
                    <div class="l hatchedInfo" style="margin-top: 20px;">
                        <!-- 公司名 -->
                        <p class="text-ellipsis" style="font-size:16px;font-weight:bold">{{ enterprise.name }}</p>
                        <!--所属领域-->
                        <p>所属领域 : {{ enterprise.field }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="min-height:500px;margin-top:10px;">
            <el-row :gutter="20">
                <el-col :lg="16" :md="16" :sm="24" :xs="24" style="border-right:5px solid #f2f5f9;">
                    <!-- 优势 -->
                    <div class="hatchedBody clearfix"><span style="font-size: 16px;color:#18b494;margin-bottom:10px;display: block">优势 : </span></div>
                    <div class="clearfix">{{ enterprise.advantage }}</div>
                    <!--简介-->
                    <div class="hatchedBody clearfix">
                        <span style="font-size: 16px;color:#18b494;margin-bottom:10px;display: block">简介 : </span>
                        {{ enterprise.intro }}
                    </div>
                </el-col>
                <el-col :lg="8" :md="8" :sm="24" :xs="24">
                    <!--联系人-->
                    <div class="hatchedBody6 hatchedBody clearfix"><span style="font-size: 16px;color:#18b494">联系人 :</span> <span>{{ enterprise.contact }}</span></div>
                    <!--手机号-->
                    <div class="hatchedBody6 clearfix"><span style="font-size: 16px;color:#18b494">手机号 :</span> <span>{{ enterprise.phone }}</span></div>
                    <!--邮箱-->
                    <div class="hatchedBody6 clearfix"><span style="font-size: 16px;color:#18b494">邮&nbsp;&nbsp;&nbsp;箱 : </span> <span>{{ enterprise.email }}</span></div>
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
                enterprise: '',
            }
        },
        components: {

        },
        created() {
            let id = this.$route.params.id;
            this.setEnterpriseDetailApi(id);
        },
        filters: {

        },
        methods: {
            setEnterpriseDetailApi(id) {
                var _this = this;
                _this.getRequest('/enterprise/' + id)
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.enterprise = res['data'];
                        }
                    })
            },


        },



    }
</script>
<style>

</style>