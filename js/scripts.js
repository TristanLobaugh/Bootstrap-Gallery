function changeColumns(numberOfColumns)	{
	imageDivs = document.getElementsByClassName("images");
	for(var i = 0; i < imageDivs.length; i++)	{
		imageDivs[i].className = "images";
		imageDivs[i].classList.add("col-lg-" + numberOfColumns);
	}
}
function offset(numberOfOffset)	{
	imageDivs = document.getElementsByClassName("images");
	for(var i = 0; i < imageDivs.length; i++)	{
		imageDivs[i].classList.add("col-lg-offset-" + numberOfOffset);
	}
}














