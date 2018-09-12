/*
 * @Author: DESKTOP-U0JOM15\loewe0202
 * @Date:   2018-09-12 14:03:20
 * @Last Modified by:   DESKTOP-U0JOM15\loewe0202
 * @Last Modified time: 2018-09-12 14:54:47
 */
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import state from './state';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
