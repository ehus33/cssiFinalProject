let userId;
let journalID
let journalData;
let currentPage;
let pageInput = document.getElementById('pageInput');
let textContent = document.getElementById('textContent');

window.onload = (event) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userId = user.uid;
            const urlParams = new URLSearchParams(window.location.search);
            journalID = urlParams.get('journal');
            loadPageContent();
        } else {
            window.location = 'index.html';
        }
    });
};

document.getElementById('back').onclick = () => {
    window.location = 'journals.html';
}

const loadPageContent = () => {
    firebase.database().ref('users/' + userId + '/journals/' + journalID).once('value').then(snapshot => {
        journalData = snapshot.val();
        if (journalData === null) {
            throw new Error('No Journal Found');
        }
        document.getElementById('container').style.backgroundColor = journalData.color;
        if (journalData.currentPage) {
            cleanJournal()
            currentPage = journalData.currentPage;
            loadPage(currentPage);
        } else {
            currentPage = 1;
            newPage(1);
        }
        pageInput.value = currentPage
    }).catch(error => {
        console.log(error)
        if (error.message === 'No Journal Found') {
            document.getElementById('container').style.display = 'none';
            document.getElementById('quoteGroup').innerHTML = 'No journal found';
        }
    })
};

pageInput.onblur = () => {
    currentPage = pageInput.value;
    loadPage(currentPage);
};

pageInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        currentPage = pageInput.value;
        loadPage(currentPage);
    }
};

textContent.onkeyup = () => {
    savePage(currentPage);
};

textContent.onblur = () => {
    savePage(currentPage);
};

const loadPage = (pageNum) => {
    if (pageNum <= journalData.numPages) {
        textContent.value = journalData.pages[pageNum].content;
    } else {
        newPage(pageNum);
        textContent.value = '';
    }
    if (pageNum === 1) {
        document.getElementById('left').classList.add('disabled');
    } else {
        document.getElementById('left').classList.remove('disabled');
    }

    firebase.database().ref('users/' + userId + '/journals/' + journalID + '/currentPage').set(pageNum);
}

const savePage = (pageNum) => {
    firebase.database().ref('users/' + userId + '/journals/' + journalID + '/pages/' + pageNum).set({
        content: textContent.value
    });
    if (journalData.pages[pageNum]) {
        journalData.pages[pageNum].content = textContent.value;
    } else {
        journalData.pages[pageNum] = {
            content: textContent.value
        };
    }
}

const newPage = (pageNum) => {
    firebase.database().ref('users/' + userId + '/journals/' + journalID + '/pages/' + pageNum).set({
        content: ''
    });
    if (journalData.pages) {
        journalData.pages[pageNum] = {
            content: ''
        };
    } else {
        journalData.pages = {
            [pageNum]: {
                content: ''
            }
        };
    }
    firebase.database().ref('users/' + userId + '/journals/' + journalID + '/numPages').set(pageNum);
    firebase.database().ref('users/' + userId + '/journals/' + journalID + '/currentPage').set(pageNum);
    journalData.currentPage = pageNum;
    journalData.numPages = pageNum;
}

document.getElementById('left').onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);
        pageInput.value = currentPage;
    }
}

document.getElementById('right').onclick = () => {
    currentPage++;
    loadPage(currentPage);
    pageInput.value = currentPage;
}

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    document.getElementById('quote').innerHTML = data.content
    document.getElementById('author').innerHTML = '– ' + data.author
}

randomQuote()

document.getElementById('reload').onclick = () => {
    randomQuote()
}

const cleanJournal = () => {
    pagesList = []
    for (let pageNum in journalData.pages) {
        if (journalData.pages[pageNum].content !== '' || pageNum === journalData.numPages.toString() || pageNum === journalData.currentPage.toString()) {
            pagesList.push(journalData.pages[pageNum]);
            if (pageNum == journalData.currentPage) {
                journalData.currentPage = pagesList.length;
            }
        }
    }
    const pagesDictionary = {}
    for (let i = 0; i < pagesList.length; i++) {
        pagesDictionary[i + 1] = pagesList[i];
    }
    journalData.pages = pagesDictionary;
    firebase.database().ref('users/' + userId + '/journals/' + journalID +'/pages').set(pagesDictionary);
}