module.exports = function (server) {
  const { readLastUsedDepartmentId } = require("../utils");

  let departmentIdCounter = readLastUsedDepartmentId();

  const jsonServer = require("json-server");

  const router = jsonServer.router("db.json");

  server.post("/api/departments", (request, response) => {
    const requestBody = request.body;
    if (requestBody.id === undefined) {
      let departmentId = departmentIdCounter++;

      const newDepartment = {
        id: departmentId,
        name: requestBody.name,
        employee_list: [],
      };

      const departmentsData = router.db.get("departments").value();
      departmentsData.push(newDepartment);
      router.db.set("departments", departmentsData).write();
      const lastUsedId = router.db.get("lastUsedId").value();
      lastUsedId.departmentId = departmentIdCounter;
      router.db.set("lastUsedId", lastUsedId).write();
      response.json(newDepartment);
    } else {
      const departmentsData = router.db.get("departments").value();
      //for debugging
      console.log(requestBody.id);
      console.log(departmentsData);

      const index = departmentsData.findIndex(
        (dept) => dept.id === departmentId
      );

      console.log(index);

      if (index === -1) {
        response.status(404)({ error: "Department not found" });
      } else {
        request.id = parseInt(requestBody.id);
        departmentsData[index] = {
          ...departmentsData[index],
          ...requestBody,
        };

        router.db.set("departments", departmentsData).write();
        response.json(departmentsData[index]);
      }
    }
  });

  server.delete("/api/departments/delete/:id", (request, response) => {
    const departmentId = parseInt(request.params.id);

    const departmentsData = router.db.get("departments").value();

    const updatedDepartments = departmentsData.filter(
      (dept) => dept.id !== departmentId
    );

    router.db.set("departments", updatedDepartments).write();
    response.json({ message: "Departments deleted successfully" });
  });

  server.get("/api/departments/all", (request, response) => {
    const departmentsData = router.db.get("departments").value();
    response.json(departmentsData);
  });

  server.get("/api/departments/id/:id", (request, response) => {
    const departmentId = parseInt(request.params.id);
    const departmentsData = router.db.get("departments").value();
    const department = departmentsData.find((dept) => dept.id === departmentId);

    if (!department) {
      response.status(404).json({ error: "Departments not found" });
    } else {
      response.json(department);
    }
  });
};
