# Tarayıcıda JavaScript

Tarayıcıda JavaScript ile çalışma deneyiminiz sayesinde, Node.js’i öğrenirken bu bilgi bir temel oluşturacaktır, çünkü her iki teknoloji de birçok benzerlik taşır. O zaman gelin, JavaScript’in çalışma prensiplerini bir kez daha gözden geçirelim.

JavaScript'in Tarayıcıda Çalışma Şeması

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f9e5bc47-f0bb-43b1-9ad3-cd9f4498be62Screenshot%202024-01-10%20at%2021.37.54.png)

*Tarayıcıda JS'in Çalışma Şeması*

Peki, bu şemada hangi ana parçaları ayırt edebiliriz?

1. **JS Çalıştırma Motoru** Bu şemada bahsedilen motor, **V8**'dir ve Google Chrome tarafından kullanılır. Diğer tarayıcılar ise farklı motorlar kullanmaktadır, örneğin **SpiderMonkey** (Mozilla) ve **WebKit** (Safari). Ancak burada, **V8** motoru üzerinden ilerleyeceğiz çünkü **Node.js**'te varsayılan olarak kullanılan motordur. JS motoru, **JavaScript kodunun yorumlanması ve derlenmesi** işlemlerinden sorumludur. Bu motor, kodun çalışmasını sağlayan temel bileşendir. Şemadan görüleceği gibi, içinde **call stack** (fonksiyon çağrıları yığını) yer alır. Bu, belleği yönetmek ve çöp toplama (**garbage collection - GC**) işlemlerini yürütmekle ilgilidir.

2. **Web/Tarayıcı API'si** Tarayıcıda kullanıcı etkileşimini ve içerik yönetimini mümkün kılan API'lerdir. Bu API'ler şunları içerebilir:

- Ses
- Video
- Zamanlayıcılar
- Konum Belirleme
- Fetch
- vb. Bu işlevler **JS** ile gerçekleştirilmediği için hız sorunları yaşamazlar.

3. **Event Loop (Olay Döngüsü)** İşte burada JavaScript’in temel mekanizması devreye girer. JavaScript’in **tek iş parçacıklı** olduğunu ve bu nedenle bazen yavaş çalışabileceğini duymuş olabilirsiniz. Bu doğrudur; çünkü JavaScript motoru kodu tek bir iş parçacığında çalıştırır, bu da zaman zaman uzun süreli işlemlerin (örneğin, büyük döngüler) uygulamayı dondurmasına neden olabilir.

Eğer tarayıcıda **DevTools**'u açıp aşağıdaki kodu yazarsanız, sayfanız bir süre donacaktır (fare tıklamaları çalışmayacak, klavye tuşlarına basmak hiçbir etki yaratmayacak vb.) ve konsolda birçok sayı göreceksiniz:

```
function runSyncLoop(iterations) {
  for (let index = 0; index < iterations; index++) {
    console.log(index);
  }
}

runSyncLoop(10000);
```

Bu davranış, **JS**'in yürütme akışını dondurmasının tipik bir örneğidir. Uygulama hemen çalışmayı durdurur ve onunla etkileşimde bulunmayı engeller.

Ancak bu durumu biraz daha optimize edebiliriz:

```
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAsyncLoop(iterations) {
  for (let index = 0; index < iterations; index++) {
    console.log(index);
    await delay(0); // Olay Döngüsünü serbest bırakmak için bir ara
  }
}

runAsyncLoop(10000);
```

Burada, **`await delay(0)`** ile yapılan bir çağrı, küçük bir zaman aşımına neden olur. Bu, JavaScript’in çalışmasını durdurmadan, kullanıcının tarayıcı ile etkileşime devam etmesini sağlar. Kullanıcılar bir düğmeye tıklayabilir, fareyi hareket ettirebilir veya diğer etkileşimlerde bulunabilirler.

**Şimdi bu durumun neden böyle olduğunu biraz daha derinlemesine inceleyelim:**

1. `setTimeout`, `setInterval` (makrotasklar) ve `Promises` (mikrotasklar) kullandığımızda, `fetch` veya `axios` ile istek yaptığımızda, tarayıcıya bir şeyler yapma görevi veriyoruz. Bu yapılar, tarayıcıya işler devredildiğinde, tarayıcı kodu bir iş parçacığı üzerinden paralel şekilde işler. Bu nedenle, JavaScript kodu ile kıyaslandığında, tarayıcı çok daha verimlidir.
2. Tarayıcı "başardığında", belirli bir görevle ilişkili bir geri çağırmayı kuyrukta ekler ve onun yürütülmesinin sonucunu (örneğin, HTTP isteğine yanıt) oraya taşır.
3. **Event Loop**, hazır görevleri **JS kodunda** yürütmekten sorumlu sonsuz bir döngü gibidir. Bu döngünün her bir yinelemesine **tick** denir. Her tick'te **Event Loop**, kuyruktan kod alır ve diğer tüm fonksiyon çağrılarını, olay dinleyicilerini (**event listeners**) vb. işlemeye devam eder. Böylece kullanıcı etkileşimlerine yanıt verebiliriz.

JavaScript’in tarayıcıda nasıl çalıştığını aşağıdaki gibi bir pseudo kodla özetleyebiliriz:

```
// Programın JS dosyalarını baştan çalıştırır, bu yalnızca bir kez gerçekleşir
setupAllEventListeners();
runHttpRequests();
setupInitialTimersAndIntervals();
doOtherStuff();

// Diğer tüm görevler, EventLoop'un sürekli çalışması sayesinde gerçekleştirilir;
// zamanlayıcıların sonuçları, olay dinleyicilerinden gelen geri çağırmalar,
// tamamlanan promesler vb. işlenir
while(true){
	executeReadyMicrotasks();
	executeReadyMacrotasks();
}
```

Bu konu oldukça karmaşık, bu nedenle ek materyalleri incelemenizi ([https://uk.javascript.info/event-loop](https://uk.javascript.info/event-loop)) ve anlamadığınız şeyleri açıklaması için öğretmenden yardım istemekten çekinmemenizi öneririz.