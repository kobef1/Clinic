/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E881EB6B-7590-4ED3-B81F-738DCCD8890E"}
 */
var searchText = ' ';
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CE470B85-8F96-4C58-A0FC-1506872F5F7A"}
 */


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"41DB566B-E198-4D60-815A-24F8E31B8E85"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();
	forms.Patient.controller.show();

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"501E7192-F2E9-4997-BB81-18C0D4D4394C"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	forms.Edit.controller.show();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0DE6A743-C698-46B6-8AC4-AD952F59B7A1"}
 */
function onAction2(event) {
	// TODO Auto-generated method stub
	forms.Doctor.controller.show();


}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"12FEDB19-28C5-46A2-9141-2D1F32F27D3D"}
 */
function onAction3(event) {
	// TODO Auto-generated method stub
	
	forms.Deplist.controller.show();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3C0B3D2E-1B95-4CD3-9767-51404A919F10"}
 */
function Del(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"60022582-32A7-4682-95C4-035B4C7D560C"}
 */
function onFocusGained(event) {
	// TODO Auto-generated method stub

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"34FA9D25-3D60-4261-8146-A43FDF90EBBD"}
 */


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9D2C4BC7-423B-4D48-A2D3-59F6257FB627"}
 */
function onAction4(event) {
	// TODO Auto-generated method stub
	
		//	 load all records when search is cleared
		if(!searchText){
			foundset.loadAllRecords();
			return;
		}
		
		//	create search object and add search providers
		var search = scopes.svySearch.createSimpleSearch(foundset);
		
		// set the search text
		search.setSearchText(searchText);
		
		//	list of data providers to include in search
		var searchProviders = [
			'firstname',
			'surname',
			'age',
			'city',
			'gender',
			'doctor',
			'diagnosis',
			'ddate',
			// related data providers
		
			
		];
		
		// add search providers
		for(var i in searchProviders){
			search.addSearchProvider(searchProviders[i]);
		}
		
		
		//	execute search
		search.loadRecords(foundset);
		application.output(databaseManager.getSQL(foundset));
		application.output(databaseManager.getSQLParameters(foundset));
		

	}


