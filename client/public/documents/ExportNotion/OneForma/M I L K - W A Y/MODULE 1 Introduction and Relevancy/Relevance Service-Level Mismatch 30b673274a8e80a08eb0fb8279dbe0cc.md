# Relevance: Service-Level Mismatch

Sometimes a query specifically requests a certain level of service, which may or may not be reflected in the result. Common requests include:

- Specific stores (e.g. Walmart Supercenter)
- Outlet stores (e.g. J. Crew Factory)

When the query requests a specific level of service which is not reflected in the result, give an initial rating of **Good** and demote as necessary depending on how well the result would satisfy the user intent.

When the query requests a type of business with a generic level of service, providing a result that offers more service than requested still satisfies user intent and should receive an initial rating of **Excellent**.

When the query does not specify the type of service, any relevant result can be rated **Excellent**.

| Query | Result | Rating and Explanation |  |  |
| --- | --- | --- | --- | --- |
| 
 
 
 
[walmart] | 
Walmart Supercenter 3435 East Broadway Blvd, Tucson, AZ 85716 | Relevance | **Excellent** |  |
|  |  | Query is for a generic Walmart and the result is a Walmart Supercenter store that offers more services than the average Walmart store. User intent has been met and there is no need to demote for service level. |  |  |
|  | 
Walmart Neighborhood Market
5500 E 22nd St, Tucson, AZ 85711 | Relevance | **Excellent** |  |
|  |  | 
The query does not specify the type of Walmart, and any Walmart can be rated **Excellent**. Demote further for distance. |  |  |
| 
 
[walmart supercenter] | 
Walmart Neighborhood Market
5500 E 22nd St, Tucson, AZ 85711 | Relevance | **Good (User Intent)** |  |
|  |  | Query is for a store with specific level of service. Walmart Supercenters are very large stores that have a full range of grocery and general merchandise. A Walmart Neighborhood Market is generally smaller with a more limited array of grocery and general merchandise. |  |  |
| 
[Nordstrom rack] | 
Nordstrom
55 E Grand Ave, Chicago, IL 60611 | Relevance | **Good (User Intent)** |  |
|  |  | The query is for an outlet store, but the result is for a full-price store. The result satisfies the query intent, but to a lesser degree. |  |  |
| 
 
 
 
 
[bank of america] | Bank of America
10900 Orangewood Blvd,
Orlando, FL 32821 | Relevance | **Excellent** |  |
|  |  | 
 
 
 
When the query is for a bank or a general bank brand, an ATM or a branch location of that specific brand are equally relevant. |  |  |
|  | Bank of America ATM
10900 Orangewood Blvd,
Orlando, FL 32821 |  |  |  |

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| 
 
 
 
 
 
 
[ATM] | 
 
 
 
 
Citibank
3333 E Tropicana Ave Las Vegas, NV 89121 | Relevance | **Excellent** |
|  |  | The result is a bank branch location. Since many branches contain ATMs, and would be able to provide the same level of service as an ATM, this result usually fulfills the user’s intent.
Note that if research indicates the result does not offer cash services, rate it **Bad**. |  |
|  | 
Citibank ATM 7-Eleven 3421 E Tropicana Ave Las Vegas, NV 89121 | Relevance | **Excellent** |
|  |  | This is an ATM located inside a 7-Eleven convenience store. It satisfies the primary intent of the category. |  |
| 
 
[burger king] | 
McDonald’s
6875 Sand Lake Rd, Orlando, FL 32819 | Relevance | **Bad (User Intent)** |
|  |  | A user has asked for a specific fast food restaurant and the result is another fast food restaurant that offers similar food and service. Even though the service level in the two restaurants is similar, this result does not match the user intent for the named restaurant. |  |