# Pseudo sınıf :placeholder-shown

Araç ipucu metninin görünürlüğüne ve `placeholder` niteliğinin değerine bağlı olarak `:placeholder-shown` sözde sınıfı kullanılır.

Araç ipucu metni görünürken, bu sınıfın kuralları geçerli olur. Kullanıcı en az bir karakter girdiğinde, araç ipucu kaybolur ve sözde sınıf devre dışı kalır.

`input {
  border: 1px solid orange;
}

input:placeholder-shown {
  border-color: blue;
}`

Form alanına metin girin.

Araç ipucundaki metin kaybolduğunda alan kenarlığının rengi turuncuya dönüşür.

![Screen Shot 2025-07-31 at 00.24.32 AM.png](Pseudo%20s%C4%B1n%C4%B1f%20placeholder-shown/Screen_Shot_2025-07-31_at_00.24.32_AM.png)