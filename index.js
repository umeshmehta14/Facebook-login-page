const i2 = document.querySelector("#i2");
const img = document.querySelector("#eye");
const eye = document.querySelector(".fa-eye");

// eye.className = "w-4 absolute bottom-60 right-6 my-[-0.4rem] mx-[0.2rem] fa-solid fa-eye-slash";

document.getElementById("eye").style.display = "none";

function clickInput() {
  if (i2.value.length > 0) {
    document.getElementById("eye").style.display = "block";
  } else {
    document.getElementById("eye").style.display = "none";
  }
}

function clickHandle() {
    if(document.getElementById("i2").type === "password")
    {
        document.getElementById("i2").type = "text";
        eye.className = "fa-solid fa-eye-slash";
    }
    else{
        document.getElementById("i2").type = "password";
        eye.className = "fa-solid fa-eye";

    }
}
i2.addEventListener("input", clickInput);
img.addEventListener("click", clickHandle);
