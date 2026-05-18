# Anahtar Kelime !important

Bir CSS kuralının özgüllüğünü artırmak için **`!important`** anahtar kelimesi kullanılabilir. Bu anahtar kelime, belirli bir özelliğin değerinin diğer kurallardan önce uygulanmasını sağlar.

`<p class="text" id="text-id">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
  veritatis nihil alias iste odit similique sit eius optio veniam, impedit
  cumque fuga facere labore quo id necessitatibus quaerat rerum.
</p>`

Bu örnekte, paragrafa global bir öznitelik olan `id='text-id'` atanmıştır. Dolayısıyla, aşağıdaki kodda, Kimlik seçicisinin özgüllüğü, etiket tipi seçicisinden daha yüksektir ve paragraflardaki metin rengi mavi olacaktır.

`p {
  color: orange;
}

p#text-id.text {
  color: blue;
}`

Etiket türüne göre bir seçici ile kurala `!important` ekleyin.

`!important` içeren bir özelliğin değeri diğerlerine göre önceliklidir ve paragrafın metin rengi turuncu olur.

`p {
  color: orange !important;
}

p#text-id.text {
  color: blue;
}`

```
Modern geliştirmede!important kullanılmaması şiddetle tavsiye edilir. Kabul edilebilir tek durum, kütüphane stili gibi bir stil dosyasına doğrudan erişim yoksa bir özellik değerini geçersiz kılmaktır.
```