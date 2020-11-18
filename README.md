# Loading

Very simple and light-weight loading with vanilla-js 

# Install
`npm install @aligilan/loading --save`

# How to use
### Import style
Add `@aligilan/loading/style.css` in header. <br>
Or <br>
In your sass file add `@import "~@aligilan/loading/style.css";`

Then add below js: <br>
`let loading = require('@alilan/loading');` <br>
`let myLoading_obj = new loading();` <br>
`myLoading_obj.toggleLoading(target)`

> target: Is loading argument that can be query-select-string, element-object, element-objects

Now when ever call `myloading_obj.toggleLoading()`, for first time, that shows loading-spinner (spinner with overlay are inside the target and isn't clickable)
and at the next call loading-spinner will disappear.