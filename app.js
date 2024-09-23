const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
hlink.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})
const toggleSection = document.querySelector("#toggleSection");
const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", () => {
    // Toggle the 'hidden' class on the section
    toggleSection.classList.toggle("hidden");
    
    // Change the button text depending on the visibility
    if (toggleSection.classList.contains("hidden")) {
        toggleButton.textContent = "SHOW ME";
    } else {
        toggleButton.textContent = "HIDE ME";
    }
});
