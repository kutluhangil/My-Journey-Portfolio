# Transit POI Scenarios

**Multiple Transit POIs with the Same Name**

Many large transit POIs include multiple means of transportation at the same location. For example, large airports can have metro or train service within the same location, or train stations can be a hub for trains, metros, and buses. Other transit POIs at the queried transit POI should be treated as secondary intent with an initial rating of Good, but can also be considered Acceptable if the result is less likely to satisfy the user’s intent. Additional demotions can be applied based on the prominence of the returned feature.

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| 
 
 
[hamburg airport]
 
User and fresh viewport in Germany | Hamburg Airport
22335 Hamburg, Germany | Relevance | **Navigational** |
|  |  | Result is for the queried airport. |  |
|  | 
Hamburg Airport Station
22335 Hamburg, Germany | Relevance | **Good (User Intent)** |
|  |  | 
Result refers to the train station at Hamburg Airport. |  |
|  | 
Lufthansa Basis
22335 Hamburg, Germany | Relevance | **Bad (User Intent)** |
|  |  | The result is for a small bus stop that seems to service the Lufthansa training center. The result does not share the same name as the queried transit. Therefore, the result is not relevant. |  |
| 
 
 
 
[Embarcadero Station]
User and fresh viewport in San Jose, CA | 
 
Embarcadero Station
San Francisco, CA | Relevance | **Navigational** |
|  |  | The query is for a unique transit station. The result (a unique BART station) fully satisfies the user’s intent. |  |
|  | 
Ferry Building & Embarcadero Station San Francisco, CA | Relevance | **Acceptable (User Intent & Distance/Prominence)** |
|  |  | The result (a historic streetcar) name includes the queried station name, but has low prominence, given that there is a unique Embarcadero Station. Therefore, the result should be demoted based on user intent. |  |
|  | Washington St & Embarcadero Station San Francisco, CA | Relevance | **Acceptable (User Intent & Distance/Prominence)** |
|  |  | The result (a historic streetcar) name includes the queried station name, but has low prominence, given that there is a unique Embarcadero Station. Therefore, the result should be demoted based on user intent. |  |

**POIs and Transit Intent**

A non-transit POI can be associated with a transit POI with the same name. You can establish the relationship between the two entities by using local knowledge, researching prominence, and understanding how well the result satisfies user intent. This way you will learn whether the query has a distinct navigational intent or if the prominence of the two POIs that share a similar name is so strong that both can be the intent.

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| [mall of America]
User and fresh viewport in
Minnesota | 
Mall of America 60 E Broadway, Bloomington, MN
55425 United States | Relevance | **Navigational** |
|  |  | 
Result is POI requested in the query. |  |
|  | Mall of America Station
8240 24th Ave S Minneapolis, MN 55425
United States | 
Relevance | **Good/Acceptable (User Intent & Distance/Prominence**) |
|  |  | Even though the station has the same name as the POI, it is not prominent and therefore demoted. |  |
| 
 
[Piccadilly circus]
User and viewport in London, UK | 
 
Piccadilly Circus
London, UK | Relevance | **Excellent** |
|  |  | Result is for famous square in London. The square and the train station are both equally prominent and local users would be looking for the station while tourists would be looking for the square. As both features are equally prominent, it is hard to establish a distinct user |  |
|  | Piccadilly Circus Station
London, UK | Relevance | **Excellent** |
|  |  | Result is the famous station that is just as prominent as the square. |  |
| 
 
[dam square]
User and viewport in Amsterdam | Dam Square Dam Square, Amsterdam, Netherlands | Relevance | **Navigational** |
|  |  | The result is the famous square in Amsterdam. |  |
|  | Dam Square Line 2 Dam Square, Amsterdam, Netherlands | Relevance | **Good/Acceptable**
**(Distance/Prominence)** |
|  |  | Result is for the tram stop for line 2. The stop is on a street adjacent to Dam Square. However, it is not prominent and should be demoted. |  |

**Transit Queries**

The criteria described above should be applied to understand the transit queries. Additionally, if it is determined that a query has a clear navigational intent, all other results will be **Bad** (see [12th st oakland bart] example below). If a result is promoted to **Navigational**, other results that could potentially satisfy the user intent should be demoted further for distance and prominence (see [BART daly city] and [stockport station] examples below). In general, the fewer the results that satisfy the user intent, the farther away the results can be and still be considered relevant. The more available results that can satisfy the user intent, the closer they need to be.

| Query | Result | Rating and Explanation |  |
| --- | --- | --- | --- |
| 
 
 
 
[12th st oakland bart]
User and viewport in California | 
 
12th St. Oakland Station
Oakland, CA | Relevance | **Navigational** |
|  |  | The query is for a specific BART station with a unique name that is not the same as the name of the locality where the station is found. (Compare this to the examples below). This result matches the query exactly and fully satisfies the user’s intent for this specific station. |  |
|  | 
19th St. Oakland Station
Oakland, CA | Relevance | **Bad (User Intent Issue)** |
|  |  | The query intent is for a specific BART station with a unique name that is not the same as the name of the place where the station is located. The result returned is for a different BART station and does not satisfy the user intent. This result should receive a rating of Bad. |  |
| 
 
 
 
 
 
 
[BART daly city]
User and viewport in California | 
Daly City Station
Daly City, CA | Relevance | **Navigational** |
|  |  | The query intent is for a BART station in Daly City. Research shows that there is only one BART station in Daly City and its name is Daly City Station, so this result fully satisfies the user’s intent. |  |
|  | 
 
 
Colma Station
Colma, CA | Relevance | **Good (Distance/Prominence)** |
|  |  | 
The query intent is for a BART station within Daly City. This result fits intent as it is a BART station. This station is in a neighboring locality just outside of the requested locality. Even though the station is outside of the requested locality, it provides a choice of BART stations in the area for the user.
This result is demoted due to distance. |  |
|  | 
San Francisco International Airport Station
San Francisco International Airport, CA | Relevance | **Acceptable (Distance/Prominence)** |
|  |  | 
The query intent is for a BART station in Daly City. This result fits intent as it is a BART station. This station is in a neighboring locality, but is farther away than the Colma station and is demoted due to distance. |  |

| Query | Result | Rating and Explanation |  |  |
| --- | --- | --- | --- | --- |
| 
 
 
 
 
 
[stockport station]
User and viewport in Stockport, England | 
 
Stockport Station
Stockport, England | Relevance | **Navigational** |  |
|  |  | 
The query intent is for a station in Stockport. Research shows that there are several stations in Stockport, but only one named Stockport Station, so this result fully satisfies the user’s intent. |  |  |
|  | Davenport Station
Stockport, England | Relevance | **Excellent** |  |
|  |  | The query intent is for a station in Stockport. There is one station with a name that matches the query exactly, which receives the Navigational rating. All other stations within the queried locality should receive Excellent. |  |  |
|  | Heaton Chapel Station
Stockport, England |  |  |  |
|  | 
 
 
Burnage Station
Manchester, England | Relevance | **Good (Distance/Prominence)** |  |
|  |  | This station is just outside of the requested locality, in a neighboring locality. Even though the station is outside of the requested locality, it provides a choice of stations in the area for the user. The fewer choices there are available, the farther away the results can be and still be relevant. This result is demoted due to distance. |  |  |
| 
 
[san jose station]
User and viewport in California | 
San Jose Diridon Station
San Jose, CA | Relevance | **Excellent** |  |
|  |  | 
The query intent is for a station in San Jose. There are several stations in San Jose, but no stations with a name that matches the query exactly, so we should rate every station within the queried locality equally. There are two stations that match the user’s intent, so both results should be rated Excellent. |  |  |
|  | 
Tamien Station
San Jose, CA |  |  |  |
|  | 
 
Lawrence Caltrain Station
Sunnyvale, CA | Relevance | **Good (Distance/Prominence)** |  |
|  |  | 
This station is just outside of the requested locality, in a neighboring locality. Even though the station is outside of the requested locality, it provides a choice of stations in the area for the user. The fewer choices there are available, the farther away the results can be and still be relevant. |  |  |

|  | 
Sunnyvale Caltrain Station
Sunnyvale, CA | Relevance | **Acceptable (Distance/Prominence)** |
| --- | --- | --- | --- |
|  |  | This station is just outside of the requested locality, in a neighboring locality. Even though the station is outside of the requested locality, it provides a choice of stations in the area for the user. The fewer choices there are available, the farther away the results can be and still be relevant. |  |
|  | 
Palo Alto Train Station
Palo Alto, CA | Relevance | **Bad (Distance/Prominence)** |
|  |  | Result is far from the queried station. The farther away the result is from the queried station, the less likely it is that it will be considered relevant, so the relevance rating should be lowered. |  |

**Stops vs. Stations**

A transit stop is a location typically designated by a bench or covered waiting area, a posted sign, or street markings. Transit stations, on the other hand, are typically larger areas associated with major structures including, but not limited to, platforms, ticketing offices, enclosed waiting/seating areas, or terminal buildings/structures encompassing the transit area. The term “station” is primarily used to refer to transit locations that are larger and typically a terminal housing multiple routes. All stations are stops, but not all stops are stations.

Since all stations are stops, but not all stops are stations, returning a station for a stop query is ok, but returning a stop when the query is station should result in a rating of **Bad** with the **User Inten**t checkbox selected. Try to identify these corresponding terms in the test locale and understand the relationship between them.

For the category [bus stops], relevance should be based mainly on distance from the user location or fresh viewport and the physical size of the bus stop. If the result is a small bus stop in a rural area and the bus stop is among the closest ones to the user’s location intent, it should be rated **Excellen**t. On the other hand, if the result is a large bus hub that is a bit farther away from the user, it should still receive an **Excellent** because of its size, regardless of the fact that there are closer, smaller bus stops. Results close to the user should not be demoted because there is a larger bus stop farther away, instead, the large bus stop should be promoted because of its importance.

| Query | Result | Rating and Explanation |  |  |
| --- | --- | --- | --- | --- |
| 
 
[bus station in san francisco]
User and viewport in San Francisco, CA | Greyhound Lines
200 Folsom St
San Francisco, CA 94105 | Relevance | **Excellent** |  |
|  |  | This is a major bus station in San Francisco where a user can take Greyhound buses. |  |  |
|  | Main St & Folsom St
San Francisco, CA 94105 | 
Relevance | 
**Bad (User Intent)** |  |
|  |  | 
These results are small local bus stops and do not satisfy the user intent for a bus station. |  |  |
|  | 5th St & Howard St
San Francisco, CA 94103 |  |  |  |
|  | 
Sacramento Bus Station
420 Richards Blvd
Sacramento, CA 95811 | Relevance | **Bad (Distance/Prominence)** |  |
|  |  | This result is another Greyhound station, but it is in Sacramento, quite far from San Francisco.
There are closer real world results we could return. This result is too far and should be demoted due to distance. |  |  |
| 
 
 
 
 
[bus stop]
 
User and viewport in Chicago, IL | 
Chicago Bus Station 630 W Harrison St Chicago, IL 60607 | Relevance | **Excellent** |  |
|  |  | 
The query intent is for a bus stop. This result is a Greyhound station, which fully satisfies the user's intent. This result is close to the user. |  |  |
|  | 
W Harrison St & S Jefferson St Chicago, IL 60607 | Relevance | **Excellent** |  |
|  |  | The query intent is for a bus stop. This result is a Greyhound station, which fully satisfies the user's intent. This result is close to the user. |  |  |
|  | 
Harlem Ave & W 115th St
Worth, IL 60482 | Relevance | **Bad (Distance/Prominence)** |  |
|  |  | The query intent is for a bus stop. This result is a bus stop and matches the user's intent, but there are many bus stops closer to the user in the real world we should be returning instead.
Therefore, this result should be demoted due to |  |  |

**Parking Intent**

When evaluating [parking] queries, note that:

- Free and paid parking are equally relevant.
- Parking time limits do not affect relevance rating. Your rating should not be changed by the fact that a parking lot is long term, short term, or limited-time (like a two-hour limit) parking.
- Parking for small cars, large cars, RVs, or motorcycles is equally relevant.
- If you can find evidence that a result is for private parking that cannot be used by the general public, give it a rating of Bad.

Public parking vs Private Parking

Public parking is:

- Parking that is a mix of residential/staff/permit and visitor parking and is not in a gated community
- Parking that can be used only when visiting a certain business (limited-use parking)

Private parking is:

- Parking that is residents only, staff only, or by permit only
- Parking in a gated community

**If you cannot confirm whether parking is public or private, give the result the benefit of the doubt and consider it public parking.**