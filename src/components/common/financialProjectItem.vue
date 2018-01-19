<template>
    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <router-link class="db item" :to="{ name: 'investor', params: {type: 'project', id: financialProject.id} }">
            <div class="rel">
                <div class="abs mask"></div> <img src="http://www.egowork.com/themes/newego/img/mr.jpg" alt=""> <span class="abs white">{{financialProject.progress}}</span> </div>
            <div class="para">
                <h2 class="tc text-ellipsis">{{financialProject.name}}</h2>
                <p class="tc money text-ellipsis">{{financialProject.field}}</p>
                <p class="tc money">融资金额： <span>{{financialProject.capital}}</span>万元 </p>
            </div>
        </router-link>
    </el-col>
</template>

<script>
    export default {
        props: ['financialProject'],
    }
</script>
