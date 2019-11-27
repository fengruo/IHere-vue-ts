<template>
    <div>
        <GeneralTabPage :initData="dataForTree"></GeneralTabPage>
<!--        <el-tabs type="border-card">-->
<!--            <el-tab-pane :label="item.label" v-for="item in dataForTree()">-->
<!--                <slot>-->
<!--                    <template v-if="item.children!=null&&item.children.length>0">-->
<!--                        <GeneralTabPage :initData="item.children"></GeneralTabPage>-->
<!--                    </template>-->
<!--                    <template v-else>-->
<!--                        <span>{{item.value}}</span>-->
<!--                    </template>-->
<!--                </slot>-->
<!--            </el-tab-pane>-->
<!--        </el-tabs>-->
        <!--        <el-menu :default-active="1" class="el-menu-demo" mode="horizontal">-->
        <!--            <el-menu-item index="1">处理中心-->
        <!--              -->
        <!--            </el-menu-item>-->
        <!--            <el-submenu index="2">-->
        <!--                <template slot="title">我的工作台</template>-->
        <!--                <el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--                <el-menu-item index="2-3">选项2</el-menu-item>-->
        <!--                <el-menu-item index="2-2">选项3</el-menu-item>-->
        <!--                <el-submenu index="2-4">-->
        <!--                    <template slot="title">选项4</template>-->
        <!--                    <el-menu-item index="2-4-1">选项1</el-menu-item>-->
        <!--                    <el-menu-item index="2-4-2">选项2</el-menu-item>-->
        <!--                    <el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--                </el-submenu>-->
        <!--            </el-submenu>-->
        <!--            <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
        <!--        </el-menu>-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import GeneralTabPage from "@/views/room/GeneralTabPage.vue";

    type Item = {
        label: string;
        value: string;
        group: string;
    }

    type TreeItem = {
        label: string;
        value: string;
        group: string;
        children: Array<Item>;
    }


    @Component({
        components: {
            GeneralTabPage
        },
    })
    export default class Tomorrow extends Vue {
        value: [] = []
        list: Array<Item> = [{label: "付费订单", value: "付费订单", group: "订单"},
            {label: "退费订单",value: "退费订单", group: "订单"},
            {label: "订单明细", value: "订单明细", group: ""}]

        get dataForTree():Array<TreeItem>{
            let treeItems = this.list.map((item:Item)=>this.treeData(item));
            let treeData = this.groupTreeData(treeItems);
            console.log(treeItems,"treeItems");
            console.log(treeData,"treeData");
            return treeData;
        }


        itemToTreeItem(item: Item, children: Array<Item>): TreeItem {
            return {label: item.label, value: item.value, group: item.group, children};
        }

        treeData(item: Item): TreeItem {
            if (item.group != undefined && item.group.length > 0) {
                if (item.group === item.value) {
                    return this.itemToTreeItem(item, []);
                } else {
                    let groups = item.group.split(".");
                    let treeItem: TreeItem = {label: item.label, value: item.value, group: item.group, children: []};
                    if (groups.length >= 2) {
                        item.group = groups.splice(0, 1).join(".");
                        treeItem.children.push(this.treeData(item));
                        return treeItem;
                    } else {
                        item.group = item.value;
                        treeItem.children.push(this.itemToTreeItem(item, []));
                        return treeItem;
                    }
                }
            } else {
                return this.itemToTreeItem(item, []);
            }
        }

        groupTreeData(list: Array<TreeItem>): Array<TreeItem> {
            if (list == null || list.length <= 0) {
                return [];
            }
            let dataNoChild: Array<TreeItem> = list.filter(item => !(item.children && item.children.length > 0));
            let dataHaveChild: Array<TreeItem> = list.filter(item => item.children && item.children.length > 0);
            if (dataHaveChild && dataHaveChild.length > 0) {
                let dataHaveChildMap = dataHaveChild.reduce(function (groups: any, item) {
                    let val = item['group'];
                    groups[val] = groups[val] || [];
                    groups[val].push(item);
                    return groups;
                }, {});
                for (let key in dataHaveChildMap) {
                    let items: Array<TreeItem> = dataHaveChildMap[key];
                    let pageMeta: TreeItem = {
                        value: key,
                        label: key,
                        group: key,
                        children: []
                    };
                    let children: any[] = [];
                    items.forEach(item => {
                        if (item.children && item.children.length > 0) {
                            children = children.concat([...item.children])
                        } else {
                            pageMeta.children.push(item);
                        }
                    });
                    if (children.length > 0) {
                        pageMeta.children = pageMeta.children.concat([...this.groupTreeData(children)]);
                    }
                    dataNoChild.push(pageMeta);
                }
            }
            return dataNoChild;
        }
    }

</script>

<style scoped>

</style>
