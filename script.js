const button_list = document.querySelectorAll('.rating-button');
const final_rating = document.getElementById('user-rating');

button_list.forEach(button => {
    button.addEventListener('click', () => {
        // ? means that in case the first click doesn't exist, it won't give an error and allow us to continue
        // https://www.youtube.com/watch?v=zh1xus05Kl8&ab_channel=ByteGrad
        document.querySelector('.rating-button-clicked')?.classList.remove('rating-button-clicked');
        button.classList.add('rating-button-clicked');

        final_rating.innerHTML = button.innerHTML;
        // console.log(button.innerHTML);
    }); 
});

const submit_btn = document.querySelector('.submit-button')
const rating = document.querySelector('.first-section')
const rating_after = document.querySelector('.thank-you-state')

rating_after.classList.add('hide');

submit_btn.addEventListener('click', () => {
    rating.classList.add('hide');
    rating_after.classList.add('appear');
});