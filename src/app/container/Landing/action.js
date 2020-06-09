import * as actions from './constant';

let lisdtId = 0
export const addTodo = text => ({
  type: actions.ADD_LIST,
  id: lisdtId++,
  text
})
