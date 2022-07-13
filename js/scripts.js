/* Dropdowns*/
//Dropdowns con anclas (no selectores)
const buttonDropdown = document.querySelectorAll(".btn-dropdown")
const body = document.querySelector("body")
const dropdownContent = document.querySelectorAll(".dropdown-content")
const drpdwnMenu = document.querySelectorAll(".dropdown-menu-content")
const BtndrpdwnMenu = document.querySelectorAll(".dropdown-menu")

for (let i = 0; i < buttonDropdown.length; i++) {
    buttonDropdown[i].addEventListener("click", function() {
        buttonDropdown[i].classList.toggle("active")
        buttonDropdown[i].nextElementSibling.classList.toggle("show")
    })
}

for (let i = 0; i < BtndrpdwnMenu.length; i++) {
    BtndrpdwnMenu[i].addEventListener("click", function() {
        BtndrpdwnMenu[i].classList.toggle("showed")
        BtndrpdwnMenu[i].childNodes[2].classList.toggle("show")
    })
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-menu')) {
        for (let i = 0; i < drpdwnMenu.length; i++) {
            drpdwnMenu[i].classList.remove('show');
        }
        for (let i = 0; i < BtndrpdwnMenu.length; i++) {
            BtndrpdwnMenu[i].classList.remove('showed');
        }
    }
    if (!event.target.matches('.btn-dropdown')) {
        for (let i = 0; i < dropdownContent.length; i++) {
            dropdownContent[i].classList.remove('show');
        }
        for (let i = 0; i < buttonDropdown.length; i++) {
            buttonDropdown[i].classList.remove('active');
        }
    }
}

//
try {
    /* Popover*/
    //Tooltip accionado con un click
    const popover = document.querySelectorAll(".btnPopover")

    for (let i = 0; i < popover.length; i++) {
        popover[i].addEventListener("click", function() {
            popover[i].nextElementSibling.classList.toggle("show")
        })
    }
} catch (error) {

}

try {
    /* Acordiones*/
    //Este es el script general para los acordiones
    const accordion = document.querySelectorAll(".accordion")

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            accordion[i].classList.toggle("active")
            accordion[i].nextElementSibling.classList.toggle("show")
        })
    }
} catch (error) {

}

try {
    /* Tarjeta principal colapsable*/
    //Este es el script para las tarjetas principales colapsables
    const collapse = document.querySelectorAll(".collapse")

    for (let i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener("click", function() {
            collapse[i].classList.toggle("active")
            collapse[i].nextElementSibling.classList.toggle("show")
        })
    }
} catch (error) {

}

try {
    //Script para el menú lateral
    const btnMenuLat = document.querySelectorAll(".btn-close-lateral-menu")
    const menuLat = document.querySelectorAll(".lateral-menu")

    for (let i = 0; i < btnMenuLat.length; i++) {
        btnMenuLat[i].addEventListener("click", function() {
            btnMenuLat[i].classList.toggle("active")
            menuLat[i].classList.toggle("show-hidden")
        })
    }
} catch (error) {

}

//Script para menú resposivo
const btnMenu = document.querySelectorAll(".menu-responsive")
const menuRes = document.querySelectorAll(".menu-navigation")

for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener("click", function() {
        btnMenu[i].classList.toggle("active")
        menuRes[i].classList.toggle("show")
    })
}


try {
    //Script para la función de ocultar y mostrar la contraseña
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        this.classList.toggle('ic-eye-password-on');
    });
} catch (error) {
    
}

try {
    //Script para animar loader
    let vLoader

    const myFunction = () =>{
        vLoader = setTimeout(showPage, 3000)
    }

    myFunction()
    
} catch (error) {
    
}

try {
    //Script para modales ejectudados desde botón
    var modal = document.getElementById("Modal");
    var btn = document.getElementById("BtnModal");    
    var closebtn = document.getElementsByClassName("close")[0];
    
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    closebtn.onclick = function() {
        modal.style.display = "none";
    }    
    
} catch (error) {
    
}

try {
    //Script para enmascarar el campo de fecha
    function doFormat(x, pattern, mask) {
        var strippedValue = x.replace(/[^0-9]/g, "");
        var chars = strippedValue.split('');
        var count = 0;
      
        var formatted = '';
        for (var i=0; i<pattern.length; i++) {
          const c = pattern[i];
          if (chars[count]) {
            if (/\*/.test(c)) {
              formatted += chars[count];
              count++;
            } else {
              formatted += c;
            }
          } else if (mask) {
            if (mask.split('')[i])
              formatted += mask.split('')[i];
          }
        }
        return formatted;
      }
      
      document.querySelectorAll('[data-mask]').forEach(function(e) {
        function format(elem) {
          const val = doFormat(elem.value, elem.getAttribute('data-format'));
          elem.value = doFormat(elem.value, elem.getAttribute('data-format'), elem.getAttribute('data-mask'));
          
          if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', val.length);
            range.select();
          } else if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(val.length, val.length);
          }
        }
        e.addEventListener('keyup', function() {
          format(e);
        });
        format(e)
      });
} catch (error) {
        
}

try {
    /// Script para las tabs navs
    const tabsItems = document.querySelectorAll('.tabs__header__item')
    const tabsBodies = document.querySelectorAll('.tabs__body')

    for (let i = 0; i < tabsItems.length; i++){
        tabsItems[i].addEventListener('click', () => {
            resetTabs()
            tabsItems[i].classList.add('item-active')
            resetTabsBodies()
            tabsBodies[i].classList.add('show-body')
        })
    }

    const resetTabs = () => {
        for (let i = 0; i < tabsItems.length; i++){
            tabsItems[i].classList.remove('item-active')
        }
    }
    const resetTabsBodies = () => {
        for (let i = 0; i < tabsBodies.length; i++){
            tabsBodies[i].classList.remove('show-body')
        }
    }
} catch (error) {
    
}

try {
    //Selector de paises
    const select = document.querySelector('.country-selector')
    const options = document.querySelector('.options-country')
    const optionsItems = document.querySelectorAll('.options__item')

    select.addEventListener('click', ()=> {
        options.classList.toggle('show')
    })

    for (let i = 0; i < optionsItems.length; i++){
        optionsItems[i].addEventListener('click', () => {
            let content = optionsItems[i].innerHTML
            select.innerHTML = content  
            options.classList.toggle('show')      
        })
    }

} catch (error) {
    
}