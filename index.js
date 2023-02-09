const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


//const privKey = generatePrivateKey()
//const pubKey = getPublicKey(privKey)

//console.log("Public Key: " + pubKey);
//console.log("Private Key: " + privKey);