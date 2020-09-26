//var nesromurl="";
kodReady.push(function(){
	Events.bind('explorer.kodApp.before',function(appList){ 
		appList.push({
			name:"KodNES",
			title:LNG['admin.plugin.defaultKodNES'],
			icon:'{{pluginHost}}static/image/icon.png',
			ext:"{{config.fileExt}}",
			sort:"{{config.fileSort}}",  
			callback:function(path,ext,name){
				//var url = '{{pluginHost}}static/page.html?nes='+core.path2url(path,true);
				var url = '{{pluginApi}}&nespath='+window.btoa(core.path2url(path,true));
					//console.log("KodNES:"+encodeURI(url));
					if('window' == "{{config.openWith}}" && !core.isFileView()){
						window.open(url);
					}else{
						
						core.openDialog(url,core.icon('{{pluginHost}}static/image/icon.png'),"KodNES:"+name);
						//core.openDialog('{{pluginHost}}static/page.php?nes='+encodeURI(url),core.icon('{{pluginHost}}static/icons.png'),name);
					}
			},
		});
	});
	if(!$.hasKey('plugin.KodNES.style')){  //只有首次处理,避免重复调用
    	$.addStyle(
    	".x-item-icon.x-nes,.x-item-icon.x-NES,.x-item-icon.x-Nes{\
    		background-image:url('{{pluginHost}}static/image/fileicon.png');\
    	}");
	}
});
