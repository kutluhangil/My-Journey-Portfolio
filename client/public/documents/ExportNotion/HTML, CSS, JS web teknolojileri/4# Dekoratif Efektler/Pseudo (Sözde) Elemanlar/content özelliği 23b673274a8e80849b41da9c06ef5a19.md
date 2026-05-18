# content özelliği

*Eğer "Her şeyi yaptım ama sözde sınıflar çalışmıyor" gibi bir durumla karşılaşırsanız, `content` özelliğini kullanıp kullanmadığınızı kontrol edin. Bu, sıkça karşılaşılan bir sorundur.*

`content` özelliği, sözde öğenin içine metin içeriği eklemenizi sağlar. Bu özellik zorunludur; bu özellik olmadan tarayıcı sözde öğeyi oluşturmaz. Düzeninizde metin içeriğine ihtiyacınız yoksa, bunu boş bir dize olarak ayarlamalısınız.

`<div class="box">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia itaque quia
  nobis fugit amet adipisci, corrupti animi, iusto eius a sed totam voluptas
  porro. Dolorem aliquid rerum magnam eligendi aspernatur.
</div>`

Bir seçicide, basit bir seçiciden (etiket, sınıf, tanımlayıcı) sonra eklenmesi gereken yalnızca bir sözde öğe kullanabilirsiniz.

`before` ve `after` için ortak stiller ayarlamak istiyorsanız, seçicilerin listesini içeren ayrı bir kural oluşturun.

`❌ */* Yanlış tasarlanmış genel stiller */*.box::before::after {
  font-size: 30px;
}

*/* Düzeltme */*.box::before {
  content: 'before bölümündeki bu metin';
  color: orange;
}

.box::after {
  content: 'after bölümündeki bu metin';
  color: teal;
}

✅ */* Doğru tasarlanmış ortak stiller */*.box::before, .box::after {
	font-size: 30px;
}`

Yazısal içerik eklemek için sözde elemanlar kullanmayın. Onlar yalnızca dekoratif efektler oluşturmak için kullanılır. Sözde bir elemanın içindeki metin, yardımcı teknolojiler ve arama motorları tarafından algılanmaz ve ayrıca stil dosyası yüklenmezse kullanıcıya erişilemez olur.