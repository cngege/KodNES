<?php

class KodNESPlugin extends PluginBase{
    function __construct() {
        parent::__construct();
    }
    public function regist() {
        $this->hookRegist(array(
            'user.commonJs.insert' => 'KodNESPlugin.echoJs',
        ));
    }
    public function echoJs() {
        $this->echoFile('static/main.js'); //通过文件输出;支持模板变量
    }
	public function index() {
		include($this->pluginPath.'static/page.html');
	}
}