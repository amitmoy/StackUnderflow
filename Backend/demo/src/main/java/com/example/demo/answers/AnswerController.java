package com.example.demo.answers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/answer")
@AllArgsConstructor
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @CrossOrigin
    @PostMapping("/create")
    public int create(@RequestBody AddAnswerRequest request){
        return answerService.create(request);
    }

    @CrossOrigin
    @GetMapping("/get-by-topic-id/{topicId}")
    public List<Answer> getByTopicId(@PathVariable int topicId){
        return answerService.getByTopicId(topicId);
    }

    @CrossOrigin
    @PutMapping("/approve")
    public void approve(@RequestBody ApproveAnswerRequest request){
        answerService.approveAnswer(request);
    }

    @CrossOrigin
    @PutMapping("/disapprove")
    public void disapprove(@RequestBody ApproveAnswerRequest request){
        answerService.disapproveAnswer(request);
    }

}
