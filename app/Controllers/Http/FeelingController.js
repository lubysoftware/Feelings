'use strict'

const Feeling = use('App/Models/Feeling')

class FeelingController {
  async index ({ auth }) {
    const user = await auth.getUser()
    const feelings = await user.feelings().fetch()
    return feelings
  }

  async store ({ request, auth }) {
    const user = await auth.getUser()
    const data = request.only(['message'])
    data.user_id = user.id
    const feeling = await Feeling.create(data)
    return feeling
  }

  async update ({ params, request }) {
    const id = params.id
    const data = request.only(['feel'])
    const feeling = await Feeling.findOrFail(id)
    feeling.merge(data)
    await feeling.save()
    return feeling
  }
}

module.exports = FeelingController
