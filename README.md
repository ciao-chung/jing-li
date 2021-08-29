# 淨麗清潔

## 網址

<a href="http://jing-li.tw/" target="_blank">http://jing-li.tw/</a>

## 透過gitlab自動佈署(master)

打一個含有"deploy-"的tag

然後push到gitlab repo

## docker開發模式

- 在public目錄執行`docker compose up -d`
- 執行`docker exec -it jingli bash`進入container
- 在/site/frontend執行`yarn install`安裝套件
- 執行`yarn dev`

## 佈署github page

- public/src/main.js的vue router要取消history mode改成hash mode
- 進入container在/site/frontend執行`yarn build:github-page`
- 將public/docs目錄複製到根目錄
- push到github repo(若repo name有改要調整public/config/index.js的assetsPublicPath)

## github page自訂網域

若使用自訂網域

public/config/index.js的assetsPublicPath則直接設定為root(/)即可

並在根目錄的docs目錄中新增一個CNAME檔案

內容為jing-li.tw