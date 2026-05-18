# Country

The country is a “nice to have” piece of information, but should always be included when the result is located in a country other than the test locale. If missing, rate Incorrect and select the Country checkbox.

| Test Locale | Address in Result | Address in Reality | Rating and Explanation |  |
| --- | --- | --- | --- | --- |
| 
en_US | 1384 Navarro Dr, Sunnyvale, CA 94087 | 1384 Navarro Dr, Sunnyvale, CA 94087 | Address Accuracy | **Correct** |
|  |  |  | This is a correct address since the test locale is the USA. |  |
| 
de_DE | 1384 Navarro Dr, Sunnyvale, CA,94087, USA | 1384 Navarro Dr, Sunnyvale, CA 94087, USA | Address Accuracy | **Correct** |
|  |  |  | This address includes the country name since it is outside of Germany, which is the test locale. |  |
| 
en_US | Museumplein 6, 1071 DJ Amsterdam | Museumplein 6, 1071 DJ Amsterdam, Netherlands | Address Accuracy | **Incorrect** – Country |
|  |  |  | The country is mandatory in this example because the address is in the Netherlands, which is outside the user's US test locale. The country checkbox should be selected. |  |

### **Address Does Not Exist**

![](https://my.oneforma.com/blobweb/Recruiter/courses/1229/course/assets/eq_0lY/stock-image.jpg)

**An address-type result needs to be associated with a building or with a plot of land that has been officially assigned that address. If you find strong evidence that there is no building at the address or that no plot of land has been officially assigned the address, rate "Incorrect – Address does not exist" and leave a detailed comment including links. If there are not enough resources available to make an informed decision, rate Can’t Verify.**

Within markets that use street number extensions, if the result offers an address with a generic street number, but the street number alone does not exist without an extension (e.g. result returns “163 Main St.”, but only “163A Main St.” and “163B Main St.” exist), rate the address as Incorrect – Address does not exist, since the street number without the extension is not a valid, real-life address. Note that street number extensions differ from the building numbers referred to in the Unit/Apt section.

In rare cases, an existing street address can be found in a different locality. Always mark such cases as Incorrect – Address does not exist and not as Incorrect – Locality.

**Use the Incorrect – Address does not exist checkbox for any address result that doesn’t exist, like a street or sub-locality result. This rating should not be applied to POI addresses.**