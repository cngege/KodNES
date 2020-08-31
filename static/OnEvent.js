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
