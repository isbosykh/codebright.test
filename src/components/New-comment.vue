<template>
    <div class="new-comment-wrapper">
        <div class="new-comment-form">
            <h1>Write<br>comment</h1>
            <form v-if="!sent" v-on:submit.prevent>
                <label>
                    <input v-model="comment.title" type="text" name="title" placeholder="Title"/>
                </label>
                <label>
                    <textarea v-model="comment.body" name="comment" placeholder="Your comment"></textarea>
                </label>
                <div>
                    <Button @click="sendComment()" title="Send"/>
                    <span>{{ error }}</span>
                </div>
            </form>
            <div v-else class="sent">
                <h1>Sent!</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "@/components/Button";

    export default {
        name: "New-comment",
        components: {Button},
        data() {
            return {
                sent: false,
                error: ''
            }
        },
        computed: {
            comment() {
                return {
                    title: '',
                    body: '',
                }
            }
        },
        methods: {
            isValid() {
                return this.comment.title !== '' && this.comment.body !== '';
            },
            sendComment() {
                if (this.isValid())  {
                    this.$store.commit('updateNewComment', this.comment);
                    this.$store.dispatch('sendComment');
                    this.sent = true;
                    this.error = '';
                } else this.error = 'Нужно заполнить все поля.'
            }
        },
    }
</script>

<style lang="scss" scoped>
   .new-comment-wrapper {
       width: 100%;
       padding: 140px 0;
       background-color: #1D1E25;

       .new-comment-form {
           display: flex;
           padding: 0 50px;
           margin: auto;
           height: 100%;
           max-width: 1100px;

           @media screen and (max-width: 1000px) {
               flex-direction: column;

               form {
                   margin-top: 60px;
               }
           }

           h1 {
               float: left;
               color: white;
               text-align: left;
               position: relative;
               font-size: 3.375em;
               margin: 0 180px 0 0;

               @media screen and (max-width: 1200px) {
                   margin: 0 10% 0 0;
               }

               &:before {
                   left: 0;
                   top: 0;
                   width: 70px;
                   content: '';
                   height: 5px;
                   display: block;
                   transition: .3s;
                   margin-top: 160px;
                   position: absolute;
                   background-color: #F9D10D;

                   @media screen and (max-width: 1000px) {
                       margin-bottom: -20px;
                   }
               }
           }

           form {
               display: flex;
               flex-direction: column;
               flex-wrap: wrap;
               flex-grow: 1;

               label {
                   max-width: 592px;

                   input,
                   textarea {
                       width: 100%;
                       padding: 20px;
                       color: #60e3a1;
                       border-radius: 4px;
                       background: transparent;
                       border: 1px solid #5FE3A1;

                       &::placeholder {
                           color: #60e3a1;
                       }
                   }

                   textarea {
                       height: 150px;
                       margin: 16px 0;
                       resize: vertical;
                   }
               }

               > div {
                   display: flex;
                   justify-content: flex-start;
                   align-items: center;

                   span {
                       margin-left: 60px;
                       color: red;
                   }
               }
           }

           .sent {
               margin-top: 50px;

               h1 {
                   &:before {
                       display: none;
                   }
               }
           }
       }
   }
</style>