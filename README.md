# 比比小锦囊小程序

比比小锦囊是一款后台可自定义模板的头像生成小程序，基于wordpress开发。

自行微信中搜索小程序【比比小锦囊】查看效果


公众号详细介绍：  
[https://mp.weixin.qq.com/s/8pcwrAQSh-pHuuuPy3IG4A](https://mp.weixin.qq.com/s/8pcwrAQSh-pHuuuPy3IG4A)

导入素材包：  
[https://beebee.work/2021/12/23/bi-bi-xiao-jin-nang-xiao-cheng-xu-zhu-ti-bao/](https://beebee.work/2021/12/23/bi-bi-xiao-jin-nang-xiao-cheng-xu-zhu-ti-bao/)

![比比小锦囊](https://github.com/shiheme/beeeered/blob/main/mini-beebeered-s%402x.png)

## 解决痛点：

国庆的时候比比发布了一款群友提供的国庆头像小程序，大家的用户体量暴增的同时，却发现要添加流量主、或者跳转公众号等按钮的时候需要再一次提交发布审核。因为官方审核慢的原因，很多小伙伴错失了流量变现的机会。


为了解决反复提交审核的老大难问题，比比小程序率先在行业里做出了可后台DIY积木的功能，编辑人员只需在后台动动手指拖拽积木就可以DIY出属于自己的个性小程序。


这样，无论是跳转公众号、视频号、其他小程序还是置入流量主广告就可以非常方便的操作了。
  



## 功能一览

1. 支持博客功能  
2. 支持头像工具生成
3. 支持轮播海报、横向滚动、纵向栅栏格等12种DIY积木布局  
4. 支持跳转公众号  
5. 支持跳转H5  
6. 支持跳转其他小程序  
7. 支持长按图片关注公众号、微信号  
8. 支持打开微信红包封面  
9. 支持打开视频号视频  
10. 支持打开PDF文档  
11. 支持头像生成开启激励广告  
12. 支持全站投放流量主原生模板广告  
13. 支持插屏广告  
14. 支持云开发图片安全检测  
15. 支持开启CDN图片裁剪  
16. 支持外链图片、视频、音频  
17. 支持自定义字段  
18. 支持百度盘跳转  
19. 支持自定义底部菜单  
20. 支持换主色调  
21. 支持暗黑模式  
22. 支持主题导出导入  
23. 支持点赞、评论  
24. 支持内置动画雪花和星星  
25. 支持motion动画  
26. 支持引入腾讯无广告视频  


## 部署教程
*详细图文教程请前往公众号[APP比比]查看

step1.从github或者gitee下载比比小锦囊小程序前端代码；  
- github: [https://github.com/shiheme/beeeered](https://github.com/shiheme/beeeered)
- gitee: [https://gitee.com/week7day/beeeered](https://gitee.com/week7day/beeeered)

step2.自行百度如何购买服务器配置宝塔安装wordpress（也可进比比专项群请加群友）；  
step3.进入wordpress后台插件库搜索【[beebee mini](https://cn.wordpress.org/plugins/beebee-mini/)】，安装启用此插件；   
step4.在宝塔面板启用伪静态规则；  
step5.在wordpress后台设置里固定链接选择第二项；  
step6.将比比小锦囊小程序前端代码导入微信开发者工具中；  
step7.微信开发者工具搜索【[https://red.demo.appbeebee.com/](https://red.demo.appbeebee.com/)】替换为你的域名；  
step8.进入wordpress后台比比小程序 > 主题面板启用【比比小锦囊】安装页面中提示的配套插件；  
step9.此时会发现左侧会出现【挂件】这个新的栏目；  
step10.进入wordpress后台比比小程序 > 主题设置，点击一下【保存】  
step11.访问：你的域名/wp-json/acf/v3/options/options 如何有大片代码说明安装成功。  
step12.微信开发者工具可以看到首页显示出来了，但没有内容。  
step13.前往小程序官方网站[https://mp.weixin.qq.com](https://mp.weixin.qq.com)注册小程序账号，资质可以是个人资质，类型选择：工具、图片处理。找到开发选项，生成小程序密钥；  
step14.进入wordpress后台 > 小程序 > 基本设置，前两项填写获取的密钥；  
step15.剩下的工作就是在比比主题设置里DIY操作和添加挂件文章了。  
step16.如果想快速打造成网友做的样子，可以导入他们分享的主题包。  
step17.前往比比素材网[https://beebee.work](https://beebee.work)下载网友分享的比比主题包。  
step18.进入wordpress后台 > 工具 > 导入 > 导入比比主题，选择获得的主题包，可快速完成主题配置；  
step19.进入wordpress后台 > 工具 > 导入 > Wordpress(运行导入器)，选择主题包的挂件数据，可快速将挂件内容和媒体文件完成配置；  
step20.此时，刷新开发工具可以看到页面完成了，如果页面不出现，请在开发工具上启用不要校验域名；  
step21.进入小程序后台，开发选项里配置服务器域名添加以下安全域名：
- https://restapi.amap.com
- https://thirdwx.qlogo.cn
- https://wx.qlogo.cn
- 你自己的域名 

step22.如果需要使用图片安全检测功能，小程序开启云开发功能配置env即可。  
step23.上传代码提交审核，等待通过后发布小程序即可。  


## 声明

比比小锦囊小程序在github上供用户免费下载使用。使用前你需遵循如下规则：

* 允许个人或企业免费使用，
* 坚决不允许用户将比比小程序进行咸鱼、淘宝、资源站等进行售卖，
* 或者上传至任何资源网络平台进行传播下载，
* 一经群内小伙伴发现进行追责到底！

如果你不能遵守以上规则，请勿使用比比原创小程序，以免不必要的版权纠纷。


https://appbeebee.com  
https://hellobeebee.com  
https://beebee.work  
为比比官方平台、官方素材平台和官方社区平台。

【APP比比】为比比原创小程序官方唯一公众号，

原创不易，且用且珍惜。

 
