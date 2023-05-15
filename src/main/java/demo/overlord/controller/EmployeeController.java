package demo.overlord.controller;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import demo.overlord.exception.ResourceNotFoundException;
import demo.overlord.entity.Employee;
import demo.overlord.repository.EmployeeRepository;


@RestController
class EmployeeController {

    private final EmployeeRepository repository;


    EmployeeController(EmployeeRepository repository) {
        this.repository = repository;
    }

    
    @GetMapping("/employees")
    List<Employee> all() {
        return repository.findAll();
    }

      
    @PostMapping("/employees")
    Employee newEmployee(@RequestBody Employee newEmployee) {
        return repository.save(newEmployee);
    }

    @GetMapping("/employees/{id}")
    Employee one(@PathVariable Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(id.toString()));
    }
}

