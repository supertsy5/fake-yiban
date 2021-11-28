<template>
<div id="sub-root">
    <div class='hx-content'>
        <div class="qrCode___3iwXY" style="height: 360px;">
            <div>
                <img class='qr___Jrc0m' src='./qrcode0.svg' style='width: 270px; height: 270px' v-if='qrcodeIndex==0'/>
                <img class='qr___Jrc0m' src='./qrcode1.svg' style='width: 270px; height: 270px' v-if='qrcodeIndex==1'/>
                <div class="text___HVPBl">二维码将在<span class="second___1XzxW">{{timeString}}秒</span>后刷新</div>
            </div>
        </div>
        <div class="hx-detail">
            <div class="hx-title-detail">
                <div class="hx-title-detail-dot"></div>离校详情
            </div>
            <div class="hx-detail-content">
                <div class="hx-detail-item"><span class="hx-detail-item-label">操作人</span>
                    <div class="hx-detail-item-field">-</div>
                </div>
                <div class="hx-detail-item"><span class="hx-detail-item-label">操作时间</span>
                    <div class="hx-detail-item-field">-</div>
                </div>
                <div class="hx-detail-item"><span class="hx-detail-item-label">备注</span>
                    <div class="hx-detail-item-field">-</div>
                </div>
            </div>
        </div>
        <div class="hx-detail">
            <div class="hx-title-detail">
                <div class="hx-title-detail-dot"></div>返校详情
            </div>
            <div class="hx-detail-content">
                <div class="hx-detail-item"><span class="hx-detail-item-label">操作人</span>
                    <div class="hx-detail-item-field">-</div>
                </div>
                <div class="hx-detail-item"><span class="hx-detail-item-label">操作时间</span>
                    <div class="hx-detail-item-field">-</div>
                </div>
                <div class="hx-detail-item"><span class="hx-detail-item-label">备注</span>
                    <div class="hx-detail-item-field">-</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'qrcode',
    data(){
        return {
            time: 20,
            qrcodeIndex: 0
        }
    },
    computed: {
        timeString(){
            return (this.time < 10 ? '0' : '') + String(this.time);
        }
    },
    mounted(){
        setInterval(()=>{
            if(this.time > 1){
                this.time -= 1;
            }else{
                this.time = 20;
                this.qrcodeIndex ++;
                this.qrcodeIndex %= 2;
            }
        }, 1000);
    }
}
</script>

<style src="./9c25fb71.chunk.css" scoped></style>