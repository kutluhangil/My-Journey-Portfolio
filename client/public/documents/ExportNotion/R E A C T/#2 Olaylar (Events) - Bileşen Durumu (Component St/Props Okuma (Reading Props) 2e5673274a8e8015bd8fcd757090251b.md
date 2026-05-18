# Props Okuma (Reading Props)

Olay işleyicileri, bileşen içinde tanımlandıkları için bileşenin `props`'larına erişim sağlayabilirler. Aşağıda, üzerine tıklandığında `message` prop'unun değerini içeren bir `alert` gösteren `CustomButton` adlı bileşenin örneği verilmiştir:

```
const CustomButton = ({ message, children }) => {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
};

const App = () => {
  return (
    <>
      <CustomButton message="Playing music!">
        Play some music
      </CustomButton>
      <CustomButton message="Uploading your data!">
        Upload data
      </CustomButton>
    </>
  );
}
```