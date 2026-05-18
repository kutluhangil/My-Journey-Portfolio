# Özellik max-width

Bir önceki adımdaki örneğin kodunu analiz ederken, aşağıdaki kuralı fark ettiniz mi?

`.card-image {
  max-width: 100%;
}`

- Canlı örneğin sağ üst köşesindeki **Codepen** seçeneğine tıklayın. Kodu değiştirebileceğiniz ve ne yaptığını görebileceğiniz bir sayfaya yönlendirileceksiniz.
- `max-width: 100%;` `max-width: 100%;` kuralını yorumlamayı ve değiştirmeyi deneyin ve ne olduğunu görün.

Hazır mı?

Beklenmedik bir şey miydi?

```
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  line-height: 1.5;
  background-color: #f9f9fd;
}

.card {
  max-width: 320px;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  background-color: #f44336;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

.card-image {
  display: block;
  max-width: 100%;
}

.card-heading {
  margin: 0;
  padding: 20px;
  font-weight: 500;
  background-color: #03a9f4;
}
```