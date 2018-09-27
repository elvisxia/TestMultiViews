// Your code here!
document.querySelector("#open").addEventListener("click", function () {
    var targetWindow = window.open("/extWindow.html", null, "msHideView=yes"),
        viewId = MSApp.getViewId(targetWindow),
        ViewManagement = Windows.UI.ViewManagement,
        ApplicationView = ViewManagement.ApplicationView.getForCurrentView();

    ApplicationView.addEventListener("consolidated", function () {
        targetWindow.close();
    });

    ViewManagement.ApplicationViewSwitcher.tryShowAsStandaloneAsync(viewId,
        ViewManagement.ViewSizePreference.default, ApplicationView.id, ViewManagement.ViewSizePreference.default);
});