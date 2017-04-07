angular
    .module('todoManagerApp.todo')
    .controller('TodoListController', TodoListController);

function TodoListController($scope, $http) {
    updateTodoList();

    $scope.createTodo = function (message) {
        $http
            .post('api/todos', message)
            .then(updateTodoList);
    };

    function updateTodoList() {
        $http
            .get('api/todos')
            .then((res) => {
                $scope.todos = res.data;
            });
    }
}