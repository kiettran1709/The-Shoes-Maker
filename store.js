var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
    $scope.adidas = [
        {
            id: 1,
            name: "Adidas NMD R1",
            price: 65,
            photo: "Adidas-nmdr1.png"
        },
        {
            id: 2,
            name: "Adidas U Path Run Shoes",
            price: 75,
            photo: "Adidas-u_pathrunshoes-green.png"
        },
        {
            id: 3,
            name: "Adidas Original Swift Run",
            price: 35,
            photo: "Adidas-originals-wift-run.png"
        },
        {
            id: 4,
            name: "Adidas NMD V2 Footwear White Core Black",
            price: 150,
            photo: "Adidas-nmd-v2-footwear-white-core-black.png"
        },
        {
            id: 5,
            name: "Adidas NMD R1 V2 Black White",
            price: 136,
            photo: "Adidas-nmd-r1-v2-black-white.png"
        },
        {
            id: 6,
            name: "Adidas San Smith",
            price: 50,
            photo: "Adidas-san-smith.png"
        },
        {
            id: 7,
            name: "Adidas Yeezy 700 OG Wave Runner",
            price: 820,
            photo: "Adidas-yeezy-700-og-wave-runner.png"
        },
        {
            id: 8,
            name: "Adidas Yeezy 350 V2 Triple White",
            price: 357,
            photo: "adidas-yeezy-350-v2-triple-white.png"
        },
        {
            id: 9,
            name: "Adidas NMD Pharrell Cream White",
            price: 220,
            photo: "adidas-nmd-Pharrell-cream-white.png",
        }
    ];
    $scope.nike = [
        {
            id: 10,
            name: "Nike Air Max Bella 2",
            price: 75,
            photo: "air-max-bella2.png"
        },
        {
            id: 11,
            name: "Nike Alpha Dunk",
            price: 120,
            photo: "alphadunk.png"
        },
        {
            id: 12,
            name: "Nike Ghoswift",
            price: 53,
            photo: "ghoswift.png"
        },
        {
            id: 13,
            name: "Nike Joyride Run Flynit",
            price: 134,
            photo: "joyride-run-flyknit.png"
        },
        {
            id: 14,
            name: "Nike Adapt BB 2.0 White Black Multi Color",
            price: 332,
            photo: "adapt-bb-2.0-white-black-multi-color.png"
        },
        {
            id: 15,
            name: "Nike Air Max 97 G Golf Shoes",
            price: 180,
            photo: "nike-air-max-97-g-golf-shoes.png"
        },
        {
            id: 16,
            name: "Nike X Off White Vapormax",
            price: 1160,
            photo: "nike-x-off-white-vapormax.png"
        },
        {
            id: 17,
            name: "Nike Air Force 1 X G-Dragon 'Para Noise'",
            price: 715,
            photo: "nike-air-force-1-x-gd.png"
        },
        {
            id: 18,
            name: "Nike X Off White Air Jordan 1 Chicago Red",
            price: 200,
            photo: "nike-x-off-white-air-jordan-1-chicago-red.png"
        }
    ];
    $scope.other = [
        {
            id: 19,
            name: "Balenciaga Triple S",
            price: 1415,
            photo: "balenciaga-triple-S.png"
        },
        {
            id: 20,
            name: "Rick Owens DRKSHDW High Top",
            price: 486,
            photo: "rick-ownes-DRKSHDW-high-top.png"
        },
        {
            id: 21,
            name: "Gucci Ace Sneakers Crystals",
            price: 1250,
            photo: "gucci-ace-sneakers-crystals.png"
        },
        {
            id: 22,
            name: "Converse Chuck Taylor",
            price: 50,
            photo: "converse-chuck-taylor.png"
        },
        {
            id: 23,
            name: "Vans Old Skool",
            price: 100,
            photo: "vans-old-skool.png"
        },
        {
            id: 24,
            name: "MLB Boston Red Sox",
            price: 350,
            photo: "mlb-boston-red-sox.png"
        },
        {
            id: 25,
            name: "Fila Disruptor 2",
            price: 65,
            photo: "fila-disruptor-2.png"
        },
        {
            id: 26,
            name: "Alexander McQueen",
            price: 449,
            photo: "alexander-mcqueen.png"
        },
        {
            id: 27,
            name: "Palladium Boots Pampa Unzipped Black",
            price: 81,
            photo: "palladium-boots-pampa-unzipped-black.png"
        }
    ];

    $scope.cart = [];

     function getExistingCartItem(id){
         for(var i = 0; i < $scope.cart.length; i++){
             if($scope.cart[i].id === id){
                 return $scope.cart[i];
             }
         }
         return null;
     }

    $scope.addCartItem = function (product) {
        var existingItem = getExistingCartItem(product.id);
        if(existingItem == null){
            $scope.cart.push({ name: product.name, quantity: 1, id: product.id, price: product.price })
            console.log($scope.cart);
        }
        else{
            existingItem.quantity++;
        }
    }

    $scope.cartSum = function(){
        var sum = 0;
        $scope.cart.forEach(function(item){
            sum += item.quantity * item.price;
        });
        return sum;
    }


    $scope.pageCount = Math.ceil($scope.cart.length / 4);

    $scope.prop = "name";
    $scope.sortBy = function(prop){
        $scope.prop = prop;
    }

    $scope.first = function(){
        $scope.begin = 0;
    }
    $scope.prev = function(){
        if($scope.begin > 0){
            $scope.begin -= 4;
        }
    }
    $scope.begin = 0;
    $scope.next = function(){
        if($scope.begin < ($scope.pageCount - 1)*4){
            $scope.begin += 4;
        }
    }

    $scope.last = function(){
        $scope.begin = ($scope.pageCount -1)*4;
    }
});

