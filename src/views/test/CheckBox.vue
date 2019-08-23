<template>
    <div id="nav">
        <!--        <router-link to="/yesterday">-->
        <!--            <img src="../assets/image/day.jpeg">-->
        <!--        </router-link>-->
        <!--    <router-link to="/today">2</router-link>-->
        <!--    <router-link to="/tomorrow">3</router-link>-->
        <span v-html="111"></span>
            <el-tree
                    :data="TreeData"
                    default-expand-all
                    node-key="id"
                    ref="tree"
                    highlight-current>
                <span slot-scope="{ node, data }">
                      <i  v-if="node!=undefined && data.empid===undefined" ></i>
                    <span :data="data"> {{data.label}} </span>
                     <el-checkbox  @change="boxChange" :checked="getCheck(data)" :key="getLabel(data)"  :true-label="getLabel(data)" :disabled="getIsDisable(data)">{{''}}</el-checkbox>
                </span>
            </el-tree>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class CheckBox extends Vue {

        /**
         * 原始选中数据
         * */
        checkListDisabled: any = [1, 2]

        /**
         * 原始选中数据
         * */
        checkList: any =  [1, 2]

         toData:any=[];

        /**
         * 所有数据
         */
        TreeData: Array<any> = [
            {
                label: "研发中心",
                iconClose: "tm-icon-wenjianjia-shouqi",
                iconOpen: "tm-icon-wenjianjia1",
                contactType: "bigGroup",
                children: [
                    {
                        label: "设计组",
                        iconClose: "tm-icon-wenjianjia-shouqi",
                        iconOpen: "tm-icon-wenjianjia1",
                        contactType: "smallGroup",
                        children: [
                            {
                                label: "张加号",
                                empid: "1",
                                contactType: "contactor",
                                email: "1@qqxb.com",
                                phonenumber: 18652991311,
                                role: "11111",
                                gender: "man",
                                group: "亲亲小保 / 研发中心 / 产品设计组"
                            },
                            {
                                label: "梦雪",
                                empid: "2",
                                contactType: "contactor",
                                email: "2@qqxb.com",
                                role: "2222",
                                gender: "woman",
                                phonenumber: 18652991312,
                                group: "亲亲小保 / 研发中心 / 产品设计组"
                            },
                            {
                                label: "徐梦实",
                                empid: "3",
                                contactType: "contactor",
                                email: "3@qqxb.com",
                                role: "3333",
                                gender: "woman",
                                phonenumber: 18652991313,
                                group: "亲亲小保 / 研发中心 / 产品设计组"
                            }
                        ]
                    },
                    {
                        label: "设计组",
                        iconClose: "tm-icon-wenjianjia-shouqi",
                        iconOpen: "tm-icon-wenjianjia1",
                        contactType: "bigGroup"
                    }
                ]
            },
            {
                label: "市场营销中心",
                iconClose: "tm-icon-wenjianjia-shouqi",
                iconOpen: "tm-icon-wenjianjia1",
                contactType: "bigGroup"
            },
            {
                label: "服务中心",
                iconClose: "tm-icon-wenjianjia-shouqi",
                iconOpen: "tm-icon-wenjianjia1",
                contactType: "bigGroup"
            },
            {
                label: "杜星霖",
                empid: "4",
                role: "44444",
                contactType: "contactor",
                email: "4@qqxb.com",
                phonenumber: 18652991314,
                gender: "man",
                group: "亲亲小保"
            },
            {
                label: "刘威",
                empid: "5",
                contactType: "contactor",
                email: "5@qqxb.com",
                phonenumber: 18652991315,
                role: "55555",
                gender: "man",
                avatar: "",
                group: "亲亲小保"
            },
            {
                label: "梦雪",
                empid: "2",
                contactType: "contactor",
                email: "2@qqxb.com",
                role: "2222",
                gender: "woman",
                phonenumber: 18652991312,
                group: "亲亲小保 / 研发中心 / 产品设计组"
            },
            {
                label: "梦雪",
                empid: "2",
                contactType: "contactor",
                email: "2@qqxb.com",
                role: "2222",
                gender: "woman",
                phonenumber: 18652991312,
                group: "亲亲小保 / 研发中心 / 产品设计组"
            },
        ];
        /**
         * 判断当前checkBox是否需要禁用
         * */
        getIsDisable(item: any) {
            let label = this.getLabel(item);
            let filter = this.checkListDisabled.filter(function (element: any) {
                return element == label;
            });
            return !!filter && filter.length > 0;
        }

        /**
         * 当前选中数据不包括禁用数据
         * @param data
         */
        boxChange(data: any) {

        }

        getLabel(data:any){
            if(data.contactType==="contactor"){
                return data.empid;
            }else{
                return data.label;
            }
        }

        getCheck(data:any){
            let label = this.getLabel(data);
            let filter = this.checkList.filter(function (element: any) {
                return element == label;
            });
            return !!filter && filter.length > 0;
        }


    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        a {
            text-decoration: none;
        }

        .router-link-active {
            text-decoration: none;
        }

        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }

    }
</style>
