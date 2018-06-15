var $ = require("jquery");

module.exports = {
	getQueryVariable:getQueryVariable,
	TableHtml:TableHtml,
};



/*
 * 获取url参数
 * variable：要获取的字段名称
 */
function getQueryVariable(variable) {
//	var query = window.location.href;
	var query = "http://192.168.250.12:30000/performance/brinson?strategy_id=B0000000000000000000000000002314&index_code=000905&begin_date=20180228&end_date=20180525";
	
	var vars = query.split("?")[1].split("&");
	for(var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable) {
			return pair[1];
		}
	}
	return false;
}

/*
 * 拼接表格数据
 * data:json  (表格数据,数据结构分为行、列、中间数据值）
 * TString:string  (表格第一行第一列显示的字符串)
 * ThId:string   (表格中th的id)
 * Tbody:string   (表格中tbody的id)
 */
function TableHtml(data,TString,ThId,Tbody){
	if(data){
		var ThHtml = '';
		var TbodyHtml = '';
		var columns = data.columns; //行数据
		var dataArray = data.data;
		var index = data.index; //列数据
		
		columns.unshift(TString);
		
		for(var i = 0; i < columns.length; i++) {   
			ThHtml = '<th>' + columns[i] + '</th>';
			$(ThId).append(ThHtml);
		}
	
		for(var i = 0; i < dataArray.length; i++) {
			dataArray[i].unshift(index[i]);
		}

		for(var i = 0; i < dataArray.length; i++) {
			TbodyHtml += '<tr>';
			for(var j = 0; j < dataArray[i].length; j++) {
				var value = dataArray[i][j];
				if(value == null)
					value = "";
				TbodyHtml += '<td>' + value + '</td>';
			}
			TbodyHtml += '</tr>';
		}
		$(Tbody).append(TbodyHtml);
	}
}
