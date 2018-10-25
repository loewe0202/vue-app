/*
 * @Author: DESKTOP-U0JOM15\loewe0202
 * @Date:   2018-09-12 14:50:59
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-27 16:50:16
 */
const mutations = {
    setUserInfo(state, userInfo) {
        // eslint-disable-line
        state.userInfo = userInfo;
    },
    addAction(state, num) {
        state.count += num;
    },
    deIncrement(state, payload) {
        state.count -= payload.del;
    }
};

export default mutations;
