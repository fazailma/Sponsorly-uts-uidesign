// smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
  
  // menu mobile
  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const navLinks = document.querySelector(".nav-links")
    const body = document.body
  
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
      if (navLinks.classList.contains("active")) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
    })
  
    // Menutup menu 
    const navLinksItems = document.querySelectorAll(".nav-links a")
    navLinksItems.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active")
        navLinks.classList.remove("active")
        body.style.overflow = "" 
      })
    })
  
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("active") && !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove("active")
        navLinks.classList.remove("active")
        body.style.overflow = ""
      }
    })
  })
  