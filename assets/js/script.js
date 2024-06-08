window.addEventListener("load", function() {
    document.querySelector(".btn_close").addEventListener("click", function() {
        document.querySelector(".menu").style.display = "none"
    })
    document.querySelector(".btn_menu").addEventListener("click", function() {
        document.querySelector(".menu").style.display = "block"
    })
})

