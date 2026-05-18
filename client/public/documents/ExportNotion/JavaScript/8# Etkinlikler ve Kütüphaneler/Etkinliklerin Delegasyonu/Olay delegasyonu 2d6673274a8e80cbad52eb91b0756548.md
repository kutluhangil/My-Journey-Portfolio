# Olay delegasyonu

**Açılır pencere (event bubbling)**, en kullanışlı tekniklerden birini uygulamanıza olanak tanır: **olay delegasyonu**.

Bir grup öğeniz olduğunu ve bu öğeler üzerinde benzer olayların aynı şekilde ele alınması gerektiğini düşünün. Bunu doğrudan yapmak isterseniz, her bir öğeye ayrı ayrı olay işleyicisi eklemeniz gerekir. Ancak bu yöntem hem verimsizdir hem de performans açısından uygun değildir.

**Olay delegasyonu**, bu problemi çözmek için kullanılan bir tekniktir. Temel fikir, bu öğelerin **ortak atasına** tek bir işleyici tanımlamaktır. Olaylar baloncukla yukarı taşındığı için, tek bir işleyiciyle tüm alt öğelerdeki olaylara tepki verilebilir.

Basit bir örnek:

- Bir `<div>` öğesi oluşturun.
- İçine istediğiniz kadar düğme ekleyin (örneğin 100 adet).
- Tüm bu düğmelerdeki tıklamaları yakalamak için yalnızca `handleButtonClick`adında bir olay işleyicisini bu `div` öğesine tanımlayın.
- Bu sayede DOM’a yüzlerce ayrı işleyici eklemek yerine, tek bir merkezi dinleyiciyle tüm tıklamaları kontrol edebilirsiniz. Hem daha temiz bir yapı elde edilir hem de uygulamanızın performansı artar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a5d53806-9289-4039-bda4-43e0d43257d3Frame%2048665.jpg)

Sorun şu ki, 100 olay dinleyicimiz var. Hepsi aynı işleyiciye işaret ediyor, ancak bellekte 100 ayrı dinleyici bulunuyor.

Olayların baloncuklaşması sayesinde, bunları ortak bir ata — `<div>` öğesi — üzerinde yakalayabiliriz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4e01e415-5074-4ad5-8cda-58b41e659a95Frame%2048666.jpg)

Artık `handleButtonClick` işleyicisi ile yalnızca bir tıklama olayı dinleyicisi vardır ve tarayıcının bellekte 100 farklı dinleyici saklaması gerekmez.

```
Dolayısıyla, delegasyon üç basit adımda uygulanır:
-Olayları izlemek için, öğe grubunun ortak atasını belirleyin.
-Bu ata öğe üzerinde bir olay işleyicisi kaydedin.
-İşleyicide, olayın gerçekleştiği hedef öğeyi belirlemek için event.target kullanın.

```

Kod olarak bu şöyle görünecektir:

```
const box = document.querySelector(".box");

box.addEventListener("click", function (event) {
	console.log(event.target); // click olayının gerçekleştiği öğe
});
```

Bu yaklaşım, aynı türden öğelere ait dinleyicilerin yönetimini kolaylaştırır. Öğeleri ekleyebilir, silebilir veya değiştirebilirsiniz. Her biri için manuel olarak olay işleyicisi eklemenize veya kaldırmanıza gerek kalmaz.

Bir tıklamanın hedef öğesinin konsolda görüntülendiği canlı bir örneğin kodunu inceleyin.

`div.box` üzerindeki düğmelere ve doğrudan aralarındaki boşluklara tıklayarak sonucu gözlemleyin.