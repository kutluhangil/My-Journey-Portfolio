# Tür dönüştürme: diziler - (Type Cast Etme - Arrayler)

Veri türü uyumluluğu gerektiren işlemler veya karşılaştırmalar yapmak gerektiğinde dizi türlerinin açık ve örtük dönüşümü gerçekleştirilir.

# **Dizi → Dize (String)**

Bir diziyi dizeye dönüştürürken, dizinin tüm öğeleri virgülle ayrılmış tek bir dizede birleştirilir.

`const array = [1, true, "Poly"];
console.log(String(array));*// "1,true,Poly"*console.log(array + "5"); *// "1,true,Poly5"*`

# **Dizi → Sayı**

Bir diziyi sayıya dönüştürürken, algoritma iki adımdan oluşur:

- ilk olarak, dizi bir dizeye dönüştürülür,
- ve ardından bu dize sayısal bir değere dönüştürülür.

Örneğin, boş bir dizi, 0 sayısına dönüştürülen boş bir dizeye dönüştürülür.

`console.log(Number([])); *// 0*console.log(Number([1])); *// 1*console.log(Number([1, 2, 3])); *// NaN*`

# **Dizi → Boolean değeri (boolean)**

Bir diziyi boolean değerine dönüştürürken, boş bir dizi bile olsa herhangi bir dizi `true` değerine dönüştürülür.

`const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); *// true*console.log(Boolean(nonEmptyArray)); *// true*if(emptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}

if(nonEmptyArray) {
	console.log("if is in progress")
} else {
	console.log("else is not performed")
}`