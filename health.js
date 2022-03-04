const btnStart = document.querySelector(".btn-start");
const healthSpan = document.querySelector(".health");
const healthBar = document.querySelector(".health-inner");
const extraHealthBar = document.querySelector(".extra-health")
const MAX_DEFAULT_HEALTH = 100
const MAX_EXTRA_HEALTH = 200
var countDown = 100

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return
  
    setTimeout(() => {
      alert.classList.add("hide")
      alert.addEventListener("transitionend", () => {
        alert.remove()
      })
    }, duration)
  }

btnStart.addEventListener("click", initiateHealth)

function initiateHealth(){
    countDown = setInterval(() => {
        let interval = parseInt(healthSpan.innerHTML);
        interval--;

        var healthWidth = interval / 100 * 100
        var extraHealth = healthWidth - 100

        if (healthWidth > MAX_DEFAULT_HEALTH)
            healthWidth = MAX_DEFAULT_HEALTH 
        
        // Checks if extra health exceeds the width of the default bar
        if (extraHealth > MAX_DEFAULT_HEALTH)
            extraHealth = MAX_DEFAULT_HEALTH
        
    
        if(interval > 0) {
            if (extraHealth > 0){
                extraHealthBar.style.visibility = "visible"
                extraHealthBar.style.width = extraHealth + "%"
                healthBar.style.width = MAX_DEFAULT_HEALTH + "%"
            }
            else{
                extraHealthBar.style.visibility = "hidden"
                healthBar.style.width = healthWidth + "%"
            }

            if (interval > MAX_EXTRA_HEALTH)
                healthSpan.innerHTML = MAX_EXTRA_HEALTH + "HP"
            else
                healthSpan.innerHTML = interval + " HP"
            
                checkColors(healthWidth)
        }   
        else{
            clearInterval(countDown)
            healthBar.style.width = "0%";
            healthSpan.innerHTML = "0 HP"

            result_score.innerHTML = "You scored " + counter.innerHTML
            modal_container.classList.add('show');
            return
            //showAlert("Game Over" , 5000);
        }
    }, 1000);
}


// btnStart.addEventListener("click", () => {
   
//     var countDown = setInterval(() => {
//         let interval = parseInt(healthSpan.innerHTML);
//         interval--;

//         var healthWidth = interval / 100 * 100
//         var extraHealth = healthWidth - 100

//         if (healthWidth > MAX_DEFAULT_HEALTH)
//             healthWidth = MAX_DEFAULT_HEALTH 
        
//         if (extraHealth > MAX_EXTRA_HEALTH)
//             extraHealth = MAX_EXTRA_HEALTH
        
    
//         if(interval > 0) {
//             if (extraHealth > 0){
//                 extraHealthBar.style.visibility = "visible"
//                 extraHealthBar.style.width = extraHealth + "%"
//                 healthBar.style.width = MAX_DEFAULT_HEALTH + "%"
//             }
//             else{
//                 extraHealthBar.style.visibility = "hidden"
//                 healthBar.style.width = healthWidth + "%"
//             }
//             healthSpan.innerHTML = interval + " HP"
//             checkColors(healthWidth)
//         }   
//         else{
//             clearInterval(countDown)
//             healthBar.style.width = "0%";
//             healthSpan.innerHTML = "0 HP"

//             result_score.innerHTML = "You scored " + counter.innerHTML
//             modal_container.classList.add('show');
            
//             showAlert("Game Over" , 5000);
//         }
//     }, 1000);
// });


const checkColors = (width) => {
    if(width > 60) {
        healthBar.style.background = "green"
    }
    else if(width > 30) {
        healthBar.style.background = "yellow"
    }
    else {
        healthBar.style.background = "red"
    }
}