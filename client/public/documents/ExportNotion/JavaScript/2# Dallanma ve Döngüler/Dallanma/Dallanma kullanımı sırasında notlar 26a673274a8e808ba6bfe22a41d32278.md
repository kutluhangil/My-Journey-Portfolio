# Dallanma kullanımı sırasında notlar

Artık dallanma (koşullu yapı) oluşturmanın birkaç yolunu biliyorsun. Hangi yöntemi kullanacağına karar verirken aşağıdaki noktaları göz önünde bulundurman önemlidir:

- **`if` ifadesi** evrensel olarak kullanılabilir. `if…else` ve `else…if` ifadeleri, birden fazla koşulu belirtmek gerektiğinde kullanılır. Bu nedenle, bu ifadeler genellikle diğer dallanma yöntemlerinden daha uzundur.
- 
- **Üçlü operatör** fonksiyon içinde değer atamak veya döndürmek için daha uygundur. Üçlü operatörün koşulu her şey olabilir: eşitlik / eşitsizlik kontrolü, büyük / küçük kontrolü, sadece bir şeyin doğruluğunun kontrolü.

```
Sınırlamaları hatırla: yalnızca 2 senaryo olmalı.

```

- `switch` **ifadesi** sadece sıkı eşitliği (===) kontrol eder.

```
switch ifadesini kullanırken daima: —break ifadesini hatırla — yalnızca 1 default durumu kullan, her zaman en sonuncu olmalıdır.
```