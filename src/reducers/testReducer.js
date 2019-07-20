import * as types from '../actionTypes/testTypes'

// 初始化数据
const initialState = {
    data: 0,
}

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case types.TEST:
            return {
                data: state.data + 1
            }
        default:
            return state
    }
}