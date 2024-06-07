
document.addEventListener("DOMContentLoaded", function() {
    let chatPageMobile = document.querySelector(".chatting-page-mobile");
    let chatListmobile = document.querySelectorAll(".main-messaging-for-phone-mobile-only-profile");
    let chatlistPage = document.querySelector("#tablets-messaging-page");
    let chatBackIcon = document.querySelector(".chat-back-icon");

    // Check if chatBackIcon exists before adding event listener
    if (chatBackIcon) {
        chatBackIcon.addEventListener("click", function() {
            if (chatPageMobile.style.display === "block") {
                chatPageMobile.style.display = "none";
                chatlistPage.style.display = "block";
            } else {
                chatPageMobile.style.display = "none";
            }
        });
    }

    for (var j = 0; j < chatListmobile.length; j++) {
        chatListmobile[j].addEventListener("click", function() {
            if (chatlistPage.style.display === "block") {
                chatlistPage.style.display = "none";
                if (chatPageMobile.style.display === "none") {
                    chatPageMobile.style.display = "block";
                }
            } else {
                chatPageMobile.style.display = "block";
                chatlistPage.style.display = "none";
            }
        });
    }
});

var stayLive = document.querySelector(".stay");
var leaveContainer = document.querySelector(".leave-popup-container");
var liveCancel = document.querySelector(".live-cancel")

/*liveCancel.addEventListener("click", function(){
    if(leaveContainer.style.display ==="none"){
        leaveContainer.style.display ="flex"
    } else{
        leaveContainer.style.display ="none"
    }
})
stayLive.addEventListener("click", function(){
    if(leaveContainer.style.display ==="flex"){
        leaveContainer.style.display ="none"
    } else{
        leaveContainer.style.display ="none"
    }
})*/



