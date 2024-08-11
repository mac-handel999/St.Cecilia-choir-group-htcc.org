    const p = document.querySelector('.acctno');
        
    const donateBtn  = document.querySelector('.donate');

  donateBtn.addEventListener('click', () => {
    
    if (p.innerHTML === " ") {
      p.innerHTML ="<strong>St.Cecilia Choir Group HTCC,</br> 1234567891011,</br>G.T Bank </strong>";
    } else {
      p.innerHTML = " ";
    }

   });
   
   
  
  
  
   function navigateToLink(selectElement) {
            var url = selectElement.value;
            if (url) {
                window.open(url, '_blank');
            }
        }
  
