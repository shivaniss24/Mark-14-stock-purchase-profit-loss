//step-1 = selecting all the elements

var initialPrice=document.querySelector("#initial-price");
var stocksQuantity=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#current-price");
var submitButton=document.querySelector("#submit-btn");
var outputBox=document.querySelector("#output-box");


function calculateProfitAndLoss(initial,quantity,current)
{
    
    if(initial>current)
    {
        //loss logic here
        var loss=(initial-current) *quantity;
        var lossPercentage=(loss/initial)*100;

        outputBox.innerText="Your loss is "+ loss + " and loss percentage is "+lossPercentage.toFixed(2)+ " % 👎 ";
        // outputBox.style.color='green';
    }
   else if(current>initial)
    {
        //profit logic here
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/initial)*100;
        outputBox.innerText="Your profit is "+ profit + " and profit percentage is "+profitPercentage.toFixed(2)+ " % 👍 ";
        outputBox.style.color='green';
        outputBox.style.padding='2rem';
        outputBox.style.fontsize ='bold';
    }
    else if(initialPrice.value==='',currentPrice.value==='',stocksQuantity.value==='')
    {
        //rest of logic
        outputBox.innerText="oh oh! please enter valid values 🖊️ ";
        // outputBox.style.color='green';
        // outputBox.style.padding='2rem';

}
else{
    outputBox.innerText="No pain no gain and no gain no pain. 🙌  ";
    // outputBox.style.color='green';
//     outputBox.style.padding='2rem';
 }
}

function submitHandler()
{
    var ip= Number(initialPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}
submitButton.addEventListener('click',submitHandler);