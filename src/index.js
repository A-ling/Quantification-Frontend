require("./main.css");
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

var $ = require("jquery");
var echarts = require('echarts');

$(function() {
//	$('#main-menu li a').click(function() {
//		$(this).addClass("active").siblings().removeClass("active");
//	});

	//绘制Brinson绩效归因柱状图
	DrawBrinsonBar();
});

function DrawBrinsonBar(){
	var xAxisData = ["电器设备", "传媒", "化工", "国防军工", "金融", "银行","汽车"];
	var yAxisData = [-5, 20, -36, 10, 10, 20,-30];
	
	
	var dom = document.getElementById('BrinsonBar');
//	var dom = $('#BrinsonBar');
	var BrinsonBar = echarts.init(dom); 
	
	// 指定图表的配置项和数据
	var option = {
		tooltip: {
			trigger: 'axis',
			formatter:function(params){
				for(var i = 0;i < params.length;i++){
					return params[i].name + '</br>' + params[i].seriesName + ':' + params[i].value + '%';
				}
			}
		},
		legend: {
			data: ['超额贡献']
		},
		itemStyle:{
			color:'#108ee9',
		},
		xAxis: {
			axisLabel:{
				rotate:45
			},
			data: xAxisData
		},
		yAxis: {},
		series: [{
			name: '超额贡献',
			type: 'bar',
			data: yAxisData
		}]
	};
	
	BrinsonBar.setOption(option);
}
