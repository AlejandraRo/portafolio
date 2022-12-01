const areas = ["perfil","experiencia","habilidades","educacion","congresos"]
console.log(areas)
function hide(area){
    console.log(area)
    tmpAreas = areas.filter(item => item != area);
    document.getElementById(area).style.display = "block";
    tmpAreas.map(item => {
        document.getElementById(item).style.display = "none";
    })
    console.log(tmpAreas)
}