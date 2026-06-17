// =============================================================
// Taiwan Venue Hub - 資料庫
// 地區結構：5 大區，各區下分縣市（新竹縣市分開、嘉義縣市分開）
// 每筆資料欄位：id, category(mall/cinema), name, typeLabel,
//   region(北部/中部/南部/東部/離島), city(縣市鍵), chain(連鎖品牌或 null),
//   address, shortDesc, video(選填 YouTube id), details{...}
// =============================================================

const regionConfig = [
    { key: '北部', name: '北部', cities: [
        { key: 'greater_taipei', name: '大台北', match: ['taipei', 'newtaipei'] },
        { key: 'keelung', name: '基隆', match: ['keelung'] },
        { key: 'taoyuan', name: '桃園', match: ['taoyuan'] },
        { key: 'hsinchu_county', name: '新竹縣', match: ['hsinchu_county'] },
        { key: 'hsinchu_city', name: '新竹市', match: ['hsinchu_city'] },
    ]},
    { key: '中部', name: '中部', cities: [
        { key: 'miaoli', name: '苗栗', match: ['miaoli'] },
        { key: 'taichung', name: '台中', match: ['taichung'] },
        { key: 'changhua', name: '彰化', match: ['changhua'] },
        { key: 'nantou', name: '南投', match: ['nantou'] },
        { key: 'yunlin', name: '雲林', match: ['yunlin'] },
        { key: 'chiayi_county', name: '嘉義縣', match: ['chiayi_county'] },
        { key: 'chiayi_city', name: '嘉義市', match: ['chiayi_city'] },
    ]},
    { key: '南部', name: '南部', cities: [
        { key: 'tainan', name: '台南', match: ['tainan'] },
        { key: 'kaohsiung', name: '高雄', match: ['kaohsiung'] },
        { key: 'pingtung', name: '屏東', match: ['pingtung'] },
    ]},
    { key: '東部', name: '東部', cities: [
        { key: 'yilan', name: '宜蘭', match: ['yilan'] },
        { key: 'hualien', name: '花蓮', match: ['hualien'] },
        { key: 'taitung', name: '台東', match: ['taitung'] },
    ]},
    { key: '離島', name: '離島', cities: [
        { key: 'penghu', name: '澎湖', match: ['penghu'] },
        { key: 'kinmen', name: '金門', match: ['kinmen'] },
        { key: 'lienchiang', name: '連江', match: ['lienchiang'] },
    ]},
];

const venues = [
    // ==========================================
    // 北部 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_n_101', category: 'mall', name: '台北 101 購物中心', typeLabel: '頂級購物中心', region: '北部', city: 'taipei', chain: null, address: '台北市信義區市府路45號', shortDesc: '台灣指標性建築，匯聚全球頂級精品與米其林星級餐廳。',
        details: { opened: '2003年11月', history: '台灣首座國際頂級購物中心，建築融合東方文化與現代科技。', status: '全台營業額極高的指標性商場，吸引大量觀光客與高端客群。', anchorStores: 'Louis Vuitton、Dior、Cartier、Apple Store', building: '地上6層，地下1層（B1至6F商場）', parking: '汽車 1,053 席 / 機車 2,000 席', transport: '捷運「台北101/世貿站」4號出口', future: '持續引進獨家旗艦店與推動ESG。' }
    },
    {
        id: 'm_n_bellavita', category: 'mall', name: 'BELLAVITA 寶麗廣塲', typeLabel: '頂級購物中心', region: '北部', city: 'taipei', chain: null, address: '台北市信義區松仁路28號', shortDesc: '被譽為「貴婦百貨」，歐洲古堡風格的頂級精品商場。',
        details: { opened: '2009年9月', history: '由廣達電腦副董事長梁次震家族投資興建，主打極致奢華與寬敞的購物空間。', status: '信義計畫區內最具特色的歐式建築，吸引金字塔頂端客群。', anchorStores: 'Hermès、Van Cleef & Arpels、米其林星級餐廳 L’ATELIER de Joël Robuchon', building: '地上9層，地下4層', parking: '專屬地下停車場，提供代客泊車', transport: '捷運市政府站步行3分鐘', future: '維持頂級尊榮服務與不定期舉辦中庭大型藝術展演。' }
    },
    {
        id: 'm_n_skm_xinyi', category: 'mall', name: '新光三越 台北信義新天地 (A4, A8, A9, A11)', typeLabel: '連鎖百貨', region: '北部', city: 'taipei', chain: '新光三越', address: '台北市信義區松壽路等', shortDesc: '四棟建築以空橋串連，組成信義計畫區最大的百貨聚落。',
        details: { opened: '1997年起陸續開幕', history: '帶動信義計畫區發展的先驅，A11館為首棟，隨後擴展為四館聯動的龐大商圈。', status: '全台百貨店王之一，各館定位不同（A4精品、A8家庭、A9國際精品、A11年輕潮流）。', anchorStores: 'CHANEL、法雅客、MUJI、各式主題餐廳', building: '四棟獨立建築，具備完善空橋系統', parking: '四館地下室皆有停車場，共約 1,500 席汽車', transport: '捷運市政府站或台北101/世貿站', future: '持續進行樓層改裝與快閃店引進。' }
    },
    {
        id: 'm_n_breeze_ns', category: 'mall', name: '微風南山 Breeze NAN SHAN', typeLabel: '大型購物中心', region: '北部', city: 'taipei', chain: '微風', address: '台北市信義區松智路17號', shortDesc: '主打高質感餐飲與潮流時尚的信義區地標。',
        details: { opened: '2019年1月', history: '位於南山廣場低樓層，由微風集團經營，首創引進日本 atre 商場。', status: '餐飲比例極高，高樓層星空塔(46-48F)擁有絕佳景觀餐廳。', anchorStores: 'atre、微風超市、CÉ LA VI', building: '地下2層至地上7層，以及46-48層景觀餐廳', parking: '汽車 986 席 / 機車 1,500 席', transport: '捷運台北101/世貿站', future: '強化餐飲體驗與國際潮流品牌獨家代理。' }
    },
    {
        id: 'm_n_breeze_fuxing', category: 'mall', name: '微風廣場 Breeze Center', typeLabel: '連鎖百貨', region: '北部', city: 'taipei', chain: '微風', address: '台北市松山區復興南路一段39號', shortDesc: '微風集團起家旗艦店，引領台北精品與超市文化。',
        details: { opened: '2001年10月', history: '微風集團創始店，將時尚精品與精緻超市帶入台北東區，奠定品牌地位。', status: '復興館與本館相連，精品、餐飲與超市皆為話題焦點。', anchorStores: '微風超市、各國際精品、話題餐飲', building: '本館與復興館相連', parking: '地下停車場', transport: '捷運忠孝復興站步行約8分鐘', future: '持續更新品牌陣容與會員服務。' }
    },
    {
        id: 'm_n_breeze_taipeist', category: 'mall', name: '微風台北車站', typeLabel: '車站商場', region: '北部', city: 'taipei', chain: '微風', address: '台北市中正區北平西路3號', shortDesc: '台北車站二樓美食廣場，便當與餐飲齊聚的轉運美食地標。',
        details: { opened: '2007年', history: '微風集團取得台鐵台北車站經營權，將大廳二樓改造為人氣美食街。', status: '通勤族與旅客必經的美食補給站，鐵路便當尤為知名。', anchorStores: '各式人氣餐飲、鐵路便當、伴手禮', building: '台北車站2樓', parking: '台北車站地下停車場', transport: '台鐵/高鐵/捷運台北車站直達', future: '持續優化車站商業空間體驗。' }
    },
    {
        id: 'm_n_breeze_nanjing', category: 'mall', name: '微風南京', typeLabel: '連鎖百貨', region: '北部', city: 'taipei', chain: '微風', address: '台北市松山區南京東路三段337號', shortDesc: '結合捷運共構的小型精緻商場，主打輕奢與餐飲。',
        details: { opened: '2015年10月', history: '位於捷運南京復興站上方，定位為都會上班族的精緻生活商場。', status: '交通便利，餐飲與生活風格品牌受周邊商辦客群喜愛。', anchorStores: '微風超市、各式輕食餐飲', building: '捷運共構商辦低樓層', parking: '地下停車場', transport: '捷運南京復興站直達', future: '深耕周邊商辦商圈。' }
    },
    {
        id: 'm_n_qsquare', category: 'mall', name: '京站時尚廣場 Q Square', typeLabel: '轉運站商場', region: '北部', city: 'taipei', chain: null, address: '台北市大同區承德路一段1號', shortDesc: '結合台北車站與客運轉運站，交通最便利的流行指標。',
        details: { opened: '2009年12月', history: '台北轉運站BOT案共構商場，成功將西區人潮與年輕客群聚集。', status: '人流量極高，主打年輕、快時尚與下班後的聚餐休閒。', anchorStores: 'ZARA、威秀影城、各式獨家餐飲', building: '地上4層，地下3層（商場）', parking: '汽車 850 席 / 機車 1,000 席', transport: '五鐵共構（台鐵、高鐵、捷運、機捷、客運）出站即達', future: '雙子星計畫落成後將形成更龐大的台北車站商圈。' }
    },
    {
        id: 'm_n_sogo_br4', category: 'mall', name: '遠東SOGO 台北復興館 (BR4)', typeLabel: '連鎖百貨', region: '北部', city: 'taipei', chain: '遠東SOGO', address: '台北市大安區忠孝東路三段300號', shortDesc: '東區精品指標，捷運忠孝復興站共構百貨。',
        details: { opened: '2006年12月', history: '結合捷運共構工程，為東區注入頂級精品與精緻餐飲，與忠孝館形成互補。', status: '坪效極高的精品百貨，中高樓層設有挑高日式庭園。', anchorStores: 'HERMÈS、CHANEL、Cartier、鼎泰豐', building: '地上11層，地下3層', parking: '汽車約 800 席', transport: '捷運忠孝復興站2號出口直達', future: '持續引進話題餐飲與優化VIP服務。' }
    },
    {
        id: 'm_n_eslite_songyan', category: 'mall', name: '誠品生活松菸', typeLabel: '文化創意商場', region: '北部', city: 'taipei', chain: '誠品生活', address: '台北市信義區菸廠路88號', shortDesc: '24小時不打烊的新一代誠品總店，結合文創與設計。',
        details: { opened: '2013年8月（2024年接棒24H書店）', history: '位於松山文創園區，原為大巨蛋BOT附屬商業設施。信義店結業後，接棒成為24小時書店。', status: '台北文青與觀光客必訪，結合電影院、表演廳與行旅。', anchorStores: '誠品24H書店、誠品電影院、誠品行旅、各類台灣文創品牌', building: '地上3層，地下2層', parking: '松山文創園區地下停車場', transport: '捷運國父紀念館站步行5分鐘', future: '與大巨蛋商圈（遠東Garden City）串聯成文化體育園區。' }
    },
    {
        id: 'm_n_miramar', category: 'mall', name: '美麗華百樂園', typeLabel: '大型購物中心', region: '北部', city: 'taipei', chain: null, address: '台北市中山區敬業三路20號', shortDesc: '大直地標摩天輪，結合影城與全客層購物的休閒中心。',
        details: { opened: '2004年11月', history: '帶動大直重劃區發展的指標商場，頂樓百米摩天輪成為台北夜景象徵。', status: '家庭與情侶約會熱門地，影城與餐飲人氣長紅。', anchorStores: '美麗華大直影城、摩天輪、各式餐飲品牌', building: 'A、B 兩館，頂樓設摩天輪', parking: '大型停車場', transport: '捷運劍南路站步行3分鐘', future: '持續更新娛樂與餐飲業態。' }
    },
    {
        id: 'm_n_global_nangang', category: 'mall', name: '環球購物中心 南港車站店', typeLabel: '車站商場', region: '北部', city: 'taipei', chain: '環球購物中心', address: '台北市南港區忠孝東路七段369號', shortDesc: '南港車站共構商場，東區門戶的交通樞紐型購物中心。',
        details: { opened: '2013年', history: '南港車站BOT開發案，將三鐵共構人潮導入商場，帶動南港都市更新。', status: '結合 CITYLINK 與周邊商辦，通勤與在地客群穩定。', anchorStores: '各式餐飲、生活與快時尚品牌', building: '車站共構複合商場', parking: '地下停車場', transport: '台鐵/高鐵/捷運南港站直達', future: '配合南港轉型生技與會展中心持續發展。' }
    },
    {
        id: 'm_n_yulon', category: 'mall', name: 'YES! LIFE 裕隆城', typeLabel: '中大型購物中心', region: '北部', city: 'newtaipei', chain: null, address: '新北市新店區中興路三段70號', shortDesc: '擁有全亞洲最大誠品生活的新店全新地標。',
        details: { opened: '2023年9月', history: '原裕隆新店廠區，引進誠品生活與威秀影城，為新北市南區最大商場。', status: '新店居民消費娛樂重心，假日人潮洶湧。', anchorStores: '誠品生活新店、威秀影城、宜得利', building: '地上8層，地下3層', parking: '汽車 825 席 / 機車 1,000 席', transport: '捷運大坪林/七張站步行或接駁車', future: '深耕在地社區，打造第三空間。' }
    },
    {
        id: 'm_n_fec_banciao', category: 'mall', name: 'Mega City 板橋大遠百', typeLabel: '大型百貨公司', region: '北部', city: 'newtaipei', chain: '遠東百貨', address: '新北市板橋區新站路28號', shortDesc: '新北營業額霸主，擁有絕美威尼斯廣場。',
        details: { opened: '2011年12月', history: '新板特區的核心商場，引入大型影城與威尼斯水都造景的美食街，一戰成名。', status: '新北市業績最高的百貨公司，精品與餐飲陣容堅強。', anchorStores: '威秀影城、海底撈、各一線精品', building: '地上11層，地下1層', parking: '汽車 1,000 席 / 機車 2,000 席', transport: '台鐵/高鐵/捷運板橋站步行3分鐘', future: '持續強化新板特區精品龍頭地位。' }
    },
    {
        id: 'm_n_macrohub', category: 'mall', name: '宏匯廣場 HONHUI PLAZA', typeLabel: '中大型購物中心', region: '北部', city: 'newtaipei', chain: null, address: '新北市新莊區新北大道四段3號', shortDesc: '新莊副都心指標商場，擁有獨家 VR 遊樂園與演唱會場館。',
        details: { opened: '2020年7月', history: '新北市政府BOT案，填補了新莊、三重、五股地區缺乏大型百貨的空白。', status: '在地家庭客首選，設有 Zepp New Taipei 演唱會場館。', anchorStores: '美麗新影城、VR ZONE、Zepp New Taipei', building: '地上11層，地下7層', parking: '汽車 1,300 席 / 機車 1,200 席', transport: '機捷新莊副都心站步行5分鐘', future: '帶動新莊副都心整體商業發展。' }
    },
    {
        id: 'm_n_mitsui_linkou', category: 'mall', name: 'MITSUI OUTLET PARK 林口', typeLabel: '暢貨中心 (Outlet)', region: '北部', city: 'newtaipei', chain: 'MITSUI OUTLET PARK', address: '新北市林口區文化三路一段356號', shortDesc: '北台灣首座正統日系 Outlet，擴建二期營運中。',
        details: { opened: '2016年1月(一期), 2024年(二期)', history: '三井不動產在台灣的首個開發案，大獲成功，帶動林口房市與人口成長。', status: '北台灣最熱門的 Outlet 之一，二期加入強化了生活與娛樂機能。', anchorStores: '威秀影城、UNIQLO、各國際精品 Outlet', building: '半露天與室內商場結合，分為一、二期', parking: '汽車 3,000 席', transport: '機捷林口站 (A9) 步行5分鐘', future: '一二期整合發揮綜效，成為林口生活圈核心。' }
    },
    {
        id: 'm_n_global_zhonghe', category: 'mall', name: '環球購物中心 新北中和店', typeLabel: '大型購物中心', region: '北部', city: 'newtaipei', chain: '環球購物中心', address: '新北市中和區中山路三段122號', shortDesc: '中和地區大型家庭娛樂購物中心，影城與餐飲齊全。',
        details: { opened: '2011年', history: '環球購物中心於雙和地區的重要據點，補足在地大型商場需求。', status: '中永和居民休閒娛樂重心，假日家庭客眾多。', anchorStores: '威秀影城、各式餐飲與生活品牌', building: '多層複合商場', parking: '商場附設停車場', transport: '捷運環球購物中心鄰近站點與公車', future: '持續更新娛樂與餐飲業態。' }
    },
    {
        id: 'm_n_global_a9', category: 'mall', name: '環球購物中心 林口A9店', typeLabel: '車站商場', region: '北部', city: 'newtaipei', chain: '環球購物中心', address: '新北市林口區忠孝路55號', shortDesc: '機捷A9站共構商場，林口生活圈的便利購物據點。',
        details: { opened: '2017年', history: '結合機場捷運A9林口站開發，服務快速成長的林口新市鎮人口。', status: '通勤族與在地家庭的日常購物與餐飲首選。', anchorStores: '各式餐飲、生活與服飾品牌', building: '機捷共構商場', parking: '地下停車場', transport: '機捷林口站 (A9) 直達', future: '深耕林口新市鎮社區需求。' }
    },
    {
        id: 'm_n_xiujing', category: 'mall', name: '昕境廣場 Sunny Mall', typeLabel: '中型購物中心', region: '北部', city: 'newtaipei', chain: null, address: '新北市林口區文化二路一段', shortDesc: '林口在地型生活購物中心，結合國賓影城。',
        details: { opened: '2018年', history: '服務林口重劃區居民的社區型商場，提供影城與餐飲娛樂。', status: '在地家庭日常休閒去處。', anchorStores: '林口昕境國賓影城、餐飲與量販', building: '複合型商場', parking: '商場附設停車場', transport: '機捷林口站轉乘或開車', future: '深耕林口社區娛樂需求。' }
    },
    {
        id: 'm_n_showtime_shulin', category: 'mall', name: '秀泰生活 樹林店', typeLabel: '生活購物中心', region: '北部', city: 'newtaipei', chain: '秀泰生活', address: '新北市樹林區樹新路40-6號', shortDesc: '結合秀泰影城與書店的樹林在地生活商場。',
        details: { opened: '2018年5月', history: '秀泰集團於樹林打造的生活購物中心，引進影城與小書房文化空間。', status: '樹林、三峽地區家庭客的娛樂與購物中心。', anchorStores: '秀泰影城、小書房、各式餐飲', building: '複合型生活商場', parking: '汽車/機車停車場', transport: '台鐵樹林站步行約10分鐘', future: '深耕在地家庭娛樂。' }
    },
    {
        id: 'm_n_gloria', category: 'mall', name: '華泰名品城 GLORIA OUTLETS', typeLabel: '暢貨中心 (Outlet)', region: '北部', city: 'taoyuan', chain: null, address: '桃園市中壢區春德路189號', shortDesc: '全台首座美式露天 Outlet，高鐵站前地標。',
        details: { opened: '2015年12月起分三期', history: '純正美式村莊風格，緊鄰桃園高鐵站，為青埔特區帶來龐大商機。', status: '業績持續創高，精品陣容為全台 Outlet 最強。', anchorStores: 'Gucci、Prada、Balenciaga', building: '地上1至3層露天街區', parking: '汽車 3,500 席', transport: '高鐵桃園站 / 機捷 A18 站', future: '配合鄰近的國泰置地廣場開發案，形成巨型娛樂城。' }
    },
    {
        id: 'm_n_taimall', category: 'mall', name: '台茂購物中心 TaiMall', typeLabel: '大型購物中心', region: '北部', city: 'taoyuan', chain: null, address: '桃園市蘆竹區南崁路一段112號', shortDesc: '桃園歷史最悠久的大型 Mall，歷經多次華麗轉身。',
        details: { opened: '1999年7月', history: '台灣第一家大型購物中心，歷經數次大改裝，成功轉型為現代化家庭娛樂中心。', status: '南崁地區生活重心，戶外設有大型兒童公園。', anchorStores: '美麗新影城、室內籃球場、戶外公園', building: '地上7層，地下3層', parking: '汽車 2,500 席 / 機車 1,500 席', transport: '鄰近南崁交流道，客運路線多', future: '持續強化親子與運動娛樂設施。' }
    },
    {
        id: 'm_n_dajiang', category: 'mall', name: '大江國際購物中心', typeLabel: '大型購物中心', region: '北部', city: 'taoyuan', chain: null, address: '桃園市中壢區中園路二段501號', shortDesc: '中壢老牌大型購物中心，全客層家庭娛樂據點。',
        details: { opened: '2001年', history: '中壢地區歷史悠久的大型 Mall，長年服務桃園南區家庭客群。', status: '結合影城、量販與餐飲，假日人潮穩定。', anchorStores: '影城、量販超市、各式餐飲', building: '多層複合商場', parking: '大型停車場', transport: '鄰近中壢交流道，公車路線多', future: '持續更新品牌與娛樂設施。' }
    },
    {
        id: 'm_n_global_a8', category: 'mall', name: '環球購物中心 桃園A8店', typeLabel: '車站商場', region: '北部', city: 'taoyuan', chain: '環球購物中心', address: '桃園市龜山區復興一路8號', shortDesc: '機捷A8長庚醫院站共構，服務林口長庚生活圈。',
        details: { opened: '2017年', history: '結合機場捷運A8站與長庚醫療園區人潮的共構商場。', status: '醫護、學生與在地居民的日常購物餐飲據點。', anchorStores: '各式餐飲、生活與服飾品牌', building: '機捷共構商場', parking: '地下停車場', transport: '機捷長庚醫院站 (A8) 直達', future: '深耕長庚生活圈。' }
    },
    {
        id: 'm_n_zhidi_taoyuan', category: 'mall', name: '置地廣場 桃園', typeLabel: '都會型百貨', region: '北部', city: 'taoyuan', chain: '置地廣場', address: '桃園市桃園區中正路20號', shortDesc: '桃園車站前的都會型流行百貨。',
        details: { opened: '2018年', history: '位於桃園火車站前商圈，定位年輕流行與餐飲。', status: '桃園市區年輕客群的逛街與聚餐去處。', anchorStores: '國賓影城、各式餐飲與流行品牌', building: '都會型百貨大樓', parking: '地下停車場', transport: '台鐵桃園站步行可達', future: '強化車站前商圈活力。' }
    },
    {
        id: 'm_n_bigcity', category: 'mall', name: 'Big City 遠東巨城購物中心', typeLabel: '大型購物中心', region: '北部', city: 'hsinchu_city', chain: '遠東SOGO', address: '新竹市東區中央路229號', shortDesc: '桃竹苗地區休閒娛樂霸主，全台營業額前三名。',
        details: { opened: '2012年4月', history: '原為風城購物中心，遠東接手後奇蹟重生，成為台灣購物中心營運典範。', status: '新竹人假日必訪，人潮與車潮驚人。', anchorStores: 'SOGO百貨、威秀影城、大魯閣', building: 'Mall與SOGO雙主體，地上8層', parking: '汽車 3,000 席 / 機車 3,000 席', transport: '台鐵新竹站轉乘接駁車', future: '維持絕對的市佔率優勢與品牌更新。' }
    },
    {
        id: 'm_n_dalu_nanya', category: 'mall', name: '大魯閣湳雅廣場', typeLabel: '中型購物中心', region: '北部', city: 'hsinchu_city', chain: null, address: '新竹市北區湳雅街91號', shortDesc: '新竹在地家庭型購物與運動娛樂商場。',
        details: { opened: '2016年', history: '大魯閣集團於新竹經營的複合商場，結合量販與運動娛樂。', status: '在地家庭與親子客群的休閒去處。', anchorStores: '大魯閣棒壘球打擊場、量販與餐飲', building: '複合型商場', parking: '商場附設停車場', transport: '新竹市區公車或開車', future: '深耕在地運動娛樂需求。' }
    },
    {
        id: 'm_n_fec_zhubei', category: 'mall', name: '遠百竹北', typeLabel: '大型百貨公司', region: '北部', city: 'hsinchu_county', chain: '遠東百貨', address: '新竹縣竹北市莊敬北路18號', shortDesc: '以客家圓樓為建築意象，竹北首座大型百貨。',
        details: { opened: '2022年1月', history: '新竹縣政府BOT案，解決竹北科技新貴缺乏就近高階消費場所的問題。', status: '頂樓設有客家古厝造景與空中花園，餐飲業績極佳。', anchorStores: '各式知名餐飲、精品、CitySuper', building: '地上8層，地下4層', parking: '汽車 1,485 席 / 機車 980 席', transport: '鄰近竹北交流道，距高鐵新竹站車程約10分', future: '強化竹北生活圈的高端消費與娛樂機能。' }
    },

    // ==========================================
    // 中部 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_c_skm_tc', category: 'mall', name: '新光三越 台中中港店', typeLabel: '大型百貨公司', region: '中部', city: 'taichung', chain: '新光三越', address: '台中市西屯區台灣大道三段301號', shortDesc: '全台單店營業額最高的「百貨店王」。',
        details: { opened: '2000年10月', history: '帶動台中七期商圈發展的火車頭，常年霸佔全台百貨業績第一名。', status: '中部高端消費絕對指標，精品與化妝品業績驚人。', anchorStores: '新光影城、各大國際頂級精品旗艦店', building: '地上14層，地下6層', parking: '汽車 1,200 席 / 機車 1,500 席', transport: '台灣大道幹線公車「新光/遠百」站', future: '持續挑戰業績新高，引進全台獨家品牌。' }
    },
    {
        id: 'm_c_fec_tc', category: 'mall', name: 'Top City 台中大遠百', typeLabel: '大型百貨公司', region: '中部', city: 'taichung', chain: '遠東百貨', address: '台中市西屯區台灣大道三段251號', shortDesc: '緊鄰新光三越，全台業績第二的百貨巨頭。',
        details: { opened: '2011年12月', history: '與新光三越比鄰而居，形成全台最強的「百貨雙子星」商圈。', status: '業績僅次於隔壁的新光三越，館內威尼斯與大遠百特色美食街極受歡迎。', anchorStores: '威秀影城、鼎泰豐、海底撈、國際精品', building: '地上14層，地下2層', parking: '汽車 1,200 席，並與市政停車場連通', transport: '台灣大道幹線公車「新光/遠百」站', future: '與新光三越共同擴大七期商圈的磁吸效應。' }
    },
    {
        id: 'm_c_lalaport_tc', category: 'mall', name: 'Mitsui Shopping Park LaLaport 台中', typeLabel: '大型購物中心', region: '中部', city: 'taichung', chain: '三井 LaLaport', address: '台中市東區進德路600號', shortDesc: '日系全客層購物中心，翻轉台中東區的新地標。',
        details: { opened: '2023年', history: '台糖舊廠區開發案，三井集團為台中引進首座 LaLaport。', status: '以豐富的日系超市、母嬰用品與平價服飾吸引大量家庭客。', anchorStores: 'LOPIA超市、GU、UNIQLO、橡子共和國', building: '南館4層、北館7層，空橋相連', parking: '汽車 1,900 席 / 機車 3,500 席', transport: '台鐵台中站（東站）步行6分鐘', future: '結合帝國糖廠周邊成為東區休憩聚落。' }
    },
    {
        id: 'm_c_parklane', category: 'mall', name: '勤美 誠品綠園道', typeLabel: '文創購物中心', region: '中部', city: 'taichung', chain: '誠品生活', address: '台中市西區公益路68號', shortDesc: '擁有全亞洲最大植生牆，結合草悟道的文青聖地。',
        details: { opened: '2008年5月', history: '原為半廢棄的商業大樓，由勤美集團與誠品改造，植入大量綠意，成為都市再生典範。', status: '台中最具藝文氣息的商場，結合周邊草悟道與市民廣場。', anchorStores: '誠品書店、UNIQLO、各式文創品牌', building: '地上15層(商場至3F)，室內外巨大植生牆', parking: '汽車 400 席', transport: '市區公車至「草悟道(市民廣場)」站', future: '持續推動勤美璞真聚落計畫（如勤美之森）。' }
    },
    {
        id: 'm_c_sogo_tc', category: 'mall', name: '廣三 SOGO 百貨', typeLabel: '大型百貨公司', region: '中部', city: 'taichung', chain: '遠東SOGO', address: '台中市西區台灣大道二段459號', shortDesc: '台中歷史悠久的日系百貨，擁有獨特水舞廣場。',
        details: { opened: '1995年11月', history: '曾是台中最風光的百貨之一，見證了台灣大道（原中港路）商圈的崛起。', status: '近年持續轉型，引進影城與室內主題樂園，鞏固在地客源。', anchorStores: '王牌映画影城、藏壽司、各大型主題餐廳', building: '地上18層，地下4層', parking: '汽車 800 席', transport: '台灣大道幹線公車「科博館」站', future: '強化娛樂與體驗型業態。' }
    },
    {
        id: 'm_c_tigercity', category: 'mall', name: '老虎城購物中心 Tiger City', typeLabel: '中型購物中心', region: '中部', city: 'taichung', chain: null, address: '台中市西屯區市政路389號', shortDesc: '台中七期商圈內的潮流娛樂商場，MUVIE 進駐。',
        details: { opened: '2003年', history: '台中七期重劃區早期的指標商場，以年輕潮流與娛樂為定位。', status: '近年引進 MUVIE CINEMAS，鞏固年輕觀影與聚餐客群。', anchorStores: 'MUVIE CINEMAS、各式餐飲與流行品牌', building: '多層複合商場', parking: '商場附設停車場', transport: '台中市區公車「市政府」站', future: '持續更新娛樂與餐飲業態。' }
    },
    {
        id: 'm_c_showtime_wenxin', category: 'mall', name: '秀泰生活 台中文心店', typeLabel: '生活購物中心', region: '中部', city: 'taichung', chain: '秀泰生活', address: '台中市南屯區文心南路289號', shortDesc: '結合影城、書房與森林系裝潢的台中生活商場。',
        details: { opened: '2018年', history: '秀泰集團在台中文心商圈打造的生活購物中心，以綠意與書香為特色。', status: '在地家庭與年輕客群的觀影與聚餐去處。', anchorStores: '秀泰影城、小書房、各式餐飲', building: '複合型生活商場', parking: '汽車/機車停車場', transport: '台中市區公車或開車', future: '深耕文心商圈娛樂需求。' }
    },
    {
        id: 'm_c_showtime_station', category: 'mall', name: '秀泰生活 台中站前店', typeLabel: '生活購物中心', region: '中部', city: 'taichung', chain: '秀泰生活', address: '台中市東區南京路66號', shortDesc: '台中車站旁的大型生活商場，振興舊城娛樂。',
        details: { opened: '2016年', history: '秀泰於台中火車站前舊城區的據點，帶動車站周邊再發展。', status: '通勤族與在地客的影城與餐飲首選。', anchorStores: '秀泰影城、小書房、各式餐飲', building: '複合型生活商場', parking: '商場附設停車場', transport: '台鐵台中站步行可達', future: '持續振興舊城商圈。' }
    },
    {
        id: 'm_c_jmall', category: 'mall', name: 'JMall 商場', typeLabel: '中型購物中心', region: '中部', city: 'taichung', chain: null, address: '台中市西屯區市政北二路18號', shortDesc: '七期商圈內結合餐飲與娛樂的中型商場。',
        details: { opened: '資料整理中', history: '位於台中七期市政商圈的複合商場，主打餐飲與生活娛樂。', status: '在地上班族與家庭客的聚餐去處。', anchorStores: '各式餐飲與生活品牌', building: '中型複合商場', parking: '商場附設停車場', transport: '台中市區公車「市政府」站', future: '深耕七期商圈消費需求。' }
    },
    {
        id: 'm_c_mitsui_tc', category: 'mall', name: 'MITSUI OUTLET PARK 台中港', typeLabel: '暢貨中心 (Outlet)', region: '中部', city: 'taichung', chain: 'MITSUI OUTLET PARK', address: '台中市梧棲區臺灣大道十段168號', shortDesc: '台灣首座海港型 Outlet，擁有浪漫海景摩天輪。',
        details: { opened: '2018年12月', history: '成功開發台中港特定區，將人潮引入海線地區。', status: '結合海景與購物，假日觀光人潮眾多。二期已擴建完成。', anchorStores: '台中之星摩天輪、SNOW PEAK、誠品生活', building: '開放式單/雙層街區', parking: '汽車 3,400 席', transport: '鄰近西濱快速道路；公車路線', future: '帶動海線整體觀光與房地產發展。' }
    },
    {
        id: 'm_c_lihpao', category: 'mall', name: '麗寶 OUTLET MALL', typeLabel: '暢貨中心 (Outlet)', region: '中部', city: 'taichung', chain: null, address: '台中市后里區福容路201號', shortDesc: '結合遊樂園、飯店與賽車場的義大利風格渡假園區。',
        details: { opened: '2016年12月(一期), 2019年(二期)', history: '麗寶樂園渡假區的擴建計畫，二期以義大利科莫湖為原型打造。', status: '全台最大的休閒渡假園區一部分，擁有星巴克鐘樓地標。', anchorStores: '秀泰影城、天空之夢摩天輪、湯姆熊', building: '歐風建築群，分為一、二期', parking: '渡假區共用巨大停車場', transport: '國道一號后里交流道旁', future: '擴建成為全方位綜合娛樂城。' }
    },
    {
        id: 'm_c_shangshun', category: 'mall', name: '尚順購物中心', typeLabel: '大型購物中心', region: '中部', city: 'miaoli', chain: null, address: '苗栗縣頭份市中央路105號', shortDesc: '苗栗唯一大型購物中心，結合主題育樂世界。',
        details: { opened: '2015年', history: '頭份地區的大型複合開發，結合飯店、購物與室內主題樂園。', status: '苗栗與竹南頭份地區的家庭娛樂重心。', anchorStores: '尚順威秀影城、尚順育樂世界、各式餐飲', building: '大型複合商場與飯店', parking: '大型停車場', transport: '台鐵竹南站轉乘或開車', future: '深耕苗栗家庭娛樂市場。' }
    },

    // ==========================================
    // 南部 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_s_nice_chiayi', category: 'mall', name: '耐斯廣場 購物中心', typeLabel: '大型購物中心', region: '中部', city: 'chiayi_city', chain: null, address: '嘉義市東區忠孝路600號', shortDesc: '嘉義最大型購物中心，結合飯店與威秀影城。',
        details: { opened: '2002年', history: '嘉義地區指標性的大型複合商場，結合耐斯王子大飯店。', status: '嘉義市與雲嘉地區的家庭娛樂與購物重心。', anchorStores: '威秀影城、各式餐飲與生活品牌', building: '大型複合商場與飯店', parking: '大型停車場', transport: '台鐵嘉義站轉乘或開車', future: '持續鞏固雲嘉地區購物龍頭地位。' }
    },
    {
        id: 'm_s_showtime_chiayi', category: 'mall', name: '秀泰生活 嘉義店', typeLabel: '生活購物中心', region: '中部', city: 'chiayi_city', chain: '秀泰生活', address: '嘉義市西區', shortDesc: '嘉義在地生活商場，結合影城與書房。',
        details: { opened: '資料整理中', history: '秀泰集團於嘉義打造的生活購物中心，引進影城與文化空間。', status: '嘉義市區家庭客的觀影與聚餐去處。', anchorStores: '秀泰影城、小書房、各式餐飲', building: '複合型生活商場', parking: '商場附設停車場', transport: '嘉義市區公車或開車', future: '深耕嘉義娛樂需求。' }
    },
    {
        id: 'm_s_skm_tn_nt', category: 'mall', name: '新光三越 台南新天地', typeLabel: '大型百貨公司', region: '南部', city: 'tainan', chain: '新光三越', address: '台南市中西區西門路一段658號', shortDesc: '南台灣最具規模的百貨航母，台南精品的絕對核心。',
        details: { opened: '2002年11月', history: '原址為台南監獄，開發為百貨後迅速成為台南業績霸主。', status: '新光三越全台業績前三名的店中店，擁有本館與二館(小西門)。', anchorStores: '新光影城、國際頂級精品、大面積特色美食街', building: '地上9層，地下3層（包含本館與小西門）', parking: '汽車 1,500 席 / 機車 2,000 席', transport: '市區公車至「新光三越新天地」站', future: '持續引進話題品牌，維持台南市佔率第一。' }
    },
    {
        id: 'm_s_tsmall', category: 'mall', name: '南紡購物中心 T.S. Mall', typeLabel: '大型購物中心', region: '南部', city: 'tainan', chain: null, address: '台南市東區中華東路一段366號', shortDesc: '台南東區最大的複合式購物、娛樂與餐飲中心。',
        details: { opened: '2015年(A1館), 2020年(A2館)', history: '台南紡織舊廠區開發，結合老爺行旅，為台南帶來全新Mall型態。', status: '餐飲與娛樂比例高，深受台南年輕人與家庭喜愛。', anchorStores: '威秀影城、ZARA、H&M、各式大型主題餐廳', building: 'A1館與A2館，空橋相連', parking: '汽車 2,000 席 / 機車 3,000 席', transport: '市區公車；未來有捷運平實轉運站', future: '配合平實營區開發，成為台南新興副都心核心。' }
    },
    {
        id: 'm_s_focus_tn', category: 'mall', name: 'FOCUS 時尚流行館', typeLabel: '都會型百貨', region: '南部', city: 'tainan', chain: null, address: '台南市中西區中山路166號', shortDesc: '台南車站前商圈的年輕流行百貨，威秀影城進駐。',
        details: { opened: '資料整理中', history: '位於台南火車站前的流行百貨，定位年輕時尚與餐飲娛樂。', status: '台南市區學生與年輕客群的逛街聚會去處。', anchorStores: '台南FOCUS威秀影城、各式流行品牌與餐飲', building: '都會型百貨大樓', parking: '地下停車場', transport: '台鐵台南站步行可達', future: '深耕車站前商圈活力。' }
    },
    {
        id: 'm_s_mitsui_tn', category: 'mall', name: 'MITSUI OUTLET PARK 台南', typeLabel: '暢貨中心 (Outlet)', region: '南部', city: 'tainan', chain: 'MITSUI OUTLET PARK', address: '台南市歸仁區歸仁大道101號', shortDesc: '融入台南古都紅磚元素的南台灣大型日系 Outlet。',
        details: { opened: '2022年2月', history: '位於高鐵台南站旁，帶動沙崙綠能科學城周邊的商業發展。', status: '吸引大量雲嘉南地區客群，餐飲區時常爆滿。', anchorStores: '各式國際品牌 Outlet、台南在地特色美食', building: '室內型商場，地上3層', parking: '汽車 1,700 席', transport: '高鐵台南站 / 台鐵沙崙站 步行3分鐘', future: '二期工程已啟動，將進一步擴大營業面積。' }
    },
    {
        id: 'm_s_hanshin_arena', category: 'mall', name: '漢神巨蛋購物廣場', typeLabel: '大型百貨公司', region: '南部', city: 'kaohsiung', chain: '漢神', address: '高雄市左營區博愛二路777號', shortDesc: '南台灣流行指標，營業額稱霸高雄的旗艦百貨。',
        details: { opened: '2008年7月', history: '配合高雄巨蛋BOT案興建，帶動北高雄商圈崛起，取代南高雄的三多商圈。', status: '高雄業績第一，擁有南部最齊全的國際精品與化妝品陣容。', anchorStores: '漢來海港餐廳、鼎泰豐、各式一線精品', building: '地上9層，地下1層（商場）', parking: '汽車 1,400 席 / 機車 4,000 席', transport: '捷運紅線「巨蛋站」5號出口', future: '持續進行大規模改裝，穩固南部霸主地位。' }
    },
    {
        id: 'm_s_hanshin_main', category: 'mall', name: '漢神百貨 本館', typeLabel: '大型百貨公司', region: '南部', city: 'kaohsiung', chain: '漢神', address: '高雄市前金區成功一路266-1號', shortDesc: '高雄成功路上的老牌精品百貨，南高雄消費指標。',
        details: { opened: '1995年', history: '漢神集團起家的旗艦百貨，長年為南高雄精品消費代表。', status: '與巨蛋館形成雙核心，鞏固漢神在高雄的市佔。', anchorStores: '各國際精品、化妝品與餐飲', building: '地上12層，地下4層', parking: '地下停車場', transport: '捷運市議會站轉乘或開車', future: '持續更新品牌陣容。' }
    },
    {
        id: 'm_s_dreammall', category: 'mall', name: '夢時代購物中心 Dream Mall', typeLabel: '超大型購物中心', region: '南部', city: 'kaohsiung', chain: null, address: '高雄市前鎮區中華五路789號', shortDesc: '全台樓地板面積最大的購物中心，擁有頂樓摩天輪。',
        details: { opened: '2007年3月', history: '統一企業集團投資開發，為亞洲最大的商場之一，帶動亞洲新灣區發展。', status: '高雄家庭客與觀光客必訪，空間極大，常舉辦大型展覽。', anchorStores: '高雄之眼摩天輪、秀泰影城、統一時代百貨', building: '魚形建築，地上9層，地下2層', parking: '汽車 3,500 席 / 機車 2,500 席', transport: '輕軌「夢時代站」 / 捷運「凱旋站」轉乘', future: '配合周邊多功能經貿園區開發，發展腹地極大。' }
    },
    {
        id: 'm_s_skmpark', category: 'mall', name: 'SKM Park Outlets 高雄草衙', typeLabel: '暢貨中心 (Outlet)', region: '南部', city: 'kaohsiung', chain: 'SKM Park', address: '高雄市前鎮區中安路1-1號', shortDesc: '新光三越集團首間 Outlet，結合鈴鹿賽道樂園。',
        details: { opened: '2022年1月 (原大魯閣草衙道於2016開幕)', history: '原為大魯閣草衙道，新光三越接手後轉型為國際級 Outlet。', status: '結合大型戶外遊樂設施與折扣購物，適合全家大小一票到底。', anchorStores: '鈴鹿賽道樂園、國賓影城、各國際品牌Outlet', building: '歐式半露天街區與室內商場', parking: '汽車 1,000 席 / 機車 1,200 席', transport: '捷運紅線「草衙站」2號出口直達', future: '強化 Outlet 品牌陣容與娛樂體驗。' }
    },
    {
        id: 'm_s_fec_ks', category: 'mall', name: '高雄大遠百', typeLabel: '大型百貨公司', region: '南部', city: 'kaohsiung', chain: '遠東百貨', address: '高雄市苓雅區三多四路21號', shortDesc: '三多商圈地標，擁有絕佳景觀的誠品書店與影城。',
        details: { opened: '2001年10月', history: '高雄最高樓層的百貨公司，當年頂樓的誠品與威秀影城設計極具未來感。', status: '三多商圈現存的主力百貨，捷運共構優勢明顯。', anchorStores: '威秀影城、誠品生活、無印良品', building: '地上17層（商場），大樓總高43層', parking: '汽車 900 席', transport: '捷運紅線「三多商圈站」1號出口直達', future: '面對北高雄競爭，持續強化餐飲與娛樂比例。' }
    },
    {
        id: 'm_s_yidaworld', category: 'mall', name: '義大世界購物廣場', typeLabel: '暢貨中心 (Outlet)', region: '南部', city: 'kaohsiung', chain: null, address: '高雄市大樹區學城路一段12號', shortDesc: '結合遊樂園與飯店的南台灣大型希臘風 Outlet。',
        details: { opened: '2010年', history: '義大集團打造的綜合渡假園區，結合主題樂園、Outlet 與飯店。', status: '高雄北區與屏東客群的渡假娛樂重心。', anchorStores: '義大遊樂世界、國賓影城、各品牌 Outlet', building: '希臘風大型商場街區', parking: '大型停車場', transport: '義大客運接駁或開車', future: '持續強化渡假娛樂綜效。' }
    },
    {
        id: 'm_s_yixiang', category: 'mall', name: '義享時尚廣場', typeLabel: '大型購物中心', region: '南部', city: 'kaohsiung', chain: null, address: '高雄市左營區民族一路567號', shortDesc: '北高雄新興大型購物中心，引進國際品牌與超市。',
        details: { opened: '2021年', history: '義享天地開發案的商場部分，為北高雄增添高端購物選擇。', status: '結合誠品、超市與餐飲，假日人潮成長中。', anchorStores: '誠品生活、各國際品牌與餐飲', building: '大型複合商場', parking: '地下停車場', transport: '捷運生態園區站轉乘或開車', future: '深耕北高雄高端消費市場。' }
    },
    {
        id: 'm_s_global_zuoying', category: 'mall', name: '環球購物中心 新左營車站店', typeLabel: '車站商場', region: '南部', city: 'kaohsiung', chain: '環球購物中心', address: '高雄市左營區站前北路', shortDesc: '高鐵左營站共構商場，南台灣門戶的購物餐飲據點。',
        details: { opened: '2011年', history: '結合高鐵、台鐵與捷運左營站的共構商場。', status: '旅客與在地客群的便利購物與餐飲首選。', anchorStores: '各式餐飲、生活與服飾品牌', building: '車站共構商場', parking: '車站停車場', transport: '高鐵/台鐵/捷運左營站直達', future: '深耕車站商圈人流。' }
    },
    {
        id: 'm_s_global_pingtung', category: 'mall', name: '環球購物中心 屏東市店', typeLabel: '中型購物中心', region: '南部', city: 'pingtung', chain: '環球購物中心', address: '屏東縣屏東市仁愛路', shortDesc: '屏東市區少數的大型連鎖購物中心。',
        details: { opened: '資料整理中', history: '環球購物中心進駐屏東市，補足在地大型商場與影城需求。', status: '屏東市區家庭客的購物、餐飲與觀影去處。', anchorStores: '國賓影城、各式餐飲與生活品牌', building: '複合型商場', parking: '商場附設停車場', transport: '屏東市區公車或開車', future: '深耕屏東在地消費市場。' }
    },

    // ==========================================
    // 東部 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_e_lunac', category: 'mall', name: '蘭城新月廣場 Luna Plaza', typeLabel: '大型購物中心', region: '東部', city: 'yilan', chain: null, address: '宜蘭縣宜蘭市民權路二段38巷6號', shortDesc: '東部最大的購物中心，結合知名烤鴨與五星級酒店。',
        details: { opened: '2008年11月', history: '宜蘭市區最大型的商業開發案，結合蘭城晶英酒店，極大提升了宜蘭的消費水平。', status: '宜蘭人生活與娛樂重心，酒店的櫻桃鴨享譽全台。', anchorStores: '新月豪華影城、家樂福、蘭城晶英酒店', building: '地上4層，地下1層（商場部分）', parking: '汽車 1,000 席 / 機車 1,000 席', transport: '宜蘭火車站步行約10分鐘', future: '維持東台灣首屈一指的複合式商場地位。' }
    },
    {
        id: 'm_e_fec_hl', category: 'mall', name: '花蓮遠百', typeLabel: '連鎖百貨', region: '東部', city: 'hualien', chain: '遠東百貨', address: '花蓮縣花蓮市和平路581號', shortDesc: '花蓮唯一的大型傳統百貨公司，深耕在地多年。',
        details: { opened: '2009年移至現址開幕', history: '原位於花蓮市區舊址，後遷移至現址擴大營業，是花蓮人買精品的唯一去處。', status: '雖然面臨秀泰影城等競爭，但仍是花蓮購物的重要指標。', anchorStores: '愛買、MUJI、各式專櫃品牌', building: '地上3層，地下1層', parking: '汽車 400 席', transport: '市區公車或自行開車', future: '持續引進符合在地需求的餐飲與生活品牌。' }
    },
    {
        id: 'm_e_paradiseark', category: 'mall', name: '花蓮新天堂樂園', typeLabel: '暢貨中心 (Outlet)', region: '東部', city: 'hualien', chain: null, address: '花蓮縣吉安鄉中央路三段', shortDesc: '東台灣首座 Outlet，結合 IMAX 威秀影城。',
        details: { opened: '2018年', history: '潤泰集團於花蓮打造的大型 Outlet 與娛樂園區，引進東部首座 IMAX 影城。', status: '花蓮觀光客與在地客的購物娛樂新地標。', anchorStores: '花蓮新天堂威秀影城（IMAX）、各品牌 Outlet', building: '大型 Outlet 園區', parking: '大型停車場', transport: '花蓮火車站轉乘或開車', future: '帶動花蓮觀光購物發展。' }
    },
    {
        id: 'm_e_showtime_taitung', category: 'mall', name: '秀泰生活 台東店', typeLabel: '生活購物中心', region: '東部', city: 'taitung', chain: '秀泰生活', address: '台東縣台東市新生路', shortDesc: '台東首座大型生活購物中心，結合影城與書房。',
        details: { opened: '2021年', history: '秀泰集團進軍台東，為東南部帶來現代化的影城與購物體驗。', status: '台東市區家庭客的觀影、購物與聚餐首選。', anchorStores: '秀泰影城、小書房、各式餐飲', building: '複合型生活商場', parking: '商場附設停車場', transport: '台東市區公車或開車', future: '深耕台東在地娛樂需求。' }
    },

    // ==========================================
    // 離島 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_o_pier3', category: 'mall', name: '澎湖 Pier3 三號港', typeLabel: '免稅購物中心', region: '離島', city: 'penghu', chain: '昇恆昌', address: '澎湖縣馬公市同和路158號', shortDesc: '澎湖最大型免稅商場，結合影城與極限運動場。',
        details: { opened: '2018年', history: '昇恆昌集團投資打造，為澎湖帶來國際級的免稅購物體驗與現代化影城。', status: '觀光客必訪的免稅購物天堂，同時也是在地人看電影的首選。', anchorStores: 'in89豪華影城、昇恆昌免稅店、GoStar極限運動場', building: '地上4層', parking: '附屬室內停車場', transport: '位於馬公市區南海碼頭旁', future: '結合澎湖觀光季推動各式行銷活動。' }
    },
    {
        id: 'm_o_windlion', category: 'mall', name: '金門 風獅爺購物中心', typeLabel: '免稅購物中心', region: '離島', city: 'kinmen', chain: null, address: '金門縣金湖鎮中山路8-8號', shortDesc: '金門首座大型免稅購物商城與影城。',
        details: { opened: '2014年', history: '台開集團開發，緊鄰金門機場，主要鎖定小三通與觀光客群。', status: '擁有金門唯一的現代化多廳影城（金獅影城）。', anchorStores: '金獅影城、免稅精品、Studio A', building: '分為北棟、南棟等長條形建築', parking: '戶外大型停車場', transport: '緊鄰金門尚義機場', future: '依賴兩岸小三通政策與在地觀光發展。' }
    },
    {
        id: 'm_o_shenghenchang_kinmen', category: 'mall', name: '昇恆昌 金湖廣場', typeLabel: '免稅購物中心', region: '離島', city: 'kinmen', chain: '昇恆昌', address: '金門縣金湖鎮', shortDesc: '金門大型免稅購物廣場，結合飯店與觀光。',
        details: { opened: '資料整理中', history: '昇恆昌集團於金門打造的免稅購物與觀光綜合設施。', status: '金門觀光客的免稅購物據點。', anchorStores: '昇恆昌免稅店、各式精品與伴手禮', building: '大型免稅商場', parking: '戶外停車場', transport: '金門在地交通或租車', future: '深耕金門觀光免稅市場。' }
    },

    // ==========================================
    // 北部 - 電影院 / 影城
    // ==========================================
    {
        id: 'c_n_showtime_keelung', category: 'cinema', name: '基隆秀泰影城', typeLabel: '大型連鎖影城', region: '北部', city: 'keelung', chain: '秀泰影城', address: '基隆市仁愛區愛三路', shortDesc: '基隆市區的現代化多廳影城，在地觀影首選。',
        details: { opened: '資料整理中', history: '秀泰集團於基隆設立的影城，提升在地觀影品質。', status: '基隆市民看首輪大片的主要據點。', anchorStores: '多廳數位影廳', building: '位於基隆市區商場內', parking: '周邊停車場', transport: '基隆火車站步行可達', future: '深耕基隆在地娛樂。' }
    },
    {
        id: 'c_n_vieshow_muvie', category: 'cinema', name: 'MUVIE CINEMAS (遠百信義A13)', typeLabel: '頂級影城', region: '北部', city: 'taipei', chain: '威秀影城', address: '台北市信義區松仁路58號10樓', shortDesc: '威秀影城最高端品牌，全廳獲 THX 認證。', video: 'dyKq86gCuos',
        details: { opened: '2019年12月', history: '針對高端客群打造的全新品牌，擁有 TITAN 巨幕影廳。', status: '台北電影首映會與高級觀影體驗的首選。', anchorStores: 'TITAN 巨幕廳、MUCROWN 頂級餐飲影廳', building: '位於遠百信義A13內，共8個影廳', parking: '與遠百A13共用', transport: '捷運市政府站或象山站', future: '維持全台最高端影城定位。' }
    },
    {
        id: 'c_n_vieshow_xinyi', category: 'cinema', name: '信義威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taipei', chain: '威秀影城', address: '台北市信義區松壽路20號', shortDesc: '台灣影城文化的發源地，信義商圈夜生活核心。',
        details: { opened: '1998年（原華納威秀）', history: '台灣首座現代化多廳式美式影城，徹底改變了台灣人的觀影習慣。', status: '雖然設備非最新，但地理位置絕佳，人潮永遠爆滿。', anchorStores: '4DX影廳、多間獨立街邊店', building: '兩棟獨立建築，共17個影廳', parking: '地下停車場', transport: '捷運台北101/世貿站', future: '租約到期後可能面臨重大改裝或重建。' }
    },
    {
        id: 'c_n_vieshow_jingzhan', category: 'cinema', name: '台北京站威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taipei', chain: '威秀影城', address: '台北市大同區市民大道一段209號', shortDesc: '位於京站時尚廣場內，台北車站旁交通最便利的影城。',
        details: { opened: '2009年', history: '隨京站時尚廣場開幕，服務台北車站龐大轉運人潮。', status: '西區年輕客群與通勤族的觀影首選。', anchorStores: '多廳數位影廳', building: '位於京站時尚廣場內', parking: '京站地下停車場', transport: '台北車站五鐵共構直達', future: '持續維持西區觀影龍頭。' }
    },
    {
        id: 'c_n_vieshow_ximen', category: 'cinema', name: '台北西門威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taipei', chain: '威秀影城', address: '台北市萬華區漢中街', shortDesc: '西門町核心的威秀影城，年輕族群看片聖地。',
        details: { opened: '資料整理中', history: '威秀於西門町商圈設立的影城，鞏固西區年輕觀影市場。', status: '西門町人潮匯聚，假日場場爆滿。', anchorStores: '多廳數位影廳', building: '位於西門町商圈大樓', parking: '周邊立體停車場', transport: '捷運西門站', future: '持續吸引年輕影迷。' }
    },
    {
        id: 'c_n_vieshow_nangang', category: 'cinema', name: '台北南港LaLaport威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taipei', chain: '威秀影城', address: '台北市南港區', shortDesc: '進駐南港 LaLaport 的全新威秀影城。',
        details: { opened: '2024年', history: '隨南港 LaLaport 開幕，為東區門戶帶來新影城選擇。', status: '南港在地家庭與商辦客群的觀影新據點。', anchorStores: '多廳數位影廳', building: '位於南港 LaLaport 內', parking: '商場停車場', transport: '台鐵/高鐵/捷運南港站', future: '深耕南港娛樂商圈。' }
    },
    {
        id: 'c_n_eslite_cinema', category: 'cinema', name: '誠品電影院', typeLabel: '藝術電影院', region: '北部', city: 'taipei', chain: '誠品', address: '台北市信義區菸廠路88號', shortDesc: '位於誠品生活松菸，主打藝術與獨立電影。',
        details: { opened: '2013年', history: '誠品於松山文創園區打造的精緻影院，引進大量藝術與獨立電影。', status: '影迷與文青欣賞非主流佳片的重要場域。', anchorStores: '藝術電影專廳', building: '位於誠品生活松菸內', parking: '松菸地下停車場', transport: '捷運國父紀念館站', future: '持續策劃影展與藝術放映。' }
    },
    {
        id: 'c_n_showtime_dome', category: 'cinema', name: '台北大巨蛋秀泰影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taipei', chain: '秀泰影城', address: '台北市信義區忠孝東路四段515號', shortDesc: '進駐台北大巨蛋的大型影城，結合運動娛樂商圈。',
        details: { opened: '2024年', history: '隨台北大巨蛋（遠東 Garden City）啟用而開幕的大型影城。', status: '結合大巨蛋賽事與商場人潮的新興觀影據點。', anchorStores: '多廳數位影廳、特色大廳', building: '位於大巨蛋商場內', parking: '大巨蛋停車場', transport: '捷運國父紀念館站', future: '深耕大巨蛋娛樂園區。' }
    },
    {
        id: 'c_n_skc_lion', category: 'cinema', name: '台北獅子林新光影城', typeLabel: '連鎖影城', region: '北部', city: 'taipei', chain: '新光影城', address: '台北市萬華區西寧南路36號', shortDesc: '西門町獅子林商業大樓內的老牌新光影城。',
        details: { opened: '資料整理中', history: '西門町歷史悠久的影城之一，陪伴無數台北人成長。', status: '西門町在地觀影的經典選擇。', anchorStores: '多廳數位影廳', building: '位於獅子林商業大樓', parking: '周邊立體停車場', transport: '捷運西門站', future: '維持西門町在地觀影服務。' }
    },
    {
        id: 'c_n_skc_tianmu', category: 'cinema', name: '台北天母新光影城', typeLabel: '連鎖影城', region: '北部', city: 'taipei', chain: '新光影城', address: '台北市士林區忠誠路二段', shortDesc: '天母地區的精緻影城，服務在地高消費社區。',
        details: { opened: '資料整理中', history: '新光影城於天母設立的據點，服務士林、北投在地客群。', status: '天母居民就近觀影的舒適選擇。', anchorStores: '多廳數位影廳', building: '位於天母商圈商場內', parking: '商場停車場', transport: '公車至天母商圈', future: '深耕天母社區娛樂。' }
    },
    {
        id: 'c_n_ambassador_xm', category: 'cinema', name: '國賓大戲院 (西門町)', typeLabel: '大型影城', region: '北部', city: 'taipei', chain: '國賓影城', address: '台北市萬華區成都路88號', shortDesc: '台灣電影史上的傳奇，擁有全台頂級巨幕大廳。',
        details: { opened: '1965年', history: '歷經半世紀的經典戲院，多次率先引進全球最新音效技術。', status: '西門町看大片的首選，其「1廳」擁有近千座位與震撼音效。', anchorStores: '巨幕大廳 (Dolby Atmos)', building: '獨立建築，共3個影廳', parking: '周邊峨眉立體停車場', transport: '捷運西門站', future: '持續以頂級大廳音效吸引死忠影迷。' }
    },
    {
        id: 'c_n_ambassador_changchun', category: 'cinema', name: '台北長春國賓影城', typeLabel: '連鎖影城', region: '北部', city: 'taipei', chain: '國賓影城', address: '台北市中山區長春路', shortDesc: '中山區長春商圈的國賓影城，鬧中取靜的觀影空間。',
        details: { opened: '資料整理中', history: '國賓於長春路商圈經營的影城，服務中山區客群。', status: '在地上班族與居民的觀影去處。', anchorStores: '多廳數位影廳', building: '位於長春商圈大樓', parking: '周邊停車場', transport: '捷運松江南京站', future: '深耕中山區娛樂。' }
    },
    {
        id: 'c_n_miramar_cinema', category: 'cinema', name: '美麗華大直影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taipei', chain: null, address: '台北市中山區敬業三路20號', shortDesc: '美麗華百樂園內的大型影城，擁有 IMAX 巨幕。',
        details: { opened: '2004年', history: '隨美麗華百樂園開幕，是大直地區的觀影重心，設有 IMAX 影廳。', status: '家庭與情侶約會看片的熱門地點。', anchorStores: 'IMAX 影廳、多廳數位影廳', building: '位於美麗華百樂園內', parking: '美麗華停車場', transport: '捷運劍南路站', future: '持續更新放映設備。' }
    },
    {
        id: 'c_n_guangdian_taipei', category: 'cinema', name: '光點台北', typeLabel: '藝術電影院', region: '北部', city: 'taipei', chain: null, address: '台北市中山區中山北路二段18號', shortDesc: '由台北之家改建的藝文電影院，播映經典與藝術電影。',
        details: { opened: '2002年', history: '原為美國大使官邸，由侯孝賢主持的台灣電影文化協會經營，成為藝文電影重鎮。', status: '影迷欣賞經典修復與獨立電影的指標場域。', anchorStores: '藝術電影專廳、咖啡館', building: '歷史建築改建', parking: '周邊停車場', transport: '捷運中山站步行5分鐘', future: '持續推廣電影文化與影展。' }
    },
    {
        id: 'c_n_xile_today', category: 'cinema', name: '喜樂時代影城 今日店', typeLabel: '連鎖影城', region: '北部', city: 'taipei', chain: '喜樂時代', address: '台北市萬華區西寧南路', shortDesc: '西門町今日百貨內的喜樂時代影城。',
        details: { opened: '資料整理中', history: '喜樂時代於西門町今日商場經營的影城。', status: '西門町年輕客群的觀影選擇之一。', anchorStores: '多廳數位影廳', building: '位於今日百貨內', parking: '周邊立體停車場', transport: '捷運西門站', future: '深耕西門町娛樂。' }
    },
    {
        id: 'c_n_vieshow_zhonghe', category: 'cinema', name: '中和環球威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'newtaipei', chain: '威秀影城', address: '新北市中和區中山路三段122號', shortDesc: '中和環球購物中心內的威秀影城。',
        details: { opened: '2011年', history: '隨中和環球購物中心開幕，服務雙和地區家庭客群。', status: '中永和居民就近觀影的主要據點。', anchorStores: '多廳數位影廳', building: '位於中和環球購物中心內', parking: '商場停車場', transport: '捷運景安站轉乘或公車', future: '深耕雙和地區娛樂。' }
    },
    {
        id: 'c_n_vieshow_linkou', category: 'cinema', name: '林口MITSUI OUTLET威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'newtaipei', chain: '威秀影城', address: '新北市林口區文化三路一段356號', shortDesc: '三井 Outlet 林口內的威秀影城。',
        details: { opened: '2016年', history: '隨三井 Outlet 林口開幕，服務林口新市鎮客群。', status: '林口家庭客逛街與觀影的一站式去處。', anchorStores: '多廳數位影廳', building: '位於三井 Outlet 林口內', parking: 'Outlet 大型停車場', transport: '機捷林口站 (A9)', future: '配合 Outlet 二期擴大服務。' }
    },
    {
        id: 'c_n_vieshow_yulon', category: 'cinema', name: '新店裕隆城威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'newtaipei', chain: '威秀影城', address: '新北市新店區中興路三段70號', shortDesc: '裕隆城內的威秀影城，新店南區觀影新地標。',
        details: { opened: '2023年', history: '隨裕隆城開幕，為新店地區帶來大型影城。', status: '新店居民就近觀影的首選。', anchorStores: '多廳數位影廳', building: '位於裕隆城內', parking: '裕隆城停車場', transport: '捷運大坪林/七張站', future: '深耕新店南區娛樂。' }
    },
    {
        id: 'c_n_vieshow_banciao', category: 'cinema', name: '板橋大遠百威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'newtaipei', chain: '威秀影城', address: '新北市板橋區新站路28號', shortDesc: '板橋大遠百內的威秀影城，新板特區觀影重心。',
        details: { opened: '2011年', history: '隨板橋大遠百開幕，服務新板特區龐大人流。', status: '新北市核心商圈的主要觀影據點。', anchorStores: '多廳數位影廳', building: '位於板橋大遠百內', parking: '大遠百停車場', transport: '台鐵/高鐵/捷運板橋站', future: '持續鞏固新板觀影市場。' }
    },
    {
        id: 'c_n_showtime_tucheng', category: 'cinema', name: '土城秀泰影城', typeLabel: '大型連鎖影城', region: '北部', city: 'newtaipei', chain: '秀泰影城', address: '新北市土城區金城路', shortDesc: '土城地區的秀泰影城，在地家庭觀影去處。',
        details: { opened: '資料整理中', history: '秀泰集團於土城設立的影城，服務土城、樹林客群。', status: '土城在地家庭看片的便利選擇。', anchorStores: '多廳數位影廳', building: '位於土城商場內', parking: '商場停車場', transport: '捷運海山站或頂埔站', future: '深耕土城在地娛樂。' }
    },
    {
        id: 'c_n_ambassador_linkou', category: 'cinema', name: '林口昕境國賓影城', typeLabel: '連鎖影城', region: '北部', city: 'newtaipei', chain: '國賓影城', address: '新北市林口區文化二路一段', shortDesc: '昕境廣場內的國賓影城，服務林口社區。',
        details: { opened: '2018年', history: '隨昕境廣場開幕的國賓影城，服務林口在地家庭。', status: '林口社區就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於昕境廣場內', parking: '商場停車場', transport: '機捷林口站轉乘', future: '深耕林口社區娛樂。' }
    },
    {
        id: 'c_n_ambassador_tamsui', category: 'cinema', name: '淡水禮萊國賓影城', typeLabel: '連鎖影城', region: '北部', city: 'newtaipei', chain: '國賓影城', address: '新北市淡水區', shortDesc: '淡水禮萊廣場內的國賓影城，服務淡海新市鎮。',
        details: { opened: '資料整理中', history: '國賓於淡水禮萊廣場經營的影城，補足淡水觀影需求。', status: '淡水與北海岸居民的觀影去處。', anchorStores: '多廳數位影廳', building: '位於禮萊廣場內', parking: '商場停車場', transport: '捷運淡水站轉乘或輕軌', future: '深耕淡海新市鎮娛樂。' }
    },
    {
        id: 'c_n_vieshow_tonglin', category: 'cinema', name: '桃園統領威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taoyuan', chain: '威秀影城', address: '桃園市桃園區中正路61號', shortDesc: '桃園市區統領廣場內的威秀影城。',
        details: { opened: '資料整理中', history: '威秀於桃園統領商圈經營的影城，服務桃園市區客群。', status: '桃園市區觀影的主要據點之一。', anchorStores: '多廳數位影廳', building: '位於統領廣場內', parking: '商場停車場', transport: '台鐵桃園站步行可達', future: '深耕桃園市區娛樂。' }
    },
    {
        id: 'c_n_skc_qingpu', category: 'cinema', name: '桃園青埔新光影城', typeLabel: '大型連鎖影城', region: '北部', city: 'taoyuan', chain: '新光影城', address: '桃園市中壢區高鐵站區', shortDesc: '青埔特區的新光影城，鄰近高鐵與華泰名品城。',
        details: { opened: '資料整理中', history: '新光影城進駐桃園青埔，服務快速發展的高鐵特區。', status: '青埔在地與觀光客的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於青埔商場內', parking: '商場停車場', transport: '高鐵桃園站 / 機捷 A18', future: '深耕青埔娛樂商圈。' }
    },
    {
        id: 'c_n_ambassador_bade', category: 'cinema', name: '八德置地國賓影城', typeLabel: '連鎖影城', region: '北部', city: 'taoyuan', chain: '國賓影城', address: '桃園市八德區', shortDesc: '八德置地廣場內的國賓影城。',
        details: { opened: '資料整理中', history: '國賓於八德置地生活廣場經營的影城。', status: '八德與大溪地區的觀影去處。', anchorStores: '多廳數位影廳', building: '位於置地生活廣場內', parking: '商場停車場', transport: '桃園市區公車或開車', future: '深耕八德在地娛樂。' }
    },
    {
        id: 'c_n_meilixin_taimall', category: 'cinema', name: '美麗新台茂影城', typeLabel: '連鎖影城', region: '北部', city: 'taoyuan', chain: '美麗新影城', address: '桃園市蘆竹區南崁路一段112號', shortDesc: '台茂購物中心內的美麗新影城。',
        details: { opened: '資料整理中', history: '美麗新影城進駐台茂購物中心，服務南崁地區客群。', status: '南崁在地家庭的觀影去處。', anchorStores: '多廳數位影廳', building: '位於台茂購物中心內', parking: '台茂停車場', transport: '鄰近南崁交流道', future: '深耕南崁娛樂。' }
    },
    {
        id: 'c_n_vieshow_bigcity', category: 'cinema', name: '新竹巨城威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'hsinchu_city', chain: '威秀影城', address: '新竹市東區中央路229號', shortDesc: '遠東巨城購物中心內的威秀影城，新竹觀影龍頭。',
        details: { opened: '2012年', history: '隨遠東巨城開幕，是新竹最熱門的影城。', status: '新竹人假日觀影的首選，場場熱門。', anchorStores: '多廳數位影廳', building: '位於遠東巨城內', parking: '巨城停車場', transport: '台鐵新竹站轉乘接駁', future: '持續維持新竹觀影龍頭。' }
    },
    {
        id: 'c_n_vieshow_fec_hsinchu', category: 'cinema', name: '新竹大遠百威秀影城', typeLabel: '大型連鎖影城', region: '北部', city: 'hsinchu_city', chain: '威秀影城', address: '新竹市東區西大路323號', shortDesc: '新竹大遠百內的威秀影城。',
        details: { opened: '資料整理中', history: '威秀於新竹大遠百經營的影城。', status: '新竹市區觀影的另一主要據點。', anchorStores: '多廳數位影廳', building: '位於新竹大遠百內', parking: '大遠百停車場', transport: '台鐵新竹站步行可達', future: '深耕新竹市區娛樂。' }
    },
    {
        id: 'c_n_broadway_zhubei', category: 'cinema', name: '百老匯數位影城 (竹北)', typeLabel: '連鎖影城', region: '北部', city: 'hsinchu_county', chain: '百老匯', address: '新竹縣竹北市', shortDesc: '竹北地區的百老匯數位影城。',
        details: { opened: '資料整理中', history: '百老匯影城於竹北經營的據點，服務竹北科技新貴家庭。', status: '竹北在地居民就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於竹北商場內', parking: '商場停車場', transport: '高鐵新竹站轉乘或開車', future: '深耕竹北在地娛樂。' }
    },

    // ==========================================
    // 中部 - 電影院 / 影城
    // ==========================================
    {
        id: 'c_c_vieshow_shangshun', category: 'cinema', name: '尚順威秀影城', typeLabel: '大型連鎖影城', region: '中部', city: 'miaoli', chain: '威秀影城', address: '苗栗縣頭份市中央路105號', shortDesc: '尚順購物中心內的威秀影城，苗栗觀影首選。',
        details: { opened: '2015年', history: '隨尚順購物中心開幕，是苗栗唯一的大型連鎖影城。', status: '苗栗與竹南頭份地區的觀影重心。', anchorStores: '多廳數位影廳', building: '位於尚順購物中心內', parking: '尚順停車場', transport: '台鐵竹南站轉乘或開車', future: '深耕苗栗觀影市場。' }
    },
    {
        id: 'c_c_skc_tc', category: 'cinema', name: '台中新光影城', typeLabel: '大型連鎖影城', region: '中部', city: 'taichung', chain: '新光影城', address: '台中市西屯區台灣大道三段301號13樓', shortDesc: '獨創動漫廳與高級臥榻影廳，話題性十足。',
        details: { opened: '2000年 (近年大幅改裝)', history: '近年斥資重金改裝，推出 B.O.X. 特色影廳，成功製造話題。', status: '動漫廳與 Dolby Cinema 極具吸引力。', anchorStores: 'Dolby Cinema、ACG 動漫廳、Sealy 席伊麗廳', building: '位於新光三越內', parking: '與新光三越共用', transport: '公車「新光/遠百」站', future: '持續發展特色影廳策略。' }
    },
    {
        id: 'c_c_vieshow_fec', category: 'cinema', name: '台中大遠百威秀影城', typeLabel: '大型連鎖影城', region: '中部', city: 'taichung', chain: '威秀影城', address: '台中市西屯區台灣大道三段251號13樓', shortDesc: '中部唯一擁有 IMAX 影廳的頂級威秀影城。',
        details: { opened: '2011年12月', history: '隨台中大遠百開幕，為中部地區帶來高規格的觀影體驗。', status: '台中票房名列前茅，IMAX 廳極受歡迎。', anchorStores: 'IMAX 影廳', building: '位於大遠百13-14樓', parking: '與大遠百共用', transport: '公車「新光/遠百」站', future: '維持設備更新以應對新競爭者。' }
    },
    {
        id: 'c_c_muvie_tigercity', category: 'cinema', name: 'MUVIE CINEMAS 台中TIGER CITY', typeLabel: '頂級影城', region: '中部', city: 'taichung', chain: '威秀影城', address: '台中市西屯區市政路389號', shortDesc: '威秀頂級品牌 MUVIE 進駐老虎城，中部高端觀影。',
        details: { opened: '2022年', history: '威秀將高端品牌 MUVIE 帶入台中老虎城，提升七期觀影規格。', status: '台中年輕高端客群的精緻觀影選擇。', anchorStores: 'MUVIE 特色影廳、精緻餐飲', building: '位於老虎城購物中心內', parking: '老虎城停車場', transport: '台中市區公車「市政府」站', future: '深耕台中高端觀影市場。' }
    },
    {
        id: 'c_c_showtime_wenxin', category: 'cinema', name: '台中文心秀泰影城', typeLabel: '大型連鎖影城', region: '中部', city: 'taichung', chain: '秀泰影城', address: '台中市南屯區文心南路289號', shortDesc: '秀泰生活台中文心店內的影城。',
        details: { opened: '2018年', history: '隨秀泰生活文心店開幕，服務台中文心商圈。', status: '在地家庭與年輕客群的觀影去處。', anchorStores: '多廳數位影廳', building: '位於秀泰生活文心店內', parking: '商場停車場', transport: '台中市區公車或開車', future: '深耕文心商圈娛樂。' }
    },
    {
        id: 'c_c_showtime_station', category: 'cinema', name: '台中站前秀泰影城', typeLabel: '大型連鎖影城', region: '中部', city: 'taichung', chain: '秀泰影城', address: '台中市東區南京路66號', shortDesc: '秀泰生活台中站前店內的影城，振興舊城觀影。',
        details: { opened: '2016年', history: '隨秀泰生活站前店開幕，帶動台中車站舊城區觀影回流。', status: '通勤族與舊城區居民的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於秀泰生活站前店內', parking: '商場停車場', transport: '台鐵台中站步行可達', future: '持續振興舊城娛樂。' }
    },
    {
        id: 'c_c_vieshow_dalu', category: 'cinema', name: '台中大魯閣新時代威秀影城', typeLabel: '大型連鎖影城', region: '中部', city: 'taichung', chain: '威秀影城', address: '台中市東區復興路四段186號', shortDesc: '大魯閣新時代購物中心內的威秀影城。',
        details: { opened: '2013年', history: '威秀於台中大魯閣新時代經營的影城，服務台中火車站東側商圈。', status: '在地家庭與學生客群的觀影去處。', anchorStores: '多廳數位影廳', building: '位於大魯閣新時代購物中心內', parking: '商場停車場', transport: '台鐵台中站步行可達', future: '深耕舊城東側娛樂。' }
    },
    {
        id: 'c_c_showtime_lihpao', category: 'cinema', name: '台中麗寶秀泰影城', typeLabel: '大型連鎖影城', region: '中部', city: 'taichung', chain: '秀泰影城', address: '台中市后里區福容路201號', shortDesc: '麗寶 Outlet Mall 內的秀泰影城。',
        details: { opened: '2016年', history: '隨麗寶 Outlet 開幕，服務后里渡假園區遊客。', status: '麗寶樂園渡假區內的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於麗寶 Outlet Mall 內', parking: '渡假區停車場', transport: '國道一號后里交流道旁', future: '深耕渡假園區娛樂。' }
    },
    {
        id: 'c_c_wangpai', category: 'cinema', name: '王牌映畫影城', typeLabel: '連鎖影城', region: '中部', city: 'taichung', chain: null, address: '台中市西區台灣大道二段459號', shortDesc: '廣三 SOGO 內的影城，台中科博館商圈觀影選擇。',
        details: { opened: '資料整理中', history: '進駐廣三 SOGO 的影城，服務台灣大道科博館商圈。', status: '在地客群就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於廣三 SOGO 內', parking: 'SOGO 停車場', transport: '公車「科博館」站', future: '深耕科博館商圈娛樂。' }
    },
    {
        id: 'c_c_yuanlin', category: 'cinema', name: '員林影城', typeLabel: '中型影城', region: '中部', city: 'changhua', chain: null, address: '彰化縣員林市', shortDesc: '彰化員林地區的在地影城。',
        details: { opened: '資料整理中', history: '服務彰化員林與周邊地區的在地影城。', status: '員林居民就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於員林市區', parking: '周邊停車場', transport: '台鐵員林站轉乘或開車', future: '深耕彰化在地娛樂。' }
    },
    {
        id: 'c_c_shanming', category: 'cinema', name: '山明影城', typeLabel: '中型影城', region: '中部', city: 'nantou', chain: null, address: '南投縣南投市', shortDesc: '南投地區少數的現代化影城。',
        details: { opened: '資料整理中', history: '服務南投在地居民的影城，補足南投觀影需求。', status: '南投市區居民的觀影去處。', anchorStores: '多廳數位影廳', building: '位於南投市區', parking: '周邊停車場', transport: '南投市區公車或開車', future: '深耕南投在地娛樂。' }
    },
    {
        id: 'c_c_nantou_theater', category: 'cinema', name: '南投戲院', typeLabel: '獨立電影院', region: '中部', city: 'nantou', chain: null, address: '南投縣南投市中山街', shortDesc: '南投老字號獨立戲院，承載在地電影記憶。',
        details: { opened: '早期創立', history: '南投歷史悠久的獨立戲院，見證在地電影文化變遷。', status: '以在地情懷與經典片放映延續經營。', anchorStores: '經典放映廳', building: '歷史戲院建築', parking: '周邊停車場', transport: '南投市區', future: '結合在地文化活動延續經營。' }
    },
    {
        id: 'c_c_showtime_beigang', category: 'cinema', name: '雲林北港秀泰影城', typeLabel: '連鎖影城', region: '中部', city: 'yunlin', chain: '秀泰影城', address: '雲林縣北港鎮', shortDesc: '北港地區的秀泰影城，服務雲林西部。',
        details: { opened: '資料整理中', history: '秀泰集團於雲林北港設立的影城。', status: '雲林西部居民就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於北港商場內', parking: '商場停車場', transport: '雲林在地交通或開車', future: '深耕雲林在地娛樂。' }
    },
    {
        id: 'c_c_global_huwei', category: 'cinema', name: '環球中華影城 (斗六)', typeLabel: '中型影城', region: '中部', city: 'yunlin', chain: null, address: '雲林縣斗六市', shortDesc: '斗六地區的在地影城。',
        details: { opened: '資料整理中', history: '服務雲林斗六與周邊地區的影城。', status: '斗六居民就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於斗六市區', parking: '周邊停車場', transport: '台鐵斗六站轉乘或開車', future: '深耕雲林在地娛樂。' }
    },
    {
        id: 'c_c_showtime_chiayi', category: 'cinema', name: '嘉義秀泰影城', typeLabel: '大型連鎖影城', region: '中部', city: 'chiayi_city', chain: '秀泰影城', address: '嘉義市西區', shortDesc: '秀泰生活嘉義店內的影城。',
        details: { opened: '資料整理中', history: '隨秀泰生活嘉義店開幕，服務嘉義市區客群。', status: '嘉義在地家庭的觀影去處。', anchorStores: '多廳數位影廳', building: '位於秀泰生活嘉義店內', parking: '商場停車場', transport: '嘉義市區公車或開車', future: '深耕嘉義娛樂。' }
    },
    {
        id: 'c_c_carnival_chiayi', category: 'cinema', name: '嘉年華影城', typeLabel: '中型影城', region: '中部', city: 'chiayi_city', chain: null, address: '嘉義市西區友愛路', shortDesc: '嘉義市區老字號影城。',
        details: { opened: '資料整理中', history: '嘉義市區經營多年的在地影城。', status: '嘉義居民觀影的在地選擇。', anchorStores: '多廳數位影廳', building: '位於嘉義市區', parking: '周邊停車場', transport: '台鐵嘉義站轉乘或開車', future: '深耕嘉義在地娛樂。' }
    },
    {
        id: 'c_c_in89_chiayi', category: 'cinema', name: '嘉義影食滙 in89 豪華影城', typeLabel: '連鎖影城', region: '中部', city: 'chiayi_city', chain: 'in89豪華影城', address: '嘉義市', shortDesc: 'in89 於嘉義經營的豪華影城。',
        details: { opened: '資料整理中', history: 'in89 豪華影城進駐嘉義，提供精緻觀影體驗。', status: '嘉義年輕客群的觀影選擇。', anchorStores: '豪華數位影廳', building: '位於嘉義商場內', parking: '商場停車場', transport: '嘉義市區公車或開車', future: '深耕嘉義娛樂。' }
    },

    // ==========================================
    // 南部 - 電影院 / 影城
    // ==========================================
    {
        id: 'c_s_vieshow_fec', category: 'cinema', name: '台南大遠百威秀影城', typeLabel: '大型連鎖影城', region: '南部', city: 'tainan', chain: '威秀影城', address: '台南市中西區公園路', shortDesc: '台南大遠百內的威秀影城。',
        details: { opened: '資料整理中', history: '威秀於台南大遠百經營的影城，服務台南市區。', status: '台南市區觀影的主要據點之一。', anchorStores: '多廳數位影廳', building: '位於台南大遠百內', parking: '大遠百停車場', transport: '台南市區公車或開車', future: '深耕台南市區娛樂。' }
    },
    {
        id: 'c_s_vieshow_focus', category: 'cinema', name: '台南FOCUS威秀影城', typeLabel: '大型連鎖影城', region: '南部', city: 'tainan', chain: '威秀影城', address: '台南市中西區中山路166號', shortDesc: 'FOCUS 時尚流行館內的威秀影城。',
        details: { opened: '資料整理中', history: '威秀於台南 FOCUS 經營的影城，服務車站前商圈。', status: '台南年輕客群的觀影去處。', anchorStores: '多廳數位影廳', building: '位於 FOCUS 時尚流行館內', parking: '商場停車場', transport: '台鐵台南站步行可達', future: '深耕車站前商圈娛樂。' }
    },
    {
        id: 'c_s_vieshow_tsmall', category: 'cinema', name: '台南南紡威秀影城', typeLabel: '大型連鎖影城', region: '南部', city: 'tainan', chain: '威秀影城', address: '台南市東區中華東路一段366號', shortDesc: '南紡購物中心內的威秀影城。',
        details: { opened: '2015年', history: '隨南紡購物中心開幕，服務台南東區家庭客群。', status: '台南東區觀影的主要據點。', anchorStores: '多廳數位影廳', building: '位於南紡購物中心內', parking: '南紡停車場', transport: '台南市區公車或開車', future: '深耕台南東區娛樂。' }
    },
    {
        id: 'c_s_skc_ximen', category: 'cinema', name: '台南西門新光影城', typeLabel: '大型連鎖影城', region: '南部', city: 'tainan', chain: '新光影城', address: '台南市中西區西門路一段658號', shortDesc: '新光三越台南新天地內的新光影城。',
        details: { opened: '資料整理中', history: '新光影城進駐台南新天地，服務台南精品商圈。', status: '台南市區家庭客的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於新光三越台南新天地內', parking: '新光三越停車場', transport: '台南市區公車「新光三越新天地」站', future: '深耕台南市區娛樂。' }
    },
    {
        id: 'c_s_showtime_rende', category: 'cinema', name: '台南仁德秀泰影城', typeLabel: '大型連鎖影城', region: '南部', city: 'tainan', chain: '秀泰影城', address: '台南市仁德區', shortDesc: '台南仁德地區的秀泰影城。',
        details: { opened: '資料整理中', history: '秀泰集團於台南仁德設立的影城，服務台南南區。', status: '仁德與台南南區居民的觀影去處。', anchorStores: '多廳數位影廳', building: '位於仁德商場內', parking: '商場停車場', transport: '台南市區公車或開車', future: '深耕台南南區娛樂。' }
    },
    {
        id: 'c_s_cm', category: 'cinema', name: '台南全美戲院', typeLabel: '獨立/二輪電影院', region: '南部', city: 'tainan', chain: null, address: '台南市中西區永福路二段187號', shortDesc: '國際大導李安的電影啟蒙地，堅持手繪看板。',
        details: { opened: '1950年', history: '台南歷史瑰寶，保留了古早戲院的氛圍與手繪看板技藝。', status: '以二輪片為主，票價親民，吸引觀光客朝聖。', anchorStores: '國寶級顏振發師傅手繪電影看板', building: '歷史連棟建築', parking: '無專屬停車場', transport: '公車至赤崁樓步行', future: '轉型文創與歷史傳承。' }
    },
    {
        id: 'c_s_vieshow_hs', category: 'cinema', name: '高雄威秀影城 (大遠百)', typeLabel: '大型連鎖影城', region: '南部', city: 'kaohsiung', chain: '威秀影城', address: '高雄市苓雅區三多四路21號13樓', shortDesc: '高雄歷史悠久的 IMAX 影城，位於三多商圈。',
        details: { opened: '2001年', history: '高雄早期的旗艦級影城，引進 IMAX 系統。', status: '南高雄重要觀影據點，座位數多。', anchorStores: 'IMAX 影廳、4DX 影廳', building: '位於高雄大遠百頂層', parking: '與大遠百共用', transport: '捷運三多商圈站', future: '面對北高雄競爭，持續推動硬體升級。' }
    },
    {
        id: 'c_s_ambassador_yida', category: 'cinema', name: '高雄義大國賓影城', typeLabel: '大型連鎖影城', region: '南部', city: 'kaohsiung', chain: '國賓影城', address: '高雄市大樹區學城路一段12號', shortDesc: '義大世界購物廣場內的國賓影城。',
        details: { opened: '2010年', history: '隨義大世界開幕，服務高雄北區與屏東渡假遊客。', status: '義大渡假園區內的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於義大世界購物廣場內', parking: '義大停車場', transport: '義大客運接駁或開車', future: '深耕渡假園區娛樂。' }
    },
    {
        id: 'c_s_ambassador_skm', category: 'cinema', name: '高雄SKM Park國賓影城', typeLabel: '大型連鎖影城', region: '南部', city: 'kaohsiung', chain: '國賓影城', address: '高雄市前鎮區中安路1-1號', shortDesc: 'SKM Park Outlets 高雄草衙內的國賓影城。',
        details: { opened: '2016年', history: '隨草衙道（今 SKM Park）開幕，結合賽道樂園與購物娛樂。', status: '南高雄家庭客的一站式娛樂選擇。', anchorStores: '多廳數位影廳', building: '位於 SKM Park 內', parking: 'SKM Park 停車場', transport: '捷運草衙站直達', future: '深耕南高雄娛樂。' }
    },
    {
        id: 'c_s_showtime_dreammall', category: 'cinema', name: '高雄夢時代秀泰影城', typeLabel: '大型連鎖影城', region: '南部', city: 'kaohsiung', chain: '秀泰影城', address: '高雄市前鎮區中華五路789號', shortDesc: '夢時代購物中心內的秀泰影城。',
        details: { opened: '資料整理中', history: '秀泰進駐夢時代，服務亞洲新灣區龐大人潮。', status: '高雄家庭客與觀光客的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於夢時代購物中心內', parking: '夢時代停車場', transport: '輕軌夢時代站 / 捷運凱旋站', future: '深耕亞洲新灣區娛樂。' }
    },
    {
        id: 'c_s_showtime_gangshan', category: 'cinema', name: '高雄岡山秀泰影城', typeLabel: '連鎖影城', region: '南部', city: 'kaohsiung', chain: '秀泰影城', address: '高雄市岡山區', shortDesc: '高雄岡山地區的秀泰影城。',
        details: { opened: '資料整理中', history: '秀泰集團於高雄岡山設立的影城，服務北高雄。', status: '岡山與路竹地區居民的觀影去處。', anchorStores: '多廳數位影廳', building: '位於岡山商場內', parking: '商場停車場', transport: '捷運/台鐵岡山站轉乘', future: '深耕北高雄娛樂。' }
    },
    {
        id: 'c_s_in89_dali', category: 'cinema', name: '高雄大立in89豪華影城', typeLabel: '連鎖影城', region: '南部', city: 'kaohsiung', chain: 'in89豪華影城', address: '高雄市前金區五福三路', shortDesc: '大立百貨內的 in89 豪華影城。',
        details: { opened: '資料整理中', history: 'in89 於高雄大立百貨經營的豪華影城。', status: '南高雄市區的精緻觀影選擇。', anchorStores: '豪華數位影廳', building: '位於大立百貨內', parking: '百貨停車場', transport: '捷運市議會站轉乘', future: '深耕南高雄娛樂。' }
    },
    {
        id: 'c_s_in89_dadong', category: 'cinema', name: '高雄鹽埕in89駁二電影院', typeLabel: '藝術電影院', region: '南部', city: 'kaohsiung', chain: 'in89豪華影城', address: '高雄市鹽埕區大勇路', shortDesc: '駁二藝術特區內的 in89 電影院，主打藝文片。',
        details: { opened: '資料整理中', history: '進駐駁二藝術特區，結合在地藝文氛圍放映多元電影。', status: '影迷欣賞藝術與獨立電影的據點。', anchorStores: '藝文電影廳', building: '位於駁二藝術特區內', parking: '駁二周邊停車場', transport: '輕軌駁二大義站', future: '持續推廣藝文電影。' }
    },
    {
        id: 'c_s_xile_kaohsiung', category: 'cinema', name: '喜樂時代影城 高雄總圖店', typeLabel: '大型連鎖影城', region: '南部', city: 'kaohsiung', chain: '喜樂時代', address: '高雄市前鎮區新光路', shortDesc: '高雄市立圖書館總館旁的喜樂時代影城。',
        details: { opened: '資料整理中', history: '喜樂時代於高雄總圖商圈經營的影城，結合亞洲新灣區發展。', status: '高雄市區年輕客群的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於高雄總圖商圈', parking: '周邊停車場', transport: '捷運三多商圈站或輕軌', future: '深耕亞洲新灣區娛樂。' }
    },
    {
        id: 'c_s_ambassador_pingtung', category: 'cinema', name: '屏東環球國賓影城', typeLabel: '連鎖影城', region: '南部', city: 'pingtung', chain: '國賓影城', address: '屏東縣屏東市仁愛路', shortDesc: '環球購物中心屏東市店內的國賓影城。',
        details: { opened: '資料整理中', history: '國賓進駐屏東環球，是屏東市區重要的觀影據點。', status: '屏東市區家庭客的觀影首選。', anchorStores: '多廳數位影廳', building: '位於環球購物中心屏東市店內', parking: '商場停車場', transport: '屏東市區公車或開車', future: '深耕屏東在地娛樂。' }
    },
    {
        id: 'c_s_pingtung_digital', category: 'cinema', name: '屏東數位影城', typeLabel: '中型影城', region: '南部', city: 'pingtung', chain: null, address: '屏東縣屏東市', shortDesc: '屏東市區的在地數位影城。',
        details: { opened: '資料整理中', history: '服務屏東在地居民的數位影城。', status: '屏東居民就近觀影的選擇。', anchorStores: '多廳數位影廳', building: '位於屏東市區', parking: '周邊停車場', transport: '屏東市區公車或開車', future: '深耕屏東在地娛樂。' }
    },

    // ==========================================
    // 東部 - 電影院 / 影城
    // ==========================================
    {
        id: 'c_e_lunar_yilan', category: 'cinema', name: '新月豪華影城', typeLabel: '大型影城', region: '東部', city: 'yilan', chain: null, address: '宜蘭縣宜蘭市民權路二段38巷6號', shortDesc: '蘭城新月廣場內的影城，宜蘭觀影首選。',
        details: { opened: '2008年', history: '隨蘭城新月廣場開幕，是宜蘭市區最主要的影城。', status: '宜蘭人看首輪大片的首選據點。', anchorStores: '多廳數位影廳', building: '位於蘭城新月廣場內', parking: '蘭城新月停車場', transport: '宜蘭火車站步行約10分鐘', future: '深耕宜蘭在地娛樂。' }
    },
    {
        id: 'c_e_rixin_yilan', category: 'cinema', name: '宜蘭日新戲院', typeLabel: '獨立電影院', region: '東部', city: 'yilan', chain: null, address: '宜蘭縣宜蘭市中山路', shortDesc: '宜蘭老字號獨立戲院，承載在地電影記憶。',
        details: { opened: '早期創立', history: '宜蘭歷史悠久的獨立戲院，見證在地電影文化。', status: '以在地情懷延續經營的經典戲院。', anchorStores: '經典放映廳', building: '歷史戲院建築', parking: '周邊停車場', transport: '宜蘭市區', future: '結合在地文化延續經營。' }
    },
    {
        id: 'c_e_showtime_hl', category: 'cinema', name: '花蓮秀泰影城', typeLabel: '中型連鎖影城', region: '東部', city: 'hualien', chain: '秀泰影城', address: '花蓮縣花蓮市國聯五路58號', shortDesc: '東部首座現代化精品影城。',
        details: { opened: '2016年', history: '秀泰進軍東台灣的重要據點，提升了花蓮的觀影品質。', status: '花蓮人看首輪大片的首選。', anchorStores: '獨家商務艙座椅', building: '獨立商場建築', parking: '專屬戶外停車場', transport: '花蓮火車站步行10分鐘', future: '提供東部與都會區零時差的娛樂。' }
    },
    {
        id: 'c_e_vieshow_paradise', category: 'cinema', name: '花蓮新天堂威秀影城', typeLabel: '大型連鎖影城', region: '東部', city: 'hualien', chain: '威秀影城', address: '花蓮縣吉安鄉中央路三段', shortDesc: '花蓮新天堂樂園內的威秀影城，東部首座 IMAX。',
        details: { opened: '2018年', history: '隨花蓮新天堂樂園開幕，為東台灣帶來首座 IMAX 影廳。', status: '花蓮觀光客與在地客的觀影新地標。', anchorStores: 'IMAX 影廳、多廳數位影廳', building: '位於花蓮新天堂樂園內', parking: '樂園大型停車場', transport: '花蓮火車站轉乘或開車', future: '帶動花蓮觀光觀影發展。' }
    },
    {
        id: 'c_e_showtime_taitung', category: 'cinema', name: '台東秀泰影城', typeLabel: '大型連鎖影城', region: '東部', city: 'taitung', chain: '秀泰影城', address: '台東縣台東市新生路', shortDesc: '秀泰生活台東店內的影城，東南部觀影地標。',
        details: { opened: '2021年', history: '隨秀泰生活台東店開幕，為台東帶來現代化觀影體驗。', status: '台東市區家庭客的觀影首選。', anchorStores: '多廳數位影廳', building: '位於秀泰生活台東店內', parking: '商場停車場', transport: '台東市區公車或開車', future: '深耕台東在地娛樂。' }
    },

    // ==========================================
    // 離島 - 電影院 / 影城
    // ==========================================
    {
        id: 'c_o_in89_ph', category: 'cinema', name: 'in89 豪華影城 (澎湖昇恆昌)', typeLabel: '連鎖影城', region: '離島', city: 'penghu', chain: 'in89豪華影城', address: '澎湖縣馬公市同和路158號4樓', shortDesc: '澎湖唯一的現代化多廳影城。',
        details: { opened: '2018年', history: '進駐澎湖 Pier3 三號港，為離島居民與觀光客帶來高級觀影享受。', status: '配備 BoomBoom 兒童影廳與舒適座椅。', anchorStores: 'BoomBoom 親子影廳', building: '位於三號港免稅店4樓', parking: '商場停車場', transport: '馬公市區', future: '服務離島居民與拓展觀光客源。' }
    },
    {
        id: 'c_o_jinshi_kinmen', category: 'cinema', name: '金獅影城', typeLabel: '連鎖影城', region: '離島', city: 'kinmen', chain: null, address: '金門縣金湖鎮中山路8-8號', shortDesc: '金門唯一的現代化多廳影城，位於風獅爺購物中心。',
        details: { opened: '2014年', history: '隨金門風獅爺購物中心開幕，是金門唯一的現代化影城。', status: '金門居民與觀光客的觀影選擇。', anchorStores: '多廳數位影廳', building: '位於風獅爺購物中心內', parking: '戶外大型停車場', transport: '緊鄰金門尚義機場', future: '服務金門在地與觀光客源。' }
    }
];
