'use strict'

class AuthController {
  async store ({ request, auth }) {
    const { email, password } = request.all()
    const res = await auth.attempt(email, password)
    return res
  }
}

module.exports = AuthController
