function randomValue(){
    const value = Math.round(Math.random()*10);
    const result = parseInt(value);
    if(result >= 1 & result <= 3){
        return result;
    }
    else{
        return randomValue();
    }
}
function getPath(id){
    const path = document.getElementById(id);
    return path;
}
document.getElementById('guess-btn').addEventListener('click', function(){
    const result = randomValue();
    console.log(result);
    const inputValue = document.getElementById('input-value').value;
    if(isNaN(inputValue)){
        alert('Enter number between 1 to 3');
        return;
    }
    if(inputValue <= 0 || inputValue > 3){
        alert('Enter value betwen 1 to 3');
        return;
    }
    const guessNumber = getPath('guess-number');
    guessNumber.innerText = inputValue;
    const randomNumber = getPath('random-number');

    const success = getPath('success');
    const fail = getPath('fail');
    randomNumber.innerText = result;

    
    if(result == parseInt(inputValue)){
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else{
        fail.style.display = 'block';
        success.style.display = 'none';
    }
     setTimeout(function () { location.reload(true); }, 2500);
})