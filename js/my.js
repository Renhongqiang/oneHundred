window.onload = function(){
    var num = 0;
    var arr = document.getElementsByClassName('NumBt');
    for(var i = 0;i<arr.length;i++){
        var f = 0;
    arr[i].onclick = function(){
    // alert(this.value);
    var output = document.getElementById('output');
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