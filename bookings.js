// Récupère la liste des trajets réservés
fetch('http://localhost:3000/bookings').
    then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.bookings.length > 0) {
            document.querySelector('#bookingsList').innerHTML += `
                <h1>My bookings</h1>
            `;
            for (let i=0; i<data.bookings.length; i++) {
                
                let date = new Date(data.bookings[i].date);
                let now = new Date();
                let time = date.getTime()-now.getTime();
                let remainingTime = "";
                var days = parseInt(time/86400000);
                var hours = parseInt((time%86400000)/3600000);
                var minutes = parseInt((time%3600000)/60000);
                if(days>1) remainingTime += days+" days ";
                else if (days>0) remainingTime += days+" day ";
                if(hours>1) remainingTime += hours+" hours ";
                else if(hours>0) remainingTime += hours+" hour ";
                if(minutes>1) remainingTime += minutes+" minutes";
                else if(minutes>0) remainingTime += minutes+" minute";


                date = date.getHours()+":"+(date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
                
                document.querySelector('#bookingsList').innerHTML += `
                <div class="tripContainer">
                    <div class="tripName">${data.bookings[i].departure} > ${data.bookings[i].arrival}</div>
                    <div class="tripDate">${date}</div>
                    <div class="tripPrice">${data.bookings[i].price} €</div>
                    <div class="tripDeparture">Departure in ${remainingTime}</div>
                </div>
                `;
            }
            document.querySelector('#bookingsList').innerHTML += `
                <div class="slogan"><hr>Enjoy your travels with Tickethack !</div>
            `;
        } else {
            document.querySelector('#bookingsList').innerHTML += `
            <div class="message">
                No booking yet.<br><br>
                Why not plan a trip ?
            </div>
            `;
        }

    });