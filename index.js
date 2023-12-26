document.getElementById("yesButton").addEventListener("click", function () {
  document.getElementById("response").textContent = "Yayyyy! see you soon i will msg you details 😊";
});

let noButtonHoverCount = 0;

document.getElementById('noButton').addEventListener('mouseover', function() {
    noButtonHoverCount++;
    const maxMovement = 575;
    const windowHeight = window.innerHeight - this.offsetHeight;
    const windowWidth = window.innerWidth - this.offsetWidth;

    this.style.position = 'absolute';
    this.style.top = Math.min(windowHeight, Math.max(0, this.offsetTop - maxMovement + Math.random() * (maxMovement * 2))) + 'px';
    this.style.left = Math.min(windowWidth, Math.max(0, this.offsetLeft - maxMovement + Math.random() * (maxMovement * 2))) + 'px';

    if (noButtonHoverCount %2===0 &&noButtonHoverCount>4) {
        // Display a playful message after the 4th hover
        alert(' bassss kar yarrr yes pe jao 😸');
    }
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Try again! Not a valid response 😜');
});


document.getElementById("noButton").addEventListener("click", function () {
  alert("Try again! Not a valid response 😜");
});
