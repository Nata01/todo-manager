angular
    .module('todoManagerApp.todo', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'todos',
            url: '/todos',
            templateUrl: 'app/todo/list/todo-list.html',
            controller: 'TodoListController'
        });
    });