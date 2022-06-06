<template>
    <div id="sub-root">
        <div class="hx-layout">
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
                            <div class="hx-detail-item" v-for="item of items" :key='item'>
                                <span class="hx-detail-item-label">{{item.name}}</span>
                                <div class="hx-detail-item-field">{{item.value}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hx-detail" v-if='approvers.length > 0'>
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
                <div class="hx-detail" v-if='ccs.length > 0'>
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
        <div class='hx-detail-statusIcon'>
            <img src='./star_back.png'/>
            <img class='stars' src='./stars.png'/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fake',
    emits: ['exit'],
    props: {
        studentName: String,
        studentID: String,
        items: Array,
        approvers: Array,
        ccs: Array
    }
}
</script>

<style src="./780e88b3.css"></style>
<style src="./41a291b0.chunk.css"></style>
<style src="./5de02372.chunk.css" scoped></style>
<style src="./8593bd49.chunk.css" scoped></style>
<style src="./4c338eb8.chunk.css" scoped></style>
<style src="./a843def6.chunk.css" scoped></style>