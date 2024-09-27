const url=`https://v6.exchangerate-api.com/v6/eeccde7c96931a04595916ba/latest`;

const dropdown=document.querySelectorAll(".dropdown select");
const button =document.querySelector(".button");
const cntry1=document.getElementById("select-cuntry1");
const cntry2=document.getElementById("select-cuntry2");
const cuntryValue1=cntry1.value;
const cuntryValue2=cntry2.value;
const result= document.querySelector(".convert-btn");
// const cuntryUrl=document.querySelector("")

for(let select of dropdown){
    for(currencyCode in countryList){
        // console.log(currencyCode,countryList[currencyCode])
        let newOption=document.createElement("option");
        newOption.innerText=currencyCode;
        newOption.value=currencyCode;
        if(select.name==="from" && currencyCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currencyCode==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        changeFlag(evt.target);
    })
}

const changeFlag=(element)=>{
    // console.log(element);
    let currencyCode=element.value;
    let cuntryCode=countryList[currencyCode];
    let source=`https://flagsapi.com/${cuntryCode}/flat/64.png`;
    let image=element.parentElement.querySelector("img");
    image.src=source;
    console.log(currencyCode,cuntryCode);

}

button.addEventListener('click',(evnt)=>{
    evnt.preventDefault();
    const cuntryValue1=cntry1.value;
    const cuntryValue2=cntry2.value;
    console.log("button was clicked");
    let amount=document.querySelector("form input");
    let input=amount.value;
    console.log(input);

       const finalUrl=`${url}/${cuntryValue1}`;

       fetch(finalUrl)
       .then(response=>response.json())
       .then(data=>{
           console.log(data.conversion_rates)
           let response=data.conversion_rates;
           
           let rate = response[cuntryValue2];
           if (rate) {
                console.log(`Rate of ${cuntryValue1}: ${response[cuntryValue1]}`)
                console.log(`Rate of ${cuntryValue2}: ${rate}`);
                let finalAmount1=response[cuntryValue1]*input;
                let finalAmount2=input*rate;
                console.log(`The final amount is ${finalAmount1} ${cuntryValue1} is equal to ${finalAmount2} ${cuntryValue2}`)
                result.innerText=`${finalAmount1} ${cuntryValue1} = ${finalAmount2} ${cuntryValue2}`
           } else {
               alert(console.log("Rate not found."));
                
           }
        
        })
       .catch(error => {
           console.error('Error fetching data:', error);
        });
    

})




 

  
  