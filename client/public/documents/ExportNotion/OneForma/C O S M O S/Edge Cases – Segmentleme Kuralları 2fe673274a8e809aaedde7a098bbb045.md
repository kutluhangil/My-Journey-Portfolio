# Edge Cases – Segmentleme Kuralları

---

## **🔁 1. Tekrar Eden Trigger (“Hey Siri”)**

**Durum:**

Kullanıcı art arda iki kez “Hey Siri” der.

**Kural:**

➡️ Segment **ilk “Hey Siri”** ile başlar.

İkinciyi bekleme.

---

## **❌ 2. Eksik / Hatalı Trigger**

**Durum:**

“Hey S hey Siri, email…”

**Kural:**

➡️ Segmenti **ilk bozuk ifade (“Hey S”) ile başlat**.

Trigger tam olmasa bile **kullanıcının niyeti yeterli**.

---

## **🔄 3. Aynı İsteğin Tekrarı**

**Durum:**

Kullanıcı aynı soruyu tekrar tekrar sorar.

Örnek:

- “Hey Siri, what is the time?”
- “Hey Siri, what is the time?”

**Kural:**

➡️ **Her tekrar ayrı segmenttir.**

📌 Aynı cümle bile olsa, yeni trigger = yeni segment.

---

## **🚫 4. Trigger’sız Komutlar**

**Durum:**

- “Google what’s the weather like”
- “Search the best book by Trevor Noah”

**Kural:**

➡️ Bunlar **trigger’sız komut** olarak kabul edilir.

➡️ **Segment başlatılır.**

---

## **⚠️ 5. Trigger’sız Komut – Gri Alan (“I wonder…”)**

**Durum:**

“I wonder when the last season of Gossip Girl came out.”

**Kural:**

➡️ **Aynı segmentte dahil edilir.**

➡️ Yeni segment açılmaz.

📌 Kararsız kalırsan:

- **Daha güvenli olanı seç**
- Characterization’da → **“not intended”** işaretlenir

---

## **🗣️ 6. Moderator Görev Talimatı Verirse**

**Durum:**

Ortada moderator görevle ilgili talimat verir

Sonra sohbet ve trigger’sız komut devam eder

**Kural:**

➡️ **Moderator talimatları DAHİL edilir**

➡️ **Segment bölünmez**

📌 Bu edge case’i **sistem sonradan ayıklıyor**, sen bölme.

---

## **🔊 7. Yeni Trigger + Siri Konuşması Çakışırsa**

**Durum:**

Yeni “Hey Siri” söylenirken Siri hâlâ konuşuyordur.

**Kural:**

➡️ **Segmentlerin overlap etmesi SERBEST**

➡️ Hatta **istenen bir durum**

📌 Amaç:

- Kim ne zaman konuştu → **ground truth**

---

## **🧠 HIZLI EZBER TABLOSU**

| **Durum** | **Ne Yapılır** |
| --- | --- |
| Tekrar “Hey Siri” | İlkini al |
| Bozuk trigger | Yine başlat |
| Aynı soru tekrar | Ayrı segment |
| Google / Search | Trigger’sız komut |
| “I wonder…” | Aynı segment |
| Moderator talimatı | Bölme |
| Overlap konuşma | Sorun değil |

---

## **🎯 ALTIN CÜMLE**

**Şüphede kaldığında bölme; dahil et.**

QA için **fazla bölmek**, eksik bölmekten daha risklidir.

---