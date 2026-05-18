# Dikey dolgu ve kenarlıklar

Satır içi (inline) öğelerin üst ve alt dolgusu ile kenarlıkları, beklenmedik şekilde çalışabilir. Bu öğelerin boyutunu artırmazlar, ancak görsel olarak etkilerler.

- Blok ve satır içi öğelerin dolgu ve kenarlık ayarlandığında nasıl göründüğünü inceleyin.
- İşaretlemedeki öğelerin sırasını görmek için **HTML** sekmesine tıklayın.
- Satır içi öğelerin nasıl şekillendirildiğini ve görünümlerini karşılaştırmak için **CSS** sekmesine tıklayın.

Yukarıdaki örnekte, iki paragraf arasında yer alan iki `<span>` satır içi öğesi, arka plan dolgu ve kenarlıklarla etkilenmiş olarak görünmektedir. Bu öğeler, görsel olarak üst ve alt kenarlıkların, bitişik paragraf satırlarına doğru uzandığı ve alışılmadık bir şekilde davrandığı bir etki yaratmaktadır.

Bu durum, tarayıcıların render özelliklerinden kaynaklanmaktadır. Satır içi öğelerin üst ve alt kenarlıkları, komşu öğelerin geometrisini etkilemez; bu nedenle bu özelliklerin kullanımı dikkatle değerlendirilmelidir.