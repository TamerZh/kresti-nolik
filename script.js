var count = 1;
var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;
var box5 = 0;
var box6 = 0;
var box7 = 0;
var box8 = 0;
var box9 = 0;

document.getElementById("gamebox1").onclick = function(){
    if(count % 2 == 0){
        document.getElementById("gamebox1").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count += 1;
        box1 = 1;
    }
    else{
        document.getElementById("gamebox1").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box1 = 2;
    }
}
document.getElementById("gamebox2").onclick = function(){
    if(count % 2== 0){
        document.getElementById("gamebox2").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box2 = 1;
    }
    else{
        document.getElementById("gamebox2").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box2 = 2;
    }
}
document.getElementById("gamebox3").onclick = function(){
    if(count % 2== 0){
        document.getElementById("gamebox3").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box3 = 1;
    }
    else{
        document.getElementById("gamebox3").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box3 = 2;
    }
}
document.getElementById("gamebox4").onclick = function(){
    if(count % 2 == 0){
        document.getElementById("gamebox4").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box4 = 1;
    }
    else{
        document.getElementById("gamebox4").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box4 = 2;
    }
}
document.getElementById("gamebox5").onclick = function(){
    if(count % 2== 0){
        document.getElementById("gamebox5").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box5 = 1;
    }
    else{
        document.getElementById("gamebox5").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box5 = 2;
    }
}
document.getElementById("gamebox6").onclick = function(){
    if(count % 2 == 0){
        document.getElementById("gamebox6").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box6 = 1;
    }
    else{
        document.getElementById("gamebox6").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box6 = 2;
    }
}
document.getElementById("gamebox7").onclick = function(){
    if(count % 2 == 0){
        document.getElementById("gamebox7").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box7 = 1;
    }
    else{
        document.getElementById("gamebox7").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box7 = 2;
    }
}
document.getElementById("gamebox8").onclick = function(){
    if(count % 2== 0){
        document.getElementById("gamebox8").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count += 1;
        box8 = 1;
    }
    else{
        document.getElementById("gamebox8").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box8 = 2;
    }
}
document.getElementById("gamebox9").onclick = function(){
    if(count % 2 == 0){
        document.getElementById("gamebox9").style = "background: url(https://svgsilh.com/svg/24850.svg); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box9 = 1;
    }
    else{
        document.getElementById("gamebox9").style = "background: url(https://catherineasquithgallery.com/uploads/posts/2021-03/1614761039_130-p-belii-krug-na-chernom-fone-164.png); background-size: 6vw; pointer-events: none;";
        count  += 1;
        box9 = 2;
    }
}

document.getElementById("bim-bam").onclick = function(){
    console.log(count)
    if(box1==box2 && box1==box3 && box1==2 || box1==box4 && box1==box7 && box1==2 || box1==box5 && box1==box9 && box1==2 || box2==box5 && box2==box8 && box2==2 || box3==box6 && box3==box9 && box3==2 || box3==box5 && box3==box7 && box3==2 || box4==box5 && box4==box6 && box4==2 || box7==box8 && box7==box9 && box7==2){
        console.log("Круглы выиграли");
        count += 1;
        if(box1==0){
            document.getElementById("gamebox1").style= "pointer-events: none;";
        }
        if(box2==0){
            document.getElementById("gamebox2").style= "pointer-events: none;";
        }
        if(box3==0){
            document.getElementById("gamebox3").style= "pointer-events: none;";
        }
        if(box4==0){
            document.getElementById("gamebox4").style= "pointer-events: none;";
        }
        if(box5==0){
            document.getElementById("gamebox5").style= "pointer-events: none;";
        }
        if(box6==0){
            document.getElementById("gamebox6").style= "pointer-events: none;";
        }
        if(box7==0){
            document.getElementById("gamebox7").style= "pointer-events: none;";
        }
        if(box8==0){
            document.getElementById("gamebox8").style= "pointer-events: none;";
        }
        if(box9==0){
            document.getElementById("gamebox9").style= "pointer-events: none;";
        }
        box1 = box2 = box3 = box4 = box5 = box6 = box7 = box8 = box9 = 0;
    }
    if(box1==box2 && box1==box3 && box1==1 || box1==box4 && box1==box7 && box1==1 || box1==box5 && box1==box9 && box1==1 || box2==box5 && box2==box8 && box2==1 || box3==box6 && box3==box9 && box3==1 || box3==box5 && box3==box7 && box3==1 || box4==box5 && box4==box6 && box4==1 || box7==box8 && box7==box9 && box7==1){
        console.log("Дебилы выиграли");
        count += 1;
        if(box1==0){
            document.getElementById("gamebox1").style= "pointer-events: none;";
        }
        if(box2==0){
            document.getElementById("gamebox2").style= "pointer-events: none;";
        }
        if(box3==0){
            document.getElementById("gamebox3").style= "pointer-events: none;";
        }
        if(box4==0){
            document.getElementById("gamebox4").style= "pointer-events: none;";
        }
        if(box5==0){
            document.getElementById("gamebox5").style= "pointer-events: none;";
        }
        if(box6==0){
            document.getElementById("gamebox6").style= "pointer-events: none;";
        }
        if(box7==0){
            document.getElementById("gamebox7").style= "pointer-events: none;";
        }
        if(box8==0){
            document.getElementById("gamebox8").style= "pointer-events: none;";
        }
        if(box9==0){
            document.getElementById("gamebox").style= "pointer-events: none;";
        }
        box1 = box2 = box3 = box4 = box5 = box6 = box7 = box8 = box9 = 0;
    }
}
document.getElementById("button1").onclick = function(){
    document.getElementById("gamebox1").style = "pointer-events: all;";
    document.getElementById("gamebox2").style = "pointer-events: all;";
    document.getElementById("gamebox3").style = "pointer-events: all;";
    document.getElementById("gamebox4").style = "pointer-events: all;";
    document.getElementById("gamebox5").style = "pointer-events: all;";
    document.getElementById("gamebox6").style = "pointer-events: all;";
    document.getElementById("gamebox7").style = "pointer-events: all;";
    document.getElementById("gamebox8").style = "pointer-events: all;";
    document.getElementById("gamebox9").style = "pointer-events: all;";
}
