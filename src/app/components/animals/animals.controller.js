/*@ngInject*/
class AnimalsController {
	constructor(animalsService) {
		this.animalsService = animalsService;
	}

	$onInit() {
		this.animalsService.getAnimals()
			.then(result => this.animals = result);
	}

	// onAnimalSelected(animal) {
	// 	console.log('Animal selected', animal);
	// }


}

export default AnimalsController;