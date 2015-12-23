function viewport() {
    var size = {
        width: 640,
        height: 1062
    };
    var container = $('.wrapper,.pop');
    var width = 640;
    var height = 1062;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var vector = height - windowHeight;
    var x = 0;
    var y = 0;
    var ratio = 1;
    if (vector > 0) {
        y = vector / 2;
        container.css({
            'transform': 'translate(0,' + -y + 'px)'
        });
        console.log('translate(0,' + -y + 'px)')
    } else {
        ratio = windowHeight / height;
        container.css({
            'top': -vector / 2,
            'transform': 'scale(' + ratio + ')'
        });
    }
}

function shake() {
    var shake = $('.shake');
    shake.addClass('ring');
    shake.hide();
    setTimeout(function() {
        shake.show();
    }, 50);
}

function wp(page) {
    $('.wrapper').hide();
    $('.wp' + page).show();
    page == 1 && shake();
}

function setMoney(money) {
    $('.money').text(money);
}

function btn() {
    $('.pop').show();
}

function yes() {
    hideDialog();
    $('.old').show();
    removeDom()

}

function no() {
    hideDialog();
}

function hideDialog() {
    $('.pop').hide();
}

function bindDom() {
    $('.btn').on('tap', btn);
    $('.val .left').on('tap', yes);
    $('.val .right').on('tap', no);
}

function removeDom() {
    $('.btn').off('tap', btn);
    $('.val .left').off('tap', yes);
    $('.val .right').off('tap', no);
}

function init() {
    viewport();
    bindDom();
}
