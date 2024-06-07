
let countdownElement = document.getElementById('countdown');
let countdownValue = 3; // Initial countdown value
let countdownInterval;
var onLivePage = document.querySelector(".real-on-live-page");

var launchMobile = document.querySelector(".add-icon-for-mobile-live-launch");
var launchIcon1 = document.querySelector("#Layer_1");
var launchLiveMobile = document.querySelector(".main-live-launching-page-for-phone-only-mobile-size");
var ProfileMobile = document.querySelector(".icon-profile-mobile");

var explorePageMobile = document.querySelector(".explore-page-mobile");
var exploreSearchMobile = document.querySelector("#search-trends");
var searchIconMobile = document.querySelector(".search-icon");

var homePageMobile = document.querySelector(".home-page");
var trendsLogo = document.querySelector(".trends-logo-menu");
var homeIconMobile = document.querySelector(".home-icon");

var mainLivePage = document.querySelector("#main-live-page");
var mainLiveIcon = document.querySelector(".main-live-icon");

var exploreIcon = document.querySelector(".explore-icon");

var profileIcon = document.querySelector(".profile-icon");

var messageTabPage = document.querySelector("#tablets-messaging-page");
var messageIcon =document.querySelector(".message-icon")

var launchIcon = document.querySelector(".launch-live");
var launchPage = document.querySelector(".main-live-launching-page")

var searchPage = document.querySelector(".search-page")
var searchIcon = document.querySelector(".search-icon")

var notificationIcon = document.querySelector(".notification-icon")
var notificationPage = document.querySelector("#notification-page")

var moreIcon = document.querySelector(".more-icon");
var morePage = document.querySelector(".more-popup-icon");

var homePath = document.querySelector(".home-path")
var homePage = document.querySelector(".home-page")

var searchPath = document.querySelector(".search-path");
var searchPage = document.querySelector(".search-page");

var notificationPath = document.querySelector(".notification-path");
var notificationPage = document.querySelector("#notification-page");

var explorePath = document.querySelector(".explore-path");
var explorePage = document.querySelector(".explore-page");

var livePath = document.querySelector(".live-path");
var livePage = document.querySelector("#main-live-page");

var profilePath = document.querySelector(".profile-path");
var profilePage = document.querySelector(".main-profile-page");

var messagePath = document.querySelector(".message-path");
var messagePage = document.querySelector(".main-messaging-page");

var launchPath = document.querySelector(".launch-path");
var launchPage = document.querySelector(".main-live-launching-page")

var morePath = document.querySelector(".more-path");
var morePage = document.querySelector(".more-popup-icon");

var inboxContainer = document.querySelector(".inbox-container");
var mobileMessagingPage = document.querySelector(".main-messaging-page-for-phone-only-mobile-size");
var bottomIconsRemoval = document.querySelector(".side-navigation-icons-layout")
var backIcon = document.querySelector(".back-icon");
var logoutContainer = document.querySelector(".logout-container");

var slidingCarousel = document.querySelectorAll(".slider");
var currentShowPage = document.querySelector(".current-liveshow-page")

var trendingBrands = document.querySelectorAll(".trending-brands");
var exploreLiveshow = document.querySelectorAll(".live-shows");

var buyingShow = document.querySelector(".current-liveshow-mobile-page-main");

var mainLivePage = document.querySelector(".main-live-page")
var RandomShow = document.querySelector(".random-liveshow");
var recommendedLiveshowList = document.querySelectorAll(".recommended-liveshow-contents")

var currentLiveShowPage = document.querySelector(".current-liveshow-page");
var tabHomeSlide = document.querySelectorAll(".slider");
var trendingBrands = document.querySelectorAll(".trending-brands");

var productUploadList = document.querySelectorAll(".product-upload");
var buyingContinuePopup = document.querySelector(".continue-popup");
var cancelContinue = document.querySelector(".continue-cancel");

var productLaunchBox = document.querySelector("#product-box-launchpage");
var uploadProductPopup = document.querySelector(".product-upload-popup");
var productFillUpBox = document.querySelectorAll(".fill-up")
var fillUPContainer = document.querySelector(".live-products")
var uploadCancel = document.querySelector(".x-upload-icon");

var brandMessageLinkup = document.querySelector(".message-linkup");
var chatAnchor = document.querySelector(".anchor-to-chat");

var leftScroll = document.querySelector(".left-scroll");
var rightScroll = document.querySelector(".right-scroll")

var leftCarousel = document.querySelector(".left-carousel");
var rightCarousel = document.querySelector(".right-carousel");
var currentCarousel = document.querySelector(".current-carousel");

function replaceSVG() {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;

    if (isMobile) {
        if (launchMobile) {
            launchMobile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="nav-icon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><title>Launch live</title><path d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"/></svg>';
        }

        if (ProfileMobile) {
            ProfileMobile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g id="_01_align_center" data-name="01 align center"><path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/></g></svg>';
        }
    }

}
replaceSVG();

function startLiveStream() {
    if(countdownElement.style.display ==="none"){
        countdownElement.style.display ="flex" 
    } else{
        countdownElement.style.display ="flex" 
    }
    countdownInterval = setInterval(updateCountdown, 1300); // Update countdown every second
    updateCountdown();
     // Initial update
    // Add logic here to start the live stream after the countdown
}

function updateCountdown() {
    countdownElement.textContent = countdownValue;
    countdownValue--;

    if (countdownValue < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        countdownElement.textContent = 'GO LIVE!';
        /*if(onLivePage.style.display ==="none"){
            onLivePage.style.display ="block"
        } else{
            onLivePage.style.display ="block"
        }*/
        
    }
}

function pageContents(){
    const mobileInteractiviness = window.matchMedia('(max-width: 760px)').matches 
    if(mobileInteractiviness){
        for(var i = 0; i < trendingBrands.length; i++){
            trendingBrands[i].addEventListener("click", function(){
                if(buyingShow.style.display ==="none"){
                    buyingShow.style.display ="block"
                    homePageMobile.style.display ="none" 
                } else{
                    buyingShow.style.display ="block"
                    homePageMobile.style.display ="none"
                }
            })
        }
       
                  

          

        document.addEventListener('DOMContentLoaded', function() {
            var buyingShow = document.querySelector(".current-liveshow-mobile-page-main");
            var RandomShow = document.querySelector(".random-liveshow");
            var mainLivePage = document.querySelector(".main-live-page")// Replace with your actual element ID
        
            if (!RandomShow) {
                return;
            }
            
            if (!buyingShow) {
                console.error('Element with id "buyingShow" not found.');
                return;
            }
        
            if (!mainLivePage) {
                console.error('Element with id "mainLivePage" not found.');
                return;
            }
        
            RandomShow.addEventListener('click', function() {
                if (buyingShow.style.display === 'none') {
                    buyingShow.style.display = 'block';
                    mainLivePage.style.display = 'none';
                } else {
                    buyingShow.style.display = 'block';
                    mainLivePage.style.display = 'none';
                }
            });
        });
       
        
        for(var k = 0; k < productUploadList .length; k++){
            productUploadList[k].addEventListener("click", function(){
                if(buyingContinuePopup.style.display ==="none"){
                    buyingContinuePopup.style.display ="flex"
                } else{
                    buyingContinuePopup.style.display ="flex"
                }
            })
        }
        if (cancelContinue) {
            cancelContinue.addEventListener("click", function() {
                if (buyingContinuePopup.style.display === "flex") {
                    buyingContinuePopup.style.display = "none";
                } else {
                    buyingContinuePopup.style.display = "none";
                }
            });
        } 
        function sideCarousel(){
            var leftScroll = document.querySelector(".left-scroll");
            var rightScroll = document.querySelector(".right-scroll")
            var currentCarousel = document.querySelector(".current-carousel");
        
            var images = [
                "images/download.gif",
                "images/WhatsApp Image 2024-05-15 at 3.22.12 PM (2).jpeg",
                "images/WhatsApp Image 2024-05-15 at 3.22.12 PM.jpeg",
              ];
            
            var currentIndex = 0;
        
            currentCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
        
            rightScroll.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % images.length;
            currentCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
            });
        
            leftScroll.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            currentCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
            });

            currentCarousel.addEventListener('click', function(){
                window.location.href='playback.html'
            })
        
        }
        sideCarousel();
    }  
    
}
pageContents();