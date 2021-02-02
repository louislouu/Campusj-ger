window.document.body.onload = addElement;

function addElement () {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  var newDiv = document.createElement("div");
  var newContent = document.createElement("div");
  newContent.innerHTML = ` 
  <div class="wrapper-card">
    <div class="card card-1">          
            <img class="logo-card" src="assets/img/Logo-Campusjäger.jpg" alt="">            
        <div class="infos">
            <div class="company">
            <h1 class="name">Campusjäger</h1>
            <p class="branche">Personalwesen</p>
            </div>
            <div class="rating">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>  
            <p class="rating-text">217 Bewertungen</p>
            </div>
        </div>          
    </div> 
  </div>  `;
  newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein
  var currentDiv = document.getElementById("java-card");
  var wrapperSite =  document.getElementById("wrapper-site");
  wrapperSite.appendChild(newDiv);
  wrapperSite.appendChild(newDiv.cloneNode(true));

}



