# HTML belgesi ve DOM

DOM modeline göre, her etiket ayrı bir öğe düğümü (element node) oluşturur ve her metin parçası içindeki öğe bir metin düğümü (text node) barındırır.

HTML belgesi, her elementin (kök hariç) tek bir üst öğeye yerleştirildiği hiyerarşik bir ağa sahiptir. Şemada, `html` öğesinin `document` içinde bulunduğunu görüyoruz. Dolayısıyla, `document`, `html` için üst öğedir. Aynı şekilde, `html`, `head` ve `body` için üst öğedir. `document`'in üst öğesi yoktur çünkü `document` kök öğedir. Gömülü bir yapıya sahip etiketlerin ve metin öğelerinin birleşmesiyle hiyerarşik bir ağ oluşturulur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/951fb64c-fc26-4184-ae6a-af089fe41237Frame%2048658.jpg)

# **DOM ağacı nasıl oluşturulur?**

DOM ağacının nasıl oluşturulduğunu bilmek için, bir HTML belgesinin tarayıcı tarafından önce kendi anlayabileceği bir formata dönüştürüldüğünü bilmemiz gerekir — DOM. Tarayıcı yorumlayıcısında yer alan özel bir kod parçası olan HTML ayrıştırıcısı, HTML'yi DOM'a dönüştürmek için kullanılır.

HTML'de, iç içelik elemanlar arasındaki ebeveyn-çocuk ilişkilerini belirler. DOM'da, nesneler bu ilişkileri kaydederek ağaç benzeri bir veri yapısında birbirine bağlanır.

Tarayıcı, ilk kod parçacıkları gelmeye başladığında DOM'u adım adım oluşturur; HTML ayrıştırmaya başladığında, düğümleri ağaç benzeri yapısına ekleyerek ilerler.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/fe181897-7f7f-4cb1-b334-35c784924690image.gif)

DOM ağacı oluşturulduktan sonra, her bir öğe JavaScript kullanılarak bulunabilir. Her öğe, birçok özelliğe ve yönteme sahip olduğundan, gerekli işlemler gerçekleştirilebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bab7c9bd-902b-47e5-b14a-c917ff65d376image%20%281%29.gif)