var ltNum = 0;
var mus = 0;
var finScore = 0;
$(function(){
	/****新闻页*****/
	var time1 = 0;
	// var t = setInterval(function(){
	// 	if(time1 == 0){
	// 		time1 = 1;
	// 		$(".wrap_news").hide();
	// 		$(".wrap_hp").show();
	// 	}else{
	// 		clearInterval(t);
	// 	}
	// },5000);
	//$(".wrap_news").on("click",function(){
		// clearInterval(t);
		// $(".wrap_news").hide();
		// $(".wrap_hp").show();
	//});

	/*******首页********/
	$(".btn_play").on("click",function(){
		ACT.track("0");
		ACT.login(function(type, key){
			console.log("开始游戏按钮");
			$(document).scrollTop(0);
			$(".wrap_hp").hide();
			$(".wrap_game").show();
			//$("#loading").text("100%");
			gameInit();
			_music = new Slam.Music("sounds/bgm.mp3");
			//$(".wrap_over").show();
		});
	});
	$(".btn_rules").on("click",function(){
		$(".page_rules").show();
	});
	$(".btn_cls").on("click",function(){
		$(".page_rules").hide();
	});

	/*******结果页*******/
	$(".btn_replay").on("click",function(){

	});
	$(".btn_share").on("click",function(){
		$(".shareBox").show();
		//ACT.setShareContent();
	});
	$(".shareBox").on("click",function(){
		$(".shareBox").hide();
	});

	//按钮
	$(".btn_lottery").on("click", function(){
		//测试
		if(!canLottery) return showResult1();
		//showResult3(1);
		ACT.lottery(function(r){
			if(r == 0) return showResult2();
			else if(r == 1201) return showResult3(1);
			else if(r == 1202) return showResult3(2);
			else if(r == 20001) return showResult4();
			else return showResult2();
		});
		//showResult1();
	});
	$(".btn_buy").on("click",function(){
		//测试
		 //showResult3(2);
	});



	$(".lottery_cls1").on("click",function(){
		$(".lotteryBox1").hide();
	});
	$(".btn_lottery1").on("click",function(){

	});


	$(".lottery_cls2").on("click",function(){
		$(".lotteryBox2").hide();
	});
	$(".btn_lottery2").on("click",function(){

	});

	$(".lottery_cls3").on("click",function(){
		$(".lotteryBox3").hide();
	});
	$(".btn_lottery3").on("click",function(){
		//formValidate();
		ACT.save();
	});

	$(".lottery_cls4").on("click",function(){
		$(".lotteryBox4").hide();
	});
	/**
	 *	首页上下滑动
	 */
	document.getElementById("wrap_news").addEventListener("touchstart", function(e){ touchStartY = e.changedTouches[0].clientY});
	document.getElementById("wrap_news").addEventListener("touchend", function(e){
		var dis = e.changedTouches[0].clientY - touchStartY;
		console.log(dis);
		if(Math.abs(dis) > 50){
			if(dis > 0){

			}
			if(dis < 0){
				console.log("上滑");
				clearInterval(t);
				$(".wrap_news").hide();
				$(".wrap_hp").show();
			}
			//console.log(3333);
			// if(idx < 0) idx = playList.length - 1;
			// if(idx >= playList.length) idx = 0;
		}
	});

	//音乐按钮
	$(".btn_mus").on("click",function(){
		$(".btn_mus").hide();
		$(".btn_mus_off").show();
		pauseaudio01();

		// if(mus == 0){
		// 	_game.bgmStop();
		// 	mus = 1;
		// }else{
		// 	_game.bgmPlay();
		// 	mus = 0;
		// }
	});
	$(".btn_mus_off").on("click",function(){
		$(".btn_mus_off").hide();
		$(".btn_mus").show();
		playaudio01();
	});


});

//出现得分结果
function showScore(score){
	$(".result_bg").show();
	$(".scroll_text").text("本次得分："+score+"分");
}

 /**
  * 调用抽奖弹窗
  **/
//分数未达标抽奖弹窗
function showResult1(){
	$(".lotteryBox1").show();
}
//未中奖弹窗
function showResult2(){
	$(".lotteryBox2").show();
}
//填写信息弹窗	(参数num: 1/2 对应不同中奖文案);
function showResult3(num){
	$(".lotteryBox3").show();
	$(".ltText").hide();
	$(".lottery_text3_"+num).show();
}
//二维码弹窗
function showResult4(){
	$(".lotteryBox4").show();
}
var _music = null;
//获取并播放音频的方法
function playaudio01(){
	//var audio01 = document.querySelector("#audio_01");
	//audio01.play();
	//_game.bgmPlay();
	_music.play();
}
//暂停音频的方法
function pauseaudio01(){
	//var audio01 = document.querySelector("#audio_01");
	//audio01.currentTime = 0;
	//audio01.pause();
	//_game.bgmStop();
	_music.stop();
}


//提交信息
function formValidate() {
    //姓名
    var namepreg = /^([a-zA-Z]{1,20}|[\u4e00-\u9fa5]{1,10}|[\u4e00-\u9fa5a-zA-Z]{1,20})$/;
    //手机
    var regTel = /^(((17[0-9]{1})|(13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1}))+\d{8})$/;

    var nameval = $(".username").val();
    var nameTest;

    var telval = $(".phone").val();
    var telTest;

    var data = {};
    var val_a = $(".add").val();


    if(nameval == ""){
        alert("请填入姓名");
        return false;
    }else if(nameval != ""){
        nameTest = namepreg.test(nameval);
        if(nameTest == false){
            alert("请填入正确的姓名");
            return false;
        }
    }
    if(telval == ""){
        alert("请填入手机号");
        return false;
    }else if(telval != ""){
        telTest = regTel.test(telval);
        if(telTest == false){
            alert("请填入正确的手机号");
            return false;
        }
    }

    if(val_a == ""){
    	alert("请填写正确的地址");
    	return false;
    }

    else{
        data["name"] = nameval;
        data["tel"] = telval;
        data["add"] = val_a;

        alert("提交成功");
        console.log(data);
	}
}



//-----

var _game = null;
function gameInit () {
	Slam.Preload.load(progress, complete);
}
function progress(e){
	var per = Math.floor(e.loaded * 10000) /100;
	$("#loading").text(Math.floor(per)+"%");
}
function complete(e){
	// $("#loading").css('font-size', '13px');
	$("#loading").text("游戏即将开始");
	_game = new Slam.main($("#slam")[0]);
	_game.addEventListener(Slam.Event.SCORE_ADD, onGameScoreAdd);
	_game.addEventListener(Slam.Event.GAME_INIT, onGameInit);
	_game.addEventListener(Slam.Event.ROUND_START, onRoundStart);
	_game.addEventListener(Slam.Event.GAME_OVER, onGameOver);
	_game.launch();
}
function onGameInit (e) {
	$(".loadingBox").hide();
	_music.play();
}
function onGameScoreAdd(e){
	console.log(e);
	var score = e.data.score;
	var total = e.data.total;
	$(".score .number").text(total);
}
function onRoundStart (e) {
	$(".caption").show();
	var round = e.data;
	$("#surface .caption img").each(function(i, e){
		if(i+1 == round){
			$(e).show();
		}else{
			$(e).hide();
		}
	});
}
var canLottery = false;
function onGameOver (e) {
	var score = e.data;
	showScore(score);
	ACT.setShareContent(score);
	if(score >= 0) ACT.getScore(function(){});
	canLottery = score >= 0 ? true : false;
}

function percent(num){
	var per = 0;
	if(num>=280){
		num = 280;
		per = 99;
	}else if(num<280 && num >=100){
		per = 99 - (280-num)/10;
	}else{
		per = num - 20;
	}
	if(per <= 10){
		per = 10;
	}
	console.log(per);
	return per;
}
