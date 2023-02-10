function previewChanges () {
    var textNickN = document.getElementById("petnameInput").value;
    var textAboutpreview = document.getElementById("aboutTextArea").value;
    var urlProfilePictureNew = document.getElementById("pictureInput").value;

    if (urlProfilePictureNew === "" || urlProfilePictureNew === undefined || urlProfilePictureNew === null) {
        document.getElementById('identiconPreview').innerHTML = stringSvgDiv;
        document.getElementById('identiconPreview').style.display = "block";
        document.getElementById('previewPPicture').style.display = "none"
    } else {
        document.getElementById('previewPPicture').src = urlProfilePictureNew;
        document.getElementById('previewPPicture').style.display = "block";
        document.getElementById('identiconPreview').style.display = "none";
    }
    document.getElementById('previewNickName').innerHTML = textNickN;
    document.getElementById('previewBio').innerHTML = textAboutpreview;
    document.getElementById('previewPubkey').innerHTML = npub;
};