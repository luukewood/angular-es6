import animalsTemplate from './animals.html';
import controllerAnimals from './animals.controller.js';

const animalsComponent = {
	template: animalsTemplate,
	controller: controllerAnimals,
	controllerAs: 'animalsCtrl'
}

export default animalsComponent;
