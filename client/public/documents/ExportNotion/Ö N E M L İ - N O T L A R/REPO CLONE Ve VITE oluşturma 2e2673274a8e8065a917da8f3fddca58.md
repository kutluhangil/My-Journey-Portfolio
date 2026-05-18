# REPO CLONE Ve VITE oluşturma

---

## **1️⃣ GitHub’da Repo Oluşturma**

1. **github.com** → sağ üst **➕ New repository**
2. Repo adı yaz (ör: react-vite-project)
3. **Public** seç
4. **Create repository** tıkla

---

## **2️⃣ Repoyu PC’ye Klonlama**

Terminal (VS Code terminali de olur):

```
git clone https://github.com/kullanici-adin/react-vite-project.git
```

Klasöre gir:

```
cd react-vite-project
```

---

## **3️⃣ Vite + React Kurulumu**

Repo klasörünün içindeyken:

```
npm create vite@latest .
```

Sorular:

```
Project name: (boş geç / otomatik)
Select a framework: React
Select a variant: JavaScript (veya TypeScript)
```

---

## **4️⃣ Bağımlılıkları Kur**

```
npm install
```

---

## **5️⃣ Projeyi Çalıştır**

```
npm run dev
```

Tarayıcıda:

```
http://localhost:5173
```

---

## **6️⃣ GitHub’a Gönder (İlk Commit)**

```
git add .
git commit -m "Vite + React setup"
git push origin main
```

---

## **🎯 Özet (tek bakışta)**

```
git clone REPO_URL
cd proje
npm create vite@latest .
npm install
npm run dev
```

---

[Node.Js](REPO%20CLONE%20Ve%20VITE%20olu%C5%9Fturma/Node%20Js%20317673274a8e806fb4bee0ad2c9879ae.md)