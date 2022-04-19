$(document).ready(function() {
    $('.image_gellery').magnificPopup({
        type:'image',
        delegate:'a',
        gallery:{enabled:true}
      });
  });

let tabbtn = document.querySelectorAll('#tab');
    let tab = document.querySelectorAll('.tab1');
    function showtab(tabpanel) {
        tabbtn.forEach((event) => {
            event.style.background = '';
            event.style.color = '#111';
        });
        tabbtn[tabpanel].style.background = '#016cb9';
        tabbtn[tabpanel].style.color = '#fff';
        tab.forEach((event) => {
            event.style.display = "none";

        });
        tab[tabpanel].style.display = 'block';
    }
    showtab(0);

  


 