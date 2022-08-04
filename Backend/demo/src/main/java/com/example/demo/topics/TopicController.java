package com.example.demo.topics;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/topic")
@AllArgsConstructor
public class TopicController {
    @Autowired
    private TopicService topicService;

    @CrossOrigin
    @PostMapping("/create")
    public int create(@RequestBody NewTopicRequest request){
        return topicService.create(request);
    }

    @CrossOrigin
    @GetMapping("/get-all")
    public List<Topic> getAll(){
        return topicService.getAll().stream().toList();
    }

    @CrossOrigin
    @GetMapping("/get/{id}")
    public Optional<Topic> get(@PathVariable int id){
        return topicService.get(id);
    }

    @CrossOrigin
    @GetMapping("/search/{searchKey}")
    public List<Topic> search(@PathVariable String searchKey){
        return topicService.search(searchKey).stream().toList();
    }

}
