# Reducers (Reducer İşlevleri)

Uygulama durumunu tasarladık, bileşenleri ve store'u bağladık, eylemleri göndermeyi ekledik. Artık Redux durumunu değiştirme mantığını yazma zamanı geldi.

**Reducer** — mevcut durumu ve eylemi argüman olarak alan ve yeni durumu döndüren bir fonksiyondur.

`(state, action) => nextState`

- Uygulama her eylem gönderildiğinde, bu eylemi işlemek için reducer çağrılır.
- Reducer, gönderilen eylemler sonucunda uygulama durumunun nasıl değişeceğini belirler.
- Eylemler yalnızca gerçekleşen olayları tanımlar, uygulama durumunun nasıl değişeceğini belirlemez.

# 

[**Ana Reducer**](Reducers%20(Reducer%20%C4%B0%C5%9Flevleri)/Ana%20Reducer%202ee673274a8e801d9a89da57d7cd692d.md)

[**Reducer Kuralları**](Reducers%20(Reducer%20%C4%B0%C5%9Flevleri)/Reducer%20Kurallar%C4%B1%202ee673274a8e80bda332cbf602b9b75f.md)

[**Görev Silme**](Reducers%20(Reducer%20%C4%B0%C5%9Flevleri)/G%C3%B6rev%20Silme%202ee673274a8e80de9a43df0f0f731206.md)

[**Durum Değişikliği**](Reducers%20(Reducer%20%C4%B0%C5%9Flevleri)/Durum%20De%C4%9Fi%C5%9Fikli%C4%9Fi%202ee673274a8e80c99dc4e34647a48932.md)

[**Filtre Değişikliği**](Reducers%20(Reducer%20%C4%B0%C5%9Flevleri)/Filtre%20De%C4%9Fi%C5%9Fikli%C4%9Fi%202ee673274a8e80af8032fbf0a42be8c0.md)

[**Görev Planlayıcı**](Reducers%20(Reducer%20%C4%B0%C5%9Flevleri)/G%C3%B6rev%20Planlay%C4%B1c%C4%B1%202ee673274a8e8026bf5ae10a2e8454db.md)