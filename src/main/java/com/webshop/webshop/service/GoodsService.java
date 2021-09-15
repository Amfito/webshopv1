package com.webshop.webshop.service;

import com.webshop.webshop.model.Goods;
import com.webshop.webshop.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GoodsService {

    private final GoodsRepository goodsRepository;

    @Autowired
    public GoodsService(GoodsRepository goodsRepository) {
        this.goodsRepository = goodsRepository;
    }

    public List<Goods> getGoods() {
        return goodsRepository.findAll();
    }

    public Optional<Goods> getGoodsById(long goodsId) {
        return goodsRepository.findById(goodsId);
    }

    public void addNewGoods(Goods goods) {
        goodsRepository.save(goods);
    }

    public List<Goods> findByCategory(String category) {
        return goodsRepository.findByCategory(category);
    }

    public List<Goods> getGoodsSortedByName() {
        return goodsRepository.findAll(Sort.by("name"));
    }

    public List<Goods> getGoodsSortedByBrand() {
        return goodsRepository.findAll(Sort.by("brand"));
    }

    public List<Goods> getGoodsSortedByPriceAsc() {
        return goodsRepository.findAll(Sort.by(Sort.Direction.ASC, "price"));
    }

    public List<Goods> getGoodsSortedByPriceDesc() {
        return goodsRepository.findAll(Sort.by(Sort.Direction.DESC, "price"));
    }
}
