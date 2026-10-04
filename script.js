function loginUser(username, cb) {
    console.log("logging in user...")
    setTimeout(() => {
        cb({id: 173, username});
    }, 1000);
}

function fetchPermissions(id, cb) {
    console.log("fetching permissions...");
    
    setTimeout(() => {
        cb(["read", "write", "delete"]);
    }, 2000);
}
function loadDashboard(permissions, cb) {
    console.log("loading dashboard...");
    
    setTimeout(cb, 2000);
}

loginUser("Nitin", function (userData) {
    fetchPermissions(userData.id, function (permissions){
        loadDashboard(permissions, function () {
            console.log("dashboard loaded");
        });
    });
});