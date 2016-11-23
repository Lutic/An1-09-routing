(function() {

	angular
		.module("app")
		.config(configAppRouter)
		.run(runApp);

	function configAppRouter($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "tasks/task-list.html",
				controller: "taskList",
				controllerAs: "$ctrl"
			})
			.when("/addTask", {
				templateUrl: "tasks/add-task.html",
				controller: "AddTask",
				controllerAs: "$ctrl"
			})
			.when("/users", {
				templateUrl: "users/user-list.html",
				controller: "UserList",
				controllerAs: "$ctrl"
			})
			.when("/addUser", {
				templateUrl: "users/add-user-general.html",
				controller: "AddUser",
				controllerAs: "$ctrl"
			})
			.when("/addUser/Cost", {
				templateUrl: "users/add-user-cost.html",
				controller: "AddUser",
				controllerAs: "$ctrl"
			})
			.when("/addUser/Notes", {
				templateUrl: "users/add-user-notes.html",
				controller: "AddUser",
				controllerAs: "$ctrl"
			})
			.when("/editUser", {
				templateUrl: "users/edit-user.html",
				controller: "editUser",
				controllerAs: "$ctrl"
			})
			.when("/editUser/:userId", {
				templateUrl: "user-tasks/user-task-list.html",
				controller: "userTaskList",
				controllerAs: "$ctrl"
			})
			.otherwise("/");
	}

	function runApp() {
	}
	
})();