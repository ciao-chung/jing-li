export default function(token, apiConfig) {
  return (function($) {    
    $.request = function(config) {
      var requestConfig = {
        url: '',
        type: 'GET',
        dataType: 'json',
        beforeSend: '',
        jsonDataRequest: true,
        xhrFields: {},
        processData: true,
        api: null,
        data: null,
        success: function(result) {
          return new Promise(function(resolve, reject) {
            resolve(result)
          })
        },
        error: function(error) {
          return new Promise(function(resolve, reject) {
            error.message = `api.${requestConfig.api}.${error.status}`
            reject(error)
          })
        }
      }

      if(config.type != undefined) requestConfig.type = config.type
      if(config.data != undefined) requestConfig.data = config.data
      if(config.dataType != undefined) requestConfig.dataType = config.dataType
      if(config.api != undefined) requestConfig.api = config.api

      if(config.token == true) {
        var _requestToken = token.getToken()
        requestConfig.beforeSend = function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer '+_requestToken)
        }
      }
      
      requestConfig.url = `${apiConfig.url}/${config.url}`
      return $.ajax(requestConfig)
    }

    $.file = function(config) {
      var requestConfig = {
        url: '',
        type: 'POST',
        dataType: 'json',
        beforeSend: '',
        contentType: false,
        jsonDataRequest: false,
        processData: false,
        api: null,
        data: config.data,
        success: function(result) {
          return new Promise(function(resolve, reject) {
            resolve(result)
          })
        },
        error: function(error) {
          return new Promise(function(resolve, reject) {
            error.message = `api.${error.status}`
            console.info(error, defaultConfig.api);
            reject(error)
          })
        }
      }

      requestConfig.xhr = function() {
        var xhr = $.ajaxSettings.xhr();
        xhr.addEventListener('progress', function(progress){
          var percentage = Math.floor(100*(progress.loaded/progress.total))
          if(config.onProgress != null) return config.onProgress(percentage)
        }, false);
        return xhr;
      }

      var _requestToken = token.getToken()
      requestConfig.beforeSend = function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer '+_requestToken)
      }
      
      requestConfig.url = `${apiConfig.url}/${config.url}`
      return $.ajax(requestConfig)
    }

    $.filestream = function(config) {
      var filestreamConfig = {
        url: '',
        type: 'GET',
        processData: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'binary',
        xhrFields: {
          responseType: 'blob',
        },
        api: null,
        data: null,
        success: function(result, status, xhr) {
          return new Promise(function(resolve, reject) {
            resolve(result, status, xhr)
          })
        },
        error: function(error) {
          return new Promise(function(resolve, reject) {
            error.message = `api.${filestreamConfig.api}.${error.status}`
            reject(error)
          })
        }
      }

      if(config.type != undefined) filestreamConfig.type = config.type
      if(config.data != undefined) filestreamConfig.data = config.data
      if(config.dataType != undefined) filestreamConfig.dataType = config.dataType
      if(config.api != undefined) filestreamConfig.api = config.api

      if(config.token == true) {
        var _requestToken = token.getToken()
        filestreamConfig.beforeSend = function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer '+_requestToken)
        }
      }

      filestreamConfig.url = `${apiConfig.url}/${config.url}`
      return $.ajax(filestreamConfig)
    }
  })(jQuery)
}