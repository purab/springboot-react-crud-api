package in.purabtech.reactcrud;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class EmployeeController {
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return EmployeeService.getAllEmps();
	}
	
	@GetMapping("/employee/{employeeId}")
	public Employee getEmployeeDetails(@PathVariable Long employeeId) {
		return EmployeeService.getEmployeeDetails(employeeId);
	}

	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return EmployeeService.addEmployee(employee);
	}
	
	@PutMapping("/updateEmployee/{employeeId}")
	public Employee updateEmployee(@PathVariable Long employeeId, @RequestBody Employee employee) {
		return EmployeeService.updateEmployee(employeeId, employee);
	}
	
	@DeleteMapping("/deleteEmployee/{employeeId}")
	public Employee deleteEmployee(@PathVariable Long employeeId) {

		return EmployeeService.deleteEmployee(employeeId);
	}
	
	
}
