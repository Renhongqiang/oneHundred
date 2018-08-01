
var output = document.getElementById('output');//输出框
var num = 0;//输入输出框的值 int
var result = 0;//计算结果
var cal = 0;
var f = 0;
var doc = 0;//表示正在做的运算

window.onload = function(){
    var arr = document.getElementsByClassName('NumBt');
    for(var i = 0;i<arr.length;i++){
        
        
        arr[i].onclick = function(){
            if(cal == 1){
                num = 0;
                cal = 0;
                f = 0;
            }
            if(f==0){
                num = this.value;
                f=1;
            } else {
                num = num + this.value;
            } 
            output.value = num;
        }
    }
    }
//清屏 清存
 function ClearOutput(){
    output.value = 0;
    num = 0;
    result = 0;
    f = 0;
    doc = 0;
 }

 //加
 function Add(){
    cal = 1;
    doc = 1;//表示加运算
    if(result == 0){
        result = num;
    }else {
        result = Number(num) + Number(result);
    }
 }
//减
function Reduce(){
    cal = 1;
    doc = 2;//表示减运算
    if(result == 0){
        result = num;
    }else {
        result = Number(result) - Number(num);
    }
}
//乘
function Ride(){
    cal = 1;
    doc = 3;//表示乘运算
    if(result == 0){
        result = num;
    }else {
        result = Number(num) * Number(result);
    }
}
//除
function Except(){
    cal = 1;
    doc = 4;//表示除运算
    if(result == 0){
        result = num;
    }else {
        result = Number(result) / Number(num);
    }
}

 //求值
 function equal(){
     //加
    if(doc == 1){
        if(result == 0){
            result = num;
        }else {
            result = Number(num) + Number(result);
        }
    }
    if(doc == 2){
        if(result == 0){
            result = num;
        }else {
            result = Number(result) - Number(num);
        }
    }
    if(doc == 3){
        if(result == 0){
            result = num;
        }else {
            result = Number(num) * Number(result);
        }
    }
    if(doc == 4){
        if(result == 0){
            result = num;
        }else {
            result = Number(result) / Number(num);
        }
    }
    
    output.value = result;
    num = 0;
 }