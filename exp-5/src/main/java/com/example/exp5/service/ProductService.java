package com.example.exp5.service;

import com.example.exp5.dto.ProductRequest;
import com.example.exp5.exception.ResourceNotFoundException;
import com.example.exp5.model.Product;
import com.example.exp5.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(ProductRequest request) {
        Product product = new Product();
        product.setName(request.getName());
        product.setPrice(request.getPrice());

        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        Product product = productRepository.findById(id);

        if (product == null) {
            throw new ResourceNotFoundException("Product not found with id: " + id);
        }

        return product;
    }

    public Product updateProduct(Long id, ProductRequest request) {
        Product product = getProductById(id);

        product.setName(request.getName());
        product.setPrice(request.getPrice());

        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        getProductById(id);
        productRepository.deleteById(id);
    }
}