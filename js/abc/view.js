const view = {
  pastScreen: null,

  showScreen: async function (screenName) {
    let app = document.querySelector(`#app`);
    // view.abc(screenName)
    switch (screenName) {
      case `register`: {
        app.innerHTML = components.register;
        let nut = document.getElementById("nut");
        nut.addEventListener("click", () => {
          view.showScreen(`login`);
        });
        let form = document.querySelector(`.register-form`);
        form.onsubmit = function (event) {
          event.preventDefault();
          let registerInfo = {
            firstname: form.firstname.value.trim(),
            lastname: form.lastname.value.trim(),
            email: form.email.value.trim().toLowerCase(),
            password: form.password.value,
            confirmPassword: form.confirmPassword.value,
          };

          let validateResult = [
            utils.validate(
              registerInfo.firstname,
              "#firstname-error",
              "Missing firstname!"
            ),
            utils.validate(
              registerInfo.lastname,
              "#lastname-error",
              "Missing lastname!"
            ),
            utils.validate(
              registerInfo.email,
              "#email-error",
              "Missing email!"
            ),
            utils.validate(
              registerInfo.password && registerInfo.password.length >= 6,
              "#password-error",
              "Wrong password!"
            ),
            utils.validate(
              registerInfo.confirmPassword &&
              registerInfo.confirmPassword.length >= 6 &&
              registerInfo.password == registerInfo.confirmPassword,
              "#confirm-password-error",
              "Wrong password!"
            ),
          ];

          //submit
          if (utils.allPassed(validateResult)) {
            controller.register(registerInfo);
          }
        };
        break;
      }
      case `login`: {
        app.innerHTML = components.login;
        let nut = document.getElementById("nut");
        nut.addEventListener("click", () => {
          view.showScreen(`register`);
        });
        let form = document.querySelector(`.login-form`);
        form.onsubmit = function (event) {
          event.preventDefault();
          let loginInfo = {
            email: form.email.value.trim().toLowerCase(),
            password: form.password.value,
          };

          let validateResult = [
            utils.validate(loginInfo.email, "#email-error", "Missing email!"),
            utils.validate(
              loginInfo.password && loginInfo.password.length >= 6,
              "#password-error",
              "Wrong password!"
            ),
          ];

          if (utils.allPassed(validateResult)) {
            controller.login(loginInfo);
          }
        };
        break;
      }
      case `homepage`: {
        app.innerHTML = components.header + components.homepage;
        await controller.loadMagazine();
        view.showMagazine(model.views);
        view.showNav(model.currentView);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);

        const searchClick = document.getElementById("formSearch")
        searchClick.onsubmit = function (e) {
          e.preventDefault();
          const search = document.getElementById("topSearch");
          let x = []
          search.addEventListener('keyup', function (e) {
            const searchValue = e.target.value;
            for (i = 0; i < model.views.length; i++) {
              const titleArray = model.views[i].title;
              if (model.views[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                x.push(model.views[i])
                view.showMagazine(x)
              }
            }
          });
        }
        break;
      }
      case `homepageNoNav`: {
        app.innerHTML = components.header + components.homepage;
        await controller.loadMagazine();
        view.showMagazine(model.views);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);

        const searchClick = document.getElementById("formSearch")
        searchClick.onsubmit = function (e) {
          e.preventDefault();
          const search = document.getElementById("topSearch");
          let x = []
          search.addEventListener('keyup', function (e) {
            const searchValue = e.target.value;
            for (i = 0; i < model.views.length; i++) {
              const titleArray = model.views[i].title;
              if (model.views[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                x.push(model.views[i])
                view.showMagazine(x)
              }
            }
          });
        }
        break;
      }
      case `homepageAdmin`: {
        app.innerHTML = components.headerAdmin + components.homepage;
        await controller.loadMagazine();
        view.showMagazine(model.views);
        view.showNav(model.currentView);
        let submitForm = document.getElementById("submitForm")
        submitForm.addEventListener("click", () => {
          view.showScreen(`submit`)
        })
        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);

        const searchClick = document.getElementById("formSearch")
        searchClick.onsubmit = function (e) {
          e.preventDefault();
          const search = document.getElementById("topSearch");
          let x = []
          search.addEventListener('keyup', function (e) {
            const searchValue = e.target.value;
            for (i = 0; i < model.views.length; i++) {
              const titleArray = model.views[i].title;
              if (model.views[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                x.push(model.views[i])
                view.showMagazine(x)
              }
            }
          });
        }
        break;
      }
      case `review`: {
        view.pastScreen = 'review'
        app.innerHTML = components.header + components.review;
        await controller.loadReview();
        view.showReview(model.views);
        view.showNav(model.currentView);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);
        break;
      }
      case `magazine`: {
        app.innerHTML = components.header + components.magazine;
        await controller.loadMagazineOnl();
        view.showMagazineOnl(model.views)
        view.showNav(model.currentView);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);
        break;
      }
      case `magazine1`: {
        app.innerHTML = components.header + components.magazine2;
        await controller.loadMagazineOnl1();
        view.showMagazineOnl(model.views);
        view.showNav(model.currentView);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);
        break;
      }
      case `magazine2`: {
        app.innerHTML = components.header + components.magazine1;
        await controller.loadMagazineOnl2();
        view.showMagazineOnl(model.views);
        view.showNav(model.currentView);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);
        break;
      }
      case `singelView`: {
        app.innerHTML = components.singleView;
        controller.setupViewChanges();
        view.ShowCurrentMagazine(model.currentView);
        view.showNav(model.currentView);
        view.showChat(model.currentView);

        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        //event chat
        let chat = document.getElementById("chatSubmit");
        chat.onsubmit = async function (event) {
          event.preventDefault();
          let chatComment = chat.message.value.trim();
          //submit
          if (chatComment && model.currentView) {
            await controller.updateChat(chatComment);
            chat.message.value = ""
          }
        }

        activeFunc(jQuery);
        break;
      }
      case `singelViewGameOnl`: {
        app.innerHTML = components.singleView;
        controller.setupViewChangesGameOnl();
        view.showNav(model.currentView);
        view.ShowCurrentMagazine(model.currentView);
        view.showChat(model.currentView);
        let review = document.querySelector(`.review`);
        review.onclick = function () {
          view.showScreen(`review`);
        };
        let gameOnlOff = document.getElementsByClassName(`gameOnlOff`);
        for (const child of gameOnlOff) {
          child.onclick = function () {
            view.showScreen(`magazine`)
          }
        }
        //event chat
        let chat = document.getElementById("chatSubmit");
        chat.onsubmit = async function (event) {
          event.preventDefault();
          let chatComment = chat.message.value.trim();
          //submit
          if (chatComment && model.currentView) {
            await controller.updateChatOnl(chatComment);
            chat.message.value = ""
          }
        }
        break;

      }
      case `contact`: {
        app.innerHTML = components.header + components.contact;
        view.showNav(model.currentView);
        let sign = document.getElementById("signIn");
        sign.onclick = function () {
          view.showScreen(`register`);
        };
        let click = document.querySelector(`.review`);
        click.onclick = function () {
          view.showScreen(`review`);
        };
        let click1 = document.querySelector(`.magazine1`);
        click1.onclick = function () {
          view.showScreen(`magazine`);
        };
        let click2 = document.querySelector(`.magazine2`);
        click2.onclick = function () {
          view.showScreen(`magazine2`);
        };
        let click3 = document.querySelector(`.magazine3`);
        click3.onclick = function () {
          view.showScreen(`magazine1`);
        };
        let click4 = document.querySelector(`.contact`);
        click4.onclick = function () {
          view.showScreen(`contact`);
        };

        activeFunc(jQuery);

        const searchClick = document.getElementById("formSearch")
        searchClick.onsubmit = function (e) {
          e.preventDefault();
          const search = document.getElementById("topSearch");
          search.addEventListener('keyup', function (e) {
            const searchValue = e.target.value;
            for (i = 0; i < model.views.length; i++) {
              const titleArray = model.views[i].title;
              if (model.views[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                model.saveCurrentView(model.views[i]);
                view.showScreen(`singelView`);
              }
              else {
                console.log("lỗi")
              }
            }
          });
        }

        break;
      }
      case `submit`: {
        app.innerHTML = components.submit
        let back = document.getElementById("back");
        back.addEventListener("click", () => {
          view.showScreen(`homepageAdmin`)
        })
        let submitForm = document.querySelector(
          ".submit-form"
        );
        submitForm.onsubmit = async function (event) {
          event.preventDefault();
          let owner = submitForm.owner.value.trim();
          let time = submitForm.time.value;
          let picture = submitForm.picture.value.trim();
          let title = submitForm.title.value.trim();
          let content = submitForm.content.value.trim();
          let contentMaga = submitForm.contentMaga.value.trim();
          let validateResult = [
            utils.validate(owner, "#owner-error", "Missing owner"),
            utils.validate(
              time,
              "#time-error",
              "Missinge time"
            ),
            utils.validate(picture, "#picture-error", "Missing picture"),
            utils.validate(content, "#content-error", "Missing content"),
            utils.validate(title, "#title-error", "Missing title"),
            utils.validate(contentMaga, "#content-maga-error", "Missing Content Maga"),
          ];
          if (utils.allPassed(validateResult)) {
            controller.createNewView(owner, time, picture, title, content, contentMaga);
            submitForm.owner.value = ""
            submitForm.time.value = ""
            submitForm.picture.value = ""
            submitForm.title.value = ""
            submitForm.content.value = ""
            submitForm.contentMaga.value = ""
          }
        };
      }
    }
  },
  showNav() {
    let currentEmail = firebase.auth().currentUser.email;
    let email = document.querySelector(`#signIn`);
    if (currentEmail) {
      email.innerHTML = `
      <div class="login-area">
        <span id="text-login">${currentEmail}</span>   
      </div>
      <button type="button" id="signout">Thoát</button>`;
      let signOut = document.getElementById("signout");
      signOut.addEventListener("click", () => {
        signOut = firebase.auth().signOut();
      });
    }
  },

  showMagazine(magazines) {
    let show = document.getElementById("test");
    show.innerHTML = "";
    if (magazines && magazines.length) {
      for (let magazine of magazines) {
        let title = magazine.title || "...";
        let pic = magazine.picture;
        let createdAt = magazine.createdAt;
        let review = magazine.review;
        let magazineDom = document.createElement("div");
        magazineDom.innerHTML = ` 
        <div class="single-articles-area style-2 d-flex flex-wrap mb-30 wow fadeInUp" data-wow-delay="300ms">
            <div class="article-thumbnail">
                <img src=${pic} alt="">
            </div>
            <div class="article-content">
                <a href="#" class="post-title">${title}</a>
                <div class="post-meta">
                    <a href="#" class="post-date">${createdAt}</a>
                </div>
                <p>${review}</p>
            </div>
        </div>`;

        magazineDom.onclick = function () {
          model.saveCurrentView(magazine);
          view.showScreen(`singelView`);
        };

        show.appendChild(magazineDom);
      }
    }
    Pagination1(jQuery);
  },

  showMagazineOnl(magazines) {
    let show = document.getElementById("oneMaga");
    show.innerHTML = "";
    if (magazines && magazines.length) {
      for (let magazine of magazines) {
        let title = magazine.title || "...";
        let pic = magazine.picture;
        let createdAt = magazine.createdAt;
        let review = magazine.review;
        magazineDom = document.createElement("div");
        magazineDom.innerHTML = ` 
        <div class="single-articles-area d-flex flex-wrap mb-30">
            <div class="article-thumbnail">
                <img src=${pic} alt="">
            </div>
            <div class="article-content">
                <a href="#" class="post-title">${title}</a>
                <div class="post-meta">
                    <a href="#" class="post-date">${createdAt}</a>
                </div>
                <p>${review}</p>
            </div>
        </div>`;

        magazineDom.onclick = function () {
          model.saveCurrentView(magazine);
          view.showScreen(`singelViewGameOnl`);
        };

        show.appendChild(magazineDom);
      }
    }
    Pagination2(jQuery);
  },
  ShowCurrentMagazine(view) {
    let magazine = document.getElementById("content");
    magazine.innerHTML = "";
    if (view) {
      let reviews = view.content;
      for (let review of reviews) {
        let createdAt = review.createdAt;
        let title = review.title;
        let owner = review.owner;
        let pic = review.detail.pictures;
        let words = review.detail.words;
        let magazineHtml = ` <div class="post-details-content mb-100">
        <img src=${pic}>
          <div class="blog-content">
              <h4 class="post-title">${title}</h4>
              <div class="post-meta mb-30">
                  <a href="#" class="post-date">${createdAt}</a>
                  <a href="#" class="post-author">${owner}</a>
              </div>
              <p>${words}</p>
          </div>
      </div>
  `;
        magazine.innerHTML += magazineHtml;
      }
    }
  },

  showReview(reeviews) {
    let listReview = document.getElementById("oneReview");
    listReview.innerHTML = "";
    if (reeviews && reeviews.length) {
      for (let reeview of reeviews) {
        let title = reeview.title || "...";
        let pic = reeview.picture;
        let createdAt = reeview.createdAt;
        let review = reeview.review;
        let type = reeview.type;
        let score = reeview.score;
        reeviewDom = document.createElement("div");
        reeviewDom.innerHTML = ` 
        <div class="single-game-review-area d-flex flex-wrap mb-30">
                        <div class="game-thumbnail">
                            <img src="${pic}" alt="">
                        </div>
                        <div class="game-content">
                            <span class="game-tag">${type}</span>
                            <a href="#" class="game-title">${title}</a>
                            <div class="game-meta">
                                <a href="#" class="game-date">${createdAt}</a>
                            </div>
                            <p>${review}</p>
                            <!-- Download & Rating Area -->
                            <div class="download-rating-area d-flex align-items-center justify-content-between">
                                <div class="download-area">
                                    <a href="#"><img src="img/core-img/app-store.png" alt=""></a>
                                    <a href="#"><img src="img/core-img/google-play.png" alt=""></a>
                                </div>
                                <div class="rating-area text-center">
                                    <h3>${score}</h3>
                                    <div class="stars">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        reeviewDom.onclick = function () {
          model.saveCurrentView(reeview);
          view.showScreen(`singelView`);
        };

        listReview.appendChild(reeviewDom);
      }
    }
    Pagination3(jQuery);
  },

  showChat(view) {
    let comment1 = document.getElementById("commentMaga")
    comment1.innerHTML = "";
    if (view) {
      let comments = view.comment
      for (let comment of comments) {
        let com = comment.content
        let email = comment.owner
        let chatHtml = ` <!-- Comment Content -->
        <div class="comment-content d-flex" >
            <!-- Comment Author -->
            <div class="comment-author">
                <img src="img/bg-img/icon.png" alt="author">
            </div>
            <!-- Comment Meta -->
            <div class="comment-meta">
                <a href="#" class="post-author">${email}</a>
                <p>${com}</p>
            </div>
        </div>`;
        comment1.innerHTML += chatHtml
      }
    }
  },
};
