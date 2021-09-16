package com.webshop.webshop.controller;

import com.webshop.webshop.model.Goods;
import com.webshop.webshop.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class GoodsController {


    @Autowired
    private GoodsService goodsService;
    //private GoodsRepository goodsRepository;

    @GetMapping(value = "/goods")
    public List<Goods> getGoods() {
        return goodsService.getGoods();
    }

    @GetMapping(path = "/goods/{goodsId}")
    public Optional<Goods> getGoodsById(@PathVariable("goodsId") long goodId) {
        return goodsService.getGoodsById(goodId);
    }

    @PostMapping
    public void registerNewGoods(@RequestBody Goods goods) {
        goodsService.addNewGoods(goods);
    }

    @GetMapping(path = "/goods/category/{category}")
    public List<Goods> getGoodsByCategory(@PathVariable("category") String category) {
        return goodsService.findByCategory(category);
    }

    @GetMapping(value = "/goods/byname")
    public List<Goods> getGoodsSortedByName() {
        return goodsService.getGoodsSortedByName();
    }

    @GetMapping(value = "/goods/bybrand")
    public List<Goods> getGoodsSortedByBrand() {
        return goodsService.getGoodsSortedByBrand();
    }

    @GetMapping(value = "/goods/bypriceasc")
    public List<Goods> getGoodsSortedByPriceAsc() {
        return goodsService.getGoodsSortedByPriceAsc();
    }

    @GetMapping(value = "/goods/bypricedesc")
    public List<Goods> getGoodsSortedByPriceDesc() {
        return goodsService.getGoodsSortedByPriceDesc();
    }

    @GetMapping(value = "/goods/goodsonsale")
    public List<Goods> getGoodsOnSale() {return goodsService.getGoodsOnSale(0);}
}
