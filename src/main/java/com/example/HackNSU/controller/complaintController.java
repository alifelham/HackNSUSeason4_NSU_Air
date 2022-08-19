package com.example.HackNSU.controller;

import com.example.HackNSU.model.complaint;
import com.example.HackNSU.service.complaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/complaints")
public class complaintController {
    @Autowired
    complaintService complaintService;

    @PostMapping("/saveComplaint")
    public complaint saveComplaint(@RequestBody complaint complaint) throws ExecutionException, InterruptedException {
        return complaintService.saveComplaint(complaint);
    }

    @GetMapping("/getAllComplaints")
    public List<complaint> getAllComplaints() throws ExecutionException, InterruptedException {
        return complaintService.getAllComplaints();
    }
}
