
function validateForm() {
  const form = document.forms['pet-info-form'];
  // TODO: Add checks here.
  const bordetella = document.getElementById('bordetella');
  const dhlpp = document.getElementById('dhlpp');
  const rabies = document.getElementById('rabies');
  let textbox = document.getElementById('other-info-text-area')

  if (dhlpp.checked  && bordetella.checked && rabies.checked) {
    return true;
  } else {
    textbox.focus();
    textbox.setAttribute('placeholder', 'Please provide an explanation.')
    if (textbox.value == '') {
      return false;
    }
    else {
    return true;
    }
  }
}