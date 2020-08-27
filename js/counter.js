var historyList = [];

function minusCount(event) {
    event.blur();
    const counter = document.getElementById('counter-count');
    counter.innerHTML--;
    let count = counter.innerHTML;
    saveCounter(count);
    addToHistory(count);
}

function addCount(event) {
    event.blur();
    const counter = document.getElementById('counter-count');
    counter.innerHTML++;
    let count = counter.innerHTML;
    saveCounter(count);
    addToHistory(count);
}

function clearCount(event) {
    event.blur();
    const counter = document.getElementById('counter-count');
    counter.innerHTML = 0;
    saveCounter(0);
    addToHistory(0);
}

function addToHistory(count) {
    const history = document.getElementById('history-list');
    const newEntry = document.createElement('li');
    newEntry.appendChild(document.createTextNode('Count: ' + count + ' - ' + ' Time: ' + new Date().toLocaleString()));
    history.appendChild(newEntry);
    historyList.push({
        count: count,
        time: new Date().toLocaleString(),
    });
    saveHistory(historyList);
}

function setHistory() {
    const history = document.getElementById('history-list');
    for (entry of historyList) {
        const newEntry = document.createElement('li');
        newEntry.appendChild(document.createTextNode('Count: ' + entry.count + ' - ' + ' Time: ' + entry.time));
        history.appendChild(newEntry);
    }
}