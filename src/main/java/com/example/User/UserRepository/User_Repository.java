package com.example.User.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.User.UserModel.User_Model;

public interface User_Repository extends JpaRepository<User_Model, Integer>{

}
