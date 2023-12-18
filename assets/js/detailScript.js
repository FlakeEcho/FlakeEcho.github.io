document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var testId = params.get('id');

    console.log(typeof testId, testId)

    var detailsTableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];

    console.log(tableData)

    var rowData = tableData.find(function(data) {

        console.log(typeof data.TestID, data.TestID);

        return String(data.TestID) === testId;
    });

    console.log(rowData)

    if (rowData) {
        Object.keys(rowData).forEach(function(key) {
            var row = document.createElement('tr');

            var headerCell = document.createElement('th');
            headerCell.textContent = key;
            headerCell.style.width = '130px';
            headerCell.style.textAlign = 'center';
            row.appendChild(headerCell);

            var valueCell = document.createElement('td');
            valueCell.textContent = rowData[key];
            row.appendChild(valueCell);

            detailsTableBody.appendChild(row);

//            var cell = document.createElement('td');
//            cell.textContent = rowData[key];
//            row.appendChild(cell);
        });

//        detailsTableBody.appendChild(row);
    }
});
