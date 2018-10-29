<template>
    <div>
        <text-document :title.sync="doc.title" :todos="todos">
            <template slot-scope="{ todo }">
                <span v-if="todo.isComplete">✓</span>
                {{ todo.text }}
            </template>
        </text-document>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import textDocument from './text-document';

export default {
    data() {
        return {
            doc: {
                title: '任务：'
            },
            todos: [{
                id:0,
                text:"todos01",
                isComplete: false
            },{
                id:1,
                text:"todos02",
                isComplete: false
            },{
                id:2,
                text:"todos03",
                isComplete: false
            },{
                id:3,
                text:"todos04",
                isComplete: false
            }]
        };
    },
    components: {
        textDocument
    }
};
</script>

