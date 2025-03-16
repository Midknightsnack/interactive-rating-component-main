// const btnEl = document.querySelector('.rating-button');

// btnEl.addEventListener('click', ()=> {
//     btnEl.classList.add('special');
// });

const btnElList = document.querySelectorAll('.rating-button');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnEl.classList.add('special');
    }); 
});

// const buttons = document.querySelectorAll('.rating-button'); 
 
// buttons.forEach(button => { 
//     button.addEventListener('click', function() { 
//         buttons.forEach(btn => btn.classList.remove('special')); // Remove active from all 
//         this.classList.add('special'); // Add active to clicked button 
//     }); 
// }); 