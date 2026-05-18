# Değişikliklerin Takibi

Eğer sorgu dizesi değişirse, `useSearchParams` hook’u yeni parametre değerlerini döndürür ve bileşen güncellenir, bu nedenle buna tepki verip bir etki başlatmak mümkündür.

```
const App = () => {
  const [user, setUser] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("username");

  useEffect(() => {
    // Burada asenkron bir işlem gerçekleştiriyoruz,
    // örneğin kullanıcı bilgileri için HTTP isteği
    if (username === "") return;

    async function fetchUser() {
      const user = await FakeAPI.getUser(username);
      setUser(user);
    }

    fetchUser();
  }, [username]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ username: form.elements.username.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && <UserInfo user={user} />}
    </>
  );
};
```