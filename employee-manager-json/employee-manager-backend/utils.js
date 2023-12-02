const jsonServer = require("json-server");

const router = jsonServer.router("db.json");

function readLastUsedDepartmentId() {
  try {
    // get data in json file
    const data = router.db.get("lastUsedId").value();
    //return last used id
    return data.departmentId;
  } catch (error) {
    //return 1 if file does not exist
    return 1;
  }
}

function writeLastUsedDepartmentId(value) {
  const lastUsedId = router.db.get("lastUsedId");
  lastUsedId.departmentId = value;

  //write the updated data back to the json file
  router.db.set("lastUsedId", lastUsedId).write();
}

function readLastUsedEmployeeId() {
  try {
    const data = router.db.get("lastUsedId").value();
    return data.employeeId;
  } catch (error) {
    return 1;
  }
}

function writeLastUsedEmployeeId(value) {
  const lastUsedId = router.db.get("lastUsedId");
  lastUsedId.departmentId = value;

  router.db.set("lastUsedId", lastUsedId).write();
}

function readLastUsedTaskId() {
  try {
    const data = router.db.get("lastUsedId").value();
    return data.taskId;
  } catch (error) {
    return 1;
  }
}

function writeLastUsedTaskId(value) {
  const lastUsedId = router.db.get("lastUsedId");
  lastUsedId.departmentId = value;

  router.db.set("lastUsedId", lastUsedId).write();
}

//export these functions in other modules
module.exports ={
  readLastUsedDepartmentId,
  writeLastUsedDepartmentId,
  readLastUsedEmployeeId,
  writeLastUsedEmployeeId,
  readLastUsedTaskId,
  writeLastUsedTaskId
};
