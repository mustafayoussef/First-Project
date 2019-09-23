



var nvWidth=0;
var $this=true;
$(".strip-header-toggel").click(function(){

if($this)
{
		$(".nav-tab-menu").addClass("open-menu").removeClass("close-menu")
		nvWidth= $(".nav-tab-menu").width() ;
	    $(".strip-header-nav").css("left",nvWidth);
	    $this=!$this;
	    nvWidth=0;
	    $(".fa-align-justify").toggleClass("fa-times");
// for animation
	 var div1 = $(".nav-tab-item .item-"+1);
	var div2 = $(".nav-tab-item .item-"+2);
	var div3 = $(".nav-tab-item .item-"+3);
	var div4 = $(".nav-tab-item .item-"+4);
	var div5 = $(".nav-tab-item .item-"+5);

	div1.animate({ opacity: '1',paddingTop :'20px'}, 1200)
	div2.animate({ opacity: '1',paddingTop :'20px'}, 1300)
	div3.animate({ opacity: '1',paddingTop :'20px'}, 1400);
	div4.animate({ opacity: '1',paddingTop :'20px'}, 1500);
	div5.animate({ opacity: '1',paddingTop : '20px'}, 1600);
}
else
{
	$(".nav-tab-menu").addClass("close-menu").removeClass("open-menu")
	    $(".strip-header-nav").css("left",nvWidth);
	      $(".fa-align-justify").toggleClass("fa-times");
	      // for animation
	      $(".nav-tab-menu  .nav-tab-item li").css({"padding-top":"500px","opacity":"0"});
	    $this=!$this;
}

})

var $current=true;
$(".strip-header-search").click(function(){
  if($current)
   {
	 
  	 $(".search").addClass("open-search").removeClass("close-search");
  	 $(".fa-search").toggleClass("fa-times");
  	 $(".search .inp-search ").animate({ opacity: '1',top:'49%'}, 1400,function()
  	 	{
  	 		$(".search .inp-search ").animate({ opacity: '1',top:'50%'},200);
  	 	});

  	 $current=!$current;
       
   }
    else 
	{
	  $(".search").addClass("close-search").removeClass("open-search")
  	  $(".fa-search").toggleClass("fa-times");
  	 $(".search .inp-search ").css({"top":"200%","opacity":"0"});
  	  $current=!$current;
  	  
       
	}
 })


$(".strip-icon .strip-menu").click(function(){

})

$(".strip-icon .strip-search").click(function(){
	$(".search").addClass("open-search").removeClass("close-search");
  	 $(".fa-search").toggleClass("fa-times");
  	  $(".search .inp-search ").animate({ opacity: '1',top:'49%'}, 1400,function()
  	 	{
  	 		$(".search .inp-search ").animate({ opacity: '1',top:'50%'},200);
  	 	});
})







// var $true=true;
// $(".strip-header-toggel").click(function(){

// if($true){
	

	

//   // for (var i=1;i<7;i++)
//   // { 
//   // 	var s=1200;
//   // 	var div = $(".nav-tab-item .item-"+i);
//   // 	div.animate({ opacity: '1',paddingTop :'20px'}, s)
//   // 	s=s+100
//   // }


// 	$true=!$true;
// }else
//  {
	 	
		
// 	 	$true=!$true;

// }
	

  

  

// }); 


  /*
  if(window.innerWidth<1200)
  {
  	$(".nav-tab-menu").css("display","none")
  }



(function () {
    var width = window.innerWidth;

    window.addEventListener('resize', function () {
       if (window.innerWidth !== width) {
           window.location.reload(true);
           $(".nav-tab-menu").css("display","none")
       }
    });
})();

*/













/*


 var $this=true;
$(".btn-search").click(function()
{
	 if($this)
	 {
	    $(".search").addClass("opened-section");
	     $(".btn-search ,.btn-close-icon").css("z-index","10");
        $(".fa-search").toggleClass("fa-times");
       $this=!$this;
	 }
	 else
	 {
	 	$(".search").removeClass("opened-section");
	 	$(".btn-search ,.btn-close-icon").css("z-index","0");
	 	 $(".fa-search").toggleClass("fa-times");
	 	$this=!$this;
	 }
})
 
 var $current=true;
$(".tab-header-menu").click(function()
{
	 if($current)
	 {
	    $(".home-items").addClass("opened-section");;
	    $(".tab-header-menu").css("z-index","10");
       // $(".fa-search").toggleClass("fa-times");
       $current=!$current;
	 }
	 else
	 {
	 	$(".home-items").removeClass("opened-section");
	 	$(".tab-header-menu").css("z-index","0");
	 	// $(".fa-search").toggleClass("fa-times");
	 	$current=!$current;
	 }
})
 
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: false
});

var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2, {
  relativeInput: false
});









*/