# Query-Result Connection

For a result to satisfy a query to any degree, there must be some kind of relationship between them. Your first task is to understand what this connection is.

Satisfying the user intent is only the first step in the rating process and covers the minimum requirements for a result to be considered relevant.

## **General Connection**

A result can satisfy user intent for multiple reasons, but most often the result satisfies the most specific part of the query’s intent. This kind of relationship between query and result is called a General Connection.

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| 
[marriot] | 
San Francisco Marriott Union Square | 
General | Satisfies Intent: Users are likely to start their search with the name of the brand “Marriott”. Result satisfies user intent by providing a Marriott close to a user/viewport located in the San Francisco area. |
| [Houston airport] | George Bush Intercontinental | 
General | Satisfies Intent: The user is looking for an airport in the city of Houston. This is an airport in Houston, which satisfies user intent. |
| 
[london, brighton] | 
London | 
General | Satisfies Intent: The query contains two different cities, so it’s likely a routing query. Returning either of the individual results is expected and should be rated Excellent. |

## **Abbreviation/Alternate Name Connection**

The query is an abbreviation or alternate name and the result provides the full and currently accurate name.

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| 
[ewr] | Newark Liberty International Airport | 
Abbreviation | Satisfies Intent: The international airport code for Newark Liberty International Airport is EWR. |
| [sears tower] | Willis Tower | Alternate Name | Satisfies Intent: The result is the correct name of what was formerly known as the Sears Tower. |

## **Category Connection**

The query is a category and the result satisfies that specific category, which may or may not be displayed within the information provided in the result.

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| 
[food] | 
La Ciccia | 
Category | Satisfies Intent: A category search for "food" in a viewport over San Francisco returns an Italian restaurant there. |

## **Spell Correction Connection**

The query is misspelled and the result corrects that issue. This kind of connection only applies to obvious issues when no result for the actual query exists at the user’s location or when the user intent is clearly satisfied by the spell-corrected results.

This kind of correction also happens when a query address does not exist but the result address does, correcting the issue and creating a match.

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| [aple store] | apple store | Spell Correction | Satisfies Intent: The result corrects the user's spelling mistake. |
| 
Lodz | 
Łódź | Spell Correction | Satisfies Intent: This query suggestion for the Polish market adds the diacritics the user may have missed when typing the query. |
| 
[23 Clair street] | 
23 Clair Boulevard | 
Spell Correction | Satisfies Intent: When there is no "Clair St" within or around the viewport/user, consider a “Clair Boulevard" that is close to the viewport/ user as the most likely intent. |

## **Transit Intent Connection**

The result satisfies the transit intent of the query. If the query indicates a specific transit system, the result must match that system. There is also a transit intent connection when a station provides access to more than one transit service and the queried one is included.

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| 
[bart] | 
Richmond BART Station | 
Transit Intent | Satisfies Intent: Result satisfies user intent by providing a close station that runs the requested transit service for a user/viewport located in the Richmond area. |

## **Special Character Connection**

Always consider the specific language conventions. In general, user intent is satisfied when:

- The query contains a special character and the result is a valid variation (if applicable).
- The query does not include a special character but the result with special characters adds value to the user and is therefore considered spell corrected.
- The country or language does not have the special character and it is generally perceived as a form of expression or style (like “café” in English).

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| 
[möllersdorf] | 
Moellersdorf | Special Characters | Satisfies Intent: "oe" is a valid variation for the special character "ö" in the country/language of the result (Germany/German). |

## **Address-Result Connection**

When a query address and a result address are not exactly the same, the kind of connection they have depends on their relationship:

- Street number is the same in both query and result but the unit number is different or missing:
    - If neither address is a street extension, rate result relevance **Good**when:
        - The query contains a unit number and the result does not.
        - The result contains a unit number and the query does not.
        - The query contains one unit number and the result contains another.
- The query is full address including street number and name and the result is the street name only:
    - Since this result is an unlikely secondary intent, rate relevance as **Acceptable.**
- Query is for a street [Main Street, Pleasanton, CA] result is just the locality (Pleasanton, CA).
    - Rate the result relevance **Bad** as it does not satisfy the user intent.

| User Query | Result | Type of Connection | Description |
| --- | --- | --- | --- |
| 
[357 western
ave suite 1] | 357 Western Ave
St. Johnsbury, VT | 
Address | Satisfies Intent: The result does not include the unit number requested in the query so its relevance is rated Good. |
| 
[357 western
ave suite 1] | 357 Western
Ave Suite 2
St. Johnsbury, VT | 
Address | Satisfies Intent: The result has the same street number but a different unit number from the address in the query, so its relevance is rated Good. |
| 
[357 western
ave suite 1] | 
Western Ave
St. Johnsbury, VT | 
Address | Satisfies Intent: Instead of returning the full address requested, the result provides only the street name. This is an unlikely secondary intent, so relevance is demoted to an initial rating of Acceptable. |
| [357 western ave st. johnsbury] | 
St. Johnsbury, VT | 
Address | Does not satisfy user intent: Instead of returning the full address requested, the result provides only the locality. This does not satisfy the user intent, so relevance is rated Bad. |

## **Lack of Connection**

If the result does not satisfy the user intent either because there is no relationship between the query intent and the result or because the connection between the query intent and result will not be immediately obvious to the user, rate the result relevance **Bad**.

| 
User Query | 
Result | Type of Connecti on | 
Description |
| --- | --- | --- | --- |
| 
[airport] | Santa Cruz Boardwalk Santa Cruz | 
None | Does not satisfy user intent: Research shows that there is no connection between the query and the result. Rate Bad. |
| [Raging Waters 2333 South White Rd
San Jose] | 
2333 South White Rd San Jose | 
None | Does not satisfy user intent: Result is for the correct address, but does not include the business named in the query, so users will have no way of knowing if this is truly connected to the business or not. Rate Bad. |
| 
 
[Raging Waters] | 
2333 South White Rd San Jose | 
 
None | Does not satisfy user intent: Query is the name of a business and result is for the correct address, but does not include the business name. Users will have no way of knowing whether or not this address is connected to the business they asked for. Rate Bad. |
| 
[valley fair mall] | Macy’s 2801 Stevens Creek Blvd, Santa Clara | 
None | Does not satisfy user intent: Result is for a store, not a mall. This store is inside the requested mall, but does not satisfy the intent of the query, which is the whole mall.
Rate Bad. |
| 
[macy’s] | Westfield Valley Fair 2855 Stevens Creek Blvd, Santa Clara | 
None | Does not satisfy user intent: Result is for a mall, not a store. This mall contains the requested store, but this result is the whole mall, not the single store the user asked for.. Rate Bad. |
| 
 
[costco] | Costco Gasoline
1601 Coleman Ave, Santa Clara | 
None | Does not satisfy user intent: Result is for a Costco gas station, not a Costco store. The store and the station are at the same address and share a brand name, but the result is not what the user asked for and does not satisfy the query intent. Rate Bad. |
| 
 
[costco gas] | 
Costco 1601
Coleman Ave, Santa Clara | 
None | Does not satisfy user intent: Result is for a Costco store, not a Costco gas station. The store and the station are at the same address and share a brand name, but the result is not what the user asked for and does not satisfy the query intent. Rate Bad. |