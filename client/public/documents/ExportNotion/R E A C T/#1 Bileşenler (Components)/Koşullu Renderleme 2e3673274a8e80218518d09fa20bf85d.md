# Koşullu Renderleme

React'te koşullu renderleme, belirli bir duruma bağlı olarak farklı içerik veya bileşenlerin ekranda görüntülenmesini sağlar. Bu teknik, özellikle bileşenlerin görünümünü dinamik olarak değiştirmek için, prop değerlerine bağlı olarak yaygın şekilde kullanılır.

# **&& Operatörü**

Mantıksal **`&&`** operatörü yalnızca koşulun sağlandığı, yani **`true`** olduğu durumlarda HTML çıktısını renderlamak için kullanılır.

`koşul && çıktı`

Bu yapı, sol tarafta bir koşul, sağ tarafta ise bu koşul **`true`** olduğunda render edilecek JSX yapısını barındırır. Eğer koşul **`false`** ise, bu durumda hiçbir şey render edilmez.

```
Eğer koşul altında hiçbir şey render edilmeyecekse,null,undefined veyafalse döndürebilirsiniz. Bu değerler ekranda görüntülenmeyecektir.

```

JSX ifadesi, sonucunu göstermek için `{}` içinde sarılır.

```
<div>
{kosul && icerik}
</div>
```

Örneğin, yeni mesajları yalnızca mesajlar dizisi boş değilse, yani uzunluğu sıfırdan büyükse render edeceğiz.

```
const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 && (
        <p>You have {messages.length} unread messages</p>
      )}
    </>
  );
};
```

- Eğer koşul **`true`** dönerse, sağdaki JSX bileşeni render edilir.
- Aksi durumda sonuç **`false`** olur ve bu da render edilmeyen bir değerdir.

# **Üçlü Operatör (Ternary Operator)**

Farklı bir koşulun kontrolü sonucunda iki farklı çıktıdan birini göstermek için üçlü operatör kullanılır.

`koşul ? eğer_koşul_doğruysa_içerik : eğer_koşul_yanlışsa_içerik`

JSX ifadesi, sonucunu göstermek için `{}` içerisinde sarılır.

```
<div>
	{koşul ? eğer_koşul_doğruysa : eğer_koşul_yanlışsa}
</div>
```

```
Koşul true olduğunda ? sonrasındaki içerik, aksi durumda : sonrasındaki içerik gösterilir.

```

Örneğin, okunmamış mesajların olup olmadığını göstermek için **`messages`** dizisinin uzunluğuna göre farklı mesajlar render edebiliriz. Bu durumda, JSX ifadesi bir paragraf etiketi içinde bir metin olarak döndürülür.

```
const Mailbox = ({ name, unreadMessages }) => {
  return (
    <div>
      <p>Hello {name}</p>
      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>
    </div>
  );
};
```

Bir koşula göre farklı bir düzen göstermek istediğimizde, aynı üçlü operatör mantığını JSX ile kullanabiliriz.

```
const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};
```