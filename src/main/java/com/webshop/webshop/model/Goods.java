package com.webshop.webshop.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Goods {


    private String name;
    private String brand;
    private String model;
    private String description;
    private String category;
    private String attributes;
    private String image;
    private double price;
    private double salesprice;
    private Long id;



    public Goods() {
    }

    public Goods(String name, String brand, String model, String description, String category, String attributes, String image, double price, double salesprice) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.category = category;
        this.attributes = attributes;
        this.image = image;
        this.price = price;
        this.salesprice = salesprice;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAttributes() {
        return attributes;
    }

    public void setAttributes(String attributes) {
        this.attributes = attributes;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double getSalesprice() {
        return salesprice;
    }

    public void setSalesprice(double salesprice) {
        this.salesprice = salesprice;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Goods{" +
                "name='" + name + '\'' +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", attributes='" + attributes + '\'' +
                ", image='" + image + '\'' +
                ", price=" + price +
                ", salesprice=" + salesprice +
                ", id=" + id +
                '}';
    }
}
