 Ecomer Backend API 

## Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. npm Run  start:prod 
4. npm Run  start:dev 


## API  Breakdown
 1. Product API
2. Order API

routes:
1. /api/products
2 ./api/orders

## API Documentation
 This API is a simple API that allows you to create, read, update and delete products and you can also create & read the orders that have been made. Fristly you need to create a product before you can create an order. In this pack I have used mongodb as the database and mongoose as the ORM. Zod is used for validation and express as the server  and typescript as the language. eslint and prettier are used for linting and formatting the code. 
 the folder structure is as follows for each route there is a controller, model, service and types file.

```src
    - modules
    - controllers
    - models
    - routes
    - services
    - types
   
```

## API Endpoints
1. Product API
    - GET /api/products
    - POST /api/products
    - PUT /api/products/:id
    - DELETE /api/products/:id
    - GET /api/products?searchTerm=iphone

2. Order API
    - GET /api/orders
    - POST /api/orders
    - GET /api/orders/:id
    - Get /api/orders?email=test@gmail.com


Thanks for reading
```




