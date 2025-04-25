package com.example.User.UserServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.User.UserModel.User_Model;
import com.example.User.UserRepository.User_Repository;

import jakarta.transaction.Transactional;

@Service
public class User_Services {
    @Autowired
    private User_Repository ur;

    public String addUser(User_Model user) {
        ur.save(user);
        return "Employee added Successfully";
    }

    @Transactional
    public List<User_Model> getUsers() {
        return ur.findAll();
    }

    public Optional<User_Model> getUser(int id) {
        return ur.findById(id);
    }

    @Transactional
    public Optional<Object> updateUser(User_Model user, int id) {
        return ur.findById(id).map(out -> {
            out.setUsername(user.getUsername());
            out.setEmail(user.getEmail());
            out.setPhoneno(user.getPhoneno());
            return "User Updated";
        });
    }

    public String deleteUser(int id) {
        ur.deleteById(id);
        return "delete user";
    }

}
