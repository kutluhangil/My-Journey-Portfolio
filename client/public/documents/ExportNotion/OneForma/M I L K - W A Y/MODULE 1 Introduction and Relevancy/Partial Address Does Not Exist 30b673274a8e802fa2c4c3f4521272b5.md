# Partial Address Does Not Exist

Relevance is always rated independently of any data (name, address, or pin accuracy) issues the result may have. This includes results for addresses that do not exist in real life.

When judging distance for existing addresses do not factor in any returned non-existent addresses. Evaluate distance separately for existent and non-existent addresses. Do not demote existing address results when closer, non-existent addresses are returned.

For example, a user in Half Moon Bay, CA is looking for [2373 chestnut] and is presented with three residential addresses. The address in San Francisco is the only one that actually exists. The results in Oakland and Redwood City are not supported by the postal authorities and no evidence can be found that the addresses in either city exist.

**Query and Screenshot**

[2373 chestnut]

User and Fresh Viewport around Half Moon Bay, CA

![](https://my.oneforma.com/blobweb/Recruiter/courses/1229/course/assets/mw29.jpg)

| Result | Rating and Explanation |  |
| --- | --- | --- |
| 
 
2373 Chestnut St,
San Francisco | Relevance | **Excellent** |
|  | This is the closest existing result. The address in Redwood City is disregarded and its relevance is not promoted nor demoted for Distance/Prominence because it does not exist. |  |
| 
 
2373 Chestnut St,
Redwood City | Relevance | **Excellent** |
|  | This is closer to the user than the existing result in San Francisco. Because data issues are not part of the relevance rating, the result is rated **Excellent** due to proximity and user intent. Address accuracy is rated **Incorrect – Address does not exist.** |  |
| 
 
2373 Chestnut St,
Oakland | Relevance | **Good/Acceptable**
**(Distance/Prominence)** |
|  | This is significantly farther away than the existing result in San Francisco and the non- existent result in Redwood City, and is demoted in relevance. Address accuracy is rated **Incorrect – Address does not exist.** |  |