import Vue from "vue";
import Vuex from "vuex";
import { getComments, addComment, getComment, deleteComment } from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [],
    newCommentForm: {
      title: '',
      body: ''
    },
    comment: {}
  },
  mutations: {
    addComments(state, payload) {
      state.comments = payload
    },
    addComment(state, payload) {
      state.comment = payload
    },
    resetComment(state) {
      state.comment = {}
    },
    updateNewComment(state, payload) {
      Object.assign(state.newCommentForm, payload)
    },
  },
  actions: {
    getComments({commit}) {
      getComments().then(response => commit('addComments', response))
    },
    sendComment() {
      if (this.state.newCommentForm.title !== '' && this.state.newCommentForm.body !== '') {
        return addComment(this.state.newCommentForm)
      }
    },
    getComment({commit}, id) {
      getComment(id).then(response => commit('addComment', response))
    },
    deleteComment() {
      return deleteComment(this.state.comment.id)
    }
  },
  modules: {},
});
