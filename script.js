const votes = document.querySelectorAll('.votes .vote')
const submit = document.querySelector('.container #rating .submit')
const voted = document.querySelector('#thxu .voted')

const rating = document.getElementById('rating')
const thxu = document.getElementById('thxu')

rating.style.display = 'flex'
thxu.style.display = 'none'

let currentVote = -1

// set active the vote button clicked and updates current vote
votes.forEach((element, idx) => {
    element.addEventListener('click', () => {
        votes.forEach((vote, idx) => {
            vote.classList.remove('active')
        })
        element.classList.add('active')
        console.log(element.textContent)
        currentVote = element.textContent
        console.log(`current vote ${currentVote}`)
    })
})

// on submit click shows the related content
submit.addEventListener('click', () => {
    console.log(`clicked submit, current vote ${currentVote}`)
    if (currentVote < 0) {
        alert('Please vote!')
    }
    else {
        rating.style.display = 'none'
        thxu.style.display = 'flex'
        voted.textContent = `You selected ${currentVote} out of 5`
    }
})