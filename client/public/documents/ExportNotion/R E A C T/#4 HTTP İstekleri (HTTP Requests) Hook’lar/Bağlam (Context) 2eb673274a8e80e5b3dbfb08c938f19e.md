# Bağlam (Context)

React bileşenleri arasındaki veri aktarımı genellikle `props` aracılığıyla yapılır. Ancak, bazı küresel veriler (örneğin, yerelleştirme, tema, kimlik doğrulama durumu gibi) uygulamanın farklı seviyelerindeki bileşenler tarafından kullanılmak istenebilir. Bu durumda, her bir bileşene manuel olarak `props` göndermek pratik olmayabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/eb00b9bd-7630-47d2-aea2-7617702cd199image%20-%202024-10-15T001757.805.png)

Context, bileşenler ağacındaki herhangi bir bileşenin, ara bileşenlere `props`aktarmadan veriye ulaşabilmesini sağlar. Bu mekanizma, veriyi doğrudan bileşen ağacının derinliklerine iletme olanağı sunar.

```
Not: Context'i yalnızca birkaç seviyeden fazla props geçmekten kaçınmak amacıyla kullanmayın. Bu mekanizma dar bir kullanım alanı için tasarlanmıştır.
```

[**Context Oluşturma**](Ba%C4%9Flam%20(Context)/Context%20Olu%C5%9Fturma%202eb673274a8e801fba2ece91c45c6137.md)

[**<Provider> Bileşeni**](Ba%C4%9Flam%20(Context)/Provider%20Bile%C5%9Feni%202eb673274a8e80e88b2bd3b5c761a44f.md)

[**useContext() Hook’u**](Ba%C4%9Flam%20(Context)/useContext()%20Hook%E2%80%99u%202eb673274a8e8036bcadc01db08396f3.md)

[**Kullanıcı Context'i**](Ba%C4%9Flam%20(Context)/Kullan%C4%B1c%C4%B1%20Context'i%202eb673274a8e80fba62adc6142ebeb00.md)

[**Özel Provider Bileşeni**](Ba%C4%9Flam%20(Context)/%C3%96zel%20Provider%20Bile%C5%9Feni%202eb673274a8e8027965ad821e1e4b15b.md)