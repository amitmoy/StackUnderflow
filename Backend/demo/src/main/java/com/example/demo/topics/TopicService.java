package com.example.demo.topics;

import com.example.demo.answers.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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
                .answers(Collections.emptyList())
                .build();

        topicRepository.save(newTopic);
        return newTopic.getId();
    }

    public Collection<Topic> getAll(){
        return topicRepository.findAll();
    }

    public Optional<Topic> get(int id){ return topicRepository.findById(id); }

    public Collection<Topic> search(String searchKey){
        return topicRepository.search(searchKey);
    }
}
