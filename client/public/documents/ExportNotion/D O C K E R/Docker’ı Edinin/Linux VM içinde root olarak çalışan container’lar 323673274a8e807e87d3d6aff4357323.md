# Linux VM içinde root olarak çalışan container’lar

Docker Desktop ile Docker daemon ve container’lar, Docker tarafından yönetilen hafif bir Linux VM içinde çalışır.

Yani container’lar varsayılan olarak **`root`** olarak çalışsa bile, bu Mac host makinesine **`root`** erişimi vermez.

Linux VM, güvenlik sınırı görevi görür ve host’tan erişilebilecek kaynakları sınırlar.

Host’tan Docker container’larına bind mount edilen dizinler orijinal izinlerini korur.

**Enhanced Container Isolation**

Buna ek olarak Docker Desktop, yalnızca **Business** müşterilerine sunulan **Enhanced Container Isolation (ECI)** modunu destekler.

ECI, geliştirici iş akışlarını etkilemeden container güvenliğini daha da artırır.

ECI, tüm container’ları otomatik olarak bir Linux user-namespace içinde çalıştırır; container içindeki **root**, Docker Desktop VM içindeki ayrıcalıksız bir kullanıcıya eşlenir.

ECI, container’ları Docker daemon ve VM içinde çalışan diğer servislerden daha da izole etmek için bu ve benzeri ileri teknikleri kullanır.