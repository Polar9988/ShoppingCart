<script>
export default {
    props: {
        itemId: Number, // 接受 itemId 作为 prop
        initialCount: {
            type: Number,
            default: 1
        }
    },
    emits: ['send'],
    data() {
        return {
            count: this.initialCount,
        };
    },
    watch: {
        count: {
            handler(newValue) {
                this.$emit('send', { id: this.itemId, quantity: newValue });
            },
        },
    },
    methods: {
        minus() {
            if (this.count > 0) {
                this.count--;
            }
        },
        emitCount() {
            this.$emit('send', { id: this.itemId, quantity: this.count });
        }
    },
};
</script>

<template>
    <div class="box-container">
        <slot />
        <div class="box">
            <button type="button" class="btn" @click="minus"><i class="bi bi-dash"></i></button>
            <input type="number" class="numberinput" v-model.number="count" @input="emitCount" min="0" />
            <button type="button" class="btn" @click="count++"><i class="bi bi-plus"></i></button>
        </div>
    </div>
</template>

<style scoped>
.box-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.box {
    display: flex;
}

.btn {
    padding: 4px 5px;
    border: 1px solid #000;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 5px;
}

.btn:not(div):hover {
    background-color: lightsalmon;
    color: #fff;
}

.numberinput {
    width: 80px;
    text-align: center;
}
</style>