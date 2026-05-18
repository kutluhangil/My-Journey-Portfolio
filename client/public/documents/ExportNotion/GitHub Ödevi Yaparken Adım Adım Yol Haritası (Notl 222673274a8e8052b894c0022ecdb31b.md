# GitHub Ödevi Yaparken Adım Adım Yol Haritası (Notlar)

Yapmam gerekenler ara ara:

| Görselleri ekledin | git add . → git commit -m "images klasörü eklendi" → git push origin main |
| --- | --- |
| Header’ı tamamladın | git commit -m "Header tamamlandı" |
| Main bölümünü yazdın | git commit -m "Ana içerik eklendi" |
| Footer’ı bitirdin | git commit -m "Footer tamamlandı" |
|  |  |

### **📁 1. GitHub’da Yeni Bir Repo Oluştur**

- GitHub’a giriş yap
- Yeni depo oluştur: goit-markup-hw-01 (veya hangi ödevse o)
- Depoyu **public** olarak oluştur
- Açılan sayfadan **“Code” > “HTTPS”** bağlantısını kopyala

---

### **💻 2. Bilgisayarımda Proje Klasörü Oluştur ve Klonla**

Terminalde:

```
cd ~/Desktop/Projects         # veya projeleri nerede tutuyorsan
git clone https://github.com/kutluhangil/goit-markup-hw-01.git
cd goit-markup-hw-01
```

---

### **🧱 n3. VS Code ile Aç ve Temel HTML Dosyasını Oluştur**

- VS Code’da: File > Open Folder > goit-markup-hw-01 klasörünü aç
- Yeni dosya oluştur: index.html
- ! yazıp Enter’a bas → HTML iskeleti otomatik oluşur

---

### **🖼️ 4. Figma’dan Görselleri İndir ve images/ Klasörüne Ekle**

- Proje klasörü içinde images adında yeni klasör oluştur
- Figma’dan görselleri Export edip bu klasöre ekle
- HTML’de src="images/...png" şeklinde kullan

---

### **💾 5. Git ile Sürüm Kaydet (commit & push)**

🟨 Her önemli değişiklikten sonra bu 3 adımı uygula:

```
git add .
git commit -m "Yaptığın değişiklik kısa ve açıklayıcı şekilde yaz"
git push origin main
```

✅ Örnek:

```
git add .
git commit -m "Header ve görseller eklendi"
git push origin main
```

---

### **🧪**

### **6. Kontrol İçin git status Kullan**

```
git status
```

Aşağıdaki gibi görünüyorsa her şey yolunda:

```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

### **🌐 7. GitHub Pages Yayını (İstenirse)**

GitHub repo sayfasına git:

1. Settings > Pages sekmesine gir
2. “Source” kısmından main şubesini seç, /root dizinini seç
3. “Save” butonuna bas
4. Kısa süre sonra projen şu bağlantıda yayında olur:

```
https://kutluhangil.github.io/goit-markup-hw-01/
```

---

## **📌 Bonus: .DS_Store**

## **gibi istemediğin dosyaları dışarıda bırakmak için**

Klasöre .gitignore adında bir dosya oluştur ve içine şunu yaz:

```
.DS_Store
```

Bu sayede macOS sistem dosyaları commit edilmez.

---

[Yapılması gerekenler adım adım](GitHub%20%C3%96devi%20Yaparken%20Ad%C4%B1m%20Ad%C4%B1m%20Yol%20Haritas%C4%B1%20(Notl/Yap%C4%B1lmas%C4%B1%20gerekenler%20ad%C4%B1m%20ad%C4%B1m%2022b673274a8e80e88201cad1fc8ea360.md)