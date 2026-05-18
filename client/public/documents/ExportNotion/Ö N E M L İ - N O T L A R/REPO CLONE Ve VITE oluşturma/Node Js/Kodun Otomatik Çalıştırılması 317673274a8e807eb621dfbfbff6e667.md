# Kodun Otomatik Çalıştırılması

Kod üzerinde her değişiklik yaptığınızda **JavaScript** dosyasını manuel olarak çalıştırmak ve sunucuyu yeniden başlatmak zaman alıcı ve zahmetli olabilir. Bu süreci kolaylaştırmak için [**nodemon**](https://www.npmjs.com/package/nodemon) paketini kullanabilirsiniz.

Nodemon'u geliştirme bağımlılığı olarak eklemek için aşağıdaki komutu terminalde çalıştırın:

`npm install --save-dev nodemon`

- **Nodemon**, kaynak dosyalarda yapılan değişiklikleri izler ve otomatik olarak Node.js sunucusunu yeniden başlatır. Bu, geliştirme sürecinizi hızlandırır ve daha verimli hale getirir.

Uygulamayı başlatmak için **`package.json`** dosyasına bir betik ekleyin:

```
"scripts": {
    "dev": "nodemon src/index.js"
}
```