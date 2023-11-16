import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

import UI from './js/config/ui.config';
import validate from './js/helpers/validate';
import { showInputError, removeInputError } from './js/views/form';
import login from './js/services/auth.service';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// * Handlers

async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);

    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    // show notification
  } catch (err) {
    // show error notify
  }
}

// * Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach((el) => el.addEventListener('focus', () => removeInputError(el)));
