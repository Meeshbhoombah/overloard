package demo.overlord.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "admin")
public class Admin {

    private String username
    private String password


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

}

