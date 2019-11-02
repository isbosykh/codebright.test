<template>
    <button @click="$emit('click', $event)">
        {{ title }}
    </button>
</template>

<script>
    export default {
        name: "Button-back",
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    button {
        display: flex;
        font-size: 1em;
        cursor: pointer;
        font-weight: 600;
        padding: 20px 25px;
        border-radius: 4px;
        width: max-content;
        position: relative;
        white-space: nowrap;
        border: 1px solid #60e3a1;
        background-color: transparent;

        &:before {
            content: '';
            top: 0;
            left: 0;
            bottom: 0;
            width: 10px;
            height: 12px;
            display: block;
            color: #60e3a1;
            position: relative;
            margin: auto 10px auto 0;
            background-image: url("../assets/arrow-back.jpg");
        }
    }
</style>