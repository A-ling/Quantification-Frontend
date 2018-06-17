//var $ = require("jquery");
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.js";
import "bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js";

require("../main.css");
require("./barra_risk.css");

var common = require('../common/common.js');
var exportExcel = require('../common/exportExcel.js');

var data = {
	"columns": ["绝对暴露", "基准暴露", "相对暴露", "绝对风险", "相对风险"],
	"index": ["const", "Beta", "Growth", "ResidualVolatility", "EarningsYield", "Momentum", "NonlinearSize", "BooktoPrice", "Leverage", "Liquidity", "Size", "休闲服务", "传媒", "公用事业", "农林牧渔", "化工", "医药生物", "商业贸易", "国防军工", "家用电器", "建筑材料", "建筑装饰", "房地产", "有色金属", "机械设备", "汽车", "电子", "电气设备", "纺织服装", "综合", "计算机", "轻工制造", "通信", "采掘", "钢铁", "银行", "非银金融", "食品饮料", "行业因子", "个股特质", "组合"],
	"data": [
		[null, null, null, 3891.5343737045, -0.3840874087],
		[-0.6663592789, 0.9700872927, -1.6364465716, -459.5311136777, 1520.0249865296],
		[0.7232006769, -0.8838204632, 1.6070211401, -36.1137922415, 241.6560969294],
		[-0.1861025153, -0.1445354074, -0.0415671079, -50.6408483928, 24.5164403598],
		[0.7232006769, -0.8838204632, 1.6070211401, 72.7947219428, 705.8180473725],
		[0.1441780734, -0.2401759931, 0.3843540665, -10.0125920537, 85.394913645],
		[-0.4862062528, 0.6852946285, -1.1715008813, -33.5763982357, 68.2859489036],
		[-0.1252630913, -0.7077821926, 0.5825191013, 4.6746338544, -10.1593001541],
		[-0.2712114155, 0.1552424634, -0.426453879, 6.674724349, 47.7435948771],
		[-0.0001197712, 0.0866123129, -0.0867320841, -0.0790891404, 76.7893182917],
		[0.6044768005, -1.4044384389, 2.0089152395, -342.3049453469, 2028.5672788039],
		[0.0, 0.00691, -0.00691, 0.0, -15.4657395561],
		[0.0, 0.03763, -0.03763, 0.0, -18.5346470662],
		[0.0199724371, 0.03899, -0.0190175629, -12.3879601331, -5.8700009795],
		[0.0, 0.03947, -0.03947, 0.0, 6.3584941012],
		[0.0578220965, 0.08468, -0.0268579035, 5.8025400682, 3.0044976112],
		[0.2224515374, 0.10621, 0.1162415374, 28.8803869735, 8.9152643953],
		[0.0, 0.02702, -0.02702, 0.0, 14.8926025447],
		[0.0, 0.01191, -0.01191, 0.0, 8.4377888266],
		[0.0378779116, 0.02196, 0.0159179116, 13.1195501742, 6.523536651],
		[0.0, 0.02291, -0.02291, 0.0, 17.5913534111],
		[0.0365623645, 0.01839, 0.0181723645, -17.7866369998, 8.0814403248],
		[0.0518308211, 0.06141, -0.0095791789, -22.9552225122, -6.534879354],
		[0.0, 0.05677, -0.05677, 0.0, -4.1825435033],
		[0.0, 0.05427, -0.05427, 0.0, 27.137391022],
		[0.0785527845, 0.02437, 0.0541827845, -3.5489995201, 6.0299222685],
		[0.0438924267, 0.06446, -0.0205675733, 3.9592257231, -8.5343252907],
		[0.0407657674, 0.05184, -0.0110742326, -9.0254906486, -5.7152441364],
		[0.0, 0.00812, -0.00812, 0.0, 0.8102726234],
		[0.0, 0.01669, -0.01669, 0.0, -33.2351109369],
		[0.0202002769, 0.0754, -0.0551997231, 15.7923796419, 44.0200698603],
		[0.0200407891, 0.02035, -0.0003092109, 14.501831448, 1.1831465884],
		[0.0, 0.01496, -0.01496, 0.0, 4.2688748288],
		[0.0, 0.01947, -0.01947, 0.0, 4.2522307413],
		[0.0, 0.01996, -0.01996, 0.0, -18.6730995952],
		[0.2523223654, 0.0, 0.2523223654, 175.1747549739, -283.0390439326],
		[0.0380392221, 0.00995, 0.0280892221, -23.0494795847, 38.5411962567],
		[0.0796691996, 0.02914, 0.0505291996, 60.8266172816, 19.9468851979],
		[null, null, null, 229.303496886, -179.7896670979],
		[null, null, null, 3891.5343737045, -0.3840874087],
		[null, null, null, 7164.2575453526, 4608.0794836433]
	]
}

//策略信息测试数据
var StrategyInfo = {
	"strategy_id": "S0000000000000000000000000000382",
	"strategy_code": "S0000162",
	"strategy_name": "PE选股策略",
	"strategy_version": "1.1.1"
}

/*全局变量*/
var index = []; //列数据
var BarraRiskData = [];    //Barra风险分析
var strategy_id = '';
var strategy_code = '';
var strategy_name = '';
var strategy_version = '';
var trade_date = '';

//在页面需要调用这些方法
window.BarraRisk ={
	//导出Barra风险分析的excel
	Export : function(){
		var fileName = "Barra风险分析";
		var innerHtml = document.getElementById("BarraRiskTable").innerHTML;
		exportExcel.exprotTableHtml(innerHtml,fileName);
	}
};

$(function() {
	strategy_id = common.getParamFromURLOrCookie('strategy_id');
	var index_code = common.getParamFromURLOrCookie('index_code');
//	var trade_date = common.getQueryVariable('trade_date');
	var trade_date = '20180228';
	$('#date').text('日期：' + trade_date);
	if(strategy_id) {
		getStrategyInfo(strategy_id);
		$('#strategy').text('策略：' + strategy_name);
		//BarraRiskDetails(strategy_id, index_code, trade_date);
	}
	//	测试数据
	common.TableHtml(data, '因子名称', '#BarraRiskTh', '#BarraRiskTbody');

	bindDate();
});

function bindDate(){
	$("#dtp_input1").datepicker({
		
		//altField: '#dtp_input1',
		//dateFormat: 'yyyy-MM-dd',//设置时间格式，默认值: 'mm/dd/yyyy'
		// dayNamesMin: ['日','一','二','三','四','五','六'],
		// monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		//changeMonth:true,
		//changeYear:true,
		
	});
}

//Brinson归因明细数据
function BarraRiskDetails(strategy_id, index_code, trade_date) {
	var BrinsonDetails_url = "http://192.168.250.12:30000/performance/risk_attr";
	$.ajax({
		url: BrinsonDetails_url,
		type: 'get',
		data: {
			strategy_id: strategy_id,
			index_code: index_code,
			trade_date: trade_date
		},
		timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
		dataType: "json", //请求数据类型
		success: function(data, textStatus, jqXHR) {
			if(textStatus == 'success'){
				if(data){
					common.TableHtml(data, '因子名称', '#BarraRiskTh', '#BarraRiskTbody');
					
					for(var i = 0; i < data.data.length; i++) {
						data.data[i].unshift(data.columns[i]);
					}
					BarraRiskData = data.data;
				}
			}
		},
		complete: function(XMLHttpRequest, textStatus) {
			if(textStatus == 'timeout') { //判断是否超时
				var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
				xmlhttp.abort(); //终止当前请求
				console.log(textStatus);　　　　
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	})
}

function getStrategyInfo(strategy_id) {
	if(StrategyInfo) {
		strategy_id = StrategyInfo.strategy_id;
		strategy_code = StrategyInfo.strategy_code;
		strategy_name = StrategyInfo.strategy_name;
		strategy_version = StrategyInfo.strategy_version;
	}
}

//获取策略信息
function getStrategyInfos(strategy_id) {
	var StrategyInfos_url = "https://quant-dev.phfund.com.cn/quant-policymanager/strategy-simple";
	$.ajax({
		url: StrategyInfos_url,
		type: 'get',
		data: {
			strategy_id: strategy_id,
		},
		timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
		dataType: "json", //请求数据类型
		beforeSend: function(XMLHttpRequest) {
			//开始请求之前
			console.log("正在获取数据...");
		},
		success: function(data, textStatus, jqXHR) {
			console.log(data);
		},
		complete: function(XMLHttpRequest, textStatus) {
			//请求完成
			// textStatus 可能为：null、'success'、 'notmodified'、 'error'、 'timeout'、 'abort'或'parsererror'等
			if(textStatus == 'timeout') { //判断是否超时
				var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
				xmlhttp.abort(); //终止当前请求
				alert("网络超时！");　　　　
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert(errorThrown);
		}
	})
}