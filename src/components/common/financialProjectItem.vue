<template>
    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <a class="db item" href="">
            <div class="rel">
                <div class="abs mask"></div> <img src="http://www.egowork.com/themes/newego/img/mr.jpg" alt=""> <span class="abs white">融资中</span> </div>
            <div class="para">
                <h2 class="tc text-ellipsis">{{financialProject.title}}</h2>
                <p class="tc money text-ellipsis">{{financialProject.componyName}}</p>
                <p class="tc money">融资金额： <span>{{financialProject.money}}</span>万元 </p>
            </div>
        </a>
    </el-col>
</template>

<script>
    export default {
        props: ['financialProject'],
    }
</script>

<style>

</style>
