package com.example.demo.topics;

import lombok.*;

import java.util.Collection;

@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
public class NewTopicRequest {
    private final String title;
    private final String content;
    private final Collection<String> tags;
}
