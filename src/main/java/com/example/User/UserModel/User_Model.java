package com.example.User.UserModel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "user_one_in_class")
public class User_Model {
   @Id
   @GeneratedValue
   private int id;
   private String username;
   private String email;
   private long phoneno;
}
