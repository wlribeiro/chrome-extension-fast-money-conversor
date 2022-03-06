var btn = document.querySelector('button');

btn.onclick = async function(){
    let firstCoin = document.getElementById("select-1").value;
    let secondCoin = document.getElementById("select-2").value;
    let firstCoinValue = parseFloat(document.getElementById("section-1").value);

    let secondCoinValue = 0;

    // switchBtn()
    let convertBtn = document.getElementById("convert-btn");
    showDialog(true, "converting") // em alguns casos, principalente com a internet lenta, a conversão pode demorar
    convertBtn.disabled = true;

    if(firstCoinValue){
        if(firstCoin == secondCoin){
            document.getElementById("section-2").value = parseFloat(firstCoinValue);

        } else {
            let search = `${firstCoin}-${secondCoin}`
            let key = `${firstCoin}${secondCoin}`;
            let url = `https://economia.awesomeapi.com.br/json/last/${search}`

            await fetch(url)
                .then(res => { 
                    return res.json(); 
                })
                .then(
                    json => { 
                        let value = json[key]["ask"]; 
                        secondCoinValue = (parseFloat(value) * firstCoinValue).toFixed(2);
                        document.getElementById("section-2").value = secondCoinValue;
                    })
                .catch(() =>{
                    showDialog(true, "conection-problem")
                }) ;
        }
    }

    convertBtn.disabled = false;
    showDialog(false, "converting")

}

function showDialog(activate, id){
    if(activate){
        document.getElementById(id).style.display = "flex";
    } else{
        document.getElementById(id).style.display = "none"
    }
    
}