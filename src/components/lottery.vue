<template>
    <div>
        <div class="content">
            <div class="parent"></div>
            <div class="child" @click="moveFn" :style="{transform: 'rotateZ(' + moveDeg + 'deg)'}">点击</div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            number: 0,
            moveDeg: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.moveDeg = 3600 * (++this.number);
        }, 2000);
    },
    methods: {
        moveFn() {
            this.moveDeg += 3600 * (++this.number);
        }
    }
};

</script>
<style scoped lang="less">
@rem: 1/75rem;
.content {
    margin: 20% auto;
    position: relative;
    width: 500*@rem;
    height: 500*@rem;
}

.parent {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: -webkit-linear-gradient(red, blue);
    animation: myfirst 5s ease-in-out 2s infinite;
}

.child {
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    border-radius: 100%;
    background: -webkit-linear-gradient(green, purple);
    transform: rotateZ(0deg);
    transition: transform 5s linear 2s;
}

.move {
    transform: rotateZ(-3600deg);
}

@keyframes myfirst {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(3600deg);
    }
}

</style>
