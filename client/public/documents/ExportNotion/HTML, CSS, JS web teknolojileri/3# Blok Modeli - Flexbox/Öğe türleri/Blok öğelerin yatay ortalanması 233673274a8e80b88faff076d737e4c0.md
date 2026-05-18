# Blok öğelerin yatay ortalanması

Bir blok öğesi, genişliği üst öğenin genişliğinden büyükse, üst öğe içinde yatay olarak ortalanabilir. Bunu yapmak için, blok öğesine sabit bir genişlik verilmelidir. Ortalamayı sağlamak için otomatik yatay kenar boşlukları özelliği kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d14ede67-c4cf-4e64-acc9-8b2f86686514Frame%2048026.png)

Varsayılan olarak, bir blok öğesi satırdaki tüm boş alanı kaplayan otomatik bir sağ kenar boşluğuna sahiptir.

`.box {
  margin-right: auto;
}`

Otomatik sol ve sağ kenar boşluklarını belirttiğinizde, boş alan bu kenar boşlukları arasında dağıtılır ve blok öğesi ortalanır.

`.box {
  width: 300px;
  background-color: tomato;
  margin-right: auto;
  margin-left: auto;
}`

Kaydı kısaltmak için **`margin`** bileşik özelliğini kullanabilir, sıfır dikey değerler ve otomatik yatay değerler ayarlayabilirsiniz.

`.box {
  width: 300px;
  background-color: tomato;
  margin: 0 auto;
}`

- Kodu kısaltmak için, **`margin`** bileşik özelliğini kullanarak sıfır dikey kenar boşlukları ve otomatik yatay kenar boşlukları ayarlayabilirsiniz.
- **CSS** sekmesinde `margin` özelliğinin ayarlarına bakın.