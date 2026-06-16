const venues = [
    // ==========================================
    // 北部地區 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_n_101', category: 'mall', name: '台北 101 購物中心', typeLabel: '頂級購物中心', region: '北部', address: '台北市信義區市府路45號', shortDesc: '台灣指標性建築，匯聚全球頂級精品與米其林星級餐廳。',
        details: { opened: '2003年11月', history: '台灣首座國際頂級購物中心，建築融合東方文化與現代科技。', status: '全台營業額極高的指標性商場，吸引大量觀光客與高端客群。', anchorStores: 'Louis Vuitton、Dior、Cartier、Apple Store', building: '地上6層，地下1層（B1至6F商場）', parking: '汽車 1,053 席 / 機車 2,000 席', transport: '捷運「台北101/世貿站」4號出口', future: '持續引進獨家旗艦店與推動ESG。' }
    },
    {
        id: 'm_n_bellavita', category: 'mall', name: 'BELLAVITA 寶麗廣塲', typeLabel: '頂級購物中心', region: '北部', address: '台北市信義區松仁路28號', shortDesc: '被譽為「貴婦百貨」，歐洲古堡風格的頂級精品商場。',
        details: { opened: '2009年9月', history: '由廣達電腦副董事長梁次震家族投資興建，主打極致奢華與寬敞的購物空間。', status: '信義計畫區內最具特色的歐式建築，吸引金字塔頂端客群。', anchorStores: 'Hermès、Van Cleef & Arpels、米其林星級餐廳 L’ATELIER de Joël Robuchon', building: '地上9層，地下4層', parking: '專屬地下停車場，提供代客泊車', transport: '捷運市政府站步行3分鐘', future: '維持頂級尊榮服務與不定期舉辦中庭大型藝術展演。' }
    },
    {
        id: 'm_n_skm_xinyi', category: 'mall', name: '新光三越 台北信義新天地 (A4, A8, A9, A11)', typeLabel: '連鎖百貨', region: '北部', address: '台北市信義區松壽路等', shortDesc: '四棟建築以空橋串連，組成信義計畫區最大的百貨聚落。',
        details: { opened: '1997年起陸續開幕', history: '帶動信義計畫區發展的先驅，A11館為首棟，隨後擴展為四館聯動的龐大商圈。', status: '全台百貨店王之一，各館定位不同（A4精品、A8家庭、A9國際精品、A11年輕潮流）。', anchorStores: 'CHANEL、法雅客、MUJI、各式主題餐廳', building: '四棟獨立建築，具備完善空橋系統', parking: '四館地下室皆有停車場，共約 1,500 席汽車', transport: '捷運市政府站或台北101/世貿站', future: '持續進行樓層改裝與快閃店引進。' }
    },
    {
        id: 'm_n_breeze_ns', category: 'mall', name: '微風南山 Breeze NAN SHAN', typeLabel: '大型購物中心', region: '北部', address: '台北市信義區松智路17號', shortDesc: '主打高質感餐飲與潮流時尚的信義區地標。',
        details: { opened: '2019年1月', history: '位於南山廣場低樓層，由微風集團經營，首創引進日本 atre 商場。', status: '餐飲比例極高，高樓層星空塔(46-48F)擁有絕佳景觀餐廳。', anchorStores: 'atre、微風超市、CÉ LA VI', building: '地下2層至地上7層，以及46-48層景觀餐廳', parking: '汽車 986 席 / 機車 1,500 席', transport: '捷運台北101/世貿站', future: '強化餐飲體驗與國際潮流品牌獨家代理。' }
    },
    {
        id: 'm_n_qsquare', category: 'mall', name: '京站時尚廣場 Q Square', typeLabel: '轉運站商場', region: '北部', address: '台北市大同區承德路一段1號', shortDesc: '結合台北車站與客運轉運站，交通最便利的流行指標。',
        details: { opened: '2009年12月', history: '台北轉運站BOT案共構商場，成功將西區人潮與年輕客群聚集。', status: '人流量極高，主打年輕、快時尚與下班後的聚餐休閒。', anchorStores: 'ZARA、威秀影城、各式獨家餐飲', building: '地上4層，地下3層（商場）', parking: '汽車 850 席 / 機車 1,000 席', transport: '五鐵共構（台鐵、高鐵、捷運、機捷、客運）出站即達', future: '雙子星計畫落成後將形成更龐大的台北車站商圈。' }
    },
    {
        id: 'm_n_sogo_br4', category: 'mall', name: '遠東SOGO 台北復興館 (BR4)', typeLabel: '連鎖百貨', region: '北部', address: '台北市大安區忠孝東路三段300號', shortDesc: '東區精品指標，捷運忠孝復興站共構百貨。',
        details: { opened: '2006年12月', history: '結合捷運共構工程，為東區注入頂級精品與精緻餐飲，與忠孝館形成互補。', status: '坪效極高的精品百貨，中高樓層設有挑高日式庭園。', anchorStores: 'HERMÈS、CHANEL、Cartier、鼎泰豐', building: '地上11層，地下3層', parking: '汽車約 800 席', transport: '捷運忠孝復興站2號出口直達', future: '持續引進話題餐飲與優化VIP服務。' }
    },
    {
        id: 'm_n_eslite_songyan', category: 'mall', name: '誠品生活松菸', typeLabel: '文化創意商場', region: '北部', address: '台北市信義區菸廠路88號', shortDesc: '24小時不打烊的新一代誠品總店，結合文創與設計。',
        details: { opened: '2013年8月（2024年接棒24H書店）', history: '位於松山文創園區，原為大巨蛋BOT附屬商業設施。信義店結業後，接棒成為24小時書店。', status: '台北文青與觀光客必訪，結合電影院、表演廳與行旅。', anchorStores: '誠品24H書店、誠品電影院、誠品行旅、各類台灣文創品牌', building: '地上3層，地下2層', parking: '松山文創園區地下停車場', transport: '捷運國父紀念館站步行5分鐘', future: '與大巨蛋商圈（遠東Garden City）串聯成文化體育園區。' }
    },
    {
        id: 'm_n_yulon', category: 'mall', name: 'YES! LIFE 裕隆城', typeLabel: '中大型購物中心', region: '北部', address: '新北市新店區中興路三段70號', shortDesc: '擁有全亞洲最大誠品生活的新店全新地標。',
        details: { opened: '2023年9月', history: '原裕隆新店廠區，引進誠品生活與威秀影城，為新北市南區最大商場。', status: '新店居民消費娛樂重心，假日人潮洶湧。', anchorStores: '誠品生活新店、威秀影城、宜得利', building: '地上8層，地下3層', parking: '汽車 825 席 / 機車 1,000 席', transport: '捷運大坪林/七張站步行或接駁車', future: '深耕在地社區，打造第三空間。' }
    },
    {
        id: 'm_n_fec_banciao', category: 'mall', name: 'Mega City 板橋大遠百', typeLabel: '大型百貨公司', region: '北部', address: '新北市板橋區新站路28號', shortDesc: '新北營業額霸主，擁有絕美威尼斯廣場。',
        details: { opened: '2011年12月', history: '新板特區的核心商場，引入大型影城與威尼斯水都造景的美食街，一戰成名。', status: '新北市業績最高的百貨公司，精品與餐飲陣容堅強。', anchorStores: '威秀影城、海底撈、各一線精品', building: '地上11層，地下1層', parking: '汽車 1,000 席 / 機車 2,000 席', transport: '台鐵/高鐵/捷運板橋站步行3分鐘', future: '持續強化新板特區精品龍頭地位。' }
    },
    {
        id: 'm_n_macrohub', category: 'mall', name: '宏匯廣場 HONHUI PLAZA', typeLabel: '中大型購物中心', region: '北部', address: '新北市新莊區新北大道四段3號', shortDesc: '新莊副都心指標商場，擁有獨家 VR 遊樂園與演唱會場館。',
        details: { opened: '2020年7月', history: '新北市政府BOT案，填補了新莊、三重、五股地區缺乏大型百貨的空白。', status: '在地家庭客首選，設有 Zepp New Taipei 演唱會場館。', anchorStores: '美麗新影城、VR ZONE、Zepp New Taipei', building: '地上11層，地下7層', parking: '汽車 1,300 席 / 機車 1,200 席', transport: '機捷新莊副都心站步行5分鐘', future: '帶動新莊副都心整體商業發展。' }
    },
    {
        id: 'm_n_mitsui_linkou', category: 'mall', name: 'MITSUI OUTLET PARK 林口', typeLabel: '暢貨中心 (Outlet)', region: '北部', address: '新北市林口區文化三路一段356號', shortDesc: '北台灣首座正統日系 Outlet，擴建二期營運中。',
        details: { opened: '2016年1月(一期), 2024年(二期)', history: '三井不動產在台灣的首個開發案，大獲成功，帶動林口房市與人口成長。', status: '北台灣最熱門的 Outlet 之一，二期加入強化了生活與娛樂機能。', anchorStores: '威秀影城、UNIQLO、各國際精品 Outlet', building: '半露天與室內商場結合，分為一、二期', parking: '汽車 3,000 席', transport: '機捷林口站 (A9) 步行5分鐘', future: '一二期整合發揮綜效，成為林口生活圈核心。' }
    },
    {
        id: 'm_n_gloria', category: 'mall', name: '華泰名品城 GLORIA OUTLETS', typeLabel: '暢貨中心 (Outlet)', region: '北部', address: '桃園市中壢區春德路189號', shortDesc: '全台首座美式露天 Outlet，高鐵站前地標。',
        details: { opened: '2015年12月起分三期', history: '純正美式村莊風格，緊鄰桃園高鐵站，為青埔特區帶來龐大商機。', status: '業績持續創高，精品陣容為全台 Outlet 最強。', anchorStores: 'Gucci、Prada、Balenciaga', building: '地上1至3層露天街區', parking: '汽車 3,500 席', transport: '高鐵桃園站 / 機捷 A18 站', future: '配合鄰近的國泰置地廣場開發案，形成巨型娛樂城。' }
    },
    {
        id: 'm_n_taimall', category: 'mall', name: '台茂購物中心 TaiMall', typeLabel: '大型購物中心', region: '北部', address: '桃園市蘆竹區南崁路一段112號', shortDesc: '桃園歷史最悠久的大型 Mall，歷經多次華麗轉身。',
        details: { opened: '1999年7月', history: '台灣第一家大型購物中心，歷經數次大改裝，成功轉型為現代化家庭娛樂中心。', status: '南崁地區生活重心，戶外設有大型兒童公園。', anchorStores: '美麗新影城、室內籃球場、戶外公園', building: '地上7層，地下3層', parking: '汽車 2,500 席 / 機車 1,500 席', transport: '鄰近南崁交流道，客運路線多', future: '持續強化親子與運動娛樂設施。' }
    },
    {
        id: 'm_n_bigcity', category: 'mall', name: 'Big City 遠東巨城購物中心', typeLabel: '大型購物中心', region: '北部', address: '新竹市東區中央路229號', shortDesc: '桃竹苗地區休閒娛樂霸主，全台營業額前三名。',
        details: { opened: '2012年4月', history: '原為風城購物中心，遠東接手後奇蹟重生，成為台灣購物中心營運典範。', status: '新竹人假日必訪，人潮與車潮驚人。', anchorStores: 'SOGO百貨、威秀影城、大魯閣', building: 'Mall與SOGO雙主體，地上8層', parking: '汽車 3,000 席 / 機車 3,000 席', transport: '台鐵新竹站轉乘接駁車', future: '維持絕對的市佔率優勢與品牌更新。' }
    },
    {
        id: 'm_n_fec_zhubei', category: 'mall', name: '遠百竹北', typeLabel: '大型百貨公司', region: '北部', address: '新竹縣竹北市莊敬北路18號', shortDesc: '以客家圓樓為建築意象，竹北首座大型百貨。',
        details: { opened: '2022年1月', history: '新竹縣政府BOT案，解決竹北科技新貴缺乏就近高階消費場所的問題。', status: '頂樓設有客家古厝造景與空中花園，餐飲業績極佳。', anchorStores: '各式知名餐飲、精品、CitySuper', building: '地上8層，地下4層', parking: '汽車 1,485 席 / 機車 980 席', transport: '鄰近竹北交流道，距高鐵新竹站車程約10分', future: '強化竹北生活圈的高端消費與娛樂機能。' }
    },

    // ==========================================
    // 中部地區 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_c_skm_tc', category: 'mall', name: '新光三越 台中中港店', typeLabel: '大型百貨公司', region: '中部', address: '台中市西屯區台灣大道三段301號', shortDesc: '全台單店營業額最高的「百貨店王」。',
        details: { opened: '2000年10月', history: '帶動台中七期商圈發展的火車頭，常年霸佔全台百貨業績第一名。', status: '中部高端消費絕對指標，精品與化妝品業績驚人。', anchorStores: '新光影城、各大國際頂級精品旗艦店', building: '地上14層，地下6層', parking: '汽車 1,200 席 / 機車 1,500 席', transport: '台灣大道幹線公車「新光/遠百」站', future: '持續挑戰業績新高，引進全台獨家品牌。' }
    },
    {
        id: 'm_c_fec_tc', category: 'mall', name: 'Top City 台中大遠百', typeLabel: '大型百貨公司', region: '中部', address: '台中市西屯區台灣大道三段251號', shortDesc: '緊鄰新光三越，全台業績第二的百貨巨頭。',
        details: { opened: '2011年12月', history: '與新光三越比鄰而居，形成全台最強的「百貨雙子星」商圈。', status: '業績僅次於隔壁的新光三越，館內威尼斯與大遠百特色美食街極受歡迎。', anchorStores: '威秀影城、鼎泰豐、海底撈、國際精品', building: '地上14層，地下2層', parking: '汽車 1,200 席，並與市政停車場連通', transport: '台灣大道幹線公車「新光/遠百」站', future: '與新光三越共同擴大七期商圈的磁吸效應。' }
    },
    {
        id: 'm_c_lalaport_tc', category: 'mall', name: 'Mitsui Shopping Park LaLaport 台中', typeLabel: '大型購物中心', region: '中部', address: '台中市東區進德路600號', shortDesc: '日系全客層購物中心，翻轉台中東區的新地標。',
        details: { opened: '2023年', history: '台糖舊廠區開發案，三井集團為台中引進首座 LaLaport。', status: '以豐富的日系超市、母嬰用品與平價服飾吸引大量家庭客。', anchorStores: 'LOPIA超市、GU、UNIQLO、橡子共和國', building: '南館4層、北館7層，空橋相連', parking: '汽車 1,900 席 / 機車 3,500 席', transport: '台鐵台中站（東站）步行6分鐘', future: '結合帝國糖廠周邊成為東區休憩聚落。' }
    },
    {
        id: 'm_c_parklane', category: 'mall', name: '勤美 誠品綠園道', typeLabel: '文創購物中心', region: '中部', address: '台中市西區公益路68號', shortDesc: '擁有全亞洲最大植生牆，結合草悟道的文青聖地。',
        details: { opened: '2008年5月', history: '原為半廢棄的商業大樓，由勤美集團與誠品改造，植入大量綠意，成為都市再生典範。', status: '台中最具藝文氣息的商場，結合周邊草悟道與市民廣場。', anchorStores: '誠品書店、UNIQLO、各式文創品牌', building: '地上15層(商場至3F)，室內外巨大植生牆', parking: '汽車 400 席', transport: '市區公車至「草悟道(市民廣場)」站', future: '持續推動勤美璞真聚落計畫（如勤美之森）。' }
    },
    {
        id: 'm_c_sogo_ks', category: 'mall', name: '廣三 SOGO 百貨', typeLabel: '大型百貨公司', region: '中部', address: '台中市西區台灣大道二段459號', shortDesc: '台中歷史悠久的日系百貨，擁有獨特水舞廣場。',
        details: { opened: '1995年11月', history: '曾是台中最風光的百貨之一，見證了台灣大道（原中港路）商圈的崛起。', status: '近年持續轉型，引進影城與室內主題樂園，鞏固在地客源。', anchorStores: '王牌映画影城、藏壽司、各大型主題餐廳', building: '地上18層，地下4層', parking: '汽車 800 席', transport: '台灣大道幹線公車「科博館」站', future: '強化娛樂與體驗型業態。' }
    },
    {
        id: 'm_c_mitsui_tc', category: 'mall', name: 'MITSUI OUTLET PARK 台中港', typeLabel: '暢貨中心 (Outlet)', region: '中部', address: '台中市梧棲區臺灣大道十段168號', shortDesc: '台灣首座海港型 Outlet，擁有浪漫海景摩天輪。',
        details: { opened: '2018年12月', history: '成功開發台中港特定區，將人潮引入海線地區。', status: '結合海景與購物，假日觀光人潮眾多。二期已擴建完成。', anchorStores: '台中之星摩天輪、SNOW PEAK、誠品生活', building: '開放式單/雙層街區', parking: '汽車 3,400 席', transport: '鄰近西濱快速道路；公車路線', future: '帶動海線整體觀光與房地產發展。' }
    },
    {
        id: 'm_c_lihpao', category: 'mall', name: '麗寶 OUTLET MALL', typeLabel: '暢貨中心 (Outlet)', region: '中部', address: '台中市后里區福容路201號', shortDesc: '結合遊樂園、飯店與賽車場的義大利風格渡假園區。',
        details: { opened: '2016年12月(一期), 2019年(二期)', history: '麗寶樂園渡假區的擴建計畫，二期以義大利科莫湖為原型打造。', status: '全台最大的休閒渡假園區一部分，擁有星巴克鐘樓地標。', anchorStores: '秀泰影城、天空之夢摩天輪、湯姆熊', building: '歐風建築群，分為一、二期', parking: '渡假區共用巨大停車場', transport: '國道一號后里交流道旁', future: '擴建成為全方位綜合娛樂城。' }
    },

    // ==========================================
    // 南部地區 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_s_hanshin_arena', category: 'mall', name: '漢神巨蛋購物廣場', typeLabel: '大型百貨公司', region: '南部', address: '高雄市左營區博愛二路777號', shortDesc: '南台灣流行指標，營業額稱霸高雄的旗艦百貨。',
        details: { opened: '2008年7月', history: '配合高雄巨蛋BOT案興建，帶動北高雄商圈崛起，取代南高雄的三多商圈。', status: '高雄業績第一，擁有南部最齊全的國際精品與化妝品陣容。', anchorStores: '漢來海港餐廳、鼎泰豐、各式一線精品', building: '地上9層，地下1層（商場）', parking: '汽車 1,400 席 / 機車 4,000 席', transport: '捷運紅線「巨蛋站」5號出口', future: '持續進行大規模改裝，穩固南部霸主地位。' }
    },
    {
        id: 'm_s_dreammall', category: 'mall', name: '夢時代購物中心 Dream Mall', typeLabel: '超大型購物中心', region: '南部', address: '高雄市前鎮區中華五路789號', shortDesc: '全台樓地板面積最大的購物中心，擁有頂樓摩天輪。',
        details: { opened: '2007年3月', history: '統一企業集團投資開發，為亞洲最大的商場之一，帶動亞洲新灣區發展。', status: '高雄家庭客與觀光客必訪，空間極大，常舉辦大型展覽。', anchorStores: '高雄之眼摩天輪、秀泰影城、統一時代百貨', building: '魚形建築，地上9層，地下2層', parking: '汽車 3,500 席 / 機車 2,500 席', transport: '輕軌「夢時代站」 / 捷運「凱旋站」轉乘', future: '配合周邊多功能經貿園區開發，發展腹地極大。' }
    },
    {
        id: 'm_s_skmpark', category: 'mall', name: 'SKM Park Outlets 高雄草衙', typeLabel: '暢貨中心 (Outlet)', region: '南部', address: '高雄市前鎮區中安路1-1號', shortDesc: '新光三越集團首間 Outlet，結合鈴鹿賽道樂園。',
        details: { opened: '2022年1月 (原大魯閣草衙道於2016開幕)', history: '原為大魯閣草衙道，新光三越接手後轉型為國際級 Outlet。', status: '結合大型戶外遊樂設施與折扣購物，適合全家大小一票到底。', anchorStores: '鈴鹿賽道樂園、國賓影城、各國際品牌Outlet', building: '歐式半露天街區與室內商場', parking: '汽車 1,000 席 / 機車 1,200 席', transport: '捷運紅線「草衙站」2號出口直達', future: '強化 Outlet 品牌陣容與娛樂體驗。' }
    },
    {
        id: 'm_s_fec_ks', category: 'mall', name: '高雄大遠百', typeLabel: '大型百貨公司', region: '南部', address: '高雄市苓雅區三多四路21號', shortDesc: '三多商圈地標，擁有絕佳景觀的誠品書店與影城。',
        details: { opened: '2001年10月', history: '高雄最高樓層的百貨公司，當年頂樓的誠品與威秀影城設計極具未來感。', status: '三多商圈現存的主力百貨，捷運共構優勢明顯。', anchorStores: '威秀影城、誠品生活、無印良品', building: '地上17層（商場），大樓總高43層', parking: '汽車 900 席', transport: '捷運紅線「三多商圈站」1號出口直達', future: '面對北高雄競爭，持續強化餐飲與娛樂比例。' }
    },
    {
        id: 'm_s_skm_tn_nt', category: 'mall', name: '新光三越 台南新天地', typeLabel: '大型百貨公司', region: '南部', address: '台南市中西區西門路一段658號', shortDesc: '南台灣最具規模的百貨航母，台南精品的絕對核心。',
        details: { opened: '2002年11月', history: '原址為台南監獄，開發為百貨後迅速成為台南業績霸主。', status: '新光三越全台業績前三名的店中店，擁有本館與二館(小西門)。', anchorStores: '新光影城、國際頂級精品、大面積特色美食街', building: '地上9層，地下3層（包含本館與小西門）', parking: '汽車 1,500 席 / 機車 2,000 席', transport: '市區公車至「新光三越新天地」站', future: '持續引進話題品牌，維持台南市佔率第一。' }
    },
    {
        id: 'm_s_tsmall', category: 'mall', name: '南紡購物中心 T.S. Mall', typeLabel: '大型購物中心', region: '南部', address: '台南市東區中華東路一段366號', shortDesc: '台南東區最大的複合式購物、娛樂與餐飲中心。',
        details: { opened: '2015年(A1館), 2020年(A2館)', history: '台南紡織舊廠區開發，結合老爺行旅，為台南帶來全新Mall型態。', status: '餐飲與娛樂比例高，深受台南年輕人與家庭喜愛。', anchorStores: '威秀影城、ZARA、H&M、各式大型主題餐廳', building: 'A1館與A2館，空橋相連', parking: '汽車 2,000 席 / 機車 3,000 席', transport: '市區公車；未來有捷運平實轉運站', future: '配合平實營區開發，成為台南新興副都心核心。' }
    },
    {
        id: 'm_s_mitsui_tn', category: 'mall', name: 'MITSUI OUTLET PARK 台南', typeLabel: '暢貨中心 (Outlet)', region: '南部', address: '台南市歸仁區歸仁大道101號', shortDesc: '融入台南古都紅磚元素的南台灣大型日系 Outlet。',
        details: { opened: '2022年2月', history: '位於高鐵台南站旁，帶動沙崙綠能科學城周邊的商業發展。', status: '吸引大量雲嘉南地區客群，餐飲區時常爆滿。', anchorStores: '各式國際品牌 Outlet、台南在地特色美食', building: '室內型商場，地上3層', parking: '汽車 1,700 席', transport: '高鐵台南站 / 台鐵沙崙站 步行3分鐘', future: '二期工程已啟動，將進一步擴大營業面積。' }
    },

    // ==========================================
    // 東部與離島地區 - 購物中心與百貨公司
    // ==========================================
    {
        id: 'm_e_lunac', category: 'mall', name: '蘭城新月廣場 Luna Plaza', typeLabel: '大型購物中心', region: '東部', address: '宜蘭縣宜蘭市民權路二段38巷6號', shortDesc: '東部最大的購物中心，結合知名烤鴨與五星級酒店。',
        details: { opened: '2008年11月', history: '宜蘭市區最大型的商業開發案，結合蘭城晶英酒店，極大提升了宜蘭的消費水平。', status: '宜蘭人生活與娛樂重心，酒店的櫻桃鴨享譽全台。', anchorStores: '新月豪華影城、家樂福、蘭城晶英酒店', building: '地上4層，地下1層（商場部分）', parking: '汽車 1,000 席 / 機車 1,000 席', transport: '宜蘭火車站步行約10分鐘', future: '維持東台灣首屈一指的複合式商場地位。' }
    },
    {
        id: 'm_e_fec_hl', category: 'mall', name: '花蓮遠百', typeLabel: '連鎖百貨', region: '東部', address: '花蓮縣花蓮市和平路581號', shortDesc: '花蓮唯一的大型傳統百貨公司，深耕在地多年。',
        details: { opened: '2009年移至現址開幕', history: '原位於花蓮市區舊址，後遷移至現址擴大營業，是花蓮人買精品的唯一去處。', status: '雖然面臨秀泰影城等競爭，但仍是花蓮購物的重要指標。', anchorStores: '愛買、MUJI、各式專櫃品牌', building: '地上3層，地下1層', parking: '汽車 400 席', transport: '市區公車或自行開車', future: '持續引進符合在地需求的餐飲與生活品牌。' }
    },
    {
        id: 'm_o_pier3', category: 'mall', name: '澎湖 Pier3 三號港', typeLabel: '免稅購物中心', region: '離島', address: '澎湖縣馬公市同和路158號', shortDesc: '澎湖最大型免稅商場，結合影城與極限運動場。',
        details: { opened: '2018年', history: '昇恆昌集團投資打造，為澎湖帶來國際級的免稅購物體驗與現代化影城。', status: '觀光客必訪的免稅購物天堂，同時也是在地人看電影的首選。', anchorStores: 'in89豪華影城、昇恆昌免稅店、GoStar極限運動場', building: '地上4層', parking: '附屬室內停車場', transport: '位於馬公市區南海碼頭旁', future: '結合澎湖觀光季推動各式行銷活動。' }
    },
    {
        id: 'm_o_windlion', category: 'mall', name: '金門 風獅爺購物中心', typeLabel: '免稅購物中心', region: '離島', address: '金門縣金湖鎮中山路8-8號', shortDesc: '金門首座大型免稅購物商城與影城。',
        details: { opened: '2014年', history: '台開集團開發，緊鄰金門機場，主要鎖定小三通與觀光客群。', status: '擁有金門唯一的現代化多廳影城（金獅影城）。', anchorStores: '金獅影城、免稅精品、Studio A', building: '分為北棟、南棟等長條形建築', parking: '戶外大型停車場', transport: '緊鄰金門尚義機場', future: '依賴兩岸小三通政策與在地觀光發展。' }
    },

    // ==========================================
    // 全台電影院 / 影城
    // ==========================================
    {
        id: 'c_n_vieshow_muvie', category: 'cinema', name: 'MUVIE CINEMAS (遠百信義A13)', typeLabel: '頂級影城', region: '北部', address: '台北市信義區松仁路58號10樓', shortDesc: '威秀影城最高端品牌，全廳獲 THX 認證。',
        details: { opened: '2019年12月', history: '針對高端客群打造的全新品牌，擁有 TITAN 巨幕影廳。', status: '台北電影首映會與高級觀影體驗的首選。', anchorStores: 'TITAN 巨幕廳、MUCROWN 頂級餐飲影廳', building: '位於遠百信義A13內，共8個影廳', parking: '與遠百A13共用', transport: '捷運市政府站或象山站', future: '維持全台最高端影城定位。' }
    },
    {
        id: 'c_n_vieshow_xinyi', category: 'cinema', name: '信義威秀影城', typeLabel: '大型連鎖影城', region: '北部', address: '台北市信義區松壽路20號', shortDesc: '台灣影城文化的發源地，信義商圈夜生活核心。',
        details: { opened: '1998年（原華納威秀）', history: '台灣首座現代化多廳式美式影城，徹底改變了台灣人的觀影習慣。', status: '雖然設備非最新，但地理位置絕佳，人潮永遠爆滿。', anchorStores: '4DX影廳、多間獨立街邊店', building: '兩棟獨立建築，共17個影廳', parking: '地下停車場', transport: '捷運台北101/世貿站', future: '租約到期後可能面臨重大改裝或重建。' }
    },
    {
        id: 'c_n_ambassador_xm', category: 'cinema', name: '國賓大戲院 (西門町)', typeLabel: '大型影城', region: '北部', address: '台北市萬華區成都路88號', shortDesc: '台灣電影史上的傳奇，擁有全台頂級巨幕大廳。',
        details: { opened: '1965年', history: '歷經半世紀的經典戲院，多次率先引進全球最新音效技術。', status: '西門町看大片的首選，其「1廳」擁有近千座位與震撼音效。', anchorStores: '巨幕大廳 (Dolby Atmos)', building: '獨立建築，共3個影廳', parking: '周邊峨眉立體停車場', transport: '捷運西門站', future: '持續以頂級大廳音效吸引死忠影迷。' }
    },
    {
        id: 'c_n_showtime_sl', category: 'cinema', name: '樹林秀泰影城', typeLabel: '大型連鎖影城', region: '北部', address: '新北市樹林區樹新路40-6號', shortDesc: '樹林區首座大型百貨影城，設有超級巨幕廳。',
        details: { opened: '2018年5月', history: '結合秀泰生活商場，為樹林帶來全新的娛樂與購物體驗。', status: '在地家庭客觀影首選。', anchorStores: '秀泰超級巨幕廳', building: '位於秀泰生活樹林店內', parking: '汽車/機車專屬停車場', transport: '台鐵樹林站步行約10分鐘', future: '深耕在地娛樂需求。' }
    },
    {
        id: 'c_c_vieshow_fec', category: 'cinema', name: '台中大遠百威秀影城', typeLabel: '大型連鎖影城', region: '中部', address: '台中市西屯區台灣大道三段251號13樓', shortDesc: '中部唯一擁有 IMAX 影廳的頂級威秀影城。',
        details: { opened: '2011年12月', history: '隨台中大遠百開幕，為中部地區帶來高規格的觀影體驗。', status: '台中票房名列前茅，IMAX 廳極受歡迎。', anchorStores: 'IMAX 影廳', building: '位於大遠百13-14樓', parking: '與大遠百共用', transport: '公車「新光/遠百」站', future: '維持設備更新以應對新競爭者。' }
    },
    {
        id: 'c_c_skc_tc', category: 'cinema', name: '台中新光影城', typeLabel: '大型連鎖影城', region: '中部', address: '台中市西屯區台灣大道三段301號13樓', shortDesc: '獨創動漫廳與高級臥榻影廳，話題性十足。',
        details: { opened: '2000年 (近年大幅改裝)', history: '近年斥資重金改裝，推出 B.O.X. 特色影廳，成功製造話題。', status: '動漫廳與 Dolby Cinema 極具吸引力。', anchorStores: 'Dolby Cinema、ACG 動漫廳、Sealy 席伊麗廳', building: '位於新光三越內', parking: '與新光三越共用', transport: '公車「新光/遠百」站', future: '持續發展特色影廳策略。' }
    },
    {
        id: 'c_s_vieshow_hs', category: 'cinema', name: '高雄威秀影城 (大遠百)', typeLabel: '大型連鎖影城', region: '南部', address: '高雄市苓雅區三多四路21號13樓', shortDesc: '高雄歷史悠久的 IMAX 影城，位於三多商圈。',
        details: { opened: '2001年', history: '高雄早期的旗艦級影城，引進 IMAX 系統。', status: '南高雄重要觀影據點，座位數多。', anchorStores: 'IMAX 影廳、4DX 影廳', building: '位於高雄大遠百頂層', parking: '與大遠百共用', transport: '捷運三多商圈站', future: '面對北高雄競爭，持續推動硬體升級。' }
    },
    {
        id: 'c_s_cm', category: 'cinema', name: '台南全美戲院', typeLabel: '獨立/二輪電影院', region: '南部', address: '台南市中西區永福路二段187號', shortDesc: '國際大導李安的電影啟蒙地，堅持手繪看板。',
        details: { opened: '1950年', history: '台南歷史瑰寶，保留了古早戲院的氛圍與手繪看板技藝。', status: '以二輪片為主，票價親民，吸引觀光客朝聖。', anchorStores: '國寶級顏振發師傅手繪電影看板', building: '歷史連棟建築', parking: '無專屬停車場', transport: '公車至赤崁樓步行', future: '轉型文創與歷史傳承。' }
    },
    {
        id: 'c_e_showtime_hl', category: 'cinema', name: '花蓮秀泰影城', typeLabel: '中型連鎖影城', region: '東部', address: '花蓮縣花蓮市國聯五路58號', shortDesc: '東部首座現代化精品影城。',
        details: { opened: '2016年', history: '秀泰進軍東台灣的重要據點，提升了花蓮的觀影品質。', status: '花蓮人看首輪大片的首選。', anchorStores: '獨家商務艙座椅', building: '獨立商場建築', parking: '專屬戶外停車場', transport: '花蓮火車站步行10分鐘', future: '提供東部與都會區零時差的娛樂。' }
    },
    {
        id: 'c_o_in89_ph', category: 'cinema', name: 'in89 豪華影城 (澎湖昇恆昌)', typeLabel: '連鎖影城', region: '離島', address: '澎湖縣馬公市同和路158號4樓', shortDesc: '澎湖唯一的現代化多廳影城。',
        details: { opened: '2018年', history: '進駐澎湖 Pier3 三號港，為離島居民與觀光客帶來高級觀影享受。', status: '配備 BoomBoom 兒童影廳與舒適座椅。', anchorStores: 'BoomBoom 親子影廳', building: '位於三號港免稅店4樓', parking: '商場停車場', transport: '馬公市區', future: '服務離島居民與拓展觀光客源。' }
    }
];
