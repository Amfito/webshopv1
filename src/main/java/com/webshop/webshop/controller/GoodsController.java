package com.webshop.webshop.controller;

import com.webshop.webshop.model.Goods;
import com.webshop.webshop.repository.GoodsRepository;
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
    public List<Goods> getGoods(){
        return goodsService.getGoods();
    }

    @GetMapping(path = "/goods/{goodsId}")
    public Optional<Goods> getGoodsById(@PathVariable("goodsId") long goodId) {return goodsService.getGoodsById(goodId);}

    @PostMapping
    public void registerNewGoods (@RequestBody Goods goods) {
        goodsService.addNewGoods(goods);
    }
}
