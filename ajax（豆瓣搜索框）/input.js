(function ($) {
	var obj = {
		init: function (options) {
			this.opts = options || {};
			this.wrap = this.opts.father;
			this.createDom();
			this.bindEvent();
		},
		createDom: function () {
			var str = '<span class="inp">\
			<input type="text" class="text" placeholder="请输入...">\
			</span>\
			<span class="inp-btn">\
			<input type="bottom" class="btn" value="搜索">\
			</span>';
			this.wrap.html(str);
		},
		bindEvent: function () {
			var self = this;
			$('.inp input').on('input', function (e) {
				e.preventDefault();
				var value = $(this).val();
				self.getData(value);
			})
		},
		getData: function (val) {
			var self = this.opts;
			$.ajax({
				type: self.type,
				url: self.url,
				data: self.data + val + self.count,
				dataType: self.dataType,
				success: function (data) {
					console.log(111)
					self.suc(data);
				},
			});
		},
	}

	$.fn.extend({
		search: function (options) {
			options.father = this || $('body');
			obj.init(options);
		}
	})
})(jQuery)