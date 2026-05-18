# Asenkron kod

Senkron kodda talimatlar sırayla işlenir. Bu nedenle, bir sonraki talimat, önceki tamamlanana kadar işleme başlayamaz.

```
console.log("First log");
console.log("Second log");
console.log("Third log");

```

Konsolda, `console.log()` işlevlerinin çağrıldığı sırayla üç ardışık ileti olacaktır.

```
First log
Second log
Third log
```

Aşağıdaki kod asenkrondur. `setTimeout()` fonksiyonuyla daha sonra tanışacağız. Şu anda sadece iki parametre aldığını bilmemiz gereken şey şunlardır:

- Zamanın bitiminden sonra çağrılacak olan `callback` fonksiyonu
- Fonksiyonun çağrılacağı zaman

```
// İlk olarak yapılır
console.log("First log");

setTimeout(() => {
	// Üçüncü olarak, 2000 milisaniye (2 saniye) sonra gerçekleştirilir.
  console.log("Second log");
}, 2000);

// İkinci olarak gerçekleştirilir.
console.log("Third log");
```

`setTimeout()` fonksiyonu senkron olarak çalışır ve kendisine iletilen callback fonksiyonunu erteleyerek zamanlayıcı kuyruğuna kaydeder. Bu fonksiyon, belirtilen süre sonunda asenkron olarak çağrılacaktır.

3 farklı `console.log()` komutuna sahip olmamıza rağmen, `setTimeout()`'ın asenkron doğası nedeniyle, çıktı sıraları kod sırasına uygun olmayabilir.

```
First log
Third log
Second log
```

Olay Dizisi:

1. Senkron **`console.log("First log");`** çalıştırılır ve "First log" konsola yazdırılır.
2. İletilen işlevi asenkron olarak çalıştırması için senkron olarak **`setTimeout()`**çalıştırılır. Ancak belirtilen 2000 milisaniyelik (2 saniye) gecikme nedeniyle bu işlevin çalışması bu süreye ertelenir.
3. Senkron **`console.log("Third log");`** çalıştırılır ve "Third log" konsola yazdırılır.
4. 2 saniye sonra **`setTimeout()`** içine iletilen işlevin asenkron çağrısı yapılır ve "Second log" konsola yazdırılır.

---

## **Bu örnekte asenkron mantık nedir?**

**Özet:**

setTimeout, içindeki kodu **hemen çalıştırmaz**, **erteleyip** programın devam etmesine izin verir.

---

### **Kodda olan biten sırayla**

```
console.log("First log");
```

👉 **Hemen çalışır**

Konsol: First log

---

```
setTimeout(() => {
  console.log("Second log");
}, 2000);
```

👉 **Senkron olarak çağrılır**, ama

- İçindeki fonksiyon **çalıştırılmaz**
- 2 saniye sonrası için **kuyruğa alınır**

---

```
console.log("Third log");
```

👉 Program beklemez, **hemen çalışır**

Konsol: Third log

---

### **2 saniye sonra**

- Zaman dolunca setTimeout içindeki fonksiyon çalışır
    
    Konsol: Second log
    

---

## **Çıktı neden bu sırada?**

```
First log
Third log
Second log
```

Çünkü:

- **Senkron kod** → anında çalışır
- **Asenkron kod** → ertelenir
- JavaScript **beklemez**, yoluna devam eder

---

## **Tek cümlelik mantık ✨**

> setTimeout, içindeki kodu ileri bir zamana bırakır; bu sırada JavaScript senkron kodu çalıştırmaya devam eder.
> 

---

## **Akılda kalıcı kural 🧠**

- setTimeout **bekletmez**
- **Sadece söz verir:** “Şu kadar süre sonra çalışacağım”