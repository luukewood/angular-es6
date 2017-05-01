import regionsController from './regions.controller.js';
import regionsTemplate from './regions.html';
/*@ngInject*/

const regionsComponent = {
	template: regionsTemplate,
	controller: regionsController,
	controllerAs: 'regionsCtrl'
}

export default regionsComponent;