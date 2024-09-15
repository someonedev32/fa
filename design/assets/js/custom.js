/* NAVBAR
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 
  // DOMContentLoaded  end
  */

  $(window).on('load resize', function () {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    if(!isMobile){
      $(".service_desc").css("display","none");
      if(!$(".service_item").hasClass("selected_service")){
        $(".service_item:first").addClass("selected_service");
        $(".selected_service_desc").html($(".service_item:first").find(".service_desc").html());
      }
      else{
        $(".selected_service_desc").html($(".selected_service").find(".service_desc").html());
      }
      
      var min_height = 0;
      $(".service_item").each(function() {
        var h = $(this).find(".service_desc").outerHeight();
        if(h > min_height){
          min_height = h;
        }
        
      });

      $(".selected_service_desc").css("min-height",min_height + 50);
      
      
    }
    else{
      $(".selected_service_desc").html("");
      $( ".service_item" ).removeClass("selected_service");
      $(".selected_service_desc").css("min-height","unset");
    }
  });




  

  $(document).ready(function(){

    $("#hamburger").on( "click", function() {
      if($("#hamburger").hasClass("open")){
        $("#hamburger").removeClass('open');
        $(".sidenav").removeClass("sidenav_opened");
      }
      else{
        $("#hamburger").addClass('open');
        $(".sidenav").addClass("sidenav_opened");
      }
      
    });




    

    






    /*
    $('#programet_carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('#programet_prev'),
      nextArrow: $('#programet_next')
    });

    $('#instruktoret_carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $('#instruktoret_prev'),
      nextArrow: $('#instruktoret_next')
    });




    $(".carousel-slide-up").hover(
      function() {
        $(this).find(".carousel_item_caption-content").addClass("fade_in");
        $(this).children("img").addClass("zoom_in");
        
        
      }, function() {
        $(this).find(".carousel_item_caption-content").removeClass("fade_in");
        $(this).children("img").removeClass("zoom_in");
      }
    );
    */





    $( ".service_item" ).on( "click", function() {
      var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

      if (!$(this).hasClass("selected_service")){
        $( ".service_item" ).removeClass("selected_service");
        $(this).addClass("selected_service");
        if (isMobile) {
            $(".service_desc").css("display","none");
            $(".circle-plus").removeClass("opened");
            $(this).find(".service_desc").css("display","block");
            $(this).find(".circle-plus").addClass('opened');
        }
        else{
            $(".selected_service_desc").html($(this).find(".service_desc").html());
        }
      }
      else{
        if (isMobile) {
          $( ".service_item" ).removeClass("selected_service");
          $(".service_desc").css("display","none");
          $(".circle-plus").removeClass("opened");
        }
      }
    
    });



    


    $(".dropdown-item").on("click", function() {
      $(this).parents(".dropdown").find(".button_text").html(($(this).html()));
      $(this).parents(".dropdown").find(".button_text").addClass("text_highlighted");
    });








    $("#contact_form").submit(function (event) {
      event.preventDefault();
      if($(this).find(".contact_button").prop('disabled')){
        return false;
      }
      var hasError = false;
      
      
      var full_name = $("input[name='full_name']").val();
      var company_name = $("input[name='company_name']").val();
      var email = $("input[name='email']").val();
      var how_did_you_find_us = $("button[name='how_did_you_find_us']").find(".button_text").html();
      var budget = $("button[name='budget']").find(".button_text").html();
      var time_frame = $("button[name='time_frame']").find(".button_text").html();
      var about_project = $("textarea[name='about_project']").val();

      if(!full_name){
          $("input[name='full_name']").addClass("input_field_danger");
          setTimeout(function () {
            $("input[name='full_name']").removeClass("input_field_danger");
          },3000);
          
          hasError = true;
      }

      if(!email){
        $("input[name='email']").addClass("input_field_danger");
        setTimeout(function () {
          $("input[name='email']").removeClass("input_field_danger");
        },3000);
        
        hasError = true;
      }

      if(hasError){return}


      var formData = new FormData();

      formData.append('full_name', full_name);
      formData.append('company_name', company_name);
      formData.append('email', email);
      formData.append('how_did_you_find_us', how_did_you_find_us);
      formData.append('budget', budget);
      formData.append('time_frame', time_frame);
      formData.append('about_project', about_project);



      
      $(this).find(".contact_button").prop('disabled',true);
      $.ajax({
        type: "POST",
        url: "/scripts/email_form.php",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data,status,xhr) {
          if(data == "success"){
            $(".email_status").addClass("text-success").text("Email sent successfully!");
          }
          else{
            $(".email_status").addClass("text-danger").text("Something went wrong!");
            $("#contact_form").find(".contact_button").prop('disabled',false);
          }
        },
        error: function (jqXhr, textStatus, errorMessage) {
          $(".email_status").addClass("text-danger").text("Something went wrong!");
          $("#contact_form").find(".contact_button").prop('disabled',false);
        }
      }).done(function (data) {
        //console.log(data);
      });
  
      
    });






    $( ".work_listing_item" ).hover(
      function() {
        $(this).find(".work_listing_title").addClass( "show" );
        $(this).find(".work_listing_dark_fade").addClass( "show" );
        $(this).find(".work_listing_thumbnail").addClass( "thumbnail_zoom" );
      }, function() {
        $(this).find(".work_listing_title").removeClass( "show" );
        $(this).find(".work_listing_dark_fade").removeClass( "show" );
        $(this).find(".work_listing_thumbnail").removeClass( "thumbnail_zoom" );
        
      }
    );







    




  });