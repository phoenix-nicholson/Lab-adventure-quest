import { userProfile, getUser } from '../utils.js';
const user = getUser();
userProfile();

const button = document.getElementById('btn');
const resultMessage = document.getElementById('result-message');

button.addEventListener('click', ()=>{
    localStorage.clear(userProfile);
    window.location.replace('../');
});

if (user.hp <= 0){
    resultMessage.textContent = 'Your adventure ends here. Unfortunatley ends here the seas have taken you away.';
} else {
    resultMessage.textContent = 'Awesome! You are a very powerful pirate. The king of pirates is in reach!';
}