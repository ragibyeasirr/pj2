

const ser = () => {
     const a=document.getElementById("sc").value.toLowerCase();
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${a}`)
        .then((res)=>res.json())
    .then((data)=>{
          const pcc=document.getElementById("pc");
           pcc.innerHTML = ""; 
          if(!data.meals){
                pcc.innerHTML=`
                <h1>your searched  is not found </h1>
                `
                return;
          }




        dp(data.meals)
    })


}



const dp =(pd)=>{
const pcc=document.getElementById("pc");
pd.forEach((pdd) => {
    const div=document.createElement("div")
    div.classList.add("card");
  
    div.innerHTML=`
<img class="ci" src="${pdd.strMealThumb}" alt="">
<h2>Name :${pdd.strMeal}</h2>

`;
   

div.addEventListener("click",(event) =>{
const h=document.getElementById("h");
h.innerHTML=`
<div class="card">
<img class="ci" src="${pdd.strMealThumb}" alt="">
<h2>Name :${pdd.strMeal}</h2>
</div>
`


})


 pcc.appendChild(div);
   
});


};