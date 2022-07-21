package com.example.demo.topics;

import org.apache.tomcat.jni.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Service
public class TopicService {
    @Autowired
    private TopicRepository topicRepository;

    public int create(NewTopicRequest request) {
        Topic newTopic = Topic.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .date(System.currentTimeMillis())
                .dislikes(Collections.emptyList())
                .likes(Collections.emptyList())
                .tags(request.getTags().stream().toList())
                .build();

        topicRepository.save(newTopic);
        return newTopic.getId();
    }

    public Collection<Topic> getAll(){
        return topicRepository.findAll();
    }

    public Collection<Topic> search(String searchKey){
        return topicRepository.search(searchKey);
    }
}
