'use strict'

class Auth {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = Auth
