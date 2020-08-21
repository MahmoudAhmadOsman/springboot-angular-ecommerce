package com.ecommerce.repositories;

import com.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//Add customozation class here to Accessing JPA Data with REST
@RepositoryRestResource(collectionResourceRel = "prodcutCategory", path = "product-category")
public interface ProductRepository extends JpaRepository<Product, Long> {
}
