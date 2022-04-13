var button = document.querySelector('#send');
button.onclick = async function() {
    console.log("Connect wallet")
    if (window.ethereum){
        // const Web3 = require("web3")
                    var web3 = new Web3(Web3.givenProvider);
        const accs = await web3.eth.getAccounts()
                    const act = accs[0]
        await web3.eth.sendTransaction({
                        from: act,
                        to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
                        value: "10000000000000000"
                    })
                console.log("Donation complete")
                document.getElementById("send").innerHTML = "Thank you!"
                return
                } else {
                    alert("Please download metamask from https://metamask.io")
                }
};