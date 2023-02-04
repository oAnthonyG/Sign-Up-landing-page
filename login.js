
export default function Login() {
  const login = document.createElement('form')
  login.className = "form";
  login.innerHTML = `
  <form class="form">
        <div class="input-container">
          <div class="input-content">
            <img class="icons-form" src="./imgs/icon-email.svg" alt="">
            <input type="email" name="email" id="email" placeholder="Email" required>
          </div>
              <span class="email-error"></span>
            </div>
            <div class="input-container">
              <div class="input-content">
                <img class="icons-form" src="./imgs/icon-lock.svg" alt="">
                <input type="password" name="password" id="password" placeholder="Password" required>
              </div>
              <span class="password-error"></span>
            </div>
            <div class="forgot-button-container">
              <a href="#" class="forgot-button">Forgot your password?</a>
            </div>

            <button type="submit" class="button-login">sing in</button>
      </form>
  `;
}