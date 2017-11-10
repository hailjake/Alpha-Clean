function init_main() {
    // Local
    $("#local-storage").click(function () {
        chrome.tabs.executeScript({code: 'localStorage.clear()'});
    });
    // Session
    $("#session-storage").click(function () {
        chrome.tabs.executeScript({code: 'sessionStorage.clear()'});
    });
    // All
    $("#session-storage").click(function () {
        chrome.tabs.executeScript({code: 'localStorage.clear()'});
        chrome.tabs.executeScript({code: 'sessionStorage.clear()'});
    });
}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_main);
