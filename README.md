# Project 1 - JavaScript Drumkit

Live Preview: https://fosteeco.github.io/javascript-drumkit/

Repo Link: https://github.com/fosteeco/javascript-drumkit

This project is part of the javascript30 challenge. It's a 30 day vanilla javascript coding challenge. This is the first project.

My solution is quite different than the one provided in the course. I didn't bother with the keycodes or querySelecting by the data-key. Instead I created a map that is indexed by the letter that is pressed. I think this would require less computational resources since the map is created on page load instead of the document listening for a keypress and searching for the div with the data-key attribute.

The setAudioByKey was initially creating the audio object but I found that it would only play once with this method. Now it just returns the string.

UPDATE: github doesn't work for hosting the sound files so setAudioByKey was updated to querySelect the audio tags

https://javascript30.com/
