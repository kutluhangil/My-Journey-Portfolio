# Temel Teknoloji

Docker, [Go programming language](https://golang.org/) ile yazılmıştır ve işlevselliğini sağlamak için Linux kernel’in çeşitli özelliklerinden yararlanır. Docker, container adı verilen izole çalışma alanını sağlamak için **`namespaces`** teknolojisini kullanır. Bir container çalıştırıldığında Docker, o container için bir dizi namespace oluşturur.

Bu namespace’ler bir izolasyon katmanı sağlar. Container’ın her yönü ayrı bir namespace içinde çalışır ve erişimi yalnızca o namespace ile sınırlıdır.