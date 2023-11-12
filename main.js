const imageFriets = document.querySelector(".friet-coming");
const textConversation = document.getElementById("conversation-text");
const btnSend = document.getElementById("btn-send");
const inputPassword = document.getElementById("contrasenia-input");
const form = document.querySelector(".form");
const btnContinue = document.querySelector(".btn-success");
const containerDivSucess = document.querySelector(".container");
const containerDivLetter = document.querySelector(".container-2");

const cambiarImagen = (status = 0) => {
  if (status === 1) {
    containerDivSucess.classList.remove("animate__backInDown");
    containerDivSucess.classList.add("animate__headShake");
    imageFriets.src = "img/papa-enojada.svg";
    textConversation.textContent = "Esa no es!!!";

    setTimeout(() => {
      containerDivSucess.classList.remove("animate__headShake");
    }, 1000);
  } else if (status === 2) {
    imageFriets.src = "img/papa-contenta.svg";
    textConversation.textContent = "Por fin!!!";
    containerDivSucess.style.justifyContent = "center";
    form.classList.add("hidden");
    btnContinue.classList.remove("hidden");
  }
};

const regresarImagen = () => {
  setTimeout(() => {
    imageFriets.src = "img/papa-confundida.svg";
    textConversation.textContent = "Cuál será???";
  }, 2000);
};

btnSend.addEventListener("click", (e) => {
  const value = inputPassword.value;

  if (value === "210703") {
    cambiarImagen(2);
  } else {
    cambiarImagen(1);
    regresarImagen();
  }
});

btnContinue.addEventListener("click", (e) => {
  containerDivSucess.classList.remove("animate__backInDown");
  containerDivSucess.classList.remove("animate__headShake");
  containerDivSucess.classList.add("animate__backOutDown");
  setTimeout(() => {
    containerDivSucess.classList.remove("animate__backOutDown");
    containerDivSucess.classList.add("hidden");
    containerDivLetter.classList.remove("hidden");
    containerDivLetter.classList.add("animate__backInUp");
  }, 1000);
});
