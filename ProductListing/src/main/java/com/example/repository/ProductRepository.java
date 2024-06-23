package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	List<Product> findByPriceBetween(Double minPrice, Double maxPrice);

	List<Product> findByNameContainingIgnoreCase(String keyword);

}
