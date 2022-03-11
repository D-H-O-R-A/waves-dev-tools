var vSigner;

var checkbox = $("input[type='checkbox']");


$(window).on("load", () => {
    if(localStorage.getItem("node") == null || localStorage.getItem("node") == undefined || localStorage.getItem("node") == ""){
        vSigner = new signer.Signer({
            // Specify URL of the node on Testnet
            NODE_URL: "https://nodes-testnet.wavesnodes.com"
        });
        checkbox.attr("checked", "")
    }else{
        vSigner = new signer.Signer({
            // Specify URL of the node on Testnet
            NODE_URL: "https://nodes.wavesnodes.com"
        });
        checkbox.removeAttr("checked")
    }
})

function connectSigner(k){
    switch(k){
        case 'ProviderCloud':
            vSigner.setProvider(new providerCloud.ProviderCloud())
            loginba()
        break;
        case 'ProviderWeb':
            vSigner.setProvider(new providerWeb.ProviderWeb('https://testnet.waves.exchange/signer/'))
            loginba()
        break;
        case 'ProviderLedger':
            vSigner.setProvider(new providerLedger.ProviderLedger({
                // Specify chain ID of Testnet
                wavesLedgerConfig: { networkCode: 84, },
            }));
            loginba()
        break;
        case 'ProviderKeeper':
            loginba(true)
        break;
        case 'ProviderSeed':
            const seed = WavesCrypto.crypto().randomSeed(15);
            vSigner.setProvider(new providerSeed.ProviderSeed(seed));
            Swal.fire({
                title:"Success",
                html:`<p>Your seed phrase has been successfully generated!</p>\n\n
                <p>Seed Phrase: ` + seed + `</p>\n\n
                <span>*When closing this message, the seed phrase will be placed in your "copy and paste".</span>`,
                icon:"success"
            }).then((data) => {
                navigator.clipboard.writeText(seed);
            })
        break;
        default:
            console.log(k)
    }
}

async function loginba(l){
    if(l){
        await WavesKeeper.wavesAuth()
    }else{
        const user = await vSigner.login();
        const balances = await vSigner.getBalance();
        console.log([user,balances])
    }
}

checkbox.change(function(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        localStorage.removeItem("node");
        document.location.reload(true)
    } else {
        localStorage.setItem("node", true);
        document.location.reload(true)
    }
});