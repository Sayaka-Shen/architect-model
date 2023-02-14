/* MODAL */
// MODAL VARIABLE
const img = document.querySelectorAll(".imgFrame img");
const imgFull = [];

// CREATE A NEW ELEMENT
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(18px)";
frameImg.style.backgroundColor = "rgba(0,0,0,0.7)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.zIndex = 2;
document.body.prepend(frameImg);

// FOR LOOP
for (let i = 0; i < img.length; i++) {
    
    let n = i;
    img[i].addEventListener("click", () => {
        frameImg.style.display = "flex";
        imgFull[n] = document.createElement("img");
        imgFull[n].style.width = "50%";

        imgFull[n].src = img[n].src;
        frameImg.append(imgFull[n]);
    })
}

// GETTING RID OF IT
frameImg.addEventListener("click", (event) => {
    console.dir(event);
    if (!frameImg.querySelector("img").contains(event.target)) {
        frameImg.style.display = "none";
        frameImg.innerHTML ="";
    }
})