<template>
    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <a class="db item" href=""> <img src="upload/images/articleimage/2018010817/1515405411545_1a3153bb2dce449bb0df1cb5a054a19f.png" alt="">
            <h2 class="tc text-ellipsis">{{agency.name}}</h2>
            <div class="h2_bott"></div>
            <p class="text-ellipsis-muti text-ellipsis-3">{{agency.info}}</p>
            <div class="tc tag text-ellipsis">{{agency.label}} </div>
        </a>
    </el-col>
</template>

<script>
    export default {
        props: ['agency'],
    }
</script>

