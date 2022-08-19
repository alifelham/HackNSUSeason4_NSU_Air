package com.example.HackNSU.controller;

import com.example.HackNSU.model.emergency;
import com.example.HackNSU.service.emergencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/emergencies")
public class emergencyController {
    @Autowired
    emergencyService emergencyService;

    @PostMapping("/saveEmergency")
    public emergency saveEmergency(@RequestBody emergency emergency) throws ExecutionException, InterruptedException {
        return emergencyService.saveEmergency(emergency);
    }

    @GetMapping("/getAllEmergencies")
    public List<emergency> getAllEmergency(@RequestBody emergency emergency) throws ExecutionException, InterruptedException {
        return emergencyService.getAllEmergencies();
    }

    @DeleteMapping("/deleteEmergency/{id}")
    public String deleteEmergency(@PathVariable String id){
        return emergencyService.deleteEmergency(id);
    }


}
