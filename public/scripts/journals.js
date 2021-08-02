let userId;
window.onload = (event) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userId = user.uid;
        } else {
            window.location = 'index.html';
        };
    });
};

document.getElementById('activities').onclick = () => {
    window.location = 'activities.html';
};

document.getElementById('logout').onclick = () => {
    firebase.auth().signOut();
    window.location = 'index.html';
}