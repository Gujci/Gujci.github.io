var imagesData = {
    "simonyi": {
        data: [
            {
                preview: "images/simonyi.png",
                image: "images/simonyi.png"
            },
            {
                preview: "images/ac.png",
                image: "images/ac.png"
            },
            {
                preview: "images/bss.png",
                image: "images/bss.png"
            },
            {
                preview: "images/lego.png",
                image: "images/lego.png"
            },
            {
                preview: "images/kszk.png",
                image: "images/kszk.png"
            },
            {
                preview: "images/radio.png",
                image: "images/radio.png"
            },
            {
                preview: "images/kirdev.png",
                image: "images/kirdev.png"
            },
            {
                preview: "images/sem.png",
                image: "images/sem.png"
            },
            {
                preview: "images/sds.png",
                image: "images/sds.png"
            }
        ],
        title: "Simonyi",
        link: "simonyi"
    },

    "kulturreszort": {
        data: [
            {
                preview: "images/bbk.png",
                image: "images/bbk.png"
            },
            {
                preview: "images/impulzus.png",
                image: "images/impulzus.png"
            },
            {
                preview: "images/jatszohaz.png",
                image: "images/jatszohaz.png"
            },
            {
                preview: "images/laplace.png",
                image: "images/laplace.png"
            },
            {
                preview: "images/mmmk.png",
                image: "images/mmmk.png"
            },
            {
                preview: "images/silentio.png",
                image: "images/silentio.png"
            }
        ],
        title: "Kultúrreszort",
        link: "kulturreszort"
    },

    "sportreszort": {
        data: [
            {
                preview: "images/dsk.png",
                image: "images/dsk.png"
            },
            {
                preview: "images/csocso.png",
                image: "images/csocso.png"
            }
        ],
        title: "Sportreszort",
        link: "sportreszort"
    },

    "szolgaltatoreszort": {
        data: [
            {
                preview: "images/americano.png",
                image: "images/americano.png"
            },
            {
                preview: "images/pizzasch.png",
                image: "images/pizzasch.png"
            },
            {
                preview: "images/foodex.png",
                image: "images/foodex.png"
            },
            {
                preview: "images/palacsintazo.png",
                image: "images/palacsintazo.png"
            },
            {
                preview: "images/pulcsi.png",
                image: "images/pulcsi.png"
            },
            {
                preview: "images/szauna.png",
                image: "images/szauna.png"
            },
            {
                preview: "images/vodor.png",
                image: "images/vodor.png"
            },
            {
                preview: "images/wtf.png",
                image: "images/wtf.png"
            },
            {
                preview: "images/kakas.png",
                image: "images/kakas.png"
            }
        ],
        title: "Szolgáltatóreszort",
        link: "szolgaltatoreszort"
    },

    "bulisreszort": {
        data: [
            {
                preview: "images/cc.png",
                image: "images/cc.png"
            },
            {
                preview: "images/lanosch.png",
                image: "images/lanosch.png"
            },
            {
                preview: "images/parkett.png",
                image: "images/parkett.png"
            },
            {
                preview: "images/szakest.png",
                image: "images/szakest.png"
            }
        ],
        title: "Bulisreszort",
        link: "bulisreszort"
    },

    "egyeb": {
        data: [
            {
                preview: "images/sch.png",
                image: "images/sch.png"
            },
            {
                preview: "images/iskolaszovetkezet.png",
                image: "images/iskolaszovetkezet.png"
            },
            {
                preview: "images/bazis.png",
                image: "images/bazis.png"
            },
            {
                preview: "images/kfb.png",
                image: "images/kfb.png"
            }
        ],
        title: "Egyéb",
        link: "egyeb"
    }
}

var titlesArray = [];
for (var key in imagesData) {
    titlesArray.push(imagesData[key])
}
var vm = {
    images: ko.observable(imagesData),
    titles: titlesArray
};


ko.applyBindings(vm);

function processHash() {
    elements = document.getElementsByClassName("menu");
    for (i = 0; i < elements.length; ++i) {
        elements[i].className = "menu";
    }

    var hash = window.location.hash.toString().replace('#', '') || "simonyi";
    document.getElementsByName(hash)[0].className = "active menu";
    vm.images(imagesData[hash].data);
}
$(window).on('hashchange', processHash);
processHash();