package com.example.demo.answers;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
public class ApproveAnswerRequest {
    private int answerId;
    private String userName;
}
