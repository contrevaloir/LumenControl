$(document).on("scroll",function(){
			if($(document).scrollTop()>150){ 
				$("header").removeClass("large").addClass("small");
				//$(".subtitle2").css("visibility", "hidden)");
				}
			else{
				$("header").removeClass("small").addClass("large");
				//$(".subtitle1").css("visibility", "visible");
				}
			});

