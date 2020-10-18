let state = {};
let selectedService = null;
let loginKey = null;

function onReleaseButton(button) {
    switch(button) {
        case "cancel":
            // nothing!
        case "passwords":

        case "settings":

        case "service":
            // set selected service, and get info from state
        case "newservice":

        case "previous":

        case "next":
            // next service
        case "last":
            // prev service
    } 

}

function getCurrentState() {
    return state;
}

function getInitialStateLoad() {
    // POST /api/login w/ body {uuid: uuid}
    // RETURNS: data obj, which is application state, defined as "state"

    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({uuid: loginKey})
    }).then(res => {
        res.json()
    }).then(data => {
        console.log(data)
    })
}

function register() {
    // GET /api/register
    // RETURNS: uuid loginKey

    fetch("/api/register").then((res) => {
        res.json()
    }).then((data) => {
        window.localStorage.loginKey = data.uuid;
        console.log(data.uuid);
    })
}

window.onload = () => {
    if(window.localStorage.loginKey == null) {
        register();
        while(window.localStorage.loginKey == null);
        getInitialStateLoad();
    } else {
        loginKey = window.localStorage.loginKey;
        getInitialStateLoad();
    }
}