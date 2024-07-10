// this one is distroyed when sesion is close
sessionStorage.setItem("user","my-sesion-storage")
// this one persist
localStorage.setItem("user","my-local-storage")

// to test it, just comment out all and close the page
// reopen the page to see which of them is still present

document.cookie = "username=John Doe";
// let ck  = getCookie("user");
// console.log(ck)
