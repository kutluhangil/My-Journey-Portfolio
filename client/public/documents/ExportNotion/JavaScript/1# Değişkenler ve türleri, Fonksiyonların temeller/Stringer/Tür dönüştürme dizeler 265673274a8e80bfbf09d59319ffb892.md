# Tür dönüştürme: dizeler

JavaScript'te tür dönüştürme, bir değerin veri türünü başka bir türe dönüştürme işlemidir. Tür dönüşümleri, farklı veri türleriyle aritmetik işlemler yapılırken veya değerler karşılaştırılırken ortaya çıkabilir. JavaScript'te iki tür tür dönüştürme vardır: açık (explicit) ve örtük (implicit).

# **Explicit Tür Değiştirme**

**Açık tür dönüştürme**, programcı tarafından manuel olarak gerçekleştirilir ve ihtiyaç duyulduğunda kullanılır. Herhangi bir değeri bir string’e dönüştürmek için, sonucu string olarak döndüren yerleşik **`String()`** fonksiyonu kullanılabilir.

`console.log(String(5)); *// "5"*console.log(String(true)); *// "true"*console.log(String(false)); *// "false"*console.log(String(null)); *// "null"*console.log(String(undefined)); *// "undefined"*`

# **Implicit Tür Dönüşümü**

Örtük tür dönüşümleri, işlemler veya hesaplamalar sırasında otomatik olarak gerçekleştirilir. Örneğin, bir dize ile başka bir veri türü arasında bir toplama işlemi (`+`) gerçekleştirirseniz, JavaScript işlenen değeri otomatik olarak bir dizeye dönüştürür ve dize birleştirme işlemini gerçekleştirir.

Burada, dize birleştirme işlemi sırasında tüm ilkel türlerin örtük dönüşümüne örnekler verilmiştir:

`console.log("5" + 3); *// "53"*console.log("5" + true); *// "5true"*console.log("5" + false); *// "5false"*console.log("5" + null); *// "5null"*console.log("5" + undefined); *// "5undefined"*`

Örtük tür dönüştürme, JavaScript’in kullanışlı yerleşik mekanizmalarından biridir; ancak bazen beklenmedik sonuçlara veya hatalara yol açabilir. Bu nedenle, farklı veri türleriyle çalışırken dikkatli olmak ve kodda gerçekleşen tür dönüşümlerini fark edip kontrol etmeyi öğrenmek önemlidir.