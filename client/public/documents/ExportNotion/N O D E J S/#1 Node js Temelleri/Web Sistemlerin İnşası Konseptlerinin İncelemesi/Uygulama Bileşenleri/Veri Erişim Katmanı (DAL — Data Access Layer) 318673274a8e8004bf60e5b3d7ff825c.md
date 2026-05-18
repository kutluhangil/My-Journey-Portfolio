# Veri Erişim Katmanı (DAL — Data Access Layer)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/680556e5-fcb1-47f3-8bcf-b8cbaae653d7Group%207%20%282%29.png)

Günümüz dünyasında iş mantığı neredeyse her zaman veri depolama ile ilişkilidir. Bunun için birçok farklı **DBMS** (veritabanı yönetim sistemleri) bulunmaktadır; bunları bir sonraki bölümün bağlamında daha fazla ele alacağız. Genellikle bu katman, uygulamanın hangi veritabanını kullandığına bağlıdır, ancak genel olarak bu katmanın yöntemleri, çağrıldıklarında neler olduğunu anlamamıza olanak tanır (bu, belirli bir mantığı bir işlevde kapsüllemenin tipik bir örneğidir).