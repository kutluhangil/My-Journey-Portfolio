# Distance

Generally, the farther away the result is from the area of expected results, the less desirable it becomes. This is especially true for queries highly driven by distance to the user/viewport, such as chain businesses, hospitals, pharmacies, or grocery stores.

Because the user can be offered many possible results that are all very similar, the closest entities providing the expected service can be considered the best options. Results which are farther away are less relevant and should be demoted according to their additional distance. Defining what is close and what is far depends on the context of each individual query. Factors affecting distance include:

- Number of possible results in the real world
- Distribution of all possible results
- Population density (rural, urban, or suburban)

Distance refers to the direct distance from one point to another and is measured via a straight line. There is no need to account for the actual distance required to travel from one point to the other, such as driving distance.

**Let's consider the viewpoint and location intent:**

**Fresh Viewpoint, User InsideFresh Viewport, User OutsideStale Viewport**

Location Intent:

When the viewport is stale, whether the user is inside or outside of the viewport, consider only the user as the location intent.

Note: Use the stale viewport as location intent when the user is missing.

**Do not demote a result for distance when:**

- **This is the closest possible result, even if it is far away from the area of expected results.**
- **Other, closer results are found to be closed or non-existent.**

**Demote a result for distance when:**

- **Other results that satisfy the query and provide the same or similar service are closer.**

### **Distance vs. Prominence**

Once you’ve decided how relevant the result is based on user intent, consider the result in the context of all possible results in the real world. Use the distance to the user or viewport and the prominence of the result to decide if a demotion should be applied.

A result’s fit to user intent, prominence, and distance should all be relative to the query and the context around the query. Before deciding whether to demote because of prominence or distance, it’s important to look at:

- The type of area around the result – rural, urban, or suburban
- The number of businesses that satisfy the query
- The distance to the user or viewport

The following examples of multiple query/result pairs will demonstrate how to interpret the relationship between distance, prominence, and satisfying the user’s intent. The examples address common rating situations and explain how to evaluate the relevance of the results