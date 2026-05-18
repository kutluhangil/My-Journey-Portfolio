# ÖNEMLİ - Proje Değişikliklerini Saklama

**Commit (Taahhüt)** — Bu, Git'e mevcut dosya durumunu projede sabitlemek istediğini söylemenin bir yoludur. Bu, oyun içinde bir kontrol noktası oluşturmakla benzerdir, tek farkı oyun dünyasının değil, proje dosyalarının durumunun sabitlenmesidir. Tüm commit'ler depo geçmişinde saklanır.

Bir commit'in nasıl göründüğünü inceleyelim:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/fc630675-25f5-4dc2-bf4c-12c16f0053e2Screenshot%202023-11-24%20at%2010.26.02.png)

Her bir taahhüt,

- benzersiz bir numaradan (kimlik) oluşur,
- geliştirici bilgileri alanı,
- taahhüt oluşturma tarihi,
- kısa bir ileti içerir.

Geliştirici, her taahhüte kısa bir ileti ekler. Bu, kaydedilen değişikliklerin açıklaması olarak hizmet eder ve bu taahhütte neyin yapıldığını ve neden yapıldığını anlamamıza yardımcı olur.

Proje dosyalarındaki değişiklikleri saklamak için `git commit` komutu kullanılır ve `-m` bayrağı, kısa bir iletiyi doğrudan komut satırına eklememizi sağlar.

`git commit -m "commit message"`

```
Git commit kullanmadan önce, projedeki tüm değişiklikleringit add --all komutu ile kontrol altına alındığından emin olmak çok önemlidir. Bu adımı atlamamak, projenin bütünlüğünü korumak için hayati öneme sahiptir.

```

Projemizde ilk commit'i yapalım.

Git commit işleminden sonra `git status` komutu, son kayıttan bu yana projede yeni değişiklikler olmadığını bildiren bir mesaj verir.

`todo.md` dosyasını değiştirelim, proje durumunu kontrol edelim, ardından yeni değişiklikleri izleme altına alıp onları kaydetmek için bir commit işlemi gerçekleştirelim.

**Commit İletileri İçin En İyi Uygulamalar:**

- İngilizce yazın.
- İletinizin yapılan değişiklikleri net bir şekilde yansıtması gerekir.
- "Added", "Fixed", "Updated" yerine "Add", "Fix", "Update" gibi bir emir olarak ileti formüle edin.
- Commit ileti kısa olmalı, ancak bilgilendirici olmalıdır.

Ne sıklıkta değişiklikleri kaydetmek (commit) mantıklıdır?

Her seferinde `git add --all` komutunu çalıştırmaya karar verdiğinizde, yani değişiklikleri kontrol altına almak istediğinizde yaparsınız. Başlangıçta muhtemelen bunu her çalışma oturumunun sonunda, bilgisayardan ayrılmadan önce yapacaksınız.