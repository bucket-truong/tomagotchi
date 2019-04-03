class Tomagotchi {
  constructor(name) {
    this.hunger = 1
    this.sleep = 1
    this.bored = 1
    this.age = 1
    this.name = name
  }
}


$(document).ready(() => {



  $('#lightButton').on('click', (e) => {
  })

  $('#feedButton').on('click', (e) => {
  })

  $('#playButton').on('click', (e) => {

  })

  let timePassing;
  let seconds = 0;
  let minutes = 0;
  const secondsGoUp = () => {
      seconds++;
      $('#time').text(seconds)
      if(seconds % 60 === 0){
          minutes++;
          $('.minutes').text(minutes);
      }
  }
  $('#startButton').on('click', () => {
      timePassing = setInterval(secondsGoUp, 1000);
      let name = $('#name-field').val()
      let startTamogotchi = new Tomagotchi(name)
      let display = "Hunger: " + startTamogotchi.hunger
      display += "<br />Sleepy: " + startTamogotchi.sleep
      display += "<br />Bored: " + startTamogotchi.bored
      display += "<br /> Age: " + startTamogotchi.age
      if(timePassing % 2 == 0) {
         ++display
      }
      $("#container").append(display)
  })

  secondsGoUp();
})
