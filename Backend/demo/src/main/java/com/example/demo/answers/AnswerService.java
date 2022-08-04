package com.example.demo.answers;

import com.example.demo.topics.Topic;
import com.example.demo.topics.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private AnswerRepository answerRepository;

    public int create(AddAnswerRequest request) {

        Optional<Topic> topicToAnswer = topicRepository.findById(request.getTopicId());

        if(topicToAnswer.isPresent()){
            Answer newAnswer = Answer.builder()
                    .topic(topicToAnswer.get())
                    .content(request.getContent())
                    .approves(Collections.emptyList())
                    .date(System.currentTimeMillis()).build();
            answerRepository.save(newAnswer);

            return newAnswer.getId();
        }


        return -1;
    }

    public List<Answer> getByTopicId(int topicId){
        return answerRepository.findByTopicId(topicId);
    }

    public void approveAnswer(ApproveAnswerRequest request) {
        Optional<Answer> answer = answerRepository.findById(request.getAnswerId());

        if(answer.isPresent()){
            Answer answerObject = answer.get();
            answerObject.getApproves().add(request.getUserName());
            answerRepository.save(answerObject);
        }
    }

    public void disapproveAnswer(ApproveAnswerRequest request) {
        Optional<Answer> answer = answerRepository.findById(request.getAnswerId());

        if(answer.isPresent()){
            Answer answerObject = answer.get();
            if(answerObject.getApproves().contains(request.getUserName())){
                answerObject.getApproves().remove(request.getUserName());
            }
            answerRepository.save(answerObject);
        }
    }
}
