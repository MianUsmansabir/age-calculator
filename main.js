let button= document.querySelector('.btn');

 button.addEventListener('click', ()=>{
let dob = document.querySelector('#dob').value;
if(dob== ''){
    alert('Please Enter your Data of Birth.');
}
 let data = new Date(dob);
 let current= new Date();

 let yeardiffrence = current.getFullYear()-data.getFullYear();
  let monthdiffrence= current.getMonth()- data.getMonth();
  let daydiffrence= current.getDate()- data.getDate();
  if (daydiffrence <=0|| yeardiffrence<=0 || monthdiffrence<=0){
    daydiffrence=0;
    yeardiffrence=0;
    monthdiffrence=0;
  }

  else{
  let daydiffrence= current.getDate()- data.getDate();
 let yeardiffrence = current.getFullYear()-data.getFullYear();
  let monthdiffrence= current.getMonth()- data.getMonth();

  }
    
  document.querySelector('.yo').innerHTML= yeardiffrence;
  document.querySelector('.mo').innerHTML= monthdiffrence;
  document.querySelector('.do').innerHTML= daydiffrence;
 })