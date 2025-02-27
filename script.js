let rating = document.querySelector('.rate')
let selectedRating = null

// Rating Button Implementation
for (let i = 0; i < 5; i++){
    let rateButton = document.createElement('button')
    rateButton.className = "btn rounded-circle"
    rateButton.textContent = i + 1
    rateButton.dataset.number = i + 1

    rateButton.addEventListener('click', () => {
        let allRateButtons = rating.querySelectorAll('.rounded-circle')
        allRateButtons.forEach(button => {
            button.classList.remove('active-rating')
        })
        rateButton.classList.add('active-rating')
        selectedRating = rateButton.dataset.number
    })  

    rating.appendChild(rateButton)
}

function submitRating() {

    // Invalid Submission
    if(selectedRating === null) {
        alert('Please select rating')
        return
    }

    // Toggling Different Cards
    let toggleSubmit = document.getElementsByClassName('rating')
    for (var i = 0; i < toggleSubmit.length; i++) {
        toggleSubmit[i].classList.remove('active')
    }

    let result = document.getElementsByClassName('result')
    for (var i = 0; i < result.length; i++) {
        result[i].classList.add('active')
    }

    // Display Submitted Rating
    document.getElementById('submittedRating').textContent = "You selected " + selectedRating + " out of 5"
}