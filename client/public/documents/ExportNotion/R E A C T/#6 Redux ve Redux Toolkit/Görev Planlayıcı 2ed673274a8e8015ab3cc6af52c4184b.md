# Görev Planlayıcı

Görev planlayıcısı uygulamasının kodu üzerinden Redux'u inceleyeceğiz. Bu uygulamada görevler oluşturabilir, silebilir, tamamlanmış olarak işaretleyebilir ve görevleri durumlarına göre filtreleyebilirsiniz. Bu, veri koleksiyonu ile çalışırken standart durumları ele almamıza olanak tanıyacaktır.

Son hedef, arayüzü aşağıdaki gibi olacak bir uygulamadır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/9ada3f53-2dc7-41ee-9fe1-2de1ca74ec18image%20-%202024-10-15T132521.709.png)

Öncelikle programın arayüzü ve çalışma mantığı için temel gereksinimleri belirleyelim:

— Arayüz birkaç bölümden oluşmalıdır:

- Görev ve filtre bilgilerini içeren bir başlık
- Yeni görevler oluşturmak için bir giriş alanı içeren bir form
- Görevler listesi

— Başlıkta aşağıdakilerin görüntülenmesi gerekmektedir:

- Tamamlanan ve tamamlanmayan görevlerin sayısı
- "All", "Active" ve "Completed" değerlerine sahip görevler listesi filtreleri

— Görevler listesindeki her bir öğe için:

- Kullanıcının görev oluştururken forma girdiği metni içeren bir paragraf
- "Tamamlandı" durumunu değiştiren bir onay kutusu
- Görevi silmek için bir buton