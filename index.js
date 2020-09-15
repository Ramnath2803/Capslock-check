
    let capslockcheck=document.querySelector("#caps_lock_check")
    let warningMessage=document.querySelector("#caps_lock_check_warning")

    capslockcheck.addEventListener("keyup" ,function(e){
        if (e.getModifierState("CapsLock")){
            warningMessage.classList.remove('d-none')}
            else
            {
                warningMessage.classList.add("d-none")
            }
        }
    )
    
   

