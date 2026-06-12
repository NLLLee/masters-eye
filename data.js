// ============================================================
// 大师之眼 · 策展数据
// 每件作品：id（也是 images/ 下自备图片的文件名）、类别、标题、
// 摄影师、年代、来源机构、获奖信息、审美解读、看点标签、
// 原作主色调（用于生成示意卡片）、原作搜索关键词
// ============================================================

window.CATEGORIES = [
  { key: 'all',       label: '全部' },
  { key: 'fashion',   label: '时尚人像' },
  { key: 'portrait',  label: '人像' },
  { key: 'wildlife',  label: '野生动物' },
  { key: 'landscape', label: '风景' },
  { key: 'art',       label: '艺术' },
  { key: 'creative',  label: '创意' },
  { key: 'doc',       label: '人文纪实' },
];

window.PHOTOS = [

// ─────────────── 时尚人像 FASHION ───────────────
{
  id: 'avedon-dovima', cat: 'fashion',
  title: '多薇玛与大象', titleEn: 'Dovima with Elephants',
  photographer: '理查德·阿维顿', photographerEn: 'Richard Avedon',
  year: '1955', source: "Harper's Bazaar · Dior 晚装",
  sourceGroup: '时尚刊物与品牌', award: '哈苏国际摄影奖得主（1991）',
  desc: '巴黎冬季马戏团里，超模多薇玛身穿 Dior 晚礼服（出自年轻的伊夫·圣罗兰之手）立于大象之间。看点在"极端对比"：丝缎的光洁对粗粝的象皮、静止的优雅对涌动的野性；她舒展的手臂与象鼻的弧线相互呼应，让对比变成共舞。这是时装摄影史上被引用最多的一张照片。',
  tags: ['极端对比', '形体线条呼应', '黑白影调', '动与静'],
  palette: ['#141414', '#6f6b64', '#e4ded2'],
  query: 'Richard Avedon Dovima with Elephants 1955'
},
{
  id: 'newton-smoking', cat: 'fashion',
  title: '吸烟装', titleEn: 'Le Smoking',
  photographer: '赫尔穆特·牛顿', photographerEn: 'Helmut Newton',
  year: '1975', source: 'Vogue Paris · Yves Saint Laurent',
  sourceGroup: '时尚刊物与品牌',
  desc: '巴黎奥布里奥街的深夜，模特身穿 YSL 吸烟装，头发紧贴后梳，单手插袋点烟。路灯从侧上方打下的硬光制造出黑色电影般的阴影，雌雄同体的姿态彻底改写了"女性气质"在时尚影像中的定义。注意鹅卵石街道的反光如何为黑西装勾出轮廓。',
  tags: ['硬光', '黑色电影感', '中性气质', '夜景街拍'],
  palette: ['#0b0c10', '#3c4148', '#c9cdd4'],
  query: 'Helmut Newton Le Smoking 1975 Vogue Paris'
},
{
  id: 'penn-morocco', cat: 'fashion',
  title: '摩洛哥宫殿中的女人', titleEn: 'Woman in Moroccan Palace',
  photographer: '欧文·佩恩', photographerEn: 'Irving Penn',
  year: '1951', source: 'Vogue',
  sourceGroup: '时尚刊物与品牌', award: '哈苏国际摄影奖得主（1985）',
  desc: '佩恩把妻子、超模丽莎·芳夏格里芙拍成了一座雕塑：北非宫殿的柔和天光从高处落下，背景近乎全黑，只留她完整而锋利的轮廓线。佩恩一生信奉"做减法"——去掉一切道具与环境之后，姿态与剪裁本身就是全部戏剧。',
  tags: ['极简', '天光', '剪影轮廓', '雕塑感'],
  palette: ['#211a12', '#8a6f4d', '#e8d9b8'],
  query: 'Irving Penn Woman in Moroccan Palace Lisa Fonssagrives 1951'
},
{
  id: 'lindbergh-whiteshirts', cat: 'fashion',
  title: '白衬衫与超模', titleEn: 'White Shirts',
  photographer: '彼得·林德伯格', photographerEn: 'Peter Lindbergh',
  year: '1988', source: 'Vogue（拍摄于马里布海滩）',
  sourceGroup: '时尚刊物与品牌',
  desc: '琳达、克莉丝蒂、塔嘉娜等人只穿白衬衫在海滩上大笑——没有浓妆、没有华服、没有摆拍的僵硬。林德伯格用自然光与胶片颗粒对抗八十年代的浮华，"真实的人比完美的人更美"，这组照片直接开启了超模时代。',
  tags: ['自然光', '胶片颗粒', '真实感', '群像构图'],
  palette: ['#23252a', '#9aa0a8', '#f2f2ef'],
  query: 'Peter Lindbergh White Shirts supermodels 1988 Malibu'
},
{
  id: 'bourdin-jourdan', cat: 'fashion',
  title: 'Charles Jourdan 鞋履广告', titleEn: 'Charles Jourdan Campaign',
  photographer: '盖·布尔丹', photographerEn: 'Guy Bourdin',
  year: '1970s', source: 'Charles Jourdan · Vogue Paris',
  sourceGroup: '时尚刊物与品牌',
  desc: '高饱和的色块、被裁掉一半的身体、画框外悬而未决的故事——鞋只是借口，欲望与不安才是主角。布尔丹把商业广告变成超现实主义剧场，证明"卖产品"与"做艺术"可以是同一件事。看他如何用一面镜子、一截小腿讲完一部悬疑片。',
  tags: ['高饱和色彩', '超现实叙事', '裁切与留白', '悬念'],
  palette: ['#e2003c', '#ff9fb1', '#1b1b1f'],
  query: 'Guy Bourdin Charles Jourdan shoe campaign 1970s'
},
{
  id: 'meisel-makeover', cat: 'fashion',
  title: '整形狂热', titleEn: 'Makeover Madness',
  photographer: '史蒂文·梅塞', photographerEn: 'Steven Meisel',
  year: '2005', source: 'Vogue Italia',
  sourceGroup: '时尚刊物与品牌',
  desc: '绷带、手术室、输液架与高级时装并置——梅塞用一组奢华大片讽刺整形文化对完美的病态追逐。冷调的医院灯光与时装的精致形成刺眼的不适感。它提醒我们：顶级时尚摄影不止于"好看"，还能承载尖锐的社会批评。',
  tags: ['观念摄影', '冷色调', '社会批评', '场景叙事'],
  palette: ['#cfd4d8', '#8b9097', '#3a2f2c'],
  query: 'Steven Meisel Makeover Madness Vogue Italia 2005'
},
{
  id: 'walker-dresslamp', cat: 'fashion',
  title: '树上的灯裙', titleEn: 'The Dress-Lamp Tree',
  photographer: '蒂姆·沃克', photographerEn: 'Tim Walker',
  year: '2002', source: 'Vogue（拍摄于英格兰）',
  sourceGroup: '时尚刊物与品牌',
  desc: '英国乡间的暮色里，一棵树上挂满了发光的裙子，像童话里长出来的。沃克坚持实景搭建而非数码合成——巨大的道具、真实的灯光，让幻想拥有真实的重量。注意冷蓝暮色与暖黄灯光的互补色对撞，这是"魔幻时刻"布光的范本。',
  tags: ['冷暖互补色', '实景造梦', '魔幻时刻', '童话叙事'],
  palette: ['#1d2a36', '#5d7a6a', '#f4d98e'],
  query: 'Tim Walker Dress Lamp Tree England 2002 Vogue'
},
{
  id: 'knight-susie', cat: 'fashion',
  title: '吸烟的苏西', titleEn: 'Susie Smoking',
  photographer: '尼克·奈特', photographerEn: 'Nick Knight',
  year: '1988', source: 'Yohji Yamamoto 广告',
  sourceGroup: '时尚刊物与品牌',
  desc: '为山本耀司拍摄的传奇广告：红色渐变背景如燃烧的天空，烟雾的灰蓝与模特的黑色剪裁互为图底。奈特用实验性的色彩与印放工艺，把一支烟的瞬间拍成了仪式。看"渐变背景"如何替代环境，纯粹用色彩制造情绪。',
  tags: ['渐变色背景', '烟雾形态', '图底关系', '实验影像'],
  palette: ['#5a0d0d', '#c4452a', '#f2b8a0'],
  query: 'Nick Knight Susie Smoking 1988 Yohji Yamamoto'
},
{
  id: 'luchford-gucci', cat: 'fashion',
  title: 'Gucci 1997 秋冬广告', titleEn: 'Gucci AW 1997 Campaign',
  photographer: '格伦·卢奇福德', photographerEn: 'Glen Luchford',
  year: '1997', source: 'Gucci（Tom Ford 时期）',
  sourceGroup: '时尚刊物与品牌',
  desc: '汽车前灯扫过的冷夜、湿漉漉的反光路面、人物之间暧昧的张力——像一帧被偷走的惊悚片剧照。卢奇福德为 Tom Ford 时期的 Gucci 定下了"电影化性感"的视觉基调：不展示产品，只制造你想进入的危险氛围。',
  tags: ['电影感布光', '车灯硬光', '叙事氛围', '冷色调'],
  palette: ['#0d1117', '#27415a', '#b8c7d6'],
  query: 'Glen Luchford Gucci 1997 campaign Tom Ford'
},
{
  id: 'leibovitz-lv', cat: 'fashion',
  title: '戈尔巴乔夫与柏林墙', titleEn: 'LV Core Values: Gorbachev',
  photographer: '安妮·莱博维茨', photographerEn: 'Annie Leibovitz',
  year: '2007', source: 'Louis Vuitton「核心价值」广告',
  sourceGroup: '时尚刊物与品牌',
  desc: '前苏联领导人戈尔巴乔夫坐在车里，身旁是一只 LV 旅行袋，车窗外掠过柏林墙残段。奢侈品广告罕见地与历史正面对话——"旅程让人成为人"。低饱和的纪实色调、不看镜头的沉思，让广告拥有了新闻照片的重量。',
  tags: ['纪实化广告', '历史语境', '车窗构图', '低饱和'],
  palette: ['#3a3f45', '#7d8288', '#caa66a'],
  query: 'Annie Leibovitz Gorbachev Louis Vuitton Core Values 2007'
},
{
  id: 'roversi-dior', cat: 'fashion',
  title: 'Dior 之梦（8×10 宝丽来）', titleEn: 'Dior by Paolo Roversi',
  photographer: '保罗·罗韦尔西', photographerEn: 'Paolo Roversi',
  year: '1990s–2010s', source: 'Dior · Vogue Italia',
  sourceGroup: '时尚刊物与品牌',
  desc: '罗韦尔西用 8×10 大画幅相机与长时间曝光，让模特像从雾中显影的幽灵，高级订制礼服的轮廓在虚实之间呼吸。他为 Dior 留下的影像证明：清晰不是摄影的义务，"模糊"可以是最高级的清晰——它逼你用想象补完美。',
  tags: ['大画幅', '长曝光虚影', '低照度', '诗性人像'],
  palette: ['#241c20', '#5c4a52', '#cdb9c2'],
  query: 'Paolo Roversi Dior Natalia Vodianova portrait'
},
{
  id: 'chenman-vogue', cat: 'fashion',
  title: '中国十二色 / Vogue 中国封面', titleEn: 'Chen Man for Vogue China',
  photographer: '陈漫', photographerEn: 'Chen Man',
  year: '2000s–今', source: 'Vogue China · i-D',
  sourceGroup: '时尚刊物与品牌',
  desc: '京剧的浓彩、刺绣的纹样、数码时代的精修质感——陈漫把中国传统色彩系统装进国际时尚语法，开创了有中国语境的时尚视觉语言。看她如何用高饱和的"中国红 + 黄金 + 石青"打破欧美时尚摄影的莫兰迪色惯性。',
  tags: ['中国色彩', '数码精修', '文化符号', '高饱和'],
  palette: ['#7a0f1e', '#d4a017', '#1c2f4a'],
  query: 'Chen Man Vogue China cover photography 陈漫'
},

// ─────────────── 人像 PORTRAIT ───────────────
{
  id: 'mccurry-afghan', cat: 'portrait',
  title: '阿富汗少女', titleEn: 'Afghan Girl',
  photographer: '史蒂夫·麦凯瑞', photographerEn: 'Steve McCurry',
  year: '1984', source: '国家地理（1985年6月封面）',
  sourceGroup: '国家地理',
  desc: '巴基斯坦难民营的帐篷教室里，海绿色的眼睛直视镜头。红褐头巾与青绿背景构成教科书级的互补色，柔和的天光让瞳孔成为整张照片的引力中心。一张照片让世界记住了战争中的无名者——这是人像摄影"眼神即一切"的终极证明。',
  tags: ['互补色', '眼神光', '柔和天光', '直视镜头'],
  palette: ['#33493f', '#7da183', '#8e2f23'],
  query: 'Steve McCurry Afghan Girl 1984 National Geographic'
},
{
  id: 'karsh-churchill', cat: 'portrait',
  title: '愤怒的丘吉尔', titleEn: 'Winston Churchill',
  photographer: '尤素福·卡什', photographerEn: 'Yousuf Karsh',
  year: '1941', source: 'LIFE 等刊载 · 渥太华拍摄',
  sourceGroup: '杂志与媒体',
  desc: '快门按下前，卡什伸手抽走了丘吉尔嘴里的雪茄——换来这副著名的怒视。低调布光像凿子一样雕出花岗岩般的面孔，深色背景吞掉一切干扰。二战中"绝不屈服"的精神从此有了一张脸。人像的最高境界：拍出性格，而不只是长相。',
  tags: ['低调布光', '性格瞬间', '黑白质感', '心理博弈'],
  palette: ['#101010', '#4d4d4d', '#bcbcbc'],
  query: 'Yousuf Karsh Winston Churchill 1941 portrait'
},
{
  id: 'leibovitz-lennon', cat: 'portrait',
  title: '列侬与洋子', titleEn: 'John Lennon and Yoko Ono',
  photographer: '安妮·莱博维茨', photographerEn: 'Annie Leibovitz',
  year: '1980', source: 'Rolling Stone 封面',
  sourceGroup: '杂志与媒体',
  desc: '赤裸的列侬像婴儿一样蜷缩着亲吻穿黑衣的洋子——拍摄数小时后，列侬遇刺身亡，这张照片成了关于爱与脆弱的遗言。看构图的勇气：男性的裸露与依恋、女性的镇定与包容，颠倒了流行文化里的一切性别脚本。',
  tags: ['身体语言', '关系叙事', '俯拍', '颠覆惯例'],
  palette: ['#f0ede8', '#caa27e', '#2b2b2b'],
  query: 'Annie Leibovitz John Lennon Yoko Ono Rolling Stone 1980'
},
{
  id: 'platon-putin', cat: 'portrait',
  title: '普京', titleEn: 'Vladimir Putin',
  photographer: '普拉东', photographerEn: 'Platon',
  year: '2007', source: 'TIME 年度人物封面',
  sourceGroup: '杂志与媒体',
  desc: '超广角镜头贴到极近的距离，冷灰的影调，自下而上的逼视感——普拉东用一只镜头完成了一篇权力研究。广角的透视畸变让面孔产生压迫性，眼神成为深渊。学习点：镜头焦距不是技术参数，而是态度本身。',
  tags: ['超广角人像', '透视压迫感', '冷灰影调', '权力凝视'],
  palette: ['#aeb6bd', '#5d666e', '#23282d'],
  query: 'Platon Vladimir Putin TIME 2007 portrait'
},
{
  id: 'watson-jobs', cat: 'portrait',
  title: '史蒂夫·乔布斯', titleEn: 'Steve Jobs',
  photographer: '阿尔伯特·沃森', photographerEn: 'Albert Watson',
  year: '2006', source: '《财富》拍摄 · 后成苹果官方悼念像',
  sourceGroup: '个人项目',
  desc: '极简的灰背景，手扶下巴，目光像在与你对峙。沃森要求乔布斯"想着你即将发布的下一个产品"，于是得到了这道凝视。没有道具、没有环境、没有动作——只剩下专注本身。后来苹果官网用它告别乔布斯。少即是多的人像范本。',
  tags: ['极简背景', '凝视', '手部姿态', '灰阶层次'],
  palette: ['#1a1a1a', '#555555', '#dcdcdc'],
  query: 'Albert Watson Steve Jobs 2006 portrait'
},
{
  id: 'schoeller-closeup', cat: 'portrait',
  title: '大特写系列', titleEn: 'Close Up',
  photographer: '马丁·舍勒', photographerEn: 'Martin Schoeller',
  year: '1998–今', source: 'The New Yorker 等',
  sourceGroup: '杂志与媒体',
  desc: '同一机位、同一布光、同一距离——总统、影星与无名者在镜头前被完全平等地对待。当一切变量被锁死，面孔本身成为唯一的内容：毛孔、皱纹、眼里的光。这是"类型学摄影"在人像上的极致：比较之中，个性才显形。',
  tags: ['类型学', '均质布光', '极近特写', '平等视角'],
  palette: ['#c9a98c', '#8a6f5c', '#2e2620'],
  query: 'Martin Schoeller Close Up portrait series'
},
{
  id: 'easton-banktop', cat: 'portrait',
  title: '班克顶社区', titleEn: 'Bank Top',
  photographer: '克雷格·伊斯顿', photographerEn: 'Craig Easton',
  year: '2020', source: 'Sony 世界摄影奖',
  sourceGroup: 'Sony 世界摄影奖', award: 'Sony 世界摄影奖 2021 年度摄影师',
  desc: '英国布莱克本的工人社区曾被媒体贴上"隔离社区"的标签，伊斯顿用大画幅黑白群像回应：正面、庄重、与被摄者共同完成。每个人都站得笔直，直视镜头——尊严是这组照片的布光。纪实人像如何对抗污名化叙事的范本。',
  tags: ['大画幅', '正面构图', '社区群像', '尊严叙事'],
  palette: ['#1c1c1e', '#6b6b6e', '#d6d6d2'],
  query: 'Craig Easton Bank Top Sony World Photography Awards 2021'
},

// ─────────────── 野生动物 WILDLIFE ───────────────
{
  id: 'gorshkov-embrace', cat: 'wildlife',
  title: '拥抱', titleEn: 'The Embrace',
  photographer: '谢尔盖·戈尔什科夫', photographerEn: 'Sergey Gorshkov',
  year: '2020', source: '野生动物年度摄影师大赛（伦敦自然历史博物馆）',
  sourceGroup: '野生动物年度摄影师 WPY', award: 'WPY 2020 年度总冠军',
  desc: '俄罗斯远东的针叶林中，一只东北虎雌虎环抱冷杉树干蹭蹭留下气味标记——隐蔽相机蹲守了约 11 个月才等到这一刻。琥珀色的虎纹与苔绿的森林像一幅褪色的古老挂毯，野兽与森林在构图里融为一体。耐心，是野生动物摄影的第一美学。',
  tags: ['隐蔽相机', '环境融合', '苔绿与琥珀', '行为瞬间'],
  palette: ['#3a4a2e', '#7a6a3a', '#c8923e'],
  query: 'Sergey Gorshkov The Embrace tiger Wildlife Photographer of the Year 2020'
},
{
  id: 'laman-orangutan', cat: 'wildlife',
  title: '缠绕的生命', titleEn: 'Entwined Lives',
  photographer: '蒂姆·拉曼', photographerEn: 'Tim Laman',
  year: '2016', source: '野生动物年度摄影师大赛 · 国家地理',
  sourceGroup: '野生动物年度摄影师 WPY', award: 'WPY 2016 年度总冠军',
  desc: '婆罗洲雨林，一只红毛猩猩沿着缠满藤蔓的巨树向上攀爬——拉曼把遥控相机预先架在树冠，用俯拍把视角还给森林本身。垂直的纵深、雨雾中的层层绿意，让濒危的红毛猩猩重新成为它王国里的主人，而不是镜头的猎物。',
  tags: ['俯拍视角', '垂直纵深', '雨林层次', '遥控拍摄'],
  palette: ['#1e2e1a', '#4a6b3a', '#9ab87a'],
  query: 'Tim Laman Entwined Lives orangutan Wildlife Photographer of the Year 2016'
},
{
  id: 'oosten-golden', cat: 'wildlife',
  title: '金色搭档', titleEn: 'The Golden Couple',
  photographer: '马塞尔·范奥斯滕', photographerEn: 'Marsel van Oosten',
  year: '2018', source: '野生动物年度摄影师大赛',
  sourceGroup: '野生动物年度摄影师 WPY', award: 'WPY 2018 年度总冠军',
  desc: '中国秦岭，一对川金丝猴蹲坐石上：蓝色面孔、金色长毛，逆光为每根毛发镀上金边。冷蓝的岩石与暖金的皮毛是一堂互补色公开课，浅景深把杂乱的森林压成柔和的色块。构图、用光、色彩在一张"等来的"照片里全部到位。',
  tags: ['逆光金边', '冷暖互补', '浅景深', '中国物种'],
  palette: ['#2e4a5a', '#c8923e', '#e8c87a'],
  query: 'Marsel van Oosten The Golden Couple snub-nosed monkeys 2018'
},
{
  id: 'nicklen-seal', cat: 'wildlife',
  title: '豹海豹的馈赠', titleEn: 'Leopard Seal and Penguin',
  photographer: '保罗·尼克伦', photographerEn: 'Paul Nicklen',
  year: '2006', source: '国家地理',
  sourceGroup: '国家地理',
  desc: '南极冰海，一只以凶猛著称的豹海豹连续数日向潜水的尼克伦"投喂"企鹅，仿佛在照顾一个不会捕猎的笨学生。水下的蓝绿色调、巨兽与镜头的咫尺距离，恐惧与温柔同框。它改变了公众对"杀手"的想象——这正是顶级自然摄影的力量。',
  tags: ['水下摄影', '蓝绿色调', '行为故事', '近距离张力'],
  palette: ['#0e2a38', '#2e6478', '#9ac8d0'],
  query: 'Paul Nicklen leopard seal penguin National Geographic'
},
{
  id: 'brandt-elephant', cat: 'wildlife',
  title: '扬尘的大象', titleEn: 'Elephant with Exploding Dust',
  photographer: '尼克·勃兰特', photographerEn: 'Nick Brandt',
  year: '2004–2012', source: '《在这片土地上》系列 · 画廊收藏',
  sourceGroup: '美术馆与艺术机构',
  desc: '勃兰特不用长焦"偷拍"，而是带着中画幅相机走近非洲象，用黑白胶片拍下纪念碑一样的正面肖像。扬起的尘土如烟雾，逆光勾出象的轮廓。他说自己拍的不是野生动物照片，而是"为正在消失的它们拍的遗像"。庄重感来自仰视与黑白。',
  tags: ['中画幅黑白', '仰拍纪念碑感', '尘土与逆光', '挽歌叙事'],
  palette: ['#1a1916', '#5e5a50', '#cfc9ba'],
  query: 'Nick Brandt elephant exploding dust black and white'
},
{
  id: 'gross-tadpoles', cat: 'wildlife',
  title: '生命之群', titleEn: 'The Swarm of Life',
  photographer: '谢恩·格罗斯', photographerEn: 'Shane Gross',
  year: '2024', source: '野生动物年度摄影师大赛',
  sourceGroup: '野生动物年度摄影师 WPY', award: 'WPY 2024 年度总冠军',
  desc: '加拿大温哥华岛的湖泊水下，西部蟾蜍的蝌蚪群在睡莲茎秆间洄游，逆光下如一条星河。主角不是猛兽而是最"平凡"的蝌蚪——用光线与密度把寻常生命拍出史诗感，这是近年自然摄影审美转向的代表：宏大不在物种，在观看方式。',
  tags: ['水下逆光', '群体韵律', '平凡物种史诗', '光斑'],
  palette: ['#0e3026', '#2e6a4e', '#cce89a'],
  query: 'Shane Gross The Swarm of Life tadpoles Wildlife Photographer of the Year 2024'
},
{
  id: 'doubilet-split', cat: 'wildlife',
  title: '半水面世界', titleEn: 'Over/Under Split Fields',
  photographer: '大卫·杜比莱', photographerEn: 'David Doubilet',
  year: '1970s–今', source: '国家地理',
  sourceGroup: '国家地理',
  desc: '镜头一半在水上、一半在水下：冰山之下的暗涌、鲨鱼之上的晚霞——杜比莱发明并完善了"半水面构图"，把两个互不相见的世界缝进同一帧。水线就是画面的地平线，也是已知与未知的分界。一种构图，本身就成了一种世界观。',
  tags: ['半水面构图', '双重世界', '水线分割', '广角近摄'],
  palette: ['#0a2a44', '#2e7898', '#f0c878'],
  query: 'David Doubilet over under split field underwater photography'
},

// ─────────────── 风景 LANDSCAPE ───────────────
{
  id: 'adams-moonrise', cat: 'landscape',
  title: '月升·埃尔南德斯', titleEn: 'Moonrise, Hernandez, New Mexico',
  photographer: '安塞尔·亚当斯', photographerEn: 'Ansel Adams',
  year: '1941', source: '美术馆收藏',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（1981）',
  desc: '暮色中的月亮悬在雪山之上，山脚下小镇墓地的十字架接住最后一缕夕照。亚当斯在公路边瞥见这一幕，凭记忆心算曝光、在数十秒内完成拍摄。天空压成深黑，月亮、云带、雪山、十字架由亮到暗层层铺开——区域曝光法的巅峰，黑白风光的圣经。',
  tags: ['区域曝光法', '影调分层', '黑白风光', '决定性时刻'],
  palette: ['#0c0c0e', '#55565c', '#d8d8d4'],
  query: 'Ansel Adams Moonrise Hernandez New Mexico 1941'
},
{
  id: 'salgado-genesis', cat: 'landscape',
  title: '创世纪·南乔治亚', titleEn: 'Genesis: South Georgia',
  photographer: '塞巴斯蒂昂·萨尔加多', photographerEn: 'Sebastião Salgado',
  year: '2004–2011', source: '《创世纪》项目 · 美术馆巡展',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（1989）',
  desc: '南乔治亚岛，数十万只王企鹅铺满海湾，远处冰川如银幕垂落。萨尔加多用八年走遍地球尚未被人类改变的角落，把风光拍成《圣经》的章节。高反差黑白让冰、羽毛与海面化为纯粹的质感与节奏——风景在他镜头里是"原初世界的肖像"。',
  tags: ['史诗尺度', '高反差黑白', '群体节奏', '生态叙事'],
  palette: ['#16181a', '#5e6468', '#e0e2e0'],
  query: 'Sebastiao Salgado Genesis South Georgia king penguins'
},
{
  id: 'kenna-hokkaido', cat: 'landscape',
  title: '北海道·雪原孤树', titleEn: 'Hokkaido Trees',
  photographer: '迈克尔·肯纳', photographerEn: 'Michael Kenna',
  year: '2002–今', source: '个人项目 · 画廊收藏',
  sourceGroup: '个人项目',
  desc: '长时间曝光把雪原与天空抹成一张安静的纸，一棵树站在中间，就是一句俳句。肯纳用方画幅、黑白和大量留白做减法，证明风景摄影不必收集壮观——删除到不能再删时，剩下的就是诗。中国画"计白当黑"的摄影版本。',
  tags: ['极简留白', '长曝光', '方画幅', '东方意境'],
  palette: ['#e8e8e6', '#b0b2b0', '#2a2c2e'],
  query: 'Michael Kenna Hokkaido tree snow minimalist'
},
{
  id: 'rowell-potala', cat: 'landscape',
  title: '布达拉宫上的彩虹', titleEn: 'Rainbow over the Potala Palace',
  photographer: '盖伦·罗威尔', photographerEn: 'Galen Rowell',
  year: '1981', source: '国家地理',
  sourceGroup: '国家地理',
  desc: '暴雨初歇的拉萨，罗威尔看见彩虹将至，提着相机狂奔近一公里，让彩虹的落点恰好"插"在布达拉宫顶上。运气偏爱奔跑中的摄影师——风光摄影的决定性瞬间不在等待，而在预判光线与位置的几何关系，然后用腿去完成构图。',
  tags: ['预判与机位', '彩虹落点', '雨后光线', '地标重构'],
  palette: ['#2e3a4e', '#8a5a3e', '#e8d8a0'],
  query: 'Galen Rowell Rainbow over the Potala Palace 1981'
},
{
  id: 'sugimoto-seascapes', cat: 'landscape',
  title: '海景系列', titleEn: 'Seascapes',
  photographer: '杉本博司', photographerEn: 'Hiroshi Sugimoto',
  year: '1980–今', source: '美术馆收藏',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（2001）',
  desc: '画面永远只有两样东西：海与天，水平线精确地停在正中。长曝光抹去浪花与船只，只剩光的浓淡。杉本博司说，海平面是"人类与远古祖先看过的同一片风景"。极简二分构图 + 时间的消除 = 把风景拍成哲学。',
  tags: ['二分构图', '水平线居中', '时间消除', '冥想性'],
  palette: ['#1c2024', '#4e565c', '#aab4b8'],
  query: 'Hiroshi Sugimoto Seascapes'
},
{
  id: 'chu-greenland', cat: 'landscape',
  title: '格陵兰的冬天', titleEn: 'Greenlandic Winter',
  photographer: '储卫民', photographerEn: 'Weimin Chu',
  year: '2019', source: '国家地理旅行摄影大赛',
  sourceGroup: '国家地理', award: '国家地理旅行摄影大赛 2019 年度总冠军',
  desc: '格陵兰小镇乌佩纳维克的暮色：彩色木屋陷在深雪里，一个人提着行李走向家门，窗里透出暖光。蓝调时刻的冷与窗灯的暖、巨大的荒寒与微小的人间烟火——中国摄影师储卫民用这张"有人味的风光"拿下国家地理年度总冠军。',
  tags: ['蓝调时刻', '冷暖对比', '人景比例', '叙事风光'],
  palette: ['#1e3048', '#4e6888', '#e8a85a'],
  query: 'Weimin Chu Greenlandic Winter National Geographic Travel Photo Contest 2019'
},
{
  id: 'buyckx-whiteout', cat: 'landscape',
  title: '白茫', titleEn: 'Whiteout',
  photographer: '弗雷德里克·拜克斯', photographerEn: 'Frederik Buyckx',
  year: '2016', source: 'Sony 世界摄影奖',
  sourceGroup: 'Sony 世界摄影奖', award: 'Sony 世界摄影奖 2017 年度摄影师',
  desc: '吉尔吉斯斯坦的深山牧区，暴雪把世界涂成一张白纸，马和牧人是纸上仅存的墨点。拜克斯拍的不是"美景"，而是人与马在严酷自然中的相依。当色彩与细节被天气没收，剩下的图底关系反而最接近水墨——留白即叙事。',
  tags: ['白茫留白', '图底极简', '人马关系', '恶劣天气美学'],
  palette: ['#eceeee', '#b8bcbe', '#3a3e42'],
  query: 'Frederik Buyckx Whiteout Sony World Photography Awards 2017'
},

// ─────────────── 艺术 ART ───────────────
{
  id: 'gursky-rhein', cat: 'art',
  title: '莱茵河 II', titleEn: 'Rhein II',
  photographer: '安德烈亚斯·古尔斯基', photographerEn: 'Andreas Gursky',
  year: '1999', source: '美术馆收藏',
  sourceGroup: '美术馆与艺术机构', award: '曾以约430万美元成为史上最贵照片（2011）',
  desc: '天、河、草坪被压成几条精确的水平色带，数码后期抹去了狗、行人与厂房——古尔斯基要的不是莱茵河的样子，而是"莱茵河的概念"。当摄影做到极简的尽头，它就变成了抽象绘画。先锋之处在于：他公开承认修图，把"真实"换成了"本质"。',
  tags: ['水平色带', '数码抽象', '极简到尽头', '巨幅输出'],
  palette: ['#7a8a94', '#5a7a4e', '#9ab86a'],
  query: 'Andreas Gursky Rhein II 1999'
},
{
  id: 'sherman-filmstills', cat: 'art',
  title: '无题电影剧照', titleEn: 'Untitled Film Stills',
  photographer: '辛迪·雪曼', photographerEn: 'Cindy Sherman',
  year: '1977–1980', source: 'MoMA 收藏',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（1999）',
  desc: '雪曼自导自演了 70 个"不存在的电影"里的女主角：图书馆员、家庭主妇、逃亡的女人……每一张都让你觉得"我好像看过这部片"。她用摄影证明：我们对女性的想象是被电影预先写好的剧本。观念摄影的开山之作——照片可以是提问，不是记录。',
  tags: ['自拍扮演', '身份建构', '电影感引用', '观念摄影'],
  palette: ['#2a2a2c', '#6e6a62', '#cfc8b8'],
  query: 'Cindy Sherman Untitled Film Stills'
},
{
  id: 'crewdson-roses', cat: 'art',
  title: '玫瑰之下', titleEn: 'Beneath the Roses',
  photographer: '格雷戈里·克鲁森', photographerEn: 'Gregory Crewdson',
  year: '2003–2008', source: '美术馆收藏',
  sourceGroup: '美术馆与艺术机构',
  desc: '为了一张照片，克鲁森动用好莱坞剧组：封路、起重机、几十盏电影灯。美国小镇的黄昏，人物站在自家草坪上失神——每一帧都是一部没有剧情的电影，悬念全部交给观众。看他如何用"窗内暖光 + 街道冷光"制造既熟悉又不安的梦境感。',
  tags: ['电影级布光', '悬置叙事', '美国小镇', '黄昏蓝调'],
  palette: ['#1e2a38', '#4e5a6a', '#e8b86a'],
  query: 'Gregory Crewdson Beneath the Roses'
},
{
  id: 'wall-gust', cat: 'art',
  title: '突来的一阵风（仿北斋）', titleEn: 'A Sudden Gust of Wind (after Hokusai)',
  photographer: '杰夫·沃尔', photographerEn: 'Jeff Wall',
  year: '1993', source: '泰特美术馆收藏',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（2002）',
  desc: '以葛饰北斋的浮世绘为蓝本，沃尔历时一年多、合成上百张底片，重演了"一阵风掀飞纸张"的瞬间，再以巨大的灯箱展出。一张"摆拍 + 合成"的照片为何是杰作？因为它逼问摄影的本质：快门抓住的偶然，和精心建造的偶然，哪个更真实？',
  tags: ['名画重构', '多底合成', '灯箱装置', '人造瞬间'],
  palette: ['#8a9aa4', '#c8c2b0', '#3e4a3a'],
  query: 'Jeff Wall A Sudden Gust of Wind after Hokusai 1993'
},
{
  id: 'fanho-shadow', cat: 'art',
  title: '阴影', titleEn: 'Approaching Shadow',
  photographer: '何藩', photographerEn: 'Fan Ho',
  year: '1954', source: '个人创作 · 画廊收藏',
  sourceGroup: '个人项目',
  desc: '香港，白墙前的少女低头伫立，一道巨大的斜影正要将她吞没——那道阴影其实是何藩在暗房里"画"上去的。几何对角线分割画面，光与影成为青春与时间的隐喻。东方街头摄影美学的巅峰：构图是骨，光影是肉，诗意是魂。',
  tags: ['对角线构图', '暗房再创作', '光影隐喻', '港式诗意'],
  palette: ['#1a1a1a', '#787878', '#e0ded8'],
  query: 'Fan Ho Approaching Shadow 1954'
},
{
  id: 'woodman-untitled', cat: 'art',
  title: '无题（自拍系列）', titleEn: 'Untitled Self-Portraits',
  photographer: '弗兰切斯卡·伍德曼', photographerEn: 'Francesca Woodman',
  year: '1975–1981', source: '美术馆收藏',
  sourceGroup: '美术馆与艺术机构',
  desc: '废弃旧宅里，长曝光让她的身体化成一团正在消散的雾，与剥落的墙皮融为一体。伍德曼 22 岁离世，留下数百张关于存在与消逝的私语。她教会后来者：模糊不是失误，身体可以是颜料，自拍可以是最诚实也最深的艺术形式。',
  tags: ['长曝光残影', '身体与空间', '私摄影', '存在主题'],
  palette: ['#3a342c', '#8a8074', '#d8d0c0'],
  query: 'Francesca Woodman self portrait'
},
{
  id: 'kawauchi-illuminance', cat: 'art',
  title: '照度', titleEn: 'Illuminance',
  photographer: '川内伦子', photographerEn: 'Rinko Kawauchi',
  year: '2011', source: '摄影集《Illuminance》',
  sourceGroup: '个人项目',
  desc: '一滴水、一群飞鸟、掌心的光斑——川内伦子用 6×6 双反相机和轻微过曝的柔光，把最寻常的日常微物拍成神迹。低饱和的青白色调如呼吸般轻。她代表了与"决定性瞬间"相反的另一种审美：不抓取戏剧，而是凝视平淡里的微光。',
  tags: ['过曝柔光', '日常神性', '青白色调', '6×6画幅'],
  palette: ['#dce8e8', '#a8c4c0', '#6a8a88'],
  query: 'Rinko Kawauchi Illuminance'
},

// ─────────────── 创意 CREATIVE ───────────────
{
  id: 'halsman-dali', cat: 'creative',
  title: '原子的达利', titleEn: 'Dalí Atomicus',
  photographer: '菲利普·哈尔斯曼', photographerEn: 'Philippe Halsman',
  year: '1948', source: 'LIFE',
  sourceGroup: '杂志与媒体',
  desc: '三只猫、一盆水、悬空的画架与跳起来的达利——在没有 Photoshop 的年代，全靠助手们同时抛掷、重复了二十多次才得到这一帧。哈尔斯曼相信"跳跃时人无法伪装自己"。创意摄影的元年之作：想象力先画好草图，执行力让它落地。',
  tags: ['悬停瞬间', '多元素编排', '实拍特技', '超现实'],
  palette: ['#e8e4da', '#9a948a', '#2e2a26'],
  query: 'Philippe Halsman Dali Atomicus 1948'
},
{
  id: 'johansson-impact', cat: 'creative',
  title: '冲击', titleEn: 'Impact',
  photographer: '埃里克·约翰逊', photographerEn: 'Erik Johansson',
  year: '2016', source: '个人创作',
  sourceGroup: '个人项目',
  desc: '平静的湖面像一面玻璃镜被砸碎，碎片悬在空中，倒影还停留在碎片上。瑞典超现实大师约翰逊的所有素材都亲自实拍——后期不是为了造假，而是为了让"不可能"在透视、光线、质感上完全可信。创意的秘诀：错觉要建立在百分之百正确的物理上。',
  tags: ['超现实合成', '物理可信度', '镜面隐喻', '实拍素材'],
  palette: ['#2e4a5e', '#6a93a8', '#d8e8ec'],
  query: 'Erik Johansson Impact surreal photography'
},
{
  id: 'madoz-objects', cat: 'creative',
  title: '物的双关', titleEn: 'Objects',
  photographer: '切马·马多斯', photographerEn: 'Chema Madoz',
  year: '1990s–今', source: '个人创作 · 画廊收藏',
  sourceGroup: '个人项目',
  desc: '火柴排成栅栏，水滴变成表盘，云朵被关进鸟笼——马多斯只用黑白、静物和一个念头。没有任何数码合成，全部在拍摄前用双手完成。他证明创意摄影的核心不是后期技术，而是"重新观看"：让两个不相干的日常之物，在相遇时产生第三层意义。',
  tags: ['视觉双关', '黑白静物', '零后期', '观念之巧'],
  palette: ['#e6e6e2', '#9c9c98', '#2c2c2a'],
  query: 'Chema Madoz surreal black and white objects'
},
{
  id: 'miller-malkovich', cat: 'creative',
  title: '马尔科维奇：向大师致敬', titleEn: 'Malkovich, Malkovich, Malkovich',
  photographer: '桑德罗·米勒', photographerEn: 'Sandro Miller',
  year: '2014', source: '个人项目 · 画廊巡展',
  sourceGroup: '个人项目',
  desc: '演员约翰·马尔科维奇一人重演了阿富汗少女、丘吉尔、梦露、达利等数十张百年经典——布光、服装、胶片质感全部按原作复刻。这既是一封写给摄影史的情书，也是一堂公开课：当你能逐一指出每张"翻拍"复刻了原作的哪种光线，你的审美就毕业了。',
  tags: ['经典复刻', '布光考古', '扮演与致敬', '摄影史'],
  palette: ['#34302a', '#7a6a52', '#cdbc9a'],
  query: 'Sandro Miller Malkovich Malkovich homage masters'
},
{
  id: 'thorgerson-wywh', cat: 'creative',
  title: '燃烧的握手', titleEn: 'Wish You Were Here',
  photographer: '斯托姆·索格森', photographerEn: 'Storm Thorgerson',
  year: '1975', source: 'Pink Floyd 专辑封面',
  sourceGroup: '个人项目',
  desc: '两个西装男人在好莱坞片场握手，其中一人浑身着火——真实点燃，特技演员被烧到眉毛才换来这一帧。为平克·弗洛伊德设计的这张封面讽刺唱片业的虚伪："被烧伤"也要维持体面交易。在 PS 诞生之前，超现实只能靠胆量与执行完成。',
  tags: ['实拍火焰', '商业讽喻', '专辑视觉', '危险执行'],
  palette: ['#c8782e', '#e8b86a', '#3a342e'],
  query: 'Storm Thorgerson Pink Floyd Wish You Were Here burning handshake 1975'
},
{
  id: 'nikon-smallworld', cat: 'creative',
  title: '尼康微观世界大赛', titleEn: 'Nikon Small World',
  photographer: '历届获奖者', photographerEn: 'Various Winners',
  year: '1975–今', source: '尼康显微摄影大赛',
  sourceGroup: '尼康',
  desc: '神经元如闪电分叉，雪花结晶如哥特玫瑰窗，斑马鱼胚胎的荧光如星云——尼康自 1975 年创办的显微摄影大赛，把人眼永远无法直视的尺度变成抽象艺术。审美训练的好处在于：当构图、色彩、节奏来自自然本身时,你会重新校准"什么叫美"。',
  tags: ['显微摄影', '科学之美', '荧光色彩', '抽象构成'],
  palette: ['#0e1a3a', '#3e2a8a', '#3edace'],
  query: 'Nikon Small World photomicrography competition winners'
},

// ─────────────── 人文纪实 DOCUMENTARY ───────────────
{
  id: 'hcb-lazare', cat: 'doc',
  title: '圣拉扎尔车站背后', titleEn: 'Behind the Gare Saint-Lazare',
  photographer: '亨利·卡蒂埃-布列松', photographerEn: 'Henri Cartier-Bresson',
  year: '1932', source: '玛格南图片社 · 美术馆收藏',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（1982）',
  desc: '男人跃过积水，脚尖距离水面只剩一瞬——他的姿态恰好与背后海报上的舞者互为镜像，涟漪与梯子的几何彼此应和。布列松从围栏缝隙里盲拍到这一帧，"决定性瞬间"从此成为摄影的核心词汇：直觉按下快门时，几何已在画面里就位。',
  tags: ['决定性瞬间', '镜像呼应', '几何直觉', '盲拍'],
  palette: ['#1c1e20', '#5e6266', '#c2c4c2'],
  query: 'Henri Cartier-Bresson Behind the Gare Saint-Lazare 1932'
},
{
  id: 'lange-migrant', cat: 'doc',
  title: '流民母亲', titleEn: 'Migrant Mother',
  photographer: '多萝西娅·兰格', photographerEn: 'Dorothea Lange',
  year: '1936', source: '美国农业安全管理局（FSA）项目',
  sourceGroup: '美术馆与艺术机构',
  desc: '大萧条中的加州豌豆采摘营，32 岁的母亲弗洛伦丝皱眉望向远方，两个孩子把脸埋进她的肩膀。稳定的三角形构图带着文艺复兴圣母像的回声，而那道望向画外的目光让焦虑无处安放。一张照片推动了政府救济——纪实摄影力量的原点。',
  tags: ['三角构图', '圣母像回声', '画外目光', '社会推动力'],
  palette: ['#2a2622', '#6e665a', '#cfc6b4'],
  query: 'Dorothea Lange Migrant Mother 1936'
},
{
  id: 'eisenstaedt-vjday', cat: 'doc',
  title: '胜利日之吻', titleEn: 'V-J Day in Times Square',
  photographer: '阿尔弗雷德·艾森施泰特', photographerEn: 'Alfred Eisenstaedt',
  year: '1945', source: 'LIFE',
  sourceGroup: '杂志与媒体',
  desc: '二战结束的消息传来，时代广场上水兵揽过身旁的护士亲吻。白色护士服在深色水兵制服与灰色人群中央"炸开"，背景的行人笑着望向他们,构成天然的视线引导。看似运气，背后是艾森施泰特数十年的街头直觉：他早已注意到那个见人就吻的水兵，提前跟了几步。',
  tags: ['明暗中心', '视线引导', '历史瞬间', '街头预判'],
  palette: ['#26262a', '#6a6a70', '#e4e4e0'],
  query: 'Alfred Eisenstaedt V-J Day Times Square kiss 1945'
},
{
  id: 'salgado-serra', cat: 'doc',
  title: '塞拉佩拉达金矿', titleEn: 'Gold: Serra Pelada',
  photographer: '塞巴斯蒂昂·萨尔加多', photographerEn: 'Sebastião Salgado',
  year: '1986', source: '《劳动者》项目 · 美术馆巡展',
  sourceGroup: '哈苏国际摄影奖得主', award: '哈苏国际摄影奖得主（1989）',
  desc: '巴西的巨型露天金矿里，五万名淘金者背着泥土在木梯上攀爬，密如蚁群——没有机器，只有人。圣经般的尺度让人想起布鲁盖尔的《巴别塔》。萨尔加多的黑白不是怀旧，而是把个体的苦难升格为人类境况的寓言。震撼，可以是一种构图密度。',
  tags: ['人海密度', '史诗尺度', '俯瞰构图', '劳动叙事'],
  palette: ['#22201c', '#6a6456', '#bcb4a0'],
  query: 'Sebastiao Salgado Serra Pelada gold mine 1986'
},
{
  id: 'ut-napalm', cat: 'doc',
  title: '战火中的女孩', titleEn: 'The Terror of War',
  photographer: '黄幼公（美联社）', photographerEn: 'Nick Ut / AP',
  year: '1972', source: '世界新闻摄影奖 · 普利策奖',
  sourceGroup: '世界新闻摄影奖', award: '世界新闻摄影奖 1973 年度照片 · 普利策奖',
  desc: '越南战场，燃烧弹袭击后孩子们沿公路奔逃，9 岁的潘金福张开双臂哭喊。前景奔跑的孩子与背景浓烟的纵深、士兵漠然的行进，构成地狱的透视图。这张照片加速了反战舆论——纪实摄影最沉重的一课：有时按下快门本身就是历史行为。',
  tags: ['纵深透视', '新闻伦理', '历史影响力', '直面苦难'],
  palette: ['#2e2a26', '#7a7268', '#cac0b0'],
  query: 'Nick Ut The Terror of War napalm girl 1972'
},
{
  id: 'riboud-flower', cat: 'doc',
  title: '枪炮与鲜花', titleEn: 'The Ultimate Confrontation',
  photographer: '马克·吕布', photographerEn: 'Marc Riboud',
  year: '1967', source: '玛格南图片社',
  sourceGroup: '杂志与媒体',
  desc: '华盛顿反战游行，17 岁的简·罗斯·卡斯米尔举着一朵花，面对一排上了刺刀的步枪。对峙线恰好构成画面的对角线：左侧是金属的、重复的、匿名的，右侧是柔软的、唯一的、有脸庞的。温柔在构图上"以一敌百"——对比是纪实摄影最锋利的修辞。',
  tags: ['对角对峙', '刚柔对比', '以少胜多', '象征瞬间'],
  palette: ['#26282a', '#62666a', '#c8c8c4'],
  query: 'Marc Riboud flower bayonets Washington 1967'
},
{
  id: 'wang-train', cat: 'doc',
  title: '火车上的中国人', titleEn: 'Chinese on the Train',
  photographer: '王福春', photographerEn: 'Wang Fuchun',
  year: '1978–2000s', source: '个人项目（40年拍摄）',
  sourceGroup: '个人项目',
  desc: '绿皮车厢里，有人在行李架下打麻将,有人抱着鸟笼打盹，婴儿在网兜里酣睡。王福春用四十年和数十万张底片记录流动的中国：拥挤中的幽默、艰辛中的温情。他证明伟大的纪实不需要远方——长期凝视一个最熟悉的场景，时间会替你完成史诗。',
  tags: ['长期项目', '幽默与温情', '车厢框架构图', '时代切片'],
  palette: ['#2a2e2a', '#5e6a5e', '#b8bca8'],
  query: '王福春 火车上的中国人 Wang Fuchun Chinese on the train'
},
{
  id: 'nissen-embrace', cat: 'doc',
  title: '第一个拥抱', titleEn: 'The First Embrace',
  photographer: '马斯·尼森', photographerEn: 'Mads Nissen',
  year: '2020', source: '世界新闻摄影奖',
  sourceGroup: '世界新闻摄影奖', award: '世界新闻摄影奖 2021 年度照片',
  desc: '巴西养老院，85 岁的罗莎在隔离五个月后，隔着透明的"拥抱帘"得到第一个拥抱。塑料布上的反光恰好展开成一对翅膀的形状，护理员的手环在老人背后。疫情年代的苦难报道千万张，评委选择了这张——因为顶级的新闻摄影最终拍的是希望的形状。',
  tags: ['偶得的象征', '塑料反光', '拥抱构图', '疫情记忆'],
  palette: ['#3a3430', '#8a7a6a', '#e8d8c0'],
  query: 'Mads Nissen The First Embrace World Press Photo 2021'
}

];
