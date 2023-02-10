function SendMetadata(textPetname, textAbout, urlProfilePicture) {
    
    localStorage.setItem("NickName", textPetname);
    localStorage.setItem("UserAbout", textAbout);
    localStorage.setItem("UserPPicture", urlProfilePicture);

    var name = "";
    var about = "";
    var picture = "";

    var set_metadata = JSON.parse(localStorage.getItem("my-meta-info")) || {};

    if (document.getElementById("petnameInput")) {
    name = document.getElementById("petnameInput").value;
    } else {
    name = "";
    }

    if (document.getElementById("aboutTextArea")) {
    about = document.getElementById("aboutTextArea").value;
    } else {
    about = "";
    }

    if (document.getElementById("pictureInput")) {
    picture = document.getElementById("pictureInput").value;
    } else {
    picture = "";
    }

    set_metadata["name"] = name;
    set_metadata["about"] = about;
    set_metadata["picture"] = picture;

    localStorage.setItem("my-meta-info", JSON.stringify(set_metadata));;

    var note = JSON.stringify( set_metadata );

    let event = {
      kind: 0,
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

    settingsModal.style.display = "none";
    location.reload();
}