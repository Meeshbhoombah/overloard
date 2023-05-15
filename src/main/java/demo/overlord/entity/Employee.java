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
    private Long id;

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


    public Long getId() {
        return id; 
    }


    public void setEmail(String email) {
        this.email = email; 
    }


    public String getEmail() {
        return email; 
    }

    public void setPassword(String password) {
        this.password = password; 
    }

    public String getPassword() {
        return password; 
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber; 
    }


    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFirstName() {
        return firstName; 
    }


    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return lastName; 
    }


    public void setRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role; 
    }


    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Date getBirthday() {
        return birthday; 
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress() {
        return address; 
    }
    
}

