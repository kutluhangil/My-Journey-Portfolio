# City vs. Municipality

In many cases, a city and a state/county/municipality (or other similar market-specific components) have the same name, but the city is typically more prominent. In this case, the chances that a user is looking for the state/county/municipality and not the city, are very small, but still a possibility.

Therefore, states, counties, and municipalities will be treated as a secondary intent and given an initial rating of **Good**. Consider the relationship between the city and the municipality in terms of their locale and adjust if necessary. On the other hand, if the query specifically requests the state/county/ municipality, that result’s relevance should be rated as **Navigational** and the city should be rated **Bad.**

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| 
 
[new york] | 
New York City
New York, USA | Relevance | **Navigational** |
|  |  | The result is for the city, which is considered more prominent than the state. |  |
|  | 
New York State
New York State, USA | Relevance | **Good (Distance/Prominence)** |
|  |  | Result is for the state, which is less prominent than the city. |  |
| 
 
[santa clara] | 
Santa Clara
Santa Clara, CA | Relevance | **Navigational** |
|  |  | Query is for the city, which is considered more prominent than the county. |  |
|  | 
Santa Clara County
Santa Clara County, CA | Relevance | **Good (Distance/Prominence)** |
|  |  | Query is for the city, which is considered more prominent than the county. |  |
| [santa clara county] | 
Santa Clara County
Santa Clara County, CA | Relevance | **Navigational** |
|  |  | Query is specifically requesting the county, so the result for the county will be rated Navigational. |  |
|  | Santa Clara
Santa Clara, CA | Relevance | **Bad (User Intent)** |
|  |  | Query is for the county and a result for the city is
considered irrelevant for the query. |  |