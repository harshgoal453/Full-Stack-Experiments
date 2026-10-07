package com.example.exp5.repository;

import com.example.exp5.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class ProductRepository {

    private final ConcurrentHashMap<Long, Product> products = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(0);

    public Product save(Product product) {
        if (product.getId() == null) {
            product.setId(idGenerator.incrementAndGet());
        }

        products.put(product.getId(), product);
        return product;
    }

    public List<Product> findAll() {
        return new ArrayList<>(products.values());
    }

    public Product findById(Long id) {
        return products.get(id);
    }

    public void deleteById(Long id) {
        products.remove(id);
    }

    public boolean existsById(Long id) {
        return products.containsKey(id);
    }
}