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

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;
    private String password;


    public void setUsername(String username) {
        this.username = username; 
    }

    public String getUsername() {
        return username; 
    }


    public void setPassword(String password) {
        this.password = password; 
    }

    public String getPassword() {
        return password; 
    }

}

