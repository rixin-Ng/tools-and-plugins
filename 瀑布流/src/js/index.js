(function(){
	var num = 1;
	var flag = false;
	var oLi = $('li');
	getData();
	function getData(){
		if(!flag){
			flag = true;
			$.ajax({
				type:'GET',
				url:'http://photo.weibo.com/welcome/hot?nologin=' + num,
				success:addDom,
				// dataType:'jsonp',
				// jsonpCallback:"cb",
				beforeSend: function(){
					$('.loading').show();
				},
				error:function(){
					console.log('error');
				}
			});
			num++;	
		}		
	}
	
	function addDom(data){
		$('.loading').hide();
		var dataList = JSON.parse(data);
		if(dataList.length > 0){
			dataList.forEach(function (ele, index){
				var idiv = $('<div class="item"></div>');
				var imgBox = $('<div class="imgBox"></div>');
				var oimg = new Image();
				var op = $('<p class="title"></p>');
				op.text(ele.title);
				oimg.src = ele.preview;
				oimg.onload = function(){
					imgBox.append(oimg);
					idiv.append(imgBox).append(op);
					//获得最短一列的索引
					var index = getMinList(oLi);
					$(oLi[index]).append(idiv);
				};
			});
		}
		flag = false;
	}
		//最短索引
		function getMinList(ele){
			var minHeight = parseInt($(ele[0]).css('height'));
			index = 0;
			for(var i = 0 ; i < ele.length; i++){
				var height = parseInt($(ele[i]).css('height'));
				if(height < minHeight){
					minHeight = height;
					index = i;
					console.log(index);
				}
			}
			return index;

		}
		$(window).scroll(function () {
			var scrollHeight = $(window).scrollTop();
			var clientHeight = $(window).height();
			var pageHeigh = parseInt($(oLi[getMinList(oLi)]).css('height'));
			if (scrollHeight + clientHeight > pageHeigh) {
				getData();
			}
		})
	})()

