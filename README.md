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