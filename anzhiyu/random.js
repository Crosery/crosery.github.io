var posts=["2023/09/30/C++/1/","2023/09/30/C++/2/","2023/09/30/C++/3/","2023/09/30/C++/5/","2023/09/30/C++/4/","2023/09/30/C++/6/","2023/09/30/C++/7/","2023/09/30/C/10/","2023/09/30/C/11/","2023/09/30/C/12/","2023/09/30/C/1/","2023/09/30/C/15/","2023/09/30/C/14/","2023/09/30/C/16/","2023/09/30/C/18/","2023/09/30/C/20/","2023/09/30/C/2/","2023/09/30/C/21/","2023/09/30/C/23/","2023/09/30/C/17/","2023/09/30/C/24/","2023/09/30/C/26/","2023/09/30/C/22/","2023/09/30/C/27/","2023/09/30/C/25/","2023/09/30/C/29/","2023/09/30/C/3/","2023/09/30/C/30/","2023/09/30/C/28/","2023/09/30/C/32/","2023/09/30/C/5/","2023/09/30/C/4/","2023/09/30/C/7/","2023/09/30/C/6/","2025/01/31/汉化记录/第一次汉化记录/","2023/09/30/ROBOT/1/","2023/09/30/C/9/","2023/09/30/C/8/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };