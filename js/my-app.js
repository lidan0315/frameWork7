// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
    //��̬��������ֻ��ios֧�֣���ֻ�Դ�͸���͵Ĳ�����Ч
    dynamicNavbar: true,
    //animateNavBackIcon����Ķ�������ʹ��Щ���ӿ���������iOS 7���
    animateNavBackIcon: true
});

