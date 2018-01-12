<template>
    <div class="hatchedList">
        <div class="container">
            <el-row :gutter="20" class="clearfix">
                <el-col :lg="6" :md="6" :sm="12" :xs="24"  v-for="(item,index) in 12" :key="index">
                    <a href="${enterprise.url!}" class="item db">
                        <h1 class="tc text-ellipsis p_padding">鹏博士电信传媒集团股份有限公司武汉分公司</h1>
                        <div class="line_green"></div>
                        <p class="tc text-ellipsis-muti text-ellipsis-2" style="height:100px;">鹏博士电信传媒集团股份有限公司武汉分公司鹏博士电信传媒集团股份有限公司武汉分公司鹏博士电信传媒集团股份有限公司武汉分公司</p>
                        <p class="tc">
                            <span>信息通信</span>
                        </p>
                        <div class="rel">
                            <div class="img_wrap abs">
                                <img src="static/img/yunzhikangjian.png" alt="">
                            </div>
                            <div class="img_line abs"></div>
                        </div>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>