/* =====================================================
   TECHEMU
   Sistema principal do site
===================================================== */


/* =====================================================
   BANCO DE JOGOS
===================================================== */

const games = [

    {
        id: "god-of-war-ghost-of-sparta",
        title: "God of War: Ghost of Sparta",
        image: "god-of-war-ghost-of-sparta.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/scacgow7sor6rg8/PSPG0WGHSTDUBPTBR.rar/file"
    },

    {
        id: "god-of-war-chains-of-olympus",
        title: "God of War: Chains of Olympus",
        image: "god-of-war-chains-of-olympus.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/7atb98vzkfpnlri/PSPGOWC00.rar/file"
    },

    {
        id: "gta-vice-city-stories",
        title: "GTA Vice City Stories",
        image: "gta-vice-city-stories.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file_premium/w9534196b1zxsal/Grand_Theft_Auto_-_Vice_City_Stories__%2528PSP%2529_%2528BR%2529_%2540Coisasdeandroid.7z/file"
    },

    {
        id: "gta-liberty-city-stories",
        title: "GTA Liberty City Stories",
        image: "gta-liberty-city-stories.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/yjadgg8tibrp550/Gtalcsptbrpsp.rar/file?dkey=bl01u3ks96i&r=1994"
    },

    {
        id: "gta-chinatown-wars",
        title: "GTA Chinatown Wars",
        image: "gta-chinatown-wars.jpg",
        category: ["Ação"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

{
        id: "resident-evil-4",
        title: "Resident Evil 4: PT-BR",
        image: "resident-evil-4.jpg",
        category: ["Ação", "Terror"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/g2m4vscmnpe61za/RESIDENT_EVIL_4_.zip/file"
    },

{
        id: "silent-hill-origins",
        title: "Silent Hill Origins",
        image: "silent-hill-origins.jpg",
        category: ["Ação", "Terror"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/jf06f0nd0frqnj7/Silent_Hill_Origins.7z/file"
    },

{
        id: "dantes-inferno",
        title: "Dante's Inferno",
        image: "dantes-inferno.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/w3ya8xmhpx0vpwr/Dante"
    },

    {
        id: "dragon-ball-z-shin-budokai",
        title: "Dragon Ball Z: Shin Budokai",
        image: "dragon-ball-z-shin-budokai.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "dragon-ball-z-shin-budokai-another-road",
        title: "Dragon Ball Z: Shin Budokai - Another Road",
        image: "dragon-ball-z-shin-budokai-another-road.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "dragon-ball-z-shin-budokai-2",
        title: "Dragon Ball Z: Shin Budokai 2",
        image: "dragon-ball-z-shin-budokai-2.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/jxfiazbjmzywrs4/Dragon+Ball+Z+-+Shin+Budokai+2+@Coisasdeandroid.zip/file"
    },

    {
        id: "dragon-ball-z-tenkaichi-tag-team",
        title: "Dragon Ball Z: Tenkaichi Tag Team",
        image: "dragon-ball-z-tenkaichi-tag-team.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/1rzbn49gm0nys7j/Dragon+Ball+Z+-+Tenkaichi+Tag+Team+Legendado.iso/file"
    },

    {
        id: "naruto-ultimate-ninja-heroes",
        title: "Naruto Ultimate Ninja Heroes",
        image: "naruto-ultimate-ninja-heroes.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/4d07ch3zj3mxwf6/Naruto+-+Ultimate+Ninja+Heroes+@coisasdenandroid.zip/file"
    },

    {
        id: "naruto-ultimate-ninja-heroes-2",
        title: "Naruto Ultimate Ninja Heroes 2",
        image: "naruto-ultimate-ninja-heroes-2.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/kp34hepvk42hfbs/Naruto+-+Ultimate+Ninja+Heroes+2+-+The+Phantom+Fortress+@Coisasdeandroid.zip/file"
    },

    {
        id: "naruto-shippuden-ultimate-ninja-heroes-3",
        title: "Naruto Shippuden: Ultimate Ninja Heroes 3",
        image: "naruto-shippuden-ultimate-ninja-heroes-3.jpg",
        category: ["Luta", "Anime"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/3a3z6g1rocokonv/Naruto_Heroes_3_Atualiza%25C3%25A7%25C3%25A3o_Abril.iso/file"
    },

    {
        id: "naruto-shippuden-ultimate-ninja-impact",
        title: "Naruto Shippuden: Ultimate Ninja Impact PT-BR",
        image: "naruto-shippuden-ultimate-ninja-impact.jpg",
        category: ["Luta", "Anime", "Ação"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/fw2sujdte3e9v7l/Naruto+Impact+2+Dublado+@Coisasdeandroid.rar/file"
    },

    {
        id: "naruto-shippuden-kizuna-drive",
        title: "Naruto Shippuden: Kizuna Drive",
        image: "naruto-shippuden-kizuna-drive.jpg",
        category: ["Ação", "Anime"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/64g9mw8oo0l8q3a/Naruto+Shippuden+-+Kizuna+Drive+@Coisasdeandroid.zip/file"
    },

    {
        id: "naruto-shippuden-akatsuki-rising",
        title: "Naruto Shippuden: Legends Akatsuki Rising",
        image: "naruto-shippuden-akatsuki-rising.jpg",
        category: ["Ação", "Anime"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/fonfpg26td1uo2l/Naruto+Shippuden+-+Legends+-+Akatsuki+Rising+@coisasdenadroid.zip/file"
    },

    {
        id: "def-jam-the-takeover",
        title: "Def Jam: Fight For NY - The Takeover",
        image: "def-jam-the-takeover.jpg",
        category: ["Luta", "Ação"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/0nm35jvx2t9xl03/Def+Jam+-+Fight+for+NY+-+The+Takeover.7z/file"
    },

    {
        id: "bomba-patch-2026",
        title: "Bomba Patch 2026",
        image: "bomba-patch-2026.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "fifa-14",
        title: "FIFA 14",
        image: "fifa-14.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/g5npiyqf286qc1e/f1f14ptpsp.rar/file"
    },

{
    id: "fifa-10",
    title: "FIFA 10",
    image: "fifa-10.jpg",
    category: ["Esportes"],
    platform: "mobile",
    featured: false,
    download: "https://www.mediafire.com/file/osrxpmad0ydwmbu/FIFA+10+%28Spain%29.iso/file"
},

    {
        id: "fifa-street-2",
        title: "FIFA Street 2",
        image: "fifa-street-2.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/fj6p3qddfbuj467/PPSSPP+FIFA+STREET+2.iso/file"
    },

    {
        id: "pes-2014",
        title: "PES 2014 Original PT-BR",
        image: "pes-2014.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/eyaawbl4errm2pp/P3s+14+fullpsp.cso/file"
    },

    {
        id: "monster-hunter-portable-3rd",
        title: "Monster Hunter Portable 3rd PT-BR",
        image: "monster-hunter-portable-3rd.jpg",
        category: ["Ação", "RPG"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "monster-hunter-freedom-unite",
        title: "Monster Hunter Freedom Unite",
        image: "monster-hunter-freedom-unite.jpg",
        category: ["Ação", "RPG"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/e3546je0lqfndfj/Monster-Hut-Free-USA.zip/file"
    },

    {
        id: "monster-hunter-freedom-2",
        title: "Monster Hunter Freedom 2",
        image: "monster-hunter-freedom-2.jpg",
        category: ["Ação", "RPG"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "midnight-club-3",
        title: "Midnight Club 3 - DUB Edition",
        image: "midnight-club-3.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/d7b59k2lqgqo4xl/MIDNIGHT+CLUB+3+DUB+.ISO+(By+Faile+Tutorias).zip/file%20%20MIDNIGHT%20CLUB%203"
    },

    {
        id: "midnight-club-la-remix",
        title: "Midnight Club L.A. Remix",
        image: "midnight-club-la-remix.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/f38whjwcz17ec9p/MIDNIGHT_CLUB_-_%2528L.A._Remix%2529_Europe.zip/file"
    },

    {
        id: "mortal-kombat-unchained",
        title: "Mortal Kombat: Unchained",
        image: "mortal-kombat-unchained.jpg",
        category: ["Luta"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/z06wh0pp61pewhy/Mkuch4in3dPtbr.rar/file"
    },

    {
        id: "ben10-protector-of-earth",
        title: "Ben 10: Protector of Earth",
        image: "ben10-protector-of-earth.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/el3745pzouiv99s/B3n1OPoeDubPtbpsp.rar?dkey=z4gal7gmz1g&r=1745"
    },

    {
        id: "ben10-alien-force",
        title: "Ben 10: Alien Force Vilgax Attacks",
        image: "ben10-alien-force-vilgax-attacks.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/1005r21061jlw6s/B3n1O4fVaPtbpsp.rar/file"
    },

    {
        id: "homem-aranha-3",
        title: "Homem-Aranha 3",
        image: "homem-aranha-3.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/67pugmeaantzndw/Spider-Man_3_%2528ByFaile%2529_%2528v1.02%2529.zip/file"
    },

{
        id: "x-man-legends-2",
        title: "X-Man Legends 2: Rise Of Apocalypse",
        image: "x-man-legends-2.jpg",
        category: ["Ação"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/eh4icn85jonqo1s/XMLIIROAPSP.Www.GamezFull.com.rar"
    },

    {
        id: "toy-story-3",
        title: "Toy Story 3",
        image: "toy-story-3.jpg",
        category: ["Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/snri4674ogzb3li/Toy-Story-3_Mobile_PPSSPP.zip/file"
    },

 {
        id: "cars",
        title: "Carros",
        image: "carros.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/on15r5aff61x7t1/CARROS.cso/file"
    },

    {
        id: "nba-2k13",
        title: "NBA 2K13",
        image: "nba-2k13.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "crash-of-the-titans",
        title: "Crash of the Titans",
        image: "crash-of-the-titans.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/10h5mi39bgyssmn/Crash_of_the_Titans.iso/file"
    },

    {
        id: "tomb-raider-legend",
        title: "Lara Croft Tomb Raider: Legend",
        image: "tomb-raider-legend.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/w965th5n6f6qyxn/Lara_Croft_Tomb_Raider_-_Legend_%2528USA%2529.7z/file"
    },

    {
        id: "gran-turismo",
        title: "Gran Turismo",
        image: "gran-turismo.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/h9l5za0tubirgf3/GranTurismo.zip/file"
    },

    {
        id: "medal-of-honor-heroes-2",
        title: "Medal of Honor: Heroes 2",
        image: "medal-of-honor-heroes-2.jpg",
        category: ["Ação"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/7yk553o2w0tcgjt/M3dalofH0norhero3s2psp.zip/file"
    },

    {
        id: "street-fighter-alpha-3-max",
        title: "Street Fighter Alpha 3 MAX",
        image: "street-fighter-alpha-3-max.jpg",
        category: ["Luta"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "need-for-speed-undercover",
        title: "Need for Speed: Undercover",
        image: "need-for-speed-undercover.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/yg9fblt5n8ysq9m/nfs_undercover_psp_%252B_savedata.7z/file"
    },

    {
        id: "need-for-speed-shift",
        title: "Need for Speed: Shift",
        image: "need-for-speed-shift.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "need-for-speed-most-wanted",
        title: "Need for Speed: Most Wanted",
        image: "need-for-speed-most-wanted.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/mtotznt8j23xehl/NEED-FOR-SPEED-MW-HD.zip/file"
    },

    {
        id: "efootball-2025",
        title: "EFOOTBALL 2025",
        image: "efootball-2025.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: true,
        download: "https://www.mediafire.com/file/2azhj47b3sp9ee4/PES+2025+PPSSPP.rar/file"
    },

    {
        id: "crazy-taxi-fare-wars",
        title: "Crazy Taxi: Fare Wars",
        image: "crazy-taxi-fare-wars.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "lego-indiana-jones-2",
        title: "LEGO Indiana Jones 2: The Adventure Continues",
        image: "lego-indiana-jones-2.jpg",
        category: ["Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/sqm7e3970ca8uq8/L3g01ndJ0nsptbrpsp.rar/file"
    },

    {
        id: "lego-star-wars-2",
        title: "LEGO Star Wars II: The Original Trilogy PT-BR",
        image: "lego-star-wars-2.jpg",
        category: ["Aventura"],
        platform: "mobile",
        featured: false,
        download: "https://www.mediafire.com/file/s7m2tglm5pqw5og/LEGO_STAR_WARS_2_PTBR.rar/file?dkey=n99v4x0e12g&r=457"
    },

    {
        id: "crash-tag-team-racing",
        title: "Crash Tag Team Racing",
        image: "crash-tag-team-racing.jpg",
        category: ["Corrida"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "winning-eleven-2009",
        title: "World Soccer Winning Eleven 2009",
        image: "winning-eleven-2009.jpg",
        category: ["Esportes"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "marvel-ultimate-alliance-2",
        title: "Marvel Ultimate Alliance 2",
        image: "marvel-ultimate-alliance-2.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "metal-gear-solid-peace-walker",
        title: "Metal Gear Solid: Peace Walker",
        image: "metal-gear-solid-peace-walker.jpg",
        category: ["Ação"],
        platform: "mobile",
        featured: true,
        download: "#"
    },

    {
        id: "littlebigplanet",
        title: "LittleBigPlanet",
        image: "littlebigplanet.jpg",
        category: ["Aventura"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "street-fighter-zero-3",
        title: "Street Fighter Zero 3: Double Upper",
        image: "street-fighter-zero-3.jpg",
        category: ["Luta"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "manhunt-2",
        title: "Manhunt 2",
        image: "manhunt-2.jpg",
        category: ["Ação"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "metal-slug-anthology",
        title: "Metal Slug Anthology",
        image: "metal-slug-anthology.jpg",
        category: ["Ação", "Luta"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "metal-slug-xx",
        title: "Metal Slug XX",
        image: "metal-slug-xx.jpg",
        category: ["Ação", "Luta"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "fight-night-round-3",
        title: "Fight Night Round 3",
        image: "fight-night-round-3.jpg",
        category: ["Esportes", "Luta"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "tekken-6",
        title: "Tekken 6",
        image: "tekken-6.jpg",
        category: ["Luta"],
        platform: "mobile",
        featured: true,
        download: "#"
    },

    {
        id: "call-of-duty-roads-to-victory",
        title: "Call of Duty: Roads to Victory",
        image: "call-of-duty-roads-to-victory.jpg",
        category: ["Ação"],
        platform: "mobile",
        featured: false,
        download: "#"
    },

    {
        id: "assassins-creed-bloodlines",
        title: "Assassin's Creed: Bloodlines",
        image: "assassins-creed-bloodlines.jpg",
        category: ["Ação", "Aventura"],
        platform: "mobile",
        featured: true,
        download: "#"
    },

    {
        id: "wwe-smackdown-vs-raw-2010",
        title: "WWE SmackDown vs. Raw 2010",
        image: "wwe-smackdown-vs-raw-2010.jpg",
        category: ["Luta", "Esportes"],
        platform: "mobile",
        featured: true,
        download: "#"
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

const noResults =
    document.getElementById("noResults");

const searchResultText =
    document.getElementById("searchResultText");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const platformButtons =
    document.querySelectorAll(".platform-button");


/* =====================================================
   PLATAFORMA ATUAL
===================================================== */

let currentPlatform = "mobile";


/* =====================================================
   NORMALIZAR TEXTO
===================================================== */

function normalizeText(text) {

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

}


/* =====================================================
   CRIAR CARD
===================================================== */

function createGameCard(game) {

    const card =
        document.createElement("article");

    card.className =
        "game-card";


    const imagePath =
        `assets/jogos/${game.image}`;


    const downloadAvailable =
        game.download &&
        game.download !== "#";


    card.innerHTML = `

        <div class="game-cover">

            <img
                src="${imagePath}"
                alt="Capa de ${game.title}"
                loading="lazy"
                onerror="this.src='assets/logo.png'"
            >

            <span class="game-platform">
                📱 PSP
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
                <a
                    href="${game.download}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="download-button"
                >
                    ⬇ Download Mobile
                </a>
                `

                :

                `
                <button
                    class="download-button disabled"
                    onclick="showComingSoon()"
                >
                    🚧 Em Breve
                </button>
                `
            }

        </div>

    `;


    return card;

}


/* =====================================================
   MOSTRAR DESTAQUES
===================================================== */

function renderFeatured() {

    featuredGames.innerHTML = "";


    const featured =
        games.filter(game => {

            return (
                game.platform === currentPlatform &&
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
   MOSTRAR TODOS OS JOGOS
===================================================== */

function renderAllGames() {

    allGames.innerHTML = "";


    const availableGames =
        games.filter(game => {

            return game.platform === currentPlatform;

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


    /*
       ============================================
       SEM PESQUISA
       ============================================
    */

    if (search === "") {

        searchResultsSection
            .classList
            .remove("visible");


        document
            .getElementById("mais-baixados")
            .style.display = "";


        document
            .getElementById("todos-jogos")
            .style.display = "";


        searchResults.innerHTML = "";

        noResults.style.display = "none";

        searchResultText.textContent = "";

        clearSearch.style.display = "none";

        return;

    }


    /*
       ============================================
       EXISTE PESQUISA
       ============================================
    */

    searchResultsSection
        .classList
        .add("visible");


    document
        .getElementById("mais-baixados")
        .style.display = "none";


    document
        .getElementById("todos-jogos")
        .style.display = "none";


    clearSearch.style.display = "block";


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

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";


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


            /*
               Se estiver pesquisando,
               atualiza os resultados.
            */

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


/* Fechar menu depois de clicar */

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
   EM BREVE
===================================================== */

function showComingSoon() {

    alert(
        "🚧 O download deste jogo ainda não está disponível no TechEmu."
    );

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

renderFeatured();

renderAllGames();