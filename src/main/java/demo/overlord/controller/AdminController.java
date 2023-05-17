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
import demo.overlord.entity.Admin;
import demo.overlord.repository.AdminRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin")
class AdminController {

    private final AdminRepository repository;


    AdminController(AdminRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/login")
    Admin one(@RequestBody Admin admin) {
        return repository.findByUsername(admin.getUsername());
    }

}

