document.getElementById('search-form').addEventListener('submit', function() {

    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;

    fetch(`http://localhost:3000/search?departure=${departure}&arrival=${arrival}&date=${date}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (data.length > 0) {
                data.forEach(trip => {
                    const tripElement = document.createElement('div');
                    tripElement.innerHTML = `
                        <p>${trip.departure} > ${trip.arrival}</p>
                        <p>${trip.time}</p>
                        <p>${trip.price}</p>
                        <button onclick="addToCart('${trip.id}')">book</button>
                    `;
                    resultsDiv.appendChild(tripElement);
                });
            } else {
                resultsDiv.innerHTML = '<p>No trip found.</p>';
            }
        })
});
