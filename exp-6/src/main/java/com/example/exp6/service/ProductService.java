package com.example.exp6.service;

import com.example.exp6.model.Product;
import com.example.exp6.repository.ProductRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Pagination and sorting
    public Page<Product> getProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    // JOIN FETCH - avoids N+1 query problem
    public List<Product> getProductsWithCategory() {
        return productRepository.findAllWithCategory();
    }

    // Native SQL query
    public List<Product> getProductsAbovePrice(Double price) {
        return productRepository.findProductsByMinimumPrice(price);
    }

    // Caching
    @Cacheable(cacheNames = "products", key = "#id")
    public Product getProductById(Long id) {

        System.out.println("Fetching product " + id + " from DATABASE...");

        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
