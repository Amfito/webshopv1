package com.webshop.webshop.repository;

import com.webshop.webshop.model.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {


    List<Goods> findByCategory(String category);

}
