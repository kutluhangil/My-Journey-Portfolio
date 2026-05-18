# Result Relevance Rating

**Result Relevance Rating**

After reviewing the user's query, you will look at the result returned and decide how relevant it is considering both the user's intent and distance/prominence.

Relevance is always rated independently of any data (name/classification, address, or pin)inaccuracies. This means that when rating relevance we always assume that the result exists (even if research reveals the location is closed) and that the data presented is correct.

Always rate against the real world: If there is a better result available but it is not shown, demote the existing result(s) while considering the missing one(s).

Relevance for each result is found by assessing the relationship between:

- Satisfying user intent
- Prominence
- Distance

**Research!
As you will see doing a side search - opening another window/tab and researching the user's query and real world results are a very important aspect throughout this project. Being able to research and find out information is a vital skill that will help you be successful**

| Relevance Rating | Explanation | Notes |
| --- | --- | --- |
| 
 
 
 
**Navigational** | The most likely result implied by the user’s query, location, and/or viewport that completely satisfies the user’s distinct intent.
A distinct user intent is defined by a combination of the following characteristics:
• Extreme prominence (e.g. Eiffel Tower)
• Uniqueness (e.g. complete address)
• Proximity (e.g. incomplete address that points to an unambiguous option that is is extremely close) | 
 
 
A rating of Navigational for one result does not prevent other results from satisfying the query to a lesser degree. |
| 
**Excellent** | A high-quality result that clearly satisfies the user’s intent. Multiple results can be considered high quality. | Highest possible initial rating for ambiguous queries as well as for queries that are not eligible for a Navigational rating. |
| **Good** | Only partially satisfies the user’s intent due to relevance, prominence, or distance. | 
Any relevance rating of Good or below requires an indication of the reason(s) for the demotion:
• **User Intent** Issue
• **Distance/Prominence** Issue |
| **Acceptable** | Technically satisfies the user’s intent but does so poorly due to relevance or distance. |  |
| 
**Bad** | Does not satisfy the user’s intent due to lack of relevance or great distance (when closer satisfying results are available). |  |

**Relevance Rating Simplified**

Remember, to always think like the user. The relevance rating is fundamentally deciding how satisfied/happy the result makes the user.

The ratings can be thought of as:

- Navigational - yes
    - The is an exact result the user is looking for.
- Excellent
    - This is a result that makes the user extremely happy. It's a result which is useful, answers what they were looking for, is fantastic in terms of proximity etc.
- Good
    - The user thinks the result is okay. It may be particularly satisfying in one aspect such as relevance but could be better in other aspects such as distance.
- Acceptable
    - The user can see the reason the result has been returned technically, maybe it is correct in one aspect but it is very poor in another aspect such as much to far away. The user would be quite disappointed.
- Bad
    - The user would be very disappointed with this result, maybe even angry. You can imagine them looking at the result and think 'this is useless to me' or it's a result they wouldn't even consider because there are other more satisfying results that are more relevant, closer etc.