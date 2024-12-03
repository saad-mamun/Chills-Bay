const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("content");
toggleBtn.addEventListener("click", () => {
    if(content.classList.contains("hidden")){
        content.classList.remove("hidden", "opacity-0");
        content.classList.add("opacity-100");
    }else{
        content.classList.add("opacity-0");
        setTimeout(() => {
            content.classList.add("hidden");
            content.classList.remove("opacity-100");
          }, 500);
    }
} )