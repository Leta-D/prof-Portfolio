// Placeholder for theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
    alert("Theme toggle clicked! Add your logic here.");
  });
  

function projectPresenter(projectName){
  
  window.location.href = "project_view.html?name=" + projectName;
  alert(document.getElementById("prTitle").textContent);

}