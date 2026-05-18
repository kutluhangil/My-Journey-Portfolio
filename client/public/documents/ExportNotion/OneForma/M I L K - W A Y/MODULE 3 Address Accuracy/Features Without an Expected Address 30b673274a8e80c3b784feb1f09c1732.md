# Features Without an Expected Address

![](https://my.oneforma.com/blobweb/Recruiter/courses/1229/course/assets/nFjaBP/stock-image.jpg)

**There are several kinds of features where no address is expected by the user. This could mean no street name or number or, in some cases, no address components of any kind, are expected to be shown. These types of results have different rating criteria when it comes to Address Accuracy.**

## **Natural Features**

Natural features are specific landforms or ecosystems like rivers, mountains, jungles, and other geological features. They have names that can be rated, but typically do not have a street address, so natural feature results should be returned without any street address components. If a street address is present, it is considered Incorrect – Other Issue, even when pointing to a building that is associated with the feature (like a ranger station or visitor center).

- [ ]  A locality may be an acceptable address if it is appropriate for the size of the feature, as it can help locate a small feature, like a hot spring, within the locality. For larger features, such as a mountain, a locality may not make sense and would be rated **Incorrect** – Other Issue.
- [ ]  The state the feature is in can also be provided as the feature’s address and rated **Correct**.
- [ ]  If a postal code is included, it must be C**orrect.**
- [ ]  If a very large or expansive natural feature, like a river or mountain, spans more than one country, any one of these countries can be a **Correct** address. If no country at all appears, this is also **Correct**.

Parks and other protected areas are artificial boundaries created to help protect the natural feature. Those POIs are often named after the natural feature they contain. In cases where a feature can be considered a POI, such as Mount Rushmore or a state park beach, the official address can be returned. There might be other natural features within a park that reference the park name as part of their address details.

Treat landmasses like islands and continents as natural features with no expectation of a street address. If one is returned, rate it Incorrect – Other Issue.

| Result Details | Official Address | Rating and Explanation |
| --- | --- | --- |
| Wreck Beach
Vancouver | No official address | The beach can be confirmed as located within Vancouver and is therefore rated Correct. |
| Wreck Beach NW Marine Dr, Vancouver | 
No official address | The result contains the name of a street that provides access to the beach. But the street is not expected and therefore rated Incorrect – Other Issue. |
| Wreck Beach
W King Edward Ave, Vancouver | 
No official address | The result contains the name of a street that is nowhere near the beach. The street is not expected and therefore rated Incorrect – Other Issue. |
| 
Mendenhall Glacier
Juneau, AK 99801 | 
No official address | This glacier is located in the borough of Juneau. The postal code in the address is associated with that locality, therefore both components should be considered Correct. |
| Mendenhall Glacier 8510 Mendenhall Loop Rd, Juneau | 
No official address | The given address belongs to the overseeing Forest Office. The glacier should not have this address and is rated Incorrect – Other Issue. |
| 
Mount Rushmore
13000 HWY 244 #31-1,
Keystone, SD | 
13000 Highway 244
Building 31, Suite 1
Keystone, SD 57751 | Mount Rushmore is both a mountain and a monument within its own national park. The address given on the official National Parks Service website confirms the result address as Correct. |

## **POIs Without an Expected Address**

POIs without an expected address differ from regular POIs and businesses in that the user would not expect a street name and number to be shown.

These types of POIs include, but are not limited to:

- Parks (Golf courses and theme parks not included)
- Monuments
- National Landmarks
- Park-like heritage sites
- Bridges
- Squares
- Parking lots
- Transit POIs - these can include airports (including airport terminals), ferry ports, subways, bike share stations, train and bus stops

The rating criteria described in the sections below apply to all features without an expected address. See Official Address Present if this kind of POI has an official address