// Reading and Setting Paragraph Text

// Function to read paragraph text
function readParagraphText() {
  let paragraph = document.querySelector('#myParagraph');
  let output = document.querySelector('#output');
  
  let paragraphContent = paragraph.textContent
  
  output.textContent = `Current paragraph text: "${paragraphContent}"`;
}


// Function to set new paragraph text
function setParagraphText() {
  let input = document.querySelector('#newTextInput');
  let paragraph = document.querySelector('#myParagraph');
  let output = document.querySelector('#output');
  let newInputValue = input.value;
  if (newInputValue === '') {
    output.textContent = 'Please enter some text to set!';
  }
  else {
    paragraph.textContent = newInputValue;
    output.textContent = 'Paragraph text has been updated!';
    input.value = '';
  }
}
