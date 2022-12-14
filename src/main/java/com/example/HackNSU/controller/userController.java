package com.example.HackNSU.controller;

import com.example.HackNSU.model.user;
import com.example.HackNSU.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/users")
public class userController {
    @Autowired
    userService userService;

    @PostMapping("/saveuser")
    public user saveUser(@RequestBody user user) throws ExecutionException, InterruptedException {
        return userService.saveUser(user);
    }

    @GetMapping("/getuserByID/{id}")
    public user getUserById(@PathVariable String id) throws ExecutionException, InterruptedException {
        return userService.getUserByID(id);
    }

    @GetMapping("/getAllusers")
    public List<user> getAllUsers() throws ExecutionException, InterruptedException {
        return userService.getAllUsers();
    }
}
