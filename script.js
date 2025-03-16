// const btnEl = document.querySelector('.rating-button');

// btnEl.addEventListener('click', ()=> {
//     btnEl.classList.add('special');
// });

const button_list = document.querySelectorAll('.rating-button');

button_list.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.rating-button-clicked')?.classList.remove('rating-button-clicked');
        button.classList.add('rating-button-clicked');
    }); 
});

// const buttons = document.querySelectorAll('.rating-button'); 
 
// buttons.forEach(button => { 
//     button.addEventListener('click', function() { 
//         buttons.forEach(btn => btn.classList.remove('special')); // Remove active from all 
//         this.classList.add('special'); // Add active to clicked button 
//     }); 
// }); 