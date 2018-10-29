<template>
    <div>
        <ul>
            <li v-for="(todo, index) in todos" :key="index" @click="changeName($event, index)">
                {{ title }}
                <slot v-bind:todo="todo">{{ todo.text }}</slot>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    props:{
        title: {
            type: String,
        },
        todos: Array
    },
    methods: {
        changeName(event, index) {
            this.$emit('update:title', new Date().toLocaleString());
            this.todos[index].isComplete = true;
        }
    }
};
</script>
<style scoped>
</style>
