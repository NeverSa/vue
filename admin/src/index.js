/**
 * Created by zongchaoyang on 2017/6/19.
 */
var angular=require("angular")
var router=require("angular-ui-router")
const myApp= angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404')
    $stateProvider
        .state('404', {
            url: '/404',
            templateUrl:"src/View/404.html",
        })
})