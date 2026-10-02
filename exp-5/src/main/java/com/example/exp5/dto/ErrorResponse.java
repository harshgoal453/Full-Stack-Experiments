package com.example.exp5.dto;

import java.time.Instant;
import java.util.Map;

public record ErrorResponse(
        boolean success,
        String message,
        Map<String, String> errors,
        Instant timestamp,
        String correlationId
) {}