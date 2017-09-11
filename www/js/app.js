(function () {

    let app = angular.module('store', []);

    const gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'This is the first product of the store',
        canPurchase: false,
        soldOut: true //se vendio todo lo que estaba en existencia
    };

    const gems = [ //estructura de arreglo de objetos
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is the first product of the store',
            canPurchase: false,
            soldOut: true, //se vendio todo lo que estaba en existencia
            images: [
                {
                    full: 'gem-01.gif',
                    thumb: 'gem-01.gif'
                },
                {
                    full: 'gem-02.gif',
                    thumb: 'gem-02.gif'
                },
                {
                    full: 'gem-03.gif',
                    thumb: 'gem-03.gif'
                }
            ],

            
            reviews: [
                {
                stars: 5,
                body: "I love this product!",
                author: "jovana@gmail.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "karen@hotmail.com"
            }
        ]
        },
        {
            name: 'Prism',
            price: 4.95,
            description: 'This is the first product of the store',
            canPurchase: false,
            soldOut: true, //se vendio todo lo que estaba en existencia

            images: [
                {
                    full: 'gem-04.gif',
                    thumb: 'gem-04.gif'
                },
                {
                    full: 'gem-05.gif',
                    thumb: 'gem-05.gif'
                },
                {
                    full: 'gem-06.gif',
                    thumb: 'gem-06.gif'
                }
            ],
            reviews: [
                {
                stars: 5,
                body: "I love this product!",
                author: "jovana@gmail.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "karen@hotmail.com"
            }
        ]
        },
        {
            name: 'Romboide',
            price: 8.95,
            description: 'This is the first product of the store',
            canPurchase: false,
            soldOut: true, //se vendio todo lo que estaba en existencia
            images: [
                {
                    full: 'gem-07.gif',
                    thumb: 'gem-07.gif'
                },
                {
                    full: 'gem-08.gif',
                    thumb: 'gem-08.gif'
                },
                {
                    full: 'gem-09.gif',
                    thumb: 'gem-09.gif'
                }
            ],
            reviews: [
                {
                stars: 5,
                body: "I love this product!",
                author: "jovana@gmail.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "karen@hotmail.com"
            }
        ]

        }
    ];
    app.controller('StoreController', function () {
        this.products = gems;
     });
    app.controller("PanelController", function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab; 
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab; //regresa el valor de tab, cuando es igual a chechtab (de preferencia 3 iguales)
        };

    });
    app.controller ('ReviewController',  function(){
        this.review={};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review ={}; //limpia los campos 
        }
    });

   /* app.controller('GalleryController', function(){
        this.current =0;
        this.setCurrent = function(imageNumber){
            this.current= imageNumber || 0;
        }
    })*/

    app.directive ('productTitle', function(){ //manera correcta de escribir minuscula y luego mayuscula
        return{
            restric: 'E', //tipo de directiva a utilizar e es de elemento
       templateUrl:'product-title.html '//mismo nombre del archivo
        }
    })
})();
