const Images = document.querySelectorAll(".gallery__img");
const ImgLightBox = document.querySelector(".window-open");
const ContainerImage = document.querySelector(".image-lightbox");
const ImageClose = document.querySelector(".window-close");
const BntMenu = document.querySelector(".menu");

Images.forEach((img) => {
  img.addEventListener("click", () => {
    let srcimg = img.getAttribute("src");
    ContainerImage.classList.add("image-lightbox--show");
    ImgLightBox.setAttribute("src", srcimg);
    ImgLightBox.classList.add("show-image");
    BntMenu.style.opacity = "0";
  });
});

ContainerImage.addEventListener("click", (e) => {
  //console.log(e.target)
  if (e.target == ImageClose) {
    ContainerImage.classList.remove("image-lightbox--show");
    ImgLightBox.removeAttribute("src");
    ImgLightBox.classList.remove("show-image");
    BntMenu.style.opacity = "1";
  }
});
