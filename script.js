let app = document.getElementById("app"); // Notre container qui va accueillir la blague
let body = document.body;
let dataExploit; // variable qui va accueillir les données



// ===================================================

// ============ Fonction de récupération des blagues ============
async function getBlague() {

    await fetch("https://api.blablagues.net/?rub=blagues")
      .then((response) => response.json())
      .then((data) => {
        dataExploit = data; // On stocke les données dans notre variable
      });

}



app.innerHTML = `<p class="text-center font-semibold text-2xl">Cliquez pour une blague</p>`;

// ===================== Affichage des blagues au clic sur body ===========================
body.addEventListener("click", function(){


    getBlague();

    let content = dataExploit.data.content;

    app.innerHTML = `
    <div class="text-4xl font-bold mb-5 bg-green-200 text-slate-700 uppercase rounded-lg p-2">${content.text_head}</div>
    <div class="text-2xl font-semibold mb-5 text-slate-950">${content.text}</div>
    <div class="text-2xl font-semibold mb-5 text-slate-950">${content.text_hidden}</div>
    `;



})