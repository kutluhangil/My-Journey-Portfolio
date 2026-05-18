# Yapılması gerekenler adım adım

### **1. Önceki ödev klasörünü kopyala**

- Finder veya VSCode üzerinden goit-markup-hw-02 klasörünü çoğalt.
- Yeni klasörün adı: goit-markup-hw-03 olsun.
- Kopyaladığın dosyalar üzerinden yeni ödev düzenlemelerine başla.

---

### **🌐 2. GitHub’da yeni repo oluştur**

GitHub’a gir ve:

- Sağ üstte **New repository** butonuna tıkla.
- Repository name → goit-markup-hw-03
- **❗ README.md, .gitignore, license kutularını boş bırak.**
- “Create repository” butonuna bas.

---

### **💻 3. VSCode’da yeni klasörde terminal aç**

VSCode içinde goit-markup-hw-03 klasörünü aç ve terminalden şunları sırayla yap:

```
git init
git add .
git commit -m "Initial commit for hw-03"
git branch -M main
git remote add origin https://github.com/kutluhangil/goit-markup-hw-03.git
git push -u origin main
```

✅ Sorunsuz gidecektir çünkü bu sefer GitHub’da boş repo oluşturdun!

---

### **🌐 4. GitHub Pages yayını aç**

1. GitHub’daki goit-markup-hw-03 reposuna git.
2. Settings > Pages sekmesine gel.
3. **Source:** main seç, **/root** (veya “root”) seç.
4. Kaydet → 1-2 dk içinde sayfa aktif olur.
    - Yayın adresi: https://kutluhangil.github.io/goit-markup-hw-03/

---

### **🔗 5. Canlı bağlantıyı About bölümüne ekle**

1. Repo ana sayfasına dön.
2. Sağ üstteki **About > ✏️ (kalem)** simgesine tıkla.
3. Web site linkini ekle:

```
https://kutluhangil.github.io/goit-markup-hw-03/
```

1. 
2. Kaydet.

---

## **🎯 Bonus İpuçları:**

- **README.md oluşturmak istiyorsan**, push işleminden sonra yerelden ekle → sonra commit/push.
- Eğer hata alırsan:
    
    git remote -v ile kontrol et → gerekiyorsa git remote set-url origin ... ile düzelt.
    
- **Uzak repoda daha önce dosya varsa**, push’tan önce:

```
git pull origin main --allow-unrelated-histories --no-rebase
```

---

Hazır olduğunda 3. ödevde birlikte yine adım adım ilerleriz.

Bu notları istersen PDF yapmamı ya da yazdırılabilir hale getirmemi de söyleyebilirsin. 🙌