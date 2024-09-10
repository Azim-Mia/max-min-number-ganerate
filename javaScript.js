// initial all function
const init =()=>{
minNumberGanerate()
 maxNumberGanerate();
 aurgumentMaxNumber("Number",2,3,2,4,6,7,8,99,4,3,3);
}
const minNumberGanerate=()=>{
  const roots =document.getElementById("root");
  //array is handle = total,value,index,array
  let array=[1,4,32,6,786,565,43,435,65,34];
let min =array[0];
  for(let i=0; i<array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
    }
    const h1Elm = document.createElement("h1");
    const pElm = document.createElement("p");
    pElm.innerHTML= `Array Length : ${array.length}`;
  h1Elm.innerHTML =`Min Number : ${min}`;
root.appendChild(pElm);  
 root.appendChild(h1Elm); 
}
//..........................................start
const maxNumberGanerate=()=>{
  const roots =document.getElementById("root");
  let array=[1,4,32,6,786,565,43,435,65,34];
let max =array[0];
  for(let i=0; i<array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
    }
const h1Elm = document.createElement("h1");
const pElm = document.createElement("p");
 pElm.innerHTML= `Array Length : ${array.length}`;
  h1Elm.innerHTML =`max Number : ${max}`;
   root.appendChild(pElm);
    root.appendChild(h1Elm); 
}
//....................................start
const aurgumentMaxNumber =(text, ...z)=>{
  let array = z;
const roots =document.getElementById("root");
let min =array[0];
  for(let i=0; i<array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
    }
    const h1Elm = document.createElement("h1");
    const pElm = document.createElement("p");
    pElm.innerHTML= `Array Length : ${array.length}`;
  h1Elm.innerHTML =`Min Number : ${min}`;
root.appendChild(pElm);  
 root.appendChild(h1Elm); 
}
init();
