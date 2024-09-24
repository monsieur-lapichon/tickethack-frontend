// Récupère la liste des trajets réservés
fetch('http://localhost:3000/bookings').
    then(response => response.json())
    .then(data => {
        if (data) {
            document.querySelector('#bookingsList').innerHTML += `
                <h1>My bookings</h1>
            `;
            for (let i=0; i<data.length; i++) {

            
                document.querySelector('#bookingsList').innerHTML += `
                <div class="bookingContainer">
                    
                </div>
                `;
            }
        } else {
            document.querySelector('#bookingsList').innerHTML += `
            <div class="message">
                No booking yet.<br><br>
                Why not plan a trip ?
            </div>
            `;
        }

    });
