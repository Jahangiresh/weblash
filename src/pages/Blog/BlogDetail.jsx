import React from "react";
import TitleSection from "../../components/TitleSection";
import BlogComponent from "../../components/Blog/BlogComponent";
import blog1 from "../../assets/images/blog1.png";

const BlogDetail = () => {
  return (
    <>
      <TitleSection title={"Blog"} />
      <div className="flex container flex-col gap-2 items-center !w-[792px] pt-9">
        <h1 className="text-4xl text-[#121212] font-bold">
          Veb saytların hazırlanmasının mərhələləri
        </h1>
        <div className="w-full imgbox">
          <img className="w-full" src={blog1} alt="" />
        </div>
        <div className="content">
          <p>
            Əgər Sizə 300 - 500 - 800 AZN məbləğ qarşılığında google
            standartlarına uyğun unikal sayt yığmağı təklif ediblərsə, deməli
            Sizi də mütləq aldadıblar. Bu bloq yazısını yazmaqda məqsədimiz
            işini internet üzərindən qurmağı planlaşdıran sahibkarları
            marketinqin bu istiqaməti üzrə doğru məlumatlandırmaqdır. Mövzunu
            çox uzatmadan keçək əsas məsələyə. Saytın strukturu Saytın dizaynı
            hazır olmadan əvvəl görüləcək ilk iş, saytın strukturunu
            formalaşdırmaqdır. Bunun üçün marketinq şirkəti müştərinin və bir
            sıra rəqəmsal alətlərin köməyi ilə çox saylı sualların cavabını
            tapmalı olur: Saytın hansı bölmə və alt bölmələri olmalıdır? Həmin
            bölmələrdən hansılar ana səhifədə öz əksini tapmalıdır? Alt
            bölmələrin daxilində hansı məlumatlar yer almalıdır? Şirkətin
            birinci və ikinci dərəcəli məlumat sistemləri hansılardır?
            İstifadəçinin saytda davranış qaydaları necə olacaq? Niyə ana
            səhifədə xəbərlər bölümü olsun və ya olmasın? Sosial şəbəkə
            ikonlarını aşağı hissəyə qoyanda nə olur? Yeniliklərə abunə ol
            modulunu niyə sayta qoymaq olmaz? Bu və buna bənzər bir çox
            sualların yanına bir də niyə sualı əlavə olunmaqla onun cavabları
            axtarılır. Bir sözlə saytın strukturu dərin müzakirə və doğru
            yanaşma əsasında formalaşır. Bu mərhələ işin əsasını təşkil etdiyi
            üçün məsələyə ciddi yanaşmaq lazımdır. Kontent işi Bir çox saytlarda
            qarşınıza “lorem ipsum” (şərti mətn) yazıları çıxıbsa, deməli işə
            peşəkar yanaşma olmayıb. Saytın dizaynını şərti mətnlər əsasında
            hazırlayıb müştəriyə bəyəndiriblər. Sonradan sayt doldurulması üçün
            müştəriyə təqdim olunanda, müştəri həmin həcmdə mətn formalaşdıra
            bilmədiyi üçün saytın bir çox bölmələri ya boş qalıb, ya da “lorem
            ipsum” yazısı yazılıb. Bu da şirkətin həm bazardakı, həm də google
            axtarış sistemindəki imicinə ciddi zərbə vurmuş olur. İndi isə keçək
            doğru olana. Saytın strukturu sifarişçi tərəfindən təsdiqləndikdən
            sonra kontent menecer müştəriyə həmin bölmələrlə bağlı suallar
            ünvanlayır. Bir kontent menecerin ümumilikdə verəcəyi sualların sayı
            isə ortalama 20 - 35 arası dəyişir. Sualları şirkətin rəhbəri və ya
            şirkətin fəaliyyətini yaxşı tanıyan biri cavablandıra bilər.
            Tərəflər arasındakı bütün danışıqlar audio formatda yazılır və
            sonradan digər kontent menecerlərlə birgə yenidən dinlənilir.
            Sonradan həmin dialoqlar əsasında veb struktura uyğun mətnlər
            hazırlanılır və müzakirə olunması üçün müştəriyə təqdim olunur.
            Kontent işinin detalları ilə bağlı növbəti bloqlarımızda ətraflı
            məlumat verməyi planlaşdırırıq. Veb Dizayn işi (Ana səhifə) Yalnız
            yuxarıdakı iki mərhələ bitdikdən sonra veb dizaynerin işi başlayır.
            Şirkətin loqosu (loqonun istifadə qaydaları), veb struktur və
            təsdiqlənmiş mətnlər dizaynerə təqdim olunur. Veb dizayner həmin
            məlumatlar əsasında saytın ana səhifəsinin dizaynını hazırlayır.
            Hazırlanmış dizayn müzakirə olunması üçün müştəriyə təqdim olunur və
            arxasında duran məntiq izah edilir. Saytı real mətnlər əsasında
            hazırlamağın üstün cəhəti ondan ibarətdir ki, müştəri dizaynda şərti
            mətnləri deyil, öz təsdiq etdiyi mətnləri görür. Bütün proseslər
            bitdikdən sonra saytı dolduracaq şəxs isə nəyin harada olduğunu və
            necə görünəcəyi ilə bağlı real təsəvvürə malik olur. Beləliklə, ana
            səhifənin dizaynı təsdiq olunduqdan sonra veb dizayner ona təqdim
            olunmuş mətnlər əsasında saytın daxili səhifələrinin dizaynını
            hazırlayır. Saytın daxili səhifələrinin dizaynı müştəriyə müzakirə
            üçün təqdim olunur. Mobil versiya Saytın bütün dizayn olunmuş
            səhifələri təsdiq olunduqdan sonra frontend proqramçı üçün çətinlik
            yarada biləcək səhifələrin mobil versiyası hazırlanır. Bir çox
            hallarda proqramçılar veb dizayner tərəfindən təqdim olunmuş
            səhifələrin mobil versiyada necə görünəcəyi ilə bağlı eyni təsəvvürə
            malik olmurlar. Nəticənin fərqli olmaması üçün bir çox hallarda veb
            dizayner həmin səhifələrin dizaynlarını da əvvəlcədən çəkib
            proqramçıya təqdim edir. Təbii ki, bu şirkətin işlədiyi
            proqramçıların peşəkarlığından da asılıdır. Proqramlaşdırma işi
            Bütün dizayn işləri bitdikdən sonra saytın proqramlaşdırılmasında
            frontend mərhələsi başlayır. Frontend mərhələsinin müddəti təqdim
            olunmuş proqramçının peşəkarlığından, səhifələrin sayından və onun
            quruluşunun müxtəlifliyindən asılı olaraq dəyişir. Bu mərhələ bir
            korporativ sayt üçün ortalama 20 iş günü və ya 1 ay yarım vaxt ala
            bilər. Bu mərhələdən sonra backend proqramçının işi başlayır.
            Hamınızın bildiyi admin paneli məhz backend proqramçılar həyata
            keçirir. Admin paneldə hansı funksionallıqların olmasını isə
            əvvəlcədən hazırlanmış xüsusi texniki tapşırıq əsasında müəyyən
            etmək olar. Yerli müştərilər üçün texniki tapşırığın təqdim olunması
            baş ağrıdıcı proses olduğu üçün çox zaman bu iş texniki tapşırıqsız
            həyata keçirilir. Saytın doldurulması prosesinə başlandıqda isə
            əvvəlcədən hazırlanmayan texniki tapşırığa görə tərəflər arasında
            gərginlik yaranır. Nəticədə isə layihənin təhvil verilmə müddəti
            uzanır. Saytın proqramlaşdırılması müddəti də eyni ilə frontend
            proqramçı üçün qeyd etdiyimiz məqamlardan asılı olaraq dəyişir. Bir
            korporativ saytın proqramlaşdırılması adətən 1 ay və ya ay yarım
            vaxt apara bilər. Saytın doldurulması Saytın kim tərəfdən
            doldurulması əvvəlcədən razılaşdırma əsasında həyata keçirilir.
            Yerli bazarda çox vaxt proqramlaşdırmadan sonra saytın
            doldurulmasını icraçı tərəf həyata keçirir. Saytın təsdiq edilmiş
            dizaynda olduğu kimi doldurulması üçün müştəri bütün məlumatları
            (mətn, şəkil, video) doğru şəkildə İcraçı tərəfə təqdim etməlidir.
            Müştəri saytın dizaynı bitdikdən sonra təsdiq edilmiş dizaynda yer
            almış bölmələrə uyğun məlumatları səliqəli şəkildə bir yerə
            toplayıb, onları sortlaşdırmalıdır. Sayt hazır olduqdan sonra isə
            onları icraçıya elektron formada hər bölməyə aid məlumatlar
            ayrı-ayrı qovluqlarda olmaqla təhvil verməlidir. Bu doldurulma
            işinin sürətlənməsinə dəstək olacaq. Bu prosesin özü saytın
            həcmindən, müştərinin məlumatları vaxtında və düzgün şəkildə təqdim
            etməsindən asılı olaraq 5-7 gün arası dəyişə bilir. Test olunma Test
            olunma mərhələsi sayt doldurulduqdan sonra və ya paralel aparıla
            bilər. Böyük veb layihələrdə bu iş üçün ayrıca bir şəxs ayrılır və
            o, saytda olan bütün boşluqları aşkar edərək düzəldilməsi üçün
            müvafiq əməkdaşa yönləndirir. Kiçik həcmli saytlarda isə bu işi
            layihə meneceri icra edir. Saytı doldura-doldura üzrə çıxan
            problemləri aidiyyatı üzrə şəxslərə yönləndirir. Test olunma
            mərhələsi də saytın həcmindən asılı olaraq dəyişir. Kiçik saytlarda
            bu müddət 1 gün, böyük saytlarda 5-7 gün, daima təkmilləşən
            saytlarda isə davamlı olaraq həyata keçirilir. Təlimin keçirilməsi
            Sayt test olunduqdan və bütün problemlər aradan qaldırıldıqdan sonra
            icraçı tərəf müştəriyə admin panelin idarə olunması ilə bağlı təlim
            keçir. Bu təlimin eyni anda şirkətin bir neçə üzvünə keçirilməsi
            tövsiyə olunur. Daha sonra admin panelə giriş icazəsi veriləcək
            şəxslər üçün hesablar açılır və panel onların istifadəsinə verilir.
            Serverə köçürülmə Artıq bütün proseslərdən keçmiş sayt serverə
            yerləşdirilir. Bu tərəflərdən birinin serveri ola bilər. Burada əsas
            məqsəd serverin yeni yığılmış saytın texniki tələblərinə uyğun gücdə
            olmasıdır. Bir çox hallarda yerli şirkətlər server məsələlərinə
            (vəsaitin vaxtında ödənilməsi, serverin gücləndirilməsi, vaxtaşırı
            nəzarətin həyata keçirilməsi və s.) ciddi fikir vermirlər. Beləliklə
            Siz artıq bir saytın hazırlanmasının hansı proseslərdən keçdiyini
            bilirsiniz. Bu məlumatların gələcəkdə təmsil etdiyiniz şirkət üçün
            düzgün sayt yığan şirkəti seçməyə dəstək olacağına inanırıq.
            Şirkətin simasını doğru şirkətə həvalə edin ki, rəqəmsallaşan
            dünyanın imkanlarından doğru şəkildə faydalana biləsiniz. Özünüzü
            qoruyun!
          </p>
        </div>
        <BlogComponent hideHeader={"hidden"} />
      </div>
    </>
  );
};

export default BlogDetail;
