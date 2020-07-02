const controller = {
  register: async function (registerInfo) {
    let email = registerInfo.email;
    let password = registerInfo.password;
    let name = registerInfo.firstname + "" + registerInfo.lastname;
    utils.setText("#register-success", "");
    utils.setText("#register-error", "");
    utils.disable("#dangky");

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
      });
      await firebase.auth().currentUser.sendEmailVerification();
      utils.setText(
        "#register-success",
        "Register success! An email verifed has been sent to your email address!"
      );
    } catch (error) {
      utils.setText("#register-error", error.message);
    }
    utils.enable("#dangky");
  },

  login: async function (loginInfo) {
    let email = loginInfo.email;
    let password = loginInfo.password;
    document.querySelector("#login-success").innerText = "";
    document.querySelector("#login-error").innerText = "";
    document.querySelector("#login-btn").setAttribute("disabled", true);

    try {
      let result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (result.user && result.user.emailVerified) {
        document.querySelector("#login-success").innerText = "Login success!";
        window.location = "http://127.0.0.1:5500/index.html";
      } else {
        throw new Error("Email must be verified!");
      }
    } catch (error) {
      utils.setText("#login-error", error.message);
      document.querySelector("#login-btn").removeAttribute("disabled");
    }
  },

  loadMagazine: async function () {
    let result = await firebase.firestore().collection("view").get();
    let docs = result.docs;
    let magazines = utils.getDataFromDocs(docs);
    if (magazines.length) {
      let currentMagazine = magazines[0];
      model.saveCurrentView(currentMagazine);
    }
    model.saveViews(magazines);
  },

  loadMagazineOnl: async function () {
    let result = await firebase.firestore().collection("game-online").get();
    let docs = result.docs;
    let magazines = utils.getDataFromDocs(docs);
    if (magazines.length) {
      let currentMagazine = magazines[0];
      model.saveCurrentView(currentMagazine);
    }
    model.saveViews(magazines);
  },

  loadMagazineOnl1: async function () {
    let result = await firebase.firestore().collection("esport").get();
    let docs = result.docs;
    let magazines = utils.getDataFromDocs(docs);
    if (magazines.length) {
      let currentMagazine = magazines[0];
      model.saveCurrentView(currentMagazine);
    }
    model.saveViews(magazines);
  },

  loadMagazineOnl2: async function () {
    let result = await firebase.firestore().collection("pc-console").get();
    let docs = result.docs;
    let magazines = utils.getDataFromDocs(docs);
    if (magazines.length) {
      let currentMagazine = magazines[0];
      model.saveCurrentView(currentMagazine);
    }
    model.saveViews(magazines);
  },

  loadReview: async function () {
    let result = await firebase.firestore().collection("review").get();
    let docs = result.docs;
    let reeviews = utils.getDataFromDocs(docs);
    if (reeviews.length) {
      let currentReview = reeviews[0];
      model.saveCurrentView(currentReview);
    }
    model.saveViews(reeviews);
  },

  updateChat: async function (chatComment) {
    let currentEmail = firebase.auth().currentUser.email
    let chat = {
      content: chatComment,
      owner: currentEmail,
    };
    let currentChatId = model.currentView.id;
    await firebase.firestore().collection("view").doc(currentChatId).update({ comment: firebase.firestore.FieldValue.arrayUnion(chat) })
  },
  updateChatOnl: async function (chatComment) {
    let currentEmail = firebase.auth().currentUser.email
    let chat = {
      content: chatComment,
      owner: currentEmail,
    };
    let currentChatId = model.currentView.id;
    await firebase.firestore().collection("game-online").doc(currentChatId).update({ comment: firebase.firestore.FieldValue.arrayUnion(chat) })
  },

  async createNewView(owner, time, picture, title, content, contentMaga) {
    let pics = picture;
    let words = contentMaga;
    let submit = {
      owner: owner,
      createdAt: time,
      picture: picture,
      title: title,
      review: content,
      content: [{ createdAt: time, owner: owner, title: title, detail: { pictures: pics, words: words } }]
    };
    await firebase.firestore().collection("view").add(submit);
  },

  setupViewChanges() {
    let isFirstRun = true;
    firebase
      .firestore()
      .collection("view")
      .onSnapshot(function (snapshot) {
        if (isFirstRun) {
          isFirstRun = false;
          return;
        }
        let docChanges = snapshot.docChanges();
        for (let docChange of docChanges) {
          let type = docChange.type;
          let doc = docChange.doc;
          let newView = utils.getDataFromDoc(doc);

          if (type == "modified") {
            model.updateView(newView);
            if (model.currentView && model.currentView.id == newView.id) {
              view.showChat(model.currentView);
            }
          }
        }
      });
  },

  setupViewChangesGameOnl() {
    let isFirstRun = true;
    firebase
      .firestore()
      .collection("game-online")
      .onSnapshot(function (snapshot) {
        if (isFirstRun) {
          isFirstRun = false;
          return;
        }
        let docChanges = snapshot.docChanges();
        for (let docChange of docChanges) {
          let type = docChange.type;
          let doc = docChange.doc;
          let newView = utils.getDataFromDoc(doc);

          if (type == "modified") {
            model.updateView(newView);
            if (model.currentView && model.currentView.id == newView.id) {
              view.showChat(model.currentView);
            }
          }
        }
      });
  },


};
