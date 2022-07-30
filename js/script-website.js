let step = 1;
let selectedHorse;
let winner = "";	

function nextPage() {
      step++;
      document.getElementById(`st-control-${step}`).setAttribute("checked", true);
      if (step === 6) {
            setTimeout(startRace, 100);
      }
}

function selectHorse(id) {
      selectedHorse = horses[id];
      if (selectedHorse) {
            document.getElementById(id).setAttribute("style","filter: brightness(200%)");
            document.getElementById("startBtn").setAttribute("style","display:block");
            document.getElementById("selectedHorse").innerHTML = `SELECTED HORSE: <b>${selectedHorse.name}</b>`;
            
      }
}

function startRace() {
      const horseIds = Object.keys(horses);
      let duration = 0;		

      for (let i = 0; i < horseIds.length; i++) {
            const horseID = horseIds[i];
            const speed = horses[horseID].speed.toString();
            if(speed > duration){
                  duration = speed;
                  winner = horses[horseID].name
            }
            document.getElementById(`horse-${horseIds[i]}`).setAttribute("style",`display:block; animation-duration: ${speed}s`);
}
      setTimeout(winnerResult, duration*1000);
}

function winnerResult() {
      document.getElementById(`winner-name`).innerHTML = `Winner: ${winner}`;
      if(selectedHorse.name === winner) {
            document.getElementById(`your-result`).innerHTML = `Congratulations, your Horse won!!!! <br /><br /> <button type="button" class="btn-action" onclick="restart()">Race Again?</button>`;
      }else {
            document.getElementById(`your-result`).innerHTML = `Sorry, your Horse lost <br /><br /> <button type="button" class="btn-action" onclick="restart()">Race Again?</button>`;
      }
}

function restart() {
      window.location.reload();
}

const horses = {
      snached: {
            name: `Snached Your MaMa`,
            odds: '2/1',
            speed: (10) + (Math.floor(Math.random() * 11)) 
      },
      dancin: {
            name: `Dancin Shoes`,
            odds: '2/1',
            speed: (9) + (Math.floor(Math.random() * 11))
      },
      tax: {
            name: `Tax the Rich`,
            odds: '2/1',
            speed: (8) + (Math.floor(Math.random() * 11))
      },
      study: {
            name: `Study Buddy`,
            odds: '2/1',
            speed: (7) + (Math.floor(Math.random() * 11))
      },
      cant: {
            name: `Can't Be Wronger`,
            odds: '2/1',
            speed: (6) + (Math.floor(Math.random() * 11))
      },
      ol: {
            name: `Ol'Skag`,
            odds: '2/1',
            speed: (5) + (Math.floor(Math.random() * 11))
      },
};