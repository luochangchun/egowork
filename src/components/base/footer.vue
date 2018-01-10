<template>
    <div class="footer">
        <div class="container">
            <el-row :gutter="0" class="padder-v-md" style="text-align: ">
                <el-col :xs="8" :sm="8" :md="8" :lg="8"  :xl="8">
                    <ul>
                        <li class="footer_logo"><img src="static/img/footer_logo.png" alt=""></li>
                        <li>公司地址：武汉市江汉经济开发区江旺路6号</li>
                        <li>客服电话：027-62432550</li>
                        <li>邮箱：marketing@hansap.com</li>
                    </ul>
                </el-col>
                <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="contact_img">
                    <ul>
                        <li>产品</li>
                        <li>空间租赁</li>
                        <li>线上孵化</li>
                        <li>共享办公</li>
                        <li>共享会议室</li>
                    </ul>
                </el-col>
                <el-col :xs="4" :sm="4" :md="4" :lg="4" class="contact_img">
                    <ul>
                        <li>服务</li>
                        <li>企业信息化</li>
                        <li>融资贷款</li>
                        <li>人力资源</li>
                        <li>财税法务</li>
                        <li>项目申报</li>
                        <li>贸易服务</li>
                        <li>工商代办</li>
                        <li>知识产权</li>
                    </ul>
                </el-col>
                <el-col :xs="4" :sm="4" :md="4" :lg="4" class="contact_img">
                    <ul>
                        <li>快速入口</li>
                        <li>
                            <a>预约参观</a>
                        </li>
                        <li>
                            <a>申请工位/办公室</a>
                        </li>
                        <li>
                            <a>预约会议室</a>
                        </li>
                        <li>
                            <a>发布需求</a>
                        </li>
                        <li>
                            <a>申请成为服务商</a>
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="4" :sm="4" :md="4" :lg="4" class="contact_img">
                    <p class="attention" style="padding-bottom:10px">关注我们</p>
                    <img src="http://www.egowork.com/themes/egowork/img/egowork.jpg" class="center-block" style="width:80px;">
                </el-col>
            </el-row>
        </div>
        <div class="bg-dark footer_footer">
            <div class="tc padder-v-xxs">
                <p>Copyright © 2017.Phoenix All rights reserved.鄂ICP备16001629号-1</p>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .footer {
        background-color: rgb(46,42,43);
        height:278px;
        padding-top:20px;
        padding-bottom:20px;
        clear: both;
    }

    .contact_info {
        /* width: 100%; */
        box-sizing: border-box;
    }

    .contact_info p {
        padding: 0 0 10px;
    }

    .contact_info p.gray, .contact_img span.gray{
        color: #8b8b8b;
    }
    .bg-dark {
        color: #666666;
        background-color: #222222;
    }
</style>

