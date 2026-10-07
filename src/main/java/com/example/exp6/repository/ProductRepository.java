package com.example.exp6.repository;

import com.example.exp6.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // JOIN FETCH avoids the N+1 query problem
    @Query("SELECT p FROM Product p JOIN FETCH p.category")
    List<Product> findAllWithCategory();

    // Native SQL query
    @Query(value = "SELECT * FROM products WHERE price >= :price", nativeQuery = true)
    List<Product> findProductsByMinimumPrice(@Param("price") Double price);
}