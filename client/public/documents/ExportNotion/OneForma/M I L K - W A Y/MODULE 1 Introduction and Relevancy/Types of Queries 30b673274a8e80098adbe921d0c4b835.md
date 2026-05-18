# Types of Queries

You must understand each user query and research to understand it if needed.

Let's look at some common query types for this project and think about the user's intent in each case.

**Address queries**

Address queries contain all or part of a complete address, including street number, street name,locality, state, country, and postal code.

| Query | Explanation |
| --- | --- |
| [717 E El Camino Real, Sunnyvale, CA 94087] | This is an address query in the form of a full address. It contains a street number, street name, locality, state and postal code. |
| [Stevens Creek Blvd, Cupertino CA] | This is an address query for a street. The user is looking for the location of this particular street. |
| [Ireland] | This is an address query for a country. The user is looking for the location of the country of Ireland. |
| 
[New York] | This ambiguous query could refer to New York city or New York state. You will find more information on prominence, user location, and the viewport in the following sections to help you determine the intent of this query. |

**Point of Interest (POI) queries**

A point of interest (POI) is a location that people find interesting or useful. POIs can be locally or internationally known. These guidelines use a very broad definition of POI in which businesses are also considered POIs.

| Query | Explanation |
| --- | --- |
| [London Bridge] | This is a query for a famous POI in London. |
| [Danube River] | This is a query for a river in Europe. |
| [Charing Cross Station] | This is a query for a transit station in London. |
| [Union Square, SF] | This is a query for a location in San Francisco. |

**Business queries**

Business queries contain the name of a specific business.

| Query | Explanation |
| --- | --- |
| 
[Zola Palo alto] | This is a business query with a location modifier (Palo Alto). The user is looking for a specific restaurant (Zola) in Palo Alto, CA. Queries can include location modifiers, like city names, that make them more specific. |
| 
[Bookasaurus] | This is a business query with a request for a specific store in Sunnyvale, CA. The viewport and user location can help pinpoint the desired location for such a query. |
| [Starbucks, 7 Boulevard Poissonnière, 75002 Paris, France] | This is a query for a chain business followed by a specific address. Chain businesses are businesses that have more than one location, and include everything from national chains, like Starbucks, down to small local chains, like Burrito Boyz. Target, Auchan, Albert Heijn, and Boots are all chain businesses. |
| [Target sunnyvale] | This is a business query with a request for the chain business Target and location modifier of Sunnyvale, CA. |

**Category queries**

A category refers to a group of entities that share a set of characteristics.

| Query | Explanation |
| --- | --- |
| 
[fast fod] | This query is for locations where fast food is served. Assume the user wanted the correct version of the query when the actual query contains a simple misspelling. |
| [bus stop] | This query requests the locations of bus stops. |
| [coffee] | This query requests the locations of businesses that sell coffee. |
| [gym] | This query requests the locations of fitness centers. |
| [gas San Francisco] | This query requests the locations of gas stations with a location modifier
of San Francisco. |

**Product and Service Queries**

A product or service query is a query about something that can be purchased at or is offered by a business or POI.

| Query | Explanation |
| --- | --- |
| [vanilla latte] | This query requests the locations of businesses that sell a specific type of coffee drink. |
| [deep-tissue massage ] | This query requests the locations of businesses that offer a unique style of massage. |
| [school supplies] | This query requests the locations of businesses that sell pencils, pens, notebooks, and everything else students need for school. |
| [truck tire repair] | This query requests the locations of businesses that offer truck tire repair services. |
| [ATV tours] | This query requests the locations of businesses where ATV tours are available. |
| [perms] | Not every hair salon offers perms, but this query requests the locations of the ones that do. |
| [deep dish pizza Detroit] | This query requests the locations of places that sell a specific type of pizza in a particular city. |

**Coordinates and “My location” queries**

Some queries are simply a set of coordinates or the words ”my location” (or something similar).

| Query | Explanation |
| --- | --- |
| [36.082857,
-115.172916] | The user has specified a location using lat/long coordinates. |
| [my location] | The user has typed these (or similar) words to find out where they are. |

**Emoji Queries**

Some queries are not made using words. Emojis represent the category they picture. Use the most literal meaning.

| Query | Explanation |
| --- | --- |
| **⛽** | The fuel pump represents a search for places to get gas. |
| **🍕** | The pizza slice stands for the query “pizza.” |
| **☕** | The coffee cup represents the query “coffee.” |

**Queries with no maps intent**

Some queries have no map intent - the user is looking for information or a result where a map result will not be satisfying.

- Do not refer to a physical location
- Do refer to a physical location but have a an information intent rather than a location intent
- Refer to a brand or company with a predominantly online intent, like Groupon or LinkedIn
- Ask about the time or weather in a specific location• Are requests for specific products or services
    - High-level categories like “restaurant,” “shoe store” or “dentist” do have maps location intent but specific products and services, like “spaghetti carbonara,” “jimmy choo pumps,” or “deep gum cleaning,” do not.

Rate all results for these queries **Bad**.

Examples of queries with no map intent:

- **[eureka temperature]**
- **[time in new york city]**
- **[nokona left handed baseball gloves]**
- **[facebook]**
- **[is cucumber a fruit or a vegetable]**

![](https://my.oneforma.com/blobweb/Recruiter/courses/1229/course/assets/SujeEd/stock-image.png)

**Research is Key!**

use your research skills and knowledge to fully understand the user's intent and the types of results found:

- Use a search engine to investigate and understand the query intent
- Use official resources like businesses’ official websites, national postal service websites, and government websites whenever possible
- Use your own local knowledge
- Use the information provided in the rating interface