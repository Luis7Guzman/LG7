//welcome to Javascript HELLO WORLD

//tab selector
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode) { 
        tabButtons.forEach(function(node){
                node.style.backgroundColor="";
                node.style.color="";
        });
tabButtons[panelIndex].style.backgroundColor=colorCode;
tabButtons[panelIndex].style.color="white";
tabPanels.forEach(function(node){
        node.style.display="none";
});
tabPanels[panelIndex].style.display="flex";
tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#0d0d0d');

//MODAL SCRIPT POP UP
    const btns = document.querySelectorAll("[data-target]");
    const close_modals = document.querySelectorAll(".close-modal");
    const overlay = document.getElementById("overlay");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelector(btn.dataset.target).classList.add("active");
            overlay.classList.add("active");
        });
    });

    close_modals.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

    window.onclick = (event) => {
        if (event.target == overlay) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => modal.classList.remove("active"));
            overlay.classList.remove("active");
        }
    };
