// logo.js


document.addEventListener("DOMContentLoaded", function() {
    // Replace the placeholder with the actual image
    var logoContainer = document.getElementById("logo-container");
    var logoLink = document.createElement("a");
    logoLink.href = "https://lse.posgrados.fi.uba.ar/"; // Replace with your desired URL
    logoLink.target = "_blank"; // Optional:
    var logoImg = document.createElement("img");
    logoImg.src = "./images/uba.png"; // Adjust path to your actual logo
    logoImg.alt = "Logo"; // Optional alt text for accessibility
    
    logoLink.appendChild(logoImg); 
    logoContainer.appendChild(logoLink);
});
