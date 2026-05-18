# ESLint Ayarları

Vite ile oluşturulan projelerde kod kalitesi denetimi için **linting** işlemi önceden yapılandırılmıştır. VSCode editöründe linterdan görsel geri bildirim almak için [**ESLint uzantısını**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) eklemeniz gerekmektedir.

Kalite standartlarına uymayan kod parçaları, sarı (uyarı) veya kırmızı (hata) kesikli çizgi ile vurgulanacaktır. Kesikli çizginin üzerine geldiğinizde, sorunun açıklamasıyla birlikte bir açılır pencere görüntülenecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d89ea930-b952-42fd-a093-257b50690465Screenshot%202024-01-08%20at%2015.50.03.png)

Son olarak, **`.eslintrc.cjs`** dosyasında bir kuralı devre dışı bırakmamız gerekmektedir. **`rules`** bloğuna, **`react/prop-types`** kuralını **`0`** değeriyle ekleyerek bu kuralı devre dışı bırakabilirsiniz.

Gerekli ayarların bulunduğu aşağıdaki kodu alabilir ve bunu **`.eslintrc.cjs`**dosyasının içeriği ile değiştirebilirsiniz.

```
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
```