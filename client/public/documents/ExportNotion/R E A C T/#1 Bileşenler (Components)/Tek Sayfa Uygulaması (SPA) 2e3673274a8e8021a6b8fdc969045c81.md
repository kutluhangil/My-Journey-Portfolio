# Tek Sayfa Uygulaması (SPA)

Modern web geliştirme teknikleri, web sitelerinin daha estetik, daha hızlı ve kullanıcı dostu olmasını sağlamanın yanı sıra, web uygulamaları geliştirme paradigmasında da köklü değişiklikler getirmiştir. Günümüzde web uygulamalarını tasarlama ve oluşturma biçimimiz, geleneksel yöntemlere kıyasla oldukça farklıdır.

Örneğin, bir tarif koleksiyonu, egzersiz programı ya da başka herhangi bir içerik odaklı web sitesini düşünelim. Genellikle bu tür siteler; ana sayfa, profil sayfası, koleksiyon sayfası ve her bir koleksiyon öğesinin detay sayfası gibi çeşitli alt sayfalardan oluşur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e7caa91a-60ea-4630-85d7-61d081e1505aimage%20-%202024-09-23T155947.329.png)

Geleneksel yaklaşımla, kullanıcı her sayfaya geçtiğinde sunucudan yeni bir HTML dosyası talep edilirdi. Ancak modern yaklaşım, sayfalar arasında geçiş yaparken sunucudan sürekli yeni HTML sayfaları yüklememek üzerine kuruludur. Bunun yerine, tarayıcıda yalnızca tek bir HTML sayfası dinamik olarak güncellenir ve yeniden yükleme olmaksızın kullanıcı arayüzü (UI) güncellemeleri gerçekleştirilir. Bu tür uygulamalara **SPA** (Single Page Application – Tek Sayfa Uygulaması) adı verilir ve bu yaklaşım, React gibi modern kütüphanelerle öğrendiğimiz temel yapıdır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0c290414-b55f-4f9f-9083-6f4d28c77979image%20-%202024-09-23T160006.690.png)

İlerleyen modüllerde, bir web uygulamasını dinamik hale getirmenin ve birden çok sayfa görünümü sunmanın yollarını ele alacağız. Ancak bu dinamik yapı, kullanıcı her sayfaya geçtiğinde sunucudan yeni bir HTML talep etmeden, uygulamanın tarayıcı üzerinde sürekli olarak `index.html` sayfasını kullanması prensibine dayanır. Arayüzdeki tüm güncellemeler, tarayıcıda anlık olarak gerçekleşir.