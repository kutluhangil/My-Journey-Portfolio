# Bir olayın hedef öğesini kontrol etme

Bir renk paleti oluşturma göreviniz var. Bu palet, tıklayarak bir renk seçmenize olanak tanır ve seçilen rengi ekranda gösterir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/35292a67-11d8-4199-b11a-94b13bdd1495Untitled.png)

```
<p class="output">Selected color: -</p>
<div class="color-palette"></div>
```

Palet öğelerinden herhangi birine yapılan her tıklama, başlığın rengini ve içeriğini değiştiren bir olayı tetikler. Öğelerin sayısı fazla olduğundan, her birine ayrı ayrı işleyici atamak yerine, `div.color-palette` adlı ortak ata öğeye bir olay dinleyicisi ekleyelim.

```
const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
 	console.log(event.target);
	const selectedColor = event.target.dataset.color;
}
```

Tıklama olayı işleyicisinde, olayın gerçekleştiği öğeyi ve ona ait rengi almak için `event.target` öğesini kullanırız. Renk bilgisi, `data-color` niteliğinde saklanacaktır.

Tıklamanın hedef öğesini kontrol ettiğinizden emin olun.

Bu mutlaka bir düğme (`button`) olmalıdır. Aksi takdirde kullanıcı düğmeler arasındaki boşluklara tıkladığında, yanlışlıkla bir olay işlenebilir ve bu da hataya yol açabilir.

Öğe türünü kontrol etmek için `nodeName` özelliğini kullanın.

```
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return; // kullanıcı düğmelerin arasına tıkladı
  }

  const selectedColor = event.target.dataset.color; // kullanıcı düğmeye tıkladı ve niteliklerine erişimimiz var
}
```