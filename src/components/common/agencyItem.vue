<template>
    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <router-link class="db item tc" :to="{ name: 'investor', params: {type: 'agency', id: agency.id} }">
            <img :src="agency.icon" alt="">
            <h2 class="tc text-ellipsis">{{agency.title}}</h2>
            <div class="h2_bott"></div>
            <p class="text-ellipsis-muti text-ellipsis-3">{{agency.eprofile}}</p>
            <div class="tc tag text-ellipsis">{{agency.remarks}} </div>
        </router-link>
    </el-col>
</template>

<script>
    export default {
        props: ['agency'],
    }
</script>

