package com.webshop.webshop.controller;

import com.webshop.webshop.model.Goods;
import com.webshop.webshop.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.webshop.webshop.config.ConstatConfig;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

//    public ConstatConfig constatConfig;
    // private GoodsRepository goodsRepository;

    // get all goods from database
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(value = "/goods")
    public List<Goods> getGoods() {
        return goodsService.getGoods();
    }

    // get goods by id
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(path = "/goods/{goodsId}")
    public Optional<Goods> getGoodsById(@PathVariable("goodsId") long goodId) {
        return goodsService.getGoodsById(goodId);
    }

    // add new goods
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @PostMapping
    public void registerNewGoods(@RequestBody Goods goods) {
        goodsService.addNewGoods(goods);
    }

    // get goods by category
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(path = "/goods/category/{category}")
    public List<Goods> getGoodsByCategory(@PathVariable("category") String category) {
        return goodsService.findByCategory(category);
    }

    // get goods sorted by name
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(value = "/goods/byname")
    public List<Goods> getGoodsSortedByName() {
        return goodsService.getGoodsSortedByName();
    }

    // get goods sorted by brand
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(value = "/goods/bybrand")
    public List<Goods> getGoodsSortedByBrand() {
        return goodsService.getGoodsSortedByBrand();
    }

    // get goods sorted by price asc
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(value = "/goods/bypriceasc")
    public List<Goods> getGoodsSortedByPriceAsc() {
        return goodsService.getGoodsSortedByPriceAsc();
    }

    // get goods sorted by price desc
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(value = "/goods/bypricedesc")
    public List<Goods> getGoodsSortedByPriceDesc() {
        return goodsService.getGoodsSortedByPriceDesc();
    }

    // get goods on sale
    @CrossOrigin(origins = {ConstatConfig.rootUrl})
    @GetMapping(value = "/goods/goodsonsale")
    public List<Goods> getGoodsOnSale() {
        return goodsService.getGoodsOnSale(0);
    }
}
