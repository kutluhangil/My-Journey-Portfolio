# Virtual (Sanal) DOM

React bileşenlerini tanımlarken ve JSX yazarken, aslında doğrudan tarayıcı DOM’u ile etkileşime geçmeyiz. React, tarayıcıdaki gerçek DOM ile doğrudan etkileşim kurmak yerine, araya **Virtual DOM (Sanal DOM)** adı verilen bir katman yerleştirir.

Tarayıcı DOM’u (Document Object Model), HTML belgesini tarayıcıda temsil eden bir nesne yapısıdır. HTML sayfası yüklendiğinde, tarayıcı bu DOM yapısını oluşturarak HTML kodunun yapısını yansıtır. Bu yapı sayesinde JavaScript; sayfadaki öğelerle etkileşime geçebilir, stil ve özellikleri değiştirebilir, yeni öğeler ekleyebilir veya var olanları silebilir.

Ancak DOM’da yapılan her değişiklik tarayıcıda yoğun işlem gerektirir. DOM’un sık sık güncellenmesi, performansı olumsuz etkileyebilir ve arayüzün yavaşlamasına neden olabilir. İşte bu noktada Virtual DOM devreye girer.

**Virtual DOM**, gerçek DOM’un hafifletilmiş bir kopyasıdır ve bellekte bir JSON yapısı olarak tutulur. React bileşenleri ile tarayıcıdaki gerçek DOM arasında bir ara katman görevi görür.

Virtual DOM’un bazı temel özellikleri şunlardır:

- Sadece bellekte bulunur, tarayıcıda render edilmez.
- Tarayıcının iç implementasyonuna bağlı değildir.
- Gerçek DOM güncellemeleri için en verimli yöntemleri uygular.
- Render optimizasyonu için güncellemeleri gruplar hâlinde işler.