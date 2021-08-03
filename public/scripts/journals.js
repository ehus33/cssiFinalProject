let userId;
const newJournalButton = document.getElementById('newJournal');

window.onload = (event) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userId = user.uid;
            loadPageContent(user);
        } else {
            window.location = 'index.html';
        }
    });
};

document.getElementById('activities').onclick = () => {
    window.location = 'activities.html';
};

document.getElementById('logout').onclick = () => {
    firebase.auth().signOut();
    window.location = 'index.html';
}

const createJournal = () => {
    let journalData = {
        title: 'New Journal',
        color: '#555555',
        titleHeight: '46px'
    }
    firebase.database().ref(`users/${userId}/journals`).push(journalData).then((journalRef) => {
        const journal = journalElement(journalRef.key, journalData.title, journalData.color, journalData.height);
        document.getElementById('journals').insertBefore(journal, newJournalButton);
    })
}

document.getElementById('newJournal').onclick = createJournal;

const journalElement = (id, name, color, height) => {
    const journal = document.createElement('div');
    journal.className = 'journal';
    journal.id = id;

    const bookmarkWrap = document.createElement('div');
    bookmarkWrap.className = 'bookmark-wrap';
    const bookmark = document.createElement('div');
    bookmark.className = 'bookmark';
    bookmarkWrap.appendChild(bookmark);

    journal.appendChild(bookmarkWrap);
    journal.style.backgroundColor = color;
    
    const tag = document.createElement('div');
    tag.className = 'tag';

    const title = document.createElement('textarea');
    title.className = 'title-input';
    title.innerHTML = name;
    title.style.height = height
    title.onclick = (event) => {
        event.stopPropagation();
    }
    title.onblur = (event) => {
        saveTitle(id, event.target.value.trim(), event.target.style.height ? event.target.style.height : '46px');
    }
    title.oninput = (event) => {
        event.target.style.height = "";
        event.target.style.height = event.target.scrollHeight < 400 ? event.target.scrollHeight + "px" : '400px';
    }
    tag.appendChild(title);
    
    for (let i = 0; i < 4; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        tag.appendChild(circle);
    }
    journal.appendChild(tag);

    const colorInput = document.createElement('input');
    colorInput.className = 'colorInput';
    colorInput.type = 'color';
    colorInput.value = color;
    colorInput.onclick = (event) => {
        event.stopPropagation();
    }
    colorInput.oninput = (event) => {
        saveColor(id, event.target.value);
    }
    colorInput.onchange = (event) => {
        journal.style.backgroundColor = event.target.value;
    }
    journal.appendChild(colorInput);

    journal.onclick = () => {
        window.location = 'write.html?journal=' + id;
    }
    return journal
}

const loadPageContent = (user) => {
    if (user.displayName) {
        document.getElementById('name').innerHTML = ', ' + user.displayName.split(' ')[0];
    }
    firebase.database().ref(`users/${userId}/journals`).once('value').then((snapshot) => {
        const journals = snapshot.val();
        if (journals) {
            for (const journalID in journals) {
                journal = journalElement(journalID, journals[journalID].title, journals[journalID].color, journals[journalID].titleHeight);
                document.getElementById('journals').insertBefore(journal, newJournalButton);
            }
        }
    });
}

const saveTitle = (id, title, titleHeight) => {
    firebase.database().ref(`users/${userId}/journals/${id}`).update({title: title, titleHeight: titleHeight});
}

const saveColor = (id, color) => {
    firebase.database().ref(`users/${userId}/journals/${id}`).update({color: color});
}

