const venues = [
    // --- 購物中心 / 百貨公司 / Outlets ---
    {
        id: 'm1',
        category: 'mall',
        name: '台北 101 購物中心',
        typeLabel: '大型購物中心',
        region: '北部',
        address: '台北市信義區市府路45號',
        shortDesc: '台灣指標性建築，匯聚全球頂級精品與米其林星級餐廳。',
        details: {
            opened: '2003年11月',
            history: '為台灣首座國際頂級購物中心，建築由李祖原建築師事務所設計，融合東方文化（如竹節高升、如意）與現代科技。',
            status: '全台營業額極高的指標性商場，吸引大量國際觀光客與本地高端客群。',
            anchorStores: 'Louis Vuitton、Dior、Cartier、Apple Store、鼎泰豐',
            building: '購物中心區為地上6層，地下1層（B1至6F）；主塔樓為辦公空間與觀景台。',
            parking: '汽車 1,053 席 / 機車 2,000 席',
            transport: '捷運淡水信義線「台北101/世貿站」4號出口連通；信義商圈空橋系統。',
            future: '持續推動 ESG 綠色商場計畫，並引進更多全台獨家旗艦店。'
        }
    },
    {
        id: 'm2',
        category: 'mall',
        name: 'Big City 遠東巨城購物中心',
        typeLabel: '大型購物中心',
        region: '北部',
        address: '新竹市東區中央路229號',
        shortDesc: '北台灣最大的購物中心之一，桃竹苗地區的休閒娛樂霸主。',
        details: {
            opened: '2012年4月（前身為2003年的風城購物中心）',
            history: '原址為亞洲最大購物中心「風城」，後因經營不善倒閉。遠東集團接手後重新打造為巨城，奇蹟般重生並成為全台坪效極高的商場。',
            status: '目前為新竹人生活重心，業績屢創新高，假日人潮洶湧。',
            anchorStores: 'SOGO百貨新竹店、威秀影城、宜得利、MUJI、大魯閣',
            building: '分為 Mall（巨城）與 SOGO百貨兩部分，主體地上8層、地下3層。',
            parking: '汽車 3,000 席 / 機車 3,000 席（全台單一商場最多）',
            transport: '台鐵新竹站轉乘接駁車或市區公車；距離車站約步行15分鐘。',
            future: '持續優化動線與引進話題餐飲品牌，穩固桃竹苗霸主地位。'
        }
    },
    {
        id: 'm3',
        category: 'mall',
        name: '華泰名品城 GLORIA OUTLETS',
        typeLabel: '暢貨中心 (Outlet)',
        region: '北部',
        address: '桃園市中壢區春德路189號',
        shortDesc: '全台首座美式露天休閒購物村，匯集國際精品折扣。',
        details: {
            opened: '2015年12月（一期）、2019年5月（全區開幕）',
            history: '由國泰人壽與華泰大飯店集團合作開發，為台灣引入純正美式露天 Outlet 概念，帶動青埔特區發展。',
            status: '高鐵站前地標，業績亮眼，成為北部民眾週末逛街與外國旅客來台必訪景點。',
            anchorStores: 'Gucci、Prada、Loewe、Balenciaga、Nike Factory Store',
            building: '分為三期園區，主要為地上1至3層的露天街區建築。',
            parking: '汽車約 3,500 席 / 機車停車場',
            transport: '高鐵桃園站 / 捷運機場線 A18 站 出站即達，交通極為便利。',
            future: '周邊國泰置地廣場開發案持續進行，將結合水族館、影城形成更龐大的娛樂聚落。'
        }
    },
    {
        id: 'm4',
        category: 'mall',
        name: 'YES! LIFE 裕隆城',
        typeLabel: '中大型購物中心',
        region: '北部',
        address: '新北市新店區中興路三段70號',
        shortDesc: '新店全新地標，擁有全亞洲最大誠品生活。',
        details: {
            opened: '2023年9月',
            history: '原為裕隆汽車新店廠區，歷經多年規劃改建，引進誠品生活與威秀影城，為新北市南區最大商場。',
            status: '開幕後人潮絡繹不絕，成為新店及文山區居民的消費娛樂重心。',
            anchorStores: '誠品生活新店（佔地1.9萬坪）、威秀影城、宜得利、UNIQLO',
            building: '地上8層，地下3層。B1-4F為誠品生活，5F為裕隆城商場，6-8F為威秀影城。',
            parking: '汽車 825 席 / 機車 1,000 席',
            transport: '捷運大坪林站或七張站步行約10-15分鐘，亦有接駁車服務。',
            future: '持續深化社區連結，成為周邊居民日常休閒的第三空間。'
        }
    },
    {
        id: 'm5',
        category: 'mall',
        name: '漢神巨蛋購物廣場',
        typeLabel: '大型百貨公司',
        region: '南部',
        address: '高雄市左營區博愛二路777號',
        shortDesc: '南台灣流行指標，業績稱霸高雄的旗艦級百貨。',
        details: {
            opened: '2008年7月',
            history: '配合高雄巨蛋體育館BOT案興建，開幕後迅速崛起，取代三多商圈成為高雄新的消費重心。',
            status: '高雄營業額最高的百貨公司，南部時尚與美食品味指標。',
            anchorStores: '漢來海港餐廳、鼎泰豐、各國際一線精品旗艦店',
            building: '地上9層，地下1層（商場），與高雄巨蛋體育館相連。',
            parking: '汽車 1,400 席 / 機車 4,000 席',
            transport: '捷運紅線「巨蛋站」5號出口步行2分鐘。',
            future: '持續進行樓層改裝與品牌升級，維持南台灣時尚龍頭地位。'
        }
    },
    {
        id: 'm6',
        category: 'mall',
        name: '南紡購物中心',
        typeLabel: '大型購物中心',
        region: '南部',
        address: '台南市東區中華東路一段366號',
        shortDesc: '台南東區最大的複合式購物、娛樂與餐飲中心。',
        details: {
            opened: '2015年2月（A1館）、2020年12月（A2館）',
            history: '由台南紡織舊廠區開發而來，結合老爺行旅與威秀影城，為台南市民帶來全新的Mall型態購物體驗。',
            status: '深受在地家庭客與年輕人喜愛，餐飲佔比高，集客力強。',
            anchorStores: 'ZARA、威秀影城、新天地餐飲、UNIQLO',
            building: '分為 A1 館（地上6層）與 A2 館（地上9層），兩館之間有空橋連通。',
            parking: '汽車 2,000 席 / 機車 3,000 席',
            transport: '鄰近大灣交流道；大眾運輸主要仰賴市區公車或自行開車。未來鄰近捷運平實轉運站。',
            future: '周邊平實營區重劃區持續發展，未來將成為台南東區核心商圈。'
        }
    },
    {
        id: 'm7',
        category: 'mall',
        name: ' Mitsui Shopping Park LaLaport 台中',
        typeLabel: '大型購物中心',
        region: '中部',
        address: '台中市東區進德路600號',
        shortDesc: '日系三井集團在台首座 LaLaport，提供全客層購物樂趣。',
        details: {
            opened: '2023年1月（南館）、5月（北館）',
            history: '原為台糖台中廠區（帝國製糖廠周邊），三井集團得標後打造大型區域型購物中心，帶動台中東區復甦。',
            status: '集結眾多日系初出店與大型生鮮超市，假日親子客群眾多。',
            anchorStores: 'LOPIA超市、UNIQLO、GU、MUJI、DON DON DONKI、台隆手創館',
            building: '分為南館（地上4層）與北館（地上7層），以天橋串聯。',
            parking: '汽車 1,900 席 / 機車 3,500 席',
            transport: '台鐵台中站（東站）步行約6分鐘。',
            future: '結合周邊帝國糖廠湖濱生態園區，打造東區休憩新聚落。'
        }
    },
    {
        id: 'm8',
        category: 'mall',
        name: 'MITSUI OUTLET PARK 台中港',
        typeLabel: '暢貨中心 (Outlet)',
        region: '中部',
        address: '台中市梧棲區臺灣大道十段168號',
        shortDesc: '台灣首座海港型購物中心，擁抱無敵海景與摩天輪。',
        details: {
            opened: '2018年12月',
            history: '三井不動產在台灣的第二個Outlet計畫，選址於台中港特定區，成功將人潮引入海線地區。',
            status: '結合海景、摩天輪與多樣化日系餐飲，成為中部沿海最具代表性的休閒景點。',
            anchorStores: '台中之星摩天輪、誠品生活、SNOW PEAK、各國際運動品牌',
            building: '開放式單層/雙層街區設計，並設有室內商場區。',
            parking: '汽車 3,400 席（免費停車）',
            transport: '高鐵台中站或台鐵台中站轉乘公車；主要仰賴自行開車（鄰近西濱快速道路）。',
            future: '持續擴建二期工程，引入更多娛樂設施與品牌。'
        }
    },
    {
        id: 'm9',
        category: 'mall',
        name: '比漾廣場 Beyond Plaza',
        typeLabel: '社區型商場',
        region: '北部',
        address: '新北市永和區中山路一段238號',
        shortDesc: '深耕雙和地區的精緻社區型百貨，著重在地生活連結。',
        details: {
            opened: '2014年6月（前身為2000年的太平洋百貨雙和店）',
            history: '原為太平洋百貨，後由東家機構接手並更名為比漾廣場。近年積極轉型，引入喜樂時代影城與文創元素。',
            status: '雙和地區居民日常休閒、聚餐、看電影的首選之地。',
            anchorStores: '喜樂時代影城、UNIQLO、藏壽司、無印良品',
            building: '地上9層，地下2層。',
            parking: '汽車約 300 席 / 機車約 400 席',
            transport: '捷運頂溪站轉乘接駁車或步行約15分鐘。',
            future: '持續優化會員服務與社區營造，打造「社區的客廳」。'
        }
    },

    // --- 電影院 / 影城 ---
    {
        id: 'c1',
        category: 'cinema',
        name: 'MUVIE CINEMAS (威秀影城頂級品牌)',
        typeLabel: '頂級影城',
        region: '北部',
        address: '台北市信義區松仁路58號10樓 (遠百信義A13)',
        shortDesc: '威秀影城最頂級品牌，擁有 TITAN 巨幕影廳與 MUCROWN 頂級影廳。',
        details: {
            opened: '2019年12月',
            history: '隨著遠百信義A13落成而開幕，為威秀影城針對高端客群打造的全新品牌，全面採用 THX 認證標準。',
            status: '台北信義區最頂級的觀影體驗地，TITAN 廳常作為電影首映會場地。',
            anchorStores: 'TITAN 巨幕影廳、MUCROWN 頂級餐飲影廳',
            building: '位於遠百信義A13的10至13樓，共8個影廳，1,144個座位。',
            parking: '與遠百信義A13共用停車場。',
            transport: '捷運板南線「市政府站」或象山線「象山站」步行抵達。',
            future: '持續引進最新放映技術，維持全台最頂級影城地位。'
        }
    },
    {
        id: 'c2',
        category: 'cinema',
        name: '國賓大戲院 (西門町)',
        typeLabel: '大型影城',
        region: '北部',
        address: '台北市萬華區成都路88號',
        shortDesc: '台灣歷史悠久的傳奇影城，擁有全台最大的單一巨幕影廳之一。',
        details: {
            opened: '1965年',
            history: '台灣電影史上的重要地標，歷經多次改裝。曾擁有全台最大的銀幕，並多次率先引進最新音效技術（如杜比全景聲）。',
            status: '西門町電影街的指標，其「大廳」依然是許多影迷看大片的朝聖地。',
            anchorStores: '1廳（巨幕大廳，近千座位）',
            building: '獨立電影院建築，共3個影廳。',
            parking: '周邊有峨眉立體停車場等付費停車場，無附屬停車場。',
            transport: '捷運板南線/松山新店線「西門站」6號出口步行約5分鐘。',
            future: '面臨連鎖影城競爭，持續以巨幕大廳的極致聲光效果吸引死忠影迷。'
        }
    },
    {
        id: 'c3',
        category: 'cinema',
        name: '光點台北 (台北之家)',
        typeLabel: '獨立/藝術電影院',
        region: '北部',
        address: '台北市中山區中山北路二段18號',
        shortDesc: '前美國大使官邸改建，專放映藝術電影的文化沙龍。',
        details: {
            opened: '2002年11月',
            history: '建築原為日治時期的美國駐台北領事館，後為大使官邸。荒廢多年後，由台積電文教基金會贊助修復，由侯孝賢導演的台灣電影文化協會經營。',
            status: '台北最具氣質的藝術電影院，結合光點電影院、誠品書店、咖啡廳與庭園。',
            anchorStores: '光點電影院（單廳，83席）、光點咖啡時光',
            building: '兩層樓洋式歷史建築與庭園。',
            parking: '無附屬停車場，周邊有收費停車場。',
            transport: '捷運淡水信義線/松山新店線「中山站」步行約3分鐘。',
            future: '持續推廣國內外獨立製片與藝術電影，舉辦各式主題影展。'
        }
    },
    {
        id: 'c4',
        category: 'cinema',
        name: '台南全美戲院',
        typeLabel: '獨立/二輪電影院',
        region: '南部',
        address: '台南市中西區永福路二段187號',
        shortDesc: '國際大導李安的電影啟蒙地，堅持手繪電影看板的文化瑰寶。',
        details: {
            opened: '1950年（前身為第一全美戲院）',
            history: '台南歷史悠久的戲院，經歷時代變遷轉型為二輪戲院。最大特色是至今仍由國寶級畫師顏振發師傅手繪電影看板。',
            status: '雖然是老戲院，但充滿復古情懷，吸引許多年輕人與觀光客朝聖。提供平價的二輪電影觀賞。',
            anchorStores: '手繪電影看板外觀、兩廳院放映室',
            building: '傳統連棟式建築，內部保留早期戲院格局。',
            parking: '無附屬停車場，位於赤崁樓商圈周邊巷道，停車較不便。',
            transport: '台南火車站轉乘市區公車至「赤崁樓」站步行抵達。',
            future: '面臨時代考驗，正努力轉型結合文創與歷史導覽，傳承手繪看板技藝。'
        }
    },
    {
        id: 'c5',
        category: 'cinema',
        name: '台中新光影城',
        typeLabel: '大型連鎖影城',
        region: '中部',
        address: '台中市西屯區台灣大道三段301號13樓 (新光三越台中中港店)',
        shortDesc: '首創引進 B.O.X. 特色影廳，結合動漫與奢華體驗。',
        details: {
            opened: '2000年開幕（近年大幅改裝）',
            history: '位於全台店王新光三越台中中港店內，近年斥資改裝，推出全球首見的ACG動漫影廳及與席伊麗名床合作的臥榻影廳。',
            status: '中部熱門影城之一，特色影廳極具話題性，經常滿座。',
            anchorStores: 'MX4D 影廳、Dolby Cinema、B.O.X. ACG 動漫廳、B.O.X. Sealy 席伊麗廳',
            building: '位於百貨公司13至14樓，共8個影廳。',
            parking: '與新光三越百貨共用停車場。',
            transport: '台灣大道幹線公車「新光/遠百」站下車即達。',
            future: '不斷創新觀影體驗，打造電影與生活風格結合的娛樂場域。'
        }
    },
    {
        id: 'c6',
        category: 'cinema',
        name: '花蓮秀泰影城',
        typeLabel: '中型連鎖影城',
        region: '東部',
        address: '花蓮縣花蓮市國聯五路58號',
        shortDesc: '東部地區最現代化的影城，帶給花蓮民眾頂級視覺享受。',
        details: {
            opened: '2016年',
            history: '秀泰集團進軍東台灣的重要據點，為花蓮引入首個具備精品級裝潢與先進放映設備的現代化連鎖影城。',
            status: '花蓮居民觀賞首輪大片的首選之地，假日人潮眾多。',
            anchorStores: '獨家設計的巨幕廳與舒適的商務艙座椅',
            building: '獨立商場建築，結合部分餐飲與休閒服飾品牌。',
            parking: '提供專屬戶外停車場。',
            transport: '距離花蓮火車站步行約 10 分鐘，交通十分便利。',
            future: '持續服務東部民眾，提供與都會區零時差的電影娛樂。'
        }
    }
];
