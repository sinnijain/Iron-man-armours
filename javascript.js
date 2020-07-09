function openSidebar()
{
	document.getElementsByClassName("sidebar")[0].classList.toggle("active");
	document.getElementsByClassName("hamburger-menu")[0].classList.toggle("change");
	document.getElementsByClassName("line-1")[0].classList.toggle("change");
	document.getElementsByClassName("line-2")[0].classList.toggle("change");
	document.getElementsByClassName("line-3")[0].classList.toggle("change");
}

var index = 1;

function displayItems(n)
{
	var i;

    var items = document.getElementsByClassName("item");
    

    if (n > items.length) { index = 1 }  

    if (n < 1) { index = items.length } 

    for (i = 0; i < items.length; i++) 
    {  
    	items[i].style.display = "none";  
    }  

    items[index-1].style.display = "block";
	

}



function next(n)
{
	displayItems(index += n);
}


function showMe()
{

	var myCard = document.getElementsByClassName("card")[0];
	var imgWrapper = document.getElementsByClassName("card-img-wrapper")[0];
	var myCardWrapper = document.getElementsByClassName("card-wrapper")[0];
	var myBio = document.getElementById("myBio");

	myCardWrapper.style.display="inline";
	myCard.style.height = "30rem";
	myCard.style.width = "21rem";
	

	document.getElementById("me").innerHTML = "SAWAI JAIN";
	document.getElementById("myBio").style.visibility="visible";
	document.getElementById("myBio").style.opacity=1;


	if (x.matches) 
	{ // If media query matches
    	myCard.style.height = "25rem";
		myCard.style.width = "17rem";
  	}



  	if (y.matches) 
	{ // If media query matches



    	myCard.style.display = "none";
    	document.getElementById("myBio").style.left = "0%";
    	document.getElementById("myBio").style.width = "100%";
    	document.getElementById("myBio").style.height = "100%";
    	document.getElementsByClassName("team")[0].style.height = "575px";
 
  	}

  	else 
  	{
   		document.body.style.backgroundColor = "rgb(255, 204, 224)";
  	}


}


var x = window.matchMedia("(max-width: 900px)")
x.addListener(showMe)


var y = window.matchMedia("(max-width: 700px)")
y.addListener(showMe)


