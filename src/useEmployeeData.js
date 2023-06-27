import employees from "./employeeData";

export default function useEmployeeData() {
  const activeTechEmployees = employees.filter(
    (employee) =>
      employee.status === "active" && employee.tags?.includes("tech")
  );
  const deptDictionary = {};

  function fillDictionary(employees) {
    activeTechEmployees.forEach((employee) => {
      if (!deptDictionary[employee.department]) {
        deptDictionary[employee.department] = [employee];
      } else deptDictionary[employee.department].push(employee);
    });
    console.log(deptDictionary);
    return deptDictionary;
  }

  return {
    departments: fillDictionary()
  };
}
