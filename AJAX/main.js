function Do(){
var str=document.getElementById("list").value;
var xhr  = new XMLHttpRequest();
var type = 'POST';
var url  = 'https://api.backendless.com/36DC4E7A-2B33-40D0-A382-FD197E23A89B/BC24AD0C-019C-42A0-BAAD-229B8D8F7222/data/AJAX';
var data = {
  "List" : str
};

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};

xhr.open(type, url, true);

xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

xhr.send(JSON.stringify(data));
}

