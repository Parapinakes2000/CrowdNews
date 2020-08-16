/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const fs = require('fs');

// Create a big map that matches hashtag with text
let dict = new Map();
var myPost = new Array();

/* slide down navigation bar*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
}


/* TextArea is the name of the desired textare.
 MaxHeight is the maximum height value. */
function textarea_height(TextArea, MaxHeight) {
    var textarea = document.getElementById(TextArea);
    var textareaRows = textarea.value.split("\n");
    var counter;
    if(textareaRows[0] != "undefined" && textareaRows.length < MaxHeight) {
      counter = textareaRows.length;
    } else if(textareaRows.length >= MaxHeight) {
      counter = MaxHeight;
    } else {
      counter = 1;
    }
    textarea.rows = counter; 
}

/* Get the input of the user. */
function getInputValue(){
  var content = document.getElementById("input_box").value;
  var tag = document.getElementById("tags").value;
  /* this simple version only allows one hashtag */
  if (tag.indexOf("#") != tag.lastIndexOf("#")) {
    alert("Invalid number of hashtags.");
  } else if(!dict.has(tag.substring(1))) {
    var texts = new Array(content);
    dict.set(tag, {contents : texts, engage : 1});
    fs.writeFile('store.txt', content, (err) => { })
  } else {
    dict.set(tag, {contents : dict.get(tag).contents.push(content), engage : dict.get(tag).engage + 1});
    myPost.push(content);
  }
}

/* Updates the main page so that it shows the most recent post. */
function updateMyPost() {
  document.getElementById("most_recent").innerHTML = myPost.pop();
}