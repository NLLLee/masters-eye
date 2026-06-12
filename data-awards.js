// ============================================================
// 年度大奖时间轴 · 1990–2026
// 真实获奖记录：世界新闻摄影奖（年度照片，按拍摄年份索引）、
// 野生动物年度摄影师（年度总冠军）、Sony 世界摄影奖（年度摄影师）、
// 哈苏国际摄影奖（年度得主）
// 空缺年份 = 尚未核实或奖项未设立，宁缺毋错。
// ============================================================

window.AWARDS_META = {
  wpp:  { name: '世界新闻摄影奖 · 年度照片', short: 'World Press Photo', cat: '人文纪实', palette: ['#26242a', '#6a6468', '#cfc8bc'] },
  wpy:  { name: '野生动物年度摄影师 · 年度总冠军', short: 'Wildlife Photographer of the Year', cat: '野生动物', palette: ['#22301e', '#4e6a3e', '#b8c89a'] },
  sony: { name: 'Sony 世界摄影奖 · 年度摄影师', short: 'Sony World Photography Awards', cat: '综合 / 纪实', palette: ['#1a2230', '#3e5570', '#aac4dc'] },
  hass: { name: '哈苏国际摄影奖', short: 'Hasselblad Award', cat: '终身艺术成就', palette: ['#2a2620', '#6e6044', '#d8c8a0'] },
  hm:   { name: '哈苏大师赛', short: 'Hasselblad Masters', cat: '商业与艺术 · 多类别', palette: ['#1c1c1a', '#54504a', '#d8d0c0'] },
  canon:{ name: '佳能 · 写真新世纪', short: 'New Cosmos of Photography', cat: '新锐 / 实验影像', palette: ['#3a1014', '#8a2630', '#e8c0c0'] },
  nikonpc: { name: '尼康国际摄影大赛', short: 'Nikon Photo Contest', cat: '综合', palette: ['#2a2410', '#6a5a18', '#f0d860'] },
  fuji: { name: '富士 GFX 挑战资助计划', short: 'FUJIFILM GFX Challenge', cat: '创作资助', palette: ['#0e2418', '#1e5a3a', '#a8d8b8'] },
};

window.AWARDS = [

// ───── 世界新闻摄影奖 · 年度照片（1990–2024，按拍摄年份） ─────
{ year: 1990, award: 'wpp', title: '科索沃守灵', titleEn: 'Nagafc Vigil', photographer: '乔治·梅里永', photographerEn: 'Georges Mérillon', note: '死于警察枪下的青年灵前，妇女们围床恸哭——构图与悲恸如古典宗教画，被称为"科索沃圣母怜子图"。', query: 'Georges Merillon World Press Photo 1990 Kosovo vigil' },
{ year: 1991, award: 'wpp', title: '战友之死', photographer: '大卫·特恩利', photographerEn: 'David Turnley', note: '海湾战争，后送直升机上的美军士兵得知袋中遗体是挚友时失声痛哭。', query: 'David Turnley World Press Photo 1991 Gulf War crying soldier' },
{ year: 1992, award: 'wpp', title: '索马里饥荒', photographer: '詹姆斯·纳赫特韦', photographerEn: 'James Nachtwey', note: '索马里大饥荒中，母亲抱起裹尸布中的孩子准备下葬。', query: 'James Nachtwey World Press Photo 1992 Somalia famine' },
{ year: 1993, award: 'wpp', title: '加沙的男孩们', photographer: '拉里·托维尔', photographerEn: 'Larry Towell', note: '加沙地带，男孩们举起玩具枪向镜头宣示——战争如何提前结束童年。', query: 'Larry Towell World Press Photo 1993 Gaza boys toy guns' },
{ year: 1994, award: 'wpp', title: '卢旺达幸存者', photographer: '詹姆斯·纳赫特韦', photographerEn: 'James Nachtwey', note: '卢旺达大屠杀，脸上留着深深砍刀疤痕的胡图族幸存者侧面像。', query: 'James Nachtwey World Press Photo 1994 Rwanda machete scars' },
{ year: 1995, award: 'wpp', title: '格罗兹尼巴士', photographer: '卢西恩·珀金斯', photographerEn: 'Lucian Perkins', note: '车臣战争，撤离格罗兹尼的巴士后窗里，男孩的手与凝视。', query: 'Lucian Perkins World Press Photo 1995 Chechnya bus' },
{ year: 1996, award: 'wpp', title: '库伊托的孩子', photographer: '弗朗切斯科·齐佐拉', photographerEn: 'Francesco Zizola', note: '安哥拉库伊托——全球地雷最密集的城市之一，孤儿院孩子们的群像。', query: 'Francesco Zizola World Press Photo 1996 Angola Kuito children' },
{ year: 1997, award: 'wpp', title: '阿尔及利亚圣母', photographer: '霍辛·扎乌拉尔', photographerEn: 'Hocine Zaourar', note: '本塔勒哈屠杀翌日，医院墙外恸哭的女人——头巾与悲恸令世界想起圣母像。', query: 'Hocine Zaourar Madonna of Bentalha World Press Photo 1997' },
{ year: 1998, award: 'wpp', title: '遗孀', photographer: '戴娜·史密斯', photographerEn: 'Dayna Smith', note: '科索沃，丈夫葬礼上的遗孀被亲友的手层层环抱——悲伤与支撑同框。', query: 'Dayna Smith World Press Photo 1998 Kosovo widow' },
{ year: 1999, award: 'wpp', title: '科索沃难民', photographer: '克劳斯·比约恩·拉森', photographerEn: 'Claus Bjørn Larsen', note: '马其顿边境，头缠绷带的男子在难民人流中走向镜头，目光空茫。', query: 'Claus Bjorn Larsen World Press Photo 1999 Kosovo refugee' },
{ year: 2000, award: 'wpp', title: '未被统计的人', photographer: '劳拉·乔·里根', photographerEn: 'Lara Jo Regan', note: '美国人口普查遗漏的人们：得州移民家庭在自家客厅，闪光灯下的尊严。', query: 'Lara Jo Regan World Press Photo 2000 uncounted Americans' },
{ year: 2001, award: 'wpp', title: '葬礼前', photographer: '埃里克·雷夫纳', photographerEn: 'Erik Refner', note: '巴基斯坦难民营，夭折的阿富汗婴儿在下葬前被净身——白布与稚小身躯，安静得震耳欲聋。', query: 'Erik Refner World Press Photo 2001 Afghan boy burial' },
{ year: 2002, award: 'wpp', title: '地震孤儿', photographer: '埃里克·格里高利安', photographerEn: 'Eric Grigorian', note: '伊朗地震后，男孩捧着父亲的裤子蹲在新坟旁——遗物比尸骸更刺痛。', query: 'Eric Grigorian World Press Photo 2002 Iran earthquake boy' },
{ year: 2003, award: 'wpp', title: '铁丝网内的父子', photographer: '让-马克·布茹', photographerEn: 'Jean-Marc Bouju', note: '伊拉克战俘营，头戴黑袋的父亲隔着铁丝网安抚怀中的幼子。', query: 'Jean-Marc Bouju World Press Photo 2003 Iraq POW father son' },
{ year: 2004, award: 'wpp', title: '海啸之恸', photographer: '阿尔科·达塔', photographerEn: 'Arko Datta', note: '印度洋海啸后，泰米尔纳德邦的妇人向遇难亲人伸出双手恸哭。', query: 'Arko Datta World Press Photo 2004 tsunami India mourning' },
{ year: 2005, award: 'wpp', title: '母亲的唇与孩子的手', photographer: '芬巴尔·奥赖利', photographerEn: 'Finbarr O\'Reilly', note: '尼日尔饥荒，营养不良孩子瘦小的手指贴在母亲唇边——饥饿的全部重量落在几厘米的皮肤上。', query: 'Finbarr O\'Reilly World Press Photo 2005 Niger famine' },
{ year: 2006, award: 'wpp', title: '贝鲁特废墟兜风', photographer: '斯宾塞·普拉特', photographerEn: 'Spencer Platt', note: '黎巴嫩停火翌日，年轻人驾红色敞篷车驶过轰炸废墟——战争与日常的并置刺痛了所有人。', query: 'Spencer Platt World Press Photo 2006 Beirut car' },
{ year: 2007, award: 'wpp', title: '疲惫的士兵', photographer: '蒂姆·赫瑟林顿', photographerEn: 'Tim Hetherington', note: '阿富汗科伦加尔山谷，美军士兵靠在掩体上抹脸——整场战争的疲惫浓缩在一个手势里。', query: 'Tim Hetherington World Press Photo 2007 exhausted soldier Afghanistan' },
{ year: 2008, award: 'wpp', title: '法拍屋', photographer: '安东尼·苏奥', photographerEn: 'Anthony Suau', note: '金融危机：俄亥俄州，警长持枪清查被法拍的住宅——次贷废墟如战场。', query: 'Anthony Suau World Press Photo 2008 foreclosure Cleveland' },
{ year: 2009, award: 'wpp', title: '德黑兰屋顶', photographer: '彼得罗·马斯图尔佐', photographerEn: 'Pietro Masturzo', note: '大选后的德黑兰，女人们在夜晚的屋顶向城市呐喊抗议——声音被拍了下来。', query: 'Pietro Masturzo World Press Photo 2009 Tehran rooftops' },
{ year: 2010, award: 'wpp', title: '比比·艾莎', photographer: '乔迪·比伯', photographerEn: 'Jodi Bieber', note: '被割去鼻耳的阿富汗少女比比·艾莎的正面肖像——她直视镜头的平静比伤痕更有力量。', query: 'Jodi Bieber Bibi Aisha World Press Photo 2010' },
{ year: 2011, award: 'wpp', title: '也门圣母', photographer: '萨穆埃尔·阿兰达', photographerEn: 'Samuel Aranda', note: '萨那清真寺改成的野战医院里，戴面纱的母亲怀抱中毒受伤的儿子——现代的圣母怜子像。', query: 'Samuel Aranda World Press Photo 2011 Yemen mother' },
{ year: 2012, award: 'wpp', title: '加沙葬礼', photographer: '保罗·汉森', photographerEn: 'Paul Hansen', note: '加沙城窄巷，亲属们抱着两个遇难孩子的遗体走向墓地，巷道的光如舞台。', query: 'Paul Hansen World Press Photo 2012 Gaza burial' },
{ year: 2013, award: 'wpp', title: '信号', photographer: '约翰·斯坦迈尔', photographerEn: 'John Stanmeyer', note: '吉布提海滩的夜，非洲移民们举起手机捕捉索马里的微弱信号——乡愁有了具体的姿势。', query: 'John Stanmeyer Signal World Press Photo 2013 Djibouti' },
{ year: 2014, award: 'wpp', title: '乔恩与亚历克斯', photographer: '马斯·尼森', photographerEn: 'Mads Nissen', note: '圣彼得堡，一对同性恋人的私密时刻——在俄罗斯反 LGBT 立法背景下，温柔即是抗争。', query: 'Mads Nissen Jon and Alex World Press Photo 2014' },
{ year: 2015, award: 'wpp', title: '新生活的希望', photographer: '沃伦·理查德森', photographerEn: 'Warren Richardson', note: '塞尔维亚-匈牙利边境的月夜，铁丝网下传递婴儿的手——颗粒粗糙的黑白反而像历史本身。', query: 'Warren Richardson Hope for a New Life World Press Photo 2015' },
{ year: 2016, award: 'wpp', title: '安卡拉刺杀', photographer: '布尔汉·奥兹比利奇', photographerEn: 'Burhan Ozbilici', note: '安卡拉美术馆，刺杀俄罗斯大使后持枪嘶吼的枪手——摄影师在枪口余威中按下快门。', query: 'Burhan Ozbilici World Press Photo 2016 Ankara assassination' },
{ year: 2017, award: 'wpp', title: '燃烧的抗议者', photographer: '罗纳尔多·施密特', photographerEn: 'Ronaldo Schemidt', note: '委内瑞拉反政府冲突，全身着火奔跑的蒙面青年——背后墙上恰好涂着一支手枪。', query: 'Ronaldo Schemidt World Press Photo 2017 Venezuela burning man' },
{ year: 2018, award: 'wpp', title: '边境哭泣的女孩', photographer: '约翰·摩尔', photographerEn: 'John Moore', note: '美墨边境，母亲被搜身的瞬间，洪都拉斯小女孩仰头大哭——"骨肉分离"政策最著名的注脚。', query: 'John Moore crying girl border World Press Photo 2018' },
{ year: 2019, award: 'wpp', title: '直言', photographer: '千叶康由', photographerEn: 'Yasuyoshi Chiba', note: '喀土穆停电的夜，青年在手机灯光的环绕中朗诵抗议诗——革命被拍成了诗歌朗诵会。', query: 'Yasuyoshi Chiba Straight Voice World Press Photo 2019 Sudan' },
{ year: 2020, award: 'wpp', title: '第一个拥抱', photographer: '马斯·尼森', photographerEn: 'Mads Nissen', note: '巴西养老院，隔离五个月后隔着透明"拥抱帘"的第一个拥抱（馆藏「大师精选」有详解）。', query: 'Mads Nissen The First Embrace World Press Photo 2021' },
{ year: 2021, award: 'wpp', title: '坎卢普斯居民学校', photographer: '安布尔·布拉肯', photographerEn: 'Amber Bracken', note: '加拿大原住民寄宿学校旧址，公路边为 215 个孩子立起的红裙与十字架——没有人物的年度照片。', query: 'Amber Bracken Kamloops World Press Photo 2021' },
{ year: 2022, award: 'wpp', title: '马里乌波尔空袭', photographer: '叶夫根尼·马洛列特卡', photographerEn: 'Evgeniy Maloletka', note: '马里乌波尔妇产医院遭空袭，担架上的孕妇抚着腹部——母子后均不治。', query: 'Evgeniy Maloletka Mariupol maternity hospital World Press Photo' },
{ year: 2023, award: 'wpp', title: '加沙的拥抱', photographer: '穆罕默德·萨利姆', photographerEn: 'Mohammed Salem', note: '加沙太平间，伊纳斯蜷身怀抱遇难侄女的白布遗体——画面只有怀抱，没有面孔。', query: 'Mohammed Salem World Press Photo 2023 Gaza embrace' },
{ year: 2024, award: 'wpp', title: '九岁的马哈茂德', photographer: '萨玛尔·阿布·埃卢夫', photographerEn: 'Samar Abu Elouf', note: '在加沙空袭中失去双臂的九岁男孩马哈茂德的窗光肖像——平静的注视胜过一切控诉。', query: 'Samar Abu Elouf Mahmoud Ajjour World Press Photo 2024' },

// ───── 野生动物年度摄影师 · 年度总冠军（2005 起） ─────
{ year: 2005, award: 'wpy', title: '天空追猎', titleEn: 'Sky Chase', photographer: '曼努埃尔·普雷斯蒂', photographerEn: 'Manuel Presti', note: '罗马上空，椋鸟群在游隼追击下瞬间扭成一团黑云——群体的恐惧拥有形状。', query: 'Manuel Presti Sky Chase Wildlife Photographer of the Year 2005' },
{ year: 2006, award: 'wpy', title: '海底觅食的海象', photographer: '约兰·埃尔梅', photographerEn: 'Göran Ehlmé', note: '格陵兰冰海之下，海象俯身搅起沉积物觅食——巨兽与尘云如水下风暴。', query: 'Goran Ehlme walrus Wildlife Photographer of the Year 2006' },
{ year: 2007, award: 'wpy', title: '象群涉水', photographer: '本·奥斯本', photographerEn: 'Ben Osborne', note: '博茨瓦纳乔贝河，大象冲入水中扬起的水花与泥浪——力量在飞溅中显形。', query: 'Ben Osborne elephant Chobe Wildlife Photographer of the Year 2007' },
{ year: 2008, award: 'wpy', title: '风雪雪豹', photographer: '史蒂夫·温特', photographerEn: 'Steve Winter', note: '印度喜马拉雅，红外触发相机拍下风雪夜独行的雪豹——隐士第一次被正面看见。', query: 'Steve Winter snow leopard Wildlife Photographer of the Year 2008' },
{ year: 2010, award: 'wpy', title: '蚂蚁的奇迹', photographer: '本采·马泰', photographerEn: 'Bence Máté', note: '哥斯达黎加，逆光下切叶蚁举着叶片列队过枝——微距里的史诗行军。', query: 'Bence Mate A Marvel of Ants Wildlife Photographer of the Year 2010' },
{ year: 2011, award: 'wpy', title: '油中静物', photographer: '丹尼尔·贝尔特拉', photographerEn: 'Daniel Beltrá', note: '墨西哥湾漏油事故，八只浸满原油的褐鹈鹕挤在白布上——环境灾难拍成了荷兰静物画。', query: 'Daniel Beltra Still Life in Oil pelicans Wildlife Photographer 2011' },
{ year: 2012, award: 'wpy', title: '喷射气泡的帝企鹅', photographer: '保罗·尼克伦', photographerEn: 'Paul Nicklen', note: '南极罗斯海，帝企鹅群拖着银色气泡冲向冰面出口——速度第一次有了颜色。', query: 'Paul Nicklen Bubble-jetting emperors Wildlife Photographer 2012' },
{ year: 2013, award: 'wpy', title: '大象的精髓', photographer: '格雷格·杜托伊特', photographerEn: 'Greg du Toit', note: '博茨瓦纳水坑边，低角度蓝调中的象群剪影——把大象拍出了山脉的体量。', query: 'Greg du Toit Essence of Elephants Wildlife Photographer 2013' },
{ year: 2014, award: 'wpy', title: '最后的大照片', photographer: '迈克尔·尼科尔斯', photographerEn: 'Michael "Nick" Nichols', note: '塞伦盖蒂，午憩的狮群黑白长卷——红外黑白把猛兽拍成了古典群像。', query: 'Nick Nichols The Last Great Picture lions Wildlife Photographer 2014' },
{ year: 2015, award: 'wpy', title: '狐之战', titleEn: 'A Tale of Two Foxes', photographer: '唐·古托斯基', photographerEn: 'Don Gutoski', note: '加拿大瓦普斯克，红狐叼起猎杀的北极狐——气候变暖让两个物种的领地相撞，一张照片讲完。', query: 'Don Gutoski Tale of Two Foxes Wildlife Photographer 2015' },
{ year: 2016, award: 'wpy', title: '缠绕的生命', photographer: '蒂姆·拉曼', photographerEn: 'Tim Laman', note: '婆罗洲雨林，红毛猩猩攀上巨树的俯拍（馆藏「大师精选」有详解）。', query: 'Tim Laman Entwined Lives Wildlife Photographer 2016' },
{ year: 2017, award: 'wpy', title: '犀牛纪念像', photographer: '布伦特·斯特顿', photographerEn: 'Brent Stirton', note: '南非，被盗猎割角的黑犀牛尸体如倒下的纪念碑——年度大奖第一次颁给一桩罪案现场。', query: 'Brent Stirton Memorial to a Species Wildlife Photographer 2017' },
{ year: 2019, award: 'wpy', title: '生死对决', titleEn: 'The Moment', photographer: '鲍永清', photographerEn: 'Yongqing Bao', note: '青海祁连山，旱獭直立惊对扑来的藏狐——中国摄影师首夺 WPY 年度总冠军。', query: 'Yongqing Bao The Moment marmot fox Wildlife Photographer 2019' },
{ year: 2018, award: 'wpy', title: '金色搭档', photographer: '马塞尔·范奥斯滕', photographerEn: 'Marsel van Oosten', note: '秦岭川金丝猴（馆藏「大师精选」有详解）。', query: 'Marsel van Oosten Golden Couple Wildlife Photographer 2018' },
{ year: 2020, award: 'wpy', title: '拥抱', photographer: '谢尔盖·戈尔什科夫', photographerEn: 'Sergey Gorshkov', note: '西伯利亚雌虎环抱冷杉（馆藏「大师精选」有详解）。', query: 'Sergey Gorshkov The Embrace Wildlife Photographer 2020' },
{ year: 2021, award: 'wpy', title: '创造', titleEn: 'Creation', photographer: '洛朗·巴莱斯塔', photographerEn: 'Laurent Ballesta', note: '法卡拉瓦环礁的月圆夜，石斑鱼产卵的乳白云团瞬间爆发——生命起源的形状。', query: 'Laurent Ballesta Creation grouper Wildlife Photographer 2021' },
{ year: 2022, award: 'wpy', title: '大蜂球', titleEn: 'The Big Buzz', photographer: '卡琳·艾格纳', photographerEn: 'Karine Aigner', note: '得州沙地，仙人掌蜂求偶滚成的"蜂球"特写——微距把昆虫剧拍成了体育摄影。', query: 'Karine Aigner The Big Buzz bees Wildlife Photographer 2022' },
{ year: 2023, award: 'wpy', title: '黄金鲎', photographer: '洛朗·巴莱斯塔', photographerEn: 'Laurent Ballesta', note: '三亿年未变的鲎驮着三条金鲹在夜海巡游——活化石加冕的一刻。', query: 'Laurent Ballesta horseshoe crab Wildlife Photographer 2023' },
{ year: 2024, award: 'wpy', title: '生命之群', photographer: '谢恩·格罗斯', photographerEn: 'Shane Gross', note: '温哥华岛湖底的蝌蚪星河（馆藏「大师精选」有详解）。', query: 'Shane Gross Swarm of Life Wildlife Photographer 2024' },

// ───── Sony 世界摄影奖 · 年度摄影师（2008 创办） ─────
{ year: 2008, award: 'sony', title: '黑海边', titleEn: 'Sketches of a Border', photographer: '凡妮莎·温希普', photographerEn: 'Vanessa Winship', note: '土耳其东部边境乡村，穿同款蓝裙的女学生们站在原野上——制服与旷野，少女与边境。', query: 'Vanessa Winship Sony World Photography Awards 2008 schoolgirls' },
{ year: 2013, award: 'sony', title: '一天在历史中', titleEn: 'One Day in History', photographer: '安德烈娅·耶斯特旺', photographerEn: 'Andrea Gjestvang', note: '于特岛枪击案幸存少年的肖像——伤痕之外，更难拍的是幸存本身。', query: 'Andrea Gjestvang One Day in History Utoya Sony Photographer of the Year 2013' },
{ year: 2014, award: 'sony', title: '肖恩与玛吉', photographer: '萨拉·娜奥米·卢科维茨', photographerEn: 'Sara Naomi Lewkowicz', note: '一段家暴关系内部的长期跟拍——摄影师在场的伦理争议本身成为教材。', query: 'Sara Naomi Lewkowicz Shane and Maggie Sony World Photography Awards' },
{ year: 2016, award: 'sony', title: '火之恨', titleEn: 'Fire of Hatred', photographer: '阿斯加尔·哈姆塞', photographerEn: 'Asghar Khamseh', note: '伊朗泼酸暴力幸存者的正面肖像——直视镜头的尊严对抗毁容的暴力。', query: 'Asghar Khamseh Fire of Hatred Sony Photographer of the Year 2016' },
{ year: 2017, award: 'sony', title: '白茫', titleEn: 'Whiteout', photographer: '弗雷德里克·拜克斯', photographerEn: 'Frederik Buyckx', note: '吉尔吉斯山区雪原中的人与马（馆藏「大师精选」有详解）。', query: 'Frederik Buyckx Whiteout Sony Photographer of the Year 2017' },
{ year: 2018, award: 'sony', title: '还愿', titleEn: 'Ex-Voto', photographer: '艾丽斯·汤姆林森', photographerEn: 'Alys Tomlinson', note: '欧洲朝圣地的大画幅黑白：朝圣者肖像与他们留下的还愿物——信仰的物证。', query: 'Alys Tomlinson Ex-Voto Sony Photographer of the Year 2018' },
{ year: 2019, award: 'sony', title: '五度', titleEn: 'Five Degrees', photographer: '费德里科·博雷拉', photographerEn: 'Federico Borella', note: '印度泰米尔纳德邦：干旱、债务与农民自杀的视觉调查——气候议题落到一张张遗像上。', query: 'Federico Borella Five Degrees Sony Photographer of the Year 2019' },
{ year: 2020, award: 'sony', title: '抵抗的种子', titleEn: 'Seeds of Resistance', photographer: '巴勃罗·阿尔瓦伦加', photographerEn: 'Pablo Albarenga', note: '无人机垂直俯拍：南美原住民守护者平躺，与他们守护的土地各占画面一半——构图即立场。', query: 'Pablo Albarenga Seeds of Resistance Sony Photographer of the Year 2020' },
{ year: 2021, award: 'sony', title: '班克顶', titleEn: 'Bank Top', photographer: '克雷格·伊斯顿', photographerEn: 'Craig Easton', note: '英国布莱克本社区的黑白群像（馆藏「大师精选」有详解）。', query: 'Craig Easton Bank Top Sony Photographer of the Year 2021' },
{ year: 2022, award: 'sony', title: 'Migrantes', photographer: '亚当·弗格森', photographerEn: 'Adam Ferguson', note: '美墨边境，等待越境的迁徙者自己按下快门线完成的自拍肖像——把"拍摄权"交还给被摄者。', query: 'Adam Ferguson Migrantes Sony Photographer of the Year 2022' },
{ year: 2023, award: 'sony', title: '我们的战争', titleEn: 'Our War', photographer: '埃德加·马丁斯', photographerEn: 'Edgar Martins', note: '为悼念在利比亚遇难的摄影师挚友，重走其路途完成的影像追思——纪实与哀悼的边界之作。', query: 'Edgar Martins Our War Sony Photographer of the Year 2023' },
{ year: 2024, award: 'sony', title: '螺旋运动', titleEn: 'Spiralkampagnen', photographer: '朱丽叶·帕维', photographerEn: 'Juliette Pavy', note: '丹麦当局在格陵兰强制避孕丑闻的视觉调查——档案、肖像与风景拼出一段被掩埋的历史。', query: 'Juliette Pavy Spiralkampagnen Sony Photographer of the Year 2024' },
{ year: 2025, award: 'sony', title: '人类世幻象', titleEn: 'The Anthropocene Illusion', photographer: '泽德·尼尔森', photographerEn: 'Zed Nelson', note: '动物园、主题公园、人造海滩——全球"人造自然"的冷峻考察：我们毁掉自然，再造一个布景怀念它。', query: 'Zed Nelson The Anthropocene Illusion Sony Photographer of the Year 2025' },

// ───── 哈苏国际摄影奖 · 年度得主（1990 起） ─────
{ year: 1990, award: 'hass', title: '哈苏奖得主', photographer: '威廉·克莱因', photographerEn: 'William Klein', note: '粗颗粒、广角、撞进人群——他同时颠覆了街头摄影与时尚摄影的语法。', query: 'William Klein photography' },
{ year: 1991, award: 'hass', title: '哈苏奖得主', photographer: '理查德·阿维顿', photographerEn: 'Richard Avedon', note: '从《多薇玛与大象》到《美国西部》，时尚与肖像两座高峰（馆藏「大师精选」有详解）。', query: 'Richard Avedon photography' },
{ year: 1992, award: 'hass', title: '哈苏奖得主', photographer: '约瑟夫·寇德卡', photographerEn: 'Josef Koudelka', note: '《吉普赛人》与《入侵布拉格》——流亡者之眼，黑白纪实的诗人。', query: 'Josef Koudelka Gypsies photography' },
{ year: 1993, award: 'hass', title: '哈苏奖得主', photographer: '苏内·扬松', photographerEn: 'Sune Jonsson', note: '数十年记录瑞典北部乡村的信仰与劳作——安静的地方志摄影典范。', query: 'Sune Jonsson photography' },
{ year: 1996, award: 'hass', title: '哈苏奖得主', photographer: '罗伯特·弗兰克', photographerEn: 'Robert Frank', note: '《美国人》以"错误"的构图与灰暗影调重写纪实语法——影响其后所有街头摄影。', query: 'Robert Frank The Americans photography' },
{ year: 1997, award: 'hass', title: '哈苏奖得主', photographer: '克里斯特·斯特伦霍尔姆', photographerEn: 'Christer Strömholm', note: '巴黎之夜的边缘人像《Les Amies de Place Blanche》——尊重先于快门。', query: 'Christer Stromholm Place Blanche photography' },
{ year: 1998, award: 'hass', title: '哈苏奖得主', photographer: '威廉·埃格尔斯顿', photographerEn: 'William Eggleston', note: '把彩色摄影第一次送进 MoMA——日常的天花板、三轮车与冷柜从此成为艺术。', query: 'William Eggleston color photography' },
{ year: 1999, award: 'hass', title: '哈苏奖得主', photographer: '辛迪·雪曼', photographerEn: 'Cindy Sherman', note: '《无题电影剧照》自导自演的身份实验（馆藏「大师精选」有详解）。', query: 'Cindy Sherman Untitled Film Stills' },
{ year: 2000, award: 'hass', title: '哈苏奖得主', photographer: '鲍里斯·米哈伊洛夫', photographerEn: 'Boris Mikhailov', note: '后苏联乌克兰的残酷与温柔——《Case History》直视社会废墟中的身体。', query: 'Boris Mikhailov Case History photography' },
{ year: 2001, award: 'hass', title: '哈苏奖得主', photographer: '杉本博司', photographerEn: 'Hiroshi Sugimoto', note: '《海景》《剧场》——用大画幅与长曝光拍摄时间本身（馆藏「大师精选」有详解）。', query: 'Hiroshi Sugimoto Seascapes Theaters' },
{ year: 2002, award: 'hass', title: '哈苏奖得主', photographer: '杰夫·沃尔', photographerEn: 'Jeff Wall', note: '灯箱装置与"建造的瞬间"（馆藏「大师精选」有详解）。', query: 'Jeff Wall photography lightbox' },
{ year: 2003, award: 'hass', title: '哈苏奖得主', photographer: '马利克·西迪贝', photographerEn: 'Malick Sidibé', note: '巴马科的舞夜——独立年代马里青年的快乐被他全部拍下。', query: 'Malick Sidibe Bamako photography' },
{ year: 2004, award: 'hass', title: '哈苏奖得主', photographer: '贝歇夫妇', photographerEn: 'Bernd & Hilla Becher', note: '水塔、高炉、矿井架的正面类型学——杜塞尔多夫学派之源。', query: 'Bernd Hilla Becher water towers typology' },
{ year: 2005, award: 'hass', title: '哈苏奖得主', photographer: '李·弗里德兰德', photographerEn: 'Lee Friedlander', note: '橱窗反光、电线杆、自己的影子——"社会景观"摄影的集大成者。', query: 'Lee Friedlander photography' },
{ year: 2006, award: 'hass', title: '哈苏奖得主', photographer: '大卫·戈德布拉特', photographerEn: 'David Goldblatt', note: '不拍冲突拍结构——种族隔离如何写进南非的建筑、土地与日常。', query: 'David Goldblatt South Africa photography' },
{ year: 2007, award: 'hass', title: '哈苏奖得主', photographer: '南·戈尔丁', photographerEn: 'Nan Goldin', note: '《性依赖的叙事曲》——闪光灯下的爱与伤痕，私摄影的圣经。', query: 'Nan Goldin Ballad of Sexual Dependency' },
{ year: 2008, award: 'hass', title: '哈苏奖得主', photographer: '格拉谢拉·伊图尔维德', photographerEn: 'Graciela Iturbide', note: '墨西哥的神话与日常——《我们的鸟夫人》头顶鬣蜥的女人成为一个民族的图腾。', query: 'Graciela Iturbide Our Lady of the Iguanas' },
{ year: 2009, award: 'hass', title: '哈苏奖得主', photographer: '罗伯特·亚当斯', photographerEn: 'Robert Adams', note: '"新地形学"代表——科罗拉多新建郊区的平淡风景里藏着环境之问。', query: 'Robert Adams New Topographics photography' },
{ year: 2010, award: 'hass', title: '哈苏奖得主', photographer: '索菲·卡尔', photographerEn: 'Sophie Calle', note: '跟踪、旅馆、分手信——把私人生活做成观念艺术的法国女王。', query: 'Sophie Calle conceptual photography' },
{ year: 2011, award: 'hass', title: '哈苏奖得主', photographer: '瓦利德·拉德', photographerEn: 'Walid Raad', note: '虚构档案馆"The Atlas Group"——用伪档案逼问黎巴嫩内战的记忆真伪。', query: 'Walid Raad Atlas Group' },
{ year: 2012, award: 'hass', title: '哈苏奖得主', photographer: '保罗·格雷厄姆', photographerEn: 'Paul Graham', note: '《A1 公路》到《美国速记》——把彩色纪实从"决定性瞬间"里解放出来。', query: 'Paul Graham photography A1' },
{ year: 2013, award: 'hass', title: '哈苏奖得主', photographer: '琼·方库贝尔塔', photographerEn: 'Joan Fontcuberta', note: '假苏联宇航员、假动物标本——用精致骗局教世界怀疑照片。', query: 'Joan Fontcuberta Sputnik photography' },
{ year: 2014, award: 'hass', title: '哈苏奖得主', photographer: '石内都', photographerEn: 'Miyako Ishiuchi', note: '母亲的旧口红、广岛遗物——皮肤与织物的肌理即时间的伤痕。', query: 'Miyako Ishiuchi Mother\'s Hiroshima photography' },
{ year: 2015, award: 'hass', title: '哈苏奖得主', photographer: '沃尔夫冈·提尔曼斯', photographerEn: 'Wolfgang Tillmans', note: '俱乐部、窗台水果、抽象暗房——当代生活的散文诗与展墙革命。', query: 'Wolfgang Tillmans photography' },
{ year: 2016, award: 'hass', title: '哈苏奖得主', photographer: '斯坦·道格拉斯', photographerEn: 'Stan Douglas', note: '电影级重建历史现场——温哥华暴动、爵士年代在摄影棚里复活。', query: 'Stan Douglas photography' },
{ year: 2017, award: 'hass', title: '哈苏奖得主', photographer: '里内克·迪克斯特拉', photographerEn: 'Rineke Dijkstra', note: '海滩少年系列——大画幅正面直拍青春期的脆弱站姿，肖像类型学的当代经典。', query: 'Rineke Dijkstra Beach Portraits' },
{ year: 2018, award: 'hass', title: '哈苏奖得主', photographer: '奥斯卡·穆尼奥斯', photographerEn: 'Oscar Muñoz', note: '用呼气显影、水中消散的肖像——影像的脆弱即记忆的脆弱。', query: 'Oscar Munoz artist photography' },
{ year: 2019, award: 'hass', title: '哈苏奖得主', photographer: '森山大道', photographerEn: 'Daido Moriyama', note: '高反差、粗颗粒、晃动失焦——"野犬"之眼撕开城市的欲望与孤独。', query: 'Daido Moriyama street photography' },
{ year: 2020, award: 'hass', title: '哈苏奖得主', photographer: '阿尔弗雷多·哈尔', photographerEn: 'Alfredo Jaar', note: '《卢旺达项目》《一百万张芬兰护照》——追问影像与权力关系的政治艺术家。', query: 'Alfredo Jaar Rwanda project' },
{ year: 2022, award: 'hass', title: '哈苏奖得主', photographer: '达雅妮塔·辛格', photographerEn: 'Dayanita Singh', note: '"移动博物馆"——把照片做成可重组的木结构装置，档案因此有了身体。', query: 'Dayanita Singh Museum Bhavan' },
{ year: 2023, award: 'hass', title: '哈苏奖得主', photographer: '卡丽·梅·威姆斯', photographerEn: 'Carrie Mae Weems', note: '《厨房桌系列》——一张桌子一盏灯，演完美国黑人女性的身份与尊严。', query: 'Carrie Mae Weems Kitchen Table Series' },

// ───── 哈苏大师赛 Hasselblad Masters（双年制，与哈苏国际摄影奖为两个奖项） ─────
{ year: 2026, award: 'hm', title: '哈苏大师赛 2026（进行中）', titleEn: 'Hasselblad Masters 2026', photographer: '70 位入围者 · 6月30日揭晓七位大师', photographerEn: 'Seventy Finalists', note: '正在进行：160+ 国家 10.8 万张投稿创历史纪录，风光/人像/街拍/建筑/艺术/Project//21/野生动物七大类别的 70 位入围者已公布，公众投票至 6 月 1 日，6 月 30 日揭晓七位新大师——点官方画廊看全部入围作品。', query: 'Hasselblad Masters 2026 finalists' },
{ year: 2023, award: 'hm', title: '哈苏大师赛 2023', titleEn: 'Hasselblad Masters 2023', photographer: '储卫民、蒂娜·伊特科宁 等六位', photographerEn: 'Weimin Chu, Tiina Itkonen, et al.', note: '创纪录的 85,000 张投稿。风光类得主是中国摄影师储卫民（《火车车窗里的西藏》）；建筑类 Tiina Itkonen、人像类 Panji Indra Permana、艺术类 Jan Pypers、街拍类 Tom Pitts、Project//21 类 Efraïm Baaijens——每位获"哈苏大师"称号、中画幅相机与创作基金。', query: 'Hasselblad Masters 2023 winners' },
{ year: 2021, award: 'hm', title: '哈苏大师赛 2021', titleEn: 'Hasselblad Masters 2021', photographer: '各类别"哈苏大师"', photographerEn: 'Category Masters', note: '双年制商业与艺术摄影大师赛：按人像、风光、街拍等类别从全球投稿中评出"哈苏大师"，合作项目集结成《Masters》画册出版。点官方画廊看本届全部得主作品。', query: 'Hasselblad Masters 2021 winners' },
{ year: 2018, award: 'hm', title: '哈苏大师赛 2018', titleEn: 'Hasselblad Masters 2018', photographer: 'Maria Svarbova、Tina S. Hult 等11位', photographerEn: 'Maria Svarbova, Tina S. Hult, et al.', note: '超 3 万张投稿、11 个类别。艺术类得主 Maria Svarbova（《泳池》系列）、人像类 Tina Signesdottir Hult、风光类 Benjamin Everett、航拍类 Jorge de la Torriente、野生动物类 Karim Iliya 等 11 位新大师。', query: 'Hasselblad Masters 2018 winners' },
{ year: 2016, award: 'hm', title: '哈苏大师赛 2016', titleEn: 'Hasselblad Masters 2016', photographer: 'Evelyn Bencicova、Ali Rajabi 等10位', photographerEn: 'Evelyn Bencicova, Ali Rajabi, et al.', note: '十类得主由公众投票与大师评审团共同选出：人像类 Evelyn Bencicova、街拍类 Ali Rajabi、艺术类 Katerina Belkina、建筑类 Swee Oh、风光类 Lars van de Goor、婚礼类 John Paul Evans 等。', query: 'Hasselblad Masters 2016 winners' },
{ year: 2014, award: 'hm', title: '哈苏大师赛 2014', titleEn: 'Hasselblad Masters 2014', photographer: 'Hengki Koentjoro 等12位', photographerEn: 'Hengki Koentjoro, et al.', note: '12 个类别近 4000 张投稿：风光类 Hengki Koentjoro（印尼）、人像类 Dmitry Ageev、时尚类 Bara Prasilova、综合类 Roman Jehanno、艺术类 Rafal Maleszyk、野生动物类 Rafael Rojas 等 12 位大师。', query: 'Hasselblad Masters 2014 winners' },
{ year: 2012, award: 'hm', title: '哈苏大师赛 2012', titleEn: 'Hasselblad Masters 2012', photographer: 'Denis Rouvre、Christian Tagliavini 等11位', photographerEn: 'Denis Rouvre, Christian Tagliavini, et al.', note: '创办十周年纪念届：11 位大师以"evoke（唤起）"为主题完成合作项目——人像类 Denis Rouvre、艺术类 Christian Tagliavini、纪实类 Jon Lowenstein、综合类 Ken Hermann 等。', query: 'Hasselblad Masters 2012 winners' },
{ year: 2010, award: 'hm', title: '哈苏大师赛 2010', titleEn: 'Hasselblad Masters 2010', photographer: '各类别"哈苏大师"', photographerEn: 'Category Masters', note: '双年制大师赛早期届次：按艺术、风光、人像、时尚、产品等约十个类别评出大师——官方画廊保留了本届全部获奖作品，值得按类细看。', query: 'Hasselblad Masters 2010 winners' },
{ year: 2008, award: 'hm', title: '哈苏大师赛 2008', titleEn: 'Hasselblad Masters 2008', photographer: '十位"哈苏大师"', photographerEn: 'Ten Hasselblad Masters', note: '改制元年：从"评选摄影师"改为分九大类别评选，并向所有品牌的中大画幅职业摄影师开放；得主用 H3D 完成四个月拍摄，集结成年度《Masters》画册。', query: 'Hasselblad Masters 2008 winners' },

// ───── 佳能 · 写真新世纪 New Cosmos of Photography（1991–2021） ─────
{ year: 1995, award: 'canon', title: '十七岁女孩的日子', titleEn: 'Seventeen Girl Days', photographer: 'HIROMIX', photographerEn: 'HIROMIX', note: '18 岁高中生用傻瓜相机拍下的日记式快照，经评委荒木经惟力荐夺得大奖——掀起 90 年代日本"少女写真"浪潮，私摄影自此进入主流，写真新世纪最传奇的一届。', link: 'https://global.canon/en/newcosmos/gallery/grandprix/1995-hiromix/index.html', query: 'HIROMIX Seventeen Girl Days New Cosmos 1995' },
{ year: 2017, award: 'canon', title: '十七种白', titleEn: '17 toner hvitt', photographer: '特隆·安斯滕 & 本杰明·布赖特科普夫', photographerEn: 'Trond Ansten & Benjamin Breitkopf', note: '第 40 届大奖：挪威/德国双人组的实验影像装置——写真新世纪三十年来始终偏爱越界的"非典型摄影"，比起完成度更奖励可能性。', query: 'Trond Ansten Benjamin Breitkopf 17 toner hvitt New Cosmos 2017' },
{ year: 2021, award: 'canon', title: '湖', titleEn: 'THE LAKE', photographer: '加久直达', photographerEn: 'Naotatsu Kaku', note: '第 44 届亦是最后一届大奖。1991–2021 三十年间，写真新世纪走出了 HIROMIX 等一代代新人，是日本新锐摄影最重要的跳板；官方档案保留了历届大奖作品。', query: 'Naotatsu Kaku THE LAKE New Cosmos of Photography 2021' },

// ───── 尼康国际摄影大赛 Nikon Photo Contest（1969 年创办） ─────
{ year: 2025, award: 'nikonpc', sub: 'single', title: '乔纳斯', titleEn: 'Jonas', photographer: '蒂娜·伊特科宁', photographerEn: 'Tiina Itkonen', note: '2024–2025 届单幅组大奖：芬兰摄影师，三十年深耕格陵兰冰原与因纽特社区——她同时也是哈苏大师赛 2023 建筑类得主。', link: 'https://www.nikon.com/company/news/2025/1014_imaging_01.html', query: 'Tiina Itkonen Jonas Nikon Photo Contest 2025' },
{ year: 2025, award: 'nikonpc', sub: 'story', title: 'Farewell-able', titleEn: 'Farewell-able', photographer: '杨磊', photographerEn: 'Lei Yang', note: '2024–2025 届组照（Photo Story）大奖：中国摄影师。尼康大赛创办于 1969 年，是历史最悠久的相机品牌国际赛之一，本届投稿来自 180 个国家和地区。', link: 'https://www.nikon.com/company/news/2025/1014_imaging_01.html', query: 'Lei Yang Farewell-able Nikon Photo Contest 2025' },

// ───── 富士 GFX 挑战资助计划 FUJIFILM GFX Challenge（2021 年创办，年度制） ─────
{ year: 2025, award: 'fuji', title: 'GFX 挑战资助计划 2025', titleEn: 'GFX Challenge 2025', photographer: '5 个全球大奖 + 10 个区域大奖得主', photographerEn: '5 Global + 10 Regional grantees', note: '从全球 2,800+ 申请中选出 15 个创作项目：得主获最高 1 万美元资助与 GFX 中画幅设备完成拍摄，成片在官网与全球巡展发布——资助"对创作者最重要的题材"。', query: 'Fujifilm GFX Challenge Grant Program 2025 winners' },
{ year: 2024, award: 'fuji', title: 'GFX 挑战资助计划 2024', titleEn: 'GFX Challenge 2024', photographer: '5 个全球大奖 + 10 个区域大奖得主', photographerEn: '5 Global + 10 Regional grantees', note: '富士 2021 年创办的年度资助计划：与"评照片"的比赛不同，它资助的是尚未完成的项目——官方年度页可看每个项目从提案到成片的全过程。', query: 'Fujifilm GFX Challenge Grant Program 2024 winners' },

];
