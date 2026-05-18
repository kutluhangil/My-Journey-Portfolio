# Minimum Address Component

Whether there is an official street address or not, POIs without an expected address do not need to show it. The locality must be returned whenever a POI is small enough to fit entirely within it. A POI that covers an area overlapping several localities does not require a locality component.

See your Country Specific guidelines for more information on mandatory address components.

| Result | Official Address | Rating and Explanation |  |  |
| --- | --- | --- | --- | --- |
| Quincy Station Chicago, IL | 220 S. Wells St, Chicago, IL 60606 | Address Accuracy | **Correct** |  |
|  |  | This is a transit POI so no street address is expected. The result address is just the locality. The POI is physically located within the given locality and it matches the one listed within the official address. |  |  |
| Stonehenge Amesbury, Salisbury | None | Address Accuracy |  | **Correct** |
|  |  | This is a heritage site so no street address is expected. The result address is just the locality. There is no official street address but since the POI is physically located only within a given locality it can be considered correct. |  |  |
| Tongariro National Park New Zealand | None | Address Accuracy |  | **Correct** |
|  |  | This is a park and heritage site POI so no street address is expected. No locality is listed for this result. Since this POI covers an area that overlaps several localities no locality component is required. |  |  |
| Founders Park Virginia | 351 N Union St, Alexandria, VA 22314 | Address Accuracy |  | **Incorrect** – Locality |
|  |  | This is a park POI so no street address is expected. No locality is listed for this result. Since this park fits into only one locality, Alexandria, the missing locality component must be considered incorrect. |  |  |