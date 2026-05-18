# transition özet

Tüm geçiş özellikleri tek bir bileşik `transition` özelliğinde birleştirilebilir.

`transition: *[property]* *[duration]* *[timing-function]* *[delay]*`

Birden fazla özellik canlandırılıyorsa, her bir özelliğin değer kümesi virgülle ayrılır.

Geçiş özelliğini ve zamanını belirtmelisiniz.

Zaman fonksiyonu ve gecikme atlanabilir — bu durumda varsayılan değerler kullanılır.

`transition: background-color 500ms linear, transform 500ms ease-in-out;`

![Screen Shot 2025-07-26 at 13.05.42 PM.png](transition%20%C3%B6zet/Screen_Shot_2025-07-26_at_13.05.42_PM.png)

  transition: color 150ms ease-in-out 0ms, background-colour 150ms ease-in-out 150ms