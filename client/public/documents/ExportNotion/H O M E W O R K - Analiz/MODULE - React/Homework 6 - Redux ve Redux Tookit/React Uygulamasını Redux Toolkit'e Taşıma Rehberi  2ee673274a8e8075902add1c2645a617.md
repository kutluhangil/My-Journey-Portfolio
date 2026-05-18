# React Uygulamasını Redux Toolkit'e Taşıma Rehberi ve Notları

Bu doküman, "İletişim Kitabı" (Contact Book) uygulamanızın yerel React state (durum) yönetiminden, **Redux Toolkit** ile merkezi durum yönetimine geçiş sürecini ayrıntılı olarak açıklar.

## **1. Temel Kavramlar ve Hazırlık**

### **Neden Redux?**

Normalde

App.jsx içinde

```
useState
```

ile tutulan veriler (kişiler, filtre), uygulamanın en tepesinden en altına kadar "prop drilling" (prop'ları elden ele taşıma) yöntemiyle iletiliyordu. Redux, bu verileri tek bir merkezde (

**Store**

) toplar ve herhangi bir bileşenin bu verilere doğrudan ulaşmasını sağlar.

### **Kurulan Kütüphaneler**

Terminelde şu komut ile gerekli paketler kuruldu: `npm install @reduxjs/toolkit react-redux redux-persist`

- **@reduxjs/toolkit:** Redux yazmayı kolaylaştıran, standartlaştırılmış araç seti (daha az kod, daha temiz yapı).
- **react-redux:** React bileşenlerinin Redux store ile iletişim kurmasını sağlayan kütüphane (`Provider`, `useSelector`, `useDispatch`).
- **redux-persist:** Redux store'daki verilerin sayfa yenilendiğinde kaybolmaması için `localStorage`'a otomatik kaydedilmesini sağlar.

---

## **2. Redux Yapısının Kurulması (Klasör: `src/redux`)**

Tüm Redux dosyaları düzenli olması için `src/redux` klasörü altında toplandı.

### **A. Dilimlerin (Slices) Oluşturulması**

Redux Toolkit'te "Slice", uygulamanın durumunun (state) belirli bir parçasını yöneten mantıksal birimdir. Hem başlangıç durumunu (state) hem de o durumu değiştiren fonksiyonları (reducer/action) bir arada tutar.

### **1. İletişim Dilimi (`contactsSlice.js`)**

Bu dosya kişi listesini yönetir.

- **Amaç:** Kişileri eklemek ve silmek.
- **Kod Açıklaması:**
    
    ```
    constcontactsSlice=createSlice({
    name:"contacts",
    initialState: {items: [] },// Başlangıçta liste boş
    reducers: {
    addContact: (state,action)=> {
    // Redux Toolkit sayesinde, state'i doğrudan değiştiriyormuş gibi yazabiliriz (push).
    state.items.push(action.payload);
        },
    deleteContact: (state,action)=> {
    // ID'si eşleşmeyenleri filtreleyerek silme işlemi.
    state.items=state.items.filter((item)=>item.id!==action.payload);
        },
      },
    });
    
    ```
    
- **Selector (`selectContacts`):** Bileşenlerin bu veriyi okuması için yazılan fonksiyondur: `(state) => state.contacts.items`

### **2. Filtre Dilimi (`filtersSlice.js`)**

Bu dosya arama kutusundaki metni yönetir.

- **Amaç:** Arama terimini saklamak ve güncellemek.
- **Kod Açıklaması:**
    
    ```
    constfiltersSlice=createSlice({
    name:"filters",
    initialState: {name:"" },// Başlangıçta arama boş
    reducers: {
    changeFilter: (state,action)=> {
    state.name=action.payload;// Girilen metni state'e yazar
        },
      },
    });
    
    ```
    

### **B. Store'un Oluşturulması (`store.js`)**

Store, uygulamanın beynidir. Tüm dilimleri (slice) birleştirir ve yönetir. Ayrıca "persistence" (kalıcılık) ayarları burada yapılır.

- **`persistConfig`:** Hangi verilerin hafızada kalacağını belirler. Biz sadece `contacts` diliminin `items` özelliğini (kişi listesini) kaydetmek istiyoruz.
- **`configureStore`:** Tüm reducer'ları birleştirerek store'u oluşturur.

---

## **3. Uygulamanın Bağlanması (`main.jsx`)**

Redux'ın React tarafından görülebilmesi için uygulamanın en kök bileşeni sarmalanmalıdır.

- **`<Provider store={store}>`:** Tüm uygulamanın Redux store'una erişmesini sağlar.
- **`<PersistGate loading={null} persistor={persistor}>`:** `localStorage`'dan veriler okunup Redux'a yüklenene kadar uygulamanın açılmasını bekletir (veri tutarlılığı için).

---

## **4. Bileşenlerin Dönüştürülmesi (Refactoring)**

Eskiden `App.jsx` üzerinden prop olarak gönderilen fonksiyonlar ve veriler kaldırıldı. Her bileşen artık kendi ihtiyacını Redux'tan karşılıyor.

### **`ContactForm.jsx` (Veri Ekleme)**

- **Eskiden:** `onAddContact` diye bir prop alırdı.
- **Şimdi:** `useDispatch` hook'unu kullanıyor.
- **İşlem:** Form gönderildiğinde `dispatch(addContact(yeniKisi))` komutu ile doğrudan store'a emir veriyor.
    
    ```
    constdispatch=useDispatch();
    // ...
    dispatch(addContact(newContact));
    
    ```
    

### **`SearchBox.jsx` (Veri Okuma ve Güncelleme)**

- **Eskiden:** `value` ve `onChange` prop'ları alırdı. (Controlled Component)
- **Şimdi:**
    - `useSelector(selectNameFilter)` ile store'daki güncel arama metnini okuyor.
    - `useDispatch` ile her harf girildiğinde `dispatch(changeFilter(girilenDeger))` çalıştırıyor.

### **`ContactList.jsx` (Veri Okuma ve Listeleme)**

- **Eskiden:** Filtrelenmiş listeyi ve `onDelete` fonksiyonunu prop olarak alırdı.
- **Şimdi:** Zeki bir bileşen oldu.
    - `useSelector(selectContacts)` ile tüm listeyi çekiyor.
    - `useSelector(selectNameFilter)` ile filtreyi çekiyor.
    - **Kendi içinde filtreleme yapıyor:**
        
        ```
        constfilteredContacts=contacts.filter((contact)=>
        contact.name.toLowerCase().includes(filter.toLowerCase())
        );
        
        ```
        
- Bu sayede `App.jsx`'in hiçbir şey hesaplamasına gerek kalmıyor.

### **`Contact.jsx` (Veri Silme)**

- **Eskiden:** `onDelete` prop'u ile silme emrini yukarı (App'e) gönderirdi.
- **Şimdi:**
    - `useDispatch` kullanıyor.
    - Sil butonuna basınca `dispatch(deleteContact(id))` diyerek doğrudan store'dan kişiyi siliyor.

---

## **5. Sonuç: App.jsx Temizliği**

Artık `App.jsx` dosyanızda ne `useState`, ne `useEffect`, ne de karmaşık fonksiyonlar (ekle/sil/filtrele) kaldı. Sadece bileşenleri ekrana yerleştiren bir iskelet haline geldi.

**Özet Kazanımlar:**

1. **Kod Temizliği:** `App.jsx` sadeleşti.
2. **Merkezi Yönetim:** Veri yönetimi bileşenlerden ayrılıp `src/redux` klasörüne taşındı.
3. **Performans ve Bakım:** Bileşenler sadece ihtiyaç duydukları verilere abone oldu. Uygulama büyüdükçe yönetimi kolaylaştı.