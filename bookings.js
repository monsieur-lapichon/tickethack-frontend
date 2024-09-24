// Récupère la liste des trajets réservés
fetch('http://localhost:3000/bookings').
    then(response => response.json())
    .then(data => {
        console.log(data.bookings.trips);
        if (data) {
            document.querySelector('#bookingsList').innerHTML += `
                <h1>My bookings</h1>
            `;
            for (let i=0; i<data.bookings.trips.length; i++) {
                
                let date = new Date(data.bookings.trips[i].date);
                let now = new Date();
                let time = date.getTime()-now.getTime();
                let remainingTime = "";
                var days = parseInt(time/86400000);
                var hours = parseInt((time%86400000)/3600000);
                var minutes = parseInt((time%3600000)/60000);
                if(days>0) remainingTime += days+" days ";
                if(hours>0) remainingTime += hours+" hours ";
                if(minutes>0) remainingTime += minutes+" minutes";


                date = date.getHours()+":"+(date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
                
                document.querySelector('#bookingsList').innerHTML += `
                <div class="tripContainer">
                    <div>${data.bookings.trips[i].departure} > ${data.bookings.trips[i].arrival}</div>
                    <div>${date}</div>
                    <div>${data.bookings.trips[i].price} €</div>
                    <div>Departure in ${remainingTime}</div>
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
