function sendContact() {
  const inputName = document.getElementById("modal_input_name").value.trim();
  const inputEmail = document.getElementById("modal_input_email").value.trim();
  const inputPhone = document.getElementById("modal_input_phone").value.trim();

  const inputCompany = document
    .getElementById("modal_input_company")
    .value.trim();
  const inputUrl = document.getElementById("modal_input_url").value.trim();

  const requiredColor = "1px solid #EC1211";
  const filledColor = "1px solid #F1F1F1";

  if (inputName) modal_input_name.style.border = filledColor;
  if (inputEmail) modal_input_email.style.border = filledColor;
  if (inputPhone) modal_input_phone.style.border = filledColor;

  if (inputName && inputEmail && inputPhone) {
    required_Text.style.display = "none";

    newData = {
      name: inputName,
      email: inputEmail,
      inputPhone: inputPhone,
      company: inputCompany,
      url: inputUrl,
    };
    console.log("data: ", newData);

    modal_input_name.value = "";
    modal_input_email.value = "";
    modal_input_phone.value = "";
    modal_input_company.value = "";
    modal_input_url.value = "";
  } else {
    if (!inputName) modal_input_name.style.border = requiredColor;
    if (!inputEmail) modal_input_email.style.border = requiredColor;
    if (!inputPhone) modal_input_phone.style.border = requiredColor;
    required_Text.style.display = "flex";
  }
}

let isModal = false;
function openModal() {
  isModal = !isModal;
  isModal ? (modal.style.display = "flex") : (modal.style.display = "none");
}
