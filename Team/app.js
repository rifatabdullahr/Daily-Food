
changeContent('showAllItems');
function changeContent(contentName){

let htmlDom = document.getElementsByClassName('content');


for (var i = 0; i < htmlDom.length; i++) {
	htmlDom[i].style.display="none";
}


document.getElementById(contentName).style.display = "block";

}



addFoodForm.addEventListener('input',()=>{
    if(category.value.length>0 && price.value.length>0 && img.value.length>0) {
    	addFoodBtn.removeAttribute("disabled"); 
    }else{
    	addFoodBtn.setAttribute("disabled",true);
    }
})



function saveDisCountBtn(){

	let btn = document.getElementById("disCountBtn");
	let checkInput = document.getElementById("getDiscountPrice").value;

	if(checkInput.length>0)
	{
      btn.removeAttribute("disabled");
    }else{
    	btn.setAttribute("disabled",true);
    }

}


function login(){

}