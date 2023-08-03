let betAmount = 1;
let played = false;
waitForFourty();

function waitForFourty() {
    let checkTime = document.getElementsByClassName("lKhnppmfyfNJfusq7PzX")[0].innerText.replace('NON-LIVE\nCLASSIC WHEEL\n', '');
    console.log("This is the time: ", checkTime);
    if (checkTime.localeCompare('00:25')  === 0) {
        // Takes a bet when the counter reaches 20 seconds
        console.log("Ready to Play: ", checkTime);
        placebet(played);
    } else {
        // For some reason the code only works consistently with this unnecessary line of code, mxm
        document.getElementsByClassName('iRGX2h7OO48Hztwp3xPI txKFFTh3sW6jbfMmVsk9')[5].click();
        console.log("Still waiting...", checkTime);
        console.log("Current bet amount...", betAmount);
        setTimeout(waitForFourty, 1000);
    }
}

function placebet(played) {
    setTimeout(document.getElementsByClassName('iRGX2h7OO48Hztwp3xPI txKFFTh3sW6jbfMmVsk9')[5].click(), 100);
    console.log("Playing: ");
    let winner = document.getElementsByClassName('rWFOVLQq91uXvB2PO0mw')[0].innerText;
    if (!played) {
        played = true;
    } 
    
    if (parseInt(winner) % 2 === 0) {
        // Means the number chosen was odd = LOSS
        console.log("HAD A WIN", betAmount);
        // Adjust the bet amount accordingly
        betAmount = 1;
        console.log("NEW BET AMOUNT", betAmount);
    } else {
        // Means the number chosen was odd = LOSS
        console.log("HAD A LOSS: ", betAmount);
        // Adjust the bet amount accordingly
        betAmount = betAmount * 2;
        console.log("NEW BET AMOUNT", betAmount);
    }

    console.log("THIS IS PLAYED", played);
    // click even
    document.getElementsByClassName('iRGX2h7OO48Hztwp3xPI txKFFTh3sW6jbfMmVsk9')[5].click();
    // clear amount
    document.getElementsByClassName('Jn_N1pZAR76SxfnblhBk j6rzKtmAv3ycGN7HVml0 bet-slip-amount-button')[0].click();

    for (let i = 0; i < betAmount; i++) {
        // add new amount
        document.getElementsByClassName('Jn_N1pZAR76SxfnblhBk bet-slip-amount-button')[0].click();
    }

    // place bet
    console.log("Betting");
    document.getElementsByClassName('HHIGeahQvz8uCj49XIBu place-bet-button')[0].click();
    // Wait for a bit before the next bet
    setTimeout(waitForFourty, 65000);
}

