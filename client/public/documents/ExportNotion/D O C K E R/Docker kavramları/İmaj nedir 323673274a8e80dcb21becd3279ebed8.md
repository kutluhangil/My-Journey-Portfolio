# İmaj nedir?

**Açıklama**

Konteyner izole bir proses olduğuna göre, dosyalarını ve yapılandırmasını nereden alıyor? Bu ortamları nasıl paylaşıyorsunuz?

İşte konteyner imajları devreye girer. Bir konteyner imajı, konteyneri çalıştırmak için gereken tüm dosyaları, ikili dosyaları, kütüphaneleri ve yapılandırmaları içeren standart bir pakettir.

- Örneğin [PostgreSQL](https://hub.docker.com/_/postgres) imajı veritabanı ikili dosyalarını, config dosyalarını ve bağımlılıkları içerir.
- Bir Python web uygulaması imajı, Python runtime, uygulama kodu ve tüm bağımlılıkları ile birlikte gelir.

İmajlarla ilgili iki önemli ilke vardır:

1. **Immutable (değiştirilemez)**: Bir imaj oluşturulduktan sonra değiştirilemez. Sadece yeni bir imaj oluşturabilir veya üzerine değişiklik ekleyebilirsiniz.
2. **Katmanlı yapı**: Konteyner imajları katmanlardan oluşur. Her katman, dosya sistemi değişiklikleri ekleyen, kaldıran veya değiştiren bir settir.

Bu iki ilke, mevcut imajları genişletmenize veya üzerine ekleme yapmanıza olanak tanır. Örneğin Python uygulaması geliştiriyorsanız, [Python image](https://hub.docker.com/_/python) ile başlayıp bağımlılıkları yükleyen ve kod ekleyen katmanlar ekleyebilirsiniz. Bu sayede Python’a değil, uygulamanıza odaklanabilirsiniz.

**İmaj bulma**

[Docker Hub](https://hub.docker.com/) imajları depolamak ve dağıtmak için varsayılan global pazardır. 100,000’den fazla imaj mevcuttur ve doğrudan Docker Desktop üzerinden çalıştırabilirsiniz.

Docker Hub, Docker Trusted Content olarak bilinen, Docker tarafından desteklenen ve onaylanan çeşitli imajlar sunar. Bunlar:

- [Docker Official Images](https://hub.docker.com/search?q=&type=image&image_filter=official) – güvenli ve küratörlü resmi imajlar, çoğu kullanıcı için başlangıç noktası
- [Docker Verified Publishers](https://hub.docker.com/search?q=&image_filter=store) – ticari yayıncılar tarafından sağlanan yüksek kaliteli imajlar
- [Docker-Sponsored Open Source](https://hub.docker.com/search?q=&image_filter=open_source) – Docker tarafından desteklenen açık kaynak projeler tarafından yayınlanan ve bakım yapılan imajlar

Örneğin, [Redis](https://hub.docker.com/_/redis) ve [Memcached](https://hub.docker.com/_/memcached) popüler Docker Official Images örnekleridir. Hızlıca indirip çalıştırabilirsiniz. Ayrıca, [Node.js](https://hub.docker.com/_/node) gibi