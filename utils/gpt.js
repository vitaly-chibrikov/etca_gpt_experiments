
function makeGPT35TurboRequest(requestTextSource, keySource, statSource, resultCallback) {
    const stats = statSource();
    const requestText = requestTextSource(stats);

    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function () {
        if (xmlHTTP.readyState === 4) {
            const respObj = JSON.parse(xmlHTTP.response);
            const content = respObj.choices[0].message.content;
            resultCallback(content, stats);
        }
    };
    xmlHTTP.open('POST', "https://api.openai.com/v1/chat/completions", true);
    xmlHTTP.setRequestHeader("Content-Type", "application/json");
    xmlHTTP.setRequestHeader("Authorization", "Bearer " + keySource());
    xmlHTTP.send('{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "' + requestText + '"}], "temperature": 0.7}');
};