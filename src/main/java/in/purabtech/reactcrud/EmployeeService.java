package in.purabtech.reactcrud;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class EmployeeService {
	
	private static Map<Long, Employee> employees =  new HashMap<>();
	
	private static Long index=2L;
	
	static {
			Employee emp01 = new Employee(1L, "emp1","9999999999999", 2000L);
			Employee emp02 = new Employee(2L, "emp2","9999999999999", 2000L);
			employees.put(1L,emp01);
			employees.put(2L,emp02);
	};
	
	public static List<Employee> getAllEmps() {
		return new ArrayList<>(employees.values());
	}
	
	public static Employee getEmployeeDetails(Long employeeId) {
		return employees.get(employeeId);
	}
	
	public static Employee addEmployee(Employee employee) {
		index +=1;
		employee.setId(index);
		employees.put(index, employee);
		return employee;
	}
	
	public static Employee updateEmployee(Long employeeId, Employee employee) {
		employee.setId(employeeId);
		employees.put(employeeId, employee);
		return employee;
	}
	
	public static Employee deleteEmployee(Long employeeId) {
		return employees.remove(employeeId);
	}

}
