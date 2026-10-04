function getUser(userName, cb) {
    console.log("Getting user details...");
    
    setTimeout(() => {
        cb({id: 101, userName});
    }, 1000);
}

function getUserPosts(id, cb) {
    console.log("Getting user posts...");
    
    setTimeout(() => {
        cb(["fuck you", "Good Morning", "Hello"]);
    }, 2000);
}

getUser("nitinrajput_574", function(data) {
    console.log(data.userName);
    
    getUserPosts(data.id, function(allPosts) {
        console.log(allPosts);
    })
});