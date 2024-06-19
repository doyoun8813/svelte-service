package com.svelt_service.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @RequestMapping(value = "/home")
    public String home(){
        return "index.html";
    }
}
