// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
    //动态导航栏：只被ios支持，它只对穿透类型的布局有效
    dynamicNavbar: true,
    //animateNavBackIcon额外的动画，以使这些链接看起来更像iOS 7外观
    animateNavBackIcon: true
});

