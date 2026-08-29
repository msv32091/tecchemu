/* =====================================================
   TECHEMU
   SISTEMA PRINCIPAL
===================================================== */


/* =====================================================
   BANCO DE JOGOS

   Para adicionar um jogo:

   size:
   tamanho do arquivo

   downloadMobile:
   link autorizado para celular

   downloadPc:
   link autorizado para PC

   gallery:
   imagens extras da galeria
===================================================== */


const games = [

    {
        id: "god-of-war-ghost-of-sparta",

        title: "God of War: Ghost of Sparta: PT-BR",

        image: "god-of-war-ghost-of-sparta.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "947.31MB",

        downloadMobile: "https://www.mediafire.com/file/scacgow7sor6rg8/PSPG0WGHSTDUBPTBR.rar/file",

        downloadPc: "",

        gallery: [
            "god-of-war-ghost-of-sparta-1.jpg",
            "god-of-war-ghost-of-sparta-2.jpg",
            "god-of-war-ghost-of-sparta-3.jpg"
        ]
    },


    {
        id: "god-of-war-chains-of-olympus",

        title: "God of War: Chains of Olympus",

        image: "god-of-war-chains-of-olympus.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "1.13GB",

        downloadMobile: "https://www.mediafire.com/file/7atb98vzkfpnlri/PSPGOWC00.rar/file",

        downloadPc: "",

        gallery: [
            "god-of-war-chains-of-olympus-1.jpg",
            "god-of-war-chains-of-olympus-2.jpg",
            "god-of-war-chains-of-olympus-3.jpg"
        ]
    },


    {
        id: "gta-vice-city-stories",

        title: "GTA Vice City Stories",

        image: "gta-vice-city-stories.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "554.44MB",

        downloadMobile: "https://www.mediafire.com/file_premium/w9534196b1zxsal/Grand_Theft_Auto_-_Vice_City_Stories__%2528PSP%2529_%2528BR%2529_%2540Coisasdeandroid.7z/file",

        downloadPc: "",

        gallery: [
            "gta-vice-city-stories-1.jpg",
            "gta-vice-city-stories-2.jpg",
            "gta-vice-city-stories-3.jpg"
        ]
    },


    {
        id: "gta-liberty-city-stories",

        title: "GTA Liberty City Stories: PT-BR",

        image: "gta-liberty-city-stories.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "563.53MB",

        downloadMobile: "https://www.mediafire.com/file/yjadgg8tibrp550/Gtalcsptbrpsp.rar/file?dkey=bl01u3ks96i&r=1994",

        downloadPc: "",

        gallery: [
            "gta-liberty-city-stories-1.jpg",
            "gta-liberty-city-stories-2.jpg"
        ]
    },


    {
        id: "gta-chinatown-wars",

        title: "GTA Chinatown Wars",

        image: "gta-chinatown-wars.jpg",

        category: ["Ação"],

        platform: "mobile",

        featured: true,

        size: "541.47MB",

        downloadMobile: "https://www.mediafire.com/file/oxsqm89f4ctiag4/GTAchi1n4tptbrpsp.rar/file?dkey=by7cz6k3ict&r=881",

        downloadPc: "",

        gallery: [
            "gta-chinatown-wars-1.jpg",
            "gta-chinatown-wars-2.jpg"
        ]
    },


    {
        id: "resident-evil-4",

        title: "Resident Evil 4: PT-BR",

        image: "resident-evil-4.jpg",

        category: ["Ação", "Terror"],

        platform: "mobile",

        featured: true,

        size: "330.97MB",

        downloadMobile: "https://www.mediafire.com/file/g2m4vscmnpe61za/RESIDENT_EVIL_4_.zip/file",

        downloadPc: "",

        gallery: [
            "resident-evil-4-1.jpg",
            "resident-evil-4-2.jpg"
        ]
    },


    {
        id: "silent-hill-origins",

        title: "Silent Hill Origins",

        image: "silent-hill-origins.jpg",

        category: ["Ação", "Terror"],

        platform: "mobile",

        featured: true,

        size: "746.02MB",

        downloadMobile: "https://www.mediafire.com/file/jf06f0nd0frqnj7/Silent_Hill_Origins.7z/file",

        downloadPc: "",

        gallery: [
            "silent-hill-origins-1.jpg",
            "silent-hill-origins-2.jpg"
        ]
    },


    {
        id: "dantes-inferno",

        title: "Dante's Inferno",

        image: "dantes-inferno.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "1.37GB",

        downloadMobile: "https://www.mediafire.com/file/w3ya8xmhpx0vpwr/Dante",

        downloadPc: "",

        gallery: [
            "dantes-inferno-1.jpg",
            "dantes-inferno-2.jpg"
        ]
    },


    {
        id: "dragon-ball-z-shin-budokai",

        title: "Dragon Ball Z: Shin Budokai",

        image: "dragon-ball-z-shin-budokai.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "dragon-ball-z-shin-budokai-another-road",

        title: "Dragon Ball Z: Shin Budokai - Another Road",

        image: "dragon-ball-z-shin-budokai-another-road.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "dragon-ball-z-shin-budokai-2",

        title: "Dragon Ball Z: Shin Budokai 2",

        image: "dragon-ball-z-shin-budokai-2.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: true,

        size: "540.58MB",

        downloadMobile: "https://www.mediafire.com/file/jxfiazbjmzywrs4/Dragon+Ball+Z+-+Shin+Budokai+2+@Coisasdeandroid.zip/file",

        downloadPc: "",

        gallery: [
            "dragon-ball-z-shin-budokai-2-1.jpg",
            "dragon-ball-z-shin-budokai-2-2.jpg"
        ]
    },


    {
        id: "dragon-ball-z-tenkaichi-tag-team",

        title: "Dragon Ball Z: Tenkaichi Tag Team",

        image: "dragon-ball-z-tenkaichi-tag-team.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: true,

        size: "1.5GB",

        downloadMobile: "https://www.mediafire.com/file/1rzbn49gm0nys7j/Dragon+Ball+Z+-+Tenkaichi+Tag+Team+Legendado.iso/file",

        downloadPc: "",

        gallery: [
            "dragon-ball-z-tenkaichi-tag-team-1.jpg",
            "dragon-ball-z-tenkaichi-tag-team-2.jpg"
        ]
    },


    {
        id: "naruto-ultimate-ninja-heroes",

        title: "Naruto Ultimate Ninja Heroes",

        image: "naruto-ultimate-ninja-heroes.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: false,

        size: "204.4MB",

        downloadMobile: "https://www.mediafire.com/file/4d07ch3zj3mxwf6/Naruto+-+Ultimate+Ninja+Heroes+@coisasdenandroid.zip/file",

        downloadPc: "",

        gallery: [
            "naruto-ultimate-ninja-heroes-1.jpg",
            "naruto-ultimate-ninja-heroes-2-2.jpg"
        ]
    },


    {
        id: "naruto-ultimate-ninja-heroes-2",

        title: "Naruto Ultimate Ninja Heroes 2",

        image: "naruto-ultimate-ninja-heroes-2.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: false,

        size: "962.61MB",

        downloadMobile: "https://www.mediafire.com/file/kp34hepvk42hfbs/Naruto+-+Ultimate+Ninja+Heroes+2+-+The+Phantom+Fortress+@Coisasdeandroid.zip/file",

        downloadPc: "",

        gallery: [
            "naruto-ultimate-ninja-heroes-2-1.jpg",
            "naruto-ultimate-ninja-heroes-2-2-2.jpg"
        ]
    },


    {
        id: "naruto-shippuden-ultimate-ninja-heroes-3",

        title: "Naruto Shippuden: Ultimate Ninja Heroes 3",

        image: "naruto-shippuden-ultimate-ninja-heroes-3.jpg",

        category: ["Luta", "Anime"],

        platform: "mobile",

        featured: true,

        size: "1.91GB",

        downloadMobile: "https://www.mediafire.com/file/3a3z6g1rocokonv/Naruto_Heroes_3_Atualiza%25C3%25A7%25C3%25A3o_Abril.iso/file",

        downloadPc: "",

        gallery: [
            "naruto-shippuden-ultimate-ninja-heroes-3-1.jpg",
            "naruto-shippuden-ultimate-ninja-heroes-3-2.jpg"
        ]
    },


    {
        id: "naruto-shippuden-ultimate-ninja-impact",

        title: "Naruto Shippuden: Ultimate Ninja Impact PT-BR",

        image: "naruto-shippuden-ultimate-ninja-impact.jpg",

        category: ["Luta", "Anime", "Ação"],

        platform: "mobile",

        featured: true,

        size: "1.02GB",

        downloadMobile: "https://www.mediafire.com/file/fw2sujdte3e9v7l/Naruto+Impact+2+Dublado+@Coisasdeandroid.rar/file",

        downloadPc: "",

        gallery: [
            "naruto-shippuden-ultimate-ninja-impact-1.jpg",
            "naruto-shippuden-ultimate-ninja-impact-2.jpg"
        ]
    },


    {
        id: "naruto-shippuden-kizuna-drive",

        title: "Naruto Shippuden: Kizuna Drive",

        image: "naruto-shippuden-kizuna-drive.jpg",

        category: ["Ação", "Anime"],

        platform: "mobile",

        featured: false,

        size: "1GB",

        downloadMobile: "https://www.mediafire.com/file/64g9mw8oo0l8q3a/Naruto+Shippuden+-+Kizuna+Drive+@Coisasdeandroid.zip/file",

        downloadPc: "",

        gallery: [
            "naruto-shippuden-kizuna-drive-1.jpg",
            "naruto-shippuden-kizuna-drive-2.jpg"
        ]
    },


    {
        id: "naruto-shippuden-akatsuki-rising",

        title: "Naruto Shippuden: Legends Akatsuki Rising",

        image: "naruto-shippuden-akatsuki-rising.jpg",

        category: ["Ação", "Anime"],

        platform: "mobile",

        featured: false,

        size: "539.74MB",

        downloadMobile: "https://www.mediafire.com/file/fonfpg26td1uo2l/Naruto+Shippuden+-+Legends+-+Akatsuki+Rising+@coisasdenadroid.zip/file",

        downloadPc: "",

        gallery: [
            "naruto-shippuden-akatsuki-rising-1.jpg",
            "naruto-shippuden-akatsuki-rising-2.jpg"
        ]
    },


    {
        id: "def-jam-the-takeover",

        title: "Def Jam: Fight For NY - The Takeover",

        image: "def-jam-the-takeover.jpg",

        category: ["Luta", "Ação"],

        platform: "mobile",

        featured: false,

        size: "441.9MB",

        downloadMobile: "https://www.mediafire.com/file/0nm35jvx2t9xl03/Def+Jam+-+Fight+for+NY+-+The+Takeover.7z/file",

        downloadPc: "",

        gallery: [
            "def-jam-the-takeover-1.jpg",
            "def-jam-the-takeover-2.jpg"
        ]
    },


    {
        id: "bomba-patch-2026",

        title: "Bomba Patch 2026",

        image: "bomba-patch-2026.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "fifa-14",

        title: "FIFA 14",

        image: "fifa-14.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: true,

        size: "810.19MB",

        downloadMobile: "https://www.mediafire.com/file/g5npiyqf286qc1e/f1f14ptpsp.rar/file",

        downloadPc: "",

        gallery: [
            "fifa-14-1.jpg",
            "fifa-14-2.jpg"
        ]
    },


    {
        id: "fifa-10",

        title: "FIFA 10",

        image: "fifa-10.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: false,

        size: "1.24GB",

        downloadMobile: "https://www.mediafire.com/file/osrxpmad0ydwmbu/FIFA+10+%28Spain%29.iso/file",

        downloadPc: "",

        gallery: [
            "fifa-10-1.jpg",
            "fifa-10-2.jpg"
        ]
    },


    {
        id: "fifa-street-2",

        title: "FIFA Street 2",

        image: "fifa-street-2.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: false,

        size: "169.96MB",

        downloadMobile: "https://www.mediafire.com/file/fj6p3qddfbuj467/PPSSPP+FIFA+STREET+2.iso/file",

        downloadPc: "",

        gallery: [
            "fifa-street-2-1.jpg",
            "fifa-street-2-2.jpg"
        ]
    },


    {
        id: "pes-2014",

        title: "PES 2014 Original PT-BR",

        image: "pes-2014.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: true,

        size: "1.36GB",

        downloadMobile: "https://www.mediafire.com/file/eyaawbl4errm2pp/P3s+14+fullpsp.cso/file",

        downloadPc: "",

        gallery: [
            "pes-2014-1.jpg",
            "pes-2014-2.jpg"
        ]
    },


    {
        id: "monster-hunter-portable-3rd",

        title: "Monster Hunter Portable 3rd PT-BR",

        image: "monster-hunter-portable-3rd.jpg",

        category: ["Ação", "RPG"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "monster-hunter-freedom-unite",

        title: "Monster Hunter Freedom Unite",

        image: "monster-hunter-freedom-unite.jpg",

        category: ["Ação", "RPG"],

        platform: "mobile",

        featured: false,

        size: "621.1MB",

        downloadMobile: "https://www.mediafire.com/file/e3546je0lqfndfj/Monster-Hut-Free-USA.zip/file",

        downloadPc: "",

        gallery: [
            "monster-hunter-freedom-unite-1.jpg",
            "monster-hunter-freedom-unite-2.jpg"
        ]
    },


    {
        id: "monster-hunter-freedom-2",

        title: "Monster Hunter Freedom 2",

        image: "monster-hunter-freedom-2.jpg",

        category: ["Ação", "RPG"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "midnight-club-3",

        title: "Midnight Club 3 - DUB Edition",

        image: "midnight-club-3.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: true,

        size: "503.01MB",

        downloadMobile: "https://www.mediafire.com/file/d7b59k2lqgqo4xl/MIDNIGHT+CLUB+3+DUB+.ISO+(By+Faile+Tutorias).zip/file%20%20MIDNIGHT%20CLUB%203",

        downloadPc: "",

        gallery: [
            "midnight-club-3-1.jpg",
            "midnight-club-3-2.jpg"
        ]
    },


    {
        id: "midnight-club-la-remix",

        title: "Midnight Club L.A. Remix",

        image: "midnight-club-la-remix.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: false,

        size: "579.13MB",

        downloadMobile: "https://www.mediafire.com/file/f38whjwcz17ec9p/MIDNIGHT_CLUB_-_%2528L.A._Remix%2529_Europe.zip/file",

        downloadPc: "",

        gallery: [
            "midnight-club-la-remix-1.jpg",
            "midnight-club-la-remix-2.jpg"
        ]
    },


    {
        id: "mortal-kombat-unchained",

        title: "Mortal Kombat: Unchained",

        image: "mortal-kombat-unchained.jpg",

        category: ["Luta"],

        platform: "mobile",

        featured: true,

        size: "920.87MB",

        downloadMobile: "https://www.mediafire.com/file/z06wh0pp61pewhy/Mkuch4in3dPtbr.rar/file",

        downloadPc: "",

        gallery: [
            "mortal-kombat-unchained-1.jpg",
            "mortal-kombat-unchained-2.jpg"
        ]
    },


    {
        id: "ben10-protector-of-earth",

        title: "Ben 10: Protector of Earth",

        image: "ben10-protector-of-earth.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: false,

        size: "616.2MB",

        downloadMobile: "https://www.mediafire.com/file/el3745pzouiv99s/B3n1OPoeDubPtbpsp.rar?dkey=z4gal7gmz1g&r=1745",

        downloadPc: "",

        gallery: [
            "ben10-protector-of-earth-1.jpg",
            "ben10-protector-of-earth-2.jpg"
        ]
    },


    {
        id: "ben10-alien-force",

        title: "Ben 10: Alien Force Vilgax Attacks",

        image: "ben10-alien-force-vilgax-attacks.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: false,

        size: "759.07MB",

        downloadMobile: "https://www.mediafire.com/file/1005r21061jlw6s/B3n1O4fVaPtbpsp.rar/file",

        downloadPc: "",

        gallery: [
            "ben10-alien-force-vilgax-attacks-1.jpg",
            "ben10-alien-force-vilgax-attacks-2.jpg"
        ]
    },


    {
        id: "homem-aranha-3",

        title: "Homem-Aranha 3",

        image: "homem-aranha-3.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: false,

        size: "1.31GB",

        downloadMobile: "https://www.mediafire.com/file/67pugmeaantzndw/Spider-Man_3_%2528ByFaile%2529_%2528v1.02%2529.zip/file",

        downloadPc: "",

        gallery: [
            "homem-aranha-3-1.jpg",
            "homem-aranha-3-2.jpg"
        ]
    },


    {
        id: "x-man-legends-2",

        title: "X-Man Legends 2: Rise Of Apocalypse",

        image: "x-man-legends-2.jpg",

        category: ["Ação"],

        platform: "mobile",

        featured: false,

        size: "1.02GB",

        downloadMobile: "https://www.mediafire.com/file/eh4icn85jonqo1s/XMLIIROAPSP.Www.GamezFull.com.rar",

        downloadPc: "",

        gallery: [
            "x-man-legends-2-1.jpg",
            "x-man-legends-2-2.jpg"
        ]
    },


    {
        id: "toy-story-3",

        title: "Toy Story 3",

        image: "toy-story-3.jpg",

        category: ["Aventura"],

        platform: "mobile",

        featured: false,

        size: "180.6MB",

        downloadMobile: "https://www.mediafire.com/file/snri4674ogzb3li/Toy-Story-3_Mobile_PPSSPP.zip/file",

        downloadPc: "",

        gallery: [
            "toy-story-3-1.jpg",
            "toy-story-3-2.jpg"
        ]
    },


    {
        id: "cars",

        title: "Carros",

        image: "carros.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: false,

        size: "267.38MB",

        downloadMobile: "https://www.mediafire.com/file/on15r5aff61x7t1/CARROS.cso/file",

        downloadPc: "",

        gallery: [
            "carros-1.jpg",
            "carros-2.jpg"
        ]
    },


    {
        id: "nba-2k13",

        title: "NBA 2K13",

        image: "nba-2k13.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "crash-of-the-titans",

        title: "Crash of the Titans",

        image: "crash-of-the-titans.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: false,

        size: "779.28MB",

        downloadMobile: "https://www.mediafire.com/file/10h5mi39bgyssmn/Crash_of_the_Titans.iso/file",

        downloadPc: "",

        gallery: [
            "crash-of-the-titans-1.jpg",
            "crash-of-the-titans-2.jpg"
        ]
    },


    {
        id: "tomb-raider-legend",

        title: "Lara Croft Tomb Raider: Legend",

        image: "tomb-raider-legend.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: false,

        size: "1.48GB",

        downloadMobile: "https://www.mediafire.com/file/w965th5n6f6qyxn/Lara_Croft_Tomb_Raider_-_Legend_%2528USA%2529.7z/file",

        downloadPc: "",

        gallery: [
            "tomb-raider-legend-1.jpg",
            "tomb-raider-legend-2.jpg"
        ]
    },


    {
        id: "gran-turismo",

        title: "Gran Turismo",

        image: "gran-turismo.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: true,

        size: "1GB",

        downloadMobile: "https://www.mediafire.com/file/h9l5za0tubirgf3/GranTurismo.zip/file",

        downloadPc: "",

        gallery: [
            "gran-turismo-1.jpg",
            "gran-turismo-2.jpg"
        ]
    },


    {
        id: "medal-of-honor-heroes-2",

        title: "Medal of Honor: Heroes 2",

        image: "medal-of-honor-heroes-2.jpg",

        category: ["Ação"],

        platform: "mobile",

        featured: false,

        size: "370.24MB",

        downloadMobile: "https://www.mediafire.com/file/7yk553o2w0tcgjt/M3dalofH0norhero3s2psp.zip/file",

        downloadPc: "",

        gallery: [
            "medal-of-honor-heroes-2-1.jpg",
            "medal-of-honor-heroes-2-2.jpg"
        ]
    },


    {
        id: "street-fighter-alpha-3-max",

        title: "Street Fighter Alpha 3 MAX",

        image: "street-fighter-alpha-3-max.jpg",

        category: ["Luta"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "need-for-speed-undercover",

        title: "Need for Speed: Undercover",

        image: "need-for-speed-undercover.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: true,

        size: "349.62MB",

        downloadMobile: "https://www.mediafire.com/file/yg9fblt5n8ysq9m/nfs_undercover_psp_%252B_savedata.7z/file",

        downloadPc: "",

        gallery: [
            "need-for-speed-undercover-1.jpg",
            "need-for-speed-undercover-2.jpg"
        ]
    },


    {
        id: "need-for-speed-shift",

        title: "Need for Speed: Shift",

        image: "need-for-speed-shift.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "need-for-speed-most-wanted",

        title: "Need for Speed: Most Wanted",

        image: "need-for-speed-most-wanted.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: true,

        size: "266.09MB",

        downloadMobile: "https://www.mediafire.com/file/mtotznt8j23xehl/NEED-FOR-SPEED-MW-HD.zip/file",

        downloadPc: "",

        gallery: [
            "need-for-speed-most-wanted-1.jpg",
            "need-for-speed-most-wanted-2.jpg"
        ]
    },


    {
        id: "efootball-2025",

        title: "EFOOTBALL 2025",

        image: "efootball-2025.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: true,

        size: "372.41MB",

        downloadMobile: "https://www.mediafire.com/file/2azhj47b3sp9ee4/PES+2025+PPSSPP.rar/file",

        downloadPc: "",

        gallery: [
            "efootball-2025-1.jpg",
            "efootball-2025-2.jpg"
        ]
    },


    {
        id: "crazy-taxi-fare-wars",

        title: "Crazy Taxi: Fare Wars",

        image: "crazy-taxi-fare-wars.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "lego-indiana-jones-2",

        title: "LEGO Indiana Jones 2: The Adventure Continues",

        image: "lego-indiana-jones-2.jpg",

        category: ["Aventura"],

        platform: "mobile",

        featured: false,

        size: "670.3MB",

        downloadMobile: "https://www.mediafire.com/file/sqm7e3970ca8uq8/L3g01ndJ0nsptbrpsp.rar/file",

        downloadPc: "",

        gallery: [
            "lego-indiana-jones-2-1.jpg",
            "lego-indiana-jones-2-2.jpg"
        ]
    },


    {
        id: "lego-star-wars-2",

        title: "LEGO Star Wars II: The Original Trilogy PT-BR",

        image: "lego-star-wars-2.jpg",

        category: ["Aventura"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "crash-tag-team-racing",

        title: "Crash Tag Team Racing",

        image: "crash-tag-team-racing.jpg",

        category: ["Corrida"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "winning-eleven-2009",

        title: "World Soccer Winning Eleven 2009",

        image: "winning-eleven-2009.jpg",

        category: ["Esportes"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "marvel-ultimate-alliance-2",

        title: "Marvel Ultimate Alliance 2",

        image: "marvel-ultimate-alliance-2.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: false,

        size: "1.67GB",

        downloadMobile: "https://www.mediafire.com/file/ip5tk6e6v79j2tv/MARVEL_ULT_ALLIANCE_2_%2528PSP%2529.iso/file",

        downloadPc: "",

        gallery: [
            "marvel-ultimate-alliance-2-1.jpg",
            "marvel-ultimate-alliance-2-2.jpg"
        ]
    },


    {
        id: "marvel-nemesis",

        title: "Marvel Nemesis: Rise of the Imperfects",

        image: "marvel-nemesis-rise-of-the-imperfects.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "108.75MB",

        downloadMobile: "https://www.mediafire.com/file/qcew32vpy9x6o5i/Marvel+Marvel+Nemesis+Rise+Of+The+Inperfects+By+Faile.zip/file",

        downloadPc: "",

        gallery: [
            "marvel-nemesis-rise-of-the-imperfects-1.jpg",
            "marvel-nemesis-rise-of-the-imperfects-2.jpg"
        ]
    },


    {
        id: "metal-gear-solid-peace-walker",

        title: "Metal Gear Solid: Peace Walker",

        image: "metal-gear-solid-peace-walker.jpg",

        category: ["Ação"],

        platform: "mobile",

        featured: true,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "littlebigplanet",

        title: "LittleBigPlanet",

        image: "littlebigplanet.jpg",

        category: ["Aventura"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "street-fighter-zero-3",

        title: "Street Fighter Zero 3: Double Upper",

        image: "street-fighter-zero-3.jpg",

        category: ["Luta"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "manhunt-2",

        title: "Manhunt 2",

        image: "manhunt-2.jpg",

        category: ["Ação"],

        platform: "mobile",

        featured: false,

        size: "980.61MB",

        downloadMobile: "https://www.mediafire.com/file/j50a3i6og3e2fnt/Manhunt_2_%2528BR%2529.zip/file?dkey=otfzmp00vez&r=1601",

        downloadPc: "",

        gallery: [
            "manhunt-2-1.jpg",
            "manhunt-2-2.jpg"
        ]
    },


    {
        id: "metal-slug-anthology",

        title: "Metal Slug Anthology",

        image: "metal-slug-anthology.jpg",

        category: ["Ação", "Luta"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "metal-slug-xx",

        title: "Metal Slug XX",

        image: "metal-slug-xx.jpg",

        category: ["Ação", "Luta"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "fight-night-round-3",

        title: "Fight Night Round 3",

        image: "fight-night-round-3.jpg",

        category: ["Esportes", "Luta"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "tekken-6",

        title: "Tekken 6",

        image: "tekken-6.jpg",

        category: ["Luta"],

        platform: "mobile",

        featured: true,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "call-of-duty-roads-to-victory",

        title: "Call of Duty: Roads to Victory",

        image: "call-of-duty-roads-to-victory.jpg",

        category: ["Ação"],

        platform: "mobile",

        featured: false,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },


    {
        id: "assassins-creed-bloodlines",

        title: "Assassin's Creed: Bloodlines",

        image: "assassins-creed-bloodlines.jpg",

        category: ["Ação", "Aventura"],

        platform: "mobile",

        featured: true,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    },

{
    id: "gta-san-andreas",

    title: "GTA San Andreas: PT-BR",

    image: "gta-san-andreas.jpg",

    category: ["Ação", "Aventura"],

    platform: "android",

    featured: true,

    size: "2.46GB",

    downloadAndroid: "https://www.mediafire.com/file_premium/afa9tmniyfznw8e",

    downloadMobile: "",

    downloadPc: "",

    gallery: [
        "gta-san-andreas-1.jpg",
        "gta-san-andreas-2.jpg",
        "gta-san-andreas-3.jpg"
    ]
},

    {
        id: "wwe-smackdown-vs-raw-2010",

        title: "WWE SmackDown vs. Raw 2010",

        image: "wwe-smackdown-vs-raw-2010.jpg",

        category: ["Luta", "Esportes"],

        platform: "mobile",

        featured: true,

        size: "A informar",

        downloadMobile: "",

        downloadPc: "",

        gallery: []
    }

];


/* =====================================================
   ELEMENTOS
===================================================== */

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const searchResultsSection =
    document.getElementById("searchResultsSection");

const searchResults =
    document.getElementById("searchResults");

const featuredGames =
    document.getElementById("featuredGames");

const allGames =
    document.getElementById("allGames");

const gameCount =
    document.getElementById("gameCount");

const noResults =
    document.getElementById("noResults");

const searchResultText =
    document.getElementById("searchResultText");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const platformButtons =
    document.querySelectorAll(
        ".platform-button"
    );


/* =====================================================
   MODAL
===================================================== */

const gameModal =
    document.getElementById("gameModal");

const gameModalOverlay =
    document.getElementById(
        "gameModalOverlay"
    );

const modalClose =
    document.getElementById("modalClose");

const modalCover =
    document.getElementById("modalCover");

const modalTitle =
    document.getElementById("modalTitle");

const modalPlatform =
    document.getElementById(
        "modalPlatform"
    );

const modalSize =
    document.getElementById("modalSize");

const modalCategory =
    document.getElementById(
        "modalCategory"
    );

const modalDownloads =
    document.getElementById(
        "modalDownloads"
    );

const galleryImage =
    document.getElementById(
        "galleryImage"
    );

const galleryPrev =
    document.getElementById(
        "galleryPrev"
    );

const galleryNext =
    document.getElementById(
        "galleryNext"
    );

const galleryCounter =
    document.getElementById(
        "galleryCounter"
    );


/* =====================================================
   ESTADO
===================================================== */

let currentPlatform = "mobile";

let currentGame = null;

let currentGalleryImages = [];

let currentGalleryIndex = 0;


/* =====================================================
   NORMALIZAR TEXTO
===================================================== */

function normalizeText(text) {

    return text
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase();

}


/* =====================================================
   CRIAR CARD
===================================================== */

function createGameCard(game) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "game-card";


    const imagePath =
        `assets/jogos/${game.image}`;


    const downloadAvailable =
    Boolean(
        game.platform === "android"
            ? game.downloadAndroid &&
              game.downloadAndroid !== "#"
            : game.downloadMobile &&
              game.downloadMobile !== "#"
    );


    card.innerHTML = `

        <div class="game-cover">

            <img
                src="${imagePath}"
                alt="Capa de ${game.title}"
                loading="lazy"
            >

            <span class="game-platform">
    ${
        game.platform === "mobile"
            ? "📱 PSP"
            : game.platform === "pc"
                ? "🖥️ PSP para PC"
                : "📱 Celular"
    }
</span>

        </div>


        <div class="game-info">

            <h3 class="game-title">
                ${game.title}
            </h3>


            <div class="game-category">
                ${game.category.join(" • ")}
            </div>


            ${
                downloadAvailable

                ?

                `
                <button
                    class="download-button"
                    type="button"
                >
                    🎮 Ver detalhes
                </button>
                `

                :

                `
                <button
                    class="download-button disabled"
                    type="button"
                >
                    🚧 Em Breve
                </button>
                `
            }

        </div>

    `;


    const image =
        card.querySelector(
            ".game-cover img"
        );


    image.addEventListener(
        "error",
        () => {

            image.src =
                "assets/logo.png";

        }
    );


    const button =
        card.querySelector(
            ".download-button"
        );


    if (downloadAvailable) {

        button.addEventListener(
            "click",
            () => {

                openGameModal(game);

            }
        );

    }


    return card;

}


/* =====================================================
   DESTAQUES
===================================================== */

function renderFeatured() {

    featuredGames.innerHTML = "";


    const featured =
        games.filter(game => {

            return (
                game.platform ===
                    currentPlatform &&
                game.featured === true
            );

        });


    featured.forEach(game => {

        featuredGames.appendChild(
            createGameCard(game)
        );

    });

}

/* =====================================================
   CONTADOR DE JOGOS
===================================================== */

function updateGameCount() {

    if (!gameCount) return;

    const activeButton = document.querySelector(
        ".platform-button.active"
    );

    const selectedPlatform =
        activeButton?.dataset.platform || "mobile";

    const totalGames = games.filter(
        game => game.platform === selectedPlatform
    ).length;

    gameCount.textContent = `(${totalGames})`;
}


/* =====================================================
   TODOS OS JOGOS
===================================================== */

function renderAllGames() {

    allGames.innerHTML = "";


    const availableGames =
        games.filter(game => {

            return (
                game.platform ===
                currentPlatform
            );

        });


    availableGames.forEach(game => {

        allGames.appendChild(
            createGameCard(game)
        );

    });

}


/* =====================================================
   PESQUISA
===================================================== */

function performSearch() {

    const search =
        normalizeText(
            searchInput.value.trim()
        );


    if (search === "") {

        searchResultsSection
            .classList
            .remove("visible");


        document
            .getElementById(
                "mais-baixados"
            )
            .style.display = "";


        document
            .getElementById(
                "todos-jogos"
            )
            .style.display = "";


        searchResults.innerHTML = "";

        noResults.style.display =
            "none";

        searchResultText.textContent =
            "";

        clearSearch.style.display =
            "none";

        return;

    }


    searchResultsSection
        .classList
        .add("visible");


    document
        .getElementById(
            "mais-baixados"
        )
        .style.display = "none";


    document
        .getElementById(
            "todos-jogos"
        )
        .style.display = "none";


    clearSearch.style.display =
        "block";


    const results =
        games.filter(game => {

            if (
                game.platform !==
                currentPlatform
            ) {

                return false;

            }


            const title =
                normalizeText(
                    game.title
                );


            const categories =
                normalizeText(
                    game.category.join(" ")
                );


            return (
                title.includes(search) ||
                categories.includes(search)
            );

        });


    searchResults.innerHTML = "";


    if (results.length === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";


        results.forEach(game => {

            searchResults.appendChild(
                createGameCard(game)
            );

        });

    }


    searchResultText.textContent =
        `${results.length} jogo(s) encontrado(s)`;

}


/* =====================================================
   LIMPAR PESQUISA
===================================================== */

function clearSearchInput() {

    searchInput.value = "";

    performSearch();

    searchInput.focus();

}


searchInput.addEventListener(
    "input",
    performSearch
);


clearSearch.addEventListener(
    "click",
    clearSearchInput
);


/* =====================================================
   TROCAR PLATAFORMA
===================================================== */

platformButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            platformButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            currentPlatform =
    button.dataset.platform;

updateGameCount();


if (
    searchInput.value.trim() !== ""
) {

                performSearch();

            } else {

                renderFeatured();

                renderAllGames();

            }

        }
    );

});


/* =====================================================
   MENU MOBILE
===================================================== */

menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   ABRIR MODAL
===================================================== */

function openGameModal(game) {

    currentGame = game;


    currentGalleryIndex = 0;


    /* CAPA */

    modalCover.src =
        `assets/jogos/${game.image}`;


    modalCover.alt =
        `Capa de ${game.title}`;


    modalCover.onerror =
        function() {

            this.src =
                "assets/logo.png";

        };


    /* TÍTULO */

    modalTitle.textContent =
        game.title;


    /* PLATAFORMA */

    if (game.platform === "mobile") {

    modalPlatform.textContent =
        "📱 PSP para Celular";

} else if (game.platform === "pc") {

    modalPlatform.textContent =
        "🖥️ PSP para PC";

} else if (game.platform === "android") {

    modalPlatform.textContent =
        "📱 Jogo para Celular";

}


    /* TAMANHO */

    modalSize.textContent =
        game.size || "Não informado";


    /* CATEGORIA */

    modalCategory.textContent =
        game.category.join(" • ");


    /* DOWNLOADS */

    renderModalDownloads(game);


    /* =================================================
       GALERIA

       IMPORTANTE:
       A capa NÃO é adicionada aqui.

       Somente as imagens dentro de
       game.gallery serão exibidas.
    ================================================= */

    currentGalleryImages =
        Array.isArray(game.gallery)
            ? game.gallery
            : [];


    currentGalleryIndex = 0;


    updateGallery();


    /* MOSTRAR */

    gameModal.classList.add(
        "active"
    );


    gameModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   FECHAR MODAL
===================================================== */

function closeGameModal() {

    gameModal.classList.remove(
        "active"
    );


    gameModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    currentGame = null;

}


modalClose.addEventListener(
    "click",
    closeGameModal
);


gameModalOverlay.addEventListener(
    "click",
    closeGameModal
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            gameModal.classList.contains(
                "active"
            )
        ) {

            closeGameModal();

        }

    }
);


/* =====================================================
   DOWNLOADS
===================================================== */

function renderModalDownloads(game) {

    modalDownloads.innerHTML = "";


    /* DOWNLOAD PARA CELULAR / PSP */

if (
    game.platform === "android" &&
    game.downloadAndroid &&
    game.downloadAndroid !== "#"
) {

    const androidButton =
        document.createElement("a");

    androidButton.href =
        game.downloadAndroid;

    androidButton.target =
        "_blank";

    androidButton.rel =
        "noopener noreferrer";

    androidButton.className =
        "modal-download-button";

    androidButton.innerHTML =
        "📱 Download para Celular";

    modalDownloads.appendChild(
        androidButton
    );

}


/* DOWNLOAD PSP PARA CELULAR */

if (
    game.platform === "mobile" &&
    game.downloadMobile &&
    game.downloadMobile !== "#"
) {

    const mobileButton =
        document.createElement("a");

    mobileButton.href =
        game.downloadMobile;

    mobileButton.target =
        "_blank";

    mobileButton.rel =
        "noopener noreferrer";

    mobileButton.className =
        "modal-download-button";

    mobileButton.innerHTML =
        "📱 Download PSP";

    modalDownloads.appendChild(
        mobileButton
    );
}


    /* PC */

    if (
        game.downloadPc &&
        game.downloadPc !== "#"
    ) {

        const pcButton =
            document.createElement("a");


        pcButton.href =
            game.downloadPc;


        pcButton.target =
            "_blank";


        pcButton.rel =
            "noopener noreferrer";


        pcButton.className =
            "modal-download-button";


        pcButton.innerHTML =
            "🖥️ Download PC";


        modalDownloads.appendChild(
            pcButton
        );

    }


    /* NENHUM */

    if (
        modalDownloads.children.length === 0
    ) {

        const unavailable =
            document.createElement(
                "span"
            );


        unavailable.className =
            "modal-download-button";


        unavailable.style.opacity =
            "0.5";


        unavailable.style.cursor =
            "default";


        unavailable.textContent =
            "🚧 Download indisponível";


        modalDownloads.appendChild(
            unavailable
        );

    }

}


/* =====================================================
   GALERIA
===================================================== */

function updateGallery() {

    /* ================================================
       SEM IMAGENS NA GALERIA
    ================================================ */

    if (
        currentGalleryImages.length === 0
    ) {

        galleryImage.src =
            "assets/logo.png";

        galleryImage.alt =
            "Galeria indisponível";

        galleryCounter.textContent =
            "0 / 0";

        galleryPrev.style.display =
            "none";

        galleryNext.style.display =
            "none";

        return;

    }


    /* ================================================
       GARANTIR QUE O ÍNDICE É VÁLIDO
    ================================================ */

    if (
        currentGalleryIndex < 0 ||
        currentGalleryIndex >=
        currentGalleryImages.length
    ) {

        currentGalleryIndex = 0;

    }


    const image =
        currentGalleryImages[
            currentGalleryIndex
        ];


    /* ================================================
       ANIMAÇÃO
    ================================================ */

    galleryImage.style.opacity =
        "0";


    setTimeout(() => {

        galleryImage.src =
            `assets/jogos/${image}`;


        galleryImage.alt =
            currentGame
                ? `Imagem de ${currentGame.title}`
                : "Imagem do jogo";


        galleryImage.onerror =
            function() {

                this.src =
                    "assets/logo.png";

            };


        galleryImage.style.opacity =
            "1";

    }, 100);


    /* ================================================
       CONTADOR
    ================================================ */

    galleryCounter.textContent =
        `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;


    /* ================================================
       BOTÕES
    ================================================ */

    if (
        currentGalleryImages.length <= 1
    ) {

        galleryPrev.style.display =
            "none";

        galleryNext.style.display =
            "none";

    } else {

        galleryPrev.style.display =
            "flex";

        galleryNext.style.display =
            "flex";

    }

}


/* =====================================================
   PRÓXIMA IMAGEM
===================================================== */

galleryNext.addEventListener(
    "click",
    () => {

        if (
            currentGalleryImages.length <= 1
        ) {

            return;

        }


        currentGalleryIndex++;


        if (
            currentGalleryIndex >=
            currentGalleryImages.length
        ) {

            currentGalleryIndex = 0;

        }


        updateGallery();

    }
);


/* =====================================================
   IMAGEM ANTERIOR
===================================================== */

galleryPrev.addEventListener(
    "click",
    () => {

        if (
            currentGalleryImages.length <= 1
        ) {

            return;

        }


        currentGalleryIndex--;


        if (
            currentGalleryIndex < 0
        ) {

            currentGalleryIndex =
                currentGalleryImages.length - 1;

        }


        updateGallery();

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

updateGameCount();

renderFeatured();

renderAllGames();