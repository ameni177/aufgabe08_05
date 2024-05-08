let button = document.getElementById("btn");
let result = document.getElementById("password");
button.onclick = function () {
    let length= document.getElementById("len").value;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    randomst = "";
    for (i=0;i<length;i++)
        {
            let r = Math.floor(Math.random()*charset.length);
            randomst = randomst+charset[r];
        }

    result.textContent = randomst;
}