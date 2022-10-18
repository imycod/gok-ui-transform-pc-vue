<template>
  <div class="excellent-card">
    <h3>电力机房搬迁项目电力机房搬迁项目电力机房搬迁项目</h3>
    <div class="box">
        <div class="box-left flex center">
            <img class="box-icon" src="~@/assets/images/clock.png" alt="">
            <span>2022-08-01~2022-08-31</span>
        </div>
        <div class="box-right flex center">
            <img class="box-icon" src="~@/assets/images/people.png" alt="">
            <span>人数需求：5人</span>
        </div>
    </div>
    <div>人才需求：护网行动专员、信息安全助理工程师</div>
    <div class="tag-card">
        <span class="data-tag">数据通信</span>
        <span class="place">厦门</span>
    </div>
    <div class="box">
        <div class="box-left flex center">
            <img class="box-icon" src="~@/assets/images/clock.png" alt="">
            <span>申请截止：2022-08-31</span>
        </div>
        <div class="box-right">
           <div class="handle-btn">立即申请</div>
        </div>
    </div>
    <img src="~@/assets/images/bt1.png" alt="" class="bt">
  </div>
</template>

<script>
export default {
    props: {
        dataItem: {
            type: Object
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="stylus" scoped>
    .excellent-card {
        position: relative;
        width: 520px;
        height: 200px;
        border: 1px solid #F0F2F7;
        border-radius: 4px;
        padding: 20px 18px;
        box-sizing: border-box;
        line-height: 2.2;
        box-shadow: 0px 8px 20px rgba(51, 51, 61, 0.04);
        h3 {
            font-size: 16px;
            // font-family: Source Han Sans CN-Medium, Source Han Sans CN;
            font-weight: 500;
            color: #383838;
        }
        .box {
            display: flex;
            justify-content: space-between;
            align-items: center
            color: #6A7487;
            font-size: 14px;
            // font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            .box-icon {
                width: 18px;
                height: 18px;
                vertical-align: middle;
                margin-top: -3px;
                margin-right: 4px;
            }
            .handle-btn {
                width: 92px;
                height: 28px;
                line-height: 28px;
                background: #FE8836;
                border-radius: 4px 4px 4px 4px;
                text-align: center;
                color: #fff;
                cursor: pointer;
            }
        }
        .tag-card {
            .data-tag, .place {
                display: inline-block;
                padding: 0 6px;
                height: 24px;
                line-height: 24px;
                border-radius: 2px;
                font-size: 14px;
                font-weight: 500;
                margin-right: 7px;
            }
            .data-tag {
                background: #DDDFFD;
                color: #5B65F4;
            }
            .place {
                background: #FFF5ED;
                color: #FE9E5B;
            }
        }
        .bt {
            position: absolute;
            left: 0;
            top: 0;
            width: 48px;
            height: 48px;
        }
    }
</style>
