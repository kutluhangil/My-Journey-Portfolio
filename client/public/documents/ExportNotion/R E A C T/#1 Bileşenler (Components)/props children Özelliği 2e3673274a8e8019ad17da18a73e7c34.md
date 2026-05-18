# props.children Özelliği

Daha önce bileşenleri tekil, kendiliğinden kapanan etiketler olarak kullandık ve onlara verileri prop'lar aracılığıyla açıkça ilettik. Bu kullanım, bileşenlerin yaygın kullanım senaryolarını karşılamaktadır.

```
// Bildirim
const Card = ({ text }) => {
  return <div>{text}</div>;
};

// Kullanım
<Card text="Message as a text prop" />
```

Şimdi, bileşenleri açılış ve kapanış etiketleri arasında içerik ile kullanmanın ne anlama geldiğini inceleyelim:

`<Card>Text between opening and closing tag</Card>`

Bu şekilde bileşeni tarayıcıda görüntülediğimizde, Card bileşeninin açılış ve kapanış etiketleri arasındaki metin otomatik olarak görünmez. Çünkü React, bu içeriğin nerede görüntüleneceğini bilmez — bunun bileşen içinde nerede işleneceği belirtilmemiştir.

Açılış ve kapanış etiketi arasındaki her şey, tüm bileşenlerde bulunan özel bir özellik olan `props.children` içinde mevcuttur.

```
// Bildirim
const Card = ({ children }) => {
  return <div>{children}</div>;
};

// Kullanım
<Card>Text between opening and closing tag</Card>
```

`props.children`, etiketler, metin veya başka bileşenler gibi her türlü içeriği içerebilir.

```
// Bildirim
const Card = ({ children }) => {
  return <div>{children}</div>;
};

// Kullanım
<Card>
	<h1>Card title</h1>
	<p>Text between opening and closing tag</p>
</Card>
```

`props.children` kavramı, bileşenlerin kompozisyon yoluyla yapılandırılmasına olanak tanır ve daha karmaşık uygulamalarda sıkça kullanılır. Şu anda bileşenlerle ilgili öğrendiğimiz bu aşamada, `props.children` özelliğinin, bileşenin açılış ve kapanış etiketleri arasındaki içeriği taşıdığını bilmek önemlidir. Bu içerik, bileşen içinde belirli bir noktada yerleştirilebilir ve işlenebilir.