/*
 * @Author: DESKTOP-U0JOM15\loewe0202
 * @Date:   2018-09-12 14:51:08
 * @Last Modified by:   DESKTOP-U0JOM15\loewe0202
 * @Last Modified time: 2018-09-12 15:45:30
 */
import Vue from 'vue'

const loadBanner = function(context) {
    console.log(context)
}

const loadUserInfo = function({ commit }) {
    Vue.axios.get('https://www.easy-mock.com/mock/5ae2fd52fe76b003f79ed19a/vue/userInfo').then(res => {
        commit("setUserInfo", res.data.data);
    })
}


export { loadBanner, loadUserInfo };
