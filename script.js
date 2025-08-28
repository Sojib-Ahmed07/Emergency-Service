var heartCount = document.getElementById("heart-count");
var hearts = document.getElementsByClassName("far fa-heart");

for (var i = 0; i < hearts.length; i++) {
    hearts[i].clicked = false; // flag to track state

    hearts[i].onclick = function() {
        var current = parseInt(heartCount.innerText);

        if (!this.clicked) {
            // First click: add
            heartCount.innerText = current + 1;
            this.clicked = true;
            this.style.color = "red"; // mark as active
        } else {
            // Second click: remove
            heartCount.innerText = current - 1;
            this.clicked = false;
            this.style.color = "gray"; // revert color
        }
    }
}


