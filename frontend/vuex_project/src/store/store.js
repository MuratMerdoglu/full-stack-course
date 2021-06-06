import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sayac: 0,
    },
    getters: {
        getSayac(state) {
            return state.sayac * 2;
        },
        getSayacString(state) {
            return `Sayac Durumu: ${state.sayac}`;
        }
    },
    mutations: {
        mutArrtir(state) {
            state.sayac++
        },
        mutAzalt(state) {
            state.sayac--
        },
        mutParametreliIslem(state, payload) {
            state.sayac += payload;
        }
    },
    actions: {
        serviseIstegi({ commit }) {
            setTimeout(() => {
                commit("mutParametreliIslem", 100);
            }, 5000);
        }
    }
});
