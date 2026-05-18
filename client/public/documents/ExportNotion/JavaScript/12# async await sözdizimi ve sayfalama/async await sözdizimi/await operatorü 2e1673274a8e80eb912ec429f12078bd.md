# await operatorü

Asenkron işlevlerin içinde, `await` deyimini ~~boşluk~~ promise ile değer döndüren herhangi bir ifadenin sağına yerleştirerek kullanabilirsiniz.

```
const foo = async () => {
	console.log("Before await");

	const promiseValue = await new Promise(resolve => {
		setTimeout(() => resolve(5), 2000)
	});

	console.log("After await", promiseValue);
};

foo(); // 2 saniye sonra konsolda görüntülenecektir " After await" 5
```

Yorumlayıcı `await` ile karşılaştığında, işlevin yürütülmesini duraklatır ve `await`'in sağındaki ilerleme tamamlanana kadar bekler.

İşlem başarıyla tamamlanırsa (yürütülürse), işlev yürütülmeye devam eder ve zaman uyumsuz işlemin sonucu kullanıma hazır hale gelir.

`promiseValue` değişkeni vaadin kendisini değil, gerçekleştirilmesinin sonucunu saklar — örnekte bu 5 sayısıdır. Bunun nedeni, yorumlayıcının `await` deyimiyle karşılaştığında `foo` işlevini duraklatması ve ilgili promise’in yürütülmesinin tamamlanmasını beklemesi ve ardından sonuç kullanılabilir olduğunda işlevi yürütmeye devam ederek sonucu bir değişkene yazmasıdır.

Özetle:

- `await` deyimi sadece asenkron fonksiyonların (`async`) içinde kullanılabilir.
- `await` `async` olmadan kullanılamaz, ancak `async` `await` olmadan kullanılabilir
- `await` işleci, ilgili Promise tamamlanana (`fulfilled` veya `rejected`) kadar bir işlevin yürütülmesini askıya alır.
- Test başarıyla tamamlanırsa (`fulfilled`), `await` ifadesi değerini döndürür.
- Tarama işlemi bir hata ile başarısız olursa (`rejected`), `await` ifadesi bir hata oluşturur.
- Asenkron bir işlev her zaman bir tamsayı döndürür, bu nedenle döndürülen herhangi bir değer bu tamsayının değeri olur.
- Dönüş değeri için bir değer belirtmezseniz, `undefined` değerine sahip bir alan oluşturulur.