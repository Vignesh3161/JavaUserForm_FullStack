package com.example.User.UserController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.User.UserModel.User_Model;
import com.example.User.UserServices.User_Services;

@CrossOrigin(origins = "https://vignesh3161.github.io/") 
@RestController
@RequestMapping("/userdata")
public class User_Controller {

    @Autowired
    User_Services us = new User_Services();

    @PostMapping("/")
    public String add(@RequestBody User_Model users) {
        return us.addUser(users);
    }

    @GetMapping("/get/")
    public List<User_Model> get() {
        return us.getUsers();
    }

    @GetMapping("/{id}")
    public Optional<User_Model> getid(@PathVariable int id) {
        return us.getUser(id);
    }

    @PutMapping("/{id}")
    public String update(@RequestBody User_Model use, @PathVariable int id) {
        us.updateUser(use, id);
        return "Updated Successfully";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {

        return us.deleteUser(id);
    }

}
