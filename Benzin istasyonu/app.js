

let dizel = 24.53 , benzin =22.25, LPG =11.1;
const yeniSatir="\r\n";

const yakitMetni = "1-Dizel" + yeniSatir+ "2-Benzin"+ yeniSatir+"3-LPG"
 +yeniSatir+"Yakıt türünü seçiniz";

 let yakitTipi = prompt(yakitMetni);
 let yakitLitresi = Number(prompt("Yüklenecek yakıt litresini giriniz : "))
 let bakiye = Number(prompt("Bakiyenizi giriniz : "));

 if (yakitTipi=="1") {
    // DİZEL
    let odenecekTutar = dizel*yakitLitresi;
    if (odenecekTutar<bakiye) {
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı" + yeniSatir+"Kalan bakiye :"+bakiye);
    }
    else{
        alert("Bakiyeniz yeterli  değildir !" +yeniSatir+ "Ödenecek tutar : "+odenecekTutar + yeniSatir + 
        "Bakiye: " + bakiye + yeniSatir + "Eksik tutar : " + (odenecekTutar-bakiye))

    }
 }
 else if (yakitTipi=="2") {
    // BENZİN
    let odenecekTutar = benzin*yakitLitresi
    if (odenecekTutar<bakiye) {
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı" + yeniSatir+"Kalan bakiye :"+bakiye);
    }
    else{
        alert("Bakiyeniz yeterli  değildir !" +yeniSatir+ "Ödenecek tutar : "+odenecekTutar + yeniSatir + 
        "Bakiye: " + bakiye +yeniSatir + "Eksik tutar : " + (odenecekTutar-bakiye))

 }
}
 else if (yakitTipi=="3") {
    // LPG
    let odenecekTutar = LPG*yakitLitresi
    if (odenecekTutar<bakiye) {
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı" + yeniSatir+"Kalan bakiye :"+bakiye);
    }
    else{
        alert("Bakiyeniz yeterli  değildir !" +yeniSatir+ "Ödenecek tutar : "+odenecekTutar + yeniSatir + 
        "Bakiye: " + bakiye + yeniSatir + "Eksik tutar : " + (odenecekTutar-bakiye))

 }
}
 
 else{
    alert("Lütfen geçerli bir yakit tipi giriniz !!!!")
 }