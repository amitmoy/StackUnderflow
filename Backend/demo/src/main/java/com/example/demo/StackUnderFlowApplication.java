package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude =
		{org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class})
@ComponentScan("com.example.demo.topics")
@ComponentScan("com.example.demo.answers")
public class StackUnderFlowApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackUnderFlowApplication.class, args);
	}

}
