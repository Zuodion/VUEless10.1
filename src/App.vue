<template>
    <div id="app">
        <h1>Vuex</h1>
        <counter-result/>
        <hr>
        <counter-item/>
        <hr>
        <another-result/>
        <hr>
        <another-counter/>
        <hr>
    </div>
</template>

<script>
import CounterItem from "./components/CounterItem.vue";
import CounterResult from "./components/CounterResult.vue";
import AnotherResult from "./components/AnotherResult.vue";
import AnotherCounter from "./components/AnotherCounter.vue";

export default {
    name: "app",
    components: {
        CounterItem,
        CounterResult,
        AnotherResult,
        AnotherCounter
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
