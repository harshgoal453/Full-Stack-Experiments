package com.example.exp5.dto;

import java.time.Instant;

public record ApiResponse<T>(
        boolean success,
        String message,
        T data,
        Instant timestamp,
        String correlationId
) {}