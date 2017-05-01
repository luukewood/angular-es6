import angular from 'angular';
import animalsComponent from './animals.component.js';
import animalsService from './animals.service.js';
import singleAnimalModule from './single-animal/single-animal.module.js';

const AnimalsModule = angular.module('animals', [singleAnimalModule])
	.service('animalsService', animalsService)
	.component('animalsComp', animalsComponent);

export default AnimalsModule.name;