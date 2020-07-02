window.onload = init;

function init() {
  let bca = localStorage.getItem("view")
  firebase.auth().onAuthStateChanged(function (user) {
    if (user && user.emailVerified) {
      view.showScreen("homepage");
      if (user.email === "thaorua000@gmail.com") {
        view.showScreen("homepageAdmin")
      }
    } else {
      view.showScreen("homepageNoNav");
    }
  });
}


function getDataFromDoc(doc) {
  let data = doc.data();
  data.id = doc.id;
  return data;
}

function getDataFromDocs(docs) {
  return docs.map(getDataFromDoc);
}
