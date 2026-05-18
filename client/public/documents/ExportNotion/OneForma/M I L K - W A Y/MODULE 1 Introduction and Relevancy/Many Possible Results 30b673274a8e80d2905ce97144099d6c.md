# Many Possible Results

Some queries, like [starbucks], have many results that could satisfy the user. In cases like this, distance is more important than prominence, so results that are closer to the user’s location/viewport should be rated higher than results that are farther away. To illustrate the high density of Starbucks, possible results are shown as purple dots.

**User Inside Fresh Viewport**

When the user is inside the viewport, consider all possible results, including real-world results not returned for rating (purple dots), and demote by distance from the user.

**Query and Screenshot**

[starbucks]

User in Alameda with fresh viewport in San Francisco, CA

![](https://my.oneforma.com/blobweb/Recruiter/courses/1229/course/assets/Capture.jpg)

| Result | Rating and Explanation |  |
| --- | --- | --- |
| CD Starbucks 865 Market Street | Relevance | **Excellent** |
|  | Rate **Excellent** for Starbucks locations that are in close proximity to the user. |  |
| 
@ Starbucks
170 O’Farrell St | Relevance | **Good (Distance/Prominence)** |
|  | Rate **Good** for locations that are a bit farther away from the closest relevant locations to the user. |  |
| 
@ Starbucks
264 Kearny St | Relevance | **Acceptable (Distance/ Prominence)** |
|  | Rate **Acceptable** for relevant locations that are even farther away from the user but still inside the viewport. |  |
| 
© Starbucks 580 California St | Relevance | **Bad (Distance/Prominence)** |
|  | When there are many locations close to the user, rate **Bad** for locations that are significantly farther away and outside the viewport. |  |
| 
® Starbucks 140 Mason Street | Relevance | **Excellent** |
|  | Rate **Excellent** for Starbucks locations that are in close proximity to the user, even if they are outside the viewport. |  |

**User Outside Fresh Viewport**

When a user is outside the viewport, results are expected in or near the viewport. In cases where there are a large number of possible results inside the viewport, even if they are not returned for rating (purple dots), rate **Bad** for those outside it.

**Query and Screenshot**

[starbucks]

User in Alameda with fresh viewport in San Francisco, CA

![](https://my.oneforma.com/blobweb/Recruiter/courses/1229/course/assets/mw21.jpg)

| Result | Rating and Explanation |  |
| --- | --- | --- |
| 
CD Starbucks 865 Market Street | Relevance | **Excellent** |
|  | Rate any Starbucks within the fresh viewport
**Excellent** when the user is outside the viewport. |  |
| 
@ Starbucks
170 O’Farrell St | Relevance | Excellent |
|  | Rate any Starbucks within the fresh viewport
Excellent when the user is outside the viewport. |  |
| 
@ Starbucks
264 Kearny St | Relevance | **Excellent** |
|  | Rate any Starbucks within the fresh viewport
**Excellent** when the user is outside the viewport. |  |
| 
© Starbucks 580 California St | Relevance | **Bad (Distance/Prominence)** |
|  | When there are many possible results within the viewport, including those not returned for rating (purple dots), rate **Bad** for results outside it. |  |
| 
 
® Starbucks 140 Mason Street | 
Relevance | 
**Bad (Distance/Prominence)** |
|  | When there are many possible results within the viewport, including those not returned for rating (purple dots), rate **Bad** for results outside it. |  |