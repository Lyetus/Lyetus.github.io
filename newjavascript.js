$(function() {
 
    $('#button').on("click", function() {
            var hui = $("#button").text();
            if (hui === 'Тёмная тема'){ 
                $("#button").text("Светлая тема");
                $("body").css("background-color", "#999999");
                $("body").css("color", "#edeef0");
                $("#home_rt, #learn_rt, #music_rt").css("background-color", "#262525");
                $("#content").css("background-color", "#666666");
                $("#content2").css("background-color", "#666666");
                $("#header").css("background-color", "#333333");
                $("#menu").css("background-color", "#666666");
                $("#menu").css("border-right", "1px solid  #333333");
                $("#footer").css("background-color", "#333333");
                $("#pngR").attr("src", "pictures/КакатьV2.png");
            }
            if (hui === 'Светлая тема'){
                $("#button").text("Тёмная тема");
                $("body").css("background-color", "#edeef0");
                $("body").css("color", "black");
                $("#home_rt, #learn_rt, #music_rt").css("background-color", "#999999");
                $("#content").css("background-color", "#ffffff");
                $("#content2").css("background-color", "#ffffff");
                $("#header").css("background-color", "#CCCCCC");
                $("#menu").css("background-color", "#ffffff");
                $("#menu").css("border-right", "1px solid  #CCCCCC");
                $("#footer").css("background-color", "#CCCCCC");
                $("#pngR").attr("src", "pictures/Рикардо.png"); 
            }
    });
    
    $('#pngS').on("click", function(){
        alert("САМ ИДИ!!!");
    });
    
    $('#pngA').on("click", function(){
        alert("Комитов нет, но вы держитесь...");
    });
    
    $('#button2').on("click", function(){
       var hi = $("#bar").css("display");
       if (hi === 'none'){
            $("#bar").css("display", "block");
//            var hei = $("#menu").css("height");
//            $("#content").css("height", hei);
        }
       if (hi === 'block'){
            $("#bar").css("display", "none");
//            $("#content").css("height", "79%");
       } 
    });  
    
    $('#button3').on("click", function(){
        $("#pngO").css("display", "block");
        $("#cont_title").css("display", "none");
        var cho = new Audio;
        cho.src = "mp3/Че за хуйня блять.mp3";
        cho.autoplay = true;
        setTimeout('$("#pngO").css("display","none")', 1500);
        setTimeout ('$("#cont_title").css("display", "block")', 1500);
    });
    
//    $('#button4').on("click", function(){
//       var date = new Date();
//       var hour = date.getHours();
//       if (hour >= 20 || hour < 7){
//           alert("SOSI!!!!");
//       } 
//       if (hour >= 7 && hour < 20 ){
//            alert("NE SOSI!!!");
//       }
//    });

    $("#button4").on("click", function(){
        $("#gifZ").css("display", "block");
        var muda = new Audio;
        muda.src = "mp3/Muda Muda Muda.mp3";
        muda.autoplay = true;
        setTimeout ('$("#gifZ").css("display", "none")', 8000);
    });
    
    $("#home_rt").on("mouseover", function(){
        var nav = $("#home_rt").css("background-color");
        if (nav === "rgb(38, 37, 37)"){
            $("#home_rt").css("background-color", "#00CC33");
        }
        if (nav === "rgb(153, 153, 153)"){
            $("#home_rt").css("background-color", "#CC99FF");
        }
        
    });
    
    $("#home_rt").on("mouseout", function(){
        var nav2 = $("#home_rt").css("background-color");
        if (nav2 === "rgb(0, 204, 51)"){
            $("#home_rt").css("background-color", "#262525");
        }
        if (nav2 === "rgb(204, 153, 255)"){
            $("#home_rt").css("background-color", "#999999");
        }        
    });
    
    $("#learn_rt").on("mouseover", function(){
        var nav = $("#learn_rt").css("background-color");
        if (nav === "rgb(38, 37, 37)"){
            $("#learn_rt").css("background-color", "#00CC33");
        }
        if (nav === "rgb(153, 153, 153)"){
            $("#learn_rt").css("background-color", "#CC99FF");
        }
        
    });
    
    $("#learn_rt").on("mouseout", function(){
        var nav2 = $("#learn_rt").css("background-color");
        if (nav2 === "rgb(0, 204, 51)"){
            $("#learn_rt").css("background-color", "#262525");
        }
        if (nav2 === "rgb(204, 153, 255)"){
            $("#learn_rt").css("background-color", "#999999");
        }        
    });
    
    $("#music_rt").on("mouseover", function(){
        var nav = $("#music_rt").css("background-color");
        if (nav === "rgb(38, 37, 37)"){
            $("#music_rt").css("background-color", "#00CC33");
        }
        if (nav === "rgb(153, 153, 153)"){
            $("#music_rt").css("background-color", "#CC99FF");
        }  
    });
    
    $("#music_rt").on("mouseout", function(){
        var nav2 = $("#music_rt").css("background-color");
        if (nav2 === "rgb(0, 204, 51)"){
            $("#music_rt").css("background-color", "#262525");
        }
        if (nav2 === "rgb(204, 153, 255)"){
            $("#music_rt").css("background-color", "#999999");
        }        
    });
    
    $("#learn_rt").on("click", function(){
        document.location.href = "learn.html";
    });
    
    $("#home_rt").on("click", function(){
        document.location.href = "index.html";
    });
    
    $("#music_rt").on("click", function(){
        document.location.href = "music.html";
    });    
    
    $("#button5").on("click", function(){
        var col = $("#home_rt").css("background-color");
        alert(col);
    });
    
    $("#button6").on("click", function(){
        var hei = $("#content").css("height");
        alert(hei);
    });
    
    $("#button7").on("click", function(){
        $("#pngBlack").css("display", "block");       
        $("#gifZver").attr("src", "pictures/Зверушки.gif");
        $("#gifZver").css("display", "block");
        var zver = new Audio;
        zver.src = "mp3/Теперь зверушки умеют ходить.mp3";
        zver.autoplay = true;
        setTimeout ('$("#gifZver").attr("src", "");', 13000);
        setTimeout ('$("#gifZver").css("display", "none");', 13000);
        setTimeout ('$("#pngBlack").css("display", "none");', 13000);
    });

    window.onload = function(){
        var date = new Date();
        var hour = date.getHours();
        if ( hour >= 20 || hour < 8){
                $("#button").text("Светлая тема");
                $("body").css("background-color", "#999999");
                $("body").css("color", "#edeef0");
                $("#home_rt, #learn_rt, #music_rt").css("background-color", "#262525");
                $("#content").css("background-color", "#666666");
                $("#content2").css("background-color", "#666666");
                $("#header").css("background-color", "#333333");
                $("#menu").css("background-color", "#666666");
                $("#menu").css("border-right", "1px solid  #333333");
                $("#footer").css("background-color", "#333333");
                $("#pngR").attr("src", "pictures/КакатьV2.png");
        }
        if (hour >= 8 && hour < 20){
                $("#button").text("Тёмная тема");
                $("body").css("background-color", "#edeef0");
                $("body").css("color", "black");
                $("#home_rt, #learn_rt, #music_rt").css("background-color", "#999999");
                $("#content").css("background-color", "#ffffff");
                $("#content2").css("background-color", "#ffffff");
                $("#header").css("background-color", "#CCCCCC");
                $("#menu").css("background-color", "#ffffff");
                $("#menu").css("border-right", "1px solid  #CCCCCC");
                $("#footer").css("background-color", "#CCCCCC");
                $("#pngR").attr("src", "pictures/Рикардо.png");            
        }
    };   
    
    
    
    
});


