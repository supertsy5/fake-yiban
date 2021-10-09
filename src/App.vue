<template>
    <fake :student-name='studentName' :studentID="studentID"
    :items='items' :approvers="approvers" :ccs="ccs"></fake>
</template>

<script>
import Fake from './components/fake/fake.vue'
export default {
    name: 'App',
    components: {
        Fake
    },
    data(){
        return {
            studentName: 'Alice',
            studentID: '2102020212',
            items: [
                {
                    name: "审批编号",
                    value: "20220101080000123456"
                },
                {
                    name: "是否离校",
                    value: "是"
                },
                {
                    name: "是否离开沈阳",
                    value: "否"
                },
                {
                    name: "是否离开辽宁省",
                    value: "否"
                },
                {
                    name: "前往省份、城市",
                    value: ""
                },
                {
                    name: "开始时间",
                    value: "2022-01-01 08:00"
                },
                {
                    name: "结束时间",
                    value: "2022-01-02 08:00"
                },
                {
                    name: "时长",
                    value: "24"
                },
                {
                    name: "请假类型",
                    value: "事假"
                },
                {
                    name: "本人联系电话",
                    value: "15804016942"
                },
                {
                    name: "紧急联系人",
                    value: "Bob"
                },
                {
                    name: "紧急联系电话",
                    value: "19818840640"
                },
                {
                    name: "请假原因",
                    value: "周末放假回家；本人承诺:请假事由真实，每天按时检测本人健康情况；对自己出行轨迹负责；出行途中做好个人防护；返校第一时间报告并严格执行学校防疫规定。"
                }
            ],
            approvers: [
                {
                    name: 'Nancy',
                    id: '20211',
                    time: '08:30'
                },
                {
                    name: 'Rita',
                    id: '20213',
                    time: '09:00'
                }
            ],
            ccs: [
                {
                    name: 'Amy',
                    id: '20214'
                },
                {
                    name: 'Bailey',
                    id: '20215'
                }
        ]
        }
    }
}
</script>

<style></style>
