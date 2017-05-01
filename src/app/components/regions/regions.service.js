/*@ngInject*/ 
class RegionsService {
	constructor($q) {
		this.regions = [
			{"name": "CostaRica", "bioregion": "SubTropic"},
			{"name": "Australia", "bioregion": "Scrub"},
			{"name": "Namibia", "bioregion": "Desert"}
		];

		this.$q = $q;
	}

	getRegions() {
		console.log('Siema!');
		return this.$q.when(this.regions);
	}
}

export default RegionsService;