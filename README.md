Angular samples
===============

Quelques bouts de codes AngularJS et mémos

Débuter avec Bower
------------------

Bower permet à l'instar de Maven pour Java de gérer ses dépendances Javascript.
Il faut installer Bower via NPM (Node Package Manager)

Commandes importantes relatives à Bower

* bower init : permet d'initialiser un projet avec Bower, cela créé le fichier bower.json avec différentes questions qui nous sont posées. Effectuer ce commande permet également de sauver les dépendances si le fichier bower.json existe.
* bower install angularjs : Permet d'installer la version courante d'AngularJS. Bower se charge de prendre la version la plus récente. Il est possible de déterminer une version (http://bower.io/docs/api/#install) notamment avec la commande bower install angularjs#1.3.1
* npm update -g bower : Lorsqu'on exécute la commande bower, un message nous indique que bower n'est pas à jour, on peut le mettre à jour via cette commande.

Pour redéfinir les dépendances, on fait un bower list, on regarde les librairies marquées extraneous.
Pour ces librairies, on fait par exemple bower install bootstrap --save.

Configurer les tests unitaires avec Karma
-----------------------------------------

* karma init
* répondre aux différentes questions
* dans files, ajouter angular.js et angular-mocks.js
* Comment ajouter l'autocompletion de Jasmine ? Ajouter les DefinitelyTyped comme librairies Javascript dans Webstorm

Couverture de code
------------------

* Ajout de karma-coverage npm install karma-coverage
* Ajout d'un reporter dans karma.conf.js

    reporters: ['progress', 'coverage'],

* Ajout d'un preprocessor pour les fichiers à traiter

    preprocessors: {
      'src/**/*.js': ['coverage']
    },
   
* Lancer Run "karma.conf.js" with coverage

Utiliser la librairie de mocking sinon
--------------------------------------

* npm install karma-sinon
* frameworks: ['jasmine', 'sinon']

``` javascript
    beforeEach(module('testing',
                function($provide) {
                    sandbox = sinon.sandbox.create();
                    stubProductService = sinon.stub({
                        add : function() {}
                    });

                    $provide.value('productService', stubProductService);
                }));
                
            it('should add a product with service', function() {
                vm.addProduct({label:"HP Soundblast"});
                expect(stubProductService.add.calledOnce).toEqual(true);
            })
```

Routing
-------

* bower install angular-route --save
* Ajout du module ng-route

``` javascript
    var app =angular
                .module('routing', ['ngRoute']);
```

* Configuration de l'application avec $routeProvider

``` javascript
    app.config(['$routeProvider',
        function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })
                .when('/players', {
                    templateUrl: 'players.html',
                    controller: 'Players',
                    controllerAs: 'vm'
                })
                .otherwise({
                    templateUrl: '404.html'
                })

        }
    ]);
```

TODO
----

* Intégrer sinon
* Traiter les dépendances Node
* Travailler avec Gulp


A lire
------
http://www.uvd.co.uk/blog/no-excuses-angularjs-unit-testing-with-sinon-and-provide/