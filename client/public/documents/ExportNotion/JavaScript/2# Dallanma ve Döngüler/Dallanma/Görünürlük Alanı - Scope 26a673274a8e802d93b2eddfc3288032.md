# Görünürlük Alanı - Scope

**Scope (kapsam) alanı**, değişkenlerin ve fonksiyonların belirli kod bölümlerinde erişilebilir olup olmadığını belirler.

Bir değişken veya fonksiyon tanımlandığında, yalnızca belirli bir kod alanında "görünür" olur. Bu durum, o değişkenin ya da fonksiyonun nerede ve nasıl kullanılabileceğini doğrudan etkiler.

Kod bloklarının dışında tanımlanan değişkenler ve fonksiyonlar — yani **global scope** (küresel kapsam) içinde yer alanlar — programın herhangi bir yerinden erişilebilir durumdadır.

Bu tür tanımlamalar **global değişkenler** olarak adlandırılır.

`*// Global değişken*
const value = "I'm a global variable";

if (true) {
	*// Global değişkenine başvurulabilir.*console.log(value); *// "I'm a global variable"*
}

*// Global değişkenine başvurulabilir*console.log(value); *// "I'm a global variable"*`

`value` değişkeni, genel (global) görünürlük alanında tanımlanmıştır. Yani herhangi bir kod bloğunun — bizim örneğimizde `if` yapısının — dışında yer alır. Bu şekilde tanımlanan bir değişkene programın herhangi bir yerinden erişilebilir.

Süslü parantezler `{}` kullanan her yapı (koşullar, fonksiyonlar, döngüler vb.) yeni bir **yerel (local) scope**, yani blok görünürlük alanı oluşturur.

Bu blok içinde tanımlanan değişkenler yalnızca **o kod bloğu içinde** kullanılabilir. Bu tür değişkenler **yerel değişkenler** olarak adlandırılır.

`if (true) {
  *// Yerel değişken*
	const value = "I'm a local variable";
  console.log(value); *// "I'm a local variable"*
}

*// Hata: Yerel değişken blok dışında görünmez*console.log(value); *// ReferenceError: value is not defined*`

`value` değişkeni, bir `if` yapısının gövdesinde — yani yalnızca `if` bloğunun sınırlarıyla tanımlanan **yerel (local) görünürlük alanı** içinde — tanımlanmıştır.

Bu nedenle, `value` değişkenine yalnızca `if` bloğu içinden erişilebilir. Bloğun dışından erişilmeye çalışılırsa, hata alınır.

Yerel görünürlük alanlarının iç içe geçtiği bir durumu açıklamak için basit bir görsel yapı düşünebiliriz:

- En dışta yer alan ve tüm kodu kapsayan bir **global görünürlük alanı** bulunur.
- Bu global alan içinde, örneğin üç ayrı `if` bloğu ile tanımlanmış yerel blok görünürlük alanları olsun: **A**, **B** ve **C**.

Her bir blok yalnızca kendi içinde tanımlanan değişkenlere doğrudan erişebilir. İç bloklar dış bloklara erişebilirken, dış bloklar içte tanımlanmış değişkenlere erişemez.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/48353d5a-5346-4cd8-9093-e2da2c8604c1Frame%2048587.jpg)

Görünürlük alanları (scope) iç içe geçebilir ve bu iç içelikte derinlik açısından bir sınır yoktur. Ancak her görünürlük alanı belirli bir prensibe göre çalışır.

Bir görünürlük alanı şu değişkenlere erişebilir:

- Kendi içinde tanımlanmış olan değişkenlere
- Hiyerarşik olarak **üst seviyedeki** görünürlük alanlarında tanımlanmış değişkenlere

Ancak, alt seviyedeki (daha derin bloklarda tanımlı) değişkenlere erişim mümkün değildir.

Bir görünürlük alanındaki kod, yalnızca kendi içindeki ve hiyerarşik olarak **daha üstteki** alanlarda tanımlanan değişkenlere erişebilir. Ancak **daha alt seviyedeki** (iç bloklardaki) değişkenlere erişemez.

Örneğin:

- **A bloğundaki kod**, `Global` alanda tanımlanan değişkenlere erişebilir; ancak **B** ve **C** bloklarında tanımlanan değişkenlere erişemez.
- **B bloğundaki kod**, `Global` ve **A** bloklarında tanımlanan değişkenlere erişebilir; ancak **C** bloğunda tanımlananlara erişemez.
- **C bloğundaki kod**, `Global`, **A** ve **B** bloklarında tanımlanan tüm değişkenlere erişebilir.

`const globalVar = "Global";

console.log(globalVar); *// globalVar'a genel erişim// aVar, bVar ve cVar'a erişim yok*if(true) {
	const aVar = "A";
	console.log(globalVar); *// A bloğundan globalVariable'ye erişim*console.log(aVar); *// A bloğundan aVar'a erişim// bVar ve cVar'a erişim yok*if(true) {
		const bVar = "B";
		console.log(globalVar); *// Blok B'den globalVariable'a erişim*console.log(aVar); *// Blok B'den aVar'a erişim*console.log(bVar); *// Blok B'den bVar'a erişim// cVar'a erişim yok*
	}
}

console.log(globalVar); *// globalVar'a, global alandaki erişim// aVar, bVar ve cVar'a erişim yok*if(true) {
	const cVar = "C";
  console.log(globalVariable); *// C bloğundan globalVar'a erişim*console.log(cVar); *// C bloğundan cVar'a erişim// aVar ve bVar'a erişim yok*
}

console.log(globalVar); *// Global alandaki globalVar'a erişim// aVar, bVar ve cVar'a erişim yok*`