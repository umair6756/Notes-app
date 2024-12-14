addBtn = document.getElementById('addBtn');

function addNote(){
  let newDiv = document.createElement('div');

  newDiv.classList.add('notes');

  let newText = document.createElement('textarea');

  newDiv.appendChild(newText);

 // create delete button
  let firstBtn = document.createElement('a');
  firstBtn.href = '#';
  firstBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
  firstBtn.classList.add('first');


  newDiv.appendChild(firstBtn);

// create edit button

    let secondBtn = document.createElement('a');
    secondBtn.href = '#';
    secondBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';


    newDiv.appendChild(secondBtn);

    // create copy button

        let thirdBtn = document.createElement('a');
        thirdBtn.href = '#';
        thirdBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';


        newDiv.appendChild(thirdBtn);

  let outputDiv = document.querySelector('.outPut');


  outputDiv.appendChild(newDiv);

 // deleteBtn function

  function deleteDiv(event){
    event.preventDefault();
    newDiv.remove();
  }

  firstBtn.addEventListener('click', deleteDiv);

  // speak text function

  function speakText() {
    let text = newText.value;
    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = 'en-US';

    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  }

  secondBtn.addEventListener('click', speakText);

 // copy text function

 function copyText(event){
   event.preventDefault();
   newText.select();

   document.execCommand('copy');
 }

 thirdBtn.addEventListener('click', copyText);

}


addBtn.addEventListener('click', addNote);
