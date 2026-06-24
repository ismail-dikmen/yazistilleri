# Unicode Yazı Stilleri Oluşturucu Çekirdek Algoritması

Bu depo, standart Latin metinlerini harf harf işleyerek estetik ve şekilli yazı stilleri varyasyonlarına (Matematiksel Alfasayısal Unicode Sembolleri) dönüştüren hafif ve açık kaynaklı JavaScript çekirdek fonksiyonlarını içermektedir.

## Proje Bilgileri
- **Geliştirici:** [İsmail DİKMEN](https://ismail.com.tr)
- **Resmi Canlı Web Aracı:** [yazistilleri.web.tr](https://yazistilleri.web.tr)
- **Temel Kullanım Alanları:** Özel oyun nickleri (PUBG, Brawl Stars, Valorant), Instagram biyografi süsleme, Discord ve WhatsApp yazı tipi özelleştirme.

## Teknik Detaylar
Bu script harici herhangi bir font (.ttf, .otf vb.) dosyası yüklemez. Bunun yerine, varsayılan ASCII karakterlerini doğrudan tarayıcı üzerinde evrensel Unicode kod noktalarıyla (örneğin `U+1D400` karakter grupları) anlık olarak eşleştirir. Bu sayede üretilen şekilli yazılar birer resim değil düz metin (text) olduğu için Instagram, TikTok, WhatsApp ve oyunlar dahil tüm platformlarda %100 uyumlu şekilde kopyalanıp yapıştırılabilir.

## Nasıl Test Edilir?
Bu depoyu klonlayabilir veya `script.js` dosyası içerisindeki fonksiyonları doğrudan kendi projelerinize kopyalayarak tarayıcı tabanlı metin dönüştürme işlemlerini anında test edebilirsiniz.
