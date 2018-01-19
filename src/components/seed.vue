<template>
    <div class="hatchedDetail">
        <div class="bgColor">
            <div class="container">
                <div class="hatchedWrap clearfix">
                    <img :src="seed.icon" alt="" class="l hatchedImg">
                    <div class="l hatchedInfo">
                        <!-- 公司名 -->
                        <p style="font-size:16px;font-weight:bold">{{ seed.name }}</p>
                        <!--孵化资金-->
                        <p>孵化资金 : {{ seed.funds }}</p>
                        <!-- 项目简介 -->
                        <p class="text-ellipsis-muti text-ellipsis-2">简介 : {{ seed.intro }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="min-height:800px;">
            <div class="hatchedBody clearfix" v-html="seed.content"></div>
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
                seed: '',
            }
        },
        components: {

        },
        created() {
            let id = this.$route.params.id;
            this.setSeedDetailApi(id);
        },
        filters: {

        },
        methods: {
            setSeedDetailApi(id) {
                var _this = this;
                _this.getRequest('/seed/' + id)
                    .then(res =>{
                        if (res && res.status == 200) {
                            this.seed = res;
                        }
                    })
            },


        },



    }
</script>
<style>

</style>