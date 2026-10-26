const form = document.getElementById("form");

form.addEventListener("submit", function(event){
  event.preventDefault();

  const name = document.getElementById("name");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirm-password");

  const errorname = document.getElementById("error-name");
  const errornumber = document.getElementById("error-number");
  const erroremail = document.getElementById("error-email");
  const errorpassword = document.getElementById("error-password");
  const errorconfirmpassword = document.getElementById("error-confirm-password");

  errorname.innerText = "";
  errornumber.innerText = "";
  erroremail.innerText = "";
  errorpassword.innerText = "";
  errorconfirmpassword.innerText = "";

  let valid = true

  if (name.value.trim() === "") {
    errorname.textContent = "Masukan nama!";
    valid = false;
  } else if (name.value.trim().length < 3) {
    errorname.textContent = "Minimal 3 huruf!";
    valid = false;
  }

  if (number.value.trim() === "") {
    errornumber.textContent = "Masukan nomor telepon!";
    valid = false;
  } else if (number.value.trim().length < 12) {
    errornumber.textContent = "Format nomor tidak valid!";
    valid = false;
  }

  if (email.value.trim() === "") {
    erroremail.textContent = "Masukan email!";
    valid = false;
  } else if (email.value.trim().startsWith("@") || email.value.trim().startsWith(".")) {
    erroremail.textContent = "Format email salah!";
    valid = false;
  } else if (!email.value.trim().includes("@") || !email.value.trim().includes(".com")) {
    erroremail.textContent = "Harus ada @ dan .com";
    valid = false;
  }

  if (password.value.trim() === "") {
    errorpassword.textContent = "Buat password!";
    valid = false;
  } else if (password.value.trim().length < 8) {
    errorpassword.textContent = "Minimal 8 karakter!";
    valid = false;
  } else if (confirmpassword.value.trim() === "") {
    errorconfirmpassword.textContent = "Konfirmasi password!";
    valid = false;
  } else if (confirmpassword.value.trim() !== password.value) {
    errorconfirmpassword.textContent = "Password tidak sama!";
    valid = false;
  }

});