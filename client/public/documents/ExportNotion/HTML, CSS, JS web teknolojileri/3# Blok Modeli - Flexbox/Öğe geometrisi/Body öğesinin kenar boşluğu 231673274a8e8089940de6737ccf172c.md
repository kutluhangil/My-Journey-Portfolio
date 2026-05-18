# Body öğesinin kenar boşluğu

Varsayılan olarak, `body` öğesinin `margin` değeri tarayıcı stil sayfasında her tarafta 8px olarak ayarlanmıştır. Bu, ek tasarıma sahip olmayan web sayfalarının içeriğinin tarayıcı sekmesinin sınırlarına sıkıca oturmaması ve metnin daha rahat okunması için yapılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1e2c5e05-f03b-4d84-8858-db62057775daScreenshot%202023-03-20%20at%2015.10.29.png)

Modern web sayfası tasarımında bu kenar boşluğu kullanılmaz, bu nedenle `body` seçicisi ile kuralda her zaman sıfırlanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7d86f585-2f51-4c79-bf0f-0724f51e29e7Screenshot%202023-03-20%20at%2015.11.38.png)

Modern geliştirmede `body` kenar boşluğunu sıfırlamak zaten bir tür "standart" olduğundan, modern-normalize normalleştirici bu adımı içerir. Bu nedenle, web sayfanızda normalleştiriciyi kullanırsanız, kodunuzda `body` kenar boşluğunu sıfırlamanıza gerek yoktur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/94b5b062-ac89-4105-8b78-83854cd12226Screenshot%202023-03-20%20at%2015.11.02.png)