var $ = require("jquery");

module.exports = {
	/*
	先从链接中获取参数值，值为空时，再从cookie中获取
	name:cookie的key
	isSaveToCookie:从URL中获取到value不为空时，是否保存到cookie
	*/
	getParamFromURLOrCookie:getParamFromURLOrCookie,
	
	/*
	 * 获取url参数
	 * variable：要获取的字段名称
	 */
	getQueryVariable:getQueryVariable,
	/*
	 * 拼接表格数据
	 * data:json  (表格数据,数据结构分为行、列、中间数据值）
	 * TString:string  (表格第一行第一列显示的字符串)
	 * ThId:string   (表格中th的id)
	 * Tbody:string   (表格中tbody的id)
	 */
	TableHtml:TableHtml,
	/*
	入参
	name:cookie's key,
	value:cookie's value,
	minuteToLive:cookie有效期时长（分钟）
	*/
	setCookie:setCookie,

	/*
	入参;
	name:cookie's key
	*/
	getCookie:getCookie,
};

/*
先从链接中获取参数值，值为空时，再从cookie中获取
name:cookie的key
isSaveToCookie:从URL中获取到value不为空时，是否保存到cookie
*/
function getParamFromURLOrCookie(name,isSaveToCookie = false) {
	var value = getQueryVariable(name);
	if(value == ""){
		value = getCookie(name);
	}else{
		if(isSaveToCookie){
			setCookie(name,value,60);
		}
	}

	return value
}

/*
 * 获取url参数
 * variable：要获取的字段名称
 */
function getQueryVariable(variable) {
	//var query = window.location.href;
	var query = "http://192.168.250.12:30000/performance/brinson?strategy_id=B0000000000000000000000000002314&index_code=000905&begin_date=20180228&end_date=20180525";
	if(query.indexOf("?") < 0){
		return "";
	}
	var vars = query.split("?")[1].split("&");
	for(var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable) {
			return pair[1];
		}
	}
	return "";
}

/*
 * 拼接表格数据
 * data:json  (表格数据,数据结构分为行、列、中间数据值）
 * TString:string  (表格第一行第一列显示的字符串)
 * ThId:string   (表格中th的id)
 * Tbody:string   (表格中tbody的id)
 */
function TableHtml(data,TString,ThId,Tbody){
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

/*
	入参
	name:cookie's key,
	value:cookie's value,
	minuteToLive:cookie有效期时长（分钟）
	*/
function setCookie(name,value,minuteToLive){

    var cookie = name + '=' + encodeURIComponent(value);
    console.log(cookie);
    if(typeof daysToLive == 'number'){
        cookie += ';max-age='+(minuteToLive*60);
    }
    document.cookie = cookie;
 }

/*
	入参;
	name:cookie's key
	*/
 function getCookie(name) {
  var cookies = document.cookie;
  var list = cookies.split("; ");          // 解析出名/值对列表
      
  for(var i = 0; i < list.length; i++) {
    var arr = list[i].split("=");          // 解析出名和值
    if(arr[0] == name)
      return decodeURIComponent(arr[1]);   // 对cookie值解码
  } 
  return "";
}
