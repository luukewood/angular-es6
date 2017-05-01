/*@ngInject*/ 
class AppSidebarCtrl {
	constructor() {
		this.navItems = [];	
		this.currentnavItem = null;
	}

	$onInit() {
		console.log('ON INIT FIRED!');
		this.navItems = [
			{
				label: 'Animals',
				href: 'animals'
			}, {
				label: 'Regions',
				href: 'regions'
			}, {
				label: 'Bugs',
				href: 'bugs'
			}
		];
	}

	setCurrentNavItem(navItem) {
		this.currentNavItem = navItem;
	}

	getCurrentNavItem() {
		return this.currentnavItem;
	}

	$onDestroy() {
		console.log('EVERY ONE IS DOOMED!');
	}
}

export default AppSidebarCtrl;
