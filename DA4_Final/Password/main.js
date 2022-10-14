function check(){
    const pass=document.getElementById("pass");
    var count=0;
    var length=pass.value.length;

    if(length>=16){
        count+=1;
    }
    else if(length<7){
        count+=.25;
    }
    else if(length<10){
        count+=.5;
    }
    else if(length<16){
        count+=.75;
    }

    var only_num_reg=/[0-9]+/g;
    var only_char_reg=/[a-z]+/g;
    var num_char_up_reg=/[A-Z]+/g;
    var strong_reg=/[!@#$%^&*()<>?,./:";']+/g;

    var only_num=pass.value.match(only_num_reg);
    var only_char=pass.value.match(only_char_reg);
    var num_char_up=pass.value.match(num_char_up_reg);
    var strong=pass.value.match(strong_reg);

    if((only_num!==null && only_char!==null) && (num_char_up!==null && strong!==null)){
        console.log("Strong");
        count+=1;
        document.getElementById("strength").style.backgroundColor="green";
    }
    else if(only_num!==null && only_char!==null && num_char_up!==null){
        count+=.75;
        console.log("Medium");
        document.getElementById("strength").style.backgroundColor="blue";
    }

    else if(only_num!==null && only_char!==null){
        count+=.5;
        console.log("Weak");
        document.getElementById("strength").style.backgroundColor="orange";
    }
    else if(only_num!==null || only_char!==null){
        count+=.25;
        console.log("Very Weak");
        // document.getElementById("number").style.color="green";
        document.getElementById("strength").style.backgroundColor="red";
    }





   var percent=100*count/2;
   document.getElementById("strength").style.width=percent+"%";
   console.log(count);

        

}



function randompass(){
    var length = 16;
    charset = "abcde~fghi@jklmno`pqr)s#tuvwxyzAB,CDE$FGHI*JKLMN(OP%QRSTUVW^XYZ0;1&23456789",
    retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}
document.getElementById("password-new").innerHTML=retVal;
}


function test(){
    // console.log("test");
    var pass=document.getElementById("len");
    pass.innerHTML="Length: "+document.getElementById("pass").value.length;
    pass.style.opacity="1";
    // setInterval(function(){
    //     pass.style.opacity="0";
    // },5000);
}

function testEnd(){
    // console.log("test");
    var pass=document.getElementById("len");
    pass.innerHTML="Length: "+document.getElementById("pass").value.length;
    pass.style.opacity="0";
    // setInterval(function(){
    //     pass.style.opacity="0";
    // },5000);
}