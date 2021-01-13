import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        filter: '',
        list: [
             {
                type: 'Jora2',
                name: Math.random(1, 100),
                hits: "8888"
            },
            {
                type: 'Jora',
                name: Math.random(1, 100),
                hits: "8812388"
            },
        ]
    },
    mutations: {
        SET_MAIN_PACKAGES(state, newArray ){
            console.log(newArray)
          this.state.list = newArray  
        },
        updateFilter(state, newValue) {
            this.state.filter = newValue
        },
    },
    actions: {
        LOAD_MAIN_PACKAGES: ({commit}) => {
            axios.get('https://data.jsdelivr.com/v1/stats/packages/day')
                .then(function (response) {
                    console.log(response.data)
                    commit('SET_MAIN_PACKAGES', response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
    getters: {
        list: s=>s.list,
        filter: s=>s.filter,
        listItemById: s => id => s.list.find(item => item.id == id)
    }

})