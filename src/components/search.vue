<template>
    <div>
        <text-document v-bind:title.sync="doc.title"></text-document>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import textDocument from './text-document';

export default {
    data() {
        return {
            doc: {
                title: 'loewe'
            }
        };
    },
    components: {
        textDocument
    }
};
</script>

