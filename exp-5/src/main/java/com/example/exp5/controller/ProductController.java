package com.example.exp5.controller;

import com.example.exp5.dto.ApiResponse;
import com.example.exp5.dto.ProductRequest;
import com.example.exp5.model.Product;
import com.example.exp5.service.ProductService;

import jakarta.validation.Valid;

import org.slf4j.MDC;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    private <T> ApiResponse<T> success(String message, T data) {

        return new ApiResponse<>(
                true,
                message,
                data,
                Instant.now(),
                MDC.get("correlationId")
        );
    }

    // CREATE
    @PostMapping
    public ResponseEntity<ApiResponse<Product>> createProduct(
            @Valid @RequestBody ProductRequest request) {

        Product product = productService.createProduct(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(success("Product created successfully", product));
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<ApiResponse<List<Product>>> getAllProducts() {

        List<Product> products = productService.getAllProducts();

        return ResponseEntity.ok(
                success("Products fetched successfully", products)
        );
    }

    // READ ONE
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> getProductById(
            @PathVariable Long id) {

        Product product = productService.getProductById(id);

        return ResponseEntity.ok(
                success("Product fetched successfully", product)
        );
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductRequest request) {

        Product product =
                productService.updateProduct(id, request);

        return ResponseEntity.ok(
                success("Product updated successfully", product)
        );
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteProduct(
            @PathVariable Long id) {

        productService.deleteProduct(id);

        return ResponseEntity.ok(
                success("Product deleted successfully",
                        "Product with id " + id + " deleted")
        );
    }
}