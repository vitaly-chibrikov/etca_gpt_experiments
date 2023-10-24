function getKeyFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("key");
};

function getKeyFromScript() {
    return getGPTDevKey();
};

function writeToPage(content, stats) {
    document.getElementById("RESP").innerHTML += content;
    document.getElementById("STAT").innerHTML += JSON.stringify(stats);
};

function writeToFile(content, stats) {
    writeToPage(content, stats);

    const link = document.createElement("a");
    const file = new Blob([JSON.stringify(stats) + "</P>" + content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    const d = new Date();
    let time = d.getTime();
    link.download = "Astro" + time + ".html";
    link.click();
    URL.revokeObjectURL(link.href);
}