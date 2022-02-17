
// this is calulate button function

function calcButton(){

    // foodInput 

    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodInputNumber = parseFloat(foodInputText);

   

    if(foodInputText<0){
        foodInputNumber='';
    }


    // clear foodInput value here
    foodInput.value = '';
    
    
    
    // rentInput 

    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentInputNumber = parseFloat(rentInputText);
    if(rentInputText<0){
        rentInputNumber = '';
       

    }
    
   

    // rentInput value clear here

    rentInput.value = '';


    // clothesInput


    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = clothesInput.value;
    const clothesInputNumber = parseFloat(clothesInputText);
    if(clothesInputText<0){
        clothesInputNumber = '';
        

    }
    
    // clothesInput value clear here

    clothesInput.value = '';

    const total = foodInputNumber + rentInputNumber + clothesInputNumber;
    
    // total expenses and balances are counting here

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesNumber = parseFloat(totalExpensesText);
    totalExpenses.innerText = total;

    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputNumber = parseFloat(incomeInputText);
    if(incomeInputText<0){
        incomeInputNumber = '';
       
    }

    

    incomeInput.value = '';
    
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);

    totalBalance.innerText = incomeInputNumber - total; 

   

    
    
};




// Saving button function is starts here


function save(){
    
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);
    const updateBalance = totalBalanceNumber / 100;


    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const saveInputNumber = parseFloat(saveInputText);
    if(saveInputText<0){
        saveInputNumber = '';
    }

    const savingTotalAmount = updateBalance * saveInputNumber;

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    const savingAmountNumber = savingAmountText;

    savingAmount.innerText = savingTotalAmount;

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;
    const remainingBalanceTotal = parseFloat(remainingBalanceText);

    remainingBalance.innerText = totalBalance.innerText -  savingAmount.innerText;

    // clear saving number input value
    saveInput.value = '';

};