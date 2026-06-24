/**
 * Unicode Şekilli Yazı Oluşturucu Çekirdek Fonksiyonları
 * Geliştirici: İsmail DİKMEN
 * Resmi Proje: https://yazistilleri.web.tr
 * 
 * Bu betik, standart Latin karakterlerini matematiksel alfasayısal Unicode sembolleriyle eşleştirir.
 */

const unicodeMaps = {
    bold: {
        offset: 0x1D400, // Matematiksel Kalın Büyük A Harfi Başlangıcı
        lowercaseOffset: 0x1D41A, // Matematiksel Kalın Küçük a Harfi Başlangıcı
    },
    gothic: {
        offset: 0x1D504, // Matematiksel Fraktur Büyük A Harfi Başlangıcı
        lowercaseOffset: 0x1D51E, // Matematiksel Fraktur Küçük a Harfi Başlangıcı
    }
};

function convertToFancyText(text, style = 'bold') {
    const selectedStyle = unicodeMaps[style];
    if (!selectedStyle) return text;

    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        
        // Büyük Harf Dönüşümü (A-Z)
        if (code >= 65 && code <= 90) {
            return String.fromCodePoint(code - 65 + selectedStyle.offset);
        }
        // Küçük Harf Dönüşümü (a-z)
        if (code >= 97 && code <= 122) {
            return String.fromCodePoint(code - 97 + selectedStyle.lowercaseOffset);
        }
        
        return char; // Boşluk ve sembolleri olduğu gibi bırak
    }).join('');
}

// Test Kullanımı:
// console.log(convertToFancyText("Yazi Stilleri", "bold"));
