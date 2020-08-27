let KB = {//按键
  "P1":{
    UP:87,//W
    DOWN:83,//S
    LEFT:65,//A
    RIGHT:68,//D
    SELECT:86,//V
    START:66,//B
    B:74,//J
    A:75,//K
    BB:85,//U
    AA:73,//I
  },
  "P2":{
    UP:38,//up
    DOWN:40,//S
    LEFT:37,//A
    RIGHT:39,//D
    SELECT:96,//V
    START:110,//B
    B:98,//J
    A:99,//K
    BB:101,//U
    AA:102,//I
  }
}

let P1Down_AA,P1Down_BB,P2Down_AA,P2Down_BB;

//跳转到GITHUB
$(".github").click(function(){
    window.open("https://github.com/cngege/KodNES.git");
})

//重新开始
$(".restart").click(function(){
    location.reload();
})


//处理全屏信息
$(".fullS").click(function(e){
    // 设置全屏
    var element = document.documentElement;     // 返回 html dom 中的root 节点 <html>
    var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if(!isFullscreen) {
        // 判断浏览器设备类型
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen){   // 兼容火狐
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {    // 兼容谷歌
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {   // 兼容IE
            element.msRequestFullscreen();
        }
    } else {            // 退出全屏
        console.log(document);
        //  退出全屏
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
})

//固定导航按钮
$(".fixed").click(function(e){
    if($(".btns").hasClass("btnfixed")){
        $(".btns").removeClass("btnfixed");
    }else{
        $(".btns").addClass("btnfixed");
    }
})