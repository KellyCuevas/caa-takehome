import "./styles.css";
import ActiveEmployeeList from "./ActiveEmployeeList";
import useEmployeeData from "./useEmployeeData";

export default function App() {
  //custom hook that will return the deptDictionary by calling fillDictionary in useEffect
  const { departments } = useEmployeeData();
  // const activeTechEmployees = employees.filter(
  //   (employee) =>
  //     employee.status === "active" && employee.tags?.includes("tech")
  // );
  //   const deptDictionary = {}
  // function fillDictionary(){
  //   activeTechEmployees.forEach((employee) => {
  //     if(!deptDictionary[employee.department]){
  //       deptDictionary[employee.department] = [employee]
  //     }else deptDictionary[employee.department].push(employee)
  //   })
  //   return console.log(deptDictionary)
  // }
  // fillDictionary()
  // const deptList = employees.map((employee) => employee.department);
  // const deptSet = new Set(deptList);
  //maybe refactor to create a dictionary where each key is a dept and the value is an array?
  // const activeQATech = activeTechEmployees.filter(
  //   (employee) => employee.department === "QA"
  // );
  // const activeSalesTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "Sales"
  // );
  // const activeCustomerSupportTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "Customer Support"
  // );
  // const activeFulfillmentTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "Fulfillment"
  // );
  // const activeMarketingTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "Marketing"
  // );
  // const activeHRTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "HR"
  // );
  // const activeRDTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "R&D"
  // );
  // const activeManufacturingTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "Manufacturing"
  // );
  // const activeAccountingTech = activeTechEmployees.filter(
  //   (employee) => employee.department === "Accounting"
  // );

  /* 
    TODO: 
    List active tech employees by department
  */
  return (
    <>
      {Object.entries(departments).map(([key, value]) => {
        return (
          <ActiveEmployeeList
            key={value.id}
            departmentName={key}
            employeeArray={value}
          />
        );
      })}

      {/* <ActiveEmployeeList departmentName={"QA"} employeeArray={activeQATech} />
      <ActiveEmployeeList
        departmentName={"Sales"}
        employeeArray={activeSalesTech}
      />
      <ActiveEmployeeList
        departmentName={"Customer Support"}
        employeeArray={activeCustomerSupportTech}
      />
      <ActiveEmployeeList
        departmentName={"Fulfillment"}
        employeeArray={activeFulfillmentTech}
      />
      <ActiveEmployeeList
        departmentName={"Marketing"}
        employeeArray={activeMarketingTech}
      />
      <ActiveEmployeeList departmentName={"HR"} employeeArray={activeHRTech} />
      <ActiveEmployeeList departmentName={"R&D"} employeeArray={activeRDTech} />
      <ActiveEmployeeList
        departmentName={"Manufacturing"}
        employeeArray={activeManufacturingTech}
      />
      <ActiveEmployeeList
        departmentName={"Accounting"}
        employeeArray={activeAccountingTech}
      /> */}
    </>
  );
}
