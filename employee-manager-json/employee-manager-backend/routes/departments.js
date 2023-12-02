module.exports = function(server){
  const {readLastUsedDepartmentId} = require("../utils");

  let departmentIdCounter = readLastUsedDepartmentId();

  const jsonServer = require("json-server");

  const router = jsonServer.router("db.json");

  server.delete("/api/departments/delete/:id", (request, response) => {
    const departmentId = parseInt(request.params.id);

    const departmentData = router.db.get("departments").value();

    const updatedDepartments = departmentData.filter(
      (dept) => dept.id !== departmentId
    );

    router.db.set("departments", updatedDepartments).write();

    response.json({message:"Departments deleted successfully"});
  });

  server.get("/api/departments/all", (request, response) => {
    const departmentData = router.db.get("departments").value();

    response.json(departmentData);

  });
}