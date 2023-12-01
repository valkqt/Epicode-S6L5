// function checkmark() {
//     const checkmark1 = document.querySelectorAll('.checkmark')[0]
//     const checkmark2 = document.querySelectorAll('.checkmark')[1]
//     console.log(checkmark1)

//     checkmark1.addEventListener('click', () => {
//         const checkbox = document.getElementById('nextEpisode')
//         checkmark1.classList.toggle('weheline')
//     })

// }

// checkmark()

const maturity = document.getElementById('maturity')
const showMaturity = document.getElementById('showMaturity')

maturity.addEventListener('change', (e) => {
    let index = e.target.selectedIndex

    switch (index) {
        case 0:
            showMaturity.textContent = 'Showing G-rated titles for this profile.';
            break
        case 1:
            showMaturity.textContent = 'Showing up to PG-rated titles for this profile.';
            break
        case 2:
            showMaturity.textContent = 'Showing up to PG-13 rated titles for this profile'
            break
        case 3: showMaturity.textContent = 'Showing up to 16+ rated titles for this profile'
        break
        case 4: showMaturity.textContent = 'Showing titles of all maturity ratings for this profile.'

        

    }
})

