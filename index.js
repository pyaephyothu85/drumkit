

function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  audio.currentTime = 0; // Rewind to the beginning
  audio.play();
 
}
 
  
document.addEventListener('keypress', function (event) {

  console.log(event.key);
  if (event.key == 'w') {
    playAudio('audio-w');
  }
    else if(event.key == 'a'){
playAudio('audio-a');
    }

    else if(event.key == 's'){
      playAudio('audio-s');
          }

          else if(event.key == 'd'){
            playAudio('audio-d');
                }

                else if(event.key == 'j'){
                  playAudio('audio-j');
                      }
                      else if(event.key == 'k'){
                        playAudio('audio-k');
                            }
   
                            else if(event.key == 'l'){
                              playAudio('audio-l');
                                  }

});


// Add event listener to the document for keydown event
//document.addEventListener('keypress', function (event) {
  //switch (event.key.toLowerCase()) {
  //case 'w':
  //playAudio('audio-w');
  //     break;
  //   case 'a':
  //     playAudio('audio-a');
  //     break;
  //   case 's':
  //     playAudio('audio-s');
  //     break;
  //   case 'd':
  //     playAudio('audio-d');
  //     break;
  //   case 'j':
  //     playAudio('audio-j');
  //     break;
  //   case 'k':
  //     playAudio('audio-k');
  //     break;
  //   case 'l':
  //     playAudio('audio-l');
  //     break;
  //   default: 
  //     break;
  // }
  


//   var key = event.key.toLowerCase();
//   if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'j' || key === 'k' || key === 'l') {
//     playAudio('audio-' + key);
//   }
// });