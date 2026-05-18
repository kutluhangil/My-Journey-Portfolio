# Autofocus özelliği

`autofocus` niteliği, bir form alanı yüklendiğinde otomatik olarak odaklanmasını sağlar. Bu, kullanıcı sayfayı açtığında bu alana hemen metin yazabilmesini sağlar. Varsayılan olarak, hiçbir form alanı `autofocus` niteliğine sahip değildir.

`<form>
  <label>
    First name
    <input type="text" name="firstName" autofocus />
  </label>
  <label>
    Last name
    <input type="text" name="lastName" />
  </label>
  <button type="submit">Submit</button>
</form>`

Bir sayfada sadece bir öğe aynı anda odaklanabilir. Bu nedenle, `autofocus` niteliği yalnızca bir form alanına atanabilir. `Autofocus` özelliği mantıksaldır; yani, sadece adı belirtilir ve değeri yoktur.

Örnek olarak, sandbox ortamında sayfa yüklendiğinde kullanıcı adı giriş alanı otomatik olarak odaklanmayabilir. Bu kodun işlevselliğini kendi editörünüzde test edebilirsiniz.

![Screen Shot 2025-07-31 at 00.25.30 AM.png](Autofocus%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-31_at_00.25.30_AM.png)

![Screen Shot 2025-07-31 at 00.28.45 AM.png](Autofocus%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-31_at_00.28.45_AM.png)

`<form class="form" name="issue_report_form" autocomplete="off">
<label class="form-label">
Your name
<input
class="form-input"
type="text"
name="username" autofocus
placeholder="Andrew Berger"
/>
</label>`

`<label class="form-label">
Topic
<input
class="form-input"
type="text"
name="topic" autofocus
placeholder="Short issue summary"
/>
</label>`

`<button class="form-button" type="submit">Submit an issue</button>
</form>`

### **autofocus nedir, ne işe yarar?**

autofocus özelliği, bir web sayfası yüklendiğinde **formdaki belirli bir input alanının otomatik olarak seçili (odaklı)** olmasını sağlar.

Yani kullanıcı o sayfayı açar açmaz **fareye tıklamadan** doğrudan yazmaya başlayabilir.

---

### **🔍 Örnek üzerinden açıklama:**

Aşağıdaki formu düşün:

```
<form>
  <label>
    First name
    <input type="text" name="firstName" autofocus />
  </label>
  <label>
    Last name
    <input type="text" name="lastName" />
  </label>
  <button type="submit">Submit</button>
</form>
```

Bu sayfa yüklendiğinde:

- Kullanıcının klavyesi aktifse, **hemen “First name” alanına yazmaya başlayabilir.**
- Çünkü autofocus özelliği bu alana verilmiştir.

---

### **🎯 Gerçek hayattan örnek:**

Amazon giriş sayfasını düşün. Sayfa açıldığında genellikle:

- **Kullanıcı adı (email) alanı otomatik olarak seçili olur.**
- Hemen yazmaya başlayabilirsin.
    
    İşte bu, autofocus özelliği sayesinde olur.
    

---

### **⚠️ Dikkat edilmesi gereken:**

- Bir sayfada **sadece bir input alanı** autofocus olabilir.
- Yoksa hangi alanın öncelikli olacağı belirsiz olur.

---