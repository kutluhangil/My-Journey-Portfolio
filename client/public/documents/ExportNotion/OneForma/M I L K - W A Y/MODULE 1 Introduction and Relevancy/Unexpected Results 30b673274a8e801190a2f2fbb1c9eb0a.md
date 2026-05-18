# Unexpected Results

Straightforward queries can have unexpected results which at first glance might not fit the query intent. For these kinds of results, consider:

- Is there a logical relationship between the query and the result?
- How likely is it that the user is going to be looking for this result given the query and location intent?

A result can partially satisfy a secondary intent due to:

- Prominence of the feature
- Transit intent

Promoting for prominence should only occur for internationally prominent POIs.

In the examples below, two ratings are provided for some results: Good and Acceptable. The difference between the two ratings rests in how well the result satisfies user intent. Choose Good if there is a strong likelihood that it will satisfy user intent and Acceptable if it is less likely to satisfy.

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| 
 
[mission & 14th street]
User and fresh viewport in San Francisco, CA | 
Mission St & 14th St
San Francisco, CA | Relevance | **Navigational** |
|  |  | Query is for an intersection and the result satisfies the user intent. |  |
|  | 
Mission St & 14th St Bus Stop
San Francisco, CA | Relevance | **Good/Acceptable** (User Intent) |
|  |  | 
Result is for the bus stop at the queried intersection. The bus stop carries the name of the intersection and users tend to look for intersections when seeking transit POIs. |  |
| 
[soho]
 
User and viewport in London, UK | 
Soho
London, UK | Relevance | **Navigational** |
|  |  | 
Query is for a neighborhood in London and the result satisfies the user intent. |  |
|  | 
Mildreds Restaurant
45 Lexington St, Carnaby, London W1F 9AN, UK | Relevance | **Bad (User Intent)** |
|  |  | 
Result is for a specific restaurant in Soho. It is very unlikely to satisfy the user intent. |  |
| 
[stevens creek blvd cupertino]
User and fresh viewport in Cupertino, CA | 
Little Sheep Mongolian Hot Pot
19062 Stevens Creek Blvd, Cupertino, CA, 95014 | Relevance | **Bad (User Intent)** |
|  |  | The query is for a street and the result is a specific business on that street. This specific result is unlikely to satisfy the broad intent of the query. |  |
|  | 
19062 Stevens Creek Blvd
Cupertino, CA, 95014 | Relevance | **Bad (User Intent)** |
|  |  | The result includes a street number when the query is for a street, making this result too specific for the more general query. |  |

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| [The Slanted Door
One Ferry Building #3 San Francisco,
California 94111] | 
One Ferry Building #3 One Ferry Building #3 San Francisco, CA 94111 | Relevance | **Bad (User Intent)** |
|  |  | Result is for the address and not the business stated in the query, so it does not satisfy the user intent. |  |
| [One Ferry Building #3 San Francisco, California 94111] | 
The Slanted Door
One Ferry Building #3 San Francisco, CA 94111 | Relevance | **Navigational** |
|  |  | The query is for an address and the result is the business at this address. Including the business name provides additional correct information. |  |
| 
[san francisco]
User and fresh viewport in San Francisco, CA | 
San Francisco
San Francisco, CA | Relevance | **Navigational** |
|  |  | Query is for the city of San Francisco and the result satisfies the user intent. |  |
|  | 
San Francisco International Airport San Francisco, CA | Relevance | **Good (User Intent)** |
|  |  | The result represents the airport within the queried locality, which satisfies the secondary transit intent. |  |
| 
 
 
The Pruneyard | The Pruneyard
1875 South Bascom Ave Campbell, CA | Relevance | **Navigational** |
|  |  | The query is for a mall and the result is the mall the user asked for. |  |
|  | 
The Pruneyard Cinema 1875 South Bascom Ave Campbell, CA | Relevance | **Bad (User Intent)** |
|  |  | The query is for an entire mall and the result is for a cinema inside the mall. Even though the cinema shares the mall’s name and address, it does not match the query intent. |  |