# Görünürlük kapsamı - Scope

Scope, çalışmakta olan kodda değişkenlerin nerelerde erişilebilir olduğunu belirleyen yapıdır.

**Kapsam Zinciri**, iç içe kapsamlardan oluşan bir yapıdır. Alt kapsamlar, üst kapsamlardaki değişkenlere erişebilir; ancak üst kapsamlar, alt kapsamların değişkenlerine erişemez.

En üst seviyede (yani herhangi bir yapı veya blok dışında) tanımlanan değişkenler global kapsamda yer alır ve tanımlandıktan sonra her yerden erişilebilir hale gelir.

`const globalValue = 10;

console.log(globalValue); *// 10*function foo() {
  console.log(globalValue); *// 10*
}

for (let i = 0; i < 5; i+=1) {
  console.log(globalValue); *// 10*if (i === 2) {
    console.log(globalValue); *// 10*
  }
}`

`if`, `for` gibi yapılarla veya fonksiyonlarla tanımlanan bloklar (`{}`) içinde tanımlanan değişkenler **blok kapsamına** sahiptir ve sadece tanımlandıkları blokta veya iç bloklarında erişilebilir.

`function foo() {
  const a = 20;
  console.log(a); *// 20*for (let i = 0; i < 5; i+=1) {
    console.log(a); *// 20*if (i === 2) {
      console.log(a); *// 20*
    }
  }
}

*// ❌ Hata! a değişkeni bu kapsamda mevcut değil*console.log(a);

for (let i = 0; i < 3; i+=1) {
  *// ❌ Hata! a değişkeni bu kapsamda mevcut değil*console.log(a);
}`

Bunu odaları olan bir ev olarak düşünebilirsiniz.

Kapsamı, odaları olan bir ev gibi düşünebilirsiniz.

Ev global kapsama denk gelir. Her fonksiyon veya blok, evin içinde ayrı birer oda gibidir.

Bir odada tanımlanan değişken sadece o odada veya onun içindeki diğer odalarda erişilebilir. Dışarıdan erişilemez.

`for (let i = 0; i < 5; i+=1) {
  const a = 20;
  console.log(a); *// 20*if (i === 2) {
    const b = 30;
    console.log(a); *// 20*console.log(b); *// 30*
  }

  if (i === 3) {
    console.log(a); *// 20// ❌ Hata! b değişkeni bu kapsamda mevcut değil*console.log(b);
  }
}`

Yorumlayıcı bir değişkene erişmeye çalıştığında, önce mevcut kapsamda arar. Eğer bulamazsa, dış kapsamlara doğru yukarı çıkarak aramaya devam eder. En üst kapsama kadar ulaşmasına rağmen değişken bulunamazsa, tanımsız olduğu için hata oluşur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/660433df-0831-4ea7-9648-3c42586658c6Frame%2048600%20%281%29.jpg)

`name` gibi zaten ayrılmış olan genel değişkenlerin bulunduğunu unutmayın. Bu nedenle kodunuzda global değişkenle aynı isimde bir değişken varsa bu değişkenin kullanıldığı kapsamları çok dikkatli izlemelisiniz. Örnek:

`{
const name="Mango"
console.log(name) *// "Mango"*
}
console.log(name) *// global değişken adının değeri. Konsolda herhangi bir hata olmayacaktır*`

## **🔎 Scope (Kapsam) Nedir?**

Scope = **Değişkenlerin nerelerde görünüp kullanılabileceği** kurallarıdır.

👉 Bunu **odaları olan bir ev** gibi düşün.

- **Ev (Global Scope)** → Herkesin görebildiği, her yerden erişilebilen değişkenler.
- **Oda (Local / Block Scope)** → Sadece o odanın içinde görebileceğin değişkenler.

---

## **🌍 Global Scope (Her yerden erişilebilir)**

Bir değişkeni **evin dışında, bahçede** bıraktığını düşün → Evdeki herkes onu görebilir.

```
const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10 → içeriden de görünüyor
}
foo();
```

📌 Global değişken → Her fonksiyonun, her bloğun içinden ulaşabilirsin.

---

## **🚪 Block Scope (Sadece odanın içinde görünür)**

Bir değişkeni **bir odanın içine bırakırsan**, sadece o odada görebilirsin.

```
function foo() {
  const a = 20;
  console.log(a); // 20 → oda içinde görünüyor
}

console.log(a); // ❌ Hata! Çünkü odanın dışındayız
```

---

## **🔗 Scope Chain (Kapsam Zinciri)**

Bir odada (block/fonksiyon) değişken arandığında:

1. Önce **bulunduğun odada** bakılır.
2. Orada yoksa, **üst odaya** çıkılır.
3. En tepeye (global scope) kadar devam eder.
4. Hiç bulunmazsa → ❌ Hata fırlatır.

---

## **📦 Örnek: İç içe odalar**

```
for (let i = 0; i < 5; i++) {
  const a = 20;
  console.log(a); // 20 (bu odada var)

  if (i === 2) {
    const b = 30;
    console.log(a); // 20 (üst odadan alındı)
    console.log(b); // 30 (bu odada var)
  }

  if (i === 3) {
    console.log(a); // 20 (üst odadan alındı)
    console.log(b); // ❌ Hata! Bu odada b yok
  }
}
```

---

## **🎯 Özet**

- Global Scope = Ev → Herkesin görebildiği değişkenler
- Block/Local Scope = Oda → Sadece odanın içinde geçerli
- İçerideki odalar → dışarıdaki odanın eşyalarını (değişkenlerini) görebilir.
- Ama dışarıdaki odalar → içeridekilere bakamaz.

📌 Bu yüzden değişken isimlerini seçerken dikkat et → aynı isimde global ve local değişken olursa **hangi odada olduğunuza göre farklı değer** kullanılır.

---