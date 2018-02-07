const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.which || e.detail);
    var index = 0;
    if (key === code[index]) {
      index++;
    if (index === code.length) {
      alert("Hurray!")
    }
    }
  }
  }

const alphabet = []
let index = 0;
function onKeyDownHandler(e) {
  const key = parseInt(e.which);
  if (key === alphabet[index]) {
    index++;
  if (index === alphabet.length) {
    alert("Hurray!");
    index = 0;
  }
  } else {
    index = 0;
  }
}



const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
   document.body.addEventListener('keydown', function(e){
      var key = parseInt(e.which || e.detail);
      var index=0;
      if(key === code[index]){
      index++
      
     if(index === code.length){
       alert("Hurray");
       index=0;
     }
  }
     else{
       console.log(e.which);
       index=0;
     }
})
}

init();