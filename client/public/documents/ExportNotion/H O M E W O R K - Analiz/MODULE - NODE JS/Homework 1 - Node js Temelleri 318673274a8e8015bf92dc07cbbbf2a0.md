# Homework 1 - Node.js Temelleri

Merhaba!

İlk göreviniz, **Node.js** kullanarak dosyalarla çalışacak basit bir uygulama oluşturmaktır. Bu, **Node.js**öğrenimindeki ilk adımınız olacak, ancak endişelenmeyin, temellerden başlayacağız.

Size sağladığımız önceden hazırlanmış bir proje şablonuyla çalışacaksınız. Göreviniz, proje dosyalarını incelemek, çeşitli betikler için kod yazmak ve bunları nasıl çalıştıracağınızı anlamaktır.

Adım adım ilerleyeceksiniz: önce iletişim bilgilerini oluşturacak, ardından yeni bir iletişim bilgisi ekleyecek, tüm iletişim bilgilerini görüntüleyecek, bunların sayısını hesaplayacak ve birkaç ilginç şey daha yapacaksınız.

Her adım için sizin için net talimatlar hazırladığımızı unutmayın. Bu nedenle, onlara başvurmaktan çekinmeyin ve unutmayın — her yeni adım sizi gerçek bir programlama profesyoneli olma hedefine yaklaştırır. Bu, başarıya giden yolunuz ve bunun heyecan verici olacağına eminiz!

O halde, Pratik yapmaya başlayın!🌟

# **Görev**

Dosyalarla çalışacak bir uygulama oluşturmanız gerekiyor; bu uygulama komutlar aracılığıyla iletişim bilgileri oluşturacak, günlüğe kaydedecek, ekleyecek, silecek vb.

Bu [proje şablonunu](https://github.com/goitacademy/nodejs-hw-01-template) bu ev ödevi için başlangıç noktası olarak kullanın.

# **Kabul Kriterleri**

- `nodejs-hw-01` adlı bir depo oluşturulmuş olmalı.
- Ev ödevi teslim edilirken `Github` üzerindeki kaynak dosyalarına bir bağlantı olmalı.
- Görev kodu çalıştırıldığında hata olmamalı.

# **Görevi Adım Adım Tamamlama**

**Adım 1**

[Şablon projesinin](https://github.com/goitacademy/nodejs-hw-01-template) başlangıç dosyalarıyla tanışın. Mevcut değişkenleri ve fonksiyonları silmemeli veya yeniden adlandırmamalısınız, aksi takdirde çalıştırma sırasında hatalarla karşılaşabilirsiniz.

`src/db/db.json` dosyasında iletişim bilgileri koleksiyonu saklanmaktadır. Şu anda orada boş bir dizi var, ancak bunu daha sonra dolduracaksınız.

`src/constants/contacts.js` dosyasında `PATH_DB` adında bir sabit tanımlanmıştır. Bunu `src/db/db.json`dosyasının yolunu saklayacak şekilde başlatın.

`package.json` dosyasında, belirli dosyaların kodunu çalıştıran betikler zaten tanımlanmıştır:

`npm run get-all` - `src/scripts/getAllContacts.js` dosyasındaki kodu çalıştırır.

`npm run generate` - `src/scripts/generateContacts.js` dosyasındaki kodu çalıştırır.

`npm run add-one` - `src/scripts/addOneContact.js` dosyasındaki kodu çalıştırır.

`npm run count` - `src/scripts/countContacts.js` dosyasındaki kodu çalıştırır.

`npm run remove-last` - `src/scripts/removeLastContact.js` dosyasındaki kodu çalıştırır.

`npm run remove-all` - `src/scripts/removeAllContacts.js` dosyasındaki kodu çalıştırır.

`src/utils/createFakeContact.js` dosyasında, rastgele verilerle bir iletişim bilgisi oluşturan `createFakeContact` fonksiyonu tanımlanmıştır. Gerçekçi rastgele veriler, isimler, telefon numaraları, e-postalar vb. oluşturmak için [`@faker-js/faker`](https://github.com/faker-js/faker) kütüphanesi kullanılmaktadır. Bunu projenize şu komutla kurun:

`npm i -D @faker-js/faker`

Bu kütüphanede şu anda ilgilendiğimiz yöntemler şunlardır:

- **`faker.string.uuid()`** benzersiz bir kimlik oluşturmak için;
- **`faker.person.fullName()`** tam isimler oluşturmak için;
- **`faker.phone.number()`** telefon numaraları oluşturmak için;
- **`faker.internet.email()`** e-posta adresleri oluşturmak için;
- **`faker.person.jobTitle()`** meslek adları oluşturmak için.

**Adım 2**

`src/utils/readContacts.js` dosyasında `readContacts` adında bir yardımcı fonksiyon tanımlayın. Bu fonksiyon, `src/db/db.json` dosyasının içeriğini okumalı ve geri döndürmelidir. Fonksiyon, verileri doğru bir şekilde işleyerek dosyadan verilerin doğru bir şekilde okunmasını sağlamalıdır.

`src/utils/writeContacts.js` dosyasında `writeContacts` adında bir yardımcı fonksiyon tanımlayın. Bu fonksiyon, `src/db/db.json` dosyasına veri yazmalıdır. Fonksiyon, verileri parametre olarak doğru bir şekilde almalı ve dosyaya verilerin doğru bir şekilde yazılmasını sağlamalıdır.

Bu yardımcı fonksiyonları sonraki adımlarda kullanın.

**Adım 3**

`src/scripts/generateContacts.js` dosyasında `generateContacts` fonksiyonunu tanımlayın. Bu fonksiyon, `createFakeContact` fonksiyonunu kullanarak belirtilen sayıda rastgele iletişim bilgisi oluşturmalı ve ardından bunları `src/db/db.json` dosyasındaki diziye eklemeli ve dosyaya geri yazmalıdır.

Fonksiyonunuzun **`generateContacts`** yeni iletişim bilgilerini mevcut olanlara doğru bir şekilde eklediğinden emin olun. Yani, dizi boşsa, fonksiyon çağrıldığında belirtilen sayıda iletişim bilgisi, örneğin 5, olmalıdır. Eğer dizide 3 iletişim bilgisi varsa ve çağrıda 5 iletilirse, fonksiyon çağrıldığında toplamda 8 iletişim bilgisi olmalıdır.

Fonksiyonun çalışmasını kontrol etmek için `npm run generate` komutunu çalıştırabilirsiniz; bu, `src/scripts/generateContacts.js` dosyasındaki kodu çalıştıracaktır. `src/db/db.json` dosyasında ilgili değişiklikler olmalıdır.

**Adım 4**

`src/scripts/addOneContact.js` dosyasında `addOneContact` fonksiyonunu tanımlayın. Bu fonksiyon, `src/db/db.json` dosyasındaki diziye yalnızca bir tane rastgele iletişim bilgisi eklemelidir.

Fonksiyonun çalışmasını kontrol etmek için **`npm run add-one`** komutunu çalıştırabilirsiniz; bu, `src/scripts/addOneContact.js` dosyasındaki kodu çalıştıracaktır. `src/db/db.json` dosyasında ilgili değişiklikler olmalıdır.

**Adım 5**

`src/scripts/getAllContacts.js` dosyasında `getAllContacts` fonksiyonunu tanımlayın. Bu fonksiyon, `src/db/db.json` dosyasındaki iletişim bilgileri dizisini döndürmelidir. Fonksiyon, dosyadan iletişim bilgileri dizisini doğru bir şekilde okumalıdır.

Fonksiyonun çalışmasını kontrol etmek için **`npm run get-all`** komutunu çalıştırabilirsiniz; bu, `src/scripts/getAllContacts.js` dosyasındaki kodu çalıştıracaktır.

**Adım 6**

`src/scripts/countContacts.js` dosyasında `countContacts` fonksiyonunu tanımlayın. Bu fonksiyon, `src/db/db.json` dosyasındaki dizideki iletişim bilgisi sayısını döndürmelidir. Fonksiyonun iletişim bilgilerini doğru bir şekilde saydığından emin olun.

Fonksiyonun çalışmasını kontrol etmek için **`npm run count`** komutunu çalıştırabilirsiniz; bu, `src/scripts/countContacts.js` dosyasındaki kodu çalıştıracaktır.

**Adım 7**

`src/scripts/removeAllContacts.js` dosyasında `removeAllContacts` fonksiyonunu tanımlayın. Bu fonksiyon, `src/db/db.json` dosyasındaki dizideki tüm iletişim bilgilerini silmelidir.

Fonksiyonun çalışmasını kontrol etmek için **`npm run remove-all`** komutunu çalıştırabilirsiniz; bu, `src/scripts/removeAllContacts.js` dosyasındaki kodu çalıştıracaktır. `src/db/db.json` dosyasında ilgili değişiklikler olmalıdır.

**Adım 8**

`src/scripts/removeLastContact.js` dosyasında, dizide en az bir eleman varsa son iletişim bilgisini silecek olan `removeLastContact` fonksiyonunu tanımlayın.

Fonksiyonun çalışmasını kontrol etmek için `npm run remove-last` komutunu çalıştırabilirsiniz; bu, `src/scripts/removeLastContact.js` dosyasındaki kodu çalıştıracaktır. `src/db/db.json` dosyasında ilgili değişiklikler olmalıdır.

[Çözüm](Homework%201%20-%20Node%20js%20Temelleri/%C3%87%C3%B6z%C3%BCm%20318673274a8e80989890f6af073f56e8.md)