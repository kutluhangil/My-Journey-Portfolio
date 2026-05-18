# display Özelliği

`display` özelliği, bir flex-container oluşturmak için kullanılır. Bu özellik iki değere sahip olabilir: `flex` ve `inline-flex`.

`display: flex | inline-flex`

Belirtilen değere bağlı olarak, `display` özelliği, kapsayıcının alt öğelerini flex bağlamına dönüştürür ve bunları flex öğeleri olarak düzenler.

`<ul class="menu">
  <li class="item"><a href="" class="link">Ana Sayfa</a></li>
  <li class="item"><a href="" class="link">Blog</a></li>
  <li class="item"><a href="" class="link">Podcastler</a></li>
  <li class="item"><a href="" class="link">İletişim</a></li>
</ul>`

Şimdi `ul.menu` öğesini bir `flex-container` dönüştürerek yatay bir menü oluşturalım. Daha sonra alt öğeleri olan `li.item` öğeleri, varsayılan olarak soldan sağa olan ana eksen boyunca düzenlenecektir.

`.menu {
  display: flex;
}`

- Liste öğelerinin flex konteynerinde nasıl görüntülendiğini görmek için **Result** öğesine tıklayın.
- **CSS** sekmesine tıklayın ve flex konteynerini oluşturan kod parçacığını bulun.
    
    ![Screen Shot 2025-07-18 at 21.42.15 PM.png](display%20%C3%96zelli%C4%9Fi/Screen_Shot_2025-07-18_at_21.42.15_PM.png)