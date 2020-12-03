'use strict'

class User {
  get validateAll() {
    return true
  }

  get rules () {
    return {
      username: 'required',
      email: 'required|unique:users|email',
      password: 'required'
    }
  }
}

module.exports = User
