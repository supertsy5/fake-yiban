<template>
    <div id="root">
        <div class="hx-layout">
            <div class='header'>
                <div class='button-back'>
                    <img src='./back.svg'/>
                </div>
                <div class='title'>{{studentName}}的请销假</div>
                <div class='button-close'>
                    <img src='./close.svg'/>
                </div>
                <div class='button-menu'>
                    <img src='./menu.svg'/>
                </div>
            </div>
            <main class="hx-content">
                <div class="wfTitle___Y-ebx">{{studentName}}的请销假</div>
                <div class="hx-detail">
                    <div class="hx-detail-group">
                        <div class="hx-title-detail">
                            <div class="hx-title-detail-dot"></div>申请人
                        </div>
                        <div class="hx-detail-content">
                            <div class="am-accordion hx-detail-accordion">
                                <div class="am-accordion-item">
                                    <div class="am-accordion-header" role="button" tabindex="0" aria-expanded="false"><i
                                            class="arrow"></i>
                                        <div class="hx-detail-item"><span class="hx-detail-item-label">姓名</span>
                                            <div class="hx-detail-item-field">
                                                <div
                                                    class="am-flexbox am-flexbox-justify-start am-flexbox-align-center">
                                                    {{studentName}}({{studentID}})</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hx-detail">
                    <div class="hx-detail-group">
                        <div class="hx-title-detail">
                            <div class="hx-title-detail-dot"></div>申请内容
                        </div>
                        <div class="hx-detail-content">
                            <div class="hx-detail-item"><span class="hx-detail-item-label">审批编号</span>
                                <div class="hx-detail-item-field">{{auditID}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">是否离校</span>
                                <div class="hx-detail-item-field">是</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">是否离开沈阳</span>
                                <div class="hx-detail-item-field">否</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">是否离开辽宁省</span>
                                <div class="hx-detail-item-field">否</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">前往省份、城市</span>
                                <div class="hx-detail-item-field"></div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">开始时间</span>
                                <div class="hx-detail-item-field">{{startTime}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">结束时间</span>
                                <div class="hx-detail-item-field">{{endTime}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">时长</span>
                                <div class="hx-detail-item-field">{{hours}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">请假类型</span>
                                <div class="hx-detail-item-field">{{type}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">本人联系电话</span>
                                <div class="hx-detail-item-field">{{studentPhone}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">紧急联系人</span>
                                <div class="hx-detail-item-field">{{emergencyContact}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">紧急联系电话</span>
                                <div class="hx-detail-item-field">{{emergencyPhone}}</div>
                            </div>
                            <div class="hx-detail-item"><span class="hx-detail-item-label">请假原因</span>
                                <div class="hx-detail-item-field">
                                    {{reason}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hx-detail" v-if='approvers'>
                    <div class="hx-detail-group">
                        <div class="hx-title-detail">
                            <div class="hx-title-detail-dot"></div>审批进度
                        </div>
                        <div class="hx-detail-content">
                            <div class="flowInfo___244V-">
                                <div class="flownode___1GTd6 node2___1yk73" v-for='approver, num of approvers' :key='num'>
                                    <div class="nodestate___Npp7u"><span>通过</span>
                                    <span class="stateTime___2bJzR" v-if='num == approvers.length - 1'>{{approver.time}}</span></div>
                                    <div class="nodeleft___2q7Sg"><span class="nodeindex___Cya0J">{{num + 1}}</span></div>
                                    <div class="noderight___urUWJ">
                                        <div style="margin-top: 0px;" class="nodeapprover___1KJaE">
                                            <div>
                                                <div>{{approver.name}}({{approver.id}})<span class="workTime___PJH95">{{approver.time}}</span></div>
                                                <div class="approverOpinion___3xcsE"><span
                                                        style="color: rgb(135, 208, 104);">已同意</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flownode___1GTd6">
                                    <div class="nodeend___sR2u9"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hx-detail" v-if='ccs'>
                    <div class="hx-detail-group">
                        <div class="hx-title-detail">
                            <div class="hx-title-detail-dot"></div>已抄送
                        </div>
                        <div class="hx-detail-content">
                            <div class="ccInfo___T7Slb">
                                <div v-for='cc, num of ccs' :key='num'>{{cc.name}}({{cc.id}})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="hx-footer">
                <a role="button" class="am-button hx-footer_btn" style="color: rgb(87, 191, 242);"
                    aria-disabled="false"><span>转发审批表单</span></a></div>
        </div>
        <img class="hx-detail-statusIcon" src="./initiate-2.0a5010df.png">
    </div>
</template>

<script>
export default {
    name: 'fake',
    data(){
        return {
            studentName: 'Alice',
            studentID: '2102020212',
            auditID: '20220101080000000000',
            startTime: '2022-01-01 08:00',
            endTime: '2022-01-02 08:00',
            hours: 24,
            type: '事假',
            studentPhone: '15804016942',
            emergencyContact: 'Bob',
            emergencyPhone: '19818840640',
            reason: '回家休息；本人承诺:请假事由真实，每天按时检测本人健康情况；对自己出行轨迹负责；出行途中做好个人防护；返校第一时间报告并严格执行学校防疫规定。',
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

<style src="./fake.css"></style>
<style src="./780e88b3.css"></style>
<style src="./41a291b0.chunk.css"></style>
<style src="./5de02372.chunk.css"></style>
<style src="./8593bd49.chunk.css"></style>
<style src="./4c338eb8.chunk.css"></style>
<style src="./a843def6.chunk.css"></style>