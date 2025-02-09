var posts=["2023/09/30/ROBOT/Q群云崽使用教程/","2024/04/01/学校课设/标准C语言实现简单web服务器/","2025/01/31/galgame汉化/第一次汉化记录/","2024/07/31/开源项目/ROS双线巡线方案/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };