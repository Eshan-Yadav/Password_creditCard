function limit(){
    var cedit_lim=40_000;
    var name=document.getElementById("name");
    var balance=document.getElementById("balance");
    var cost=document.getElementById("item-cost");

    cost=parseFloat(cost.value);
    balance=cedit_lim;

    var credit=eval(balance-cost);
    console.log(credit);
    document.getElementById("title").innerHTML=`Welcome ${name.value}!`;
    document.getElementById("tot_cred").innerHTML=`Your total credit is ${credit}`;
    document.getElementById("tot_cred").style.display="block";
    if(cost>cedit_lim){
        alert("You have exceeded your credit limit");
        document.getElementById("limit").style.display="block";
    }
   
}


function light(){
    var name=document.getElementById("name");
    var balance=document.getElementById("balance");
    var cost=document.getElementById("item-cost");
    if(name.value!==""){
        document.getElementById("fName").style.color="lightgreen";
    }
    else{
        document.getElementById("fName").style.color="red";
    }

    if(balance.value!==""){
        document.getElementById("fBalance").style.color="lightgreen";
    }
    else{
        document.getElementById("fBalance").style.color="red";
    }

    if(cost.value!==""){
        document.getElementById("fCost").style.color="lightgreen";
    }
    else{
        document.getElementById("fCost").style.color="red";
    }
}