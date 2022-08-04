package com.example.demo.topics;

import com.example.demo.answers.Answer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity(name = "topics")
@Table
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Long date;
    private String title;
    private String content;

    @ElementCollection
    @CollectionTable(name="dislikes", joinColumns=@JoinColumn(name="id"))
    @Column(name="dislikes")
    public List<String> dislikes;

    @ElementCollection
    @CollectionTable(name="likes", joinColumns=@JoinColumn(name="id"))
    @Column(name="likes")
    public List<String> likes;

    @ElementCollection
    @CollectionTable(name="tags", joinColumns=@JoinColumn(name="id"))
    @Column(name="tags")
    public List<String> tags;

    @OneToMany(mappedBy="topic")
    private List<Answer> answers;
}
