<template>
    <div class="team-member">
        <header>
            <h3>{{ title }}</h3>
        </header>
        <p>{{ body }}</p>
        <router-link :to="{
            name: 'comment',
            params: {
                id: id
            }
        }">
            <ButtonMini title="Read more"/>
        </router-link>
    </div>
</template>

<script>
    import ButtonMini from "@/components/Button-mini";
    export default {
        name: "Comment",
        components: {ButtonMini},
        props: {
            title: String,
            body: String,
            id: String
        }
    }
</script>

<style lang="scss" scoped>
    .team-member {
        width: 100%;
        max-width: 480px;
        padding: 45px 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 40px;
        box-shadow: 5px 5px 10px 4px rgba(0,0,0,0.05);

        header {
            text-align: left;

            h3 {
                line-height: 20px;
                font-weight: 900;
                font-size: 1.25em;
                margin: 0;
            }
        }

        p {
            margin: 30px 0;
            font-size: 0.875em;
            line-height: 1em;
            text-align: left;
            color: #888888;
        }

        button {

        }
    }
</style>