
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8168A1D4-3C73-4658-86A9-10AC09B43CB9"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	
	databaseManager.saveData();
	history.back();
	application.output("saved");
}



/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"433A539A-C672-4FAB-922D-4A694FCA903E"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E0340910-AE70-4F02-A11A-7FD12DD965C6"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"30572136-BFC8-44C0-95C8-017964698CB2"}
 */
function onAction2(event) {
	// TODO Auto-generated method stub
	forms.Patient.controller.show();

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"67A6FEFD-BC96-412E-A777-57CF86631E29"}
 */
function onAction3(event) {
	// TODO Auto-generated method stub
	history.back();

}
