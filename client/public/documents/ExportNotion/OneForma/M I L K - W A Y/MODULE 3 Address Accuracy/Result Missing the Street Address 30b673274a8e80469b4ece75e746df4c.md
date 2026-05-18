# Result Missing the Street Address

When both the result and the official webpage show identical but incomplete street addresses (missing street name, street number, or both) and the locality is correct, consider the address **Correct**.

| Result Address | Official Address | Rating and Explanation |  |
| --- | --- | --- | --- |
| 
Pilot Thomas Cardlock
State Hwy 115 & Mustang Drive, Andrews, TX 79714 | 
State Hwy 115 & Mustang Drive, Andrews, TX 79714 | Address Accuracy | **Correct** |
|  |  | This result is for a self-serve gas station for commercial vehicles. While we would normally expect a full address for this type of result, the official website lists only an intersection. The result listing matches the official website, so the result is rated Correct. |  |
| 
Strand Central Park Kiosk
789 5th Ave
Manhattan, NY 10065 | 
E. 60th St & 5th Ave, Manhattan, NY 10065 | Address Accuracy | **Can't Verify** |
|  |  | This result is for an automated book kiosk. While we would normally expect a full address for this type of result, the official website lists only an intersection. The result listing is a full street address, so the result is rated Can't Verify. |  |

When the street address is missing from the result but the official webpage has a street address, consider the address Incorrect.

| Result Address | Official Address | Rating and Explanation |  |
| --- | --- | --- | --- |
| Pilot Thomas Cardlock Andrews, TX 79714 | State Hwy 115 & Mustang Drive, Andrews, TX 79714 | Address Accuracy | **Incorrect** – Street Name |
|  |  | This result is for a self-serve gas station for commercial vehicles. The official website lists an intersection as the address. The result address is missing the two streets (State Hwy 115 & Mustang Dr). Mark the result **Incorrect** – Street Name. |  |
| Stanford University Serra Mall, Stanford, CA 94305 | 450 Serra Mall, Stanford, CA 94305 | Address Accuracy | **Incorrect** – Street Number |
|  |  | The result address is missing the street number given on the official website, therefore the address accuracy is **Incorrect** – Street |  |

## **P.O. Box, Mailing Addresses, and Management Oﬃces**

Addresses that point to a different location or building, such as management offices, P.O. Boxes, mailing addresses, or shared office spaces, are not valid and are rated **Incorrect** – Other Issue.

| Result Address | Official Address | Rating and Explanation |  |
| --- | --- | --- | --- |
| John F. Kennedy International Airport 4 World Trade Center, 150 Greenwich St., New York, NY 10007 | 4 World Trade Center, 150 Greenwich St., New York, NY 10007 | Address Accuracy | **Incorrect** – Other Issue |
|  |  | The address on the official airport site is for The Port Authority of NY & NJ corporate office, which is not the location of the actual airport. Even though the result address matches the address listed on the official site, it is a different location and does not refer to the location of the result POI. |  |