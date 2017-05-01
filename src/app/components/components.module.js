// import AnimalsModule from './animals/animals.module.js';
import RegionsModule from './regions/regions.module.js';

const componentsModule = angular.module('startApp.components', [RegionsModule])

export default componentsModule.name;


