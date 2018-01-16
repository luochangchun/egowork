<template>
    <div>
        <!-- 发布服务需求表单 -->
        <div v-if="demandFlag">
            <el-dialog title="" :visible="demandFlag" class="commmonForm" :before-close="handleClose">
                <h1 class="tc fontColor form_title">发布服务需求表单</h1>
                <el-form :model="demandForm" :rules="demandRules">
                    <el-form-item label="需求类别" :label-width="formLabelWidth" prop="demandClassify">
                        <el-select v-model="demandForm.demandClassify" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="需求标题" :label-width="formLabelWidth" prop="demandTitle">
                        <el-input v-model="demandForm.demandTitle" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="需求描述" :label-width="formLabelWidth" prop="demandNeeds">
                        <el-input type="textarea" :rows="2" v-model="demandForm.demandNeeds" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="企业名称" :label-width="formLabelWidth" prop="demandEnterprise">
                        <el-input v-model="demandForm.demandEnterprise" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人" :label-width="formLabelWidth" prop="demandName">
                        <el-input v-model="demandForm.demandName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth" prop="demandPhone">
                        <el-input v-model="demandForm.demandPhone" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer tc">
                    <el-button type="primary">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- 预约参观表单 -->
        <div v-if="visitFlag">
            <el-dialog title="" :visible="visitFlag" class="commmonForm">
                <h1 class="tc fontColor form_title">预约参观表单</h1>
                <el-form ref="visitForm" :model="visitForm" :rules="visitRules">
                    <el-form-item label="联系人" :label-width="formLabelWidth" prop="visitName">
                        <el-input v-model="visitForm.visitName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth" prop="visitPhone">
                        <el-input v-model="visitForm.visitPhone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="选择参观孵化器" :label-width="formLabelWidth" prop="visitIncubator">
                        <el-select v-model="visitForm.visitIncubator" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="参观时间" :label-width="formLabelWidth" prop="visitPicker">
                        <el-input v-model="visitForm.visitPicker" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="感兴趣产品" :label-width="formLabelWidth" prop="visitProduct">
                        <el-select v-model="visitForm.visitProduct" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="了解更多" :label-width="formLabelWidth" prop="visitMore">
                        <el-input type="textarea" :rows="3" v-model="visitForm.visitMore" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer tc">
                    <el-button type="primary" @click="visitFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- 空间租赁申请表 -->
        <el-dialog title="" v-if="rentFromVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">空间租赁申请表</h1>
            <el-form ref="rentFrom" :model="rentFrom" :rules="rentRules">
                <el-form-item label="选择入驻孵化器" :label-width="formLabelWidth" prop="rentIncubator">
                    <el-select v-model="rentFrom.rentIncubator" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="公司名称" :label-width="formLabelWidth" prop="rentAppellation">
                    <el-input v-model="rentFrom.rentAppellation" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="团队人数" :label-width="formLabelWidth" prop="rentQuantity">
                    <el-input v-model="rentFrom.rentQuantity" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="成立情况" :label-width="formLabelWidth" prop="rentCases">
                    <el-select v-model="rentFrom.visitProduct" placeholder="请选择">
                        <el-option label="请选择" value="请选择"></el-option>
                        <el-option label="筹建" value="筹建"></el-option>
                        <el-option label="初建" value="初建"></el-option>
                        <el-option label="2年以内" value="2年以内"></el-option>
                        <el-option label="2年以上" value="2年以上"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="毕业5年以内大学生" :label-width="formLabelWidth" prop="rentGraduate">
                    <el-radio-group v-model="rentFrom.rentGraduate">
                        <el-radio label="true">是</el-radio>
                        <el-radio label="false">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="公司经营范围" :label-width="formLabelWidth" prop="rentRange">
                    <el-input v-model="rentFrom.rentRange" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="所需办公面积" :label-width="formLabelWidth" prop="visitPhone">
                    <el-input v-model="rentFrom.visitPhone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="rentArea">
                    <el-input v-model="rentFrom.rentArea" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="rentName">
                    <el-input v-model="rentFrom.rentName" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="visitFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 线上孵化申请表 -->
        <el-dialog title="" v-if="onlineFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">线上孵化申请表</h1>
            <el-form ref="onlineForm" :model="onlineForm" :rules="onlineRules">
                <el-form-item label="企业名称" :label-width="formLabelWidth" prop="onlineEnterprise">
                    <el-input v-model="onlineForm.onlineEnterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="企业性质" :label-width="formLabelWidth" prop="onlineSubstance">
                    <el-select v-model="onlineForm.onlineSubstance" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="企业在职人数" :label-width="formLabelWidth" prop="onlineEmployee">
                    <el-input v-model="onlineForm.onlineEmployee" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="经营范围及主营业务" :label-width="formLabelWidth" prop="onlineBusiness">
                    <el-input type="textarea" :rows="3" v-model="onlineForm.onlineBusiness" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册时间" :label-width="formLabelWidth" prop="onlinePicker">
                    <!-- <el-input v-model="onlineForm.onlinePicker" auto-complete="off"></el-input> -->
                    <el-date-picker v-model="onlineForm.onlinePicker" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="注册地址" :label-width="formLabelWidth" prop="onlineSignupAddr">
                    <el-input v-model="onlineForm.onlineSignupAddr" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册资金(万元)" :label-width="formLabelWidth" prop="onlineCapital">
                    <el-input v-model="onlineForm.onlineCapital" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="onlineName">
                    <el-input v-model="onlineForm.onlineName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="onlinePhone">
                    <el-input v-model="onlineForm.onlinePhone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="visitFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 共享办公申请表 -->
        <el-dialog title="" v-if="createFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">线上孵化申请表</h1>
            <el-form ref="createForm" :model="createForm" :rules="createRules">
                <el-form-item label="选择入驻孵化器" :label-width="formLabelWidth" prop="createIncubator">
                    <el-select v-model="createForm.createIncubator" placeholder="选择入驻孵化器">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="公司名称" :label-width="formLabelWidth" prop="createAppellation">
                    <el-input v-model="createForm.createAppellation" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="团队人数" :label-width="formLabelWidth" prop="createQuantity">
                    <el-input v-model="createForm.createQuantity" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="成立情况" :label-width="formLabelWidth" prop="createCases">
                    <el-select v-model="createForm.createCases" placeholder="请选择">
                        <el-option label="请选择" value="请选择"></el-option>
                        <el-option label="筹建" value="筹建"></el-option>
                        <el-option label="初建" value="初建"></el-option>
                        <el-option label="2年以内" value="2年以内"></el-option>
                        <el-option label="2年以上" value="2年以上"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="毕业5年以内大学生" :label-width="formLabelWidth" prop="createGraduate">
                    <el-radio-group v-model="createForm.createGraduate">
                        <el-radio label="true">是</el-radio>
                        <el-radio label="false">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="公司经营范围" :label-width="formLabelWidth" prop="createRange">
                    <el-input v-model="createForm.createRange" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="所需工位数量" :label-width="formLabelWidth" prop="createArea">
                    <el-input v-model="createForm.createArea" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="createName">
                    <el-input v-model="createForm.createName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="createPhone">
                    <el-input v-model="createForm.createPhone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="visitFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 共享会议室预定申请表 -->
        <el-dialog title="" v-if="shareFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">线上孵化申请表</h1>
            <el-form ref="shareForm" :model="shareForm" :rules="shareRules">
                <el-form-item label="预定企业名称" :label-width="formLabelWidth" prop="shareEnterprise">
                    <el-input v-model="shareForm.shareEnterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth" prop="shareName">
                    <el-input v-model="shareForm.shareName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="sharePhone">
                    <el-input v-model="shareForm.sharePhone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="会议活动名称" :label-width="formLabelWidth" prop="shareSubject">
                    <el-input v-model="shareForm.shareSubject" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="预定会议地址" :label-width="formLabelWidth" prop="shareAddr">
                    <el-select v-model="shareForm.shareAddr" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预定会议室用途" :label-width="formLabelWidth" prop="shareUsage">
                    <el-select v-model="shareForm.shareUsage" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="参会人数" :label-width="formLabelWidth" prop="shareAttender">
                    <el-input v-model="shareForm.shareAttender" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="参会需求" :label-width="formLabelWidth" prop="shareRequestId">
                    <el-checkbox-group v-model="shareForm.shareRequestId">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="visitFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 培训服务需求表单 -->
        <el-dialog title="" v-if="trainFormVisible" class="commmonForm">
            <h1 class="tc fontColor form_title">线上孵化申请表</h1>
            <el-form ref="trainForm" :model="trainForm" :rules="trainRules">
                <el-form-item label="培训主题" :label-width="formLabelWidth" prop="trainTitle">
                    <el-input v-model="trainForm.trainTitle" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="培训人数" :label-width="formLabelWidth" prop="trainAmount">
                    <el-input v-model="trainForm.trainAmount" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" :label-width="formLabelWidth" prop="trainEnterprise">
                    <el-input v-model="trainForm.trainEnterprise" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth" prop="trainPhone">
                    <el-input v-model="trainForm.trainPhone" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer tc">
                <el-button type="primary" @click="trainFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: ['demandFlag','visitFlag'],
        data() {
            return {
                demandFormVisible: false, //发布服务需求flag
                visitFormVisible: false, //预约参观flag
                rentFromVisible: false, //空间租赁flag
                onlineFormVisible: false, //线上孵化flag
                createFormVisible: false, //共享办公flag
                shareFormVisible: false, //共享会议flag
                trainFormVisible: false, //培训服务需求flag
                formLabelWidth: '145px',
                demandForm: {
                    demandClassify: '',
                    demandTitle: '',
                    demandNeeds: '',
                    demandEnterprise: '',
                    demandName: '',
                    demandPhone: ''
                },
                demandRules: {
                    demandClassify: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    demandTitle: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    demandNeeds: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    demandEnterprise: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    demandName: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    demandPhone: [{
                        required: true,
                        trigger: 'blur'
                    }]
                },
                visitForm: {
                    visitName: '',
                    visitPhone: '',
                    visitIncubator: '',
                    visitPicker: '',
                    visitProduct: '',
                    visitMore: ''
                },
                visitRules: {
                    visitName: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    visitPhone: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    visitIncubator: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    visitPicker: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    visitProduct: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    visitMore: [{
                        required: true,
                        trigger: 'blur'
                    }]
                },
                rentFrom: {
                    rentIncubator: '',
                    rentAppellation: '',
                    rentQuantity: '',
                    rentCases: '',
                    rentGraduate: '',
                    rentRange: '',
                    rentArea: '',
                    rentName: '',
                    rentPhone: ''
                },
                rentRules: {
                    rentIncubator: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentAppellation: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentQuantity: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentCases: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentGraduate: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentRange: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentArea: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentName: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    rentPhone: [{
                        required: true,
                        trigger: 'blur'
                    }]
                },
                onlineForm: {
                    onlineEnterprise: '',
                    onlineSubstance: '',
                    onlineEmployee: '',
                    onlineBusiness: '',
                    onlinePicker: '',
                    onlineSignupAddr: '',
                    onlineCapital: '',
                    onlineName: '',
                    onlinePhone: ''
                },
                onlineRules: {
                    onlineEnterprise: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    onlineSubstance: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    onlineEmployee: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    onlineBusiness: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    onlinePicker: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    onlineSignupAddr: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    onlineCapital: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    onlineName: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    onlinePhone: [{
                        required: true,
                        trigger: 'blur'
                    }]
                },
                createForm: {
                    createIncubator: '',
                    createAppellation: '',
                    createQuantity: '',
                    createCases: '',
                    createGraduate: '',
                    createRange: '',
                    createArea: '',
                    createName: '',
                    createPhone: ''
                },
                createRules: {
                    createIncubator: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    createAppellation: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    createQuantity: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    createCases: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    createGraduate: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    createRange: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    createArea: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    createName: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    createPhone: [{
                        required: true,
                        trigger: 'blur'
                    }],
                },
                shareForm: {
                    shareEnterprise: '',
                    shareName: '',
                    sharePhone: '',
                    shareSubject: '',
                    shareAddr: '',
                    shareFrom: '',
                    shareTo: '',
                    shareUsage: '',
                    shareAttender: '',
                    shareRequestId: '',
                    shareRequest: ''
                },
                shareRules: {
                    shareEnterprise: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareName: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    sharePhone: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareSubject: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareAddr: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareFrom: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareTo: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareUsage: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareAttender: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareRequestId: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    shareRequest: [{
                        required: true,
                        trigger: 'blur'
                    }]
                },
                trainForm: {
                    trainTitle: '',
                    trainAmount: '',
                    trainEnterprise: '',
                    trainPhone: ''
                },
                trainRules: {
                    trainTitle: [{
                        required: true,
                        trigger: 'blur'
                    }],
                    trainAmount: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    trainEnterprise: [{
                        required: false,
                        trigger: 'blur'
                    }],
                    trainPhone: [{
                        required: true,
                        trigger: 'blur'
                    }]
                }
            };
        }
    };
</script>

