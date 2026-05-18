# Yapılacak Listem

### **👤 Kutluhan: Transaction CRUD & Modals**

*Veri ekleme, silme ve düzenleme gibi en kritik kullanıcı etkileşimlerini yönetir.*

- **ButtonAddTransactions:** Sağ alt köşedeki sabit buton.
- **ModalAddTransaction:** Pencereyi kapatma mantığı (Çarpı, Cancel, Backdrop, Escape).
- **AddTransactionForm:** react-hook-form + Yup kullanımı. Gelir/Gider seçici (switcher), react-datepicker entegrasyonu.
- **Add Logic:** Başarılı ekleme sonrası bakiye ve listenin sayfa yenilenmeden güncellenmesi.
- **Delete İşlemi:** Liste üzerindeki "Delete" butonuna tıklandığında backend isteği ve UI güncellemesi.
- **ModalEditTransaction:** Düzenleme formu bileşeni.

**EditTransactionForm:**

Mevcut verilerin formda gösterilmesi, backend güncellemesi ve hata yönetimi.

| **ButtonAddTransactions** | Düzen: mobile, tablet, and desktop |
| --- | --- |
|  | Ekranın sağ alt köşesine sabitlenmelidir |
|  | Düğmeye tıklandığında (“button” yazın), **ModalAddTransaction** oluşturma formuyla birlikte bir modal pencere açılmalıdır |
| **ModalAddTransaction** | Düzen: mobile, tablet, and desktop |
|  | **AddTransactionForm** bileşenini oluşturma |
|  | Modal pencere, çarpı düğmesine ve "**Cancel**” düğmesine ("button" tipi) tıklanarak, zemin üzerine tıklanarak ve Escape düğmesine tıklanarak kapatılmalıdır. |
| **AddTransactionForm** | Düzen: mobile, tablet, and desktop |
|  | AddTransactionForm, işlem türünü seçmek için stilize edilmiş bir değiştirici, Sum, Date, Category (işlem türü “giderler” ise gereklidir), Yorum ve “submit” türünde bir düğme içerir - “Add” ve react-hook-form+Yup kütüphaneleri kullanılarak “submit” olayında tetiklenmelidir**.**Tüm alanlar zorunludur. Varsayılan işlem türü “giderler ”dir. Date alanı **reactdatepicker** [click](https://reactdatepicker.com/) kütüphanesi kullanılarak uygulanmalıdır |
|  | “submit” olayında:- **geçersiz değerler varsa,** hatanın nedeni kullanıcıya gösterilmeli - veriler backend'e gönderilmemelidir. - **tüm değerler geçerliyse** - veriler backend'e gönderilmelidir. - **backend bir hata döndürürse**, bu hata işlenmeli ve kullanıcıya bir açılır mesaj şeklinde gösterilmelidir. Aynı zamanda, modal pencere açık kalır ve kullanıcının işlem talebini yeniden göndermek üzere verileri düzenlemesine olanak sağlamak için veriler doldurulur.- **backend'e yapılan istek başarılı olduysa**, modal pencere kapatılmalı - **TransactionsList** ve **Balance**'daki veriler sayfa yeniden yüklenmeden değişmelidir. |
| **ModalEditTransaction** | Düzen: mobile, tablet, and desktop |
|  | **EditTransactionForm** bileşenini oluşturma |
|  | Modal pencere, çarpı düğmesine ve “**Cancel**" düğmesine (“button" tipi) tıklanarak, zemin üzerine tıklanarak ve Escape düğmesine tıklanarak kapatılmalıdır. |
| **EditTransactionForm** | Düzen: mobile, tablet, and desktop |
|  | **EditTransactionForm**, Sum, Date, Comment alanlarını ve “**submit**” - “Save” türünde bir düğmeyi içerir ve **react-hook-form+Yup** kütüphaneleri kullanılarak “submit” olayında tetiklenmelidir**.**Date alanı **reactdatepicker** [click](https://reactdatepicker.com/) kütüphanesi kullanılarak uygulanmalıdır |
|  | “submit” olayında:- **Geçersiz değerler olması durumunda**, hatanın nedeni kullanıcıya gösterilmeli - veriler backend'e gönderilmemelidir. - **tüm değerler geçerliyse** - veriler backend'e gönderilmelidir. - Backend **bir hata döndürdüyse**, bunu işlemek ve kullanıcıya bir açılır mesaj şeklinde görüntülemek gerekir. Aynı zamanda - modal pencere açık kalır ve kullanıcının işlem düzenleme talebini yeniden göndermek üzere verileri düzenlemesine izin vermek için veriler doldurulur.- Backend'e **yapılan istek başarılı olduysa**, modal pencere kapatılmalı ve **TransactionsList** ve **Balance**'daki veriler sayfa yeniden yüklenmeden değişmelidir |