const basicCardTemplate = info =>
    `
    <img src="${info.Foto}">
    <p>${info.Nombres}<br>${info.Apellidos}</p>
  `;

const cardTemplate = info =>
    `
    <div class="col-12">
        <img src="${info.Foto}">
        <h3>${info.Nombres} ${info.Apellidos}</h3>
        <p>${info["Fecha Nacimiento"]}</p>
    </div>
  `+ getLists(info);

function getLists(info) {
    let cardNames = ["Libros Leidos", "Skills", "Deportes", "Hobbies", "Películas Favoritas"]
    let result = ""
    cardNames.forEach(cardName => {
        let list = ""
        info[cardName].forEach(element=>{
            list+=`<li>${element}</li>`
        })
        result += `
        <div class="col-4">
            <div class="card" style="width:auto">
                <div class="card-body">
                    <h5 class="card-title">${cardName}</h5>
                    <ul>
                        ${list}
                    </ul>
                </div>
            </div>
        </div>
        `
    })
    return result
};