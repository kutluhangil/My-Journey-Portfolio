# URLSearchParams sınıfı

Çok sayıda parametre olabilir ve bunları hem okunabilirlik hem de daha fazla düzenleme için tek bir uzun dizede oluşturmak uygun değildir.

Parametre dizeleri oluşturulurken, `URLSearchParams` sınıfının bir örneği oluşturulur ve bir nesne ile başlatılır. Sonuç, dize dönüşümünde `toString()` yönteminin çağrılmasının sonucunu - dize eşlemesini - döndüren yöntemlere sahip özel bir nesne (yineleyici) olacaktır.

```
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"
```

Dize biçiminde, nesne özellikleri parametrelere ve onların değerlerine dönüşecektir. Parametreler `&` karakteri ile ayrılacaktır. Şablon dizelerinde bir değer enterpole edilirken, dolaylı olarak bir dizeye dönüştürülür, bu nedenle URL'yi oluştururken `toString()` yöntemini çağırmanıza gerek yoktur. Sorgu dizesinin başına `?`karakterini eklemeyi unutmayın.