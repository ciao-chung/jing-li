import apiConfig from 'src/../static/config/api.json'
import request from 'src/libs/request'
import token from 'src/libs/token.js'
request(token(), apiConfig)

import apiCollection from 'resource/api.js'

var api = {
  photo: (type, photo, onProgress = null) => {
    return $.file({
      url: `photo/${type}`,
      data: photo,
      onProgress: onProgress,
    })
  },
  make: (string) => {
    var apiName = api
    for(var node of string.split('.')) {
    apiName = apiName[node]
  }
    if(apiName == undefined) {
      apiName = () => {
        new Promise(function(resolve, reject) {
          reject()
        })
      }
    }
  return apiName
  },
}

for(var key in apiCollection) {
  api[key] = apiCollection[key]
}
export default api