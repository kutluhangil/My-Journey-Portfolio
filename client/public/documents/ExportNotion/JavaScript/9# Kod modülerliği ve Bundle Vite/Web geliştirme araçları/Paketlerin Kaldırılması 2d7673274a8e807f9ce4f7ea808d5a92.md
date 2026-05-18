# Paketlerin Kaldırılması

Projemizde artık `validator.js` kütüphanesini kullanmayı bırakmaya karar verdiğimizi varsayalım.

Kütüphaneyi kullandığımız kodu kaldırmanın yanı sıra, projenin bağımlılığı olarak bu

kütüphaneyi de kaldırmamız gerekmektedir.

Herhangi bir bağımlılığı şu komutla kaldırabiliriz:

`npm uninstall [package-name]`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/59cf37a3-fa84-4adf-be0c-9185fa75d82bScreenshot%202023-09-14%20at%2014.11.19.png)

Bağımlılığın kaldırılması durumunda da, `package.json` dosyası tıpkı eklenme sürecinde olduğu gibi otomatik olarak güncellenir.

```
{
  "name": "my-vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  }
}
```