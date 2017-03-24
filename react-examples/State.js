// @flow

export type Dictionary<T> = {
  [x: string]: T
}

export type User = {
  id     : string,
  name   : string,
  company: string
}

export type Users = {
  byId: Dictionary<User>
}

// play with the structure of initalState to see errors
const initialState: Users = {
  byId: {
    "John Doe": {
      id     : "john_doe",
      name   : "John Doe",
      company: "Ajax Inc."
    },
    "James White": {
      id     : "james_white",
      name   : "James White",
      company: "Alpe ltd.",
    }
  }
}
