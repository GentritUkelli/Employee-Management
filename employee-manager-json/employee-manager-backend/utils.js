const jsonServer = require("json-server");

const router = jsonServer.router("db.json");

function readLastUsedDepartmentId() {
  try {
    const data = router.db.get("lastUsedId").value();
    return data.departmentId;
  } catch (error) {
    return 1;
  }
}

function writeLastUsedDepartmentId(value) {
  const lastUsedId = router.db.get("lastUsedId");
  lastUsedId.departmentId = value;
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
module.exports ={
  readLastUsedDepartmentId,
  writeLastUsedDepartmentId,
  readLastUsedEmployeeId,
  writeLastUsedEmployeeId,
  readLastUsedTaskId,
  writeLastUsedTaskId
};
