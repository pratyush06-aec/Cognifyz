const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns= document.querySelectorAll(".dropdown select");
const button= document.querySelector("form button");
const from_currency= document.querySelector(".from select");
const to_currency= document.querySelector(".to select");
const message= document.querySelector(".msg");

for(let select of dropdowns){
    for(currency_code in country_list){
        let new_option= document.createElement("option");
        new_option.innerText= currency_code;
        new_option.value= currency_code;
        if(select.name=="from" && currency_code=="USD"){
            new_option.selected= "selected";
        }
        else if(select.name=="to" && currency_code=="INR"){
            new_option.selected= "selected";
        }
        select.append(new_option);
}
select.addEventListener("change" , (event)=>{
    update_flag(event.target);
});
}

const update_exchange_rate= async()=>{
    let amount= document.querySelector(".amount input");
    let amount_value= amount.value;
    if(amount_value=== "" || amount_value<1){
        alert("Please enter a valid amount");
    }
    else{
        console.log(amount_value);
    }
    const URL= `${BASE_URL}/${from_currency.value.toLowerCase()}/${to_currency.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data= await response.json();
    let rate= data[to_currency.value.toLowerCase()];
    let exchange_rate= amount_value * rate;
    msg.innerText= `${amount_value} ${from_currency.value}= ${exchange_rate} ${to_currency.value}`;
}

const update_flag= (element)=> {
    let currency_code= element.value;
    let country_code= country_list[currency_code];
    let new_source= `https://flagsapi.com/${country_code}/flat/64.png`;
    let image= element.parentElement.querySelector("img");
    image.src= new_source;
};

button.addEventListener("click" , (event)=>{
    event.preventDefault();
    update_exchange_rate();
});

window.addEventListener=("load" , ()=>{
    update_exchange_rate();
});
