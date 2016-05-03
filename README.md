# Bootstrap Gallery with Labs!

### Simple gallery using bootsrap and some of it's methods

## Summary

#### Bootstrap gallery that uses the bootstrap grid sytem to layout and format the page. The page also uses bootstrap's navbar and drop downs to chnage the format of the page. Finally the page uses the bootstrap modal when the user clicks on one of the images to get a popout window with a larger image of the one selected.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Demo

[Live Demo](http://tristanlobaugh.com/bootstrap_gallery)

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/bootstrap_gallery/master/img/screen_shot.png)

### Navbar Drop-down formatting:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/bootstrap_gallery/master/img/screen_shot2.png)

### Bootstrap Modal:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/bootstrap_gallery/master/img/screen_shot3.png)


##Code Examples

### Code that chooses the format of the bootstrap grid system on the page
```
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
```