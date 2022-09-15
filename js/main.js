
/* the progress of skill*/

var section2 =document.getElementById("about");
var spans= document.querySelectorAll(".progress span");
window.onscroll=function(){
    if(window.scrollY >= section2.offsetTop-400){
        spans.forEach((span)=>{
            span.style.width=span.dataset.width
        })
    }
}
/*color option of home section*/
$(".coloritem").css("backgroundColor","red")
let liBgcolor=["red","black","blue","orange","crimson"];
for(var i=0;i<liBgcolor.length;i++){
    $(".coloritem").eq(i).css("backgroundColor",liBgcolor[i])

}
$(".coloritem").click(function(){
 let bgcolor=$(this).css("backgroundColor")
$(".change").css("color",bgcolor)
})
$(".iconst").click(function(){
  let widthoption=$(".headerstyel").outerWidth();
  if($(".setting").css("left")=="0px"){
$(".setting").animate({"left":-widthoption},2000)
}
else{
    $(".setting").animate({"left":"0px"},2000)
}

}
)
/* Navbar scroll background and color */
$(".nav-link").css("color","white");
$(window).scroll(function(){
 let scrolheight=  $(window).scrollTop()
 if(scrolheight>450){
     $(".navbar").css({"backgroundColor":"white","transition":"all 1s"});
     $(".nav-link").css("color","black");

 }
 else if(scrolheight==0){
    $(".navbar").css("backgroundColor","transparent");
    $(".nav-link").css("color","white");



 }
 
})
// form clear :
let inputs=document.querySelectorAll(".form-control")
let btn= document.querySelector(".btn")

btn.addEventListener("click",function(){
    for(var i=0 ;i<inputs.length;i++){
        inputs[i].value="";
    }
})