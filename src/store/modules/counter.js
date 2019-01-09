const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const state = {
    counter: 0
}

const getters = {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.counter + ' Clicks'
}

const actions = {
    increment({commit}) {
        commit(INCREMENT_COUNTER)
    },
    decrement({commit}) {
        commit(DECREMENT_COUNTER)
    },
    asyncIncrement({commit}) {
        setTimeout(() => {
            commit(INCREMENT_COUNTER)
        }, 1000)
    },
    asyncDecrement({commit}) {
        setTimeout(() => {
            commit(DECREMENT_COUNTER)
        }, 1000)
    }
}

const mutations = {
    [INCREMENT_COUNTER](state) {
        state.counter++
    },
    [DECREMENT_COUNTER](state) {
        state.counter--
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}