import api from 'src/libs/api.js'
import apiConfig from 'src/../static/config/api.json'
const apiUrl = apiConfig.url
class Token {
  constructor() {
    this.info = {}
    if(this.isValidToken() == true) {
      this.info = this.getInfo(this.getToken())
      this.autoMoniterToken()
    }

    else {
      this.clearToken()
    }
  }

  // 驗證token是否過期
  isValidToken(token) {
    if(this.getToken() === null) {
      return false
    }
    
    var now = Math.floor(new Date().getTime()/1000)
    if(this.getInfo() == false) {
      // token 格式有問題
      return false
    } else {
      if(this.getInfo().exp && this.getInfo().exp > now) {
        return true
      } else {
        return false
      }
    }
  }

  // 取得token payload資訊
  getInfo(token) {
    var self = this

    if(this.getToken() == null) {
      // 如果是登出狀態
      return false
    } else {
      // 如果是登入狀態
      try {
        var tokenInfo = JSON.parse(atob(this.getToken().split('.')[1]))
      } catch (err) {
        // token 格式有問題
        self.clearToken()
        return false
      }
    }
    
    // token 格式正確, 回傳token資訊
    return tokenInfo
  }

  // 是否有權限
  hasRole(requiredRoles) {
    const _info = this.getInfo()
    if(!(requiredRoles instanceof Array)) return false
    if(!(_info instanceof Object)) return false
    if(!(_info.data instanceof Object)) return false
    if(!(_info.data.role instanceof Array)) return false
    if(_info.data.role.length == 0) return false

    const _roles = _info.data.role
    if(_roles.indexOf('ROLE_ADMIN') >= 0) return true
    for(const _role of _roles) {
      if(requiredRoles.indexOf(_role) >= 0) return true
    }
    return false
  }

  // 設定token
  setToken(jwtToken) {
    localStorage.setItem('token', jwtToken)
    this.autoMoniterToken()
    this.info = this.getInfo(jwtToken)
  }

  // 監控token, 依照時間做自動更新倒數
  autoMoniterToken() {
    var now = Math.floor(new Date().getTime()/1000)
    var surplusTime = this.getInfo().exp-now
    var self = this
    
    /**
     * 如果距離token到期時間大於5分鐘
     * 在剩5分鐘時更新token
     *
     * 如果距離token到期時間小於5分鐘並且大於0
     * 立即更新token
     *
     * 其他條件直接清除token
     */
    if(surplusTime > (60 * 5)) {
      setTimeout(function() {
        if(self.isValidToken() == true) {
          self.updateToken()
        }
      }, (surplusTime - (60 * 5)) * 1000)
    } else if(surplusTime <= (60 * 5) && surplusTime > 0) {
      if(self.isValidToken() == true) {
        self.updateToken()
      }
    } else {
      self.clearToken()
    }
  }

  // 更新token
  updateToken() {
    var self = this
    var token = this.getToken()
    if(api == undefined) return
    const renewTokenApi = api.renewToken()
    renewTokenApi.then((result) => {
      self.setToken(result.token)
    })
    renewTokenApi.catch(() => {
      console.error('Update Token Fail')
    })
  }

  // 取得token
  getToken(token) {
    var token = window.localStorage.getItem('token')
    return token
  }

  // 清除token
  clearToken() {
    localStorage.removeItem('token')
    this.info = {}
  }
}

export default function() {
    return new Token()
}