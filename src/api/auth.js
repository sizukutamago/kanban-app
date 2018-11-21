import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/auth/login', authInfo)
        .then(response => resolve({ token: response.data.token, userId: response.data.userId }))
        .catch(error => {
          reject(new Error(error.response.data.message || error.message))
        })
    })
  }
}
