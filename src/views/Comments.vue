<template>
    <router-view v-if="this.$route.name === 'comment'"></router-view>
    <div v-else class="comments-view">
        <h1>Comments</h1>
        <masonry :cols="{ default: 2, 768: 1 }"
                 :gutter="40"
                 class="team-content">
            <Comment v-if="commentsList"
                     v-for="(item, index) of commentsList"
                     :key="index"
                     :title="item.title"
                     :body="item.body"
                     :id="item.id"
            />
        </masonry>
        <h2>Lorem Ipsum is text of the typesetting industry</h2>
        <router-link :to="{ name: 'home' }">
            <ButtonBack title="Back to homepage"/>
        </router-link>
    </div>
</template>

<script>
    import Comment from "@/components/Comment";
    import ButtonBack from "@/components/Button-back";
    export default {
        name: "Comments",
        components: {ButtonBack, Comment},
        computed: {
            commentsList() {
                return this.$store.state.comments
            }
        },
        mounted() {
            this.$store.dispatch('getComments');
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    .comments-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;

        > h1 {
            font-weight: 600;
            text-align: left;
            font-size: $h1-big;
            margin: 74px auto;
            width: 960px;

            @media screen and (max-width: 1000px) {
                font-size: 48px;
                padding: 0 50px;
            }
        }

        > h2 {
            opacity: .5;
            margin: 60px 0 40px 0;
            text-align: center;
        }

        > a {
            display: flex;
            margin-bottom: 100px;
            text-decoration: none;
            justify-content: center;
        }

        .team-content {
            max-width: 1000px;
        }
    }


</style>