//DEFAULT RELAYS
var pubKey = localStorage.getItem("pubKey");
var privKey = localStorage.getItem("privKey");
var npub = localStorage.getItem("npub");
var nsec = localStorage.getItem("nsec");

relay1URL = "wss://nostr-pub.wellorder.net";
relay2URL = "wss://relay.nostr.info"

const defaultRelay1 = window.NostrTools.relayInit(relay1URL);
const defaultRelay2 = window.NostrTools.relayInit(relay2URL);

defaultRelay1.connect();
defaultRelay2.connect();

defaultRelay1.on('connect', () => {
console.log(`connected to ${defaultRelay1.url}`)
})
defaultRelay1.on('error', () => {
console.log(`failed to connect to ${defaultRelay1.url}`)
})

defaultRelay2.on('connect', () => {
console.log(`connected to ${defaultRelay2.url}`)
})
defaultRelay2.on('error', () => {
console.log(`failed to connect to ${defaultRelay2.url}`)
})

//SUB TO ME
let subMe1 = defaultRelay1.sub([
    {
        kinds: [1],
        authors: [pubKey]
    }
])

let subMe2 = defaultRelay2.sub([
    {
        kinds: [1],
        authors: [pubKey]
    }
])

subMe1.on('event', event => {
console.log('got event:', event)
})


subMe2.on('event', event => {
console.log('got event:', event)
})