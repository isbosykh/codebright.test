<template>
    <footer>
        <div class="contacts">
            <a href="mailto:mail@mailtest.com">mail@mailtest.com</a>
            <a href="tel:+30-6977664062">+30-6977664062</a>
        </div>
        <div class="copyright">
            <span>Copyright © 2019 Test All Rights Reserved. </span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    footer {
        display: flex;
        padding: 30px 50px;
        position: relative;
        background-color: #1D1E25;
        justify-content: space-between;

        &:before {
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            content: '';
            margin: auto;
            position: absolute;
            width: calc(100% - 100px);
            background-color: #4A4C5E;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            &.contacts {

                a {
                    color: white;
                    text-decoration: none;

                    &:first-child {
                        margin-bottom: 5px;
                    }

                    &:last-child {
                        margin-top: 5px;
                    }
                }
            }

            &.copyright {

                span {
                    color: #4a4d5e;
                }
            }
        }
    }
</style>