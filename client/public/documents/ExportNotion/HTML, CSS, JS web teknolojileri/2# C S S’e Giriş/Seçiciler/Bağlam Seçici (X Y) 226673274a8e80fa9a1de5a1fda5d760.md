# Bağlam Seçici (X Y)

"Bağlam seçici," CSS'de bir öğenin yalnızca belirli bir konteks içinde, yani belirli bir öğenin içinde yer alırken stil verilmesini sağlar. Bu, özellikle karmaşık HTML yapılarında daha doğru ve hedeflenmiş stil uygulamaları için kullanılır.

`<a href="">Bloğumuzu okuyun!</a>

<ul>
  <li><a href="">Spotify</a></li>
  <li><a href="">Netflix</a></li>
</ul>

<ul class="social-links">
  <li><a href="" class="link">Twitter</a></li>
  <li><a href="" class="link">Instagram</a></li>
  <li><a href="" class="link">Facebook</a></li>
</ul>`

Örneğin, tüm bağlantılara stil vermek yerine, sadece `social-links` sınıfına sahip bir listedeki bağlantıların stillerini değiştirmeniz gerekmektedir.

`*/* Bu, belgedeki tüm bağlantılara uygulanır. */*a {
  color: tomato;
}

*/* Bu, sıralanmamış listelerin içinde yer alan bağlantılara uygulanır. */*ul a {
  color: tomato;
}

*/* Bu, sadece "social-links" sınıfına sahip bir etiketin içinde bulunan "link" sınıfına sahip bağlantılara uygulanır. */*.social-links .link {
  color: tomato;
}`

```
Dikkat edin, seçicilerin kombinasyonu sağdan sola okunur.
```

HTML kodunun bulunduğu sekmede, kulüpler bölümündeki listeye ve öğelerine `class` niteliğini ekledik. Alt seçicileri `.class1 .class2`biçimindeki sınıflarla kullanın.

Aşağıdaki özelliklere sahip öğeler için kurallar ekleyin:

- Liste öğelerinin başlığındaki metin rengi `#4caf50` olmalıdır.
- Liste öğelerinin paragraflarındaki metin rengi `#009688` olmalıdır.
- Liste öğelerinin bağlantılarındaki metin rengi `#ffc107` olmalıdır.
- Stil sayfasında `.club-list .title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .title` seçicisi sahip CSS kuralının `color` özelliği `#4caf50` değerine sahip olmalıdır.
- Stil sayfasında `.club-list .text` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .text` seçicisine sahip CSS kuralının `color` özelliği `#009688` değerine sahip olmalıdır.
- Stil sayfasında `.club-list .link` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .link` seçicisine sahip CSS kuralının `color` özelliği `#ffc107` değerine sahip olmalıdır.

![Screen Shot 2025-07-05 at 22.57.52 PM.png](Ba%C4%9Flam%20Se%C3%A7ici%20(X%20Y)/Screen_Shot_2025-07-05_at_22.57.52_PM.png)