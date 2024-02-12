document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("addGuitarForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form inputs
        const serialNumber = document.getElementById("serialNumber").value;
        const price = document.getElementById("price").value;
        const builder = document.getElementById("builder").value;
        const model = document.getElementById("model").value;
        const type = document.getElementById("type").value;
        const backWood = document.getElementById("backWood").value;
        const topWood = document.getElementById("topWood").value;
        
        // Construct JSON object
        const guitarData = {
            serialNumber: serialNumber,
            price: price,
            builder: builder,
            model: model,
            type: type,
            backWood: backWood,
            topWood: topWood
        };
        
        // Log JSON object to the console
        console.log("Guitar data:", guitarData);
        
        // Store the JSON object within the code
        const storedGuitars = [
            {
                serialNumber: "EG123456",
                price: 1500,
                builder: "Fender",
                model: "Stratocaster",
                type: "Electric",
                backWood: "Alder",
                topWood: "Maple"
            },
            {
                serialNumber: "AG987654",
                price: 2000,
                builder: "Taylor",
                model: "314ce",
                type: "Acoustic",
                backWood: "Sapele",
                topWood: "Sitka Spruce"
            }
        ];

        storedGuitars.push(guitarData); // Add the new guitar data to the stored guitars
        
        // Log the updated list of guitars
        console.log("Stored Guitars:", storedGuitars);
        
        // Optionally, you can reset the form after submission
        form.reset();
    });
});
