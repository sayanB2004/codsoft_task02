document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'image1.jpg',
        'image2.png',
        'image3.jpg'
    ];
    let currentIndex = 0;

    const sliderImage = document.getElementById('sliderImage');

    function showImage(index) {
        sliderImage.src = images[index];
        sliderImage.style.transform = 'scale(1)'; 
        sliderImage.style.filter = 'brightness(40%)'; 
        setTimeout(() => {
            sliderImage.style.transform = 'scale(1.1)'; 
            sliderImage.style.filter = 'brightness(50%)'; 
        }, 2000); // Delay zoom to ensure image is loaded
    }

    function nextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

    
    showImage(currentIndex);

    
    setInterval(nextImage, 3000);
});

const colors = ["blue","purple"];
let index = 0

function changeTextColor()
{
    const textElement = document.getElementById("chat");
    textElement.style.color = colors[index];
    index = (index + 1)%colors.length;
}

setInterval(changeTextColor, 1000);


const texts = [
    "TRULY UNLIMITED DATA",
    "INCLUSIVE OTT SUBSCRIPTION",
    "FREE 4G SIM CARD",
    "YEARLY AFFORDABLE PLANS "
];
let i = 0

function changeText()
{
    const textElement = document.querySelector("#ad > h1");
    textElement.textContent = texts[i];
    i = (i + 1)%texts.length;
}

setInterval(changeText,3000)


var crsr = document.querySelector("#cursor");


document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
})
