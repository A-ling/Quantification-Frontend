import 'bootstrap/dist/css/bootstrap.min.css';
require("../../main.css");
require("./barra_details.css");
var $ = require("jquery");
var common = require('../../common/common.js');

var data = {
	"columns": ["组合暴露", "基准暴露", "相对暴露", "因子收益率", "组合贡献", "基准贡献", "超额贡献"],
	"index": ["Beta", "BooktoPrice", "EarningsYield", "Growth", "Leverage", "Liquidity", "Momentum", "NonlinearSize", "ResidualVolatility", "Size", "休闲服务", "传媒", "公用事业", "农林牧渔", "化工", "医药生物", "商业贸易", "国防军工", "家用电器", "建筑材料", "建筑装饰", "房地产", "有色金属", "机械设备", "汽车", "电子", "电气设备", "纺织服装", "综合", "计算机", "轻工制造", "通信", "采掘", "钢铁", "银行", "非银金融", "食品饮料", "行业因子", "组合", "个股选择"],
	"data": [
		[-0.6663592789, 0.9700872927, -1.6364465716, -0.0024128488, 0.0016078242, -0.0023406739, 0.0039484981],
		[-0.1252630913, -0.7077821926, 0.5825191013, 0.0039622438, -0.0004963229, -0.0028044056, 0.0023080827],
		[0.7232006769, -0.8838204632, 1.6070211401, -0.0061637782, -0.0044576486, 0.0054476733, -0.0099053219],
		[0.7232006769, -0.8838204632, 1.6070211401, -0.0061637782, -0.0044576486, 0.0054476733, -0.0099053219],
		[-0.2712114155, 0.1552424634, -0.426453879, -0.0016837332, 0.0004566477, -0.0002613869, 0.0007180346],
		[-0.0001197712, 0.0866123129, -0.0867320841, -0.0098936496, 0.000001185, -0.0008569119, 0.0008580968],
		[0.1441780734, -0.2401759931, 0.3843540665, -0.0075812338, -0.0010930477, 0.0018208304, -0.002913878],
		[-0.4862062528, 0.6852946285, -1.1715008813, 0.0063980054, -0.0031107502, 0.0043845187, -0.007495269],
		[-0.1861025153, -0.1445354074, -0.0415671079, -0.001674982, 0.0003117184, 0.0002420942, 0.0000696242],
		[0.6044768005, -1.4044384389, 2.0089152395, -0.0009784313, -0.000591439, 0.0013741465, -0.0019655855],
		[0.0, 0.00691, -0.00691, 0.0331652248, 0.0, 0.0002291717, -0.0002291717],
		[0.0, 0.03763, -0.03763, -0.0427034207, 0.0, -0.0016069297, 0.0016069297],
		[0.0199724371, 0.03899, -0.0190175629, 0.0352994761, 0.0007050166, 0.0013763266, -0.00067131],
		[0.0, 0.03947, -0.03947, 0.0661493843, 0.0, 0.0026109162, -0.0026109162],
		[0.0578220965, 0.08468, -0.0268579035, 0.0479290379, 0.0027713575, 0.0040586309, -0.0012872735],
		[0.2224515374, 0.10621, 0.1162415374, 0.2333194106, 0.0519022616, 0.0247808546, 0.027121407],
		[0.0, 0.02702, -0.02702, 0.0693217922, 0.0, 0.0018730748, -0.0018730748],
		[0.0, 0.01191, -0.01191, 0.0234446219, 0.0, 0.0002792254, -0.0002792254],
		[0.0378779116, 0.02196, 0.0159179116, -0.0097696942, -0.0003700556, -0.0002145425, -0.0001555131],
		[0.0, 0.02291, -0.02291, -0.0172123586, 0.0, -0.0003943351, 0.0003943351],
		[0.0365623645, 0.01839, 0.0181723645, -0.0153194569, -0.0005601156, -0.0002817248, -0.0002783908],
		[0.0518308211, 0.06141, -0.0095791789, -0.0366503987, -0.0018996203, -0.002250701, 0.0003510807],
		[0.0, 0.05677, -0.05677, -0.0311072143, 0.0, -0.0017659566, 0.0017659566],
		[0.0, 0.05427, -0.05427, -0.067460318, 0.0, -0.0036610715, 0.0036610715],
		[0.0785527845, 0.02437, 0.0541827845, -0.004320061, -0.0003393528, -0.0001052799, -0.0002340729],
		[0.0438924267, 0.06446, -0.0205675733, -0.0277512345, -0.001218069, -0.0017888446, 0.0005707756],
		[0.0407657674, 0.05184, -0.0110742326, 0.011456281, 0.0004670241, 0.0005938936, -0.0001268695],
		[0.0, 0.00812, -0.00812, 0.0347416183, 0.0, 0.0002821019, -0.0002821019],
		[0.0, 0.01669, -0.01669, 0.0087980685, 0.0, 0.0001468398, -0.0001468398],
		[0.0202002769, 0.0754, -0.0551997231, 0.0885164259, 0.0017880563, 0.0066741385, -0.0048860822],
		[0.0200407891, 0.02035, -0.0003092109, 0.0106911997, 0.0002142601, 0.0002175659, -0.0000033058],
		[0.0, 0.01496, -0.01496, 0.0038970105, 0.0, 0.0000582993, -0.0000582993],
		[0.0, 0.01947, -0.01947, -0.0426707092, 0.0, -0.0008307987, 0.0008307987],
		[0.0, 0.01996, -0.01996, -0.1265695651, 0.0, -0.0025263285, 0.0025263285],
		[0.2523223654, 0.0, 0.2523223654, -0.0518566144, -0.0130845836, 0.0, -0.0130845836],
		[0.0380392221, 0.00995, 0.0280892221, -0.0464541369, -0.0017670792, -0.0004622187, -0.0013048606],
		[0.0796691996, 0.02914, 0.0505291996, 0.0685312625, 0.0054598308, 0.001997001, 0.0034628298],
		[null, null, null, null, 0.0440689308, 0.0292893088, 0.014779622],
		[null, null, null, null, -0.0036610694, -0.0125893321, 0.0089282627],
		[null, null, null, null, -0.0359005183, -0.054332199, 0.0184316806]
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
var strategy_id = '';
var strategy_code = '';
var strategy_name = '';
var strategy_version = '';

$(function() {
	strategy_id = common.getParamFromURLOrCookie('strategy_id');
	var index_code = common.getParamFromURLOrCookie('index_code');
	var begin_date = common.getParamFromURLOrCookie('begin_date');
	var end_date = common.getParamFromURLOrCookie('end_date');
	$('#date').text('报告期：' + begin_date + '~' + end_date);
	if(strategy_id){
		getStrategyInfo(strategy_id);
		$('#strategy').text('策略：' + strategy_name);
//		BarraDetails(strategy_id, index_code, begin_date, end_date);
	}
	//	测试数据
	
	common.TableHtml(data,'因子名称','#BarraTh','#BarraTbody');
});

//Brinson归因明细数据
function BarraDetails(strategy_id, index_code, begin_date, end_date) {
	var BrinsonDetails_url = "http://192.168.250.12:30000/performance/factor_attr";
	$.ajax({
		url: BrinsonDetails_url,
		type: 'get',
		data: {
			strategy_id: strategy_id,
			index_code: index_code,
			begin_date: begin_date,
			end_date: end_date
		},
		timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
		dataType: "json", //请求数据类型
		success: function(data, textStatus, jqXHR) {
			if(textStatus == 'success'){
				if(data){
					common.TableHtml(data,'因子名称','#BarraTh','#BarraTbody');
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
	if(StrategyInfo){
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
