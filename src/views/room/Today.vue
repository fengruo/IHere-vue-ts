<template>
    <div>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>
        <el-drawer
                title="我是外面的 Drawer"
                :visible.sync="drawer"
                :wrapperClosable="wrapperClosable"
                size="50%">
            <div>
                <el-button @click="cardfun">打开里面的!</el-button>
<!--                <el-drawer-->
<!--                        title="我是里面的"-->
<!--                        :append-to-body="true"-->
<!--                        :visible.sync="innerDrawer">-->
<!--                    <p>_(:зゝ∠)_</p>-->
<!--                </el-drawer>-->
            </div>
            <el-card class="box-card" v-if="cardshow" @blur="burlfun">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-drawer>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Today extends Vue {

        wrapperClosable:boolean= false;

        drawer:boolean= false;

        innerDrawer:boolean= false;

        cardshow:boolean= false;

        cardfun() {
            this.cardshow = true;
        };

        burlfun() {
            this.cardshow = false;
        };

    };
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
        z-index: 9999;
    }
</style>
