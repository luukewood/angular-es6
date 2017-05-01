// import AppSidebarCtrl from 'app-sidebar.component.js';

import appSidebar from './app-sidebar.component.js';
import AppSidebarCtrl  from './app-sidebar.controller.js';
import footer from './footer/footer.module.js';
import toolbar from './toolbar/toolbar.module.js';

const common = angular
	.module('startApp.common', [footer, toolbar])
	.controller('AppSidebarCtrl', AppSidebarCtrl)
	.component('appSidebar', appSidebar);


export default common.name;