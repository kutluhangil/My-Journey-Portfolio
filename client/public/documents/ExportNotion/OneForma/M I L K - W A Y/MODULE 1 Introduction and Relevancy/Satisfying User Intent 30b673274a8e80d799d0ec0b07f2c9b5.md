# Satisfying User Intent

The user’s intent can be determined by considering the query, the user’s location/viewport, and your local knowledge. Sometimes queries are ambiguous or can have multiple interpretations.

In order to determine a query’s primary and secondary intent, look at the relationship between the query and the result. Ask yourself:

- Is there a logical relationship between the query and the result?
- How likely is the user to be looking for this result given the query and the location intent?

To put it simply:

***What do you think the user wants, what will make them happy?***

| Intent Type | Definition | Highest Initial Rating |
| --- | --- | --- |
| Primary Intent | Result satisfies the most obvious and likely user intent | **Navigational** or
**Excellent** |
| Secondary Intent | A result which is less likely to be the user’s intent. Results matching secondary intent are often not as prominent as the originally queried entity but still satisfy the intent of the query. | **Good (User Intent)** |
| Unlikely Intent | A result which matches the query but is very unlikely to be the user’s intent. | **Acceptable (User Intent)** |
| Non-Relevant Intent | There are issues that make the result useless for the user. | **Bad (User Intent)** |

**For any Relevance Rating of *Good or below*, you must select the appropriate check box(es) to indicate the reason(s)for demotion: *User Intent and/or Distance/Prominence*. If both reasons apply, use both checkboxes.**

**If the Rating is Good or Below...**

If you give a result a rating of **good or below** you will be asked to complete two checkboxes. You can use these to select the reason(s) for your rating.

| Checkbox | Explanation | Notes |
| --- | --- | --- |
| User Intent issue | Select when the demotion is due to a result only partially fulfilling the query intent. | 
 
If both issues were reasons for your relevance rating, select both checkboxes. |
| 
Distance/ Prominence issue | Select when the demotion is due to a distance issue based on the user or viewport location or when you demoted for a result that is less prominent based on the initial query intent. You can also select this option when the query asks for something at a specific location and the result is not at or near the requested location. |  |

You will also be asked to write a comment if you rate a result **Good or below** and for any data issues not rated Correct/Perfect and should explain the reasons for all rating demotions. Be sure to:

- **Include user intent**: It’s useful to indicate what you think the user intent is.• Refer to the guidelines: If the demotion is due to a guideline instruction, note the guideline section you used to make your decision.
- **Include source**s: If you find incorrect information in a result, your comment should include the correct information and its source. Be sure that any links you include lead directly to the information you provide. If they don’t, include a link to the source you used and explain how to get to the information from there.
- Use URL shorteners when inserting long links into your comments
- **Be concise**: Don’t write elaborate comments. Be short and specific.
- **Comment in English**: Your comments will sometimes be reviewed or used by people who are not familiar with your test locale or its language. Comments in English are understandable to the widest possible audience.

| Issue | Expectations | Example Rating and Comment |
| --- | --- | --- |
| 
Relevance Demotions | The comment should explain the reasoning behind your rating. A demotion may be due to distance from the user’s location compared to similar results/ potential results, secondary intent, or other reasons. | Relevance -> Good (Distance/ Prominence)
Comment: Demoted -1 for a few closer real world locations in the Middletown/ Anchorage area |
| 
 
Data Issues | Include a comment when you rate a Name, Address, or Pin something other than Correct or Perfect or you give a rating of Closed/Does not Exist or Unexpected Language. | Address Accuracy -> Incorrect — Street Number
Comment: Correct street number is: 332 W El Camino Real, Sunnyvale, CA 94087 Pin Accuracy -> Wrong
Comment: Wrong pin: correct location is:
52.368067, 4.895389 |

When determining intent, keep in mind:

- It is rare that a navigational query will have multiple primary intents.
- Rating one result ***Navigational*** and one ***Excellent*** within the same set of results is also rare, but possible.
- A navigational query will most often produce one result that satisfies the distinct intent and multiple other results that satisfy a secondary intent or do not satisfy the intent at all. This means there will be one result rated ***Navigational*** and all other results will be rated ***Good*** or ***Acceptable*** for secondary intent or ***Bad*** for not satisfying user intent.
- Most non-navigational queries will produce results that are rated from ***Excellent*** to ***Bad***.
- Since the queries were made by actual users, there will be cases where a query is gibberish or has no maps intent. Do your best to understand it and see how well the results fit the user’s intent, but don't be shy about assigning a **Bad** rating if a result doesn’t fit.

**Satisfying the user intent is only the first step in the rating process and covers the minimum requirements for a result to be considered relevant. The rating determined by deciding how well intent is met is called the Initial Rating. Distance and prominence will be considered next in order to establish the final rating.**