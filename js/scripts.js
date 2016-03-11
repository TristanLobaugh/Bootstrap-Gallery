var numOfColumns = "col-lg-3";
var numOfOffset = "col-lg-offset-0";

function changeColumns(numberOfColumns)	{
	imageDivs = document.getElementsByClassName("images");
	for(var i = 0; i < imageDivs.length; i++)	{
		imageDivs[i].className = "images";
		imageDivs[i].classList.add(numOfOffset);
		imageDivs[i].classList.add("col-lg-" + numberOfColumns);
		numOfColumns = "col-lg-" + numberOfColumns;
	}
}
function offset(numberOfOffset)	{
	imageDivs = document.getElementsByClassName("images");
	for(var i = 0; i < imageDivs.length; i++)	{
		imageDivs[i].className = "images";
		imageDivs[i].classList.add(numOfColumns);
		imageDivs[i].classList.add("col-lg-offset-" + numberOfOffset);
		numOfOffset = "col-lg-offset-" + numberOfOffset;
	}
}







