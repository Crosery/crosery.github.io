var posts=["2023/09/30/ROBOT/Q群云崽使用教程/","2025/06/10/学校课设/嵌入式课设/","2025/01/31/galgame汉化/第一次汉化记录/","2024/04/01/学校课设/标准C语言实现简单web服务器/","2024/07/31/开源项目/ROS双线巡线方案/","2025/02/24/教程/国内免费获取 DeepSeek API 服务及本地应用部署指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };