
$(function () {

    var data = {
        menu: [{
            name: 'Angujar JS',
            link: '0',
            sub: null
        }, {
            name: 'Programación',
            link: '1',
            sub: [{
                name: 'Python',
                link: '0-0',
                sub: null
            }, {
                name: 'Javascript',
                link: '0-1',
                sub: null
            }, {
                name: 'Ruby',
                link: '0-2',
                sub: null
            }]
        }, {
            name: 'Base de datos',
            link: '2',
            sub: [{
                name: 'MongoDB',
                link: '2-0',
                sub: null
            }, {
                name: 'MySQL',
                link: '2-1',
                sub: null
            }]
        }, {
            name: 'Servidores',
            link: '3',
            sub: null
        }]
    };
    var getMenuItem = function (itemData) {
        if (!itemData.sub) {
            var item = $("<li>").append($("<a>", {
                href: '#' + itemData.link,
                target: '_blank',
                html: itemData.name
            }));
        }else{
            var item = $("<li>").append($("<a>", {
                href: '#' + itemData.link,
                class: 'dropdown-menu',
                html: itemData.name
            }));
        }
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };
    
    var $menu = $("#menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.menu();
});

var dropdown = function($data1, $data2, $data3){
    $( $data1 ).click(function() {
      $( $data2 ).toggle( "slow", function() {
        $( $data3 ).toggleClass("active");
      });
    });
}

dropdown($("[data-icon]"), $("[data-menu]"), $("[data-mainmenu]"));