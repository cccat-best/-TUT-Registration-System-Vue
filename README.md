# 20212877卢晓雨 - 第三阶段项目

### 优化内容：

+ 上次提交项目时也写了路由守卫，但并不完美（当时只是为了用路由守卫而用了路由守卫）

  + 当时从登录界面跳转到后台界面的路由守卫判断简单粗暴的写了：

    ```javascript
    if (form.username === '20210000' && form.password === '12345')
    ```

  + 本次优化，采用了从后端返回的  `message`  来判断（也可以用返回的状态码）：

    ```js
    if (this.message === '请求成功')
    ```


+ 后台管理界面右上角又加了自己写的一个实时更新时间的 `span` 
+ 后台登录界面表格的编辑功能上次已经完成，但表格没有 `sort` 功能，本次优化后，实现了 【学号】 列，以及 【第一志愿】 、【第二志愿】列可进行升序或者降序的排列 （默认是【学号】列升序排列），这一功能在实际应用中也有很强的实用性
+ 本次优化控制了控制台的输出，避免在实际应用时个人信息的泄露
+ 后台管理界面-首页中，加入了一些内容，用了最简单的flex属性实现居中
+ 后台管理界面-首页中，加了一个天气组件
+ 后台管理界面-公告管理中，加入了一些科协及学生会的介绍（这一处好像也算不上优化，但界面有变美观了一些嗷~）