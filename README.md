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

Configurer les tests unitaires avec Karma
-----------------------------------------

* karma init
* répondre aux différentes questions
* dans files, ajouter angular.js et angular-mocks.js
* Comment ajouter l'autocompletion de Jasmine ? Ajouter les DefinitelyTyped comme librairies Javascript dans Webstorm
