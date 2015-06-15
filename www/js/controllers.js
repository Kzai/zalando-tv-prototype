angular.module('ztv.Controllers', [])

.controller('SlideFormCtrl',
    function($scope, $rootScope, $ionicSlideBoxDelegate) {
        $scope.slideBack = function () {
            $ionicSlideBoxDelegate.previous();
        };
        $scope.nextSlide = function () {
            $ionicSlideBoxDelegate.next()
        }
    })

.controller('MainCtrl', function($scope) {
        $scope.vids =

        {
            "0": {
                "vVideo": "F9fORb30PIU",
                "vTitle": "Mercedes-Benz Fashion Week S/S15 Collections"
            },

            "1": {
                "vVideo": "YFNZV5ydW_I",
                "vTitle": "Spring / Summer Nights Lookbook | Essentials 2015"
            },


            "2": {
                "vVideo": "bFrV3yCgqPY",
                "vTitle": "2015 Fashion Trends: Marsala, Sneakers, Sporty Chic, Floral Print | Hippie Gone Mad x Chictopia"
            },

            "3": {
                "vVideo": "jmdXPXzSsiw",
                "vTitle": "We Spy: New Updates on the Victoria's Secret Fashion Show!"
            },


            "4": {
                "vVideo": "K2ZE-br0-zk",
                "vTitle": "What's In My Bag + Update"
            },

            "5": {
                "vVideo": "CHXRTStPrUQ",
                "vTitle": "Louis Vuitton | Spring Summer 2015 Full Fashion Show | Exclusive"
            },


            "6": {
                "vVideo": "eeMZJALPsBc",
                "vTitle": "Allison's Look of the Day: How to Make Neutrals Fun"
            },


            "7": {
                "vVideo": "2FhQTsLxpw4",
                "vTitle": "Rock What You Got - Girl's Night In"
            },

            "8": {
                "vVideo": "EKeMK7IVp7M",
                "vTitle": "Spring BooHoo LookBook & Givaway ad | Zoella"
            },

            "9": {
                "vVideo": "Zl5z6GBrp8w",
                "vTitle": "Chloe Ting's Fashion Life - Bangkok & Singapore Digital Fashion Week"
            },


            "10": {
                "vVideo": "MFhi9Albr8A",
                "vTitle": "SUPERSTYLED Hotel Edition: SunKissAlba Gets Beyonce's Look"
            },

            "11": {
                "vVideo": "F-g0yfO7CIk",
                "vTitle": "Haul FEBRERO 2015- (Choies y sheinside!)"
            },

            "12": {
                "vVideo": "iBA7DR5PBNI",
                "vTitle": "Big try on Summer haul | Crazy online shopping"
            },

            "13": {
                "vVideo": "D7dHGbU1QQQ",
                "vTitle": "Miu Miu | Spring Summer 2015 Full Fashion Show |  Exclusive"
            },

            "14": {
                "vVideo": "VvORtNKouFM",
                "vTitle": "Jean Paul Gaultier | Spring Summer 2015 Full Fashion Show | Exclusive"
            },

            "15": {
                "vVideo": "UItrxvfGVhs",
                "vTitle": "2015 Fashion Trends for Men"
            }
        };
    });



