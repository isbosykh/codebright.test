<template>
    <button @click="$emit('click', $event)">
        <span>{{ title }}</span>
        <img src="https://flaticons.net/gd/makefg.php?i=icons/Mobile%20Application/Close.png&r=255&g=255&b=255" alt="">
    </button>
</template>

<script>
    export default {
        name: "Delete-btn",
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    button {
        border: none;
        box-sizing: border-box;
        width: 200px;
        height: 50px;
        background: #ff605c;
        padding: 1em;
        color: white;
        transition: all .5s ease-in-out;
        border-radius: 10px;
        clip-path: circle(10% at 90% 50%);
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
            clip-path: circle(75%);
            background: #f4225a;

            img {
                transform: rotateZ(-900deg);
            }
        }

        span {
            font-family: 'Inter', sans-serif;
            color: white;
            margin: 0;
            font-size: 1.1em;
            font-weight: 600;
        }

        img {
            float: right;
            height: 15px;
            width: 15px;
            transition: 1s;
            margin-right: -1%;
            position: relative;
        }
    }
</style>