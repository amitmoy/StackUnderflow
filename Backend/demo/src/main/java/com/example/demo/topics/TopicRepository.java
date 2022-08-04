package com.example.demo.topics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional(readOnly = true)
public interface TopicRepository extends JpaRepository<Topic, Integer> {
    @Query(value = "SELECT * " +
            "FROM topics " +
            "WHERE id IN ( SELECT t.id " +
            "FROM tags t " +
            "WHERE t.tags LIKE %?1% ) " +
            "OR title LIKE %?1% OR content LIKE %?1%", nativeQuery = true)
    List<Topic> search(String searchKey);
}
