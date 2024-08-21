$(document).ready(function(){

    //header gnb_mypage_menu : s
    $(document).on('click','.gnb_mypage_menu > a',function(){
      $(this).parent('.gnb_mypage_menu').find('.my_summary_menu').fadeToggle()
    });
    $('html, body').on('click', function(e){
      if(!($(e.target).hasClass('gnb_mypage_menu') || $(e.target).parents('.gnb_mypage_menu').length > 0)){
        $('.my_summary_menu').fadeOut();
      }
    });
    //header gnb_mypage_menu : e
  
    // html, body 클릭시 창 닫기 : s
    $(document).on('click','html, body',function(e){
      // popup 
      if($(e.target).hasClass('info_popup')){
        // 베이직 info_popup 팝업
        $('.info_popup').hide();  
        $('html, body').css('overflow','inherit');
      }
      if(!($(e.target).parents().hasClass('tooltip_wrap') || $(e.target).hasClass('tooltip_close'))){
        $('.tooltip_wrap').removeClass('on')
      }
  
    })
    // html, body 클릭시 창 닫기 : e
  
  
    // 아코디언 구동 : s (알림 , 메세지)
    $(document).on('click', '.accordion_cont .accordion_head', function(e){
      if(!$(e.target).hasClass('article_idx')){
        var $parent = $(this).parent();
        if(!$parent.hasClass('open')){
          $('.accordion_cont_wrap .open').removeClass('open').find('.accordion_body').stop().slideUp();
        }
        $parent.toggleClass('open');
        if($parent.hasClass('open')){
          $(this).siblings().stop().slideDown();
        }else{
          $(this).siblings().stop().slideUp();
        }
      }
  
    });
    // 아코디언 구동 : e
  
    //tab contents : s
    $(document).on('click', '.tab_cont_menu > li', function(){
      var tabCont = $(this).attr('data-tab');
  
      $(this).parent().find('li').removeClass('active');
      $(this).addClass('active');
  
      $(this).parents('.tab_contents').find('.tab_cont').removeClass('active');
      $('#'+tabCont).addClass('active');
    });
    $(document).on('click', '.tab_btn', function(){
      $('.tab_btn').removeClass('selected');
      $(this).addClass('selected');
      $('.tab_cont_wrap .tab_cont_list').hide();
      
      
      var selectTab = $(this).attr('rel');
      $('.' + selectTab).show();
      
    });
    //tab contents : e

    // porfoio btn
  
  }); //document
  