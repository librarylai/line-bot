# 【筆記】LINE Bot 系列（二）用程式玩轉 LINE Bot

###### tags: `筆記文章`

> 本篇主要會使用[上一篇 - 【筆記】LINE Bot 系列（一）創建自己的 LINE 官方帳號與相關設定 - 無程式碼篇](https://hackmd.io/@Librarylai/S17rU1T52)建立的 LINE Offical Account 來玩一些 LINE Bot 的功能，例如：自動回覆、廣播通知...等。
>
> 因此如果還沒有建立 LINE Offical Account 等相關設定的讀者，建議可以先看上一篇建立一下呦！因為接下來會需要使用到該官方帳號的 `channelAccessToken` 與 `channelSecret` 參數。

## 專案架構與基本設定

> **溫馨提醒：**
> 這邊因為筆者比較偷懶，因此打算直接用 **NextJS** 這套 Serverless 框架來串接 LINE Bot 的部分，那大家也可以依照官方的教學使用 **Nodejs + Express** 來實作 LINE Bot。
> 如果您是用 Nodejs + Express 的話可直接看這邊的官方文件來做設定。 [line-bot-sdk-nodejs](https://line.github.io/line-bot-sdk-nodejs/getting-started/basic-usage.html#configuration)

#### 那現在就讓我們從建立一個 NextJS 專案開始吧！！！

### 建立 NextJS 專案

#### 1. 打開 Terminal 並輸入以下指令

> npx create-next-app@latest

#### 2. 接下來它會問一些是否要 ESlint、TypeScript、App Router 等問題

> 這邊都可以依照喜好自己做選擇，基本上本篇不會寫到前端的部分，所以大致上都沒關係，想順便練習 Next13 的寫法的可以用 App Router。
>
> **但等等攥寫 API 的部分會使用 Next12 版本 Pages Router 的 [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) 方式下去攥寫（簡單來說就是用 Next12 版本的方式攥寫），因為在目前 Next13 的 Route Handlers 方式中會碰到與 line-bot-sdk-nodejs 這套件不符合的問題！詳細會在接下來告訴大家。**
>
> 因此如果怕兩種寫法混合麻煩的話，可以直接都選擇沿用 Next12 Pages Router 的選項即可。

#### 3. 安裝相關依賴套件

> yarn // 擇其一
> npm install // 擇其一

#### 4. 安裝 [line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs)

> npm install @line/bot-sdk --save // 擇其一
> yarn add @line/bot-sdk // 擇其一
>
> **額外補充：**
> 官方也有推薦一些[開源社群上的第三方套件](<(https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/#community-sdks)>)給大家選擇，比較有名的像是 [linebot](https://github.com/boybundit/linebot)、[bottender](https://github.com/Yoctol/bottender) 這兩個套件，而 bottender 更是串接了許多服務在裡面，像是 Slack、LINE、Messenger...等平台服務，因此如果剛好要串接這些平台的話就可以直接用 bottender 這套。

### 安裝 ngrok

第一次聽到這個名詞的讀者可能會好奇這個東西是什麼呢？因此我們先來問問 ChatGPT 大神看看！它的解釋如下：

> ![](https://hackmd.io/_uploads/SkFsdNP22.png)
>
> 簡單來說：**ngrok** 是一個能『暫時』讓外部的人(同事、客戶)能在『
> 未架站』的情況下，透過一個 『暫時的 https URL』 轉發進本地端(localhost) Server 上。

那這邊因為 LINE 的 Webhook 會需要我們提通一個 https 的 URL，所以等等我們會 ngrok 來產生一個暫時的 https URL 並將它填到 Webhook 上面。因此這邊就需要先請大家下載 ngrok 軟體。

#### 1. [ngrok Download](https://ngrok.com/download)

#### 2. 啟動 ngrok（依照你 Server 的 Port）

> ngrok http 3000
>
> ![](https://hackmd.io/_uploads/HJh_n4w32.png)

## LINE Bot 自動回覆

## LINE Bot 廣播通知

## Reference

1. [LINE Developers - Messaging API SDKs](https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/)
2. [line-bot-sdk-nodejs](https://line.github.io/line-bot-sdk-nodejs/)
3. [LINE bot 好好玩 30 天玩轉 LINE API - Clarence](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
4. [LINE Bot を Next.js + TypeScript + Netlify Functions で作る - Zenn](https://zenn.dev/pinalto/articles/79dc21060a8c95)
