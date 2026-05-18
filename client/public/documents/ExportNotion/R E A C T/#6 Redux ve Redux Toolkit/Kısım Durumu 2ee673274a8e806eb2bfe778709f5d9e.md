# Kısım Durumu

Uygulamamızın Redux durumu şu şekilde görünmektedir.

```
{
	tasks: {
		items: []
	},
	filters: {
		status: "all"
	}
}
```

`tasks` ve `filters` özellikleri, Redux yapısında **dilimler** (slices) olarak adlandırılır; çünkü uygulama verilerini kategorilere göre gruplandırırlar. Bir dilim, Redux durumunda her zaman birinci seviye bir özellik olmalıdır.

Bizim durumumuzda:

- `tasks` kısmı, görevlerin bir dizisini saklayacak ve gelecekte, örneğin görevler arka uçtan yüklenirken `loading` ve `error` gibi özelliklerle genişletilebilir.
- `filters` özelliği, durum filtresinin değerini saklar, ancak daha fazla filtre olabilir ve bunların hepsi `filters` kısmının içinde yer alacaktır.