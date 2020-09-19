var SCREEN_WIDTH = 256; //宽像素
var SCREEN_HEIGHT = 240;    //高像素
var FRAMEBUFFER_SIZE = SCREEN_WIDTH*SCREEN_HEIGHT;

var canvas_ctx, image;
var framebuffer_u8, framebuffer_u32;

var AUDIO_BUFFERING = 512;
var SAMPLE_COUNT = 4*1024;
var SAMPLE_MASK = SAMPLE_COUNT - 1;
var audio_samples_L = new Float32Array(SAMPLE_COUNT);
var audio_samples_R = new Float32Array(SAMPLE_COUNT);
var audio_write_cursor = 0, audio_read_cursor = 0;

var netload = 0;

var nes = new jsnes.NES({
	onFrame: function(framebuffer_24){
		for(var i = 0; i < FRAMEBUFFER_SIZE; i++) framebuffer_u32[i] = 0xFF000000 | framebuffer_24[i];
	},
	onAudioSample: function(l, r){
		audio_samples_L[audio_write_cursor] = l;
		audio_samples_R[audio_write_cursor] = r;
		audio_write_cursor = (audio_write_cursor + 1) & SAMPLE_MASK;
	},
});

function onAnimationFrame(){
	window.requestAnimationFrame(onAnimationFrame);
	
	image.data.set(framebuffer_u8);
	canvas_ctx.putImageData(image, 0, 0);
}

function audio_remain(){
	return (audio_write_cursor - audio_read_cursor) & SAMPLE_MASK;
}

function audio_callback(event){
	var dst = event.outputBuffer;
	var len = dst.length;
	
	// Attempt to avoid buffer underruns.
	if(audio_remain() < AUDIO_BUFFERING && netload == 200) nes.frame();
	
	var dst_l = dst.getChannelData(0);
	var dst_r = dst.getChannelData(1);
	for(var i = 0; i < len; i++){
		var src_idx = (audio_read_cursor + i) & SAMPLE_MASK;
		dst_l[i] = audio_samples_L[src_idx];
		dst_r[i] = audio_samples_R[src_idx];
	}
	
	audio_read_cursor = (audio_read_cursor + len) & SAMPLE_MASK;
}

function keyboard(callback, event,UD){
	var player1 = 1;
	var player2 = 2;
	switch(event.keyCode){
	  case KB.P1.UP://W
        callback(player1, jsnes.Controller.BUTTON_UP); break;
      case KB.P1.DOWN://S
        callback(player1, jsnes.Controller.BUTTON_DOWN); break;
      case KB.P1.LEFT://A
        callback(player1, jsnes.Controller.BUTTON_LEFT); break;
      case KB.P1.RIGHT://D
        callback(player1, jsnes.Controller.BUTTON_RIGHT); break;
      case KB.P1.SELECT://V
        callback(player1, jsnes.Controller.BUTTON_SELECT); break;
      case KB.P1.START://B
        callback(player1, jsnes.Controller.BUTTON_START); break;
      case KB.P1.B://J
        callback(player1, jsnes.Controller.BUTTON_B); break;
      case KB.P1.A://K
        callback(player1, jsnes.Controller.BUTTON_A); break;
      case KB.P1.BB://U
        event.preventDefault();
        if(UD=="D"){    //按下
            P1Down_BB = true;
            ClickP1B();
        }else{
            P1Down_BB = false;
        }
        break;
      case KB.P1.AA://I
        event.preventDefault();
        if(UD=="D"){    //按下
            P1Down_AA = true;
            ClickP1A();
        }else{
            P1Down_AA = false;
        }
        break;
      
      //player2 键位  
      case KB.P2.UP://W
        callback(player2, jsnes.Controller.BUTTON_UP); break;
      case KB.P2.DOWN://S
        callback(player2, jsnes.Controller.BUTTON_DOWN); break;
      case KB.P2.LEFT://A
        callback(player2, jsnes.Controller.BUTTON_LEFT); break;
      case KB.P2.RIGHT://D
        callback(player2, jsnes.Controller.BUTTON_RIGHT); break;
      case KB.P2.SELECT://V
        callback(player2, jsnes.Controller.BUTTON_SELECT); break;
      case KB.P2.START://B
        callback(player2, jsnes.Controller.BUTTON_START); break;
      case KB.P2.B://J
        callback(player2, jsnes.Controller.BUTTON_B); break;
      case KB.P2.A://K
        callback(player2, jsnes.Controller.BUTTON_A); break;
      case KB.P2.BB://U
        event.preventDefault();
        if(UD=="D"){    //按下
            P2Down_BB = true;
            ClickP2B();
        }else{
            P2Down_BB = false;
        }
        break;
      case KB.P2.AA://I
        event.preventDefault();
        if(UD=="D"){    //按下
            P2Down_AA = true;
            ClickP2A();
        }else{
            P2Down_AA = false;
        }
        break;
        
		default: break;
	}
}

function ABDown(player){
    nes.buttonDown(player,jsnes.Controller.BUTTON_A);
    nes.buttonDown(player,jsnes.Controller.BUTTON_B);
}

function ABUp(player){
    nes.buttonUp(player,jsnes.Controller.BUTTON_A);
    nes.buttonUp(player,jsnes.Controller.BUTTON_B);
}


//Player1
function ClickP1B(){
    if(P1Down_BB){
      nes.buttonDown(1,jsnes.Controller.BUTTON_B);//按下B键
      setTimeout(function(){
        nes.buttonUp(1,jsnes.Controller.BUTTON_B);//放开B键
        setTimeout(function(){
          if(!P1Down_BB)return;
          ClickP1B();
        },50);
      },50)
    }
}

function ClickP1A(){
    if(P1Down_AA){
      nes.buttonDown(1,jsnes.Controller.BUTTON_A);//按下B键
      setTimeout(function(){
        nes.buttonUp(1,jsnes.Controller.BUTTON_A);//放开B键
        setTimeout(function(){
          if(!P1Down_AA)return;
          ClickP1A();
        },50);
      },50)
    }
}

//Player2
function ClickP2B(){
    if(P2Down_BB){
      nes.buttonDown(2,jsnes.Controller.BUTTON_B);//按下B键
      setTimeout(function(){
        nes.buttonUp(2,jsnes.Controller.BUTTON_B);//放开B键
        setTimeout(function(){
          if(!P2Down_BB)return;
          ClickP2B();
        },50);
      },50)
    }
}

function ClickP2A(){
    if(P2Down_AA){
      nes.buttonDown(2,jsnes.Controller.BUTTON_A);//按下B键
      setTimeout(function(){
        nes.buttonUp(2,jsnes.Controller.BUTTON_A);//放开B键
        setTimeout(function(){
          if(!P2Down_AA)return;
          ClickP2A();
        },50);
      },50)
    }
}


function nes_init(canvas_id){
	var canvas = document.getElementById(canvas_id);
	canvas_ctx = canvas.getContext("2d");
	image = canvas_ctx.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	
	canvas_ctx.fillStyle = "black";
	canvas_ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	
	// Allocate framebuffer array.
	var buffer = new ArrayBuffer(image.data.length);
	framebuffer_u8 = new Uint8ClampedArray(buffer);
	framebuffer_u32 = new Uint32Array(buffer);
	
	// Setup audio.
	var audio_ctx = new window.AudioContext();
	var script_processor = audio_ctx.createScriptProcessor(AUDIO_BUFFERING, 0, 2);
	script_processor.onaudioprocess = audio_callback;
	script_processor.connect(audio_ctx.destination);
}

function nes_boot(rom_data){
	nes.loadROM(rom_data);
	window.requestAnimationFrame(onAnimationFrame);
}

function nes_load_data(canvas_id, rom_data){
	nes_init(canvas_id);
	nes_boot(rom_data);
}

function nes_load_url(canvas_id, path){
	nes_init(canvas_id);
	
	var req = new XMLHttpRequest();
	req.open("GET", path);
	req.overrideMimeType("text/plain; charset=x-user-defined");
	req.onerror = () => console.log(`Error loading ${path}: ${req.statusText}`);
	
	req.onload = function() {
	    netload = this.status;
		if (this.status === 200) {
		    nes_boot(this.responseText);
		} else if (this.status === 0) {
			// Aborted, so ignore error
		} else {
			req.onerror();
		}
	};
	
	req.send();
}

document.addEventListener('keydown', (event) => {keyboard(nes.buttonDown, event,"D")});
document.addEventListener('keyup', (event) => {keyboard(nes.buttonUp, event,"U")});


