// import regionsService from './regions.service.js';

/*@ngInject*/
class RegionsController {
	constructor(regionsService) {
		
		this.regionsService = regionsService;
		this.test = 'siema kondizu';
	}

	$onInit() {
		console.log('Init from regionsCtrl');
		this.regionsService.getRegions()
			.then(result => { 
				this.regions = result
			});
	}
}

export default RegionsController;