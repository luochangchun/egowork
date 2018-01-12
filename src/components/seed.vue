<template>
    <div class="hatchedDetail">
        <div class="bgColor">
            <div class="container">
                <div class="hatchedWrap clearfix">
                    <img src="static/img/yunzhikangjian.png" alt="" class="l hatchedImg">
                    <div class="l hatchedInfo">
                        <!-- 公司名 -->
                        <p style="font-size:16px;font-weight:bold">${seed.name!}</p>
                        <!--孵化资金-->
                        <p>孵化资金 : ${seed.funds!}</p>
                        <!-- 项目简介 -->
                        <p class="text-ellipsis-muti text-ellipsis-2">简介 : ${seed.intro!}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="min-height:800px;">
            <div class="hatchedBody clearfix">${seed.content!}</div>
        </div>


    </div>
</template>
<script>

</script>
<style>

</style>