$(function(){
	// $('.trigger').on('click', function(){
	// 	$(this).next().stop(true, true).slideToggle();
	// })

	function Toggle(el) {
		this.$el = el;
		this.hoge = el.find('.trigger').next();
		this._run();
	};

	Toggle.prototype._run = function(){
		var self = $(this);//toggleコンストラクタ
		$('.trigger').on('click', function(){
			//console.log(self.get(0).hoge.get(0))
			$(this).next().stop().slideToggle();
		})
	};

	$('.fn-toggle').each(function(){
		new Toggle($(this));
	});

	//$('.fn-bxslider').bxSlider();

	function slider(el){
		this.element = el;
		this._init();
		this._run(this.element);
	};
	slider.prototype._init = function() {
		this.callback = function() {
			console.log("テスト");
		}
	};
	slider.prototype._run = function(el) {
		var hoge = this;
		//console.log(hoge.callback);
		el.bxSlider({
			'mode':'fade',
			'onSlideAfter':hoge.callback
		})
	}

	$('.fn-bxslider').each(function(){
		new slider($(this));
	});


	//jquery名前空間テスト
	$('.testLink').on('click.bar', function(e){
		e.preventDefault();
		$('.testLink').off('click.bar');
		alert("リンク成功");
	});

	$('.testLink').trigger('click.foo')


	$('.testfocus').on('focus.foo.bar', function(){
		console.log('フォーカスがのったよ')
	});

	$('.testfocus').off('focus.bar');

	$('.testfocus').trigger('focus.foo');
	//ここは山本さんとかにきいてみよう↑↑

	//ここからajaxのテストだよ
	$('.ajax_testLink').on('click', function(e){
		e.preventDefault();
		$.ajax({
			type: 'GET',
			dataType: "html",
			url: '/html/top/ajax.html'
		})
		.done(function(data){
			console.log(data)
			$('.ajax_test').html(data);
		})
	})
});