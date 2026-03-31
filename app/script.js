document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("actionButton");
  const status = document.getElementById("statusMessage");

  if (!button || !status) return;

  button.addEventListener("click", () => {
    status.textContent = "Success! Your static site is live via GitHub Actions and AWS OIDC.";
    status.classList.add("is-success");
    button.textContent = "Clicked ✔";
    button.disabled = true;
  });
});

