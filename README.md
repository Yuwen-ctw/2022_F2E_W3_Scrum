# 2022 F2E W3 - Scrum 新手村

<img src='./public/screen.jpg'>

UI 設計 - <a href="https://2022.thef2e.com/users/12061549261446563754" target="_blank">邱仲德</a>

設計稿 - <a href="https://www.figma.com/file/kbtC7fpZWSjEAzeJmnsVO2/Scrum-%E6%96%B0%E6%89%8B%E6%9D%91?node-id=0%3A1" target="_blank">Figma</a>

DEMO - <a  target="_blank">Scrum 新手村</a>
<br>
<br>

## 使用方式

1. 打開終端機，Clone 專案至本機
<pre><code>git clone https://github.com/Yuwen-ctw/2022_F2E_W3_Scrum.git</code></pre>
2. 進入專案資料夾
<pre><code>cd 2022_F2E_W3_Scrum</code></pre>
3. 安裝 npm 套件
<pre><code>npm install</code></pre>
4. 啟動專案
<pre><code>npm start</code></pre>
5. 成功後會自動開啟頁面於 http://localhost:3000
   <br/>
   <br/>

### 備註：請使用 1440\*1024 以上的視窗尺寸觀看，謝謝！

<br/>
<br/>

## 資料夾說明

src\
　| _ assest\
　　　| _ fonts - 字型 \
　　　| _ images - 圖片 \
　| _ pages\
　　　| _ HomePage - 首頁元件\
　　　| _ SpringPage 內容元件\
　　　　　| _ components - 子元件\
　　　　　| _ data - 文字資料\
　　　　　| _ utilities - 功能\
　　　| _ EndPage - 尾頁元件

## 開發工具

- creat-react-app - 框架
- styled-components - 樣式
- react-beautiful-dnd - 元件拖曳功能
- react-router-dom - 路由
  <br/>
  <br/>
  <br/>

### 優化空間：

1. 拖曳功能還做得不夠順暢，例如無法拖曳到前後沒有相鄰元件的索引位置上。
2. 拖曳時若變更尺寸，則被拖曳元件與游標之間會有落差。
3. 程式碼重構，將設計稿文字內容獨立出來及整理共用樣式等。
