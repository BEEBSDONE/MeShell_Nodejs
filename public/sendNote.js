import { pool, relays } from './relays.js'

function makeNote (note) {
    let newEvent = {
      kind: 1,
      pubkey: pubKey,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content: note
    };
    newEvent.id = window.NostrTools.getEventHash(newEvent);
    newEvent.sig = window.NostrTools.signEvent(newEvent, privKey);

	let pubs = pool.publish(relays, newEvent)
	pubs.forEach(pub =>
	  pub.on('ok', () => {
	    console.log('relays accepted our event')
	  })
	)

	let relaysForEvent = pool.seenOn(newEvent.id);
	console.log(relaysForEvent);

    modal.style.display = "none";
    document.getElementById('publish-textarea').value = '';
}