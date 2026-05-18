# GitHub Template Repo’yu Kendi Boş Repoma Aktarma (Notlarım)

## **🎯 Senaryo**

- GitHub’da boş bir repo oluşturdum (nodejs-hw-01)
- GitHub Desktop veya git clone ile bilgisayarıma çektim
- Repo boş
- Elimde bir template repo var
- Template içeriğini kendi repoma aktarmam gerekiyor

---

# **✅ YÖNTEM 1 — En Temiz ve Güvenli Yol (Önerilen)**

## **1️⃣ Proje klasörüne gir**

```
cd nodejs-hw-01
```

Kontrol et:

```
pwd
```

---

## **2️⃣ Template’i geçici klasöre clone et**

```
git clone https://github.com/goitacademy/nodejs-hw-01-template.git temp
```

Bu temp klasörü oluşturur.

---

## **3️⃣ İçindekileri ana klasöre taşı**

Normal dosyalar:

```
cp -R temp/* .
```

Gizli dosyalar (.gitignore vs):

```
cp -R temp/.* . 2>/dev/null
```

---

## **4️⃣ Geçici klasörü sil**

```
rm -rf temp
```

---

## **5️⃣ Git’e ekle ve push et**

```
git add .
git commit -m "init project from template"
git push
```

---

# **🎯 Sonuç**

- Template içeriği kendi repoma geçti
- Git geçmişi bana ait oldu
- Ödev kriteri sağlandı

---

# **⚠️ Neden Direkt Clone Yapmıyoruz?**

Eğer direkt şunu yaparsan:

```
git clone template-url .
```

.git klasörü template’e ait olur

Bu da repoyu karıştırır ve push problemi çıkarabilir.

Bu yüzden temp yöntemi güvenlidir.

---

# **💡 Alternatif Profesyonel Yöntem (İleri Seviye)**

Eğer template’i tamamen kendi repo haline getirmek istersen:

```
git remote remove origin
git remote add origin SENIN_REPO_URL
git push -u origin main
```

Ama ödevlerde genelde temp yöntemi daha güvenli.

---

# **🔎 Son Kontrol**

Projeyi çalıştır:

```
npm install
npm start
```

Hata olmamalı.

---