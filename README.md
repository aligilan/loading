# Loading

Very simple and light-weight loading with vanilla-js 

# Install
`npm install @aligilan/loading --save`

# How to use
#### 1- Import style
Add `@aligilan/loading/style.css` in header. <br>
Or <br>
In your sass file add `@import "~@aligilan/loading/style.css";`

---

#### 2- Import js

`let loading = require('@alilan/loading');` <br>
`let normal_loading = new loading();` <br>
`normal_loading.toggle(target)`

---

##### In Laravel:
Import:
>path: resources/app.js
>`window.Loading = require('@aligilan/loading');` <br>
>In your page script tag:
>`let normal_loading = new Loading;`

Example: <br>
>Use in header tag, when DOM is ready <br>
`document.addEventListener("DOMContentLoaded", function(){
    normal_loading.toggle('#my-element')
});`

Or

>Use when window loaded: <br>
`window.onload = function(){
    normal_loading.toggle('#my-element')
}`

---

> `target`  
>Valid target element types are: query-select-string, element-object, element-objects

Now when ever call `normal_loading.toggle(target)`, for first time, that shows loading-spinner (spinner with overlay are inside the target and isn't clickable)
and at the next call loading-spinner will disappear.
