# About This Project

I decided to create this repo after realizing that I can't get Disney+ to work with picture-in-picture.
The initial code comes from a google search (I can't remember where, but I'll link it here if I find it), and I've modified it to my liking.
I use Arc and have yet to check if this problem exists on other browsers, so the instructions below apply specifically to arc. 
Once I've finished the (first) final version of the code, I'd like to try and publish it as a Boost on Arc's website :)

## Instructions
1. Open Disney+, log in, and start playing a video.
2. In Arc's sidebar, go down to the "+" button by your spaces, click, and select "New Boost."
3. Once the boost is open, select "code", open the "JS" window, and paste the code found in (https://github.com/justgeorges/disney-plus-inpicture/blob/master/in-picture.js)[in-picture.js] into the space.
4. Reload the page, and try moving away from Disney+. Your movie/show should follow you!

## How It Works
For those that aren't coders, this is a quick explanation on how this injected JavaScript works.
The code first looks for the actual video player within the webpage, and then removes an attribute called 'disablepictureinpicture' -- which prevents picture-in-picture from being used like normal.

## Future Changes
Currently, this only works on Arc, so I would like to check its usage on other browsers and incude those instructions as well.
I'd like to adjust the way that the element is targeted and make the code a little more elegant.
Currently, the bar that shows the video's progress is broken, so I'd like to add code that fixes that.

If you found this helpful, please give the project a star, and stay tuned for other Arc customization!
