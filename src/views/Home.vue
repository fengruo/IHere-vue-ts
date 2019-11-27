<template>
    <div id="nav">
        <!--        <router-link to="/yesterday">-->
        <!--            <img src="../assets/image/day.jpeg">-->
        <!--        </router-link>-->
<!--            <router-link to="/today">2</router-link>-->
            <router-link to="/tomorrow">3</router-link>
<!--            <router-link to="/test/checkBox">3</router-link>-->
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Home extends Vue {

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
