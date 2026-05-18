# Name of Business/POI Results

Pay special attention to the language and script of brand and chain names. See your Country Specific guidelines for more information.

| Expected Language | Explanation | Example |
| --- | --- | --- |
| 
 
 
 
 
Query | 
The query gives clues as to the language in which the user expects results. Any result that matches the most specific part of the query or corrects a spelling issue in the query is considered to be a result in an expected language. This also includes remote results in foreign countries.
But: Consider official result name variations and default to the test locale for very short queries. | Expected language/script:
• Test locale: en_US
• Result in California, USA
• Query: [mystery]
• Result name: Mystery Spot
Result name is in English and satisfies the query.
Unexpected language/script:
• Test locale: en_US
• Result in California, USA
• Query: [market]
• Result name: ေစျးကွက်
The result name is “Market” in Burmese script. |

| Expected Language | Explanation | Example |
| --- | --- | --- |
| 
 
 
 
 
 
Test Locale and
Query Locale | The language of the test locale is generally considered an expected language and script.
If the query is so short that the language cannot be identified, assume that the query language is that of the test locale.
When the test locale and the query locale differ, consider the query locale an expected language, as it provides more detailed information.
For example, here the Query Locale is set to English in Indonesia. Therefore English, not Indonesian, is an expected language:
• Query Locale: en_ID
• Test Locale: id_ID | Expected language/script:
• Test locale: es_ES
• Result in California, USA
• Query: [college]
• Result name: Colegio Skyline
The result name is in Spanish, which matches the language of the test locale, so this result title is expected and acceptable.
Unexpected language/script:
• Test locale: en_US
• Result in California, USA
• Query: [college]
• Result name: Colegio Skyline
“Colegio” is in Spanish, but the test locale is in English, so the result title is in an unexpected language. |
| 
 
 
 
 
 
Result region | 
 
 
 
 
The language/script of the result’s region is expected as the result language. | Expected language/script:
• Test locale: en_US
• Result in Rio de Janeiro, BR
• Query: [beach]
• Result name: Praia de Copacabana Result satisfies the category “beach” and the result’s name is in Latin script and the Portuguese language, which is the language of Brazil.
Unexpected language/script:
• Test locale: en_US
• Result in Rio, BR
• Query: [beach]
• Result name: Playa de Copacabana Though the result name is in the same script as the test locale and query language, returning the name in Spanish is unexpected language because the language of Brazil is Portuguese. |

| Expected Language | Explanation | Example |
| --- | --- | --- |
| 
 
 
 
 
 
 
 
Brand, chain, and business names | 
 
 
 
Any official brand, chain , or business name in the language of the result’s region or the official brand name commonly used in the market, even if it is not in the language of the query, test locale, or result region, is expected.
In bilingual areas, official names in any of the languages of the area are expected, unless otherwise specified in the Country Specific Guidelines. | Expected language/script:
• Test locale: ar_SA
• Suggestion in Riyadh, SA
• ]ماكدونالدز[ Query:
• Result name: McDonald's
The name of this restaurant is in the language of the official brand name.
Expected language/script:
• Test locale: ar_SA
• Suggestion in Riyadh, SA
• ]ماكدونالدز[ Query:
• ]ماكدونالدز[ name: Result
 
The name of this restaurant is in the language of the region
Unexpected language/script:
• Test locale: ar_SA
• Suggestion in Riyadh, SA
• ]ماكدونالدز[ Query:
• Result name: [ϫμϖϗϸϖ]
 
The name of this restaurant is in Japanese, which is not the language of the query, the locale, the result region, or the official brand name. |