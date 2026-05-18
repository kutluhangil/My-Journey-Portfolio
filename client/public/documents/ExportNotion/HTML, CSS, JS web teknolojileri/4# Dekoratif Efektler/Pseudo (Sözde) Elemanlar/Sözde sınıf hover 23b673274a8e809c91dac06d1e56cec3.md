# Sözde sınıf :hover

Üst öğede bir olay meydana geldiğinde, örneğin fare üzerine getirildiğinde, sözde öğenin stillerini değiştirmek için aşağıdaki seçiciyi kullanın.

`*/* .box::before sözde öğesine .box öğesinin üzerine gelindiğinde stilleri uygulama */*.box:hover::before {
  background-color: green;
}

*/* .box::after sözde öğesine .box öğesinin üzerine gelindiğinde stilleri uygulama */*.box:hover::after {
  background-color: tomato;
}`

Görüntüleri karşılaştırın,

durgun halde:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0c4658c0-3df3-4ecc-83ff-48a96872ebb3Screenshot%202023-04-28%20at%2014.39.33.png)

üzerine gelindiğinde:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/cab1b3d9-3e65-44d8-a4c1-9104714bdcb4Screenshot%202023-04-28%20at%2014.39.39.png)