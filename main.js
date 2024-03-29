//console.log(window.width)

const nav = document.querySelector(".nav-items");
const menubar = document.querySelector(".menu-bar");
const dev_logo = document.querySelector(".logo");
const about_modal = document.querySelector(".modal_wrapper");
const close = document.querySelector(".close");
const button = document.querySelector("button");
const webdev_project = document.querySelector("#webdev_project");
const dotnet_project = document.querySelector("#dotnet_project");
const photo_project = document.querySelector("#photography_project");
const project_div = document.querySelector(".ul");

console.log(dotnet_project);

function showHide(value) {
  value = value.toLowerCase().trim();
  const about = document.querySelector("#about");
  const works = document.querySelector("#works");
  const resume = document.querySelector("#resume");
  const blog = document.querySelector("#blog");
  if (value === "about") {
    if (Array.from(about.classList).includes("hide")) {
      about.classList.remove("hide");
      about.classList.add("show");
      if (Array.from(works.classList).includes("show")) {
        works.classList.remove("show");
        works.classList.add("hide");
      }
      if (Array.from(resume.classList).includes("show")) {
        resume.classList.remove("show");
        resume.classList.add("hide");
      }
      if (Array.from(blog.classList).includes("show")) {
        blog.classList.remove("show");
        blog.classList.add("hide");
      }
    } else {
      about.classList.add("hide");
      about.classList.remove("show");
    }
  }

  if (value === "resume") {
    if (Array.from(resume.classList).includes("hide")) {
      resume.classList.remove("hide");
      resume.classList.add("show");
      if (Array.from(about.classList).includes("show")) {
        about.classList.remove("show");
        about.classList.add("hide");
      }
      if (Array.from(works.classList).includes("show")) {
        works.classList.remove("show");
        works.classList.add("hide");
      }
      if (Array.from(blog.classList).includes("show")) {
        blog.classList.remove("show");
        blog.classList.add("hide");
      }
    } else {
      resume.classList.add("hide");
      resume.classList.remove("show");
    }
  }

  if (value === "works") {
    if (Array.from(works.classList).includes("hide")) {
      works.classList.remove("hide");
      works.classList.add("show");
      if (Array.from(about.classList).includes("show")) {
        about.classList.remove("show");
        about.classList.add("hide");
      }
      if (Array.from(resume.classList).includes("show")) {
        resume.classList.remove("show");
        resume.classList.add("hide");
      }
      if (Array.from(blog.classList).includes("show")) {
        blog.classList.remove("show");
        blog.classList.add("hide");
      }
    } else {
      works.classList.add("hide");
      works.classList.remove("show");
    }
  }
  if (value === "blog") {
    if (Array.from(blog.classList).includes("hide")) {
      blog.classList.remove("hide");
      blog.classList.add("show");
      if (Array.from(about.classList).includes("show")) {
        about.classList.remove("show");
        about.classList.add("hide");
      }
      if (Array.from(resume.classList).includes("show")) {
        resume.classList.remove("show");
        resume.classList.add("hide");
      }
      if (Array.from(works.classList).includes("show")) {
        works.classList.remove("show");
        works.classList.add("hide");
      }
    } else {
      blog.classList.add("hide");
      blog.classList.remove("show");
    }
  }

  if (value === "contact") {
    about_modal.style.display = "block";
  }
}
const aside = document.querySelector("aside");
aside.addEventListener("click", e => {
  try {
    const nxtSibling = document.getElementById(e.target.id).nextElementSibling;
    showHide(nxtSibling.textContent);
  } catch {
    showHide(e.target.textContent);
  }
});

project_div.addEventListener("click", e => {
  //console.log(e.target);
  if (e.target.textContent === "Web") {
    if (!Array.from(webdev_project.classList).includes("projectShow")) {
      e.target.style.background = "#3cb371";
      e.target.style.color = "#fff";
      e.target.nextElementSibling.style.background = "#fff";
      e.target.nextElementSibling.style.color = "#000";
      e.target.nextElementSibling.nextElementSibling.style.background = "#fff";
      e.target.nextElementSibling.nextElementSibling.style.color = "#000";
      if (Array.from(dotnet_project.classList).includes("projectShow")) {
        dotnet_project.classList.remove("projectShow");
        dotnet_project.classList.add("projectHide");
      }
      if (Array.from(photo_project.classList).includes("projectShow")) {
        photo_project.classList.remove("projectShow");
        photo_project.classList.add("projectHide");
      }
      webdev_project.classList.add("projectShow");
      webdev_project.classList.remove("projectHide");
    } else {
      e.target.style.background = "";
      e.target.style.color = "#000";
      webdev_project.classList.remove("projectShow");
      webdev_project.classList.add("projectHide");
    }
  }

  if (e.target.textContent === "Dot Net") {
    if (!Array.from(dotnet_project.classList).includes("projectShow")) {
      e.target.style.background = "#3cb371";
      e.target.style.color = "#fff";
      e.target.previousElementSibling.style.background = "#fff";
      e.target.previousElementSibling.style.color = "#000";
      e.target.nextElementSibling.style.background = "#fff";
      e.target.nextElementSibling.style.color = "#000";
      //document.querySelector(".ul span").style.background = "#3cb371";
      if (Array.from(webdev_project.classList).includes("projectShow")) {
        webdev_project.classList.remove("projectShow");
        webdev_project.classList.add("projectHide");
      }
      if (Array.from(photo_project.classList).includes("projectShow")) {
        photo_project.classList.remove("projectShow");
        photo_project.classList.add("projectHide");
      }
      dotnet_project.classList.add("projectShow");
      dotnet_project.classList.remove("projectHide");
    } else {
      e.target.style.background = "";
      e.target.style.color = "#000";
      dotnet_project.classList.remove("projectShow");
      dotnet_project.classList.add("projectHide");
    }
  }

  if (e.target.textContent === "Photography") {
    if (!Array.from(photo_project.classList).includes("projectShow")) {
      e.target.style.background = "#3cb371";
      e.target.style.color = "#fff";
      e.target.previousElementSibling.style.background = "#fff";
      e.target.previousElementSibling.style.color = "#000";
      e.target.previousElementSibling.previousElementSibling.style.background =
        "#fff";
      e.target.previousElementSibling.previousElementSibling.style.color =
        "#000";

      if (Array.from(webdev_project.classList).includes("projectShow")) {
        webdev_project.classList.remove("projectShow");
        webdev_project.classList.add("projectHide");
      }
      if (Array.from(dotnet_project.classList).includes("projectShow")) {
        dotnet_project.classList.remove("projectShow");
        dotnet_project.classList.add("projectHide");
      }
      photo_project.classList.add("projectShow");
      photo_project.classList.remove("projectHide");
    } else {
      e.target.style.background = "#3cb371";
      e.target.style.color = "#fff";
      photo_project.classList.remove("projectShow");
      photo_project.classList.add("projectHide");
    }
  }
});

close.addEventListener("click", e => {
  about_modal.style.display = "none";
});
about_modal.addEventListener("click", e => {
  if (Array.from(e.target.classList).includes("modal_wrapper"))
    about_modal.style.display = "none";
});
