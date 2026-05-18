# Homework 1 - Bileşenler(Components)

- `goit-react-hw-01` adında bir repo oluşturun.
- **Ödevi teslim ederken iki bağlantı paylaşılmalıdır: kaynak dosyalarının bulunduğu depo bağlantısı ve görevin canlı çalışmasını gösteren [Vercel](https://vercel.com/)** bağlantısı.
- Proje, [**Vite**](https://vitejs.dev/) kullanılarak oluşturulmalıdır.
- Görevle ilgili canlı sayfada gezinirken, tarayıcı konsolunda herhangi bir hata veya uyarı bulunmamalıdır.
- Her bileşen için **`src/components`** klasöründe, React bileşeninin JSX dosyasını ve stil dosyasını içeren ayrı bir klasör bulunmalıdır. Klasör adı, bileşen dosyasının adı (**`.jsx*`** uzantılı) ve stil dosyasının adı (**`.module.css*`** öncesi) aynı olmalı ve görevlerde belirtilen adlandırma kurallarına uygun olmalıdır (varsa).
- Bileşenlerin dışa aktarımında varsayılan dışa aktarma (`export default`) yöntemi kullanılmalıdır.
- Tüm görev bileşenleri, kök bileşeni olan `<App>` içinde tek bir sayfada render edilmelidir.
- Bileşenin beklediği tüm prop'lar, doğru şekilde aktarılmalıdır.
- JS kodu temiz ve anlaşılır olmalı ve **Prettier ile** formatlanmış olmalıdır.
- Stil dosyaları **CSS modülleri** kullanılarak düzenlenmelidir.

# **Görev 1 — Sosyal Medya Profili**

Bu görevde, bir sosyal medya kullanıcısının bilgilerini görüntülemek için **`<Profile>`** bileşenini oluşturmanız gerekmektedir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d45f659a-b3f5-4aa9-81a6-587de8fc58d8Screenshot%202023-12-19%20at%2021.34.13.png)

**`Profile`** bileşeni, aşağıdaki prop'ları alarak kullanıcı bilgilerini gösterecektir:

- **`name`** — kullanıcının adı
- **`tag`** — sosyal medyadaki etiket, **`@`** olmadan
- **`location`** — kullanıcıya ait şehir ve ülke bilgisi
- **`image`** — resim bağlantısı
- **`stats`** — kullanıcının aktivitelerine dair bilgileri içeren bir nesne

Bu bileşen, dinamik olarak verilen prop'ları kullanarak aşağıdaki yapısal şemayı oluşturmalıdır:

```
<div>
  <div>
    <img
      src="<https://cdn-icons-png.flaticon.com/512/1077/1077012.png>"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
```

Aşağıda **`App`** bileşeninde **`Profile`** bileşeninin kullanımına dair bir örnek verilmiştir:

- **`Profile`** bileşenini **`App`** içinde render edilecektir.
- **`Profile`** bileşenine gerekli veriler prop'lar aracılığıyla iletilecektir.

Bu kullanıcı verilerini, bileşenin prop değerleri için aşağıdaki gibi kullanabilirsiniz:

```
const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "<https://cdn-icons-png.flaticon.com/512/2922/2922506.png>",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```

Kullanıcı verilerini bir JSON dosyasına dışa aktarmanız gerekmektedir. Böylece **`App`** bileşenine sabit veriler eklemek yerine, bu verileri bir dosyadan dinamik olarak içe aktarabilirsiniz. Örneğin, **`src`** klasöründe **`userData.json`** adında bir dosya oluşturun, kullanıcı verilerini JSON formatında bu dosyaya aktarın ve ardından bu dosyayı **`App`** bileşeninde içe aktararak verileri prop'lar aracılığıyla iletin.

```
import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```

# **Görev 2 — Arkadaş Listesi**

Kullanıcının arkadaşlarının bilgilerini göstermek için bir **`<FriendList>`** bileşeni oluşturmanız gerekmektedir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4fda6707-d462-4d5f-b076-b08f8850feffScreenshot%202023-12-19%20at%2017.33.05.png)

**`<FriendList>`** bileşeni, bir prop olan **`friends`**'i almalı - arkadaş nesnelerinin bir dizisi ve aşağıdaki yapıdaki DOM şemasını oluşturmalıdır.

```
<ul>
{/* li sayısı, dizideki nesne sayısına bağlıdır */}
	<li>
		<FriendListItem />
	</li>
</ul>
```

**`<FriendListItem>`** bileşeni, her bir arkadaşın kartını temsil eder ve şu prop'ları almalıdır:

- **`avatar`** — avatar için bir bağlantı
- **`name`** — arkadaşın ismi
- **`isOnline`** — arkadaşın durumunu belirten bir boolean: çevrimiçi mi yoksa değil mi.

**`<FriendListItem>`** bileşeni aşağıdaki yapıda bir DOM düzeni oluşturmalıdır.

```
<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>
```

**`isOnline`** prop'una bağlı olarak, **`p.status`** içindeki metin ve stil değişmelidir. Eğer **`isOnline`** değeri **`true`**ise, metin **Online** ve metin rengi yeşil olmalı; **`false`** ise, metin **Offline** ve metin rengi kırmızı olmalıdır. Bu durumu, CSS sınıfları ile kontrol edebilirsiniz.

**`App`** bileşeninde **`FriendList`** bileşeninin bir örneği verilmiştir. Arkadaş verileri, bilinen özelliklere sahip bir nesne dizisidir. Bu verilere dayalı olarak prop değerlerini belirlemek için bu verileri kullanın.

```
const friends = [
  {
    "avatar": "<https://cdn-icons-png.flaticon.com/512/1998/1998592.png>",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
  },
  {
    "avatar": "<https://cdn-icons-png.flaticon.com/512/616/616438.png>",
    "name": "Kiwi",
    "isOnline": false,
    "id": 1137
  },
  {
    "avatar": "<https://cdn-icons-png.flaticon.com/512/1623/1623681.png>",
    "name": "Ajax",
    "isOnline": true,
    "id": 1213
  },
  {
    "avatar": "<https://cdn-icons-png.flaticon.com/512/2977/2977285.png>",
    "name": "Jay",
    "isOnline": true,
    "id": 1714
  },
  {
    "avatar": "<https://cdn-icons-png.flaticon.com/512/1998/1998749.png>",
    "name": "Poly",
    "isOnline": false,
    "id": 1284
  }
];

const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
```

Arkadaş verilerinizi bir JSON dosyasına çıkarmanız gerekmektedir. Böylece **`App`** bileşenini daha düzenli ve sade hale getirmiş olursunuz. Örneğin, **`src`** klasöründe **`friends.json`** adlı bir dosya oluşturun, arkadaş dizisini bu dosyaya taşıyın ve verileri JSON formatında düzenleyin. Ardından, bu verileri props olarak iletmek için **`App`** bileşenine içe aktarın.

```
import userData from "../userData.json";
import friends from "../friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
```

# **Görev 3 — İşlem Geçmişi**

İnternet bankacılığı kullanıcı paneli için bir **İşlem Geçmişi** bileşeni oluşturmanız gerekiyor.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/aab7cc7e-be34-4d72-8d38-963ea386750eScreenshot%202023-12-19%20at%2021.11.08.png)

Veriler, her bir işlem nesnesinin aşağıdaki özellikleri içerdiği bir nesne dizisi formatındadır:

- `id` — işlemin benzersiz kimliği
- `type` — işlem türü
- `amount` — işlem tutarı
- `currency` — para birimi türü

Bu verilerle çalışmak için **`<TransactionHistory>`** bileşenini oluşturmalısınız. Bu bileşen, `items` adlı bir prop almalı ve bu prop, işlem nesnelerinin dizisini içermelidir. Bileşen, her işlem için bir satır oluşturacak şekilde bir tablo yapısı oluşturmalıdır. İki işlem için oluşturulacak tablo şemasının örneği aşağıda verilmiştir:

```
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

**`App`** bileşeninde **`TransactionHistory`** bileşeninin nasıl kullanılacağını gösteren bir örnek aşağıda verilmiştir. Props değerleri için aşağıdaki veri kümesini kullanın:

```
const transactions = [
  {
    id: "1e0700a2-5183-4291-85cc-2065a036a683",
    type: "invoice",
    amount: "964.82",
    currency: "LRD",
  },
  {
    id: "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
    type: "payment",
    amount: "686.50",
    currency: "WST",
  },
  {
    id: "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    type: "invoice",
    amount: "828.62",
    currency: "UGX",
  },
  {
    id: "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
    type: "withdrawal",
    amount: "527.80",
    currency: "ALL",
  },
  {
    id: "63ca02f9-d637-46b5-9237-f3b24425e029",
    type: "payment",
    amount: "862.44",
    currency: "AUD",
  },
  {
    id: "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
    type: "withdrawal",
    amount: "907.00",
    currency: "GEL",
  },
  {
    id: "4eaab41b-b967-40ac-82ed-85fc66f646f1",
    type: "deposit",
    amount: "103.10",
    currency: "BWP",
  },
  {
    id: "9648a350-8469-42d5-8bf3-18090de5fe67",
    type: "withdrawal",
    amount: "322.32",
    currency: "MRO",
  },
  {
    id: "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
    type: "invoice",
    amount: "14.79",
    currency: "PYG",
  }
];

const App = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};
```

İşlem verilerini bir JSON dosyasına çıkartmanız gerekiyor, böylece **`App`** bileşenini daha sade tutabilirsiniz. Örneğin, **`src`** klasörüne **`transactions.json`** adında bir dosya oluşturun ve işlemler dizisini bu dosyaya taşıyın. Verileri JSON formatında düzenleyin ve ardından bu dosyayı **`App`** bileşenine içe aktararak prop olarak geçin.

```
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
```

[Çözüm](Homework%201%20-%20Bile%C5%9Fenler(Components)/%C3%87%C3%B6z%C3%BCm%202e5673274a8e80c9b6e4fd283d953a64.md)

[Ana Çözüm](Homework%201%20-%20Bile%C5%9Fenler(Components)/Ana%20%C3%87%C3%B6z%C3%BCm%202e5673274a8e802aba38d1b967af5603.md)