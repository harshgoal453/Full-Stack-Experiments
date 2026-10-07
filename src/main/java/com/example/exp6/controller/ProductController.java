package com.example.exp6.controller;

import com.example.exp6.model.Product;
import com.example.exp6.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Pagination and Sorting
    @GetMapping
    public Page<Product> getProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        return productService.getProducts(pageable);
    }

    // Get single product - cached
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // JOIN FETCH - avoids N+1 query problem
    @GetMapping("/optimized")
    public List<Product> getOptimizedProducts() {
        return productService.getProductsWithCategory();
    }

    // Native SQL query
    @GetMapping("/above-price")
    public List<Product> getProductsAbovePrice(
            @RequestParam Double price) {

        return productService.getProductsAbovePrice(price);
    }
}
