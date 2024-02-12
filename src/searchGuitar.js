document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".search-form");
    const searchLink = document.querySelector(".search-link");
    const table = document.querySelector("table");

    searchLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get search query values
        const builder = document.getElementById("builder").value.trim();
        const model = document.getElementById("model").value.trim();
        const type = document.getElementById("type").value.trim();
        const backWood = document.getElementById("back_wood").value.trim();
        const topWood = document.getElementById("top_wood").value.trim();

        // Filter data based on search query
        const filteredData = searchData(builder, model, type, backWood, topWood);

        // Display search result
        displaySearchResult(filteredData);
    });

    function searchData(builder, model, type, backWood, topWood) {
        // Mock JSON data (replace with your actual data)
        const jsonData = [
            { serialNumber: "123", builder: "Fender", model: "Stratocaster", type: "Electric", backWood: "Alder", topWood: "Maple", price: 999 },
            { serialNumber: "456", builder: "Gibson", model: "Les Paul", type: "Electric", backWood: "Mahogany", topWood: "Maple", price: 1299 },
            { serialNumber: "789", builder: "Martin", model: "D-28", type: "Acoustic", backWood: "Rosewood", topWood: "Spruce", price: 1499 }
            // Add more guitar data as needed
        ];

        // Filter data based on search query
        const filteredData = jsonData.filter(function(guitar) {
            return guitar.builder.toLowerCase() === builder.toLowerCase()
                && guitar.model.toLowerCase() === model.toLowerCase()
                && guitar.type.toLowerCase() === type.toLowerCase()
                && guitar.backWood.toLowerCase() === backWood.toLowerCase()
                && guitar.topWood.toLowerCase() === topWood.toLowerCase();
        });

        return filteredData;
    }

    function displaySearchResult(data) {
        const tbody = table.querySelector("tbody");

        // Clear previous search results
        tbody.innerHTML = "";

        // Display search result
        data.forEach(function(guitar) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${guitar.serialNumber}</td>
                <td>${guitar.builder}</td>
                <td>${guitar.model}</td>
                <td>${guitar.type}</td>
                <td>${guitar.backWood}</td>
                <td>${guitar.topWood}</td>
                <td>${guitar.price}</td>
            `;
            tbody.appendChild(row);
        });
    }
});
