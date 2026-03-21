let man = document.querySelector("#lol");
var click = 0;
man.style.backgroundColor="Red"
man.addEventListener("click",function(){

if(click==0){

man.innerHTML="Why Shoud we Learn it"
click=1;

}
else{
man.innerHTML="Abe Jaa";
click=0;
}
})

