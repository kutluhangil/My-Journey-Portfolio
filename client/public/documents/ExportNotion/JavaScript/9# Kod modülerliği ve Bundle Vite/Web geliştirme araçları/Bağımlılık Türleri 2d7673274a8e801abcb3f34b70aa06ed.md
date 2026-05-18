# Bağımlılık Türleri

Bir pasta hayal et. Onu hazırlamak için şefin öncelikle malzemelere ihtiyacı vardır çünkü onlar pastanın içine girecektir. Ayrıca özel araçlar da gerekecektir; mesela mikser, hamur kabı, spatula ve benzeri şeyler. Mutfakta masalar, fırınlar, buzdolapları da vardır; yani herhangi bir yemeği hazırlamak için kullanılan eşyalar genel araçlardır ve mutfakta bulunurlar.

Proje bağımlılıkları da aynı şekilde işler: bazıları son üründe kullanılacak, diğerleri ise sadece geliştirme aşamasında gereklidir.

Tam olarak bu amaca yönelik olarak, `npm install` ve `npm uninstall` komutlarının iki anahtar kelimesi vardır:

- `-save` — Yüklenen bağımlılığın son ürüne ekleneceğini belirtir. Paket, yerel olarak `node_modules` klasörüne kurulacak ve `package.json` dosyasındaki `dependencies` alanına kayıt eklenir.
- `-save-dev` — Yüklenen bağımlılığın yalnızca geliştirme sürecinde gerekli olduğunu belirtir. Bu bağımlılıklar son ürüne dahil edilmez. Paket, yerel olarak `node_modules` klasörüne kurulacak ve `package.json` dosyasındaki `devDependencies` alanına kayıt eklenir.

Anahtar belirtilmezse, varsayılan olarak `--save` kullanılır.

```
Bir paketi kaldırırken, yüklemede olduğu gibi doğru anahtarı belirtmek önemlidir.
```