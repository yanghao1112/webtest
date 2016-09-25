angular.module('phoneList').component('phoneList',{
	templateUrl:'phone-list/phone-list.template.html',
	controller: ['$http',function PhoneListController($http) {
		var self = this;
		/*
		this.phones = [
			{
			  name: 'Nexus S',
			  snippet: 'Fast just got faster with Nexus S.',
			  age:3
			}, {
			  name: 'Motorola XOOM? with Wi-Fi',
			  snippet: 'The Next, Next Generation tablet.',
			  age:2
			}, {
			  name: 'MOTOROLA XOOM?',
			  snippet: 'The Next, Next Generation tablet.',
			  age:3
			}, {
			  name: 'MOTOROLA XOOM4',
			  snippet: 'The Next, Next Generation tablet.',
			  age:4
			}
		];
		*/
		this.orderProp = 'age';
		$http.get('phones/phones.json').then(function(response) {
			self.phones = response.data;
		})
	}]
});