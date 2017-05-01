class AnimalsService {
	constructor($q) {
		/*@ngInject*/ 
		this.animals = [
			{"name": "Litoria Careuela", "country": "Australia"},
			{"name": "Varanus Perentiree", "country": "Australia"},
			{"name": "Magroo Snake", "country": "Malezja"}
		];
		this.$q = $q;
	}

	getAnimals() {
		return this.$q.when(this.animals);
	}

	getRegions() {
		return this.$q.when(this.regions);
	}
}

export default AnimalsService;