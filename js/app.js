require('angular');
require('angular-ui-router');
require('angular-modal');
require('angular-resource');
require('angular-filter');
require('../bower_components/angular-socket-io/socket.js');
require('../node_modules/ng-table/dist/ng-table.js');

webApp = angular.module('webApp', ['ui.router', 'btford.modal', 'btford.socket-io', 'ui.bootstrap', 'stBlurredDialog', 'angular.filter']);

webApp.config(["$locationProvider",
    "$stateProvider",
    "$urlRouterProvider", "$httpProvider",
    function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        //Now set up the states
        $stateProvider
            .state('main', {
                abstract: true,
                templateUrl: "partials/app-template.html",
                controller: "templateController"
            })
            .state('main.dashboard', {
                url: "/dashboard",
                templateUrl: "partials/account.html",
                controller: "accountController"
            })

            .state('main.transactions', {
                url: "/transactions",
                templateUrl: "partials/transactions.html",
                controller: "transactionsController"
            })
            .state('main.dappstore', {
                url: "/dappstore",
                templateUrl: "partials/dapps.html",
                controller: "dappsController"
            })
            .state('main.dappsCategory', {
                url: "/dappstore/:categoryId",
                templateUrl: "partials/dapps-category.html",
                controller: "dappsCategoryController"
            })
            .state('main.dappentry', {
                url: "/dapp/:dappId",
                templateUrl: "partials/dapp-entry.html",
                controller: "dappController"
            })
            .state('passphrase', {
                url: "/",
                templateUrl: "partials/passphrase.html",
                controller: "passphraseController"
            });
    }
]);




