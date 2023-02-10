function makeNote (note) {
    let event = {
      kind: 1,
      pubkey: pubKey,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content: note
    };
    event.id = window.NostrTools.getEventHash(event);
    event.sig = window.NostrTools.signEvent(event, privKey);

    let pubRelay1 = defaultRelay1.publish(event)
    pubRelay1.on('ok', () => {
      console.log(`${defaultRelay1.url} has accepted our event`)
    })
    pubRelay1.on('seen', () => {
      console.log(`we saw the event on ${defaultRelay1.url}`)
    })
    pubRelay1.on('failed', reason => {
      console.log(`failed to publish to ${defaultRelay1.url}: ${reason}`)
    })

    let pubRelay2 = defaultRelay2.publish(event)
    pubRelay1.on('ok', () => {
      console.log(`${defaultRelay2.url} has accepted our event`)
    })
    pubRelay2.on('seen', () => {
      console.log(`we saw the event on ${defaultRelay2.url}`)
    })
    pubRelay2.on('failed', reason => {
      console.log(`failed to publish to ${defaultRelay2.url}: ${reason}`)
    })

    modal.style.display = "none";
    document.getElementById('publish-textarea').value = '';
}