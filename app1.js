const bars =document.querySelectorAll('.progress-bar');
bars.forEach(function(bar){
    let percentage=bar.dataset.percent;
    let tooltip= bar.children[0];
    tooltip.innerText= percentage + '%';
    bar.style.width= percentage +'%';
    console.log(percentage);
}
)
$(document).on({
    ajaxStart: function(){
        $("body").addClass("loading"); 
    },
    ajaxStop: function(){ 
        $("body").removeClass("loading"); 
    }    
});


//    $(".button").click(function(){
//     var mode='iframe';
//     var close=mode=="popup";
//     var options={mode:mode,popClose:close};
//     $("div#wrapper").printArea(options);

//    });
   $('.progress-bar').animate(
    {width:'100%'},
    { duration:3000,
      complete:function(){
        $('.progress').css('visibility','hidden');
      }
    });

     
  