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
    fullS(e);
})

function fullS(e){
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
        //console.log(document);
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
}


//固定导航按钮
$(".fixed").click(function(e){
    if($(".btns").hasClass("btnfixed")){
        $(".btns").removeClass("btnfixed");
    }else{
        $(".btns").addClass("btnfixed");
    }
})

//触摸按键 监听
//Down
$('.BTNL .U').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.UP},"D");
}); 
$('.BTNL .D').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.DOWN},"D");
}); 
$('.BTNL .L').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.LEFT},"D");
}); 
$('.BTNL .R').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.RIGHT},"D");
}); 
$('.BTNL .SE').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.SELECT},"D");
}); 

$('.BTNR .A').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.A},"D");
}); 
$('.BTNR .B').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.B},"D");
}); 
$('.BTNR .X').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.AA,preventDefault:()=>{}},"D");
}); 
$('.BTNR .Y').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.BB,preventDefault:()=>{}},"D");
}); 
$('.BTNR .AB').on('touchstart',function(){ 
　　ABDown(1);
}); 
$('.BTNR .ST').on('touchstart',function(){ 
　　keyboard(nes.buttonDown, {keyCode:KB.P1.START},"D");
}); 

//UP
$('.BTNL .U').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.UP},"U");
});
$('.BTNL .D').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.DOWN},"U");
});
$('.BTNL .L').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.LEFT},"U");
});
$('.BTNL .R').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.RIGHT},"U");
});
$('.BTNL .SE').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.SELECT},"U");
});

$('.BTNR .A').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.A},"U");
});
$('.BTNR .B').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.B},"U");
});
$('.BTNR .X').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.AA,preventDefault:()=>{}},"U");
});
$('.BTNR .Y').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.BB,preventDefault:()=>{}},"U");
});
$('.BTNR .AB').on('touchend',function(){ 
　　ABUp(1);
});
$('.BTNR .ST').on('touchend',function(){ 
　　keyboard(nes.buttonUp, {keyCode:KB.P1.START},"U");
});