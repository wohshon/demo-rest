# Dummy CRUD rest service  for acting as  3scale backend service

## Flights 

```
		GET All flights
		* /flights
		GET Single flights
		* /flights/[flightid]
		POST flights
		* payload :
		{
			"newFlight":{
				"id": "SQ998",
				"name": "SQ998",
				"price": 2008.45,
				"currency": "SGD",
				"from": "SIN",
				"to": "HKG"
			}
		}

		DELETE flights
		* /flights/[flightid]

```

## Users

```
	/users

		GET ALL users
		* /users
		GET Single user
		*/users/[userId]
		POST users 
		* payload:
		{
			"newUser": {
			"id": "user1",
			"name": "john",
			"email": "john@acme.com"
			}
		}	

		DELETE users
		* /users/[userId]

```

## Products 

```
	/products

		GET All products
		* /products
		GET Single products
		* /products/[productId]
		POST products 

		{
			"newProduct": { 
				"id": "product1",
				"name": "laptop",
				"price": 1200,
				"currency": "SGD"
			}
		}

		DELETE products
		* /products/[productid]

```



## Other testing endpoints, returns some text

	```
	/hello

	/goodbye

	/echo

	/echo/dummy
	```