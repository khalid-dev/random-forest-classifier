const data = [
    [ 7, 0.27, 0.36, 20.7, 0.045, 45, 170, 1.001, 3, 0.45, 8.8], 
    [ 6.3, 0.3, 0.34, 1.6, 0.049, 14, 132, 0.994, 3.3, 0.49, 9.5], 
    [ 8.1, 0.28, 0.4, 6.9, 0.05, 30, 97, 0.9951, 3.26, 0.44, 10.1], 
    [ 7.2, 0.23, 0.32, 8.5, 0.058, 47, 186, 0.9956, 3.19, 0.4, 9.9], 
    [ 7.2, 0.23, 0.32, 8.5, 0.058, 47, 186, 0.9956, 3.19, 0.4, 9.9], 
    [ 8.1, 0.28, 0.4, 6.9, 0.05, 30, 97, 0.9951, 3.26, 0.44, 10.1], 
    [ 6.2, 0.32, 0.16, 7, 0.045, 30, 136, 0.9949, 3.18, 0.47, 9.6], 
    [ 7, 0.27, 0.36, 20.7, 0.045, 45, 170, 1.001, 3, 0.45, 8.8], 
    [ 6.3, 0.3, 0.34, 1.6, 0.049, 14, 132, 0.994, 3.3, 0.49, 9.5], 
    [ 8.1, 0.22, 0.43, 1.5, 0.044, 28, 129, 0.9938, 3.22, 0.45, 11], 
    [ 8.1, 0.27, 0.41, 1.45, 0.033, 11, 63, 0.9908, 2.99, 0.56, 12], 
    [ 8.6, 0.23, 0.4, 4.2, 0.035, 17, 109, 0.9947, 3.14, 0.53, 9.7], 
    [ 7.9, 0.18, 0.37, 1.2, 0.04, 16, 75, 0.992, 3.18, 0.63, 10.8], 
    [ 6.6, 0.16, 0.4, 1.5, 0.044, 48, 143, 0.9912, 3.54, 0.52, 12.4], 
    [ 8.3, 0.42, 0.62, 19.25, 0.04, 41, 172, 1.0002, 2.98, 0.67, 9.7], 
    [ 6.6, 0.17, 0.38, 1.5, 0.032, 28, 112, 0.9914, 3.25, 0.55, 11.4], 
    [ 6.3, 0.48, 0.04, 1.1, 0.046, 30, 99, 0.9928, 3.24, 0.36, 9.6], 
    [ 6.2, 0.66, 0.48, 1.2, 0.029, 29, 75, 0.9892, 3.33, 0.39, 12.8], 
    [ 7.4, 0.34, 0.42, 1.1, 0.033, 17, 171, 0.9917, 3.12, 0.53, 11.3], 
    [ 6.5, 0.31, 0.14, 7.5, 0.044, 34, 133, 0.9955, 3.22, 0.5, 9.5], 
    [ 6.2, 0.66, 0.48, 1.2, 0.029, 29, 75, 0.9892, 3.33, 0.39, 12.8], 
    [ 6.4, 0.31, 0.38, 2.9, 0.038, 19, 102, 0.9912, 3.17, 0.35, 11], 
    [ 6.8, 0.26, 0.42, 1.7, 0.049, 41, 122, 0.993, 3.47, 0.48, 10.5], 
    [ 7.6, 0.67, 0.14, 1.5, 0.074, 25, 168, 0.9937, 3.05, 0.51, 9.3], 
    [ 6.6, 0.27, 0.41, 1.3, 0.052, 16, 142, 0.9951, 3.42, 0.47, 10], 
    [ 7, 0.25, 0.32, 9, 0.046, 56, 245, 0.9955, 3.25, 0.5, 10.4], 
    [ 6.9, 0.24, 0.35, 1, 0.052, 35, 146, 0.993, 3.45, 0.44, 10], 
    [ 7, 0.28, 0.39, 8.7, 0.051, 32, 141, 0.9961, 3.38, 0.53, 10.5], 
    [ 7.4, 0.27, 0.48, 1.1, 0.047, 17, 132, 0.9914, 3.19, 0.49, 11.6], 
    [ 7.2, 0.32, 0.36, 2, 0.033, 37, 114, 0.9906, 3.1, 0.71, 12.3], 
    [ 8.5, 0.24, 0.39, 10.4, 0.044, 20, 142, 0.9974, 3.2, 0.53, 10], 
    [ 8.3, 0.14, 0.34, 1.1, 0.042, 7, 47, 0.9934, 3.47, 0.4, 10.2], 
    [ 7.4, 0.25, 0.36, 2.05, 0.05, 31, 100, 0.992, 3.19, 0.44, 10.8], 
    [ 6.2, 0.12, 0.34, 1.5, 0.045, 43, 117, 0.9939, 3.42, 0.51, 9], 
    [ 5.8, 0.27, 0.2, 14.95, 0.044, 22, 179, 0.9962, 3.37, 0.37, 10.2], 
    [ 7.3, 0.28, 0.43, 1.7, 0.08, 21, 123, 0.9905, 3.19, 0.42, 12.8], 
    [ 6.5, 0.39, 0.23, 5.4, 0.051, 25, 149, 0.9934, 3.24, 0.35, 10], 
    [ 7, 0.33, 0.32, 1.2, 0.053, 38, 138, 0.9906, 3.13, 0.28, 11.2], 
    [ 7.3, 0.24, 0.39, 17.95, 0.057, 45, 149, 0.9999, 3.21, 0.36, 8.6], 
    [ 7.3, 0.24, 0.39, 17.95, 0.057, 45, 149, 0.9999, 3.21, 0.36, 8.6], 
    [ 6.7, 0.23, 0.39, 2.5, 0.172, 63, 158, 0.9937, 3.11, 0.36, 9.4], 
    [ 6.7, 0.24, 0.39, 2.9, 0.173, 63, 157, 0.9937, 3.1, 0.34, 9.4], 
    [ 7, 0.31, 0.26, 7.4, 0.069, 28, 160, 0.9954, 3.13, 0.46, 9.8], 
    [ 6.6, 0.24, 0.27, 1.4, 0.057, 33, 152, 0.9934, 3.22, 0.56, 9.5], 
    [ 6.7, 0.23, 0.26, 1.4, 0.06, 33, 154, 0.9934, 3.24, 0.56, 9.5], 
    [ 7.4, 0.18, 0.31, 1.4, 0.058, 38, 167, 0.9931, 3.16, 0.53, 10], 
    [ 6.2, 0.45, 0.26, 4.4, 0.063, 63, 206, 0.994, 3.27, 0.52, 9.8], 
    [ 6.2, 0.46, 0.25, 4.4, 0.066, 62, 207, 0.9939, 3.25, 0.52, 9.8], 
    [ 7, 0.31, 0.26, 7.4, 0.069, 28, 160, 0.9954, 3.13, 0.46, 9.8], 
    [ 6.9, 0.19, 0.35, 5, 0.067, 32, 150, 0.995, 3.36, 0.48, 9.8], 
    [ 7.2, 0.19, 0.31, 1.6, 0.062, 31, 173, 0.9917, 3.35, 0.44, 11.7], 
    [ 6.6, 0.25, 0.29, 1.1, 0.068, 39, 124, 0.9914, 3.34, 0.58, 11], 
    [ 6.2, 0.16, 0.33, 1.1, 0.057, 21, 82, 0.991, 3.32, 0.46, 10.9], 
    [ 6.4, 0.18, 0.35, 1, 0.045, 39, 108, 0.9911, 3.31, 0.35, 10.9], 
    [ 6.8, 0.2, 0.59, 0.9, 0.147, 38, 132, 0.993, 3.05, 0.38, 9.1], 
    [ 6.9, 0.25, 0.35, 1.3, 0.039, 29, 191, 0.9908, 3.13, 0.52, 11], 
    [ 7.2, 0.21, 0.34, 11.9, 0.043, 37, 213, 0.9962, 3.09, 0.5, 9.6], 
    [ 6, 0.19, 0.26, 12.4, 0.048, 50, 147, 0.9972, 3.3, 0.36, 8.9], 
    [ 6.6, 0.38, 0.15, 4.6, 0.044, 25, 78, 0.9931, 3.11, 0.38, 10.2], 
    [ 7.4, 0.2, 0.36, 1.2, 0.038, 44, 111, 0.9926, 3.36, 0.34, 9.9], 
    [ 6.8, 0.22, 0.24, 4.9, 0.092, 30, 123, 0.9951, 3.03, 0.46, 8.6], 
    [ 6, 0.19, 0.26, 12.4, 0.048, 50, 147, 0.9972, 3.3, 0.36, 8.9], 
    [ 7, 0.47, 0.07, 1.1, 0.035, 17, 151, 0.991, 3.02, 0.34, 10.5], 
    [ 6.6, 0.38, 0.15, 4.6, 0.044, 25, 78, 0.9931, 3.11, 0.38, 10.2], 
    [ 7.2, 0.24, 0.27, 1.4, 0.038, 31, 122, 0.9927, 3.15, 0.46, 10.3], 
    [ 6.2, 0.35, 0.03, 1.2, 0.064, 29, 120, 0.9934, 3.22, 0.54, 9.1], 
    [ 6.4, 0.26, 0.24, 6.4, 0.04, 27, 124, 0.9903, 3.22, 0.49, 12.6], 
    [ 6.7, 0.25, 0.13, 1.2, 0.041, 81, 174, 0.992, 3.14, 0.42, 9.8], 
    [ 6.7, 0.23, 0.31, 2.1, 0.046, 30, 96, 0.9926, 3.33, 0.64, 10.7], 
    [ 7.4, 0.24, 0.29, 10.1, 0.05, 21, 105, 0.9962, 3.13, 0.35, 9.5], 
    [ 6.2, 0.27, 0.43, 7.8, 0.056, 48, 244, 0.9956, 3.1, 0.51, 9], 
    [ 6.8, 0.3, 0.23, 4.6, 0.061, 50.5, 238.5, 0.9958, 3.32, 0.6, 9.5], 
    [ 6, 0.27, 0.28, 4.8, 0.063, 31, 201, 0.9964, 3.69, 0.71, 10], 
    [ 8.6, 0.23, 0.46, 1, 0.054, 9, 72, 0.9941, 2.95, 0.49, 9.1], 
    [ 6.7, 0.23, 0.31, 2.1, 0.046, 30, 96, 0.9926, 3.33, 0.64, 10.7], 
    [ 7.4, 0.24, 0.29, 10.1, 0.05, 21, 105, 0.9962, 3.13, 0.35, 9.5], 
    [ 7.1, 0.18, 0.36, 1.4, 0.043, 31, 87, 0.9898, 3.26, 0.37, 12.7], 
    [ 7, 0.32, 0.34, 1.3, 0.042, 20, 69, 0.9912, 3.31, 0.65, 12], 
    [ 7.4, 0.18, 0.3, 8.8, 0.064, 26, 103, 0.9961, 2.94, 0.56, 9.3], 
    [ 6.7, 0.54, 0.28, 5.4, 0.06, 21, 105, 0.9949, 3.27, 0.37, 9], 
    [ 6.8, 0.22, 0.31, 1.4, 0.053, 34, 114, 0.9929, 3.39, 0.77, 10.6], 
    [ 7.1, 0.2, 0.34, 16, 0.05, 51, 166, 0.9985, 3.21, 0.6, 9.2], 
    [ 7.1, 0.34, 0.2, 6.1, 0.063, 47, 164, 0.9946, 3.17, 0.42, 10], 
    [ 7.3, 0.22, 0.3, 8.2, 0.047, 42, 207, 0.9966, 3.33, 0.46, 9.5], 
    [ 7.1, 0.43, 0.61, 11.8, 0.045, 54, 155, 0.9974, 3.11, 0.45, 8.7], 
    [ 7.1, 0.44, 0.62, 11.8, 0.044, 52, 152, 0.9975, 3.12, 0.46, 8.7], 
    [ 7.2, 0.39, 0.63, 11, 0.044, 55, 156, 0.9974, 3.09, 0.44, 8.7], 
    [ 6.8, 0.25, 0.31, 13.3, 0.05, 69, 202, 0.9972, 3.22, 0.48, 9.7], 
    [ 7.1, 0.43, 0.61, 11.8, 0.045, 54, 155, 0.9974, 3.11, 0.45, 8.7], 
    [ 7.1, 0.44, 0.62, 11.8, 0.044, 52, 152, 0.9975, 3.12, 0.46, 8.7], 
    [ 7.2, 0.39, 0.63, 11, 0.044, 55, 156, 0.9974, 3.09, 0.44, 8.7], 
    [ 6.1, 0.27, 0.43, 7.5, 0.049, 65, 243, 0.9957, 3.12, 0.47, 9], 
    [ 6.9, 0.24, 0.33, 1.7, 0.035, 47, 136, 0.99, 3.26, 0.4, 12.6], 
    [ 6.9, 0.21, 0.33, 1.8, 0.034, 48, 136, 0.9899, 3.25, 0.41, 12.6], 
    [ 7.5, 0.17, 0.32, 1.7, 0.04, 51, 148, 0.9916, 3.21, 0.44, 11.5], 
    [ 7.1, 0.26, 0.29, 12.4, 0.044, 62, 240, 0.9969, 3.04, 0.42, 9.2], 
    [ 6, 0.34, 0.66, 15.9, 0.046, 26, 164, 0.9979, 3.14, 0.5, 8.8], 
    [ 8.6, 0.265, 0.36, 1.2, 0.034, 15, 80, 0.9913, 2.95, 0.36, 11.4], 
    [ 9.8, 0.36, 0.46, 10.5, 0.038, 4, 83, 0.9956, 2.89, 0.3, 10.1], 
    [ 6, 0.34, 0.66, 15.9, 0.046, 26, 164, 0.9979, 3.14, 0.5, 8.8], 
    [ 7.4, 0.25, 0.37, 13.5, 0.06, 52, 192, 0.9975, 3, 0.44, 9.1], 
    [ 7.1, 0.12, 0.32, 9.6, 0.054, 64, 162, 0.9962, 3.4, 0.41, 9.4], 
    [ 6, 0.21, 0.24, 12.1, 0.05, 55, 164, 0.997, 3.34, 0.39, 9.4], 
    [ 7.5, 0.305, 0.4, 18.9, 0.059, 44, 170, 1, 2.99, 0.46, 9], 
    [ 7.4, 0.25, 0.37, 13.5, 0.06, 52, 192, 0.9975, 3, 0.44, 9.1], 
    [ 7.3, 0.13, 0.32, 14.4, 0.051, 34, 109, 0.9974, 3.2, 0.35, 9.2], 
    [ 7.1, 0.12, 0.32, 9.6, 0.054, 64, 162, 0.9962, 3.4, 0.41, 9.4], 
    [ 7.1, 0.23, 0.35, 16.5, 0.04, 60, 171, 0.999, 3.16, 0.59, 9.1], 
    [ 7.1, 0.23, 0.35, 16.5, 0.04, 60, 171, 0.999, 3.16, 0.59, 9.1], 
    [ 6.9, 0.33, 0.28, 1.3, 0.051, 37, 187, 0.9927, 3.27, 0.6, 10.3], 
    [ 6.5, 0.17, 0.54, 8.5, 0.082, 64, 163, 0.9959, 2.89, 0.39, 8.8], 
    [ 7.2, 0.27, 0.46, 18.75, 0.052, 45, 255, 1, 3.04, 0.52, 8.9], 
    [ 7.2, 0.31, 0.5, 13.3, 0.056, 68, 195, 0.9982, 3.01, 0.47, 9.2], 
    [ 6.7, 0.41, 0.34, 9.2, 0.049, 29, 150, 0.9968, 3.22, 0.51, 9.1], 
    [ 6.7, 0.41, 0.34, 9.2, 0.049, 29, 150, 0.9968, 3.22, 0.51, 9.1], 
    [ 5.5, 0.485, 0, 1.5, 0.065, 8, 103, 0.994, 3.63, 0.4, 9.7], 
    [ 6, 0.31, 0.24, 3.3, 0.041, 25, 143, 0.9914, 3.31, 0.44, 11.3], 
    [ 7, 0.14, 0.4, 1.7, 0.035, 16, 85, 0.9911, 3.19, 0.42, 11.8], 
    [ 7.2, 0.31, 0.5, 13.3, 0.056, 68, 195, 0.9982, 3.01, 0.47, 9.2], 
    [ 7.3, 0.32, 0.48, 13.3, 0.06, 57, 196, 0.9982, 3.04, 0.5, 9.2], 
    [ 5.9, 0.36, 0.04, 5.7, 0.046, 21, 87, 0.9934, 3.22, 0.51, 10.2], 
    [ 7.8, 0.24, 0.32, 12.2, 0.054, 42, 138, 0.9984, 3.01, 0.54, 8.8], 
    [ 7.4, 0.16, 0.31, 6.85, 0.059, 31, 131, 0.9952, 3.29, 0.34, 9.7], 
    [ 6.9, 0.19, 0.28, 5, 0.058, 14, 146, 0.9952, 3.29, 0.36, 9.1], 
    [ 6.4, 0.13, 0.47, 1.6, 0.092, 40, 158, 0.9928, 3.21, 0.36, 9.8], 
    [ 6.7, 0.19, 0.36, 1.1, 0.026, 63, 143, 0.9912, 3.27, 0.48, 11], 
    [ 7.4, 0.39, 0.23, 7, 0.033, 29, 126, 0.994, 3.14, 0.42, 10.5], 
    [ 6.5, 0.24, 0.32, 7.6, 0.038, 48, 203, 0.9958, 3.45, 0.54, 9.7], 
    [ 6.1, 0.3, 0.56, 2.8, 0.044, 47, 179, 0.9924, 3.3, 0.57, 10.9], 
    [ 6.1, 0.3, 0.56, 2.7, 0.046, 46, 184, 0.9924, 3.31, 0.57, 10.9], 
    [ 5.7, 0.26, 0.25, 10.4, 0.02, 7, 57, 0.994, 3.39, 0.37, 10.6], 
    [ 6.5, 0.24, 0.32, 7.6, 0.038, 48, 203, 0.9958, 3.45, 0.54, 9.7], 
    [ 6.5, 0.425, 0.4, 13.1, 0.038, 59, 241, 0.9979, 3.23, 0.57, 9], 
    [ 6.6, 0.24, 0.27, 15.8, 0.035, 46, 188, 0.9982, 3.24, 0.51, 9.2], 
    [ 6.8, 0.27, 0.22, 8.1, 0.034, 55, 203, 0.9961, 3.19, 0.52, 8.9], 
    [ 6.7, 0.27, 0.31, 15.7, 0.036, 44, 179, 0.9979, 3.26, 0.56, 9.6], 
    [ 8.2, 0.23, 0.4, 1.2, 0.027, 36, 121, 0.992, 3.12, 0.38, 10.7], 
    [ 7.1, 0.37, 0.67, 10.5, 0.045, 49, 155, 0.9975, 3.16, 0.44, 8.7], 
    [ 6.8, 0.19, 0.36, 1.9, 0.035, 30, 96, 0.9917, 3.15, 0.54, 10.8], 
    [ 8.1, 0.28, 0.39, 1.9, 0.029, 18, 79, 0.9923, 3.23, 0.52, 11.8], 
    [ 6.3, 0.31, 0.34, 2.2, 0.045, 20, 77, 0.9927, 3.3, 0.43, 10.2], 
    [ 7.1, 0.37, 0.67, 10.5, 0.045, 49, 155, 0.9975, 3.16, 0.44, 8.7], 
    [ 7.9, 0.21, 0.4, 1.2, 0.039, 38, 107, 0.992, 3.21, 0.54, 10.8], 
    [ 8.5, 0.21, 0.41, 4.3, 0.036, 24, 99, 0.9947, 3.18, 0.53, 9.7], 
    [ 8.1, 0.2, 0.4, 2, 0.037, 19, 87, 0.9921, 3.12, 0.54, 11.2], 
    [ 6.3, 0.255, 0.37, 1.1, 0.04, 37, 114, 0.9905, 3, 0.39, 10.9], 
    [ 5.6, 0.16, 0.27, 1.4, 0.044, 53, 168, 0.9918, 3.28, 0.37, 10.1], 
    [ 6.4, 0.595, 0.14, 5.2, 0.058, 15, 97, 0.9951, 3.38, 0.36, 9], 
    [ 6.3, 0.34, 0.33, 4.6, 0.034, 19, 80, 0.9917, 3.38, 0.58, 12], 
    [ 6.9, 0.25, 0.3, 4.1, 0.054, 23, 116, 0.994, 2.99, 0.38, 9.4], 
    [ 7.9, 0.22, 0.38, 8, 0.043, 46, 152, 0.9934, 3.12, 0.32, 11.5], 
    [ 7.6, 0.18, 0.46, 10.2, 0.055, 58, 135, 0.9968, 3.14, 0.43, 9.9], 
    [ 6.9, 0.25, 0.3, 4.1, 0.054, 23, 116, 0.994, 2.99, 0.38, 9.4], 
    [ 7.2, 0.18, 0.41, 1.2, 0.048, 41, 97, 0.9919, 3.14, 0.45, 10.4], 
    [ 8.2, 0.23, 0.4, 7.5, 0.049, 12, 76, 0.9966, 3.06, 0.84, 9.7], 
    [ 7.4, 0.24, 0.42, 14, 0.066, 48, 198, 0.9979, 2.89, 0.42, 8.9], 
    [ 7.4, 0.24, 0.42, 14, 0.066, 48, 198, 0.9979, 2.89, 0.42, 8.9], 
    [ 6.1, 0.32, 0.24, 1.5, 0.036, 38, 124, 0.9898, 3.29, 0.42, 12.4], 
    [ 5.2, 0.44, 0.04, 1.4, 0.036, 43, 119, 0.9894, 3.36, 0.33, 12.1], 
    [ 5.2, 0.44, 0.04, 1.4, 0.036, 43, 119, 0.9894, 3.36, 0.33, 12.1], 
    [ 6.1, 0.32, 0.24, 1.5, 0.036, 38, 124, 0.9898, 3.29, 0.42, 12.4], 
    [ 6.4, 0.22, 0.56, 14.5, 0.055, 27, 159, 0.998, 2.98, 0.4, 9.1], 
    [ 6.3, 0.36, 0.3, 4.8, 0.049, 14, 85, 0.9932, 3.28, 0.39, 10.6], 
    [ 7.4, 0.24, 0.42, 14, 0.066, 48, 198, 0.9979, 2.89, 0.42, 8.9], 
    [ 6.7, 0.24, 0.35, 13.1, 0.05, 64, 205, 0.997, 3.15, 0.5, 9.5], 
    [ 7, 0.23, 0.36, 13, 0.051, 72, 177, 0.9972, 3.16, 0.49, 9.8], 
    [ 8.4, 0.27, 0.46, 8.7, 0.048, 39, 197, 0.9974, 3.14, 0.59, 9.6], 
    [ 6.7, 0.46, 0.18, 2.4, 0.034, 25, 98, 0.9896, 3.08, 0.44, 12.6], 
    [ 7.5, 0.29, 0.31, 8.95, 0.055, 20, 151, 0.9968, 3.08, 0.54, 9.3], 
    [ 9.8, 0.42, 0.48, 9.85, 0.034, 5, 110, 0.9958, 2.87, 0.29, 10], 
    [ 7.1, 0.3, 0.46, 1.5, 0.066, 29, 133, 0.9906, 3.12, 0.54, 12.7], 
    [ 7.9, 0.19, 0.45, 1.5, 0.045, 17, 96, 0.9917, 3.13, 0.39, 11], 
    [ 7.6, 0.48, 0.37, 0.8, 0.037, 4, 100, 0.9902, 3.03, 0.39, 11.4], 
    [ 6.3, 0.22, 0.43, 4.55, 0.038, 31, 130, 0.9918, 3.35, 0.33, 11.5], 
    [ 7.5, 0.27, 0.31, 17.7, 0.051, 33, 173, 0.999, 3.09, 0.64, 10.2], 
    [ 6.9, 0.23, 0.4, 7.5, 0.04, 50, 151, 0.9927, 3.11, 0.27, 11.4], 
    [ 7.2, 0.32, 0.47, 5.1, 0.044, 19, 65, 0.991, 3.03, 0.41, 12.6], 
    [ 5.9, 0.23, 0.3, 12.9, 0.054, 57, 170, 0.9972, 3.28, 0.39, 9.4], 
    [ 6, 0.67, 0.07, 1.2, 0.06, 9, 108, 0.9931, 3.11, 0.35, 8.7], 
    [ 6.4, 0.25, 0.32, 5.5, 0.049, 41, 176, 0.995, 3.19, 0.68, 9.2], 
    [ 6.4, 0.33, 0.31, 5.5, 0.048, 42, 173, 0.9951, 3.19, 0.66, 9.3], 
    [ 7.1, 0.34, 0.15, 1.2, 0.053, 61, 183, 0.9936, 3.09, 0.43, 9.2], 
    [ 6.8, 0.28, 0.4, 22, 0.048, 48, 167, 1.001, 2.93, 0.5, 8.7], 
    [ 6.9, 0.27, 0.4, 14, 0.05, 64, 227, 0.9979, 3.18, 0.58, 9.6], 
    [ 6.8, 0.26, 0.56, 11.9, 0.043, 64, 226, 0.997, 3.02, 0.63, 9.3], 
    [ 6.8, 0.29, 0.56, 11.9, 0.043, 66, 230, 0.9972, 3.02, 0.63, 9.3], 
    [ 6.7, 0.24, 0.41, 9.4, 0.04, 49, 166, 0.9954, 3.12, 0.61, 9.9], 
    [ 5.9, 0.3, 0.23, 4.2, 0.038, 42, 119, 0.9924, 3.15, 0.5, 11], 
    [ 6.8, 0.53, 0.35, 3.8, 0.034, 26, 109, 0.9906, 3.26, 0.57, 12.7], 
    [ 6.5, 0.28, 0.28, 8.5, 0.047, 54, 210, 0.9962, 3.09, 0.54, 8.9], 
    [ 6.6, 0.28, 0.28, 8.5, 0.052, 55, 211, 0.9962, 3.09, 0.55, 8.9], 
    [ 6.8, 0.28, 0.4, 22, 0.048, 48, 167, 1.001, 2.93, 0.5, 8.7], 
    [ 6.8, 0.28, 0.36, 8, 0.045, 28, 123, 0.9928, 3.02, 0.37, 11.4], 
    [ 6.6, 0.15, 0.34, 5.1, 0.055, 34, 125, 0.9942, 3.36, 0.42, 9.6], 
    [ 6.4, 0.29, 0.44, 3.6, 0.2, 75, 181, 0.9942, 3.02, 0.41, 9.1], 
    [ 6.4, 0.3, 0.45, 3.5, 0.197, 76, 180, 0.9942, 3.02, 0.39, 9.1], 
    [ 6.4, 0.29, 0.44, 3.6, 0.197, 75, 183, 0.9942, 3.01, 0.38, 9.1], 
    [ 6.8, 0.26, 0.24, 7.8, 0.052, 54, 214, 0.9961, 3.13, 0.47, 8.9], 
    [ 7.1, 0.32, 0.24, 13.1, 0.05, 52, 204, 0.998, 3.1, 0.49, 8.8], 
    [ 6.8, 0.26, 0.24, 7.8, 0.052, 54, 214, 0.9961, 3.13, 0.47, 8.9], 
    [ 6.8, 0.27, 0.26, 16.1, 0.049, 55, 196, 0.9984, 3.15, 0.5, 9.3], 
    [ 7.1, 0.32, 0.24, 13.1, 0.05, 52, 204, 0.998, 3.1, 0.49, 8.8], 
    [ 6.9, 0.54, 0.32, 13.2, 0.05, 53, 236, 0.9973, 3.2, 0.5, 9.6], 
    [ 6.8, 0.26, 0.34, 13.9, 0.034, 39, 134, 0.9949, 3.33, 0.53, 12], 
    [ 5.8, 0.28, 0.35, 2.3, 0.053, 36, 114, 0.9924, 3.28, 0.5, 10.2], 
    [ 6.4, 0.21, 0.5, 11.6, 0.042, 45, 153, 0.9972, 3.15, 0.43, 8.8], 
    [ 7, 0.16, 0.32, 8.3, 0.045, 38, 126, 0.9958, 3.21, 0.34, 9.2], 
    [ 10.2, 0.44, 0.88, 6.2, 0.049, 20, 124, 0.9968, 2.99, 0.51, 9.9], 
    [ 6.8, 0.57, 0.29, 2.2, 0.04, 15, 77, 0.9938, 3.32, 0.74, 10.2], 
    [ 6.1, 0.4, 0.31, 0.9, 0.048, 23, 170, 0.993, 3.22, 0.77, 9.5], 
    [ 5.6, 0.245, 0.25, 9.7, 0.032, 12, 68, 0.994, 3.31, 0.34, 10.5], 
    [ 6.8, 0.18, 0.38, 1.4, 0.038, 35, 111, 0.9918, 3.32, 0.59, 11.2], 
    [ 7, 0.16, 0.32, 8.3, 0.045, 38, 126, 0.9958, 3.21, 0.34, 9.2], 
    [ 6.7, 0.13, 0.29, 5.3, 0.051, 31, 122, 0.9944, 3.44, 0.37, 9.7], 
    [ 6.2, 0.25, 0.25, 1.4, 0.03, 35, 105, 0.9912, 3.3, 0.44, 11.1], 
    [ 5.8, 0.26, 0.24, 9.2, 0.044, 55, 152, 0.9961, 3.31, 0.38, 9.4], 
    [ 7.5, 0.27, 0.36, 7, 0.036, 45, 164, 0.9939, 3.03, 0.33, 11], 
    [ 5.8, 0.26, 0.24, 9.2, 0.044, 55, 152, 0.9961, 3.31, 0.38, 9.4], 
    [ 5.7, 0.28, 0.24, 17.5, 0.044, 60, 167, 0.9989, 3.31, 0.44, 9.4], 
    [ 7.5, 0.23, 0.36, 7, 0.036, 43, 161, 0.9938, 3.04, 0.32, 11], 
    [ 7.5, 0.27, 0.36, 7, 0.036, 45, 164, 0.9939, 3.03, 0.33, 11], 
    [ 7.2, 0.685, 0.21, 9.5, 0.07, 33, 172, 0.9971, 3, 0.55, 9.1], 
    [ 6.2, 0.25, 0.25, 1.4, 0.03, 35, 105, 0.9912, 3.3, 0.44, 11.1], 
    [ 6.5, 0.19, 0.3, 0.8, 0.043, 33, 144, 0.9936, 3.42, 0.39, 9.1], 
    [ 6.3, 0.495, 0.22, 1.8, 0.046, 31, 140, 0.9929, 3.39, 0.54, 10.4], 
    [ 7.1, 0.24, 0.41, 17.8, 0.046, 39, 145, 0.9998, 3.32, 0.39, 8.7], 
    [ 6.4, 0.17, 0.32, 2.4, 0.048, 41, 200, 0.9938, 3.5, 0.5, 9.7], 
    [ 7.1, 0.25, 0.32, 10.3, 0.041, 66, 272, 0.9969, 3.17, 0.52, 9.1], 
    [ 6.4, 0.17, 0.32, 2.4, 0.048, 41, 200, 0.9938, 3.5, 0.5, 9.7], 
    [ 7.1, 0.24, 0.41, 17.8, 0.046, 39, 145, 0.9998, 3.32, 0.39, 8.7], 
    [ 6.8, 0.64, 0.08, 9.7, 0.062, 26, 142, 0.9972, 3.37, 0.46, 8.9], 
    [ 8.3, 0.28, 0.4, 7.8, 0.041, 38, 194, 0.9976, 3.34, 0.51, 9.6], 
    [ 8.2, 0.27, 0.39, 7.8, 0.039, 49, 208, 0.9976, 3.31, 0.51, 9.5], 
    [ 7.2, 0.23, 0.38, 14.3, 0.058, 55, 194, 0.9979, 3.09, 0.44, 9], 
    [ 7.2, 0.23, 0.38, 14.3, 0.058, 55, 194, 0.9979, 3.09, 0.44, 9], 
    [ 7.2, 0.23, 0.38, 14.3, 0.058, 55, 194, 0.9979, 3.09, 0.44, 9], 
    [ 7.2, 0.23, 0.38, 14.3, 0.058, 55, 194, 0.9979, 3.09, 0.44, 9], 
    [ 6.8, 0.52, 0.32, 13.2, 0.044, 54, 221, 0.9972, 3.27, 0.5, 9.6], 
    [ 7, 0.26, 0.59, 1.4, 0.037, 40, 120, 0.9918, 3.34, 0.41, 11.1], 
    [ 6.2, 0.25, 0.21, 15.55, 0.039, 28, 159, 0.9982, 3.48, 0.64, 9.6], 
    [ 7.3, 0.32, 0.23, 13.7, 0.05, 49, 197, 0.9985, 3.2, 0.46, 8.7], 
    [ 7.7, 0.31, 0.26, 7.8, 0.031, 23, 90, 0.9944, 3.13, 0.5, 10.4], 
    [ 7.1, 0.21, 0.37, 2.4, 0.026, 23, 100, 0.9903, 3.15, 0.38, 11.4], 
    [ 6.8, 0.24, 0.34, 2.7, 0.047, 64.5, 218.5, 0.9934, 3.3, 0.58, 9.7], 
    [ 6.9, 0.4, 0.56, 11.2, 0.043, 40, 142, 0.9975, 3.14, 0.46, 8.7], 
    [ 6.1, 0.18, 0.36, 2, 0.038, 20, 249.5, 0.9923, 3.37, 0.79, 11.3], 
    [ 6.8, 0.21, 0.27, 2.1, 0.03, 26, 139, 0.99, 3.16, 0.61, 12.6], 
    [ 5.8, 0.2, 0.27, 1.4, 0.031, 12, 77, 0.9905, 3.25, 0.36, 10.9], 
    [ 5.6, 0.19, 0.26, 1.4, 0.03, 12, 76, 0.9905, 3.25, 0.37, 10.9], 
    [ 6.1, 0.41, 0.14, 10.4, 0.037, 18, 119, 0.996, 3.38, 0.45, 10], 
    [ 5.9, 0.21, 0.28, 4.6, 0.053, 40, 199, 0.9964, 3.72, 0.7, 10], 
    [ 8.5, 0.26, 0.21, 16.2, 0.074, 41, 197, 0.998, 3.02, 0.5, 9.8], 
    [ 6.9, 0.4, 0.56, 11.2, 0.043, 40, 142, 0.9975, 3.14, 0.46, 8.7], 
    [ 5.8, 0.24, 0.44, 3.5, 0.029, 5, 109, 0.9913, 3.53, 0.43, 11.7], 
    [ 5.8, 0.24, 0.39, 1.5, 0.054, 37, 158, 0.9932, 3.21, 0.52, 9.3], 
    [ 6.7, 0.26, 0.39, 1.1, 0.04, 45, 147, 0.9935, 3.32, 0.58, 9.6], 
    [ 6.3, 0.35, 0.3, 5.7, 0.035, 8, 97, 0.9927, 3.27, 0.41, 11], 
    [ 6.3, 0.35, 0.3, 5.7, 0.035, 8, 97, 0.9927, 3.27, 0.41, 11], 
    [ 6.4, 0.23, 0.39, 1.8, 0.032, 23, 118, 0.9912, 3.32, 0.5, 11.8], 
    [ 5.8, 0.36, 0.38, 0.9, 0.037, 3, 75, 0.9904, 3.28, 0.34, 11.4], 
    [ 6.9, 0.115, 0.35, 5.4, 0.048, 36, 108, 0.9939, 3.32, 0.42, 10.2], 
    [ 6.9, 0.29, 0.4, 19.45, 0.043, 36, 156, 0.9996, 2.93, 0.47, 8.9], 
    [ 6.9, 0.28, 0.4, 8.2, 0.036, 15, 95, 0.9944, 3.17, 0.33, 10.2], 
    [ 7.2, 0.29, 0.4, 13.6, 0.045, 66, 231, 0.9977, 3.08, 0.59, 9.6], 
    [ 6.2, 0.24, 0.35, 1.2, 0.038, 22, 167, 0.9912, 3.1, 0.48, 10.6], 
    [ 6.9, 0.29, 0.4, 19.45, 0.043, 36, 156, 0.9996, 2.93, 0.47, 8.9], 
    [ 6.9, 0.32, 0.26, 8.3, 0.053, 32, 180, 0.9965, 3.25, 0.51, 9.2], 
    [ 5.3, 0.58, 0.07, 6.9, 0.043, 34, 149, 0.9944, 3.34, 0.57, 9.7], 
    [ 5.3, 0.585, 0.07, 7.1, 0.044, 34, 145, 0.9945, 3.34, 0.57, 9.7], 
    [ 5.4, 0.59, 0.07, 7, 0.045, 36, 147, 0.9944, 3.34, 0.57, 9.7], 
    [ 6.9, 0.32, 0.26, 8.3, 0.053, 32, 180, 0.9965, 3.25, 0.51, 9.2], 
    [ 5.2, 0.6, 0.07, 7, 0.044, 33, 147, 0.9944, 3.33, 0.58, 9.7], 
    [ 5.8, 0.25, 0.26, 13.1, 0.051, 44, 148, 0.9972, 3.29, 0.38, 9.3], 
    [ 6.6, 0.58, 0.3, 5.1, 0.057, 30, 123, 0.9949, 3.24, 0.38, 9], 
    [ 7, 0.29, 0.54, 10.7, 0.046, 59, 234, 0.9966, 3.05, 0.61, 9.5], 
    [ 6.6, 0.19, 0.41, 8.9, 0.046, 51, 169, 0.9954, 3.14, 0.57, 9.8], 
    [ 6.7, 0.2, 0.41, 9.1, 0.044, 50, 166, 0.9954, 3.14, 0.58, 9.8], 
    [ 7.7, 0.26, 0.4, 1.1, 0.042, 9, 60, 0.9915, 2.89, 0.5, 10.6], 
    [ 6.8, 0.32, 0.34, 1.2, 0.044, 14, 67, 0.9919, 3.05, 0.47, 10.6], 
    [ 7, 0.3, 0.49, 4.7, 0.036, 17, 105, 0.9916, 3.26, 0.68, 12.4], 
    [ 7, 0.24, 0.36, 2.8, 0.034, 22, 112, 0.99, 3.19, 0.38, 12.6], 
    [ 6.1, 0.31, 0.58, 5, 0.039, 36, 114, 0.9909, 3.3, 0.6, 12.3], 
    [ 6.8, 0.44, 0.37, 5.1, 0.047, 46, 201, 0.9938, 3.08, 0.65, 10.5], 
    [ 6.7, 0.34, 0.3, 15.6, 0.054, 51, 196, 0.9982, 3.19, 0.49, 9.3], 
    [ 7.1, 0.35, 0.24, 15.4, 0.055, 46, 198, 0.9988, 3.12, 0.49, 8.8], 
    [ 7.3, 0.32, 0.25, 7.2, 0.056, 47, 180, 0.9961, 3.08, 0.47, 8.8], 
    [ 6.5, 0.28, 0.33, 15.7, 0.053, 51, 190, 0.9978, 3.22, 0.51, 9.7], 
    [ 7.2, 0.23, 0.39, 14.2, 0.058, 49, 192, 0.9979, 2.98, 0.48, 9], 
    [ 7.2, 0.23, 0.39, 14.2, 0.058, 49, 192, 0.9979, 2.98, 0.48, 9], 
    [ 7.2, 0.23, 0.39, 14.2, 0.058, 49, 192, 0.9979, 2.98, 0.48, 9], 
    [ 7.2, 0.23, 0.39, 14.2, 0.058, 49, 192, 0.9979, 2.98, 0.48, 9], 
    [ 5.9, 0.15, 0.31, 5.8, 0.041, 53, 155, 0.9945, 3.52, 0.46, 10.5], 
    [ 7.4, 0.28, 0.42, 19.8, 0.066, 53, 195, 1, 2.96, 0.44, 9.1], 
    [ 6.2, 0.28, 0.22, 7.3, 0.041, 26, 157, 0.9957, 3.44, 0.64, 9.8], 
    [ 9.1, 0.59, 0.38, 1.6, 0.066, 34, 182, 0.9968, 3.23, 0.38, 8.5], 
    [ 6.3, 0.33, 0.27, 1.2, 0.046, 34, 175, 0.9934, 3.37, 0.54, 9.4], 
    [ 8.3, 0.39, 0.7, 10.6, 0.045, 33, 169, 0.9976, 3.09, 0.57, 9.4], 
    [ 7.2, 0.19, 0.46, 3.8, 0.041, 82, 187, 0.9932, 3.19, 0.6, 11.2], 
    [ 7.5, 0.17, 0.44, 11.3, 0.046, 65, 146, 0.997, 3.17, 0.45, 10], 
]

module.exports = data;