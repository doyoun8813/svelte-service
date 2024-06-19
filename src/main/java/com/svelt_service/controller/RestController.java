package com.svelt_service.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @RequestMapping("/api/auth/login")
    public String login(String test){
        System.out.println("들어왔다.");

        return "success";
    }

    @RequestMapping("/api/auth/register")
    public String registry(String test){
        System.out.println("들어왔다.");

        return "success";
    }

    @RequestMapping("/api/auth/refresh")
    public String refresh(String test){
        System.out.println("들어왔다.");

        return "success";
    }
}
