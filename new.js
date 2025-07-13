function displayProfessorGreeting() {
  const banner = document.createElement('div');
  banner.textContent = "Welcome to Machang Restaurant, Professor Ozaydin!";
  banner.style.backgroundColor = "#fff0cc";
  banner.style.color = "#a93226";
  banner.style.padding = "15px";
  banner.style.fontSize = "18px";
  banner.style.fontWeight = "600";
  banner.style.textAlign = "center";
  banner.style.fontFamily = "Poppins, sans-serif";
  banner.style.borderBottom = "2px solid #f39c12";

  document.body.prepend(banner);
}

window.addEventListener("DOMContentLoaded", displayProfessorGreeting);

