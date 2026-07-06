
    function generateqrcode() {
    var text = document.getElementById("text").value;
    document.getElementById("qrcode").innerHTML="";
    let image = document.createElement("img")
    var qrcode = new QRCode(document.getElementById("qrcode"),{
        img: image,
        text: text,
        height: 100,
        width: 100,
    

    });
    
}
