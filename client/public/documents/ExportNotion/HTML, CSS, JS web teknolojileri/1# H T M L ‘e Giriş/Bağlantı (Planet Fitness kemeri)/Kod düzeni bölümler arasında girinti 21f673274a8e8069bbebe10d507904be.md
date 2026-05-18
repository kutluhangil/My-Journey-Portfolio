# Kod düzeni: bölümler arasında girinti

Kodun okunabilirliğini artırmak için bölümler arasında boş satır bırakmak önemli. Boş satırlar, kodun mantıksal bloklarını ve bölüm geçişlerini daha belirgin hale getirir.

Kodla çalışmayı kolaylaştırmak ve belgenin yapısını görsel olarak düzenlemek için, tek tek mantıksal blokları boş bir satırla ayırın. Aşağıda iki farklı kod düzenlemesi örneği verilmiştir. Hangisinin bölüm başlangıçlarını daha belirgin hale getirdiğini karşılaştırın:

`❌
<h1>Planet Fatness</h1>
<p>Healthy food is delicious. Doing sport is enjoyable...</p>
<h2>Find us near you</h2>
<ul>
  <li>PF Power Zone</li>
  <li>PF Fit and Fast</li>
  <li>PF Body Sculpting</li>
</ul>

✅
<h1>Planet Fatness</h1>
<p>Healthy food is delicious. Doing sport is enjoyable...</p>

<h2>Find us near you</h2>
<ul>
  <li>PF Power Zone</li>
  <li>PF Fit and Fast</li>
  <li>PF Body Sculpting</li>
</ul>`

şte faydalar bölümünün metni, bir başlık ve bir paragrafla işaretleyin.

```
Why choose Planet Fatness?

We're bringing accessible, on-trend fitness to everyone! We are more than just
a gym - we are a community. We are the crew to help you reach the goals.

```

- Kod, `Why choose Planet Fatness?` metnini içeren bir `<h2>` etiketi içermelidir.
- Kodda metni içeren bir paragraf bulunmalıdır.
- Paragraf `<h2>` başlığının içine yazılmalıdır.

<h2>Why choose Planet Fatness?</h2>
<p>We're bringing accessible, on-trend fitness to everyone! We are more than just
a gym - we are a community. We are the crew to help you reach the goals.</p>

Numaralandırılmış faydalar listesi ekleyin. Aşağıdaki liste maddelerinin metnini alın.

```
No blames, no empty promises, no people who are talking about things
they don't know about. Our mission is to create a safe space for you to
change.

All our coaches are certified experts. You may have tried to work hard
but we'll teach you to work smart.

Your diet is no less important than your training. We believe in an
integrated approach which also includes dietitian's consultations and
motivational activities.

Healthy menu require time and effort? Not in our healthy food bars.
Let's discover the world of tasty low-calorie dishes.

You pay for reaching your goal. And it's our job to help you reach it as
soon as possible.

```

- Kodda `<ol>` şeklinde bir liste etiketi bulunmalıdır.
- `<ol>` etiketi, faydalar bölümünün paragrafından sonra gelmelidir.
- Liste beş öğeden oluşmalıdır.
- Liste öğelerinin metni göreve karşılık gelmelidir

<ol>
<li>No blames, no empty promises, no people who are talking about things
they don't know about. Our mission is to create a safe space for you to change.</li>
<li>All our coaches are certified experts. You may have tried to work hard but we'll teach you to work smart.</li>
<li>Your diet is no less important than your training. We believe in an integrated approach which also includes dietitian's consultations and motivational activities.</li>
<li>Healthy menu require time and effort? Not in our healthy food bars. Let's discover the world of tasty low-calorie dishes.</li>
<li>You pay for reaching your goal. And it's our job to help you reach it as soon as possible.</li>
</ol>