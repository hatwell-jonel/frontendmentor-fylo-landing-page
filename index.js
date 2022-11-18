window.addEventListener("load", () => {
  const emailForm = document.querySelector("#email_form");
  const email1 = document.querySelector("#email1");
  const email2 = document.querySelector("#email2");
  const loader = document.querySelector(".loader");
  const freeAccess_form = document.querySelector("#freeAccess_form");

  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (email1.value == "") {
      let nextSibling = email1.nextElementSibling;

      nextSibling.style.display = "block";
      email1.style.border = "1px solid red";

      setTimeout(() => {
        nextSibling.style.display = "none";
        email1.style.border = "1px solid black";
      }, 5000);
    }
  });

  freeAccess_form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (email2.value == "") {
      let nextSibling = email2.nextElementSibling;

      email2.style.border = "1px solid red";
      nextSibling.style.display = "block";

      setTimeout(() => {
        nextSibling.style.display = "none";
        email2.style.border = "1px solid transparent";
      }, 5000);
    }
  });

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 2500);

  AOS.init();
});
