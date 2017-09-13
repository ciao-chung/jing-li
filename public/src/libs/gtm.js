import apiConfig from 'src/../static/config/api.json'
import api from 'src/libs/api.js'
import request from 'src/libs/request'
request(this, apiConfig)

class Gtm {
  constructor() {
    api.configProperty('site_config', 'google_tag_manager')
    .then((result) => {
      $('head').append(result.google_tag_manager)
    })
  }
}
export default new Gtm()