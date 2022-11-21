
function onSubmit(e){
    e.preventDefault();
    var name = document.getElementById('nameId').value;
    var desc = document.getElementById('descriptionId').value;
    var image = document.getElementById('imageId').value;
    var loca = document.getElementById('locationId').value;

    let div = document.createElement("div");
    div.classList.add('cocktail-card');
    div.innerHTML = `<h3>${name}</h3>
    <img src="${image}" alt="${name}" height="250px" width="300px"/>
    <p><strong>Description: </strong>${desc}</p>
    <p><strong>Location: </strong>${loca}</p>`

    let section = document.getElementById('your-cocktails');
    section.append(div);
}

document.getElementById('drink-submission').addEventListener('submit', onSubmit);