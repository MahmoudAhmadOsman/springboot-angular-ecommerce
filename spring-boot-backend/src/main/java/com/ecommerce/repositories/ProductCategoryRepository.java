package com.ecommerce.repositories;

import com.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
//Interface Class
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
