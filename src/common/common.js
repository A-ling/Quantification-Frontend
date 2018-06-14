import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
require("../main.css");
var $ = require("jquery");
var echarts = require('echarts');

//获取url参数
function getQueryVariable(variable) {
	var query = window.location.href;
//	var query = "http://192.168.250.12:30000/performance/brinson?strategy_id=B0000000000000000000000000002314&index_code=000905&begin_date=20180228&end_date=20180525";
	
	var vars = query.split("?")[1].split("&");
	for(var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable) {
			return pair[1];
		}
	}
	return false;
}
