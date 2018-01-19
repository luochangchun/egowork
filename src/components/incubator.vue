<template>
    <el-row style="background-color:#f1f1f1;width:100%;padding-top:30px;padding-bottom:50px;">
        <div class="container">
            <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="index_headline i-d">
                                <div class="incubation_detail_content float_left">
                                    <h4 class="h4 black1">{{ incubator.title }}</h4>
                                    <p class="line-height black3 f14">地址: {{ incubator.address }}</p>
                                    <p class="line-height black3 f14">联系电话: {{ incubator.phone }}</p>
                                    <p class="line-height black3 f14" v-if="incubator.level == subItem.id" v-for="(subItem,index) in dictLevel" :key="index">
                                        级别: {{ subItem.value }}
                                    </p>
                                    <p class="line-height black3 f14" v-if="incubator.region == subItem.id" v-for="(subItem,index) in dictRegion" :key="index">
                                        地区: {{ subItem.value }}
                                    </p>
                                    <button class="btn3" data-toggle="modal" data-target="#spaceRent" data-whatever="@mdo">申请入驻</button>
                                    <p class="p4 color2 text-ellipsis-muti text-ellipsis-4 black2">{{ incubator.settled }}</p>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <!--空间展示-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span>空间展示</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <el-col class="space_show_img" style="margin-right:0;;border:none;">
                                <el-row :gutter="20">
                                    <el-col :lg="18" :md="18" :sm="18" :xs="24" style="background-color:#fff;padding:20px;">
                                        <el-row :gutter="20">
                                            <el-col :lg="8" :md="8" :sm="8" :xs="8" v-for="(item,index) in photos" :key="index">
                                                <div class="s_show_img">
                                                    <img :src="item.uri" alt="">
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="24" class="space_show_right">
                                        <div style="border-bottom:1px solid #A53B3B;padding-bottom:10px;">
                                            <h1 class="detail_title"><span>|</span> 直投基金</h1>
                                            <p>{{ incubator.fund }}</p>
                                        </div>
                                        <div style="padding-bottom:30px;">
                                            <h1 class="detail_title"><span>|</span> 入驻类型</h1>
                                            <p class="dib" v-for="(upItem,index) in incubator.enter.split(',')" :key="index">
                                                <span class="label2 fontColor" v-if="upItem == subItem.id" v-for="(subItem,index) in dictEnter" :key="index">
                                                    {{ subItem.value }}
                                                </span>
                                            </p>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-col>
                    </el-row>
                    <!--招商政策-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 招商政策</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="investment_policy"  v-html="incubator.policy">
                            </div>
                        </el-col>
                    </el-row>
                    <!--空间服务-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 空间服务</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;padding-left:20px;padding-right:20px;">
                                <el-row>
                                    <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                                        <div class="space_img">
                                            <div>
                                                <span v-for="(upItem,index) in incubator.service.split(',')" :key="index">
                                                    <el-col v-if="upItem == subItem.id" v-for="(subItem,index) in dictService" :key="index" :lg="2" :md="2" :sm="6" :xs="8" class="space_show">
                                                        <span v-if="subItem.id == 28">
                                                            <img src="static/img/xinxihuafuwu.png" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 29">
                                                            <img src="static/img/dianzishangwu.png" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 30">
                                                            <img src="static/img/xiangmushenbao.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 31">
                                                            <img src="static/img/chuangyedaoshi.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 32">
                                                            <img src="static/img/chuangyeshalong.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 33">
                                                            <img src="static/img/rongziduijie.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 34">
                                                            <img src="static/img/zhengcheduijie.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 35">
                                                            <img src="static/img/gaoxinjishu.png" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 36">
                                                            <img src="static/img/jiaoyupeixun.png" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 37">
                                                            <img src="static/img/gongshangcaishui.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 38">
                                                            <img src="static/img/renshidaili.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 93">
                                                            <img src="static/img/zhishichanquan.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 94">
                                                            <img src="static/img/falvfuwu.jpg" alt="">
                                                        </span>
                                                        <span v-if="subItem.id == 95">
                                                            <img src="static/img/wuyeguanli.png" alt="">
                                                        </span>
                                                        <p style="margin-bottom: 30px;">{{ subItem.value }}</p>
                                                    </el-col>
                                                </span>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <!--配套设施-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <h1 class="detail_title"><span>|</span> 配套设施</h1>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                            <div class="index_headline" style="margin-right:0;background-color:#fff;border:none;padding-left:20px;padding-right:20px;">
                                <el-row>
                                    <el-col :lg="24" :md="24" :sm="24" :xs="24" class="space_show">
                                            <div class="space_img">
                                                <div>
                                                    <span v-for="(upItem,index) in incubator.facility.split(',')" :key="index">
                                                        <el-col v-if="upItem == subItem.id" v-for="(subItem,index) in dictFacility" :key="index" :lg="2" :md="2" :sm="6" :xs="8" class="space_show">
                                                            <span v-if="subItem.id == 39">
                                                                <img src="static/img/huiyishi.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 40">
                                                                <img src="static/img/xiuxianqu.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 41">
                                                                <img src="static/img/chashuijian.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 42">
                                                                <img src="static/img/luyanting.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 89">
                                                                <img src="static/img/huodongshi.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 90">
                                                                <img src="static/img/tingchechang.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 91">
                                                                <img src="static/img/zhibojian.png" alt="">
                                                            </span>
                                                            <span v-if="subItem.id == 92">
                                                                <img src="static/img/duogongnengshi.png" alt="">
                                                            </span>
                                                            <p style="margin-bottom: 30px;">{{ subItem.value }}</p>
                                                        </el-col>
                                                    </span>
                                                </div>
                                            </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </el-row>
</template>

<script>
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                incubator: '',
                photos: '',
                dictLevel: '',
                dictRegion: '',
                dictEnter: '',
                dictService: '',
                dictFacility:'',
                subItem: '',
                upItem: '',
            }
        },
        components: {

        },
        created() {
            let id = this.$route.params.id;
            this.setNewsApiDetail(id);
            this.setIncubator();
        },
        filters: {

        },
        methods: {
            setNewsApiDetail(id) {
                api.Get('/qb/' + id)
                    .then(res =>{
                        this.incubator = res;
//                        console.log(res);
                        this.photos = res['photos']; //空间展示
                    })
            },
            setIncubator() {
                api.Get('/dict/' + 'incubator')
                    .then(res =>{
                        this.dictLevel = res;
                        this.dictRegion = res;
                        this.dictEnter = res;//入驻类型
                        console.log(res);
                        this.dictService = res;//空间服务
                        this.dictFacility = res;//配套设施
                    })
            },



        },




    }
</script>

<style>
</style>

