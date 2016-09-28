// JavaScript Document
$(document).ready(function() {
    //***********************************
    //initializing
    //***********************************
    $("[data-toggle=popover]").popover();
    $("[data-toggle=tooltip]").tooltip();
	
	//hide popover on body click
	$('html').on('mouseup', function(e) {
    if(!$(e.target).closest('.popover').length) {
        $('.popover').each(function(){
            $(this.previousSibling).popover('hide');
        });
    }
});
	
	//carousel start
	$('.carousel').carousel({
      interval: 10000
    });
	
	$('.carousel-progress').animate({ width: '100%' }, 10000);
	
	$('.carousel').bind('slide.bs.carousel', function (e) {
  carouselIndication ();
	});
	
	function carouselIndication () {
		$('.carousel-progress').animate({ width: '0%' }, 0);
		$('.carousel-progress').animate({ width: '100%' }, 10000);
		setTimeout(function() {
             $('.carousel-progress').animate({ width: '0%' }, 0);
        }, 10000);
	}
	
	// show hide email notification spinner
	function showhideAlertSpin(widgetName) {
		console.log('#'+widgetName);
		$('#'+widgetName+' .statusAlertButton span.badge').addClass('hide');
		$('#'+widgetName+' .statusAlertButton i').removeClass('hide');
		
		setTimeout(function() {
             $('#'+widgetName+' .statusAlertButton span.badge').removeClass('hide');
		$('#'+widgetName+' .statusAlertButton i').addClass('hide');
        }, 3000);
	}
	
	//carousel end
    //***********************************
    //General
    //***********************************
    /* show hide loader */
    function showhideLoader() {
        //show loader
        $('.loading-overlay').removeClass("hide");
        //hide loader after half second		
        setTimeout(function() {
            $('.loading-overlay').addClass("hide");
        }, 500);
    };
	$(".sso-drag-widget").resizable({
    handles: 's',
	minHeight: 398,
	maxHeight: 750,
    stop: function(event, ui) {
        $(this).css("width", '');
   }
});



//show hide less text
		
	$(".showLessShowMore").shorten({
		showChars: '540',
    moreText: 'Read more',
    lessText: 'Read less'
});

/* show hide system message */
	function showhidetopMessage(msg, className, divID) {
		var strVar="";
strVar += "<div class=\"alert " + className + "\">";
strVar += "	<button type=\"button\" class=\"close\"><span aria-hidden=\"true\">×<\/span><span class=\"sr-only\">Close<\/span><\/button>";
strVar += "	<i class=\"alert-icon alert-icon-success\"><\/i> " + msg + " <\/div";
strVar += ">";

		$(divID).html(strVar);
		$(divID).removeClass("hide");
		        
    };	

	
	
////// Replace heading release text with label ////////////
	function checkHeadingRelease() {
	$( ".caption-subject" ).each(function() {
    var widgetHeading = $(this).text().toLowerCase();		  
	var widgetHeadingLeft = widgetHeading.split('|')[0];
	var widgetHeadingRight = widgetHeading.split('|')[1];
	var myLabel = ""	
    if(widgetHeadingRight === undefined || widgetHeadingRight === null){	
		 myLabel = widgetHeadingLeft;
   } else {	  
	   myLabel = widgetHeadingLeft + "<sup><span class=\"label label-default subtle\">" + widgetHeadingRight + "<\/span><\/sup>";
   }     
   $(this).html(myLabel);   
});
}
	// check if heading has release label	
	checkHeadingRelease();	
	/////////////
	
		
	
    //	disable copy paste
    $('#confirm-username').bind("cut copy paste contextmenu", function(
        e) {
        e.preventDefault();
    });
    //open new window
    function newWindow(url) {
        window.open(url, "PopupWindow",
            "width=600,height=600,scrollbars=yes,resizable=no");
    };
      /* show hide system message */
    function showhideSystemMessage(sysMsgType, msg, time) {
        //$(sysMsgType + " span.#system-msg-text").text();
        $(sysMsgType + " span#system-msg-text").text(msg);
        $(sysMsgType).removeClass("hide");
        //hide loader after half second		
        setTimeout(function() {
            $(sysMsgType).addClass("hide");
        }, time);
    };
    //popover menu
    function popoverMenu(myid, bodyhtml, titlehtml) {
		//console.log('test');
            $(myid).popover({
                html: true,
				container: 'body',
                trigger: 'focus',
                content: function() {
                    return $(bodyhtml).html();
                },
                title: function() {
                    return $(titlehtml).html();
                }
            });
        }
        //height of left link div
    var divHeight = $(".update-area").height();
    $("#left-links").css("min-height", divHeight);
    $("#left-links a").filter(function() {
        return this.href == location.href.replace(/#.*/, "");
    }).parent("div").addClass("active");
    //sequrity questions	
    /*
	function createQuestions () {
		var quotes = new Array("What year did you meet your spouse/partner?", 
		"What was the name of your first school?", 
		"What was the name of your first pet?"),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('.questions').text( randno );
	};
	*/
    //URL redirect
    function getURL(url, time) {
        setTimeout(function() {
            window.location.href = url;
        }, time);
    };
    //URL redirect
    function redirectPage(url) {
        window.location.href = url;
    };
    // get file name from url	
    function getFileName() {
        var fileName = document.location.href.match(/[^\/]+$/)[0];
        //console.log(fileName);
        return fileName;
    };
	
	
	//generate rando 8 digit number
	
	function getRandomNumber() {		
		var randStr = "";
		randStr = Math.floor(Math.random()*90000000) + 10000000;        
        return randStr;
    };
	
	
	
    //add remove hide class
    function addRemoveHide(fileName, myid, myclass) {
        if (getFileName() == fileName) {
            $(myid).removeClass("hide");
        } else {
            $(myid).addClass("hide");
        };
    };
    //add disabled
    function addDisable(fileName, myid, myclass) {
        if (getFileName() == fileName) {
            $(myid).attr("disabled", true);
        } else {
            $(myid).attr("disabled", false);
        };
    };

// open link to parent window
function openInParent(url) {
    window.opener.location.href = url;
   // window.close();
}

    function clearText(myid) {
        $(myid).text('')
    };
	
	
	$('body').on('click', '#smallScreen-btn', function(e) {
		$('#smallScreenButtons').hide();
		$(this).siblings('#smallScreenButtons').slideToggle();
		
			          
    });
	
	
	//***********************************
    //partial profile page
    //***********************************
	
	//Activate modal on partial profile page
    if (getFileName() == 'partial-profile.aspx') {
        $('#activateAccountModal').modal();
		
    }
	
	popoverMenu("#partialProfile-save-btn", "#PartialProfileSetup","#PartialProfileSetupTitle");
	
	$('body').on('click', '#btn-ActivateYourAccount', function(e) {
		
		$('#activateAccountModal').modal('hide');	
		//showhideSystemMessage("#system-msg-success","Your account has been activated.", "5000");	
		
		showhidetopMessage("Your account has been activated.", "alert-success", "#top-dispaly-message");	          
    });
	
	$('body').on('click', '#emailNotification-chk', function(e) {
		
		$('#emailNotifyChoice').slideToggle();
		if($('#alt-emails').val()) {
			$('#secondaryemailGroup').removeClass('hide');
		} else {
		$('#secondaryemailGroup').addClass('hide');	
		}
			          
    });
	
	$('body').on('blur', '#alt-emails', function(e) {
		
		if($('#alt-emails').val()) {
			$('#secondaryemailGroup').removeClass('hide');
		} else {
		$('#secondaryemailGroup').addClass('hide');	
		}
		          
    });
	
	$('body').on('click', '#partialProfile-happy-btn', function(e) {		
		redirectPage("index.aspx");			          
    });
	
	$('body').on('click', '#partialProfile-noemail-btn', function(e) {		
		showhidetopMessage("Please fix the 1 error.", "alert-danger", "#top-dispaly-message");	
		$('#emailNotifyChoice').slideDown();
		$('#emailNotify-chk').prop('checked', true);
		$('#emailNotifyPrimary-chk, emailNotifySecondary-chk').prop('checked', false);	
		$('#emailNotifiactionSelect, #emailNotifiactionSelectChoose').addClass('has-error');
		$('#emailNotificationErrorMsg').removeClass('hide');
			          
    });
	
	//***********************************
    //end
    //***********************************
	
	//********* Email notification modals **************************
	$('body').on('click', '#TM-email-notification, #TM-email-notification1', function(e) {		
		var myVal = $(this).prop("checked");
		var myid = $(this).prop('id');
		//console.log('notification: '+myVal)	
		//console.log($(this).prop('id'))
		$('#emailNotificationValue').html("True");
		$('#emailNotificationSwitch').html(myid);		
		emailNotificationModal (myid, myVal);	          
    });
	
	
	
	
	function emailNotificationModal(switchName, switchValue) {
		if (switchValue == true) {
			$('#emailNotificationHeading').html("Turn on email notifications?");
			$('#emailNotificationText').html("You will receive email notifications to [Insert primary email address] on status changes in your docket.");
		} else {
		$('#emailNotificationHeading').html("Turn off email notifications?");
			$('#emailNotificationText').html("You will no longer receive email notifications to [Insert primary email address] on status changes in your docket.");	
		}	
		
		$('#emailNotification-modal').modal();
	}
	
	
    //show hide top signin link from header toolbar
    if (getFileName() == 'signin.aspx') {
        $('#signInLink').addClass("hide");
    } else {
        $('#signInLink').removeClass("hide");
    }
    //show hide top signin link from header toolbar
    if (getFileName() == 'account-lock.aspx') {
        $('#blueLinks > li').addClass("hide");
        $('#blueLinks').html("<li><a href=''>&nbsp;</a></li>");
    }
    //show hide email change success message on signin page.
    addRemoveHide("signin.aspx?msg=ChangeEmailSuccess",
        "#change-email-success-msg", "");
    //show hide email change success message on signin page.
    addRemoveHide("signin.aspx?msg=ChangePasswordSuccess",
        "#change-password-success-msg", "");
   
   //show my consold heading on  header
    if (getFileName() == 'index.aspx' || getFileName() == 'mockups.aspx') {
       //  $('#myConsoleHeading').removeClass("hide");
	   $('.mainHeaderHeading').text("My Console")
	   $('#headingVersion').removeClass('hide');
    }
  
  //show overlay on overlay help page
  if (getFileName() == 'overlay-help.aspx') {
       //  $('#myConsoleHeading').removeClass("hide");
	    $('.bodyOverlay').removeClass('hide');
		//popoverMenu(".testtest", "#ol-widgetLibrary","#ol-widgetLibrary");
		
		
		//addPopOver("Feespayment-overlay", "bottom", "Go to the USPTO’s new Financial Manager and Patent Maintenance Fees Storefront.", "Fees and payment", "0", "1")
		
    }
	
   function overlayPopover(placement, popoverName) {
	   $('.popover').popover('hide');
		  $(popoverName).popover({
   'placement':placement,
   'content':'Look at me!'
}).popover('show');
   }
   
   function addPopOver(elementID, placement, content, title, leftBtn, rightBtn) {	   
	   $('#'+elementID).attr('rel', 'popover');
	   $('#'+elementID).attr('data-placement', placement);
	   $('#'+elementID).attr('data-content', content);
	   $('#'+elementID).attr('data-original-title', title);   
	   
	   overlayPopover(placement, '#'+elementID);
	   $('.overlayNav.right span').addClass('hide');
		$('.overlayNav.left span').addClass('hide');
	   
	   $('.overlayNav.right span#button'+rightBtn).removeClass('hide');
		$('.overlayNav.left span#button'+leftBtn).removeClass('hide');
		
		$('*').removeClass('overlayBorder');
		$('#'+elementID).addClass('overlayBorder');
		
   }
   
   $('body').on('click', '#dismissOverlay, #dismissOverlayComplete', function(e) {
        $('.popover').popover('hide');
		 $('.overlayNav').addClass('hide');
		 $('.bodyOverlay').addClass('hide');
    });
  
  $('body').on('click', '.overlayNav.right span#button1', function(e) {
        $(this).addClass('hide');
		addPopOver("launchWidgetLibrary-overlay", "bottom", "Customize your My Console page.", "1", "2");
		$('#whatsnew').hide();
		 
    });
	$('body').on('click', '.overlayNav.right span#button2', function(e) {
		
		$('#widgetLibraryModal').modal();		
		$(".bodyOverlay").css({ 'z-index': "900" });
		
		$('#widgetLibraryModal').addClass('helpOverlyModal')
		$(this).addClass('hide');
		addPopOver("addwidget-overlay", "bottom", "After you find one you want, add it to your My Console page and save your settings.", "Add a widget", "2", "3");
          
    });
	$('body').on('click', '.overlayNav.right span#button3', function(e) {
          $(this).addClass('hide');
		addPopOver("removewidget-overlay", "right", "Locate the widget in the library, remove it, and save your settings.", "Remove a widget", "3", "4");
    });
	$('body').on('click', '.overlayNav.right span#button4', function(e) {
          $(this).addClass('hide');
		addPopOver("categorwidget-overlay", "right", "Browse different types of widgets.", "Widget categories", "4", "5");
    });
	$('body').on('click', '.overlayNav.right span#button5', function(e) {
          $('.popover').popover('hide');
		 $('.overlayNav').addClass('hide');
		 $('.bodyOverlay').addClass('hide');
		  $('#widgetLibraryModal').modal('hide');
    });
	//left buttons
	$('body').on('click', '.overlayNav.left span#button1', function(e) {
     
		 $(this).addClass('hide');
		 addPopOver("Feespayment-overlay", "bottom", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Fees and payment", "0", "1")
		 
   
    });
	$('body').on('click', '.overlayNav.left span#button2', function(e) {
         $('#widgetLibraryModal').modal('hide');
		$(this).addClass('hide');
		addPopOver("launchWidgetLibrary-overlay", "bottom", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Add widget", "1", "2");
    });
	$('body').on('click', '.overlayNav.left span#button3', function(e) {
       $(this).addClass('hide');
		addPopOver("addwidget-overlay", "bottom", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Add widget", "2", "3");
   
    });
	$('body').on('click', '.overlayNav.left span#button4', function(e) {
		$(this).addClass('hide');
		addPopOver("removewidget-overlay", "right", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Remove widget", "3", "4");
      
    });
	$('body').on('click', '.overlayNav.left span#button5', function(e) {
		
        $(this).addClass('hide');
		addPopOver("categorwidget-overlay", "right", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", "Change categories", "4", "5");
    });
  
  
  function logoffLinks() {
		 $('.loginName').addClass("hide");
		//$('.headerLogin').removeClass('hide');
		//$('.myCollection').addClass("hide");
		$('.myConsole').addClass("hide");
		$('.myConsole').find('a').removeAttr("href").html("&nbsp;");
	};
	
	
	
	
	//show hide top signin link from header toolbar
	/*if (getFileName() == 'welcome.aspx') {       
		$('.loginName').addClass('hide');
		$('.headerLogin').removeClass('hide');
    }*/
	
	if (getFileName() == 'index.aspx') {       
		$('.blueTutorial').removeClass('hide');
    }
	
	if (getFileName() == 'signin.aspx' || getFileName() == '2ndStepVerification.aspx') {   
	//alert('fda');    
		$('.loginName').parent().addClass('hide');
		$('#sign-in-header').removeClass('hide');
		$('#headerDropdownMenu').addClass('signin');
    }
	
    if (getFileName() == 'welcome.aspx') {       
		logoffLinks();
			$('#headerDropdownMenu').addClass('active');
    } else {
        $('.myCollection, .myConsole, .loginName').removeClass("hide");
		$('.headerLogin').addClass('hide');
    }
	

 function showHideBlueBarLinks() {
	 
	   var myPage = getFileName();
	   
	   myPageLink = myPage.split(".")[0];
	  // console.log(myPageLink);
	   $('.topBlueLinks').html($(".blueLinks-"+myPageLink).html());
	   $('.topBlueLinksLeft').html($(".blueLinksLeft-"+myPageLink).html());
	   $('.mainHeaderHeading').html($(".appHeading-"+myPageLink).html());
	   $('.myCollection').find('a').attr("href", "collections.html?"+myPageLink);
	   
	   var colHeading = myPage.substr(myPage.indexOf("?") + 1)
	   if (myPageLink == 'collections') {
    // var colHeading = myPage.split("?")[1];
	
	  $('#appCollectionName').html($(".appHeading-"+colHeading).html());
	 // console.log ('collection page:' + colHeading)			
    } else {
		 $('#signOutLink').attr("href", myPageLink+".html?logoff");
	}
	   
	  if (myPageLink == 'collections') {
		  $('#signOutLink').attr("href", "collections.html?logoff");
		  
	  }
	  
	  if (colHeading == 'logoff') {
		  logoffLinks();
		  $('.relatedWidgetArea .panel-body').html('<div class="panelBodyHeight text-center"><h3>Create your uspto.gov account</h3><h5>Your account allows you to monitor personalized activities and information important to your intellectual property.</h5><p>&nbsp;</p><a href="login-register.html" class="btn btn-default">Create an account</a><p>&nbsp;</p>Already have an account? <a href="login-register.html">Sign in</a></div>');
	  }
	   
	  // $('#abcd').append(myhtml);
	  // console.log(myhtml);
   }
   
   showHideBlueBarLinks();
   
   // logo change
   $('body').on('click', '.logoChange', function(e) {
	
    $('.uspto-logo').toggleClass('uspto-logo-text');
	
});


//tsdr info msg 



 $('body').on('click', '#tsdrMsg-btn', function(e) {
	
    $('#tsdrMsg').removeClass('hide');
	
});

//***********************************
    //google like menu 
    //***********************************
      
	  // $('body').on('click', '.myWidget', function(e) {
		  // event.preventDefault();
		  // var linkURL =  $(this).find('a').attr('href');
		   //redirectPage(linkURL);
		  // });
	  function addremovebglinkClass(thisObj) {
		 $('#uspto-header-links span').removeClass('toplinkbg') 
		 $(thisObj).parent().addClass('toplinkbg')
	  }
	 	  
   $('body').on('click', '.launchTrademarks', function(e) {
    event.preventDefault();
	addremovebglinkClass($(this));
	$('#Trademark-appLinks').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();
	
	$("#Trademark-appLinks").offset({ top: offset.top + 45});
	$('#Patent-appLinks, #loginBox,#Fees-appLinks, #Faq-appLinks, #userProfileDropdown').fadeOut('fast');
	
    });
	
	$('body').on('click', '.launchPatents', function(e) {
   event.preventDefault();
   addremovebglinkClass($(this));
    $('#Patent-appLinks').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();	
	$("#Patent-appLinks").offset({ top: offset.top + 45});
	
	$('#Trademark-appLinks,  #loginBox, #Fees-appLinks, #Faq-appLinks, #userProfileDropdown').fadeOut('fast');
    });
	
	$('body').on('click', '.launchFees', function(e) {
   event.preventDefault();
   addremovebglinkClass($(this));
    $('#Fees-appLinks').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();	
	$("#Fees-appLinks").offset({ top: offset.top + 45});
	
	$('#Trademark-appLinks,  #loginBox, #Patent-appLinks, #Faq-appLinks, #userProfileDropdown').fadeOut('fast');
    });
	
	$('body').on('click', '.loginName', function(e) {
		//console.log('click on');
   event.preventDefault();
   addremovebglinkClass($(this));
    $('#userProfileDropdown').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();	
	$("#userProfileDropdown").offset({ top: offset.top + 45});
	
	$('#Trademark-appLinks,  #loginBox, #Patent-appLinks, #Faq-appLinks, #Fees-appLinks').fadeOut('fast');
    });
	
	
	
	
		$('body').on('click', '.launchFaqs', function(e) {
   event.preventDefault();
   console.log('test');
   addremovebglinkClass($(this));
    $('#Faq-appLinks').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();	
	$("#Faq-appLinks").offset({ top: offset.top + 45});
	
	$('#Trademark-appLinks,  #loginBox, #Patent-appLinks, #Fees-appLinks ,#userProfileDropdown').fadeOut('fast');
    });
	
	
	
	$('body').on('click', '#launchApps', function(e) {
    $('#appLinks').fadeToggle('slow')
    });
	
	
	
	
	
	
	$('body').on('click', '.headerLogin', function(e) {
		event.preventDefault();
    //$('#loginBox').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();	
	$("#loginBox").offset({ top: offset.top + 50});
	$('#Patent-appLinks, #Trademark-appLinks, #userProfileDropdown, #Fees-appLinks').fadeOut('fast');
    });
	
	/*$('body').on('click', '.loginName', function(e) {
		event.preventDefault();
    $('#userProfileDropdown').fadeToggle('slow');
	var offset = $("#subHeaderHTML .uspto-header-top").offset();	
	$("#userProfileDropdown").offset({ top: offset.top + 45});
	$('#Patent-appLinks, #Trademark-appLinks, #loginBox, #Fees-appLinks').fadeOut('fast');

    });*/
	
	
	
	
	$(window).scroll(function() {
$('#uspto-header-links span').removeClass('toplinkbg');
   $('#Patent-appLinks, #Trademark-appLinks, #loginBox, #userProfileDropdown, #Fees-appLinks').fadeOut('slow');
 //console.log('scroll');
 });
	
	
	$('body').on('click', '#sign-in-header', function(e) {
		showhideLoader();
		setTimeout(function() {
           redirectPage("signin.aspx");
        }, 500);
		
      
    });

//***********************************
    //main page
    //***********************************
	
	$(window).load(function() {
  $("html, body").animate({ scrollTop: '1' }, 10);
});
	
	// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		 //$(".myuspto-logo").addClass("hide");
		 $(".navbar-nav, .navbar-custom").removeClass("hide");
		// $(".navbar-nav").removeClass("hide");
		 
		 
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		//$(".myuspto-logo").removeClass("hide");
		 $(".navbar-nav, .navbar-custom").addClass("hide");
		 
		 
		 
		 
		// $(".navbar-nav").addClass("hide");
    }
	
	
	if ($(this).scrollTop() > 100) {
			//$('#mainHeaderHTML').fadeIn();
			//$('#subHeaderHTML').fadeOut();
		} else {
			//$('#mainHeaderHTML').fadeOut();
			//$('#subHeaderHTML').fadeIn();
		}
});

	
  
   //***********************************
    //Header 
    //***********************************
   
   //application launch popover
   
   $('body').on('click', '#launchApps', function(e) {
        
    //var effect = 'slide';
      //  var options = "right";
   // var duration = 500;
   // $('#appLinks').toggle(effect, options, duration);
	
	$('#appLinks').fadeToggle('slow')
    });
	
	
   $('.collectionHeading').on('click', function(e) {
        $(this).children('i').toggleClass('icon-angle-right icon-angle-down');
    });
   
   //***********************************
    //footer
    //***********************************
      
	  $('body').on('click', '.footerbar', function(e) {
		  console.log('hellow');
		  $('.footerbar-icon').toggleClass('showfooter');
		  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
		   });
   //***********************************
    //Widget action bar
    //***********************************
   
   //collapse and expand action
    $('body').on('click', '.ab-collapse-btn', function(e) {
         $(this).parent().parent().parent().siblings('.card-block').slideToggle();
		 $(this).children('i').toggleClass('icon-chevron-up icon-chevron-down');
		
		 var myTitle =  $(this).attr("data-original-title");
console.log(myTitle);

if(myTitle =='Expand') {
	$(this).attr('data-original-title', 'Collapse');	
	};
	
	if(myTitle =='Collapse') {
		$(this).attr('data-original-title', 'Expand');
			};
		 
		 $(this).tooltip('hide');
    });
	
	
	//full screen widget action
    $('body').on('click', '.ab-fullscreen-btn', function(e) {
         
		 $(this).children('i').toggleClass('icon-expand icon-compress');
		 
		 $("div#announcementsRow").children().toggleClass('col-md-12 col-md-6');
		
		 
		 
		 //console.log($(this).find('div#annRow').children());
		 
		 var myTitle =  $(this).attr("data-original-title");
		 var myCol = $(this).closest('div.card').attr("data-col")
		 $(this).closest('div.card').toggleClass('col'+myCol)
		 //console.log (myCol)


if(myTitle =='Full screen') {
	$(this).attr('data-original-title', 'Exit full screen');
	$('#sortable_panels').addClass('fullscreen');
	$('.card, .panel').addClass('hide');
	$(this).closest('div.card').removeClass('hide').addClass('fulllength');	
	};
	
	if(myTitle =='Exit full screen') {
		$(this).attr('data-original-title', 'Full screen');
		$('#sortable_panels').removeClass('fullscreen');
		$('.card, .panel').removeClass('hide').removeClass('fulllength');
			};
		 
		 $(this).tooltip('hide');
		  
		   $("div.bodyOverlay").toggleClass('hide');
		 
		 var strVar="";
strVar += "<div class=\"closeFullScreen\">";
strVar += "			  <button type=\"button\" class=\"btn btn-lg btn-default  ab-fullscreen-btn\" style=\"";
strVar += "    ";
strVar += "\">Close<\/button><\/div>";
		 
		 $(this).closest('div.card').append(strVar);
		 
    });
	
	
	
	
	 $('body').on('click', '.closeFullScreen', function(e) {
		location.reload();
		}); 
	
	//refresh widget
    $('body').on('click', '.ab-refresh-btn', function(e) {
		
		var strVar="";
			strVar += "<div class=\"widget-progress\">";
			strVar += "<div class=\"loading\">";
			strVar += "<i class=\"loading-icon\"><\/i>";
			strVar += "<\/div>";
			strVar += "<div class=\"text-center text-muted\">Loading...<\/div>";
			strVar += "<\/div>";

 			$(this).parent().parent().siblings('.card-block').addClass('refresh');
			$(this).parent().parent().siblings('.card-block').before(strVar);
			$(this).closest('div.card').attr("id", "refreshwidget")
			
			$(this).tooltip('hide');
			setTimeout(function() {
				//console.log('refrest test');
				$('#refreshwidget .widget-progress').remove();
            $('#refreshwidget .card-block').removeClass('refresh');
			
        }, 1000);
         
    });
	
	//hide widget
    $('body').on('click', '.ab-close-btn', function(e) {
        // $(this).closest('div.card').addClass('hide');
		$('#remove-widget-modal').modal();
		$(this).closest('div.card').addClass("hidewidget");
		
		
    });
	//cancel remove widget	
	$('body').on('click', '.cancelHideWidget', function(e) {
        $('#remove-widget-modal').modal('hide');
		$('.card').removeClass("hidewidget");
		
    });
	
	//remove widget	
	$('body').on('click', '#hideWidgets-btn', function(e) {
        $('#remove-widget-modal').modal('hide');
		$('.card.hidewidget').fadeOut();
		$('#sortable_panels').removeClass('fullscreen');
		$('.card, .panel').removeClass('hide').removeClass('fulllength');
		
    });
	
	
   
   
    //***********************************
    //Create Account Page
    //***********************************
    $('#terms-privacy-chk').on('click', function(e) {
        $("#create-account-btn").attr("disabled", !this.checked);
    });
    $('body').on('click', '#createaccount-happypath-btn', function(e) {
         newWindow("email-Activate-account.aspx");
		redirectPage("create-account-success.aspx");
    });
	
	//***********************************
    //Forgot password Page
    //***********************************
	 $('body').on('click', '#forgotPassword-btn', function(e) {
         newWindow("email-reset-password.aspx");
		//redirectPage("create-account-success.aspx");
    });
	
	//***********************************
    //Personlize widget Page
    //***********************************
   
    $('body').on('click', '#btn-widgetPersonalize', function(e) {
        $(this).addClass('hide');
		$("#btn-widgetPersonalizeDone").removeClass('hide');
		$(".sso-drag-widget").toggleClass('sso-drag-test');
    });
	
	 $('body').on('click', '#btn-widgetPersonalizeDone', function(e) {
        $(this).addClass('hide');
		$("#btn-widgetPersonalize").removeClass('hide');
		$(".sso-drag-widget").toggleClass('sso-drag-test');
    });
	
	
	//***********************************
    //Form finder widget
    //***********************************
	
	
	$("#selectallformsafterSep").select2({
		 placeholder: "Start typing the form name or browse"
		});
		$('#formBundleSelect').select2({
       placeholder: "Start typing the type of transaction or browse"
    });
	
	
	
	$('body').on('change', 'select#formBundleSelect', function(e) {
        
		$('#form-finder-buttons').removeClass('hide');
		$('#form-finder-singleForm').addClass('hide');
		$('#form-finder-groupForm').removeClass('hide');
		
		//$('#selectallformsafterSep').select2().select2('val', $('.select2 option:eq(-1)').val())
		//$("#selectallformsafterSep").select2({
		// placeholder: "Start typing the form name or browse"
		//});
		
		
		$('#afterFormInfo, #AllformsSelect, #formfinderOR').hide();
		//$('#formfinderLabel').removeAttr('style');
		
		
		
		var selectVal = $(this).val();
		var selectDataName = $('select#formBundleSelect option:selected').attr("data-name");
		
		if (selectVal !== '') {
			$('#formBundleHeading, #formBundleTables, #downloadAllForms').removeClass('hide');
		};
		$('#downloadAllForms, .downloadAllPatentForm').attr( 'data-original-title','Download all ' + selectDataName + ' forms');
		
		
		
		
		//$('#formBundleHeading span').html(selectDataName);
		$('#formBundleTables table').addClass('hide');
		$('#'+selectVal).removeClass('hide');
		
		
		
		//console.log('val ' + selectVal);
		//console.log('data name ' + selectDataName);
    });
	
	
	
	$('body').on('change', 'select#selectallformsafterSep', function(e) {
        
		$('#form-finder-buttons').removeClass('hide');
		$('#form-finder-singleForm').removeClass('hide');
		$('#form-finder-groupForm').addClass('hide');
		$('#form-finder-instructions span').addClass('hide');
		
		var selectVal = $(this).val();
		var selectDataName = $('select#selectallformsafterSep option:selected').attr("data-name");
		
		
		//$('#formBundleSelect').select2().select2('val', $('.select2 option:eq(-1)').val())
		//$("#formBundleSelect").select2({
		// placeholder: "Start typing the type of transaction or browse"
		//});
		
		if (selectDataName !== '') {			
			$("span#"+ selectDataName).removeClass('hide');			
		}
		
		
		$('#afterFormInfo, #formgroupSelect, #formfinderOR').hide();
		//$('#formfinderLabel').removeAttr('style');
		
		
		
		
		
		if (selectVal !== '') {
			$('#allformsTables').removeClass('hide');
		};
		
		$('#allformsTables table').addClass('hide');
		$('#'+selectVal).removeClass('hide');
		//console.log('val ' + selectVal);

    });
	
	
	//get url from all forms links
	$('body').on('change', '#selectallformsafterSep1', function(e) {
	          var url = $(this).val(); // get selected value
          if (url) { // require a URL
             // window.location = url; // redirect
			 window.open(url);
          }
          return false;
      });
	
	
	$('body').on('click', '#formfindermoreinfo', function(e) {
      $('#ffInfo').toggleClass('formfinderinformation');
	  $(this).hide();
    });
	
	
	// Fee Schedule
    popoverMenu("#formfinderTaskInformation", "#popover-form-finder-Options","#popover-form-finder-OptionsTitle");
	popoverMenu("#formfinderInformation", "#popover-form-finder-InfoOptions","#popover-form-finder-InfoOptionsTitle");
	
	$('body').on('click', '#downloadAllForms, .downloadAllPatentForm', function(e) {
      getURL("docs/patent-forms.zip")
    });
	
	$('body').on('click', '#applicationAfter', function(e) {
      
	  $('#patentFormMain').fadeOut('fast');
	  $('#patentFormBodyAfter').fadeIn('slow');
	  
    });
	
	$('body').on('click', '#applicationBefore', function(e) {
      
	  $('#patentFormMain').fadeOut('fast');
	  $('#patentFormBodyBefore').fadeIn('slow');
	  
    });
	
	$('body').on('click', '.backtoform', function(e) {
      
	  $('#patentFormBodyAfter').fadeOut('fast');
	  $('#patentFormBodyBefore').fadeOut('fast');
	  $('#patentFormMain').fadeIn('slow');
	 // $('#afterFormInfo, #AllformsSelect, , #formgroupSelect, #formfinderOR').hide();
	  
    });
	
	
	
	
    //***********************************
    //Forgot Password Page
    //***********************************
    function isValidEmailAddress(emailAddress) {
        var pattern =
            /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };
    $('body').on('keypress', '#forgotEmail', function(e) {
        var emailaddress = $(this).val();
        if (isValidEmailAddress(emailaddress)) {
            $(this).parent().removeClass('has-error');
            $(this).siblings('div').addClass('hide');
            $("#forgotPassword-btn").removeAttr('disabled')
        } else {
            $(this).parent().addClass('has-error');
            $(this).siblings('div').removeClass('hide');
            $("#forgotPassword-btn").attr("disabled", 'True');
        };
    });
    //***********************************
    //Profile Page
    //***********************************
	//popover on phone input
    popoverMenu("#phoneNumber", "#popover-phoneNumber-Options","#1popover-phoneNumber-OptionsTitle");
	
	
    $('body').on('click', '#saveProfile-happy-path', function(e) {
        newWindow("email-ChangeProfile.aspx");
        showhideSystemMessage("#system-msg-success",
            "Your updates have been saved.", "5000");
    });
    $('body').on('click', '#saveProfile-ict-down', function(e) {
        showhideSystemMessage("#system-msg-danger",
            "We are having technical difficulties. Please try again later.",
            "5000");
    });
    $('body').on('click', '.close', function(e) {
        $(this).parent("div.toast-content").parent("div.toast")
            .addClass("hide");
    });
	
	$('body').on('click', '.cancel-btn', function(e) {
       redirectPage("index.aspx");
    });
	
	
    //show  email change success message on profile page.
    addRemoveHide("profile.aspx?msg=updatedEmail",
        "#updated-email-success-msg", "");
    //show change password button disable message on profile page.
    //addRemoveHide("profile.aspx?msg=updatedEmail", "#chg-password-msg", "");
    //disabled password button on profile page.
    //addDisable("profile.aspx?msg=updatedEmail", "#change-password-btn", "")
    //
    if (getFileName() == "profile.aspx?msg=updatedEmail" || getFileName() ==
        "partial-profile.html?msg=SQfailure") {
        $('#cancel-sq-Btn').addClass('hide');
        $('#modal-close-btn').addClass('hide');
        $('#msg-change-sq').addClass('hide');
        $(
            '.body-required-email-sq-msg, .body-required-email-sq, .change-email-option-cp'
        ).addClass('hide');
        $(
            '.body-required-email, #change-email-option, #currentPassword-btn'
        ).removeClass('hide');
        $('#changeEmail-SecurityQuestions div.alert').removeClass(
            'hide');
        $('#securityQuestionsModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    }
    $('#change-email-btn').on('click', function(e) {
        $('#change-email-modal').modal();
    });
	
	
	
	
    //change security questions modal
    $('#change-sq-btn').on('click', function(e) {
        $('#securityQuestionsModal').modal();
        $('#cancel-sq-Btn').removeClass('hide');
        $('#modal-close-btn').removeClass('hide')
        $('#msg-change-sq').removeClass('hide');
        $('#changeEmail-SecurityQuestions div.alert').addClass(
            'hide');
        $('#securityQuestionsModal h3.modal-title').html(
            'Change your security questions');
    });
    //change password modal
    $('#change-password-btn').on('click', function(e) {
        $('#change-password-modal').modal();
    });
    // change personal information modal
    $('#change-pi-btn').on('click', function(e) {
        $('#change-personal-modal').modal();
    });
    // change contact information modal
    $('#change-ci-btn').on('click', function(e) {
        $('#change-contact-modal').modal();
    });
    //popover on button
    popoverMenu("#change-email-option", "#popoverChangeEmailOptions",
        "#popoverChangeEmailOptionsTitle");
    //
    popoverMenu("#currentPassword-btn",
        "#popoverSecurityQuestionsOptions",
        "#popoverSecurityQuestionsTitle");
    // Create Account
    popoverMenu("#create-account-btn", "#popoverCreateAccount",
        "#popoverCreateAccountTitle");
    // Create Account
    popoverMenu("#changePassword-btn",
        "#popover-change-password-Options",
        "#popover-change-password-OptionsTitle");
    // Save Profile
    popoverMenu(".save-btn", "#popover-save-profile-Options",
        "#popover-save-profile-OptionsTitle");
		
		// Fee Schedule
    popoverMenu("#feeScheduleInformation", "#popover-fee-schdule-Options","#popover-fee-schdule-OptionsTitle");
		
    $('body').on('click', '#bigBtn', function(e) {
        $('p.clearfix a').addClass('btn-lg');
        removeHideClass();
    });
    $('body').on('click', '#leftBtn', function(e) {
        $('p.clearfix a').removeClass('pull-right');
        $('p.clearfix a').addClass('pull-left');
        removeHideClass();
    });
    $('body').on('click', '#centerBtn', function(e) {
        $('p.clearfix a').removeClass('pull-right');
        $('p.clearfix a').removeClass('pull-left');
        $('p.clearfix a').parent().addClass('text-center');
        removeHideClass();
    });
    $('body').on('click', '#rightBtn', function(e) {
        $('p.clearfix a').removeClass('pull-left');
        $('p.clearfix a').addClass('pull-right');
        removeHideClass();
    });
    $('body').on('click', '#defaultBtn', function(e) {
        $('p.clearfix a').removeClass('btn-lg');
        $('p.clearfix a').removeClass('btn-block');
        removeHideClass();
    });
    $('body').on('click', '#borderNoneBtn', function(e) {
        $('p.clearfix a').addClass('border-none');
        removeHideClass();
    });
    $('body').on('click', '#blockBtn', function(e) {
        $('p.clearfix a').addClass('btn-block');
        removeHideClass();
    });
    $('body').on('click', '#fixedBtn', function(e) {
        $('.btn-fixed').removeClass('hide');
        $('p.clearfix').addClass('hide');
    });

    function removeHideClass() {
        $('.btn-fixed').addClass('hide');
        $('p.clearfix').removeClass('hide');
    }
    $('body').on('click', '#mainBtn', function(e) {
        //$('p.clearfix a').addClass('btn-block');
        removeHideClass();
        $("p.clearfix a").each(function() {
            var value = $(this).attr("class");
            console.log(value);
            value = value.replace("-outline", "");
            console.log(value);
            $(this).attr("class", "");
            $(this).attr("class", value);
            // var v = this.replace("-outline", "");
            //$(this).attr("class", v);
        });
        // console.log(get);
    });
    // color change
    $(".basicColorChange").spectrum({
        color: "#b7c1cf",
        change: function(color) {
            $("#mainArea").css("background-color", color.toHexString());
        }
    });

    function addremovetext(myid, msg) {
        $(myid).removeClass('hide');
        $(myid + ' span').text(msg);
    };
    $('body').on('click', '#cancel-changeEmail-Btn', function(e) {
        $('#change-email-modal').modal('hide');
        clearText('#change-email-valid-email');
        clearText('#change-email-unique-email');
        $('#msg-change-email').addClass('hide');
        $('#change-email-modal .form-group').removeClass(
            "has-error");
        $('.body-required-email-sq, .change-email-option-cp').removeClass(
            'hide');
        $(
            '.body-required-email-sq-msg, .body-required-email, #change-email-option'
        ).addClass('hide');
    });
    $('body').on('click', '#chg-eml-happy', function(e) {
        newWindow("email-ChangeEmail.aspx");
        redirectPage("signin.aspx?msg=ChangeEmailSuccess");
    });
    $('body').on('click', '#chpass-happy-path', function(e) {
        // redirectPage("signin.aspx?msg=ChangePasswordSuccess")
        $('#change-password-modal').modal('hide');
        showhideSystemMessage("#system-msg-success",
            "Your password has been changed.", "5000");
        newWindow("email-ChangePassword.aspx");
    });
    $('body').on('click', '#chg-eml-notemail', function(e) {
        $('#change-email-modal .form-group').removeClass(
            "has-error");
        $('#change-email-modal .form-group').addClass(
            "has-error");
        $('#confirm-username').parent('div').removeClass(
            "has-error");
        $('#change-email-valid-email').parent().removeClass(
            'hide');
        addremovetext('#msg-change-email',
            "Please fix the 1 error.")
        clearText('#change-email-valid-email');
        clearText('#change-email-unique-email');
        $('#change-email-valid-email').text(
            'This email address is not valid.')
    });
    $('body').on('click', '#chg-eml-required', function(e) {
        $('#change-email-modal .form-group').removeClass(
            "has-error");
        $('#change-email-modal .form-group').addClass(
            "has-error");
        $('#change-email-valid-email').parent().removeClass(
            'hide');
        $('#change-email-unique-email').parent().removeClass(
            'hide');
        addremovetext('#msg-change-email',
            "Please fix the 2 errors.")
        clearText('#change-email-valid-email');
        clearText('#change-email-unique-email');
        $('#change-email-valid-email').text(
            'This field is required.')
        $('#change-email-unique-email').text(
            'This field is required.')
    });
    $('body').on('click', '#chg-eml-notunique', function(e) {
        $('#change-email-modal .form-group').removeClass(
            "has-error");
        $('#change-email-modal .form-group').addClass(
            "has-error");
        $('#confirm-username').parent('div').removeClass(
            "has-error");
        $('#change-email-valid-email').parent().removeClass(
            'hide');
        addremovetext('#msg-change-email',
            "Please fix the 1 error.")
        clearText('#change-email-valid-email');
        clearText('#change-email-unique-email');
        $('#change-email-valid-email').text(
            'The email address you entered has already been used.'
        )
    });
    $('body').on('click', '#chg-eml-notmatch', function(e) {
        $('#change-email-modal .form-group').removeClass(
            "has-error");
        $('#change-email-modal .form-group').addClass(
            "has-error");
        $('#username').parent('div').removeClass("has-error");
        $('#change-email-unique-email').parent().removeClass(
            'hide');
        addremovetext('#msg-change-email',
            "Please fix the 1 error.")
        clearText('#change-email-valid-email');
        clearText('#change-email-unique-email');
        $('#change-email-unique-email').text(
            'Both email addresses must match.')
    });
    $('body').on('click', '#chg-eml-notusptoemail', function(e) {
        $('#change-email-modal .form-group').removeClass(
            "has-error");
        $('#change-email-modal .form-group').addClass(
            "has-error");
        $('#confirm-username').parent('div').removeClass(
            "has-error");
        $('#change-email-valid-email').parent().removeClass(
            'hide');
        addremovetext('#msg-change-email',
            "Please fix the 1 error.")
        clearText('#change-email-valid-email');
        clearText('#change-email-unique-email');
        $('#change-email-valid-email').text(
            'Email cannot end with uspto.gov.')
    });
    $('body').on('click', '#chpass-password-required', function(e) {
        $('#change-password-modal .form-group').removeClass(
            "has-error");
        $('#change-password-modal .form-group').addClass(
            "has-error");
        addremovetext('#msg-change-password',
            "Please fix the 3 errors.");
        $(
            '#txt-current-password, #txt-password, #txt-retype-password'
        ).text('This field is required.');
        $("input#password").val("");
        $("input#retype-password").val("");
    });
    $('body').on('click', '#chpass-wrong-current', function(e) {
        $('#change-password-modal .form-group').removeClass(
            "has-error");
        $('#change-password-modal #current-password').parent(
            '.form-group').addClass("has-error");
        addremovetext('#msg-change-password',
            "Please fix the 1 error.");
        $('#txt-current-password').text(
            'The password you entered is incorrect.');
        $("input#password").val("MyNewPassword1$");
        $("input#retype-password").val("MyNewPassword1$");
    });
    $('body').on('click', '#chpass-invalid-new', function(e) {
        $('#change-password-modal .form-group').removeClass(
            "has-error");
        $(
            '#change-password-modal #password, #change-password-modal #retype-password'
        ).parent('.form-group').addClass("has-error");
        addremovetext('#msg-change-password',
            "Please fix the 2 errors.");
        $(
            '#txt-current-password, #txt-password, #txt-retype-password'
        ).text('This password is not valid.');
        $("input#password").val("MyNewPassword1$");
        $("input#retype-password").val("MyNewPassword1$");
    });
    $('body').on('click', '#cp-password-required', function(e) {
        $('.body-required-email-sq .form-group').removeClass(
            "has-error");
        $('.body-required-email-sq .form-group').addClass(
            "has-error");
        addremovetext('.currentPassReq',
            "Please fix the 1 error.");
        $('.current-pass-req').text('This field is required.');
    });
    $('body').on('click', '#cp-wrong-password', function(e) {
        $('.body-required-email-sq .form-group').removeClass(
            "has-error");
        $('.body-required-email-sq .form-group').addClass(
            "has-error");
        addremovetext('.currentPassReq',
            "Please fix the 1 error.");
        $('.current-pass-req').text(
            'The password you entered is incorrect.');
    });
    $('body').on('click', '#security-question-happy', function(e) {
        //redirectPage("profile.aspx");
        $('#securityQuestionsModal').modal('hide');
        showhideSystemMessage("#system-msg-success",
            "Your security questions has been saved.",
            "5000");
        if (getFileName() ==
            "partial-profile.aspx?msg=SQfailure") {} else {
            newWindow("email-SecurityQuestions.aspx");
        }
    });
    $('body').on('click', '#security-question-QuesErrors', function(e) {
        $('#changeEmail-SecurityQuestions div.alert').removeClass(
            'hide');
        $('#changeEmail-SecurityQuestions div.alert span').text(
            "Please fix the 6 errors.");
        $('#securityQuestionsModal .form-group').removeClass(
            "has-error");
        //console.log($("#securityQuestionsModal select[name='question1']").val());
        if ($(
            "#securityQuestionsModal select[name='question1']"
        ).val() === "") {
            $('#securityQuestionsModal .form-group').addClass(
                "has-error");
        };
        if ($(
            "#securityQuestionsModal select[name='question2']"
        ).val() === "") {
            $('#securityQuestionsModal .form-group').addClass(
                "has-error");
        };
        if ($(
            "#securityQuestionsModal select[name='question2']"
        ).val() === "") {
            $('#securityQuestionsModal .form-group').addClass(
                "has-error");
        };
        $('#securityQuestionsModal select').on('change',
            function() {
                if ($(this).val() === "") {
                    $(this).parent().addClass("has-error");
                } else {
                    $(this).parent().removeClass(
                        "has-error");
                };
            });
        //if input is empty in security questions
        $('#securityQuestionsModal input').blur(function() {
            if ($(this).val()) {
                $(this).parent().removeClass(
                    "has-error");
            } else {
                $(this).parent().addClass("has-error");
            }
        });
        //
    });
    $('body').on('click', '#security-question-sysErrors', function(e) {
        $('#changeEmail-SecurityQuestions div.alert').removeClass(
            'hide');
        $('#securityQuestionsModal div.form-group').removeClass(
            "has-error")
        $('#changeEmail-SecurityQuestions div.alert span').text(
            "There was an error while trying to save your security questions, please try again."
        );
    });
    //sequrity questions
    // Create Account
    popoverMenu(".change-email-option-cp", "#popoverCP-Options",
        "#popoverCP-OptionsTitle");
    $('body').on('click', '#cp-happy-path', function(e) {
        $('.body-required-email-sq-msg, .body-required-email-sq, .change-email-option-cp'
        ).addClass('hide');
        $('.body-required-email, #change-email-option, #currentPassword-btn'
        ).removeClass('hide');
		$('#securityQuestionsModal .modal-dialog').removeClass('modal-md').addClass('modal-lg');
    });
    $('body').on('click', '#cp-wrong-password', function(e) {
        console.log('wrong passowrd');
    });
    $('body').on('click', '#cp-five-attempts', function(e) {
        redirectPage("account-lock.aspx");
        /*
		$('.body-required-email-sq').addClass('hide');
		$('.body-required-email-sq-msg').removeClass('hide');
		//$('.change-email-option-cp').attr('disabled','disabled')
		$('.change-email-option-cp').addClass('hide');
		
		$('#failed-attempt-msg').removeClass('hide');
		$('#change-email-btn, #change-sq-btn, #change-password-btn').attr("disabled", true);
		$('#change-email-modal, #securityQuestionsModal').modal('hide');
		*/
    });
    $('body').on('click', '#chpass-five-attempts', function(e) {
        redirectPage("account-lock.aspx");
        /*
		$('#failed-attempt-msg').removeClass('hide');
		$('#change-email-btn, #change-sq-btn, #change-password-btn').attr("disabled", true);
		$('#change-password-modal').modal('hide');
		
		*/
    });
    /*$('body').on('click', '#sq-first-wrong', function (e) {
		$('.questions').text('What was the name of your first school?');
	});*/
    $('body').on('click', '#sq-second-wrong', function(e) {
        $('.questions').text(
            'What was the name of your first pet?');
    });
    $('body').on('click', '#sq-third-wrong', function(e) {
        $('.body-required-email-sq').addClass('hide');
        $('.body-required-email-sq-msg').removeClass('hide');
        //$('.change-email-option-cp').attr('disabled','disabled')
        $('.change-email-option-cp').addClass('hide');
    });
    // add more address line link-button
    $('#address2').on('keyup', function(event) {
        var len = $(this).val().length;
        if (len > 0) {
            $('#add-address-text').removeClass('hide');
        } else {
            $('#add-address-text').addClass('hide');
        }
    });
    //***********************************
    //Sign in Page
    //***********************************
	
	
	$('body').on('click', '#usptoEmployee, #btn-usptoEmployee', function(e) {
        $('#msg-usptoEmployee').slideToggle();
    });
	
	
    //popover on button
    //popoverMenu("#new-signin-btn","#popoverSigninOptions", "#popoverSigninOptionsTitle"); 
    popoverMenu("#sign-in-btn", "#SigninOptions", "#SigninOptionsTitle");
	popoverMenu("#usptoEmployee-btn", "#USPTOEmployeeOptions", "#USPTOEmployeeOptionsTitle");
    $('body').on('click', '#login-updatedemail-btn', function(e) {
        redirectPage("profile.aspx?msg=updatedEmail")
    });
    $('body').on('click', '#login-authenticate-btn', function(e) {
        redirectPage("index.aspx");
    });
    $('body').on('click', '#login-sq-failure-btn', function(e) {
        redirectPage("partial-profile.aspx?msg=SQfailure")
    });
    //***********************************
    //TPAC
    //***********************************
    //TMNG IDM Record Suggestion Form
    popoverMenu("#idm-btn", "#idmOptions", "#idmOptionsTitle");
    $('body').on('click', '#idm-happy-btn', function(e) {
        $('#idm-form .idm-required').removeClass("has-error");
        addremovetext('#msg-idm-success',
            "Your suggestion has been sent.");
        $('#txt-IDM-descrip, #txt-IDM-class, #msg-idm-required')
            .addClass("hide");
    });
    $('body').on('click', '#idm-required-btn', function(e) {
        $('#idm-form .idm-required').removeClass("has-error");
        $('#idm-form .idm-required').addClass("has-error");
        addremovetext('#msg-idm-required',
            "Please fix the 2 errors.");
        $('#txt-IDM-descrip, #txt-IDM-class').text(
            'This field is required.');
        $('#txt-IDM-descrip, #txt-IDM-class, #msg-idm-required')
            .removeClass("hide");
        //$("input#password").val("");
        //$("input#retype-password").val("");			
    });
    //USPTO Automated Interview Request (AIR) Form
    popoverMenu("#air-btn", "#airOptions", "#airOptionsTitle");
    $('body').on('click', '#air-happy-btn', function(e) {
        $('#air-form .air-required').removeClass("has-error");
     
        addremovetext('#msg-air-success',
            "Your request form has been sent.");
        $('#txt-air-descrip, #txt-air-class, #msg-air-required, .txt-air-req')
            .addClass("hide");
    });
    $('body').on('click', '#air-required-btn', function(e) {
        $('#air-form .air-required').removeClass("has-error");
        $('#air-form .air-required').addClass("has-error");
        addremovetext('#msg-air-required',
            "Please fix the 6 errors.");
        $('.txt-air-req').text('This field is required.');
        $('#txt-air-descrip, #txt-air-class, #msg-air-required')
            .removeClass("hide");
        //$("input#password").val("");
        //$("input#retype-password").val("");	
		
		 $('#msg-air-success')
            .addClass("hide");
    
    });
   
   
    //Trademark post registration docket
    popoverMenu("#dockpost-btn", "#dockpostOptions",
        "#dockpostOptionsTitle");
    $('body').on('click', '#dockpost-colalreadyadd', function(e) {
        $('.dockpost-initial').addClass("hide");
        $('.dockpost-or').removeClass("hide");
    });
    $(".select-dockpost").change(function() {
        $('.dockpost-or').addClass("hide");
        $('.dockpost-david').removeClass("hide");
    });
    $('body').on('click', '.dockpost-initialsave', function(e) {
        addremovetext('#msg-post-success',
            "Collection created.", "7000");
    });
    $('body').on('click', '.dockpost-addtrade', function(e) {
        addremovetext('#msg-post-success',
            "Trademark registration added.", "7000");
    });
    $('body').on('click', '.dockpost-deletecoltrade', function(e) {
        addremovetext('#msg-post-success',
            "Trademark registration deleted.", "7000");
    });
    $('body').on('click', '.dockpost-deletecol', function(e) {
        addremovetext('#msg-post-success',
            "Collection deleted.", "7000");
    });
    $('body').on('click', '.dockpost-editcol', function(e) {
        addremovetext('#msg-post-success', "Collection saved.",
            "7000");
    });
    $('body').on('click', '#dockpost-tradesearch', function(e) {
        $('.dockpost-tradesearchtab').removeClass("hide");
    });
    $("#txt_dockpostname").keyup(function() {
        var value = $(this).val();
        $("span.txt_dockpostvalue").text(value);
    });
    //Different modals
    $('#dockpost-collect').modalSteps({
        'completeCallback': function() {
            $('.dockpost-initial, .dockpost-or').addClass(
                "hide");
            $('.dockpost-david').removeClass("hide");
            addremovetext('#msg-post-success',
                "Collection created", "7000");
        }
    });
    //Collection name on sentence
    $("#txt_dockpostname").keyup(function() {
        var value = $(this).val();
        $("span.txt_dockpostvalue").text(value);
    });
 
	
	//Patent docket
	   //Search dropdown
    $(".dockpost-dropdown li a").click(function() {
        $(".dockpost-dropdownbtn:first-child").text($(this).text());
        $(".dockpost-dropdownbtn:first-child").val($(this).text());
        $(".dockpost-dropdownbtn:first-child").append(
            " <span class='caret'></span>");
    });
		$(".appdrop").click(function(){
    $("#msg-patdock-help").text("Example: 99999999 or 99/999999");
});
	$(".patdrop").click(function(){
    $("#msg-patdock-help").html("Example: Utility - 9,999,999 or 9999999  <a href='javascript::;' type='button' class='patMoreHelp bold'>...<span class='sr-only'>More help</span></a><br><span  class='hide' id='patMoreHelpText'>Design - D999,999 or D999999<br>Plant - PP9,999 or PP9999<br>Reissue - RE99,999 or RE99999<br>Def. Pub. - T999,999 or T999999<br>SIR - H9,999 or H9999</span>");
});


$('body').on('click', '.patMoreHelp', function(e) {
      // $("#patMoreHelpText").slideToggle();
	   $("#patMoreHelpText").toggleClass('hide');
    });


	$(".pctdrop").click(function(){
    $("#msg-patdock-help").text("Example: PCT/CCYY/99999 or PCT/CCYYYY/999999");
});


$(".appdrop-app").click(function(){
    $("#msg-patdock-help-app").text("Example: 99999999 or 99/999999");
});
	$(".patdrop-app").click(function(){
    $("#msg-patdock-help-app").html("Example: Utility - 9,999,999 or 9999999  <a href='javascript::;' type='button' class='patMoreHelp-app bold'>...<span class='sr-only'>More help</span></a><br><span  class='hide' id='patMoreHelpText-app'>Design - D999,999 or D999999<br>Plant - PP9,999 or PP9999<br>Reissue - RE99,999 or RE99999<br>Def. Pub. - T999,999 or T999999<br>SIR - H9,999 or H9999</span>");
});


$('body').on('click', '.patMoreHelp-app', function(e) {
      // $("#patMoreHelpText").slideToggle();
	   $("#patMoreHelpText-app").toggleClass('hide');
    });


	$(".pctdrop-app").click(function(){
    $("#msg-patdock-help-app").text("Example: PCT/CCYY/99999 or PCT/CCYYYY/999999");
});
    popoverMenu(".dockapppat-btn", "#dockapppatOptions",
        "#dockapppatOptionsTitle");
    $('body').on('click', '#dockapppat-colalreadyadd', function(e) {
       // $('.dockapp-initial').addClass("hide");
        $('#pat-docket-main-already, #pat-main-status').removeClass("hide");
		 $('.dockapppat-david, #pat-docket-main').addClass("hide");
		 //showhideAlertSpin('PATappDocket');
		
    });
	
	
  
	$(".select-dockapppat a").click(function() {
        $('.dockapppat-or').addClass("hide");
        $('.dockapppat-david').removeClass("hide");
		$('.dockapppat-initial').addClass("hide");
		//showhideAlertSpin('TMappDocket');
    });
	
    $('body').on('click', '.dockapppat-initialsave', function(e) {
        addremovetext('#msg-apppat-success',
            "Collection createdtest.", "7000");
    });
    $('body').on('click', '.dockapppat-addtrade', function(e) {
        addremovetext('#msg-apppat-success',
            "Application or patent added.", "7000");
    });
    $('body').on('click', '.dockapppat-deletecoltrade', function(e) {
        addremovetext('#msg-apppat-success',
            "Application or patent deleted.", "7000");
    });
    $('body').on('click', '.dockapppat-deletecol', function(e) {
        addremovetext('#msg-apppat-success',
            "Collection deleted.", "7000");
    });
    $('body').on('click', '.dockapppat-editcol', function(e) {
        addremovetext('#msg-apppat-success', "Collection saved.",
            "7000");
    });
    $('body').on('click', '#dockapppat-tradesearch', function(e) {
        $('.dockapppat-tradesearchtab').removeClass("hide");
    });
    $("#txt_dockapppatname").keyup(function() {
        var value = $(this).val();
        $("span.txt_dockapppatvalue").text(value);
    });
    //Different modals
    $('#dockapppat-collect').modalSteps({
        'completeCallback': function() {
            $('.dockapppat-initial, .dockapppat-or').addClass(
                "hide");
            $('.dockapppat-david').removeClass("hide");
            addremovetext('#msg-apppat-success',
                "Collection created", "7000");
        }
    });
    //Collection name on sentence
    $("#txt_dockapppatname").keyup(function() {
        var value = $(this).val();
        $("span.txt_dockapppatvalue").text(value);
    });
    //Search dropdown
    $(".dockapppat-dropdown li a").click(function() {
        $(".dockapppat-dropdownbtn:first-child").text($(this).text());
        $(".dockapppat-dropdownbtn:first-child").val($(this).text());
        $(".dockapppat-dropdownbtn:first-child").append(
            " <span class='caret'></span>");
    });
	
	
	    //Trademark application docket
    popoverMenu(".dockapp-btn", "#dockappOptions",
        "#dockappOptionsTitle");
    $('body').on('click', '#dockapp-colalreadyadd', function(e) {
       // $('.dockapp-initial').addClass("hide");
        $('#tm-docket-main-already, #tm-main-status').removeClass("hide");
		 $('.dockapp-david, #tm-docket-main').addClass("hide");
		// showhideAlertSpin('TMappDocket');
		
    });
    $(".select-dockapp a").click(function() {
        $('.dockapp-or').addClass("hide");
        $('.dockapp-david').removeClass("hide");
		$('.dockapp-initial').addClass("hide");
		//showhideAlertSpin('TMappDocket');
    });
    $('body').on('click', '.dockapp-initialsave', function(e) {
        addremovetext('#msg-app-success',
            "Collection createdtest.", "7000");
    });
    $('body').on('click', '.dockapp-addtrade', function(e) {
        addremovetext('#msg-app-success',
            "Trademark application added.", "7000");
    });
    $('body').on('click', '.dockapp-deletecoltrade', function(e) {
        addremovetext('#msg-app-success',
            "Trademark application deleted.", "7000");
    });
    $('body').on('click', '.dockapp-deletecol', function(e) {
        addremovetext('#msg-app-success',
            "Collection deleted.", "7000");
    });
    $('body').on('click', '.dockapp-editcol', function(e) {
        addremovetext('#msg-app-success', "Collection saved.",
            "7000");
    });
    $('body').on('click', '#dockapp-tradesearch', function(e) {
        $('.dockapp-tradesearchtab').removeClass("hide");
    });
    $("#txt_dockappname").keyup(function() {
        var value = $(this).val();
        $("span.txt_dockappvalue").text(value);
    });
    //Different modals
    $('#dockapp-collect').modalSteps({
        'completeCallback': function() {
            $('.dockapp-initial, .dockapp-or').addClass(
                "hide");
            $('.dockapp-david').removeClass("hide");
            addremovetext('#msg-app-success',
                "Collection created", "7000");
        }
    });
    //Collection name on sentence
    $("#txt_dockappname").keyup(function() {
        var value = $(this).val();
        $("span.txt_dockappvalue").text(value);
    });
    //Search dropdown
    $(".dockapp-dropdown li a").click(function() {
        $(".dockapp-dropdownbtn:first-child").text($(this).text());
        $(".dockapp-dropdownbtn:first-child").val($(this).text());
        $(".dockapp-dropdownbtn:first-child").append(
            " <span class='caret'></span>");
    });
	
		    //Trademark Official Gazette watch
			
			$('body').on('change', '#FieldsToSearch input[type="checkbox"]', function(e) {
		var checked = $("#FieldsToSearch input:checked").length > 0;
    if (!checked){
		
		$('.js-btn-step').attr("disabled", true);
		$('#err-FieldsToSearch').removeClass('hide');
		$('#bck-FieldsToSearch').addClass('redBorder');
       $('#help-FieldsToSearch').removeClass('help-block').addClass('text-danger');
        return false;
    } else {
		$('.js-btn-step').attr("disabled", false);
		$('#err-FieldsToSearch').addClass('hide');
		$('#bck-FieldsToSearch').removeClass('redBorder');
		$('#help-FieldsToSearch').addClass('help-block').removeClass('text-danger');
		return false;
	}
		});
		
		$('body').on('change', '#FieldsToSearch1 input[type="checkbox"]', function(e) {
		var checked = $("#FieldsToSearch1 input:checked").length > 0;
    if (!checked){
		
		$('.tmog-addwatch').attr("disabled", true);
		$('#err-FieldsToSearch1').removeClass('hide');
		$('#bck-FieldsToSearch1').addClass('redBorder');
		$('#help-FieldsToSearch1').removeClass('help-block').addClass('text-danger');
       
        return false;
    } else {
		$('.tmog-addwatch').attr("disabled", false);
		$('#err-FieldsToSearch1').addClass('hide');
		$('#bck-FieldsToSearch1').removeClass('redBorder');
		$('#help-FieldsToSearch1').addClass('help-block').removeClass('text-danger');
		return false;
	}
		});
			
			
			$('body').on('click', '#tmog-collect .js-btn-step[data-orientation=next]', function(e) {
     console.log ("Next screen");
	 $("#tmog-collect .modal-dialog").css({"width":"98%", "height":"98%", "padding": "0"});
	 	 
    });
	$('body').on('click', '#tmog-collect .js-btn-step[data-orientation=previous]', function(e) {
     console.log ("Previous screen");
	 $("#tmog-collect .modal-dialog").removeAttr("style");
    });
	
			
    popoverMenu("#tmog-btn", "#tmogOptions",
        "#tmogOptionsTitle");
    $('body').on('click', '#tmog-colalreadyadd', function(e) {
        $('.tmog-initial').addClass("hide");
        $('.tmog-or').removeClass("hide");
    });
    $(".select-tmog").change(function() {
        $('.tmog-or').addClass("hide");
        $('.tmog-asmit').removeClass("hide");
    });
    $('body').on('click', '.tmog-initialsave', function(e) {
        addremovetext('#msg-tmog-success',
            "Collection createdtest.", "7000");
    });
    $('body').on('click', '.tmog-addwatch', function(e) {
        addremovetext('#msg-tmog-success',
            "Watch added.", "7000");tmog-editcolwatch
    });
	    $('body').on('click', '.tmog-editcolwatch', function(e) {
        addremovetext('#msg-tmog-success',
            "Watch saved.", "7000");
    });
    $('body').on('click', '.tmog-deletecolwatch', function(e) {
        addremovetext('#msg-tmog-success',
            "Watch deleted.", "7000");
    });
    $('body').on('click', '.tmog-deletecol', function(e) {
        addremovetext('#msg-tmog-success',
            "Collection deleted.", "7000");
    });
    $('body').on('click', '.tmog-editcol', function(e) {
        addremovetext('#msg-tmog-success', "Collection saved.",
            "7000");
    });
    $('body').on('click', '#tmog-tradesearch', function(e) {
        $('.tmog-tradesearchtab').removeClass("hide");
    });
    $("#txt_tmogname").keyup(function() {
        var value = $(this).val();
        $("span.txt_tmogvalue").text(value);
    });
    //Different modals
    $('#tmog-collect').modalSteps({
        'completeCallback': function() {
            $('.tmog-initial, .tmog-or').addClass(
                "hide");
            $('.tmog-asmit').removeClass("hide");
            addremovetext('#msg-tmog-success',
                "Collection created", "7000");
        }
    });
    //Collection name on sentence
    $("#txt_tmogname").keyup(function() {
        var value = $(this).val();
        $("span.txt_tmogvalue").text(value);
    });
	
	//widget library modal
	$('body').on('click', '#btn-widgetLibrary', function(e) {
        $('#widgetLibraryModal').modal();
    });
	
	$('body').on('click', '.closelibrary', function(e) {
        $('#widgetCancelArea').modal();
		 $('#widgetLibraryModal').modal('hide');
    });
	
	$('body').on('click', '#cancelwidgetlibrary-btn', function(e) {
        $('#widgetCancelArea').modal('hide');
		 $('#widgetLibraryModal').modal();
    });
	
	$('body').on('click', '#donewidgetlibrary-btn', function(e) {
       
		 $('#widgetLibraryModal').modal('hide');
		 $('#widgetCancelArea').modal('hide');
    });
	
	
	
	//widget library modal
	$('body').on('click', '#widgetCategories li', function(e) {
		var linkVal = $(this).children('a').text();
		linkVal = $.trim(linkVal);
		$('#widgetTitle').text(linkVal);
		//console.log(linkVal);
        $('#widgetCategories li').removeClass('active');
		$(this).addClass('active');
		showhideLoader();
		$('#AddWidgetGallery').fadeOut().delay(100).fadeIn('slow');
		
		$('#top-dispaly-message').addClass('hide');
		//test code
		//console.log(linkVal);
		/*
		if(linkVal == 'All') {
			//console.log("aaa: "+linkVal);
			$("#AddWidgetGallery div.col-md-4").removeAttr("style");;
		} else {
			$("#AddWidgetGallery div.col-md-4").removeAttr("style");
			var divs = $("#AddWidgetGallery div.col-md-4").get().sort(function(){ 
  return Math.round(Math.random())-0.5; //random so we get the right +/- combo
}).slice(0,4)
$(divs).appendTo(divs[0].parentNode).hide();
		}
		*/
		
    });
	
	
	//show hide left
	$('body').on('click', '#showhidewidgetLibraryMenu', function(e) {
      $(".widgetLibrary-Left").toggleClass('hidden-xs');
    });
	
	//add widget
	$('body').on('click', '.add-widget-button', function(e) {
     showhideLoader();
	  $(this).removeClass("btn-primary add-widget-button").addClass("btn-default remove-widget-button");	  
	  $(this).html('Remove');
	  $(this).closest('div.col-md-3').addClass('removed');
	  showhidetopMessage("Widget has been added.", "alert-success", "#top-dispaly-message");
	  	  
    });
	
	//remove widget
	$('body').on('click', '.remove-widget-button', function(e) {
     showhideLoader();
	  $(this).removeClass("btn-default remove-widget-button").addClass("btn-primary add-widget-button");	  
	  $(this).html('Add');
	  $(this).closest('div.col-md-3').removeClass('removed');
	  showhidetopMessage("Widget has been removed.", "alert-success", "#top-dispaly-message");
	  	  
    });
	
      //Search dropdown
   // $(".tmog-dropdown li a").click(function() {
      //  $(".tmog-dropdownbtn:first-child").text($(this).text());
      //  $(".tmog-dropdownbtn:first-child").val($(this).text());
      //  $(".tmog-dropdownbtn:first-child").append(
       //     " <span class='caret'></span>");
   // });
   
   //checkboxes
   $("#registrations").change(function () {
    $(".register").prop('checked', $(this).prop("checked"));
});

   $("#regs-canceled").change(function () {
    $(".reg-cancel").prop('checked', $(this).prop("checked"));
});


   $("#international-class").change(function () {
    $(".int-class").prop('checked', $(this).prop("checked"));
});


   $("#us-class").change(function () {
    $(".u-class").prop('checked', $(this).prop("checked"));
});






 $("#registrations2").change(function () {
    $(".register2").prop('checked', $(this).prop("checked"));
});

   $("#regs-canceled2").change(function () {
    $(".reg-cancel2").prop('checked', $(this).prop("checked"));
});


   $("#international-class2").change(function () {
    $(".int-class2").prop('checked', $(this).prop("checked"));
});


   $("#us-class2").change(function () {
    $(".u-class2").prop('checked', $(this).prop("checked"));
});



 $("#registrations3").change(function () {
    $(".register3").prop('checked', $(this).prop("checked"));
});

   $("#regs-canceled3").change(function () {
    $(".reg-cancel3").prop('checked', $(this).prop("checked"));
});


   $("#international-class3").change(function () {
    $(".int-class3").prop('checked', $(this).prop("checked"));
});


   $("#us-class3").change(function () {
    $(".u-class3").prop('checked', $(this).prop("checked"));
});

 	//***********************************
    //Fee Schedule
    //***********************************
$('body').on('click', '#btn-manageFeeLinks',
        function(e) {
            
			$('#feelinks').fadeOut(500);
			
			setTimeout(function() {
			$('#feelinks ul').removeClass('customUL').addClass('customUL-chk');
			$('#chk-feelinks').removeClass('hide');
			$('#fee-shedule-buttons, #allformsbundlelinks').addClass('hide');
			$('#currentFeeSchedule, #printerFriendlyFee').addClass('hide');
			$('#feeschedulewidgetbody').addClass('feesbodyHeight');
			
			
			
			
			
            $('#feelinks').fadeIn(1000);
        }, 500);
        });
		
		$('body').on('click', '#btn-manageFeeCheck, #btn-manageFeeCheck-cancel',
        function(e) {
           $('#feelinks').fadeOut(500);
		   $('#feeschedulewidgetbody').removeClass('feesbodyHeight');
		   $('#allformsbundlelinks').removeClass('hide');
		   
		   
			
			setTimeout(function() {
			$('#feelinks ul').addClass('customUL').removeClass('customUL-chk');
			$('#chk-feelinks').addClass('hide');
			$('#fee-shedule-buttons').removeClass('hide');
			$('#currentFeeSchedule, #printerFriendlyFee').removeClass('hide');
				
            $('#feelinks').fadeIn(500);
        }, 500);
        });
		
		$('#feelinks input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).closest("li").removeClass("feeLinkLI");
    } else {
        $(this).closest("li").addClass("feeLinkLI");
    }
});

/*
// get data from website

var feeURL='http://query.yahooapis.com/v1/public/yql?q=select * from html where url=\'http://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule/\' and xpath=\'//div[@class="field field-name-field-block-html field-type-text-long field-label-hidden "]//p\'&format=json&callback=?';

$.getJSON( feeURL, function(data){
 $('#effectiveDate').append(data.query.results.p[0].span.strong);
  $('#feeLastRevised').append(data.query.results.p[0].content);
  $('#feeSchduleInfo').append(data.query.results.p[1]);  
    //feeImportantNotice
})
// important notice
var feeImportantURL='http://query.yahooapis.com/v1/public/yql?q=select * from html where url=\'http://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule/\' and xpath=\'//div[@id="block-uspto-fields-field-alert-161170-1"]//div\'&format=json&callback=?';

$.getJSON( feeImportantURL, function(data){
 document.getElementById("jsonData").innerHTML = JSON.stringify(data.query.results, undefined, 1);
 
})

// table data as JSON
var tableURL='http://query.yahooapis.com/v1/public/yql?q=select * from html where url=\'http://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule/\' and xpath=\'//div[@id="content"]//article//table\'&format=json&callback=?';


$.getJSON( tableURL, function(data){
$("#jsonTableData").append(JSON.stringify(data.query.results.table[2], undefined, 2));
  
})

*/

 $('body').on('click', '#btn-feeImportantNotice, #closeFeeImportantNotice',
        function(e) {
            $('#feeImportantNotice').toggle();
        });

    //***********************************
    //Sign in Page
    //***********************************
    $('body').on('click', '#createaccount-nonActiveEmailexist-btn',
        function(e) {
            $('.alert-danger').removeClass("hide");
        });
    //**********	
    //***********************************
    //Keyboad modal
    //***********************************
    $('body').on('click', '#openModalKeyborad', function(e) {
        $('#keyboadModal').modal();
    });
    //**********
	
	$('.next').click(function(){

  var nextId = $(this).parents('.tab-pane').next().attr("id");
  $('[href=#'+nextId+']').tab('show');
  return false;
  
})

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  
  //update progress
  var step = $(e.target).data('step');
  var percent = (parseInt(step) / 5) * 100;
  
  $('.progress-bar').css({width: percent + '%'});
  $('.progress-bar').text("Step " + step + " of 5");
  
  //e.relatedTarget // previous tab
  
})

$('.first').click(function(){

  $('#myWizard a:first').tab('show')

})
    $('#browserupgrade').modal('show');
	
	
	
	
	window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
	




//**************************************
// ADD / delete  application of TM widget
$('body').on('click', "button[data-target='#dockapp-deletecoltrademark'], button[data-target='#dockpost-deletecoltrademark']", function(e) {
        $(this).parent().parent().addClass('removeThis');
    });
	
	$('body').on('click', ".dockapp-deletecoltrade, .dockpost-deletecoltrade", function(e) {
        $('.removeThis').addClass('hide');
    });

$('body').on('click', "thead.rowForExpand th", function(e) {
      // showhideLoader();
	   $(this).siblings().children('i').addClass('hide');
	   $(this).children('i').removeClass('hide').toggleClass('icon-caret-down icon-caret-up');
	   
    });
	
	
	//app docket sort button
	$('body').on('click', "thead.rowForExpand button#tmAppDocketSort", function(e) {
       
	 //***************
	   var strVar="";
			strVar += "<div class=\"widget-progress\">";
			strVar += "<div class=\"loading\">";
			strVar += "<i class=\"loading-icon\"><\/i>";
			strVar += "<\/div>";
			strVar += "<div class=\"text-center text-muted\">Loading...<\/div>";
			strVar += "<\/div>";

 			$(this).closest('.card-block').addClass('refresh');
			$(this).closest('.card-block').before(strVar);
			$(this).closest('div.card').attr("id", "refreshwidget")
			
			
			setTimeout(function() {
				//console.log('refrest test');
				$('#refreshwidget .widget-progress').remove();
            $('#refreshwidget .card-block').removeClass('refresh');
			
        }, 1000);
	   //***********
	   
	   $(this).children('i').toggleClass('icon-sort-alpha-asc icon-sort-alpha-desc');
	   
    });
	
	$('body').on('change', 'thead.rowForExpand select', function(e) {
		
		//***************
	   var strVar="";
			strVar += "<div class=\"widget-progress\">";
			strVar += "<div class=\"loading\">";
			strVar += "<i class=\"loading-icon\"><\/i>";
			strVar += "<\/div>";
			strVar += "<div class=\"text-center text-muted\">Loading...<\/div>";
			strVar += "<\/div>";

 			$(this).closest('.card-block').addClass('refresh');
			$(this).closest('.card-block').before(strVar);
			$(this).closest('div.card').attr("id", "refreshwidget")
			
			
			setTimeout(function() {
				//console.log('refrest test');
				$('#refreshwidget .widget-progress').remove();
            $('#refreshwidget .card-block').removeClass('refresh');
			
        }, 1000);
	   //***********
});

 $('body').on('click', '.dockapp-addtrade',
 
        function(e) {
			var ranNum = getRandomNumber();
			
			var items = Array('May 05, 1996', 'Aug 10, 2010','Jun 15, 1990', 'Sep 21, 1980', 'Dec 10, 2009', 'Jan 18, 2011', 'Mar 27, 2007');
			
			var dayItem = items[Math.floor(Math.random()*items.length)];
			var dayFile = items[Math.floor(Math.random()*items.length)];
			
			
			
		   
		   
		  var strVarTM="";
strVarTM += "<tr>";
strVarTM += "                      	<td>";
strVarTM += "<div class=\"panel panel-default\">";
strVarTM += "	<div style=\"1background-color:#fff;\"> <span class=\"panel-heading collapsed collectionHeading\" id=\"TMheading"+ranNum+"\" data-target=\"#TMcollapse"+ranNum+"\" aria-expanded=\"false\" data-toggle=\"collapse\" aria-controls=\"TMcollapse"+ranNum+"\" > <i class=\"icon icon-angle-right\"><\/i> <span class=\"btn btn-link text-pr\"><strong>Lorem Ipsum</strong> <span style=\"";
strVarTM += "    color: #444;";
strVarTM += "    font-weight: normal;";
strVarTM += "\"><\/span><\/span> <a href=\"#\" target=\"_blank\" class=\"hide\" ><img src=\"images\/externalLink.png\"\/><\/a> <\/span>";
strVarTM += "		<button type=\"button\" class=\"btn btn-icon-only btn-hover pull-right\" style=\"margin: 8px 5px 0 0;\" data-toggle=\"modal\" data-target=\"#dockapp-deletecoltrademark\"><span class=\"icon icon-close\"><\/span><\/button>";
strVarTM += "		<div class=\"caption\" style=\"";
strVarTM += "    ";
strVarTM += "    margin: -4px 0 5px 34px;";
strVarTM += "\">Status date: "+dayItem+" <\/div>";
strVarTM += "	<\/div>";
strVarTM += "	<div id=\"TMcollapse"+ranNum+"\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"TMheading"+ranNum+"\" aria-expanded=\"false\" style=\"height: 0px;\">";
strVarTM += "		<div class=\"panel-body\" style=\"border-top: 1px solid #efefef;\">";
strVarTM += "			<table class=\"table table-borderless table-condensed\"  style=\"width:95%;\">";
strVarTM += "				<tbody>";
strVarTM += "					<tr>";
strVarTM += "						<td><strong>Serial #<\/strong><\/td>";
strVarTM += "						<td>"+ranNum+"<\/td>";
strVarTM += "					<\/tr>";
strVarTM += "					<tr>";
strVarTM += "						<td style=\"width:100px;\"><strong>Filling date<\/strong><\/td>";
strVarTM += "						<td>"+dayFile+"<\/td>";
strVarTM += "					<\/tr>";
strVarTM += "					<tr>";
strVarTM += "						<td><strong>Status<\/strong><\/td>";
strVarTM += "						<td>Lorem ipsum dolor sit amet, quando timeam omittam et usu, his no vidisse postulant eloquentiam, ea quo putent explicari expetendis.<\/td>";
strVarTM += "					<\/tr>";

strVarTM += "				<\/tbody>";
strVarTM += "			<\/table>";
strVarTM += "		<\/div>";
strVarTM += "	<\/div>";
strVarTM += "<\/div>";
strVarTM += "                      	<td class=\"text-primary\"><strong>Lorem Ipsum</strong><\/td>";
strVarTM += "                      	<td><a href=\"http:\/\/tsdr.uspto.gov\/#caseNumber=85004337&amp;caseSearchType=US_APPLICATION&amp;caseType=DEFAULT&amp;searchType=statusSearch\" title=\"view trademark application serial number 85004337\" target=\"_blank\" tabindex=\"-1\">"+ranNum+"<\/a><\/td>";
strVarTM += "                      	<td>"+dayFile+"<\/td>";
strVarTM += "                      	<td>"+dayItem+"<\/td>";
strVarTM += "                      	<td>Lorem ipsum dolor sit amet, quando timeam omittam et usu, his no vidisse postulant eloquentiam, ea quo putent explicari expetendis.<\/td>";
strVarTM += "<td><button type=\"button\" class=\"btn btn-icon-only btn-hover\"  data-toggle=\"modal\" data-target=\"#dockapp-deletecoltrademark\"><span class=\"icon icon-close\"><\/span><\/button><\/td>";
strVarTM += "                      	<\/tr>";


		   $("#TMapplicationDocket").prepend(strVarTM)
        });


//***************






//**************************************
// ADD / delete  application of Pat widget
$('body').on('click', "button[data-target='#dockapppat-deletecolpatent'], button[data-target='#dockpost-deletecolpatent']", function(e) {
        $(this).parent().parent().addClass('removeThis');
    });
	
	$('body').on('click', ".dockapppat-deletecoltrade, .dockpost-deletecoltrade", function(e) {
        $('.removeThis').addClass('hide');
    });

$('body').on('click', "thead.rowForExpand th", function(e) {
      // showhideLoader();
	   $(this).siblings().children('i').addClass('hide');
	   $(this).children('i').removeClass('hide').toggleClass('icon-caret-down icon-caret-up');
	   
    });
	
	
	//app docket sort button
	$('body').on('click', "thead.rowForExpand button#PatAppDocketSort", function(e) {
       
	 //***************
	   var strVar="";
			strVar += "<div class=\"widget-progress\">";
			strVar += "<div class=\"loading\">";
			strVar += "<i class=\"loading-icon\"><\/i>";
			strVar += "<\/div>";
			strVar += "<div class=\"text-center text-muted\">Loading...<\/div>";
			strVar += "<\/div>";

 			$(this).closest('.card-block').addClass('refresh');
			$(this).closest('.card-block').before(strVar);
			$(this).closest('div.card').attr("id", "refreshwidget")
			
			
			setTimeout(function() {
				//console.log('refrest test');
				$('#refreshwidget .widget-progress').remove();
            $('#refreshwidget .card-block').removeClass('refresh');
			
        }, 1000);
	   //***********
	   
	   $(this).children('i').toggleClass('icon-sort-alpha-asc icon-sort-alpha-desc');
	   
    });
	
	$('body').on('change', 'thead.rowForExpand select', function(e) {
		
		//***************
	   var strVar="";
			strVar += "<div class=\"widget-progress\">";
			strVar += "<div class=\"loading\">";
			strVar += "<i class=\"loading-icon\"><\/i>";
			strVar += "<\/div>";
			strVar += "<div class=\"text-center text-muted\">Loading...<\/div>";
			strVar += "<\/div>";

 			$(this).closest('.card-block').addClass('refresh');
			$(this).closest('.card-block').before(strVar);
			$(this).closest('div.card').attr("id", "refreshwidget")
			
			
			setTimeout(function() {
				//console.log('refrest test');
				$('#refreshwidget .widget-progress').remove();
            $('#refreshwidget .card-block').removeClass('refresh');
			
        }, 1000);
	   //***********
});

 $('body').on('click', '.dockapppat-addtrade',
 
        function(e) {
			var ranNum = getRandomNumber();
			
			var items = Array('May 05, 1996', 'Aug 10, 2010','Jun 15, 1990', 'Sep 21, 1980', 'Dec 10, 2009', 'Jan 18, 2011', 'Mar 27, 2007');
			
			var dayItem = items[Math.floor(Math.random()*items.length)];
			var dayFile = items[Math.floor(Math.random()*items.length)];
			
			
			
		   
		   
		  var strVarPat="";
strVarPat += "<tr>";
strVarPat += "                      	<td>";
strVarPat += "<div class=\"panel panel-default\">";
strVarPat += "	<div style=\"1background-color:#fff;\"> <span class=\"panel-heading collapsed collectionHeading\" id=\"Patheading"+ranNum+"\" data-target=\"#Patcollapse"+ranNum+"\" aria-expanded=\"false\" data-toggle=\"collapse\" aria-controls=\"Patcollapse"+ranNum+"\" > <i class=\"icon icon-angle-right\"><\/i> <span class=\"btn btn-link text-pr\"><strong>Lorem Ipsum</strong> <span style=\"";
strVarPat += "    color: #444;";
strVarPat += "    font-weight: normal;";
strVarPat += "\"><\/span><\/span> <a href=\"#\" target=\"_blank\" class=\"hide\" ><img src=\"images\/externalLink.png\"\/><\/a> <\/span>";
strVarPat += "		<button type=\"button\" class=\"btn btn-icon-only btn-hover pull-right\" style=\"margin: 8px 5px 0 0;\" data-toggle=\"modal\" data-target=\"#dockapppat-deletecolpatent\"><span class=\"icon icon-close\"><\/span><\/button>";
strVarPat += "		<div class=\"caption\" style=\"";
strVarPat += "    ";
strVarPat += "    margin: -4px 0 5px 34px;";
strVarPat += "\">Status date: "+dayItem+" <\/div>";
strVarPat += "	<\/div>";
strVarPat += "	<div id=\"Patcollapse"+ranNum+"\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"Patheading"+ranNum+"\" aria-expanded=\"false\" style=\"height: 0px;\">";
strVarPat += "		<div class=\"panel-body\" style=\"border-top: 1px solid #efefef;\">";
strVarPat += "			<table class=\"table table-borderless table-condensed\"  style=\"width:95%;\">";
strVarPat += "				<tbody>";
strVarPat += "					<tr>";
strVarPat += "						<td><strong>Serial #<\/strong><\/td>";
strVarPat += "						<td>"+ranNum+"<\/td>";
strVarPat += "					<\/tr>";
strVarPat += "					<tr>";
strVarPat += "						<td style=\"width:100px;\"><strong>Filling date<\/strong><\/td>";
strVarPat += "						<td>"+dayFile+"<\/td>";
strVarPat += "					<\/tr>";
strVarPat += "					<tr>";
strVarPat += "						<td><strong>Status<\/strong><\/td>";
strVarPat += "						<td>Lorem ipsum dolor sit amet, quando timeam omittam et usu, his no vidisse postulant eloquentiam, ea quo putent explicari expetendis.<\/td>";
strVarPat += "					<\/tr>";

strVarPat += "				<\/tbody>";
strVarPat += "			<\/table>";
strVarPat += "		<\/div>";
strVarPat += "	<\/div>";
strVarPat += "<\/div>";
strVarPat += "                      	<td class=\"text-primary\"><strong>Lorem Ipsum</strong><\/td>";
strVarPat += "                      	<td><a href=\"http:\/\/tsdr.uspto.gov\/#caseNumber=85004337&amp;caseSearchType=US_APPLICATION&amp;caseType=DEFAULT&amp;searchType=statusSearch\" title=\"view patent application serial number 85004337\" target=\"_blank\" tabindex=\"-1\">"+ranNum+"<\/a><\/td>";
strVarPat += "                      	<td>"+dayFile+"<\/td>";
strVarPat += "                      	<td>"+dayItem+"<\/td>";
strVarPat += "                      	<td>Lorem ipsum dolor sit amet, quando timeam omittam et usu, his no vidisse postulant eloquentiam, ea quo putent explicari expetendis.<\/td>";
strVarPat += "<td><button type=\"button\" class=\"btn btn-icon-only btn-hover\"  data-toggle=\"modal\" data-target=\"#dockapppat-deletecolpatent\"><span class=\"icon icon-close\"><\/span><\/button><\/td>";
strVarPat += "                      	<\/tr>";


		   $("#PatapplicationDocket").prepend(strVarPat)
        });


//***************








	
	   























	
	   
	
//////:::::::::::::::::::////////////
	
});














