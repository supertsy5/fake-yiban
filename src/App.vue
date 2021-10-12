<template>
    <div class='edit' v-if='!display'>
        <h1>Fake Yiban: 不一般的易班 v0.1</h1>
        <div class='s1'>
            <h3>学生信息</h3>
            <div class='row labels'>
                <div class='label'>姓名</div>
                <div class='label'>学号</div>
            </div>
            <div class='row labels'>
                <input type='text' v-model='studentName'>
                <input type='text' v-model='studentID'>
            </div>
        </div>
        <div class='s2'>
            <h3>请假信息</h3>
            <div class='row labels'>
                <div class='label'>项目</div>
                <div class='label'>内容</div>
            </div>
            <div class='row' v-for='item, num in items' :key='item'>
                <input type='text' v-model='item.name'>
                <input type='text' v-model='item.value'>
                <button class='delete' @click="items.splice(num, 1)">X</button>
            </div>
            <button class='add' @click="items.push({name: '', value: ''})">+</button>
        </div>
        <div class='s3'>
            <h3>审批进度</h3>
            <div class='row labels'>
                <div class='label'>姓名</div>
                <div class='label'>编号</div>
                <div class='label'>时间</div>
            </div>
            <div class='row' v-for='approver, num in approvers' :key='approver'>
                <input type='text' v-model='approver.name'>
                <input type='text' v-model='approver.id'>
                <input type='text' v-model='approver.time'>
                <button class='delete' @click="approvers.splice(num, 1)">X</button>
            </div>
            <button class='add' @click="approvers.push({name: '', id: '', time: ''})">+</button>
        </div>
        <div class='s4'>
            <h3>抄送</h3>
            <div class='row labels'>
                <div class='label'>姓名</div>
                <div class='label'>编号</div>
            </div>
            <div class='row' v-for='cc, num in ccs' :key='cc'>
                <input type='text' v-model='cc.name'>
                <input type='text' v-model='cc.id'>
                <button class='delete' @click="ccs.splice(num, 1)">X</button>
            </div>
            <button class='add' @click="ccs.push({name: '', id: ''})">+</button>
        </div>
        <div class='final'>
            <button class='go' @click='go'>GO!</button>
        </div>
    </div>
    <fake v-if='display' :student-name='studentName' :studentID="studentID"
    :items='items' :approvers="approvers" :ccs="ccs" @exit='display=false'></fake>
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
            display: false,
            studentName: 'Example',
            studentID: '1234567890',
            items: [
                {
                    name: "审批编号",
                    value: "20210101080000123456"
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
                    value: "2021-01-01 08:00"
                },
                {
                    name: "结束时间",
                    value: "2021-01-02 08:00"
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
                    value: ""
                },
                {
                    name: "紧急联系人",
                    value: ""
                },
                {
                    name: "紧急联系电话",
                    value: ""
                },
                {
                    name: "请假原因",
                    value: ""
                }
            ],
            approvers: [],
            ccs: []
        }
    },
    methods: {
        go(){
            window.localStorage.setItem('last-data', JSON.stringify(this.$data));
            this.display = true;
        }
    },
    mounted(){
        let lastData = window.localStorage.getItem('last-data');
        if(lastData){
            this.$data = JSON.parse(lastData);
            alert(lastData);
        }
    }
}
</script>

<style src='./app.css'></style>
