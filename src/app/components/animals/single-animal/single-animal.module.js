import singleComponent from './single-animal.component.js';


const SingleAnimalModule = angular
	.module('singleAnimal', [])
	.component('singleAnim', singleComponent);

export default SingleAnimalModule.name;