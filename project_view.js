const projects = {
    "FitLife" : {desc: "THis is FitLife's description"},
    "Artify" : {desc: "THis is artify's description"},
    "GreenPill" : {desc: "THis is GreenPill's description"},
    "To-Do" : {desc: "THis is To-Do's description"}
};

const params = new URLSearchParams(window.location.search);
const projectName = params.get('name');

if(projects[projectName]){
    document.getElementById("prTitle").textContent = projectName;
    document.getElementById("prDisc").textContent = projects[projectName].desc;
}
else{
    document.getElementById("prTitle").textContent = "Project Not Found";
    document.getElementById("prDisc").textContent = " ";
}
