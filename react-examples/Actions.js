// @flow

const actionTypes = {
  add   : 'add',
  remove: 'remove'
};

export type ActionTypes = $Keys<typeof actionTypes>;

export type Action<T, P> = {
  type       : T,
  [x: string]: P
}

const addUser = (user: User): Action<ActionTypes, User> => ({
  // any type, except string 'add'/remove' or
  // references to other properties which are not defined within actionTypes
  // will cause an error
  type: actionTypes.add,
  // same here - user should be of the correct shape and type,
  // otherwise an error is thrown
  user
});

const actionProduct = addUser({
  company: 'Test Company',
  id: 'test',
  name: 'Test User'
});

console.log(actionProduct.type);