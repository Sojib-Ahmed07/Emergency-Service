var heartCount = document.getElementById("heart-count");
var hearts = document.getElementsByClassName("far fa-heart");

for (var i = 0; i < hearts.length; i++) {
    hearts[i].clicked = false;

    hearts[i].onclick = function() {
        var current = parseInt(heartCount.innerText);

        if (!this.clicked) {
            heartCount.innerText = current + 1;
            this.clicked = true;
            this.style.color = "red";
        } else {
            heartCount.innerText = current - 1;
            this.clicked = false;
            this.style.color = "gray";
        }
    }
}

var coinCount = document.getElementById("coin-count");
var callButtons = document.getElementsByClassName("btn-call");

for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].onclick = function() {
        var parentCard = this.parentNode.parentNode;
        var serviceName = parentCard.getElementsByClassName("service-title")[0].innerText;
        var serviceNumber = parentCard.getElementsByClassName("phone-number")[0].innerText;

        var coins = parseInt(coinCount.innerText);
        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        coinCount.innerText = coins - 20;
        alert("Calling " + serviceName + " at " + serviceNumber);

        var historyList = document.getElementById("history-list");
        var noHistory = document.getElementById("no-history");

        var now = new Date();
        var time = now.toLocaleTimeString();

        var newEntry = document.createElement("div");
        newEntry.className = "p-3 border rounded-lg bg-gray-50";
        newEntry.innerHTML = "<div class='flex justify-between'><span>" + serviceName + "</span><span class='text-sm text-gray-500'>" + time + "</span></div><div class='text-sm text-gray-600'>" + serviceNumber + "</div>";

        historyList.appendChild(newEntry);
        noHistory.style.display = "none";
    }
}

var clearButton = document.getElementById("clear-history");

clearButton.onclick = function() {
    var historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    var noHistory = document.getElementById("no-history");
    noHistory.style.display = "block";
}

var copyCount = 0;
var copyButtons = document.getElementsByClassName('btn-copy');
var topCopyCount = document.getElementById('btn-copy-count');

for (var i = 0; i < copyButtons.length; i++) {
    copyButtons[i].onclick = function() {
        if (this.getAttribute('data-used') === 'yes') {
            return;
        }

        var numberDiv = this.parentNode.parentNode.getElementsByClassName('phone-number')[0];
        var numberText = numberDiv.innerText;

        var textarea = document.createElement('textarea');
        textarea.value = numberText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyCount = copyCount + 1;
        topCopyCount.innerText = copyCount;

        alert("Copied: " + numberText);

        this.setAttribute('data-used', 'yes');
    }
}
