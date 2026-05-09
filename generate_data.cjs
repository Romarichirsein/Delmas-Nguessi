const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const outputFilePath = path.join(__dirname, 'src', 'lib', 'data.ts');

const intelligentData = [
  {"filename":"474761779_587714644021582_8540444874897717610_n.jpg","category":"Costume Homme","title":"Costume croisé bleu pétrole élégant pour homme"},
  {"filename":"474762846_588546343938412_8111694134884117421_n.jpg","category":"Costume Homme","title":"Veste de costume rose à motifs pois blancs"},
  {"filename":"474772246_588541447272235_2449046340182025090_n.jpg","category":"Costume Homme","title":"Costume à carreaux vert sombre coupe ajustée"},
  {"filename":"474805822_588545800605133_6686150117852656914_n.jpg","category":"Costume Homme","title":"Ensemble bleu marine avec broderie délicate"},
  {"filename":"474811985_588546250605088_7047240369248446979_n.jpg","category":"Costume Homme","title":"Costume noir classique col officier moderne"},
  {"filename":"474837582_588545937271786_199650085449752539_n.jpg","category":"Costume Homme","title":"Ensemble de costume gris avec détails brodés"},
  {"filename":"474843510_588544520605261_223940177265882897_n.jpg","category":"Ensemble Homme","title":"Ensemble traditionnel blanc avec broderie dorée"},
  {"filename":"474857754_588544067271973_7735626297298642398_n.jpg","category":"Costume Homme","title":"Veste de costume à motif léopard bleu original"},
  {"filename":"474859871_588541297272250_7551061904135540306_n.jpg","category":"Costume Homme","title":"Ensemble bordeaux col officier sophistiqué"},
  {"filename":"474864319_588543443938702_1765107089851893910_n.jpg","category":"Costume Homme","title":"Costume bleu ciel éclatant pour cérémonie"},
  {"filename":"474878205_588541880605525_5744955745811776735_n.jpg","category":"Costume Homme","title":"Veste de costume bleu avec motifs discrets"},
  {"filename":"474883492_588543820605331_3087265431671569654_n.jpg","category":"Ensemble Homme","title":"Ensemble traditionnel blanc cassé col mao"},
  {"filename":"474889246_588542970605416_3661271167104691168_n.jpg","category":"Costume Homme","title":"Veste de costume grise style militaire chic"},
  {"filename":"474889753_588543263938720_216669931393605814_n.jpg","category":"Costume Homme","title":"Veste de costume verte à motif texturé"},
  {"filename":"474895697_588544327271947_1828751502476562095_n.jpg","category":"Costume Homme","title":"Veste de luxe à motifs baroques argentés"},
  {"filename":"474896790_588544627271917_262704256860010078_n.jpg","category":"Costume Homme","title":"Ensemble vert sapin avec broderies traditionnelles"},
  {"filename":"474897451_588544133938633_2057393439401730006_n.jpg","category":"Costume Homme","title":"Veste de costume bicolore bleu et gris"},
  {"filename":"474900767_588543953938651_1156828945829986381_n.jpg","category":"Costume Homme","title":"Costume bleu avec revers noirs contrastés"},
  {"filename":"474913220_588542157272164_1150495804368537651_n.jpg","category":"Costume Homme","title":"Veste de costume grise motif Prince de Galles"},
  {"filename":"474937213_588543080605405_349581333728639536_n.jpg","category":"Costume Homme","title":"Veste de costume beige à texture travaillée"},
  {"filename":"475013346_588546113938435_3681387693240801831_n.jpg","category":"Costume Homme","title":"Costume noir de prestige avec revers satin"},
  {"filename":"475033878_588541603938886_5935398255909249767_n.jpg","category":"Costume Homme","title":"Veste de costume bleu marine à motifs fins"},
  {"filename":"475043818_588542560605457_3840332219808381283_n.jpg","category":"Costume Homme","title":"Costume gris perle moderne et raffiné"},
  {"filename":"475057065_588541123938934_6660144670275815610_n.jpg","category":"Costume Homme","title":"Veste de costume à carreaux bleus et blancs"},
  {"filename":"475069417_588545587271821_4969246194200427845_n.jpg","category":"Ensemble Homme","title":"Ensemble traditionnel noir avec broderie rouge"},
  {"filename":"475080517_588542017272178_4079815041071477759_n.jpg","category":"Costume Homme","title":"Veste de costume bordeaux à motifs floraux"},
  {"filename":"475083823_588545197271860_6169002273180492809_n.jpg","category":"Costume Homme","title":"Veste de costume blanche avec revers noirs"},
  {"filename":"475094951_588544957271884_8361730075591325149_n.jpg","category":"Costume Homme","title":"Ensemble bicolore noir et blanc minimaliste"},
  {"filename":"475133649_588542380605475_1079549339794125740_n.jpg","category":"Costume Homme","title":"Costume gris anthracite coupe contemporaine"},
  {"filename":"475136894_588545467271833_7020083296884614138_n.jpg","category":"Costume Homme","title":"Veste de costume bleu nuit à motifs texturés"},
  {"filename":"475143003_588542713938775_2989823611353119857_n.jpg","category":"Costume Homme","title":"Veste de costume grise à rayures discrètes"},
  {"filename":"475144365_588542840605429_5374465499277025803_n.jpg","category":"Costume Homme","title":"Ensemble marron terre d'ombre élégant"},
  {"filename":"475149959_588544760605237_7131757134375056708_n.jpg","category":"Costume Homme","title":"Costume trois pièces gris anthracite classique"},
  {"filename":"475165449_588543660605347_7628373185526839446_n.jpg","category":"Ensemble Homme","title":"Ensemble traditionnel blanc épuré"},
  {"filename":"475184206_588545300605183_2128913988458764835_n.jpg","category":"Costume Homme","title":"Veste de costume à motifs géométriques noirs"},
  {"filename":"475191295_588543540605359_8626603511116260840_n.jpg","category":"Costume Homme","title":"Costume bleu royal éclatant pour mariage"},
  {"filename":"475191488_586967030763010_3241291505610362807_n.jpg","category":"Costume Homme","title":"Portrait créateur en costume bleu et or"},
  {"filename":"475200388_588544437271936_4016629994646700085_n.jpg","category":"Costume Homme","title":"Veste de costume bordeaux revers en pointe"},
  {"filename":"475220379_588541740605540_3580348756209539824_n.jpg","category":"Costume Homme","title":"Veste de costume verte à carreaux vintage"},
  {"filename":"475225254_588543170605396_1763131711831034177_n.jpg","category":"Costume Homme","title":"Ensemble beige avec détails noirs contrastés"},
  {"filename":"475249591_588545040605209_1636259020942470123_n.jpg","category":"Costume Homme","title":"Veste de costume noire brodée argent"},
  {"filename":"475277773_586964890763224_1335059651832504129_n (1).jpg","category":"Costume Homme","title":"Veste de costume bordeaux haut de gamme"},
  {"filename":"475277773_586964890763224_1335059651832504129_n.jpg","category":"Costume Homme","title":"Veste de costume bordeaux - vue de face"},
  {"filename":"475278475_586964624096584_1328924365102705554_n.jpg","category":"Costume Homme","title":"Veste grise à fines rayures élégante"},
  {"filename":"475440036_588546137271766_3165901632500312932_n.jpg","category":"Costume Homme","title":"Veste rose à pois et pantalon blanc"},
  {"filename":"475540292_586966744096372_7790501534984991125_n.jpg","category":"Costume Homme","title":"Costume gris bleu moderne avec boutons or"},
  {"filename":"475590255_586966737429706_1068501656635686286_n.jpg","category":"Costume Homme","title":"Costume gris bleu col officier raffiné"},
  {"filename":"475665086_587715054021541_1873362958143686273_n.jpg","category":"Costume Homme","title":"Costume de gala bordeaux trois pièces"},
  {"filename":"475769099_587714617354918_309255364774282573_n.jpg","category":"Costume Homme","title":"Veste de costume bleu nuit satinée"},
  {"filename":"475774785_589087910550922_2745030393976551177_n.jpg","category":"Costume Homme","title":"Costume gris clair pour cocktail"},
  {"filename":"475781412_589087730550940_6083379448772789148_n.jpg","category":"Costume Homme","title":"Veste de costume bleue à carreaux larges"},
  {"filename":"475854743_589087720550941_1347627378639748421_n.jpg","category":"Costume Homme","title":"Costume bleu marine coupe cintrée"},
  {"filename":"475980754_588541450605568_6577962470982256030_n.jpg","category":"Costume Homme","title":"Costume croisé à carreaux verts de luxe"},
  {"filename":"481270362_610443035082076_8626007190537759870_n.jpg","category":"Ensemble Homme","title":"Ensemble traditionnel orange avec broderies"},
  {"filename":"481284226_610443185082061_5047462253046450145_n.jpg","category":"Ensemble Homme","title":"Tunique longue traditionnelle orange"},
  {"filename":"481285446_610443048415408_7386414886062726086_n.jpg","category":"Ensemble Homme","title":"Portrait homme en tenue traditionnelle orange"},
  {"filename":"482324963_614083278051385_4400513097611862089_n.jpg","category":"Mariage","title":"Couple en tenues de mariage traditionnelles"},
  {"filename":"482808873_614083244718055_8775808892158186875_n.jpg","category":"Mariage","title":"Cérémonie traditionnelle en tenues coordonnées"},
  {"filename":"486775851_627899296669783_2231240499018012586_n.jpg","category":"Mariage","title":"Tenue traditionnelle de mariage jaune et or"},
  {"filename":"486869185_626382386821474_6213059796538399364_n.jpg","category":"Costume Homme","title":"Mannequin présentant un costume bleu ciel"},
  {"filename":"487211097_627899290003117_8024675177013790790_n.jpg","category":"Costume Homme","title":"Détail pantalon et chaussures de costume bleu"},
  {"filename":"489679169_639007385558974_247318306570296633_n.jpg","category":"Mariage","title":"Robe de mariée sirène en dentelle blanche"},
  {"filename":"490234434_639007495558963_6029275206056366266_n.jpg","category":"Mariage","title":"Robe de mariée princesse volumineuse"},
  {"filename":"490491341_639007378892308_1646471860859334484_n.jpg","category":"Mariage","title":"Robe de mariée fourreau élégante et moderne"},
  {"filename":"490551123_642674301858949_6885909393396440090_n.jpg","category":"Mariage","title":"Robe de mariée avec longue traîne brodée"},
  {"filename":"490799270_642674285192284_7458981155976099571_n.jpg","category":"Mariage","title":"Robe de mariée bustier perlée de luxe"},
  {"filename":"491251210_642674308525615_2770263850208036562_n.jpg","category":"Mariage","title":"Robe de mariée romantique à manches longues"},
  {"filename":"491351665_642674278525618_2080522259043292705_n.jpg","category":"Robe de Gala","title":"Robe de gala noire bustier avec chapeau"},
  {"filename":"494063289_653399440786435_8786044287999004830_n.jpg","category":"Mariage","title":"Couple en tenue de mariage traditionnelle dorée"},
  {"filename":"494090610_653399500786429_1988987413499616243_n.jpg","category":"Mariage","title":"Mariés rayonnants en tenues traditionnelles or"},
  {"filename":"494712701_653399447453101_7533968976314790364_n.jpg","category":"Mariage","title":"Portrait de mariée en tenue traditionnelle or"},
  {"filename":"496805209_663881013071611_2637886538221856793_n.jpg","category":"Robe de Soirée","title":"Robe de soirée élégante en pagne coloré"},
  {"filename":"497438825_664274903032222_5633366635154700237_n.jpg","category":"Robe de Gala","title":"Robe de gala longue à imprimé africain chic"},
  {"filename":"497515266_663880976404948_1800072921591046193_n.jpg","category":"Robe de Soirée","title":"Robe longue fluide violette majestueuse"},
  {"filename":"497517940_663880973071615_2558727842565097558_n.jpg","category":"Robe de Soirée","title":"Robe de soirée violette aux finitions soignées"},
  {"filename":"505228319_684497984343247_5373426409503877332_n.jpg","category":"Robe de Gala","title":"Robe de gala bustier or et noir scintillante"},
  {"filename":"506215157_684497257676653_2820026681690208213_n.jpg","category":"Robe de Soirée","title":"Robe de cocktail rouge asymétrique"},
  {"filename":"508228111_687588114034234_2356413371927311453_n.jpg","category":"Robe de Gala","title":"Robe de gala jaune impérial à volants"},
  {"filename":"510262954_695023426624036_6112853609219318744_n.jpg","category":"Robe de Soirée","title":"Robe de soirée bleu marine à sequins"},
  {"filename":"512674939_695023533290692_6857912628248067580_n.jpg","category":"Ensemble Homme","title":"Boubou traditionnel rouge et noir brodé"},
  {"filename":"513556771_695023366624042_3333150685848849841_n.jpg","category":"Robe de Soirée","title":"Robe longue marron texture crocodile"},
  {"filename":"513929594_695015393291506_7680957256233631023_n.jpg","category":"Ensemble Homme","title":"Boubou vert pomme avec détails dorés"},
  {"filename":"522115856_717584297701282_7521180046273887488_n.jpg","category":"Ensemble Homme","title":"Ensemble traditionnel bleu à motifs fins"},
  {"filename":"522816662_717584261034619_1337286761955943661_n.jpg","category":"Ensemble Homme","title":"Grand Boubou gris avec broderies marron"},
  {"filename":"524702755_717584267701285_4222307855655821772_n.jpg","category":"Ensemble Homme","title":"Boubou noir élégant avec broderies grises"},
  {"filename":"525893917_723228287136883_6280306760976287138_n.jpg","category":"Robe de Soirée","title":"Robe de soirée sirène vert émeraude"},
  {"filename":"526520016_723228370470208_5202391922866629553_n.jpg","category":"Robe de Soirée","title":"Robe de cocktail rose fushia moderne"},
  {"filename":"526946856_723228293803549_8554800511798325228_n.jpg","category":"Robe de Gala","title":"Robe de gala longue argentée scintillante"},
  {"filename":"527619273_723228373803541_6019953030291675836_n.jpg","category":"Robe de Soirée","title":"Robe de soirée asymétrique bleu pétrole"},
  {"filename":"528296305_726436103482768_360551220696454365_n.jpg","category":"Robe de Gala","title":"Robe de gala longue en satin or précieux"},
  {"filename":"528381002_723994030393642_6208006671119678710_n.jpg","category":"Robe de Soirée","title":"Robe de soirée fourreau noire et or"},
  {"filename":"591595931_820411837418527_3448342867139448098_n.jpg","category":"Mariage","title":"Portrait couple mariage en tenue traditionnelle"},
  {"filename":"592414871_820411847418526_8779992772699709020_n.jpg","category":"Mariage","title":"Mariés posant en tenues de prestige"},
  {"filename":"592552627_820411817418529_4280650793380733567_n.jpg","category":"Mariage","title":"Cérémonie de mariage traditionnel en couleur"},
  {"filename":"592743634_820411824085195_6233697059772162650_n.jpg","category":"Mariage","title":"Couple en tenue traditionnelle de chef"},
  {"filename":"651223992_901422452650798_7786332534811475455_n.jpg","category":"Ensemble Homme","title":"Tunique bleue moderne avec pantalon assorti"},
  {"filename":"651754294_900705899389120_1130377440611785196_n.jpg","category":"Ensemble Homme","title":"Duo de tuniques violette et marron brodées"},
  {"filename":"653703364_902944365831940_4108709589071447332_n (1).jpg","category":"Costume Homme","title":"Portrait professionnel du créateur en olive"},
  {"filename":"653703364_902944365831940_4108709589071447332_n.jpg","category":"Costume Homme","title":"Portrait professionnel en costume olive"},
  {"filename":"653703565_900705679389142_1339018922596775200_n (1).jpg","category":"Costume Homme","title":"Costume bordeaux col officier de prestige"},
  {"filename":"653703565_900705679389142_1339018922596775200_n.jpg","category":"Costume Homme","title":"Portrait créateur en costume bordeaux"},
  {"filename":"653704609_902944419165268_873491369390833829_n.jpg","category":"Costume Homme","title":"Le créateur à son bureau plan large"},
  {"filename":"653704700_901422665984110_6009778222394953010_n.jpg","category":"Accessoires","title":"Détail chaussures de luxe en cuir noir"}
];

const fallbackTitles = {
  "Robe de Soirée": "Création Élégance",
  "Costume Homme": "Costume Sur-mesure Prestige",
  "Ensemble Homme": "Tenue Traditionnelle Signature",
  "Mariage": "Tenue de Cérémonie Unique",
  "Robe de Gala": "Création Haute Couture",
  "Accessoires": "Accessoire de Luxe",
  "Tenue Business Femme": "Tailleur Business Chic"
};

const styles = ["Élégant", "Magnifié", "Afro-Chic", "Business", "Audacieux"];

let products = [];
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

files.forEach((file, index) => {
  const intelligentMatch = intelligentData.find(d => d.filename === file);
  
  let category = intelligentMatch ? intelligentMatch.category : "Costume Homme"; 
  let title = intelligentMatch ? intelligentMatch.title : fallbackTitles[category];
  
  // If it's a fallback, append the index so slugs are unique
  if (!intelligentMatch) {
    title = `${title} Edition ${index + 1}`;
    // Try to guess category randomly for fallbacks to add variety
    const catKeys = Object.keys(fallbackTitles);
    category = catKeys[index % catKeys.length];
    title = `${fallbackTitles[category]} Edition ${index + 1}`;
  }

  const style = styles[index % styles.length];
  const price = (Math.floor(Math.random() * 10) + 5) * 50000;
  
  // Gallery uses this image and 2 other random images from the SAME CATEGORY
  // to be intelligent, let's filter files by whether they are in the same intelligent category
  const sameCatFiles = files.filter(f => {
    const match = intelligentData.find(d => d.filename === f);
    return match && match.category === category && f !== file;
  });
  
  let galleryOthers = sameCatFiles.slice(0, 2);
  if (galleryOthers.length < 2) {
    galleryOthers = files.filter(f => f !== file).slice(0, 2);
  }

  const gallery = [`/images/${file}`, ...galleryOthers.map(f => `/images/${f}`)];

  products.push({
    id: String(index + 1),
    title: title,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    price: price,
    mainImage: `/images/${file}`,
    gallery: gallery,
    category: category,
    style: style,
    isNew: index < 20,
    isFeatured: index % 5 === 0,
    colors: ["#000000", "#D4AF37", "#991B1B"].slice(0, (index % 3) + 1),
    description: "Confectionné avec soin dans nos ateliers, ce modèle exclusif incarne le savoir-faire et l'élégance Delmas Nguessi."
  });
});

const fileContent = `// Fichier auto-généré avec titres intelligents
export const localProducts = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent);
console.log('Successfully generated ' + products.length + ' intelligent products in src/lib/data.ts');
