document.addEventListener('DOMContentLoaded', function() {
    var data = {
        'FlakeEcho': [43.14, 55.76, 68.92, 82.17, 95.61, 108.96, 122.42, 134.82, 146.99, 160.39],
        'FlakeScanner': [175.82, 299.09, 424.24, 519.04, 646.52, 766.89, 894.43, 1033.81, 1131.71, 1259.99]
    };
    var data2 = {
        'FlakeEcho': [36.51, 47.37, 58.55, 70.10, 80.04, 91.85, 102.93, 113.37, 123.39, 135.22],
        'Shaker': [676.52, 1303.07, 1787.36, 2310.70, 2845.50, 3385.91, 3951.75, 4578.12, 5026.52, 5551.02]
    };
    var data3 = {
        'FlakeEcho': [55.26, 70.43, 85.86, 101.28, 116.45, 132.13, 147.81, 163.23, 178.65, 193.83],
        '100Rerun': [199.31, 315.47, 439.20, 595.57, 718.19, 897.18, 986.51, 1168.74, 1296.53, 1477.17]
    };

    var tableContainer = document.getElementById('reliability-study-container');
    var table = document.createElement('table');
    var headerRow = table.insertRow();

    // Create headers
    var toolHeader = document.createElement('th');
    toolHeader.textContent = '';
    toolHeader.style.width = '112px';
    headerRow.appendChild(toolHeader);


    for (var i = 1; i <= 10; i++) {
        var header = document.createElement('th');
        header.textContent = i;
        headerRow.appendChild(header);
    }

    // Populate rows
    Object.keys(data).forEach(function(tool) {
        var row = table.insertRow();
        var toolCell = row.insertCell();
        toolCell.textContent = tool;

        data[tool].forEach(function(value) {
            var cell = row.insertCell();
            cell.textContent = value;
        });
    });

    tableContainer.appendChild(table);





    tableContainer = document.getElementById('reliability-study-container2');
    table = document.createElement('table');
    headerRow = table.insertRow();

    // Create headers
    toolHeader = document.createElement('th');
    toolHeader.textContent = '';
    toolHeader.style.width = '107px';
    headerRow.appendChild(toolHeader);


    for (let i = 1; i <= 10; i++) {
        let header = document.createElement('th');
        header.textContent = i;
        headerRow.appendChild(header);
    }

    // Populate rows
    Object.keys(data2).forEach(function(tool) {
        var row = table.insertRow();
        var toolCell = row.insertCell();
        toolCell.textContent = tool;

        data2[tool].forEach(function(value) {
            var cell = row.insertCell();
            cell.textContent = value;
        });
    });

    tableContainer.appendChild(table);





    tableContainer = document.getElementById('reliability-study-container3');
    table = document.createElement('table');
    headerRow = table.insertRow();

    // Create headers
    toolHeader = document.createElement('th');
    toolHeader.textContent = '';
    toolHeader.style.width = '107px';
    headerRow.appendChild(toolHeader);


    for (let i = 1; i <= 10; i++) {
        let header = document.createElement('th');
        header.textContent = i;
        headerRow.appendChild(header);
    }

    // Populate rows
    Object.keys(data3).forEach(function(tool) {
        var row = table.insertRow();
        var toolCell = row.insertCell();
        toolCell.textContent = tool;

        data3[tool].forEach(function(value) {
            var cell = row.insertCell();
            cell.textContent = value;
        });
    });

    tableContainer.appendChild(table);
});
