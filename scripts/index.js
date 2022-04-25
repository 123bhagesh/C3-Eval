// Store the wallet amount to your local storage with key "amount"

const addToWallet = ()=>{
   
    var amount = document.getElementById("amount").value

    var data=Number(localStorage.getItem("amount"))

   

    if(localStorage.getItem("amount")){
      amount = data+Number(amount)
    }
    localStorage.setItem("amount",Number(amount))
    
    var money=document.getElementById("wallet")
  // var data=Number(localStorage.getItem("amount"))
  var amt =Number(localStorage.getItem("amount"))
  money.innerText=amt;

  }
