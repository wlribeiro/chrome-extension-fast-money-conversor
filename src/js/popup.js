var btn = document.querySelector('button');

btn.onclick = function(){
    let firstCoin = document.getElementById("select-1").value;
    let secondCoin = document.getElementById("select-2").value;
    let firstCoinValue = parseFloat(document.getElementById("section-1").value);

    let secondCoinValue = 0;
    
    if(firstCoinValue){
        if(firstCoin == secondCoin){
            document.getElementById("section-2").value = parseFloat(firstCoinValue);

        } else {
            let search = `${firstCoin}-${secondCoin}`
            let key = `${firstCoin}${secondCoin}`;
            let url = `https://economia.awesomeapi.com.br/json/last/${search}`

            fetch(url)
                .then(res => { 
                    return res.json(); 
                })
                .then(
                    json => { 
                        let value = json[key]["ask"]; 
                        secondCoinValue = (parseFloat(value) * firstCoinValue).toFixed(2);
                        document.getElementById("section-2").value = secondCoinValue;
                    });
        }
    }
}