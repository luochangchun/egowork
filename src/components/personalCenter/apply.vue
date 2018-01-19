<template>
    <div class="apply">
        <div class="apply_title">
            <h1>{{title}}</h1>
        </div>
        <div class="apply_table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:"空间租赁申请",
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            initApply(type) {
                if (type == '01') {
                    this.title = "空间租赁申请";
                } else if (type == '02') {
                    this.title = "线上孵化申请";
                } else if (type == '03') {
                    this.title = "共享办公申请";
                } else if (type == '04') {
                    this.title = "共享会议室申请";
                }
            }
        },
        watch: {
            '$route' (to, from) {
                this.flag = false;
                let type = this.$route.params.type;
                this.type = type;
                this.initApply(this.type);
            }
        }
    }
</script>

