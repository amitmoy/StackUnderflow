package com.example.demo.answers;

import lombok.*;

import java.util.Collection;

@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
public class AddAnswerRequest {
    private int topicId;
    private String content;
}

