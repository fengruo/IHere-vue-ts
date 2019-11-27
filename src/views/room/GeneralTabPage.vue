<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane :label="item.label" v-for="item in initData">
                <slot>
                    <template v-if="item.children&&item.children.length>0">
                        <GeneralTabPage :initData="item.children" ></GeneralTabPage>
                    </template>
                    <template v-else>
                        <span>{{item.value}}</span>
                    </template>
                </slot>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {
            GeneralTabPage
        },
    })
    export default class GeneralTabPage extends Vue {
        @Prop(Array) initData: any

    };
</script>

<style scoped>

</style>
