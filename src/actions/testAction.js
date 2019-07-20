import * as types from '../actionTypes/testTypes'

export function testAction(data) {
    return {
        type: types.TEST,
        data
    }
}