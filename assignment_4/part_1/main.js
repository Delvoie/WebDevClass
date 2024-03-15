const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//step 2
storytext = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

 insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
 insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
 insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

 //step 3
 randomize.addEventListener('click', result);

 function result() {
    let newstory = storytext;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
//use .replace to realce playceholders
 
   if(customName.value !== '') {
     const name = customName.value;
    newstory = newstory.replace('Bob', name);
   }
 
   if(document.getElementById("uk").checked) {
     const weight = Math.round(300);
     const temperature =  Math.round(94);
 
   }
 
   story.textContent = '';
   story.textContent = storytext.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem).replace(/:insertx:/g, xItem);
   story.style.visibility = 'visible';
 }