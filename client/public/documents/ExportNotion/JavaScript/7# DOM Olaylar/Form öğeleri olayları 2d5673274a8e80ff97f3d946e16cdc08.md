# Form öğeleri olayları

[submit **Olayı**](Form%20%C3%B6%C4%9Feleri%20olaylar%C4%B1/submit%20Olay%C4%B1%202d5673274a8e80fa8f66fbb144c54bc3.md)

[**change Olayı**](Form%20%C3%B6%C4%9Feleri%20olaylar%C4%B1/change%20Olay%C4%B1%202d5673274a8e80a3b17bd719324320c1.md)

[**input Olayı**](Form%20%C3%B6%C4%9Feleri%20olaylar%C4%B1/input%20Olay%C4%B1%202d5673274a8e80448711dc68b0c32cc9.md)

### **change vs input Olayı**

**change olayı**

- Form elemanının değeri **değişip odak kaybolduğunda** tetiklenir.
- <input> ve <textarea> için:
    - Her harfte **çalışmaz**
    - Kullanıcı yazmayı bitirip başka yere tıklayınca çalışır
- <select>, checkbox, radio için:
    - Değer seçilir seçilmez çalışır

**input olayı**

- Sadece <input> ve <textarea> için kullanılır
- **Her karakter değiştiğinde anında** tetiklenir
- Odak kaybını beklemez
- Canlı doğrulama, sayaç, arama gibi işlemler için idealdir

---

### **🧠 Kısaca mantık:**

- **Anlık tepki istiyorsan → input**
- **Değişiklik tamamlandığında işlem yapmak istiyorsan → change**

👉 Bu yüzden pratikte metin alanlarıyla çalışırken en çok **input olayı** kullanılır.

[**Olay focus ve blur**](Form%20%C3%B6%C4%9Feleri%20olaylar%C4%B1/Olay%20focus%20ve%20blur%202d5673274a8e8089aab0c78b10b8ce7e.md)