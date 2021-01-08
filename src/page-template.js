const generateTeam = team => {
    const generateManager = manager => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${managerName}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${managerId}</li>
            <li class="list-group-item">Email: <a href = "mailto:${managerEmail}"></a></li>
            <li class="list-group-item">Office Number ${managerOfficeNumber}</li>
        </ul>
    </div>
    `;
    }

    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineerName}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineerId}</li>
                <li class="list-group-item">Email: <a href = "mailto:${engineerEmail}"></a></li>
                <li class="list-group-item">GitHub: <a href =https://github.com/ ${managerGitHub}</li>
            </ul>
        </div>
        `;
    }
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${internName}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${internId}</li>
                <li class="list-group-item">Email: <a href = "mailto:${internEmail}"></a></li>
                <li class="list-group-item">Office Number ${internSchool}</li>
            </ul>
        </div>
        `;
        }
}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

module.exports = generateTeam;
