window.onload = function() {
    window.dima = baron({

    }).fix({

    }).pull({

    });

    baron({
        scroller: '.wrapper .scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({

    }).baron({
        barOnCls: 'baron_h',
        bar: '.scroller__bar_h'
    });
};