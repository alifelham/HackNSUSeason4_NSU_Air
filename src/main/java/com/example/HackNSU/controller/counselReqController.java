package com.example.HackNSU.controller;

import com.example.HackNSU.model.counselReq;
import com.example.HackNSU.service.counselReqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/counselReqs")
public class counselReqController {
    @Autowired
    counselReqService counselReqService;

    @PostMapping("/saveReq")
    public counselReq saveCounselReq(@RequestBody counselReq counselReq) throws ExecutionException, InterruptedException {
        return counselReqService.savecounselReq(counselReq);
    }

    @GetMapping("/getAllCounselReqs")
    public List<counselReq> getAllCounselReqs() throws ExecutionException, InterruptedException {
        return counselReqService.getAllCounselReqs();
    }

    @DeleteMapping("/deleteCounselReqByID/{id}")
    public String deleteCounselReqByID(@PathVariable String id)
    {
        return counselReqService.deleteReq(id);
    }
}
