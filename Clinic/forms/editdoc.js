
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"790F4BEA-FC9B-4A32-AEF7-9D7F6FB07AC7"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"48E45ED2-7069-4185-BD46-0395E178ABF0"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	
	databaseManager.saveData();
	history.back();
	application.output("saved");
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0D12D558-C339-4D1F-B1B9-D3EEA47516E8"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	history.back();

}
