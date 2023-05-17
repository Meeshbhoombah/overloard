package demo.overlord.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.overlord.entity.Admin;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Employee findByUsername(String username);
}
