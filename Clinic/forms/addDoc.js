
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4C6CA73A-9606-46DB-B64B-3E0CDD128C70"}
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
 * @properties={typeid:24,uuid:"15E0FA34-9058-41D4-B234-976286C4BBC4"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	history.back();

}
