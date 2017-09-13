<template>
  <div data-role="ckeditor">
    <div class="progress">
      <div class="progress-bar progress-bar-success"
        role="progressbar" aria-valuemin="0" aria-valuemax="100"
        :style="'width: '+progressed+'%'">
      </div>
    </div>
    <div :id="uid"></div>
    <input :ckeditor-file-browser="uid" type="file" accept="image/*" v-if="upload == true" />
  </div>
</template>

<script>
import $s from 'scriptjs'
import highlightjs from 'highlightjs'
import uuid from 'uuid/v4'
export default {
  props: ['value', 'upload', 'copybtn'],
  data: function() {
    return {
      progressed: 0,
    }
  },
  mounted: function() {
    this.initEditor()
  },
  methods: {
    initEditor: function() {
      var self = this
      $s(this.ckeditorSource, function(){
        CKEDITOR.replace(self.uid, {
          codeSnippet_theme: 'monokai_sublime'
        })
        
        CKEDITOR.addCss('body { padding: 20px; font-family: "微軟正黑體"}');
        CKEDITOR.instances[self.uid].addContentsCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')


        CKEDITOR.instances[self.uid].setData(self.value)
        CKEDITOR.instances[self.uid].on('change', function() {
          self.$emit('input', CKEDITOR.instances[self.uid].getData())
        })

        CKEDITOR.instances[self.uid].on('key', function() {
          self.$emit('input', CKEDITOR.instances[self.uid].getData())
        })

        CKEDITOR.instances[self.uid].on('mode', function() {
          self.$emit('input', CKEDITOR.instances[self.uid].getData())
        })

        // Google 短網址
        CKEDITOR.instances[self.uid].ui.addButton( 'googleshorturl', {
          label: 'Google 短網址',
          command: 'googleshorturl',
          toolbar: 'ciao',
          icon: CKEDITOR.plugins.getPath('ciao') + 'icon/google.png'
        });

        CKEDITOR.instances[self.uid].addCommand(
          'googleshorturl', 
          { exec: () => {
            window.open('http://goo.gl')
          } 
        });

        // mark
        if(self.copybtn == true) {
          CKEDITOR.instances[self.uid].ui.addButton( 'mark', {
            label: '標記重點',
            command: 'mark',
            toolbar: 'ciao',
            icon: CKEDITOR.plugins.getPath('ciao') + 'icon/star.png'
          });

          CKEDITOR.instances[self.uid].addCommand(
            'mark', 
            { exec: () => {
              var content = prompt('輸入標記重點')
              if(content == null) return
              CKEDITOR.instances[self.uid].insertHtml('<span data-role="mark">'+content+'</span>')
            } 
          });
        }

        // code tag
        if(self.copybtn == true) {
          CKEDITOR.instances[self.uid].ui.addButton( 'codetag', {
            label: 'Code Tag',
            command: 'codetag',
            toolbar: 'ciao',
            icon: CKEDITOR.plugins.getPath('ciao') + 'icon/code.png'
          });

          CKEDITOR.instances[self.uid].addCommand(
            'codetag', 
            { exec: () => {
              var content = prompt('輸入code tag')
              if(content == null) return
              CKEDITOR.instances[self.uid].insertHtml('<code>'+content+'</code>')
            } 
          });
        }

        // copy button
        if(self.copybtn == true) {
          CKEDITOR.instances[self.uid].ui.addButton( 'copybutton', {
            label: '複製內容按鈕',
            command: 'copybutton',
            toolbar: 'ciao',
            icon: CKEDITOR.plugins.getPath('ciao') + 'icon/clipboard.png'
          });

          CKEDITOR.instances[self.uid].addCommand(
            'copybutton', 
            { exec: () => {
              var target = prompt('輸入div id')
              if(target == null) return
              var button = 
                '<button class="btn btn-warning btn-sm copy-btn" '+
                'data-clipboard-target="#'+target+'" type="button">'+
                '<span>複製程式碼</span></button>'
              CKEDITOR.instances[self.uid].insertHtml(button)
            } 
          });
        }

        // iframe
        CKEDITOR.instances[self.uid].ui.addButton( 'responsiveIframe', {
          label: 'iFrame',
          command: 'responsiveIframe',
          toolbar: 'ciao',
          icon: CKEDITOR.plugins.getPath('ciao') + 'icon/share.png'
        });

        CKEDITOR.instances[self.uid].addCommand(
          'responsiveIframe', 
          { exec: () => {
            var iframe = prompt('輸入iframe tag')
            if(iframe == null) return
            iframe = iframe.replace('<iframe', '<iframe class="embed-responsive-item"')
            var iframeTag = `<div class="embed-responsive embed-responsive-16by9">${iframe}</iframe></div>`
            CKEDITOR.instances[self.uid].insertHtml(iframeTag)
          } 
        });

        // responsive image
        CKEDITOR.instances[self.uid].ui.addButton( 'responsiveImage', {
          label: 'Responsive Image',
          command: 'responsiveImage',
          toolbar: 'ciao',
          icon: CKEDITOR.plugins.getPath('ciao') + 'icon/photo.png'
        });

        CKEDITOR.instances[self.uid].addCommand(
          'responsiveImage', 
          { exec: () => {
            var url = prompt('輸入圖片網址')
            if(url == null) return
            var imageTag = `<img src=${url} class="img-responsive"/>`
            CKEDITOR.instances[self.uid].insertHtml(imageTag)
          } 
        });

        // 圖片上傳
        if(self.upload == true) {
          CKEDITOR.instances[self.uid].ui.addButton( 'uploadfile', {
            label: '圖片上傳',
            command: 'uploadfile',
            toolbar: 'ciao',
            icon: CKEDITOR.plugins.getPath('ciao') + 'icon/upload.png'
          });

          CKEDITOR.instances[self.uid].addCommand(
            'uploadfile', 
            { exec: () => {
              $(self.fileBrowser).click()
            } 
          });
        }

        $(self.fileBrowser).change((event) => {
          var photo = new window.FormData()
          photo.append('photo', event.target.files[0])

          self.progressed = 0
          self.api.photo('editor', photo, (processed) => {
            // self.progressed = processed
            // console.log(self.progressed)
          })
          .then((result) => {
            var imageTag = `<img src=${result.url} class="img-responsive"/>`
            CKEDITOR.instances[self.uid].insertHtml(imageTag)
            self.clearProgress()
          })
          .catch((error) => {
            console.log('error', error)
            self.clearProgress()
          })
        })
      })
    },

    clearProgress: function() {
      $(this.fileBrowser).val('')
      var self = this
      // setTimeout (() => {
      //   self.progressed = 0
      // }, 1000)
    },
  },
  computed: {
    uid: function() {
      return uuid()
    },
    fileBrowser: function() {
      return `input[ckeditor-file-browser=${this.uid}]`
    },
    ckeditorSource: function() {
      return this.$store.getters.config.ckeditor.source
    },
    oauthClientId: function() {
      return this.$store.getters.config.oauthClientId
    },
    api: function() {
      return this.$store.getters.api
    },
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
div[data-role="ckeditor"]
  div.progress
    height: 5px
    margin-bottom: 0
  input[type="file"]
    display: none
</style>