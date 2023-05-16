package demo.overlord.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.overlord.exception.ResourceNotFoundException;
import demo.overlord.entity.Employee;
import demo.overlord.repository.EmployeeRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
class EmployeeController {

    private final EmployeeRepository repository;


    EmployeeController(EmployeeRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/login")
    Employee one(@RequestBody Employee existingEmployee) {
        return repository.findByEmail(existingEmployee.getEmail());
    }

    
    @GetMapping("/employees")
    List<Employee> all() {
        return repository.findAll();
    }

      
    @PostMapping("/employees")
    Employee newEmployee(@RequestBody Employee newEmployee) {
        return repository.save(newEmployee);
    }


    @GetMapping("/employee/{id}")
    Employee one(@PathVariable Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(id.toString()));
    }

    @PutMapping("/employee/{id}")
    Employee update(@PathVariable Long id, @RequestBody Employee updatedEmployeeData) {
        return repository.findById(id)
          .map(employee -> {
            employee.setEmail(updatedEmployeeData.getEmail());
            employee.setPassword(updatedEmployeeData.getPassword());
            employee.setPhoneNumber(updatedEmployeeData.getPhoneNumber());
            employee.setFirstName(updatedEmployeeData.getFirstName());
            employee.setLastName(updatedEmployeeData.getLastName());
            employee.setRole(updatedEmployeeData.getRole());
            employee.setBirthday(updatedEmployeeData.getBirthday());
            employee.setAddress(updatedEmployeeData.getAddress());
            return repository.save(employee);
          })
          .orElseGet(() -> {
            // TODO: cover edge case -- updating Employee does not exist
            // updatedEmployeeData.setId(id);
            return repository.save(updatedEmployeeData);
          });
    }

}

