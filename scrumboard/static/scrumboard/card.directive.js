(function (){
    ' use strict';
    angular.module('scrumboard.demo')
        .directive('scrumboardCard', CardDirective);

    function CardDirective(){
        return  {
            templateUrl: '/static/scrumboard/card.hmtl',
            restrict:'E'
        };
        }
 })();