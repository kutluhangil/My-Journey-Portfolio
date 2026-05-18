# Official address is a partial street address

When the result address is more specific than the official address it can be rated as **Can’t Verify** or **Incorrect**, unless another official source can be found to confirm the returned address.

Full Address: When the result contains a full address it should be rated **Can’t Verify** if all of the following apply:

- It does not belong to another POI/entity
- The street within the result address matches the street listed as the official address

If the full address belongs to another building not associated with the POI it should be rated **Incorrect**.

Consider St Nicholas’ Church in Berlin, Germany:

| Result | Official Address | Rating and Explanation |  |
| --- | --- | --- | --- |
| St. Nicholas’ Church Nikolaikirchplatz 3, 10178 Berlin, Germany | 
 
 
Nikolaikirchplatz 10178 Berlin, Germany | Address Accuracy | **Can’t Verify** |
|  |  | The result POI is a landmark church and museum. The result has a full address. The street number is not associated with any other POI or entity and the street within the address matches the official street address. |  |
| St. Nicholas’ Church Nikolaikirchplatz 5, 10178 Berlin, Germany |  | Address Accuracy | **Incorrect** – Street Number |
|  | The result has a full address. The street number belongs to a building not associated with the POI and should be considered incorrect. The street within the address matches the official street address. |  |  |
| St. Nicholas’ Church Poststraße 1, 10178 Berlin, Germany |  | Address Accuracy | **Incorrect** – Street Number, Street Name |
|  | The result has a full address. The street name does not match the official street name, so both address components should be considered incorrect. |  |  |