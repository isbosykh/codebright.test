<template>
    <div class="view-homepage">
        <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </h1>
        <div class="img"></div>

        <div class="about-us" >
            <div class="about-us-item">
                <img src="../assets/who-we-are.png" alt="">
                <h2>Who we are</h2>
                <ul>
                    <li>It is a long established fact that a reader will be distracted</li>
                    <li>The readable content of a page when looking at its layout</li>
                    <li>The point of using Lorem Ipsum</li>
                    <li>As opposed to using 'Content here, content here'.</li>
                </ul>
            </div>

            <div class="about-us-item">
                <img src="../assets/what-we-do.png" alt="">
                <h2>What we do</h2>
                <ul>
                    <li>Many desktop publishing packages and web page</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have </li>
                    <li>Various versions have evolved over the years, sometimes by accident</li>
                </ul>
            </div>

            <div class="about-us-item">
                <img src="../assets/technology.png" alt="">
                <h2>Technology</h2>
                <ul>
                    <li>The point of using Lorem Ipsum</li>
                    <li>As opposed to using 'Content here, content here'</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                    <li>A Latin professor at Hampden-Sydney College in Virginia</li>
                </ul>
            </div>
        </div>

        <NewComment ref="writeAnchor"/>
    </div>
</template>

<script>
    import NewComment from "@/components/New-comment";
    export default {
        name: "Homepage",
        components: { NewComment },
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    .view-homepage {
        width: 100%;
        flex-grow: 1;

        > h1 {
            font-weight: 600;
            text-align: left;
            font-size: $h1-big;
            margin: 74px auto;
            max-width: 1000px;

            @media screen and (max-width: 1000px) {
                font-size: 48px;
                padding: 0 50px;
            }
        }

        .img {
            height: 470px;
            background-image: url("../assets/homepage-img.jpg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .about-us {
            margin: 0 auto;
            padding: 80px 0;
            max-width: 1000px;
            text-align: left;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media screen and (max-width: 1000px) {
                padding: 0 50px;
                margin: 20px auto;
                justify-content: space-around;
            }

            .about-us-item {
                width: 256px;
                margin: 36px 0;

                img {
                    height: 36px;
                }

                h2 {
                    margin: .5em 0;
                    font-size: 2.25em;
                }

                ul {
                    margin: 0;
                    padding: 0 0 0 20px;

                    li {
                        font-weight: 600;

                        &:not(:first-child) {
                            margin-top: 1em;
                        }
                    }
                }
            }
        }
    }
</style>