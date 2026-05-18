# Durum Yapısı

Arayüz, uygulama durumuna bağlı olarak çalışır. Bu yüzden öncelikle işlevsellik için gerekli olan en az sayıda değeri içeren durum yapısını tasarlamalıyız. Bu, izlenecek ve güncellenecek veri miktarını azaltarak süreci sadeleştirir.

Uygulama iki ana bölümden oluşur: Görevler listesi ve görevler listesi için filtre seçenekleri. Bu iki bölüm, minimum gerekli durum yapısını oluşturur.

```
const appState = {
  tasks: {
	  items: [],
  },
  filters: {
    status: "all",
  },
};
```

Redux durumu her zaman bir nesne olarak tanımlanır ve bu nesneye programın durumu için özellikler eklenir. Bu nedenle, tüm görevlerin bir dizisi için `tasks`özelliğini ve olası filtreler için `filters` özelliğini tanımladık. Redux durumu basit veya karmaşık olabilir; bu, programın ihtiyaçlarına bağlıdır.

Her görev, aşağıdaki özelliklere sahip bir nesne ile temsil edilecektir:

- `id` — benzersiz tanımlayıcı
- `text` — kullanıcının oluşturma sırasında girdiği metin
- `completed` — görevin tamamlanıp tamamlanmadığını belirten bir bayrak

İşte birkaç görevle programımızın durumunun nasıl görünebileceğine dair bir örnek:

```
const appState = {
  tasks: {
	  items: [
	    { id: 0, text: "Learn HTML and CSS", completed: true },
	    { id: 1, text: "Get good at JavaScript", completed: true },
	    { id: 2, text: "Master React", completed: false },
	    { id: 3, text: "Discover Redux", completed: false },
	    { id: 4, text: "Build amazing apps", completed: false },
	  ]
  },
  filters: {
    status: "all",
  },
};
```

# **Eylem Tanımları**

Eylemler, uygulamada meydana gelebilecek olaylardır, kullanıcı eylemlerine tepki olarak da gerçekleşebilir. Uygulamamızda olabilecek olayların bir listesini oluşturalım:

- Kullanıcının girdiği metinle yeni bir görev eklemek
- Görevi silmek
- Görevin durumunu değiştirmek
- Durum filtresinin değerini değiştirmek