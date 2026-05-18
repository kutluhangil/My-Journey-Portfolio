# CSS pikselleri

**CSS pikselleri (device-independent pixels)** cihazın ekranına bağlı olmayan soyut bir değerdir. CSS pikselleri, tarayıcı tarafından sayfadaki öğelerin boyutunu hesaplamak için kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/dd32bc74-82b1-4736-94c8-70c7c695b97bimage%20%2866%29.png)

Normal ekranlarda, bir CSS pikseli cihazdaki bir fiziksel piksele karşılık gelir.

Ölçeklendirme sırasında ve yüksek piksel yoğunluğuna sahip ekranlarda, bir CSS pikseli birden fazla fiziksel piksel içerebilir.

Örneğin, 2x2 piksel boyutunda bir bloğunuz varsa:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/82be63b9-69fa-455a-ba7e-1272a13698faimage%20%2867%29.png)

Bir CSS dosyasındaki ve HTML belgesindeki boyutların CSS pikselleri cinsinden belirtildiğini biliyoruz.

- **Normal ekranlarda**, bir öğe `2x2` fiziksel piksellik bir alanı kaplayacaktır.
- **Örneğin yoğunluğu `2`** olan **ekranlarda**, aynı blok `4x4` fiziksel piksel kaplayacaktır. Yani, yatay ve dikey olarak iki kat daha büyüktür.

Böylece, piksel yoğunluğu standart olandan iki kat daha yüksek olan ekranlarda, piksel sayısı normal olanlardan 4 kat daha fazladır.