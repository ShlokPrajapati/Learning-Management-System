function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "https://shlokprajapati.github.io/Learning-Management-System/public/html/quiz1_c.html";
  }