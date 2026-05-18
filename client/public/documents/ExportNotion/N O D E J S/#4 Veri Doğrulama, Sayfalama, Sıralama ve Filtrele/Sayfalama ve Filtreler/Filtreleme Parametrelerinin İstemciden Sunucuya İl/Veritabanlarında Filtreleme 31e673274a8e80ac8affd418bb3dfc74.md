# Veritabanlarında Filtreleme:

Veritabanlarında filtreleme, ilişkisel veritabanları için SQL gibi çeşitli sorgu dilleri veya **NoSQL** veritabanları için **MongoDB Sorgu Dili** kullanılarak gerçekleştirilebilir.

**NoSQL** veritabanında filtreleme için bir **MongoDB** sorgu örneği:

`db.students.find({ avgMark: { $gte: 10 } });`

Bu örnekte, sorgu, ortalama notu en az 10 olan öğrencileri filtreler.