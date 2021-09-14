package com.webshop.webshop.config;

import com.webshop.webshop.model.Goods;
import com.webshop.webshop.repository.GoodsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class GoodsConfig {

    @Bean
    CommandLineRunner commandLineRunner(GoodsRepository goodsRepository) {
        return args -> {
            Goods goodsFirst = new Goods("test",
                    "test",
                    "test",
                    "test",
                    "test",
                    155);

            goodsRepository.saveAll(List.of(goodsFirst));
        };
    }
}
