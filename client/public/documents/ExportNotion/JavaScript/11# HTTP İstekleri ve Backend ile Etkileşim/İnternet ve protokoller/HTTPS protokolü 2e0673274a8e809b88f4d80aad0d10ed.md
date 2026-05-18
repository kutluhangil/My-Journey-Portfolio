# HTTPS protokolü

**HyperText Transfer Protocol Secure**, HTTP'nin üzerinde, istemci ve sunucu arasındaki tüm mesajların güvenlik amacıyla şifrelendiği bir ayardır.

HTTPS protokolü, bağlantının gizlice dinlenmesine dayalı saldırılara karşı koruma sağlar. Veriler kriptografik protokoller SSL veya TLS kullanılarak iletilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/03ca6695-528e-4d8f-a08b-f0d4548c5834Frame_771531.jpg)

Normal bir HTTP bağlantısı üzerinden veri alışverişi yapıldığında, tüm veriler metin biçiminde iletilir ve istemci ile sunucu arasındaki bağlantıya erişimi olan herkes tarafından okunabilir. Kullanıcılar çevrimiçi alışveriş yapıyor ve kredi kartı bilgilerini içeren bir sipariş formu dolduruyorlarsa, metin olarak iletilen finansal verilerinin çalınması çok daha kolaydır. HTTPS ile veriler şifrelenir ve şifre çözme işlemi sunucuda depolanan özel bir anahtara erişim gerektirdiğinden bir bilgisayar korsanı bu verilerin şifresini çözemez.

HTTPS protokolü, kredi kartı numaraları gibi müşteri bilgilerinin şifrelenmesini ve şifresi çözülmüş halde ele geçirilememesini sağlar. Ziyaretçiler, adres çubuğunun solundaki simgeye bakarak sitenin güvenli olduğunu doğrulayabilir; güvenli bağlantılar bir asma kilit simgesiyle işaretlenir.