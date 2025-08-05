var clickMeButton = document.createElement('Button');
clickMeButton.id = 'btn'

let count = 0;
clickMeButton.innerHTML = count;

clickMeButton.onclick = function() {
    clickMeButton.innerHTML = count++;
}

document.body.appendChild(clickMeButton);