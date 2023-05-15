package demo.overlord.entity;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.TemporalType;


@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String email;
    private String password;
    private String phoneNumber;

    private String firstName;
    private String lastName;

    private String role;

    @Temporal(TemporalType.DATE)
    private Date birthday;
    private String address;

    
    private Employee() {}

    public Employee(String email, String password) {
        this.email = email;
        this.password = password; 
    }
}

