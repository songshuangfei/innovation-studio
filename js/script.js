window.onload=function(){
  var btnjudge=1;

  function cover_animate() {
    $(".word-card").css({"opacity":"0","left":"-50px","transition-duration":"0.4s"});
    $(".link").css({"left":"-50px","opacity":"0","transition-duration":"0.4s"});
    $("#cover-img").css({"left":"100px","opacity":"0","transition-duration":"0.4s"});

    setTimeout(function () {
      $(".word-card").css({"opacity":"1","left":"20px","transition-duration":"0.6s"});
      $("#cover-img").css({"left":"0","opacity":"1","transition-duration":"0.6s"});
      setTimeout(function () {
        $(".link").css({"left":"0","opacity":"1","transition-duration":"0.6s"});
      }, 400);
    }, 400);
  }

  cover_animate();
  $(".btn1,.btn2,.btn3").click(function () {
    cover_animate();
  })

  $(".btn1").click(function () {
    $(this).addClass("btn-active");
    $(".btn2,.btn3").removeClass("btn-active");
    btnjudge=1;

    setTimeout(function () {
      $(".link").css({"background-color":"#ff9c00","box-shadow":"1px 6px 10px rgba(155,95,0,0.8)"});
      $("#cover-img").attr('src',"img/table.png");
      $(".cover-h2").html("创新是进步的动力");
      $(".cover-p").html("创新引领技术的革新<br/>推动行业发展<br>");
      $(".link-link").attr('href',"#part1");
    }, 400);
  })

  $(".btn2").click(function () {
    $(this).addClass("btn-active");
    $(".btn1,.btn3").removeClass("btn-active");
    btnjudge=2;

    setTimeout(function () {
      $(".link").css({"background-color":"#ff28c0","box-shadow":"1px 6px 10px #e107a1"});
      $("#cover-img").attr('src',"img/direction.png");
      $(".cover-h2").html("各式各样的专业方向");
      $(".cover-p").html("各个方向都不相同<br/>但都很重要<br/>缺一不可<br>");
      $(".link-link").attr('href',"#part2");
    }, 400);

  })

  $(".btn3").click(function () {
    $(this).addClass("btn-active");
    $(".btn1,.btn2").removeClass("btn-active");
    btnjudge=3;

    setTimeout(function () {
      $(".link").css({"background-color":"#27a1ff","box-shadow":"1px 6px 10px #056ee4"});
      $("#cover-img").attr('src',"img/event-list.png");
      $(".cover-h2").html("科创室会举行活动");
      $(".cover-p").html("各类软硬件竞赛<br/>学长课堂等<br/>");
      $(".link-link").attr('href',"#part3");
    }, 400);
  })

}


//距顶部判断
var h=$(window).height()-300;

// var int=self.setInterval("part1TopJudge()",500);

function part1TopJudge() {
  var c=$(".part1").offset().top-$(window).scrollTop();
  if(c<h)
  {
    $(".circle-title").css("animation-play-state","running");
    setTimeout(function () {
      $(".get-progress,.innovation,.success,.part1-p,.triangle").css("animation-play-state","running");
    }, 1000);
  }
}

var i=1;//class次序
var s;//clas名


function d_btn() {
  if(i<=8){
    setTimeout(function () {
      s=".d-btn" + i;
      $(s).css("animation-play-state","running");
      i+=1;
      d_btn();   //递归依次修改class
    }, 120);
  }
}

function part2TopJudge() {
  var c=$(".part2").offset().top-$(window).scrollTop();
  if(c<h)
  {
    d_btn();
    $("#part2-h,#part2-p,.intorduce-img").css("animation-play-state","running");
  }
}

function part3TopJudge() {
  var c=$(".part3").offset().top-$(window).scrollTop();
  if(c<(h+100))
  {
    $(".event-list").css("animation-play-state","running");
    setTimeout(function () {
      $(".calendar").css("animation-play-state","running");
    }, 600);
  }
}


//鼠标滚轮
$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie &其它
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
    if (delta > 0) {

    } else if (delta < 0) {
      part1TopJudge();
      part2TopJudge();
      part3TopJudge();
    }
});


//专业方向按键点击

$(".d-btn").click(function () {
  $("#part2-h,#part2-p").css({"left":"-60px","opacity":"0","transition-duration":"0.4s"});
  $(".intorduce-img").css({"right":"-100px","opacity":"0","transition-duration":"0.4s"});
  setTimeout(function () {
    $("#part2-h,#part2-p").css({"left":"0","opacity":"1","transition-duration":"1s"});
    $(".intorduce-img").css({"right":"0","opacity":"1","transition-duration":"1s"});
  }, 400);
})

//每个按键点击的资源链接改变

$(".d-btn1").click(function () {
  setTimeout(function () {
    $("#part2-h").html("安卓");
    $("#part2-p").html("Android是一种基于Linux的自由及开放源代码的操作系统,主要使用于移动设备，如智能手机和平板电脑，由Google公司和开放手机联盟领导及开发。");
    $("#part2-p").css("background-color","#b413b6");
    $(".intorduce-img").attr('src',"img/android.png");
  }, 400);
})

$(".d-btn2").click(function () {
  setTimeout(function () {
    $("#part2-h").html("C++");
    $("#part2-p").html("C++是C语言的继承，它既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。");
    $("#part2-p").css("background-color","#008703");
    $(".intorduce-img").attr('src',"img/cpp.png");
  }, 400);
})

$(".d-btn3").click(function () {
  setTimeout(function () {
    $("#part2-h").html("IOS");
    $("#part2-p").html("苹果公司最早于2007年1月9日的Macworld大会上公布这个系统，最初是设计给iPhone使用的，后来陆续套用到iPod touch、iPad以及Apple TV等产品上。");
    $("#part2-p").css("background-color","#3a72ff");
    $(".intorduce-img").attr('src',"img/ios.png");
  }, 400);
})


//part3 click
$(".event").click(function () {
  $(".window").css("display","block");
})

$(".close-btn").click(function () {
  $(".window").css("display","none");
})

function btnjudge() {
  part1TopJudge();
  part2TopJudge();
  part3TopJudge();
}

$(".link-link").click(function () {
  setTimeout(function () {
    btnjudge();
  }, 200);

})
