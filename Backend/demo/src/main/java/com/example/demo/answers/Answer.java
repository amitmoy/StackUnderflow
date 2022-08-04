package com.example.demo.answers;
import com.example.demo.topics.Topic;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity(name = "answers")
@Table
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Long date;
    private String content;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="topic_id", nullable=false)
    private Topic topic;

    @ElementCollection
    @CollectionTable(name="approves", joinColumns=@JoinColumn(name="id"))
    @Column(name="approves")
    private Collection<String> approves;
}
