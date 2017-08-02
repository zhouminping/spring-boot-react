package com.example.springbootreact;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by minpingzhou on 02/08/2017.
 */
@RestController
public class DemoController {
    @RequestMapping(value = "/echo")
    public String echo(@RequestParam(value = "request", defaultValue = "Hello!") String request){
        return request;
    }
}
