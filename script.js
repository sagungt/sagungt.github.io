class Slider {
  constructor(project) {
    this.id = 1;
    this.project = project;
    this.showSlides(1, project);
  }

  plusSlides(n) {
    this.showSlides((this.id += n));
  }

  showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".mySlides." + this.project);
    if (n > slides.length) {
      this.id = 1;
    }
    if (n < 1) {
      this.id = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.id - 1].style.display = "block";
  }
}

const p1 = new Slider("p1");
const p2 = new Slider("p2");
const p3 = new Slider("p3");
const p4 = new Slider("p4");

const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const btn = document.getElementById("projectsBtn");
const modalClose = document.getElementsByClassName("close")[0];
const imgs = document.querySelectorAll("img");
const imagePreview = document.querySelector(".image-preview");
const imageContainer = document.querySelector(".image-container");

btn.onclick = function () {
  modal.classList.add("show");
  modalContent.classList.add("show");
};

modalClose.onclick = function () {
  modal.classList.remove("show");
  modalContent.classList.remove("show");
};

imgs.forEach((image) => {
  image.addEventListener("click", (e) => {
    imagePreview.classList.add("show");
    console.log(e);
    imageContainer.innerHTML = `<img class="preview" src="${e.target.src}" alt="preview" />`;
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    modalContent.classList.remove("show");
  }
  if (
    event.target == imageContainer ||
    event.target == imageContainer ||
    event.target == document.querySelector(".preview")
  ) {
    imagePreview.classList.remove("show");
  }
};

document.querySelectorAll(".prev").forEach((element) => {
  element.addEventListener("click", (e) => {
    const project = e.target.classList[1];
    switch (project) {
      case "p1":
        console.log(project);
        p1.plusSlides(-1);
        break;
      case "p2":
        p2.plusSlides(-1);
        break;
      case "p3":
        p3.plusSlides(-1);
        break;
      case "p4":
        p4.plusSlides(-1);
        break;
      default:
        break;
    }
  });
});

document.querySelectorAll(".next").forEach((element) => {
  element.addEventListener("click", (e) => {
    const project = e.target.classList[1];
    switch (project) {
      case "p1":
        p1.plusSlides(1);
        break;
      case "p2":
        p2.plusSlides(1);
        break;
      case "p3":
        p3.plusSlides(1);
        break;
      case "p4":
        p4.plusSlides(1);
        break;
      default:
        break;
    }
  });
});

setInterval(() => {
  p1.plusSlides(1);
  p2.plusSlides(1);
  p3.plusSlides(1);
  p4.plusSlides(1);
}, 5000);
