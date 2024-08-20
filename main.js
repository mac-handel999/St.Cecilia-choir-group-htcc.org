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
      var password = prompt(" Enter The Members Access Password:");
      if (password === "I_Sing@This_Choir") {
        alert("Access granted!");
        
        // Call navigateToLink function to open the selected link
        
        navigateToLink(selectElem);
        
        
      } else {
        alert("Access denied!");
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
