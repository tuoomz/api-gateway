## Overview

The API will run on `http://localhost:3000`.

### API Endpoints

#### GET /prices

Returns a list of prices.

#### GET /trades/BTCUSDT

Returns the trades made on the BTCUSDT pair.

### Nest.js
Nest.js is an open-source framework that has gained popularity for building scalable and efficient server-side applications using Node.js. For my project, I chose Nest.js because it provided an easy way to set up interceptors for logging purposes. Additionally, Nest.js makes it easy to create middleware, which allowed me to easily implement the bearer authentication needed for my project.

### Authentication

Authentication is handled using the `auth.middleware.ts` service. The token is configured in the `.env` file, and the middleware verifies the token passed in the request header with the token stored in the `.env` file. Unauthorized requests will receive a 401 Unauthorized response.

### Logging

Logging is handled using the `logger.interceptor`, which intercepts all requests and logs out the request information, including the request method, URL, and request body.

### Trade-Offs
 I chose to keep the endpoints simple, without any query parameters or payloads. This approach allowed me to focus on the overall system architecture rather than the details of individual endpoint

### Benefits
API gateways offer a number of benefits to businesses. They provide centralized control for managing access, traffic routing, and load balancing. They also enhance security by protecting against common attacks and enforcing authentication and authorization policies. They also allow you to combine data from multiple internal or external sources, and return it with a single request.

### Problems
While API gateways offer many benefits, they can also create potential problems for businesses. For example, an API gateway can create a single point of failure for the entire API infrastructure. Additionally, when upgrading an API, businesses may need to either get everyone to use the new version or add versioning to the existing API. This can add complexity as businesses need to manage multiple versions and documentations, potentially leading to confusion and inefficiencies.

### Potential Improvements

* Add caching to each endpoint to reduce the load on the database
* Add monitoring to the endpoints so we can implement rate limits for users 
* Add a load balancer to spread the load across multiple instances.
* Create an api-key service so we can create a new key for each users
* Create goods docs with a playground so new users can test the api-key service
* Add pagination for large responses
* Add a logger system such as datadog for monitoring