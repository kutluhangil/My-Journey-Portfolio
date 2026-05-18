# Location Intent

When considering how relevant a result is, as part of the user's query intent we must think about their location intent.

- **Explicit location intent**: The query is made clearly and indicates a specific location or area where results are expected.
- **Implicit location intent**: The location expectation is not as clear, so you must use context clues, in the form of user location and viewport, to discover the area in which the user is expecting results.

**Explicit Location**

If the user has explicitly mentioned a location, they have told you exactly where they are thinking of so you can ignore the user and viewport locations.

For example, even if the user is located in Seattle, USA but their query is **[Saks, 611 5th Ave, New York, NY],** we can see they want a specific result located in New York, they are not expecting a result from where they are currently located.

| Query | Expected results | Notes |
| --- | --- | --- |
| [Boston museums] | Museums in the city of Boston | User and viewport locations should be ignored. |
| 
[kfc Philadelphia] | The queried chain business within the stated locality. | User and viewport locations should be ignored. |
| [food near me] | Relevant POIs near the user’s location | Viewport location should be ignored, even if fresh. |
| [nearby/nearest starbucks] | Relevant POIs near the user’s location | Viewport location should be ignored, even if fresh. |
| [my location] | Result placed on the user’s location | Viewport location should be ignored, even if fresh. |

**Implicit Location**

If the user’s location intent is not expressly stated in the query, for example **[chinese]** or **[479 margarita ave]**, use the user location, viewport location, and viewport age to determine the area of expected results.

| Viewport | User | Location Intent |
| --- | --- | --- |
| 
 
 
Fresh | 
Inside Viewport | When the user is within a fresh viewport, take the user location as location intent. Results are generally expected in or near the viewport, and results inside the area cannot be rated Bad because of distance alone. |
|  | 
Outside Viewport | Results are expected in or near the viewport area. All relevant results inside the viewport are eligible for a rating of Excellent. If no results can be found in or near the viewport, consider the user location a secondary location intent. |
|  | Missing | When the user is missing, the viewport is the location intent. |
| 
 
Stale | Inside Viewport | 
When the viewport is stale, consider only the user location as location intent. |
|  | Outside Viewport |  |
|  | Missing | Use the stale viewport as location intent when the user location is missing. |
| Viewport Age Missing | Present or Missing | Consider the viewport fresh when the viewport age is missing. |
| 
Missing entirely | Present | The user location sets the location intent when the viewport is not present. |
|  | 
Missing | When the user location and viewport are missing, the test locale becomes the location intent with a strong focus on prominent results. |