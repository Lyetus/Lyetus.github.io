$(function(){
    
    $("#page2").on("click", function(){    
        $("#cont_title").attr("id", "text");
        $("#text").load("learnPages/Learn_page1.html");
    });
    
    $("#page1").on("click", function(){
        $("#cont_title").attr("id", "text");
        $("#text").load("learnPages/Learn_page2.html");
    });
    
    $("#page3").on("click", function(){
        $("#cont_title").attr("id", "text");
        $("#text").load("learnPages/Learn_page3.html");
    });
    
    
    
    
    
    
    
});