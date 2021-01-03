function helloWorld()
{
    console.log("Hello World");
}

function getServerStatus(){
    
    console.log("start of api call");

    var httpRequest = new XMLHttpRequest();

    console.log("Created http request");

    httpRequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200)
        {
            console.log("api recieved");

        // response is recieved 
            console.log(JSON.parse(this.responseText));

            var serviceStatusObj = JSON.parse(this.responseText);
            
            // document.getElementById("ServerResponseDiv").innerHTML = serviceStatusObj.value.serviceDescription;
            document.getElementById("ServerResponseDiv").innerHTML = serviceStatusObj.serviceDescription;
        }
    };
    
    console.log("Open request");
    httpRequest.open("GET","http://localhost:8080/status");
    console.log("Send request");
    httpRequest.send();
}