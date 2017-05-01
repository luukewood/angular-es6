import templateSingle from './single-animal.html';

const singleAnimalComponent = {
	bindings: {
		animal: '<',
		selected: '&'
	},
	controllerAs: 'singleAnimalCtrl',
	template: templateSingle
}


export default singleAnimalComponent;