package com.example.job.service;

import com.example.job.dto.request.LoginRequest;
import com.example.job.dto.request.RegisterRequest;
import com.example.job.dto.response.LoginResponse;
import com.example.job.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
