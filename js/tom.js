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

  let timePassing;
  let seconds = 0;
  let startTamogotchi;
  const secondsGoUp = () => {
      seconds += 1;
      $('#time').text("Time " + seconds)
      if (seconds % 4 == 0) {
        $("#babyMario").animate({left:"500px"}, 2000)
                       .animate({left:"-1px"}, 1000);
      }
      if (seconds % 4 == 0) {
        $("#bigMario").animate({left:"500px"}, 2000)
                      .animate({left:"-1px"}, 1000)
      }



      if(startTamogotchi != undefined) {
        incrementAttributes()
      }

  }
  let incrementAttributes = () => {
    if(seconds % 10 == 0) {
      startTamogotchi.age += 1
      //when mario hits age 5
      if(startTamogotchi.age == 5) {
        $('#babyMario').css("display", "none")
        $('#bigMario').show()

      }
    }

    if(seconds % 5 == 0) {
      startTamogotchi.hunger += 1
    }
    if(seconds % 7 == 0) {
      startTamogotchi.bored += 1
    }
    if(seconds % 12 == 0) {
      startTamogotchi.sleep += 1
    }
  displayAttributes()

  if(startTamogotchi.hunger == 10 || startTamogotchi.bored == 10 || startTamogotchi.sleep == 10){
    $('#bigMario').remove()
    $('#deadMario').show()
     clearInterval(timePassing)
     seconds = 0
     $('time').text("Time" + seconds)
    }
  }

  let displayAttributes = () => {
    $('#stats').remove()
    let display = "<div id='stats'>"
    display += "Hunger: " + startTamogotchi.hunger
    display += "<br />Sleepy: " + startTamogotchi.sleep
    display += "<br />Bored: " + startTamogotchi.bored
    display += "<br /> Age: " + startTamogotchi.age
    display += "</div>"
    $("#container").append(display)
  }

  $('#lightButton').on('click', (e) => {
    if(startTamogotchi.sleep > 1) {
    startTamogotchi.sleep -= 1
  }
    displayAttributes()
  })

  $('#feedButton').on('click', (e) => {
    if(startTamogotchi.hunger > 1) {
      startTamogotchi.hunger -= 1
    }
    displayAttributes()
  })

  $('#playButton').on('click', (e) => {
    if(startTamogotchi.bored > 1) {
    startTamogotchi.bored -= 1
  }
    displayAttributes()
  })

  $('#startButton').on('click', () => {
      if(startTamogotchi == undefined){
        timePassing = setInterval(secondsGoUp, 1000);
        let name = $('#name-field').val()
        $('#headerName').append(name)
        startTamogotchi = new Tomagotchi(name)
        displayAttributes()
      }
  })
})
