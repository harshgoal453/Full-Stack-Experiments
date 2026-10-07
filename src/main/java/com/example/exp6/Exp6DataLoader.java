package com.example.exp6;

import com.example.exp6.model.Category;
import com.example.exp6.model.Product;
import com.example.exp6.repository.CategoryRepository;
import com.example.exp6.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Exp6DataLoader implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public Exp6DataLoader(
            ProductRepository productRepository,
            CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) {

        productRepository.deleteAll();
        categoryRepository.deleteAll();

        Category electronics = categoryRepository.save(
                new Category("Electronics"));

        Category accessories = categoryRepository.save(
                new Category("Accessories"));

        Category office = categoryRepository.save(
                new Category("Office"));

        productRepository.save(new Product("Laptop", 65000.0, electronics));
        productRepository.save(new Product("Mouse", 800.0, accessories));
        productRepository.save(new Product("Keyboard", 1500.0, accessories));
        productRepository.save(new Product("Monitor", 12000.0, electronics));
        productRepository.save(new Product("Headphones", 2500.0, electronics));
        productRepository.save(new Product("Webcam", 3500.0, electronics));
        productRepository.save(new Product("Printer", 9000.0, office));
        productRepository.save(new Product("Tablet", 25000.0, electronics));
        productRepository.save(new Product("Speaker", 4000.0, electronics));
        productRepository.save(new Product("USB Cable", 500.0, accessories));

        System.out.println("Categories and 10 products inserted successfully.");
    }
}
