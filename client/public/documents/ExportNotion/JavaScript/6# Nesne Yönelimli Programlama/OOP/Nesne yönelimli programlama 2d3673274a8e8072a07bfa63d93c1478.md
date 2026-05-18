# Nesne yönelimli programlama

**Nesne Yönelimli Programlama (OOP) (Object Oriented Programming)**, programların nesnelerin bir bütün olarak yapılandırıldığı bir programlama paradigmasıdır. Bu nesneler gerçek veya soyut varlıkları temsil eder: kullanıcı, mağaza, araç vb. Her nesne, verileri (özellikleri) ve onlarla etkileşim için metodları içerir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d04a7a0f-3602-41e1-b532-1e43af03e68bFrame%2048644.jpg)

Önceki örnekte olduğu gibi, OOP kullanarak kodu yeniden yazalım.

Bu amaçla, verileri ve bunları işleme fonksiyonunu `employee` nesnesinde birleştiriyoruz.

```
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();
```

```
Bu yaklaşımla, global değişkenler yok veya neredeyse çok azdır. Yöntemler parametrelere bağlı değildir, nesnenin özelliklerini kullanır; bu özellikler nesne oluşturulurken belirlenir ve başka yöntemler tarafından değiştirilebilir.

```

OOP tarzında programlama, kodun yapısını düzenlemeye yardımcı olur, geliştirme ve bakımını kolaylaştırır ve nesneler etrafında ve etkileşimlerine dayalı daha karmaşık programların oluşturulmasını sağlar.