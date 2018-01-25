/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: '',
        userinfo: '',
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.USERINFO]: (state, data) => {
            localStorage.userinfo = data;
            state.userinfo = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('userinfo');
            state.userinfo = null;
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
})