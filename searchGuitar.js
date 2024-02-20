let guitars = [];
async function getAll() {
    let host = 'http://localhost:8080';
    let response = await fetch(host + '/inventory');
    let data = await response.json();
    return data;
  }

async function searchGuitar() {
  if (guitars.length === 0) {
    guitars = await getAll();
  }
  let builder = document.getElementById('builder').value;
  let model = document.getElementById('model').value;
    let type = document.getElementById('type').value;
    let backWood = document.getElementById('backWood').value;
    let topWood = document.getElementById('topWood').value;
    let searchResults = guitars.filter(guitar => {
        return (
          (builder === '' || guitar.builder.toLowerCase().includes(builder)) &&
          (model === '' || guitar.model.toLowerCase().includes(model)) &&
          (type === '' || guitar.type.toLowerCase().includes(type)) &&
          (backWood === '' || guitar.backWood.toLowerCase().includes(backWood)) &&
          (topWood === '' || guitar.topWood.toLowerCase().includes(topWood))
        );
      });
    displaySearchResults(searchResults);


    
}

function displaySearchResults(results) {
    let tableBody = document.getElementById('searchTableBody');
    tableBody.innerHTML = '';
  
    results.forEach(guitar => {
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>${guitar.serialNumber}</td>
        <td>${guitar.builder}</td>
        <td>${guitar.model}</td>
        <td>${guitar.type}</td>
        <td>${guitar.backWood}</td>
        <td>${guitar.topWood}</td>
        <td>${guitar.price}</td>
      `;
      tableBody.appendChild(row);
    });
  }
