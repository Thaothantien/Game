const model = {
  views: null,
  currentView: null,
  saveViews(views) {
    model.views = views;
  },
  saveCurrentView(view) {
    model.currentView = view;
  },

  updateView(newView) {
    if (model.currentView && model.currentView.id == newView.id) {
      model.saveCurrentView(newView);
    }
    if (model.views) {
      let indexInViews = model.views.findIndex(function (item) {
        return item.id == newView.id;
      });
      if (indexInViews >= 0) {
        model.views.splice(indexInViews, 1, newView);
      } else {
        model.views.push(newView);
      }
    }
  },
  removeView(view) {
    if (model.views) {
      let findIndex = model.views.findIndex(function (item) {
        return item.id == view.id;
      });
      if (findIndex >= 0) {
        model.views.splice(findIndex, 1);
      }
    }
    if (model.currentView) {
      if (model.currentView.id == view.id) {
        model.saveCurrentView(null);
      }
    }
  },
};
