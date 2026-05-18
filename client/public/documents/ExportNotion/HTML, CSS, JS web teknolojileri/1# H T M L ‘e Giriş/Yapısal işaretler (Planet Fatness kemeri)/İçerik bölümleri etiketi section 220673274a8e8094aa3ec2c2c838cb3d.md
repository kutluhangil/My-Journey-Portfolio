# İçerik bölümleri etiketi <section>

İçeriği içeriğe göre gruplamak için hangi etiketleri zaten biliyorsunuz?
Başlıklar, yapısal biçimlendirme etiketleri (<header>, <main>, <footer>), paragraf etiketi.
Bir tane daha öğrenmenin zamanı geldi!

Web sayfaları genellikle görsel ve mantıksal bölümlere ayrılır. `<section>` etiketi, bu bölümleri işaretlemek ve HTML işaretlemesinin anlamlılığını artırmak için kullanılır. Bu etiket, içeriği tematik olarak gruplamak için kullanılır ve başlık ile birlikte daha anlamlı hale gelir.

`<h2>İşletmemiz hakkında geri bildirim</h2>
<p>Ne kadar havalı olduğumuza dair bir paragraf metin</p>
<ul>
	*<!-- İncelemelerin listesi-->*</ul>`

Şirketin sağladığı avantajların bir bölümü.

`<h2>Avantajlarımız</h2>
<ul>
	*<!-- Faydaları açıklayan blokların listesi -->*</ul>`

`<section>` etiketi, içerikleri anlamlı bir şekilde gruplamak için kullanılan bir konteyner etiketidir. Bu etiket, HTML işaretlemesinin anlamlılığını artırarak içerikleri belirli bölümlere ayırır. Semantik olarak, `<section>` etiketi `header` veya `footer` etiketlerinden farklı olarak, belirli bir yapı veya bölüm değil, daha geniş bir içerik bölümü temsil eder. Bu nedenle, `<section>` etiketi, belgenin içeriğini bölümlere ve alt bölümlere ayırmak için kullanılır.

```
<section> Etiketinin Kullanım Durumları:
— Bir belgenin belirli bir bölümü adlandırılabilir, ancak bu bölüm site dışında bağımsız olarak anlamlı olmayabilir. Örneğin, bir web sayfasındaki "Yorumlar" bölümü, yalnızca sayfa bağlamında anlamlıdır.
— İçeriğin hem tarayıcılar hem de geliştiriciler tarafından anlaşılabilir olmasını sağlamak için anlamsal etiketler kullanılır.<section> etiketi bu amaçla kullanılır.

* Bir bölüm için bir başlık kullanılması arzu edilir, ancak başlık kullanmak zorunlu değildir.

```

`<section>` etiketini eklemeden **ÖNCE** ve **SONRA** biçimlendirmeyi karşılaştırın. `<section>` etiketi kullanılmadan, içeriği ayıran sadece başlıklar ve boşluklar bulunur. Bu, içerik bloklarının birbirinden ayrıldığını gösterir ancak tarayıcılar ve arama motorları için bu bloklar tek bir kapsayıcı gibi görünebilir. `<section>` etiketi kullanıldığında, her bölüm kendi başlığı ve içeriği ile daha belirgin hale gelir, bu da arama motorları ve geliştiriciler için daha anlamlı ve yönetilebilir bir yapı sağlar.

`<!-- önce -->
<main>
	<h1>Dental clinic website</h1>
	
	<h2>About</h2>
	<p>Bölüm içeriği About</p>
	
	<h2>Features</h2>
	<p>Bölüm içeriği Features</p>
	
	<h2>Team</h2>
	<p>Bölüm içeriği Team</p>
	
	<h2>Testimonials</h2>
	<p>Bölüm içeriği Testimonials</p>
</main>`

`<section>` etiketinin kullanıldığı örnekte, iyi yapılandırılmış mantıksal bloklardan oluşan bir dizi görüyoruz,

- robotlar ve arama motorları tarafından kolayca tanınan;
- geliştiricinin çalışması için uygun olan.

`<!-- Sonra-->
<main>
	<h1>Dental clinic website</h1>
	
	<section>
		<h2>About</h2>
		<p>Bölüm içeriği About</p>
	</section>
	
	<section>
		<h2>Features</h2>
		<p>Bölüm içeriği Features</p>
	</section>
	
	<section>
		<h2>Team</h2>
		<p>Bölüm içeriği Team</p>
	</section>
	
	<section>
		<h2>Testimonials</h2>
		<p>Bölüm içeriği Testimonials</p>
	</section>
</main>`

Bir geliştiricinin kod düzenleyicide gezinmeyi nasıl kullanabileceğini görün.