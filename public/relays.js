var pubKey = localStorage.getItem("pubKey");
var privKey = localStorage.getItem("privKey");

export const pool = new window.NostrTools.SimplePool();

let relay1URL = "wss://nostr-pub.wellorder.net";
let relay2URL = "wss://nostr-pub.wellorder.net";

export let relays = ["wss://nostr-pub.wellorder.net", "wss://nostr-pub.wellorder.net"]

let relay = await pool.ensureRelay('wss://relay.damus.io')

let subs = pool.sub([...relays, relay], {
  authors: ['pubKey']
})

subs.forEach(sub =>
  sub.on('event', event => {
    console.log('got event:', event);
  })
)

let events = await pool.list(relays, [{kinds: [0, 1]}]);
console.log("Event 0 or 1: " + events);


/*GLOBAL CHAT
let subGlobalRelay1 = defaultRelay1.sub([
    {
        kinds: [1],
        authors: []
    }
])
*/

