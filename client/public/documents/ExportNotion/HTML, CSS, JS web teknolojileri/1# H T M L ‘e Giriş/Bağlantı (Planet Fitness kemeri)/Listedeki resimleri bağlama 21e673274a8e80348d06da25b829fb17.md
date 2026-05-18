# Listedeki resimleri bağlama

Bir listeyi, bir bağlantıyı ve bir resmi birleştirmek mümkün mü?

Örneğin, `ul` veya `ol` liste etiketleri zorunlu olarak iç içe geçmiş `li` öğelerine sahiptir - bu, iç içe geçmenin ilk seviyesidir. Bir bağlantıyı `<li>` içine gömebilirsiniz `<a>` - bu ikinci seviyedir. Ve `<img>`yi bağlantı etiketine gömebilirsiniz - bu üçüncü iç içe geçme seviyesidir.

Kodda bu şekilde görünür:

`<ul>
	<li>
		<a href="">
			<img src="" alt=""/>
		</a>
	</li>
	<li>
		<a href="">
			<img src="" alt=""/>
		</a>
	</li>
</ul>`

İlk başta karmaşık görünebilir, ancak sıralamayı hatırlar ve biraz pratik yaparsanız, alışırsınız.

```
Geliştiriciler genellikle farklı seviyelerde iç içe geçme ile uğraşır mı?
Evet, çeşitli iç içe geçme seviyeleri gerçek dünya projelerinde yaygındır. Bu derste en yaygın durumları ele alacağız, böylece bu tür yapıların üstesinden kolaylıkla gelebilirsiniz.
```