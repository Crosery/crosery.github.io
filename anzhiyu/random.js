var posts=["2025/01/31/汉化记录/第一次汉化记录/","2023/09/30/ROBOT/1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };