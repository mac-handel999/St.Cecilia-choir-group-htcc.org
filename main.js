    const p = document.querySelector('.acctno');
        
    const donateBtn  = document.querySelector('.donate');

  donateBtn.addEventListener('click', () => {
    
    if (p.innerHTML === " ") {
      p.innerHTML ="<strong>St.Cecilia Choir Group HTCC,</br> 1234567891011,</br>G.T Bank </strong>";
    } else {
      p.innerHTML = " ";
    }

   });
   
   
  
  
  
          

        
        

  const selectElem = document.querySelector("select");

  selectElem.addEventListener('change', () => {
    function checkPassword() {
      var password = prompt(" Enter The Members Access Password🤔:");
      if (password === "I_Sing@This_Choir" || password === "htcc_choir") {
        
        alert("Access granted!✅, Happy File Surfing!✌");
        
        // Call navigateToLink function to open the selected link
        
        navigateToLink(selectElem);
        
        
      } else {
        alert("Wrong Password🤭, Access denied!😋");
        selectElem.value = ""; // Reset the selection
      }
    }

    function navigateToLink(selectElem) {
      var url = selectElem.value; // Get the selected value and trim any whitespace
      if (url) {
        window.open(url, '_blank'); // Open the URL in a new tab
      }
    }

    // Call checkPassword when the user makes a selection
    checkPassword();
  });
  
  
  
  const nav = document.querySelector('.nav-links');
  
  const menuBtn = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', () => {
     if (menuBtn.innerText =="Show Menu") {
      
       menuBtn.innerText = "Hide Menu ";
       
       nav.style.display = "inline-block";
       
     } else {
       
       menuBtn.innerText = "Show Menu";
       
       nav.style.display = "none"
     }
  });
  
  
/*  const btn = document.querySelector('.toggle-btn');
  
const body = document.querySelector('body');  // Changed to select 'body' element directly

const img = document.querySelector('.toggle-btn-img');

const navBar = document.querySelector('.nav-bar');

const footer = document.querySelector('.footer');

btn.addEventListener('click', () => {
  // Use a variable to store the current background color
  const currentBackgroundColor = window.getComputedStyle(body).backgroundColor;

  // Compare against the RGB value o f white
  
  if (currentBackgroundColor === 'rgb(245, 222, 179)') {
   
    body.style.backgroundColor = '#4A0000' //' #A69577';
    
    img.src ='images/togglebtn-darkmode.png';
    
   navBar.style.backgroundColor ="#260000"; //"#A69577" 
   
   footer.style.backgroundColor = "#260000"
    
    btn.style.borderColor ='#4A0000'

  } else {
    body.style.backgroundColor = 'rgb(245,222,179)';
    img.src = 'images/ togglebtn-lightmode.png';
    
    navBar.style.backgroundColor ="#4A0000"; //"#A69577" 
   
   footer.style.backgroundColor = "#4A0000";
   
    btn.style.borderColor ='wheat';


  }
});

const btn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');
const img = document.querySelector('.toggle-btn-img');
const navBar = document.querySelector('.nav-bar');
const footer = document.querySelector('.footer');

// Function to set the theme
function setTheme(backgroundColor, imgSrc, navColor, footerColor, borderColor) {
  body.style.backgroundColor = backgroundColor;
  img.src = imgSrc;
  navBar.style.backgroundColor = navColor;
  footer.style.backgroundColor = footerColor;
  btn.style.borderColor = borderColor;
}

// On page load, check for stored background color in localStorage
window.addEventListener('load', () => {
  const savedBackgroundColor = localStorage.getItem('backgroundColor');

  if (savedBackgroundColor === '#4A0000') {
    setTheme('#4A0000', 'images/togglebtn-darkmode.png', '#260000', '#260000', '#4A0000');
  } else {
    setTheme('rgb(245, 222, 179)', 'images/togglebtn-lightmode.png', '#4A0000', '#4A0000', 'wheat');
  }
});*/

const btn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');
const img = document.querySelector('.toggle-btn-img');
const navBar = document.querySelector('.nav-bar');
const footer = document.querySelector('.footer');

// Function to set the theme
function setTheme(backgroundColor, imgSrc, navColor, footerColor, borderColor) {
  body.style.backgroundColor = backgroundColor;
  img.src = imgSrc;
  navBar.style.backgroundColor = navColor;
  footer.style.backgroundColor = footerColor;
  btn.style.borderColor = borderColor;
}

// On page load, check for stored background color in localStorage
window.addEventListener('load', () => {
  const savedBackgroundColor = localStorage.getItem('backgroundColor');

  if (savedBackgroundColor === '#4A0000') {
    setTheme('#4A0000', 
    'images/togglebtn-darkmode.png', '#260000', '#260000', '#4A0000');
  } else {
    setTheme('rgb(245, 222, 179)', 
    
   'images/togglebtn-lightmode.png', '#4A0000', '#4A0000', 'wheat');
  }
});

// Toggle button click event
btn.addEventListener('click', () => {
  const currentBackgroundColor = window.getComputedStyle(body).backgroundColor;

  if (currentBackgroundColor === 'rgb(245, 222, 179)') {
    setTheme('#4A0000', 
    'images/togglebtn-darkmode.png', '#260000', '#260000', '#4A0000');
    localStorage.setItem('backgroundColor', '#4A0000');
  } else {
    
    setTheme('rgb(245, 222, 179)',
    
  'images/ togglebtn-lightmode.png', '#4A0000', '#4A0000', 'wheat');
    localStorage.setItem('backgroundColor', 'rgb(245, 222, 179)');
  }
});