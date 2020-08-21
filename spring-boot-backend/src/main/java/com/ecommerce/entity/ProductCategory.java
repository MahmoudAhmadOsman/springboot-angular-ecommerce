package com.ecommerce.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="product_category")
// @Data -- sometimes lombok causes error so use @Getter and @Setter instead to avoid error
@Getter
@Setter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    //Collection - Java Collection
    //==================@OneToMany====================//
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Product> products;

}


