# Sözde dizi arguments

`arguments` özel değişkeni, bir fonksiyon çağrıldığında otomatik olarak oluşturulur ve o fonksiyona geçirilen tüm argümanları içerir. Bu değişken sayesinde, fonksiyona kaç argüman gelmiş olursa olsun hepsine erişilebilir.

`function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);`

Bu örnekte, `sum(2, 5)` çağrıldığında, `arguments` sözde dizisi 2 ve 5 değerlerini içerir ve konsola yazdırılır.

`arguments`, bir dizi gibi görünse de aslında bir **sözde-dizidir** (pseudo-array). Bu nedenle:

- `length` gibi bazı dizi özelliklerine sahiptir,
- İndeks kullanarak elemanlara erişilebilir,
- Ancak dizi metodlarına (örneğin `.map()`, `.forEach()`) sahip değildir,
- Yine de `for...of` gibi döngülerle üzerinden geçilebilir.

Herhangi sayıda argümanı çarpan bir fonksiyon yazarken `arguments` kullanılabilir. İşte bir örnek:

`function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); *//  6*console.log(multiply(1, 2, 3, 4)); *//  24*console.log(multiply(1, 2, 3, 4, 5)); *//  120*`

Eğer `arguments` ile çalışmanız gerekiyorsa ve dizi metodlarına erişmek istiyorsanız, `Array.from()` kullanarak onu gerçek bir diziye dönüştürebilirsiniz.

`function foo() {
  *// args değişkeni tüm argümanların tam bir dizisini içerecektir*const args = Array.from(arguments);
	return args.join("-");
}

foo(1, 2, 3); *// Return "1-2-3"*`

# **Amaç**

`createReversedArr()` fonksiyonu herhangi bir sayıda bağımsız değişken alabilir. Fonksiyonun kodunu, tüm bağımsız değişkenlerden oluşan bir dizi döndürecek şekilde tamamlayın, ancak bunlar dizide ters sırada olmalıdır. Yani, `createReversedArr(1, 2, 3)` öğesini çağırdığınızda, işlev `[3, 2, 1]` dizisini döndürmelidir. Bir döngü veya diziye uygulanan ve öğeleri ters sırada olan yeni bir dizi döndüren `toReversed()` dizi metodunu kullanın.

# **Testler**

- `createReversedArr()` fonksiyonu bildirilir
- `CreateReversedArr(12, 85, 37, 4)` fonksiyonu çağrıldığında `[4,37,85,12]` döndürülür
- `CreateReversedArr(164, 48, 291)` fonksiyonu çağrıldığında `[291,48,164]` döndürülür
- `CreateReversedArr(412, 371, 94, 63, 176)` fonksiyonu çağrıldığında `[176,63,94,371,412]` döndürülür
- `createReversedArr()` çağrısı `[]` döndürür

`function createReversedArr() {}`

`function createReversedArr() {
  const args = Array.from(arguments);
  return args.toReversed();
}`