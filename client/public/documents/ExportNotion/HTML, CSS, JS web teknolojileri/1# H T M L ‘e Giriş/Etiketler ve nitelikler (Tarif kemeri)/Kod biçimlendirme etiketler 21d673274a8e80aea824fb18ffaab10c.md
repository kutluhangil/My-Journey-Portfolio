# Kod biçimlendirme: etiketler

Web sitesi geliştirme sürecinde, kodu düzenlerken geri dönmek gerekebilir. Genellikle bir projede birden fazla geliştirici çalışır. Kod standartlara uygun şekilde düzenlenmemişse, okunabilirliği kaybolur ve sonuç olarak geliştirme hızı düşer.

Kod düzenleme standartlarını özetleyelim:

1. Her yeni etiketi yeni bir satıra yerleştirin.

`❌
<h1>Şirket hakkında</h1><p>Lorem ipsum dolor</p>

✅
<h1>Şirket hakkında</h1>
<p>Lorem ipsum dolor</p>`

2. Eğer içerik bir satırdan azsa, açılış ve kapanış etiketleri içeriğin hemen yanında aynı satırda olmalıdır.

`❌ 
<h1>
	Şirket hakkında
</h1>

✅ 
<h1>Şirket hakkında</h1>`

3. Eğer etiket içeriği **birkaç satırı** kaplıyorsa, açılış ve kapanış etiketleri yan yana değil, alt alta olmalıdır.

`❌
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus,
  fuga ducimus eveniet sed debitis asperiores, corporis exercitationem</p>

✅
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta 
	officia hic voluptatibus voluptatum impedit velit voluptate cum laboriosam quasi.
</p>`

4. Birkaç özellik boşlukla ayrılır. Özellikle değeri arasında sadece bir `=` işareti bulunur ve özelliğin değeri çift tırnak içinde bulunur.

`❌ 
<img src= "cat.jpg"   alt= "cute cat" />

✅ 
<img src="cat.jpg" alt="cute cat" />`

5. İç içe geçmiş `<li>` öğeleri, `<ul>` etiketinin hemen altında değil, 2 veya 4 boşluk içeren bir girintiyle yer alır. Bu girinti tüm proje boyunca tutarlı olmalıdır.

`❌
<h1>Dünyanın en pahalı 3 tatil köyü</h1>
<ul>
  <li>North Island Lodge, Seyşeller'de</li>
    <li>Laucala Resort, Fiji</li>
<li>Khwai River Lodge, Botsvana</li>
</ul>

✅
<h1>Dünyanın en pahalı 3 tatil köyü</h1>

<ul>
  <li>North Island Lodge, Seyşeller'de</li>
  <li>Laucala Resort, Fiji</li>
  <li>Khwai River Lodge, Botsvana</li>
</ul>`

Kod biçimlendirme standartları listesi ilerleyen bölümlerde güncellenecektir. Sizin göreviniz bunları mümkün olan en kısa sürede kodunuzda kullanmaya başlamaktır.