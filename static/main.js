//var nesromurl="";
kodReady.push(function(){
	Events.bind('explorer.kodApp.before',function(appList){ 
		appList.push({
			name:"KodNES",
			title:LNG['admin.plugin.defaultKodNES'],
			icon:'{{pluginHost}}static/icon.png',
			ext:"{{config.fileExt}}",
			sort:"{{config.fileSort}}",  
			callback:function(path,ext,name){
				var url = '{{pluginHost}}static/page.html?nes='+core.path2url(path,true);
					console.log("KodNES:"+encodeURI(url));
					if('window' == "{{config.openWith}}" && !core.isFileView()){
						window.open(url);      
					}else{
						//core.openDialog(url,core.icon('{{pluginHost}}static/NES_Avatar.png'),htmlEncode(core.pathThis(path)));
						core.openDialog(url,core.icon('{{pluginHost}}static/image/icon.png'),"KodNES:"+name);
						//core.openDialog('{{pluginHost}}static/page.php?nes='+encodeURI(url),core.icon('{{pluginHost}}static/icons.png'),name);
					}
			},
		});
	});
});
