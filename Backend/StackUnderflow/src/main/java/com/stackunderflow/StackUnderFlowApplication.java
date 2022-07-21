package com.stackunderflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("expenses")
@SpringBootApplication
public class StackUnderFlowApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackUnderFlowApplication.class, args);
	}
}
