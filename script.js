// Placeholder for theme toggle
let isDarkMode = true;
function themeModeHandler(){
  isDarkMode = !isDarkMode;
  document.getElementById("lightDarkMode").querySelector("#social-icons-img").src = isDarkMode? "assets/icons/sun.png" : "assets/icons/moon.png";
}
  

function projectPresenter(projectName){
  
  window.location.href = "project_view.html?name=" + projectName;
  alert(document.getElementById("prTitle").textContent);

}