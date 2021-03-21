package com.pk.thea.controller;

import com.pk.thea.jpa.User;
import com.pk.thea.jpa.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TheaController {
    @Autowired
    private UserRepository service;


    @GetMapping("/")
    public String theaRestCheck(){
        return "Thea REST is working!!";
    }
    //@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/jpa")
    public List<User> getAllUsers(){
        return service.findAll();
    }
    @PostMapping("/jpa")
    public List<User> addUser(@RequestBody User user){
        service.save(user);
        return service.findAll();
    }
    @DeleteMapping("/jpa/{id}")
    public User deleteUser(@PathVariable("id") int id){
        Optional<User> user = service.findById(id);
        service.deleteById(id);
        return user.get();
    }
    @GetMapping("/jpa/{id}")
    public Object getByUserId(@PathVariable("id") int id) throws NoSuchElementException {
        try{
            Optional<User> user = service.findById(id);
            return user.get();
        }catch(NoSuchElementException e){
            return "No Such Element";
        }

    }
}
