const ANZUR_MENU_CATEGORIES = [
  {
    "page": 2,
    "id": "cold_starters",
    "title": {
      "ru": "Холодные закуски",
      "tj": "Хӯрокҳои сард",
      "en": "Cold Starters",
      "zh": "经典冷盘与前菜"
    },
    "items": [
      {
        "name": {
          "ru": "Баклажаны по-домашнему",
          "tj": "Бодимҷони хонагӣ",
          "en": "Homestyle Eggplant",
          "zh": "家常风味烤茄子"
        },
        "weight": "180g",
        "price": "55 TJS",
        "desc": {
          "ru": "Слайсы обжаренных баклажанов подаются под сальсой из свежих томатов, посыпано сыром Пармезан",
          "tj": "Бурдаҳои бодимҷони бирён бо соуси помидори тару тоза ва панири Пармезан",
          "en": "Fried eggplant slices served with fresh tomato salsa, finished with aged Parmesan",
          "zh": "香煎鲜嫩茄子片，佐以主厨特调新鲜番茄莎莎酱并缀以帕玛森干酪碎"
        }
      },
      {
        "name": {
          "ru": "Сыр Буратта с соусом Песто",
          "tj": "Панири Буратта бо соуси Песто",
          "en": "Burrata with Pesto Sauce",
          "zh": "布拉塔鲜水牛奶酪佐罗勒青酱"
        },
        "weight": "225g",
        "price": "178 TJS",
        "desc": {
          "ru": "Нежнейший сыр Буратта подаётся на подушке из баклажановой икры с соусом Песто",
          "tj": "Панири мулоими Буратта рӯи икраи бодимҷон бо соуси итолиёвии Песто",
          "en": "Delicate creamy Burrata served over roasted eggplant caviar with homemade basil pesto",
          "zh": "流心鲜嫩布拉塔干酪，搭配慢烤茄子鱼子酱与手工鲜打罗勒松子青酱"
        }
      },
      {
        "name": {
          "ru": "Брускета Капрезе",
          "tj": "Брускетаи Капрезе",
          "en": "Bruschetta Caprese",
          "zh": "卡普里意式风味烤面包小吃"
        },
        "weight": "200g",
        "price": "115 TJS",
        "desc": {
          "ru": "Обжаренные ломтики хлеба с кусочками моцареллы, спелыми томатами и оливковым маслом",
          "tj": "Нони бирён бо панири мотсарелла, помидори пухта ва равғани зайтун",
          "en": "Toasted Italian bread with creamy mozzarella, ripe garden tomatoes, and extra virgin olive oil",
          "zh": "酥脆意式烤面包薄片，覆盖新鲜莫扎里拉水牛奶酪、蜜汁番茄与特级初榨橄榄油"
        }
      },
      {
        "name": {
          "ru": "Брускета с лососем",
          "tj": "Брускета бо лосось",
          "en": "Bruschetta with Salmon",
          "zh": "烟熏大西洋三文鱼烤面包小吃"
        },
        "weight": "200g",
        "price": "155 TJS",
        "desc": {
          "ru": "Атлантический слабосолёный лосось на хрустящем багете с нежным сливочным сыром",
          "tj": "Лососи камнамак дар нони фаронсавӣ бо панири қаймоқӣ",
          "en": "Mildly cured Atlantic salmon over toasted French baguette with delicate cream cheese",
          "zh": "精选大西洋低温微腌三文鱼片，搭配脆烤法棍与丝滑醇香奶油干酪"
        }
      },
      {
        "name": {
          "ru": "Салат Капрезе с песто",
          "tj": "Хӯриши Капрезе бо песто",
          "en": "Classic Caprese Salad",
          "zh": "经典意式卡普里水牛奶酪番茄沙拉"
        },
        "weight": "250g",
        "price": "195 TJS",
        "desc": {
          "ru": "Нежнейший сыр моцарелла подаётся с томатами под соусом Песто с кедровыми орехами",
          "tj": "Панири мотсарелла бо помидор, соуси Песто ва чормағзи санавбар",
          "en": "Tender fresh mozzarella layered with heirloom tomatoes, fragrant pesto, and pine nuts",
          "zh": "新鲜莫扎里拉奶酪切片搭配熟成蜜茄，淋上罗勒坚果青酱与香脆松子"
        }
      },
      {
        "name": {
          "ru": "Мясное плато «Анзур»",
          "tj": "Лаълии гӯштии «Анзур»",
          "en": "Signature Anzur Meat Platter",
          "zh": "安祖尔特制中亚冷切肉食拼盘"
        },
        "weight": "350g",
        "price": "245 TJS",
        "desc": {
          "ru": "Домашний традиционный казы из конины, пикантная бастурма, говяжий язык и ростбиф",
          "tj": "Қазии хонагии асп, бастурмаи хуштаъм, забони гов ва ростбифи хушлаззат",
          "en": "Traditional house-made horsemeat kazy, spiced basturma, tender beef tongue, and roasted beef",
          "zh": "传统手工马肉香肠卡兹(Kazy)、秘制香料风干牛肉片、慢煮鲜牛舌与主厨烤牛肉"
        }
      },
      {
        "name": {
          "ru": "Сырное плато с горным мёдом",
          "tj": "Лаълии панирӣ бо асали кӯҳӣ",
          "en": "Artisan Cheese Board with Mountain Honey",
          "zh": "精选欧洲风味干酪拼盘佐高山原蜜"
        },
        "weight": "300g",
        "price": "225 TJS",
        "desc": {
          "ru": "Пармезан, камамбер, дор-блю, сулугуни, грецкие орехи и натуральный горный мёд",
          "tj": "Пармезан, камамбер, дор-блю, сулугунӣ, чормағз ва асали табиии баландкӯҳ",
          "en": "Parmesan, Camembert, Dorblu, Suluguni, paired with walnuts and natural mountain honey",
          "zh": "熟成帕玛森、法国卡门贝尔、蓝纹干酪与苏鲁古尼干酪，伴以香脆核桃仁与高山纯天然百花蜜"
        }
      },
      {
        "name": {
          "ru": "Горный лук Анзур с соленьями",
          "tj": "Пиёзи кӯҳии Анзур бо намакинҳо",
          "en": "Anzur Mountain Onion & Pickles",
          "zh": "特产安祖尔高山珍珠野葱与传统腌菜"
        },
        "weight": "280g",
        "price": "75 TJS",
        "desc": {
          "ru": "Эндемичный горный деликатес — маринованный лук Анзур с хрустящими домашними соленьями",
          "tj": "Неъмати нодири кӯҳӣ — пиёзи хуштаъми Анзур бо бодирингу помидори намакин",
          "en": "Endemic mountain delicacy — wild pickled Anzur onion served with crisp house pickles",
          "zh": "高原珍稀特产：古法慢腌安祖尔珍珠野葱，佐以中亚自制香脆时令腌渍蔬果"
        }
      },
      {
        "name": {
          "ru": "Свежие фермерские овощи с зеленью",
          "tj": "Сабзавоти тару тоза бо кабудӣ",
          "en": "Fresh Farm Vegetables & Mountain Herbs",
          "zh": "塔吉克高山农场鲜蔬大拼盘"
        },
        "weight": "400g",
        "price": "105 TJS",
        "desc": {
          "ru": "Сладкие гиссарские томаты, хрустящие огурцы, болгарский перец, свежий редис, базилик и кинза",
          "tj": "Помидору бодиринги тозаи Ҳисор, қаланфури ширин, райҳону гашнич",
          "en": "Sweet Gissar tomatoes, crisp cucumbers, sweet bell peppers, red radish, purple basil, and coriander",
          "zh": "吉萨尔高甜沙瓤番茄、爽脆水黄瓜、彩椒、水萝卜，配以紫罗勒与鲜香菜"
        }
      }
    ]
  },
  {
    "page": 4,
    "id": "salads",
    "title": {
      "ru": "Салаты",
      "tj": "Хӯришҳо",
      "en": "Salads",
      "zh": "精选沙拉"
    },
    "items": [
      {
        "name": {
          "ru": "Стейк-салат с медальонами Josper",
          "tj": "Стейк-хӯриш бо медалйонҳои Josper",
          "en": "Josper Steak Salad with Medallions",
          "zh": "乔斯珀炭烤嫩牛肉金牌沙拉"
        },
        "weight": "260g",
        "price": "125 TJS",
        "desc": {
          "ru": "Нежнейшая вырезка Josper, микс хрустящих салатов, черри, кедровые орехи, соус из сосновых шишек",
          "tj": "Лаҳми мулоими Josper, омехтаи хӯришҳо, помидорҳои черри, чормағзи санавбар ва соуси хоса",
          "en": "Tender Josper beef medallions, fresh crisp greens, cherry tomatoes, pine nuts, and wild pine cone reduction",
          "zh": "炭烤特级鲜嫩小牛柳、爽脆有机混合生菜、樱桃番茄、香脆松子佐野生松果特调果木香汁"
        }
      },
      {
        "name": {
          "ru": "Хрустящие баклажаны со страчателлой",
          "tj": "Бодимҷони қаҳваранг бо страчателла",
          "en": "Crispy Eggplants with Stracciatella",
          "zh": "金黄香脆茄盒佐意式斯特拉切拉拉丝奶酪"
        },
        "weight": "240g",
        "price": "118 TJS",
        "desc": {
          "ru": "Хрустящая темпурная корочка, свежий сливочный сыр страчателла, спелые томаты и соус сладкий чили",
          "tj": "Бодимҷони қаҳваранги бирён бо панири страчателла, помидори пухта ва соуси чилии ширин",
          "en": "Crispy golden eggplant crust, velvety stracciatella cheese, vine tomatoes, and sweet chili glaze",
          "zh": "外酥里嫩的金黄脆皮茄块，搭配轻盈鲜浓斯特拉切拉奶酪、多汁番茄与秘制甜辣风味汁"
        }
      },
      {
        "name": {
          "ru": "Салат Греческий с фетой",
          "tj": "Хӯриши юнонӣ бо панири фета",
          "en": "Classic Greek Salad with Feta",
          "zh": "经典希腊田园沙拉配特级费塔羊奶酪"
        },
        "weight": "280g",
        "price": "78 TJS",
        "desc": {
          "ru": "Свежие овощи, греческие оливки Каламата, сыр фета, красный лук и орегано под оливковым маслом",
          "tj": "Сабзавоти тоза, зайтуни юнонӣ, панири фета, пиёзи сурх бо равғани зайтун",
          "en": "Crisp garden vegetables, Kalamata olives, creamy feta block, red onion, and Aegean oregano vinaigrette",
          "zh": "新鲜脆甜黄瓜、彩椒与罗马番茄，搭配卡拉马塔黑橄榄、浓醇费塔奶酪与初榨橄榄油牛至汁"
        }
      },
      {
        "name": {
          "ru": "Салат Нобиани с фасолью и грецким орехом",
          "tj": "Хӯриши Нобиани бо лӯбиё ва чормағз",
          "en": "Nobiani Red Bean & Walnut Salad",
          "zh": "高加索风味核桃红芸豆温润特色沙拉"
        },
        "weight": "220g",
        "price": "75 TJS",
        "desc": {
          "ru": "Красная томлёная фасоль, тёртый грецкий орех, гранатовый соус наршараб, кинза и пряные кавказские травы",
          "tj": "Лӯбиёи сурх, чормағзи кӯфта, соуси анор (наршароб), гашнич ва гиёҳҳои хушбӯй",
          "en": "Simmered red kidney beans, ground walnuts, pomegranate molasses reduction, cilantro, and fragrant spices",
          "zh": "软糯红芸豆、精选山核桃碎、阿塞拜疆纯正石榴浓汁、鲜香菜与高加索传统香草"
        }
      },
      {
        "name": {
          "ru": "Салат с обожжённым лососем и авокадо",
          "tj": "Хӯриш бо лососи сӯхта ва авокадо",
          "en": "Torched Salmon & Avocado Salad",
          "zh": "炙烧大西洋三文鱼牛油果沙拉"
        },
        "weight": "240g",
        "price": "155 TJS",
        "desc": {
          "ru": "Слабосолёный лосось, спелый авокадо, микс зелени, цитрусовый дрессинг и кунжут кимчи",
          "tj": "Лососи нарм, авокадо, кабудӣ, соуси ситрусӣ ва кунҷиди хуштаъм",
          "en": "Flame-torched salmon, buttery ripe avocado, baby salad leaves, citrus yuzu dressing, and kimchi sesame",
          "zh": "微火轻炙三文鱼切片、成熟牛油果、有机幼苗生菜，佐日本柚子香橙果醋汁与泡菜芝麻"
        }
      },
      {
        "name": {
          "ru": "Салат с тигровыми креветками и осьминогом",
          "tj": "Хӯриш бо майгу ва ҳаштпо",
          "en": "Grilled Tiger Prawn & Baby Octopus Salad",
          "zh": "地中海烤虎虾配幼嫩八爪鱼温热沙拉"
        },
        "weight": "250g",
        "price": "125 TJS",
        "desc": {
          "ru": "Морепродукты на гриле Josper, бэби-картофель, руккола, лимонно-горчичный дрессинг и каперсы",
          "tj": "Маҳсулоти баҳрии рӯи грил, картошкаи хурд, руккола ва соуси лимӯгӣ",
          "en": "Josper-grilled ocean seafood, roasted baby potatoes, peppery wild arugula, Dijon lemon dressing, and capers",
          "zh": "西班牙炭烤炉快炙大虎虾与八爪鱼、嫩烤小土豆、野生芝麻菜，配第戎芥末柠檬酸豆汁"
        }
      },
      {
        "name": {
          "ru": "Цезарь с фермерским цыплёнком",
          "tj": "Сезар бо гӯшти мурғ",
          "en": "Classic Chicken Caesar Salad",
          "zh": "经典意式烤嫩鸡胸凯撒沙拉"
        },
        "weight": "260g",
        "price": "68 TJS",
        "desc": {
          "ru": "Хрустящий романо, сочная куриная грудка на гриле, пармезан 24 мес., крутоны из фокаччи и анчоусный дрессинг",
          "tj": "Баргҳои романо, гӯшти мурғ дар грил, панири пармезан ва соуси хоса",
          "en": "Crisp romaine hearts, grilled chicken breast, 24-month Parmigiano, focaccia croutons, and artisan Caesar dressing",
          "zh": "清脆罗马生菜心、果木烤嫩鸡胸肉、24个月熟成帕玛森干酪、现烤佛卡夏面包粒与传统鳀鱼凯撒酱"
        }
      },
      {
        "name": {
          "ru": "Цезарь с королевскими креветками",
          "tj": "Сезар бо майгуҳои шоҳона",
          "en": "Royal King Prawn Caesar Salad",
          "zh": "尊享金牌炭烤大王虾凯撒沙拉"
        },
        "weight": "280g",
        "price": "145 TJS",
        "desc": {
          "ru": "Обжаренные на углях гигантские креветки, пармезан, листья романо и фирменный соус Цезарь",
          "tj": "Майгуҳои калони дар ангишт бирёншуда, панири пармезан ва баргҳои тару тоза",
          "en": "Charcoal-grilled king prawns, aged parmesan shavings, crispy romaine hearts, and house Caesar dressing",
          "zh": "果木炭烤香脆特大王虾、帕玛森干酪薄片、清爽罗马生菜与特调醇滑凯撒汁"
        }
      }
    ]
  },
  {
    "page": 6,
    "id": "hot_starters",
    "title": {
      "ru": "Горячие закуски",
      "tj": "Хӯрокҳои гарм",
      "en": "Hot Starters",
      "zh": "热前菜与镬炒"
    },
    "items": [
      {
        "name": {
          "ru": "Жареный лагман Кавурга",
          "tj": "Лағмони бирёни Қовурма",
          "en": "Kavurga Pan-Fried Crispy Lagman",
          "zh": "镬气铁板香炒拉条子 (Kavurga)"
        },
        "weight": "380g",
        "price": "68 TJS",
        "desc": {
          "ru": "Тянутая вручную лапша, обжаренная на раскалённом воке с говядиной, сладким перцем, джусаем и чесноком",
          "tj": "Оши кашидаи дастӣ, бирёншуда бо гӯшти гов, қаланфури ширин, ҷусай ва сирпиёз",
          "en": "Hand-pulled artisanal noodles wok-seared with tender beef slices, sweet bell peppers, Chinese chives, and garlic",
          "zh": "手工劲道拉面，大火宽油快炒嫩牛肉丝、甜彩椒、鲜韭苔与浓郁蒜蓉辣汁"
        }
      },
      {
        "name": {
          "ru": "Лагман Уйгурский классический",
          "tj": "Лағмони классикии уйғурӣ",
          "en": "Traditional Uyghur Soupy Lagman",
          "zh": "正宗维吾尔风味浓汁手工拉面"
        },
        "weight": "450g",
        "price": "45 TJS",
        "desc": {
          "ru": "Тянутая лапша в густом ароматном бульоне с сочным мясом, сезонными овощами, стручковой фасолью и специями",
          "tj": "Оши дастӣ дар шӯрбои ғализи хушбӯй бо гӯшт, сабзавот ва нахӯд",
          "en": "Long hand-pulled noodles in rich savory broth with tender beef, green beans, tomatoes, and Silk Road spices",
          "zh": "长寿拉面浸润在浓郁牛肉煨汁中，搭配嫩肉丁、四季豆、番茄块与丝路秘制天然香辛料"
        }
      },
      {
        "name": {
          "ru": "Манты с рубленым мясом (1 шт)",
          "tj": "Манту бо гӯшти реза (1 дона)",
          "en": "Traditional Steamed Manti (1 pc)",
          "zh": "经典多汁薄皮手工牛肉包子 (单只)"
        },
        "weight": "80g",
        "price": "16 TJS",
        "desc": {
          "ru": "Тончайшее тесто на пару, сочная рубленая говядина с луком и кумином, подаётся со сметаной",
          "tj": "Хамири тунук дар буғ, гӯшти резаи гов бо пиёз ва зира, бо қаймоқ",
          "en": "Steamed paper-thin dough filled with hand-minced beef, sweet onions, and cumin seeds, served with sour cream",
          "zh": "半透明薄韧面皮，包裹手工切碎多汁牛肉与甜洋葱粒、孜然原粒，蒸汽蒸透配醇香酸奶油"
        }
      },
      {
        "name": {
          "ru": "Тандырная самса Катра Анзур",
          "tj": "Самбӯсаи танӯрии Катра Анзур",
          "en": "Tandoor Samsa Katra Anzur",
          "zh": "安祖尔泥炉千层脆皮烤包子 (Samsa)"
        },
        "weight": "120g",
        "price": "19 TJS",
        "desc": {
          "ru": "Хрустящее слоёное тесто прямо из глиняного тандыра с сочной мясной начинкой и зирой",
          "tj": "Хамири қабат-қабати тунук аз танӯри гилин бо гӯшти солим ва зира",
          "en": "Flaky, buttery layered pastry baked on tandoor clay walls with juicy diced meat and cumin seeds",
          "zh": "泥炉炭火高温炙烤，金黄起酥千层面皮，咬开爆出鲜美牛肉汁与浓郁孜然香气"
        }
      },
      {
        "name": {
          "ru": "Креветки в миндальных лепестках",
          "tj": "Майгу бо бодоми реза",
          "en": "Almond-Crusted Crispy Jumbo Prawns",
          "zh": "杏仁薄脆特级黄金凤尾大虾"
        },
        "weight": "220g",
        "price": "190 TJS",
        "desc": {
          "ru": "Тигровые креветки в хрустящей панировке из миндальных лепестков с авторским соусом васаби-сгущёнка",
          "tj": "Майгуҳои палангӣ бо бодом дар панировка бо соуси ширини васаби",
          "en": "Jumbo tiger prawns encased in sliced toasted almonds with signature sweet wasabi-condensed glaze",
          "zh": "大只黑虎虾身裹满酥脆烘烤杏仁薄片，配主厨招牌秘制微辣甜芥末奶香酱"
        }
      },
      {
        "name": {
          "ru": "Креветки темпура со сладким чили",
          "tj": "Майгуи темпура бо чилии ширин",
          "en": "Golden Tempura Prawns with Sweet Chili",
          "zh": "日式黄金天妇罗脆炸大虾"
        },
        "weight": "200g",
        "price": "175 TJS",
        "desc": {
          "ru": "Золотистая японская панировка темпура, хрустящий кляр и соус унаги с кунжутом",
          "tj": "Панировкаи тиллоии темпура, хамири тунук бо соуси унаги ва кунҷид",
          "en": "Light and airy Japanese tempura batter, crispy fried prawns with sweet unagi glaze and sesame",
          "zh": "轻盈酥脆日式天妇罗面衣，包裹弹牙鲜虾，搭配浓甜鳗鱼汁与烘烤芝麻"
        }
      },
      {
        "name": {
          "ru": "Горячий хрустящий рулет с лососем",
          "tj": "Рулети гарми қаҳваранг бо лосось",
          "en": "Warm Crispy Atlantic Salmon Roll",
          "zh": "热烤金黄酥皮三文鱼芝士卷"
        },
        "weight": "230g",
        "price": "140 TJS",
        "desc": {
          "ru": "Филе атлантического лосося, шпинат, сливочный сыр в хрустящей золотистой корочке",
          "tj": "Гӯшти моҳии лосось, испаноқ ва панири қаймоқӣ дар қабати тиллоӣ",
          "en": "Atlantic salmon fillet, tender baby spinach, and cream cheese baked in a delicate crispy golden crust",
          "zh": "整块大西洋三文鱼嫩肉排、菠菜嫩叶与醇滑干酪包裹于香脆金黄酥皮之中"
        }
      },
      {
        "name": {
          "ru": "Гранд сет горячих закусок к напиткам",
          "tj": "Сетти калони газакҳои гарм",
          "en": "Grand Beer & Party Bites Platter",
          "zh": "豪华聚会佐酒热前菜大拼盘"
        },
        "weight": "450g",
        "price": "68 TJS",
        "desc": {
          "ru": "Гренки бородинские с чесноком, хрустящие сырные палочки моцарелла, кольца кальмара и луковые кольца",
          "tj": "Нони сиёҳи сирпиёздор, чӯбчаҳои панирии мотсарелла ва ҳалқаҳои калмар",
          "en": "Garlic-infused dark rye croutons, melted mozzarella sticks, crispy calamari rings, and onion rings",
          "zh": "经典黑麦蒜香脆面包干、拉丝莫扎里拉奶酪棒、黄金鱿鱼圈与脆炸洋葱圈"
        }
      }
    ]
  },
  {
    "page": 8,
    "id": "soups",
    "title": {
      "ru": "Супы",
      "tj": "Шӯрбоҳо",
      "en": "Soups",
      "zh": "汤类料理"
    },
    "items": [
      {
        "name": {
          "ru": "Шурпа из баранины на косточке",
          "tj": "Шӯрбо аз гӯшти гӯсфанд",
          "en": "Mountain Lamb Shurpa Broth",
          "zh": "高山草原羊排清炖浓汤 (Shurpa)"
        },
        "weight": "450g",
        "price": "65 TJS",
        "desc": {
          "ru": "Наваристый прозрачный бульон из молодого ягнёнка на сахарной косточке с крупными овощами и горными травами",
          "tj": "Шӯрбои шаффофи серғизо аз гӯшти барраи наврас бо сабзавоти калон ва гиёҳҳои кӯҳӣ",
          "en": "Rich clear broth simmered with young bone-in lamb, whole garden potatoes, sweet carrots, and mountain herbs",
          "zh": "整根带髓嫩羊排慢火长炖数小时，汤清如镜无膻味，搭配整颗土豆、黄胡萝卜与高山野草香料"
        }
      },
      {
        "name": {
          "ru": "Шурпа из отборной говядины",
          "tj": "Шӯрбо аз гӯшти гов",
          "en": "Slow-Simmered Beef Shurpa",
          "zh": "特选精品黄牛肉原汁浓汤"
        },
        "weight": "450g",
        "price": "60 TJS",
        "desc": {
          "ru": "Золотистый прозрачный бульон на говяжьей грудинке с цельным картофелем, морковью и зирой",
          "tj": "Шӯрбои тиллоии шаффоф аз синаи гов бо картошкаи бутун, сабзӣ ва зира",
          "en": "Golden clear broth simmered with premium beef brisket, whole potatoes, sweet carrots, and cumin",
          "zh": "精选雪花牛胸肉慢炖出的金黄浓汤，肉质酥烂入味，搭配整颗高山甜土豆"
        }
      },
      {
        "name": {
          "ru": "Дум Шурпа из бычьих хвостов",
          "tj": "Дум-шӯрбо аз думи барзагов",
          "en": "Dum Shurpa Oxtail Collagen Broth",
          "zh": "富含胶原蛋白古法慢煨牛尾汤 (Dum Shurpa)"
        },
        "weight": "450g",
        "price": "65 TJS",
        "desc": {
          "ru": "Старинный целебный суп долгого 6-часового томления с насыщенным коллагеновым вкусом и чесноком",
          "tj": "Шӯрбои шифобахши қадимӣ бо ҷӯшонидани 6-соата, бой аз коллаген ва сирпиёз",
          "en": "Ancient revitalizing soup slow-braised for 6 hours, rich in natural collagen and garlic essences",
          "zh": "中亚百年传承滋补名汤，精选牛尾文火慢炖6小时，汤汁醇厚胶质丰盈，暖胃强身"
        }
      },
      {
        "name": {
          "ru": "Чучвара в бульоне / Угро / Бринчова",
          "tj": "Чучвара / Угро / Бринҷоба",
          "en": "Chuchvara Dumplings / Ugro / Brinchova",
          "zh": "传统手工小金丝饺清汤 (Chuchvara)"
        },
        "weight": "400g",
        "price": "45 TJS",
        "desc": {
          "ru": "Миниатюрные ручные пельмешки с сочным мясом в прозрачном бульоне со свежей зеленью и каймаком",
          "tj": "Пелменҳои хурди дастӣ бо гӯшти солим дар шӯрбои шаффоф бо кабудӣ ва қаймоқ",
          "en": "Petite hand-pinched meat dumplings in clarified beef broth finished with fresh herbs and dollop of kaymak",
          "zh": "一口一个的纯手工迷你牛肉小水饺，汤清味鲜，缀以翠绿香葱香菜与丝滑天然酸奶油"
        }
      },
      {
        "name": {
          "ru": "Том Ям с морепродуктами",
          "tj": "Том Ям бо маҳсулоти баҳрӣ",
          "en": "Tom Yum Seafood Grand Soup",
          "zh": "泰式冬阴功超级海鲜椰香浓汤"
        },
        "weight": "450g",
        "price": "157 TJS",
        "desc": {
          "ru": "Кокосовое молоко, лемонграсс, листья каффир-лайма, галангал, тигровые креветки, кальмары и жасминовый рис",
          "tj": "Шири نارҷил, лимӯи махсус, галангал, майгуҳои калон ва биринҷи ёсуманӣ",
          "en": "Creamy coconut broth with lemongrass, kaffir lime, galangal, king tiger prawns, squid, served with jasmine rice",
          "zh": "浓郁天然椰浆，慢熬香茅、青柠叶与南姜，满满大虎虾与鲜鱿鱼片，配香气扑鼻的泰国茉莉香米"
        }
      },
      {
        "name": {
          "ru": "Суп Милано с песто и шпинатом",
          "tj": "Шӯрбои Милано бо песто ва испаноқ",
          "en": "Milano Velvet Soup with Pesto",
          "zh": "米兰式丝滑翡翠菠菜浓汤佐青酱"
        },
        "weight": "350g",
        "price": "75 TJS",
        "desc": {
          "ru": "Нежный крем-суп из молодого шпината со сливками, кедровыми орешками и пармезаном",
          "tj": "Шӯрбо-креми мулоим аз испаноқ бо қаймоқ, чормағзи санавбар ва панир",
          "en": "Smooth cream of spinach soup infused with sweet cream, toasted pine nuts, and Italian parmesan",
          "zh": "新鲜嫩菠菜细磨成如丝般细腻的翡翠奶油汤，点缀香脆松子仁与帕玛森干酪拉花"
        }
      },
      {
        "name": {
          "ru": "Паста Болоньезе ручной работы",
          "tj": "Пастаи Болонезеи дастии хонагӣ",
          "en": "Handmade Tagliatelle Bolognese",
          "zh": "纯手工宽意面配经典博洛尼亚牛肉酱"
        },
        "weight": "320g",
        "price": "79 TJS",
        "desc": {
          "ru": "Свежие тальятелле, томлёное мясное рагу из говядины по-болонски с томатами San Marzano и пармезаном",
          "tj": "Талятеллеи тару тоза бо рагуи гӯшти гов, помидори итолиёвӣ ва панир",
          "en": "Fresh artisanal tagliatelle pasta with slow-simmered beef ragù, San Marzano tomatoes, and aged Parmesan",
          "zh": "厨师每日鲜压鸡蛋宽面，慢煨6小时圣马扎诺番茄多汁牛肉肉酱，撒满熟成干酪碎"
        }
      },
      {
        "name": {
          "ru": "Паста с цыплёнком и белыми грибами",
          "tj": "Паста бо мурғ ва занбӯруғ",
          "en": "Creamy Fettuccine with Chicken & Porcini",
          "zh": "奶油牛肝菌烤鸡肉特浓意大利面"
        },
        "weight": "340g",
        "price": "70 TJS",
        "desc": {
          "ru": "Фетучини в нежном сливочном соусе с обжаренным куриным филе, белыми грибами и тимьяном",
          "tj": "Фетучини бо соуси қаймоқӣ, гӯшти мурғи бирён, занбӯруғҳои сафед ва гиёҳҳо",
          "en": "Fettuccine ribbon pasta tossed in silky cream sauce with pan-roasted chicken breast and fragrant porcini mushrooms",
          "zh": "经典意式缎带宽面，裹附香浓法式鲜奶油、金黄嫩煎鸡胸肉、野生香气牛肝菌与新鲜百里香"
        }
      }
    ]
  },
  {
    "page": 10,
    "id": "pizza",
    "title": {
      "ru": "Пицца",
      "tj": "Питса",
      "en": "Pizza",
      "zh": "手工意式披萨"
    },
    "items": [
      {
        "name": {
          "ru": "Пицца Ассорти «Анзур»",
          "tj": "Питсаи омехтаи «Анзур»",
          "en": "Signature Anzur Supreme Pizza",
          "zh": "安祖尔豪华招牌综合大肉披萨"
        },
        "weight": "550g",
        "price": "99 TJS",
        "desc": {
          "ru": "Дровяное тесто 48ч созревания, моцарелла fior di latte, ростбиф, казы, охотничьи колбаски, сладкий перец",
          "tj": "Хамири 48-соата, мотсарелла, ростбиф, қазӣ, ҳасибчаҳои шикорӣ ва қаланфур",
          "en": "48-hour fermented dough, fior di latte mozzarella, roast beef, horsemeat kazy, smoked sausages, and bell peppers",
          "zh": "48小时低温慢发酵意式面团，手工拉饼烤出虎皮豹纹边缘，铺满鲜莫扎里拉、烤牛肉、中亚马肉香肠卡兹"
        }
      },
      {
        "name": {
          "ru": "Пицца Четыре сыра (Quattro Formaggi)",
          "tj": "Питсаи Чор панир",
          "en": "Four Cheese Pizza Quattro Formaggi",
          "zh": "经典意式浓郁四种芝士披萨"
        },
        "weight": "480g",
        "price": "95 TJS",
        "desc": {
          "ru": "Сливочный соус, моцарелла, пикантная горгонзола дор-блю, твёрдый пармезан и швейцарский эмменталь",
          "tj": "Соуси қаймоқӣ, мотсарелла, горгонзола, пармезан ва эмментал",
          "en": "White cream base, mozzarella, piquant gorgonzola blue cheese, sharp Parmigiano, and Swiss Emmental",
          "zh": "纯白奶油底酱，完美配比融化莫扎里拉、蓝纹古冈佐拉干酪、成熟帕玛森与瑞士埃门塔尔干酪"
        }
      },
      {
        "name": {
          "ru": "Пицца Пепперони острая",
          "tj": "Питсаи Пепперонии тез",
          "en": "Spicy Pepperoni & Jalapeño Pizza",
          "zh": "经典辣味美式萨拉米香肠意式披萨"
        },
        "weight": "480g",
        "price": "85 TJS",
        "desc": {
          "ru": "Томатный соус San Marzano, моцарелла, пряная острая салями пепперони и свежий базилик",
          "tj": "Соуси помидории San Marzano, мотсарелла, салями пепперонии тунд ва райҳон",
          "en": "San Marzano tomato marinara, melted mozzarella, spicy cured beef pepperoni slices, and fresh basil",
          "zh": "圣马扎诺番茄原汁红酱、融化瀑布莫扎里拉芝士、香辣意式纯牛肉萨拉米香肠与鲜罗勒叶"
        }
      },
      {
        "name": {
          "ru": "Пицца Маргарита Неаполитана",
          "tj": "Питсаи Маргарита",
          "en": "Authentic Pizza Margherita",
          "zh": "那不勒斯传奇纯正玛格丽特披萨"
        },
        "weight": "450g",
        "price": "79 TJS",
        "desc": {
          "ru": "Классика Неаполя: соус из итальянских томатов, сливочная моцарелла fior di latte, оливковое масло и базилик",
          "tj": "Классикаи Неапол: соуси помидори итолиёвӣ, мотсарелла, равғани зайтун ва райҳон",
          "en": "Neapolitan icon: Italian plum tomato sauce, fresh fior di latte mozzarella, extra virgin olive oil, and sweet basil",
          "zh": "意大利国菜象征：鲜打甜番茄糊、新鲜水牛奶酪、特级初榨橄榄油与刚采摘的翠绿甜罗勒"
        }
      }
    ]
  },
  {
    "page": 11,
    "id": "oven_baked",
    "title": {
      "ru": "Блюда в печи",
      "tj": "Таомҳои танӯрӣ",
      "en": "Oven-Baked Dishes",
      "zh": "烤箱美馔与热烤面饼"
    },
    "items": [
      {
        "name": {
          "ru": "Хачапури по-аджарски (Лодочка)",
          "tj": "Хачапури ба тариқи аҷорӣ",
          "en": "Adjaruli Khachapuri Cheese Boat",
          "zh": "阿扎尔流心蛋黄双重芝士小船烤饼"
        },
        "weight": "380g",
        "price": "75 TJS",
        "desc": {
          "ru": "Хрустящая дрожжевая лодочка, щедро наполненная сыром сулугуни, с желтком фермерского яйца и сливочным маслом",
          "tj": "Қаиқчаи хамирӣ бо панири сулугунӣ, зардии тухми табиӣ ва равғани маска",
          "en": "Traditional boat-shaped yeast bread packed with melting suluguni cheese, topped with raw farm egg yolk and butter",
          "zh": "烤至金黄酥脆的小船形状发酵面饼，填满滚烫融化的苏鲁古尼双重芝士，正中窝一颗新鲜农场生蛋黄与特级黄油"
        }
      },
      {
        "name": {
          "ru": "Хачапури по-мегрельски (Круглый)",
          "tj": "Хачапури ба тариқи мегрелӣ",
          "en": "Megruli Double-Cheese Khachapuri",
          "zh": "明格列尔双层厚烤拉丝芝士大圆饼"
        },
        "weight": "420g",
        "price": "70 TJS",
        "desc": {
          "ru": "Круглый закрытый хачапури с двойным слоем сыра: расплавленный сулугуни внутри и хрустящая сырная корочка сверху",
          "tj": "Хачапурии гирд бо ду қабати панири сулугунӣ дар дарун ва боло",
          "en": "Round enclosed flatbread with double layer of cheese: bubbling melted cheese inside and crispy golden crust on top",
          "zh": "双层厚芝士暴击：内层包入丰腴温热苏鲁古尼咸香干酪，外表再厚厚撒满一层烤至金黄焦香的脆皮奶酪"
        }
      },
      {
        "name": {
          "ru": "Фокачча с розмарином / Чесночный хлеб",
          "tj": "Фокачча бо розмарин / Нони сирпиёздор",
          "en": "Rosemary Focaccia / Garlic Crust",
          "zh": "迷迭香初榨橄榄油意式佛卡夏大饼"
        },
        "weight": "220g",
        "price": "25 TJS",
        "desc": {
          "ru": "Воздушный итальянский хлеб с крупной морской солью, свежим розмарином и ароматным оливковым маслом",
          "tj": "Нони ҳавоии итолиёвӣ бо намаки баҳрӣ, розмарин ва равғани зайтун",
          "en": "Airy Italian flatbread sprinkled with flaky sea salt, fragrant garden rosemary, and cold-pressed olive oil",
          "zh": "气孔丰盈蓬松的经典意式手工大面包，表面刷满高品质橄榄油，撒上海盐结晶与新鲜迷迭香"
        }
      },
      {
        "name": {
          "ru": "Традиционная хлебная корзина «Анзур»",
          "tj": "Сабади нонҳои «Анзур»",
          "en": "Artisan Bread Basket Anzur",
          "zh": "安祖尔主厨烘焙手工面包篮"
        },
        "weight": "300g",
        "price": "20 TJS",
        "desc": {
          "ru": "Ассорти свежеиспечённого хлеба: тандырная кульча, фокачча, ржаной бородинский хлеб с чесночным маслом",
          "tj": "Маҷмӯаи нонҳои навпахта: кулчаи танӯрӣ, фокачча, нони сиёҳ бо равғани маска",
          "en": "Assortment of warm freshly baked breads: tandoor kulcha, Italian focaccia, and dark rye with herb butter",
          "zh": "三种热腾腾刚出炉的面包精选：泥炉烤圆馕、意式佛卡夏与蒜香香草黄油黑麦脆面包"
        }
      }
    ]
  },
  {
    "page": 12,
    "id": "side_dishes",
    "title": {
      "ru": "Гарниры",
      "tj": "Гарнирҳо",
      "en": "Side Dishes",
      "zh": "炭烤与特色配菜"
    },
    "items": [
      {
        "name": {
          "ru": "Овощи на гриле Josper",
          "tj": "Сабзавоти пухта дар Josper",
          "en": "Josper Charcoal Grilled Vegetables",
          "zh": "乔斯珀果木炭烤时令鲜蔬拼盘"
        },
        "weight": "250g",
        "price": "55 TJS",
        "desc": {
          "ru": "Цукини, баклажаны, болгарский перец, спелые томаты и шампиньоны с чесночно-травяным маслом",
          "tj": "Кадуча, бодимҷон, қаланфур, помидор ва занбӯруғ бо равғани хушбӯй",
          "en": "Zucchini ribbons, baby eggplant, sweet peppers, vine tomatoes, and brown mushrooms glazed with garlic herb oil",
          "zh": "木炭高温速烤西葫芦、嫩茄、彩椒、熟番茄与口蘑，锁住水分微焦香甜，淋特制蒜香香草橄榄油"
        }
      },
      {
        "name": {
          "ru": "Шампиньоны на углях с сыром",
          "tj": "Занбӯруғҳои рӯи ангишт бо панир",
          "en": "Charcoal-Roasted Mushrooms with Cheese",
          "zh": "炭烤多汁蘑菇盏塞流心芝士"
        },
        "weight": "200g",
        "price": "35 TJS",
        "desc": {
          "ru": "Шляпки свежих шампиньонов, запечённые на мангале с сыром сулугуни и пряным маслом",
          "tj": "Занбӯруғҳои тару тоза дар ангишт бо панири гудохташуда",
          "en": "Plump whole mushroom caps roasted over charcoal stuffed with melting cheese and spices",
          "zh": "新鲜大口蘑原顶，填入香滑苏鲁古尼干酪碳火烘烤，一口爆汁浓香四溢"
        }
      },
      {
        "name": {
          "ru": "Кукуруза на гриле с паприкой",
          "tj": "Маккаҷувори дар грил бо паприка",
          "en": "Sweet Corn on the Cob with Paprika Butter",
          "zh": "炭烤香甜黄玉米段佐烟熏红椒黄油"
        },
        "weight": "200g",
        "price": "30 TJS",
        "desc": {
          "ru": "Сладкая молочная кукуруза, обжаренная на решётке с копчёной паприкой и сливочным маслом",
          "tj": "Маккаҷувории ширин бо равғани маска ва қаланфури хушбӯй",
          "en": "Tender sweet corn cob charred over embers brushed with smoked sweet paprika butter",
          "zh": "金黄香甜多汁水果甜玉米，炭烤微焦刷满特制浓香烟熏红椒黄油酱"
        }
      },
      {
        "name": {
          "ru": "Картофель с розмарином / Пюре / Фри",
          "tj": "Картошка бо розмарин / Пюре / Фри",
          "en": "Rosemary Baby Potatoes / Mash / Fries",
          "zh": "迷迭香脆烤小土豆 / 特浓奶香土豆泥 / 香脆薯条"
        },
        "weight": "200g",
        "price": "18 / 25 / 17 TJS",
        "desc": {
          "ru": "Запечённый бэби-картофель с морской солью и розмарином или бархатистое картофельное пюре со сливками",
          "tj": "Картошкаи хурди пухта бо намаки баҳрӣ ва розмарин ё пюреи мулоим бо қаймоқ",
          "en": "Crispy baby potatoes roasted with sea salt and rosemary, or silk-smooth creamed mashed potatoes",
          "zh": "整颗红皮小土豆撒海盐迷迭香慢烤至外脆里软，或搭配法式醇滑纯牛奶油土豆泥"
        }
      }
    ]
  },
  {
    "page": 13,
    "id": "josper_steaks",
    "title": {
      "ru": "Хосперы",
      "tj": "Хоспер ва стейкҳо",
      "en": "Josper Dishes",
      "zh": "乔斯珀果木烤箱牛排"
    },
    "items": [
      {
        "name": {
          "ru": "Стейк Рибай Prime",
          "tj": "Стейки Рибай Prime",
          "en": "Ribeye Steak Prime",
          "zh": "特级安格斯肉眼牛排 Prime"
        },
        "weight": "350g",
        "price": "380 TJS",
        "desc": {
          "ru": "Мраморная говядина 200 дней зернового откорма, обжаренная в испанской печи Josper на углях",
          "tj": "Гӯшти мармарии гов бо парвариши ғалладонагӣ, дар танӯри испании Josper дар рӯи ангишт пухта мешавад",
          "en": "200-day grain-fed marbled beef grilled over open hardwood charcoal embers in Spanish Josper oven",
          "zh": "200天谷饲特级雪花黑牛，经西班牙乔斯珀果木炭火烤炉炙烤，外焦里嫩肉香四溢"
        }
      },
      {
        "name": {
          "ru": "Томагавк Стейк на кости",
          "tj": "Стейки Томагавк бо устухон",
          "en": "Tomahawk Bone-In Steak",
          "zh": "战斧带骨厚切牛排 (1公斤)"
        },
        "weight": "1000g",
        "price": "350 TJS",
        "desc": {
          "ru": "Грандиозный стейк на длинном ребре для компании, подаётся с розмарином и соусом чимичурри",
          "tj": "Стейки калон дар қабурғаи дароз барои якчанд нафар, бо розмарин ва соуси чимичурри",
          "en": "Impressive long-bone ribeye steak for sharing, served with aromatic rosemary and chimichurri",
          "zh": "霸气整根长肋战斧牛排，果木炭烤香气扑鼻，配迷迭香与阿根廷香草青酱"
        }
      },
      {
        "name": {
          "ru": "Стейк Bijo фирменный",
          "tj": "Стейки хосаи Bijo",
          "en": "Signature Bijo Tenderloin Steak",
          "zh": "主厨特调招牌必卓菲力牛排"
        },
        "weight": "280g",
        "price": "250 TJS",
        "desc": {
          "ru": "Нежнейшая центральная вырезка в авторском коньячно-перечном маринаде с трюфельным маслом",
          "tj": "Гӯшти мулоими лаҳм бо маринади махсуси мурчӣ ва равғани трюфел",
          "en": "Ultra-tender center-cut tenderloin in signature cognac-peppercorn marinade with black truffle oil",
          "zh": "严选牛腰柳中段极嫩菲力，干邑黑胡椒秘制腌汁与黑松露油浸润提味"
        }
      },
      {
        "name": {
          "ru": "Стейк Т-Бон Josper",
          "tj": "Стейки Т-Бон Josper",
          "en": "T-Bone Steak Josper",
          "zh": "经典T骨双拼牛排 Josper"
        },
        "weight": "450g",
        "price": "175 TJS",
        "desc": {
          "ru": "Идеальное сочетание насыщенного стриплойна и нежной вырезки на Т-образной кости",
          "tj": "Ҳамоҳангии комили гӯшти стриплойн ва лаҳм дар устухони Т-монанд",
          "en": "Classic combination of rich striploin and melting tenderloin on the authentic T-bone",
          "zh": "一排双味：一边是肉汁浓郁的纽约西冷，一边是入口即化的细腻菲力"
        }
      }
    ]
  },
  {
    "page": 14,
    "id": "fish",
    "title": {
      "ru": "Рыба",
      "tj": "Моҳӣ",
      "en": "Fish",
      "zh": "深海海鲜与烤鱼"
    },
    "items": [
      {
        "name": {
          "ru": "Стейк Лосось Josper с красной икрой",
          "tj": "Стейки моҳии Лосось бо икраи сурх",
          "en": "Josper Atlantic Salmon Steak with Red Caviar",
          "zh": "乔斯珀果木炭烤大西洋三文鱼排佐红鱼子酱"
        },
        "weight": "260g",
        "price": "230 TJS",
        "desc": {
          "ru": "Филе норвежского лосося на углях, сливочно-икорный соус, молодая спаржа и микрозелень",
          "tj": "Лососи норвегӣ дар ангишт, соуси қаймоқӣ бо икра ва морчӯба",
          "en": "Norwegian salmon fillet grilled over embers, velvety red caviar cream sauce, green asparagus, and micro-greens",
          "zh": "特级挪威大西洋三文鱼厚切排，西班牙炭火慢烤外焦里嫩，搭配鲜美三文鱼红鱼子酱奶香白汁与嫩芦笋"
        }
      },
      {
        "name": {
          "ru": "Сибас целый на углях",
          "tj": "Моҳии Сибас дар ангишт",
          "en": "Whole Sea Bass on Charcoal",
          "zh": "地中海深海海鲈鱼 (整条果木炭烤)"
        },
        "weight": "400g",
        "price": "385 TJS",
        "desc": {
          "ru": "Свежайший средиземноморский сибас, обжаренный целиком с лимоном, веточками розмарина и морской солью флёр-де-сель",
          "tj": "Моҳии баҳри миёназамин бо лимӯ ва гиёҳҳои хушбӯй дар оташ",
          "en": "Whole Mediterranean sea bass grilled on charcoal grid with grilled lemon, rosemary sprigs, and fleur de sel",
          "zh": "整条地中海鲜活海鲈鱼，开花刀填入迷迭香与柠檬片炭烤，外皮金黄酥脆肉质雪白细腻"
        }
      },
      {
        "name": {
          "ru": "Дорадо средиземноморская на гриле",
          "tj": "Моҳии Дорадо дар грил",
          "en": "Mediterranean Dorado on the Grill",
          "zh": "地中海金头鲷鱼 (整条原汁炭烤)"
        },
        "weight": "400g",
        "price": "375 TJS",
        "desc": {
          "ru": "Нежнейшая морская рыба дорадо на решётке с чесночным маслом, тимьяном и соусом наршараб",
          "tj": "Моҳии хуштаъми дорадо дар рӯи оташ бо сирпиёз ва соуси норанҷ",
          "en": "Tender ocean dorado grilled with herb garlic butter, thyme sprigs, and sweet pomegranate reduction",
          "zh": "地中海优质金头鲷鱼，炭火高温锁住丰腴鲜汁，搭配百里香大蒜香草黄油与甘甜阿塞拜疆石榴汁"
        }
      }
    ]
  },
  {
    "page": 15,
    "id": "sushi_rolls",
    "title": {
      "ru": "Суши и роллы",
      "tj": "Суши ва роллҳо",
      "en": "Sushi & Rolls",
      "zh": "日式寿司与特色拼盘"
    },
    "items": [
      {
        "name": {
          "ru": "Гранд Сет «Анзур» (32 шт)",
          "tj": "Сетти бузурги «Анзур» (32 дона)",
          "en": "Grand Anzur Imperial Roll Set (32 pcs)",
          "zh": "安祖尔皇家御享特大豪华寿司拼盘 (32只)"
        },
        "weight": "950g",
        "price": "789 TJS",
        "desc": {
          "ru": "Роскошный сет: Филадельфия Премиум, Калифорния с крабом, Канада с угрём, Трюфельный запечённый ролл и спайси сашими",
          "tj": "Сетти боҳашамат: Филаделфия, Калифорния бо харчанг, Канада бо мормоҳӣ ва роллҳои гарм",
          "en": "Opulent selection: Philadelphia Premium, King Crab California, Unagi Canada, Baked Truffle roll, and spicy sashimi",
          "zh": "豪华32件全能霸气拼盘：特级厚切三文鱼费城卷、帝王蟹肉加州卷、顶级烤鳗鱼加拿大卷、黑松露焗烤卷与辣三文鱼刺身"
        }
      },
      {
        "name": {
          "ru": "Ролл Канада с копчёным угрём",
          "tj": "Ролли Канада бо мормоҳӣ",
          "en": "Canada Roll with Smoked Unagi Eel",
          "zh": "加拿大特级蒲烧烤鳗鱼牛油果手卷"
        },
        "weight": "250g",
        "price": "95 TJS",
        "desc": {
          "ru": "Копчёный угорь унаги, нежный сливочный сыр, авокадо, огурец, сладкий соус унаги и жареный кунжут",
          "tj": "Мормоҳии дуддодаи унаги, панири қаймоқӣ, авокадо, бодиринг ва кунҷид",
          "en": "Smoked freshwater unagi eel, silky cream cheese, buttery avocado, cucumber, sweet glaze, and toasted sesame",
          "zh": "炭烤蒲烧活鳗切片覆盖卷顶，卷入特浓奶油干酪、熟牛油果与爽脆青瓜，淋甘甜浓郁鳗鱼汁与金芝麻"
        }
      },
      {
        "name": {
          "ru": "Ролл Филадельфия Премиум с лососем",
          "tj": "Ролли Филаделфия Премиум",
          "en": "Philadelphia Supreme Salmon Roll",
          "zh": "豪华全包特厚大西洋三文鱼费城卷"
        },
        "weight": "240g",
        "price": "69 TJS",
        "desc": {
          "ru": "Щедрый слой охлаждённого атлантического лосося, сыр креметте, спелый авокадо и хрустящий огурец",
          "tj": "Қабати ғализи лососи тару тоза, панири креметте, авокадо ва бодиринг",
          "en": "Thick layer of fresh Atlantic salmon, double Cremette cream cheese, ripe avocado, and crisp cucumber",
          "zh": "整整一整圈大西洋新鲜厚切三文鱼包裹，内馅是满满双份醇滑干酪、牛油果条与爽脆黄瓜"
        }
      },
      {
        "name": {
          "ru": "Ролл Калифорния со снежным крабом",
          "tj": "Ролли Калифорния бо харчанг",
          "en": "California Snow Crab Roll with Tobiko",
          "zh": "传统加州雪蟹柳飞鱼子反卷"
        },
        "weight": "230g",
        "price": "79 TJS",
        "desc": {
          "ru": "Снежный краб, японский майонез, авокадо, огурец и яркая хрустящая икра летучей рыбы тобико",
          "tj": "Гӯшти харчанги барфӣ, майонези ҷопонӣ, авокадо ва икраи моҳии тобико",
          "en": "Snow crab meat, Japanese Kewpie mayo, avocado, cucumber, coated all over in crunchy flying fish tobiko roe",
          "zh": "香甜雪蟹肉拌日式蛋黄酱、牛油果与爽脆黄瓜，外层滚满晶莹剔透橙色鲜香爆汁飞鱼子"
        }
      }
    ]
  },
  {
    "page": 16,
    "id": "charcoal_kebabs",
    "title": {
      "ru": "Шашлыки",
      "tj": "Кабобҳо",
      "en": "Kebabs",
      "zh": "炭烤肉串与烤肉"
    },
    "items": [
      {
        "name": {
          "ru": "Большое ассорти шашлыков на 5 персон",
          "tj": "Ассортии калони шашликҳо барои 5 нафар",
          "en": "Grand Kebab Feast for 5 Guests",
          "zh": "安祖尔豪华大肉串家庭欢聚大拼盘 (5人份)"
        },
        "weight": "1200g",
        "price": "449 TJS",
        "desc": {
          "ru": "Наполеон, рулет из вырезки, баранина на косточке, люля-кебаб из говядины, люля с чарбу, тандырные лепёшки и соусы",
          "tj": "Наполеон, рулети гӯштӣ, гӯшти барра, люля-кабоб, нонҳои гарм ва соусҳо",
          "en": "Napoleon skewers, tenderloin roll, bone-in lamb, ground beef lyulya, charbu wrapped kebab, tandoor bread, and dips",
          "zh": "汇聚安祖尔5大招牌烤肉：拿破仑千层肉串、牛柳肉卷、香烤羊排肉、传统牛肉柳叶串、网油羊肉串配现烤热馕与蘸酱"
        }
      },
      {
        "name": {
          "ru": "Шашлык фирменный «Наполеон»",
          "tj": "Шашлики хосаи «Наполеон»",
          "en": "Signature Napoleon Layered Kebab",
          "zh": "主厨特调招牌“拿破仑”千层肥瘦鲜牛肉串"
        },
        "weight": "180g",
        "price": "48 TJS",
        "desc": {
          "ru": "Легендарный шашлык: тонкие слои нежнейшей говяжьей вырезки, чередующиеся с пряным курдючным жиром и зирой",
          "tj": "Шашлики машҳур: қабатҳои тунуки лаҳми гов бо дунбаи хуштаъм ва зира",
          "en": "Legendary skewer: wafer-thin slices of prime beef tenderloin layered with spiced lamb fatback and cumin",
          "zh": "安祖尔传世名肉：顶级纯瘦牛柳肉片与中亚特级香料羊尾油层层交织相间串制，炭火烤出油香四溢、肉嫩汁滑"
        }
      },
      {
        "name": {
          "ru": "Шашлык Рулет из говяжьей вырезки",
          "tj": "Шашлики Рулет аз гӯшти гов",
          "en": "Beef Tenderloin Herb Roll Kebab",
          "zh": "秘制香草肥牛金牌肉卷串"
        },
        "weight": "180g",
        "price": "46 TJS",
        "desc": {
          "ru": "Тонко отбитая говяжья вырезка, свернутая в сочный рулет с пряными травами и тончайшим слоем курдюка",
          "tj": "Лаҳми кӯфташудаи гов бо гиёҳҳои хушбӯй ва дунбаи тунук дар шакли рулет",
          "en": "Pounded beef tenderloin rolled with mountain herbs and paper-thin spiced fatback over glowing embers",
          "zh": "细嫩牛排肉打薄，卷入新鲜高原香草碎与极薄羊脂，外焦香内多汁，口感层次丰富"
        }
      },
      {
        "name": {
          "ru": "Шашлык из баранины / Люля-кебаб",
          "tj": "Шашлик аз гӯшти гӯсфанд / Люля",
          "en": "Tender Mountain Lamb / Lyulya Kebab",
          "zh": "多汁鲜嫩高山嫩羊肉串 / 特级手剁牛肉柳叶串"
        },
        "weight": "180g",
        "price": "55 / 38 TJS",
        "desc": {
          "ru": "Мякоть молодого горного ягнёнка в маринаде из лукового сока и кориандра, жаренная на дубовых углях",
          "tj": "Гӯшти барраи кӯҳӣ бо оби пиёз ва кашнич дар рӯи ангишт пухташуда",
          "en": "Choice cuts of young mountain lamb marinated in fresh onion juice and crushed coriander seeds",
          "zh": "精选高山放牧小羔羊鲜后腿肉，纯洋葱原汁与手碾芫荽籽冷腌，天然果木炭炙烤至焦香爆汁"
        }
      }
    ]
  },
  {
    "page": 17,
    "id": "mangal_dishes",
    "title": {
      "ru": "Блюда на мангале",
      "tj": "Таомҳо рӯи манқал",
      "en": "Dishes on the Grill",
      "zh": "明火烧烤风味"
    },
    "items": [
      {
        "name": {
          "ru": "Ассорти на мангале (4 персоны)",
          "tj": "Ассортии рӯи оташ барои 4 нафар",
          "en": "Charcoal Grill Platter for 4 Guests",
          "zh": "四人分享式炭烤全席大丰收拼盘"
        },
        "weight": "1100g",
        "price": "435 TJS",
        "desc": {
          "ru": "Цыплёнок табака на углях, перепёлки гриль, шашлыки из говядины и баранины, печёные овощи, маринованный лук и соусы",
          "tj": "Ҷӯҷаи табака, бедона дар грил, шашлики гову гӯсфанд, сабзавоти пухта ва соусҳо",
          "en": "Flattened Tabaka spring chicken, grilled whole quails, beef and lamb kebabs, fire-roasted vegetables, and dips",
          "zh": "整只压铁板炭火小雏鸡、香烤整只肥鹌鹑、牛羊肉烤串组合、炭火甜椒番茄与自制香草酱汁"
        }
      },
      {
        "name": {
          "ru": "Форель горная радужная целиком (1 кг)",
          "tj": "Гулмоҳии кӯҳӣ дар оташ (1 кг)",
          "en": "Whole Mountain Rainbow Trout (1 kg)",
          "zh": "雪山泉水活捕彩虹鳟鱼 (1公斤整条炭烤)"
        },
        "weight": "1000g",
        "price": "185 TJS",
        "desc": {
          "ru": "Свежайшая речная горная форель, запечённая на углях со сливочным маслом, розмарином и зёрнами граната",
          "tj": "Гулмоҳии тозаи дарёӣ дар ангишт бо равғани маска, розмарин ва донаҳои анор",
          "en": "Freshly netted mountain stream trout grilled whole with butter, fresh rosemary sprigs, and wild pomegranate",
          "zh": "源自雪山溪流的鲜活彩虹鳟鱼，现杀上架果木炭烤，鱼皮焦脆鱼肉细嫩无小刺，配新鲜石榴籽"
        }
      },
      {
        "name": {
          "ru": "Цыплёнок табака на углях",
          "tj": "Ҷӯҷаи табака дар ангишт",
          "en": "Charcoal-Pressed Spring Chicken Tabaka",
          "zh": "高加索传统铸铁压盘香脆童子鸡 (Tabaka)"
        },
        "weight": "500g",
        "price": "90 TJS",
        "desc": {
          "ru": "Цельный фермерский цыплёнок под тяжёлым чугунным прессом на углях с хрустящей чесночной корочкой",
          "tj": "Ҷӯҷаи табиӣ зери фишори оҳан дар ангишт бо сирпиёз ва пӯсти қаҳваранг",
          "en": "Whole young farm chicken flattened under heavy cast-iron weight over charcoal with garlic herb glaze",
          "zh": "整只精选天然嫩雏鸡，重达数公斤的铸铁重盘压实炭烤，鸡皮轻薄金黄如纸，肉质鲜美多汁充满蒜香"
        }
      },
      {
        "name": {
          "ru": "Перепёлки на мангале (1 шт)",
          "tj": "Бедонаи пухта дар оташ (1 дона)",
          "en": "Charcoal-Grilled Whole Quail (1 pc)",
          "zh": "秘制香料果木炭火鲜烤肥鹌鹑 (单只)"
        },
        "weight": "150g",
        "price": "85 TJS",
        "desc": {
          "ru": "Нежнейшая фермерская перепёлка в медово-горчичной глазури со специями, обжаренная на вертеле",
          "tj": "Бедонаи мулоим бо асал ва хардал дар оташи ангишт пухташуда",
          "en": "Succulent whole farm quail glazed with mild mountain honey and Dijon mustard grilled on spit",
          "zh": "鲜嫩多汁的肥美鹌鹑，刷上高原百花蜜与第戎芥末特制蜜汁，炭火慢烤至骨酥肉嫩"
        }
      }
    ]
  },
  {
    "page": 18,
    "id": "plov_anzur",
    "title": {
      "ru": "Плов «Анзур»",
      "tj": "Оши палави «Анзур»",
      "en": "Anzur Plov",
      "zh": "安祖尔传统手抓饭"
    },
    "items": [
      {
        "name": {
          "ru": "Плов «Анзур» из отборной говядины",
          "tj": "Оши палави «Анзур» аз гӯшти гов",
          "en": "Anzur Beef Plov (Single Portion)",
          "zh": "安祖尔招牌精品牛肉手抓饭 (单人份)"
        },
        "weight": "250g",
        "price": "55 TJS",
        "desc": {
          "ru": "Традиционный праздничный плов: томлёная говядина, лазерный рис, сладкая жёлтая морковь, нут и изюм",
          "tj": "Оши суннатии ҷашнӣ: гӯшти гов, биринҷи лазер, зардии ширин, нахӯд ва мавиз",
          "en": "Celebratory national plov: slow-braised beef, premium laser rice, sweet yellow carrots, chickpeas, and sultanas",
          "zh": "中亚国宴级传统手抓饭：慢火慢炖精选牛肉、晶莹油润激光香米、高山甜黄胡萝卜、鹰嘴豆与蜜葡萄干"
        }
      },
      {
        "name": {
          "ru": "Чайханский казан плова (1 кг)",
          "tj": "Деги чойхонагии палав (1 кг)",
          "en": "Tea-House Kazan Plov for Groups (1 kg)",
          "zh": "茶馆铜锅欢聚手抓饭整锅 (1公斤)"
        },
        "weight": "1000g",
        "price": "475 TJS",
        "desc": {
          "ru": "Большой праздничный казан плова для компании из 4–5 человек с чесноком, перепелиными яйцами и казы",
          "tj": "Деги калони ҷашнӣ барои 4–5 нафар бо сирпиёз, тухми бедона ва қазӣ",
          "en": "Grand festive cauldron for 4–5 guests garnished with whole garlic heads, quail eggs, and horsemeat kazy",
          "zh": "适合4至5位贵宾的传统铜锅整锅手抓饭，搭配慢煨整头大蒜、鹌鹑蛋与特制马肉香肠"
        }
      },
      {
        "name": {
          "ru": "Салат Ачик-чучук (Шакароб)",
          "tj": "Хӯриши Шакароб (Ачик-чучук)",
          "en": "Achik-Chuchuk Tomato Salad",
          "zh": "抓饭绝配：薄切蜜汁番茄洋葱沙拉 (Shakarob)"
        },
        "weight": "180g",
        "price": "18 TJS",
        "desc": {
          "ru": "Тончайше нарезанные спелые томаты, сладкий ялтинский лук, острый стручковый перец и базилик",
          "tj": "Помидорҳои борик буридашуда, пиёзи ширин, қаланфури тез ва райҳон",
          "en": "Wafer-thin heirloom tomatoes, sweet sweet red onion, mild chili pepper, and purple basil",
          "zh": "薄如蝉翼的熟成多汁甜番茄、甜紫洋葱丝、微辣鲜辣椒圈与紫罗勒，清爽解腻"
        }
      },
      {
        "name": {
          "ru": "Кульча тандырная горячая",
          "tj": "Кулчаи танӯрии гарм",
          "en": "Hot Tandoor Kulcha Bread",
          "zh": "泥炉现烤传统芝麻圆馕 (Kulcha)"
        },
        "weight": "150g",
        "price": "6 TJS",
        "desc": {
          "ru": "Традиционная таджикская лепёшка из глиняного тандыра с хрустящей корочкой и кунжутом",
          "tj": "Нони суннатии тоҷикӣ аз танӯри гилин бо кунҷид",
          "en": "Authentic Tajik artisan bread baked on clay tandoor walls with golden crust and sesame seeds",
          "zh": "传统塔吉克泥炉高温现烤圆馕，金黄香脆外壳撒满烘香黑白芝麻"
        }
      }
    ]
  },
  {
    "page": 19,
    "id": "national_dishes",
    "title": {
      "ru": "Национальные блюда",
      "tj": "Таомҳои миллӣ",
      "en": "National Dishes",
      "zh": "中亚国宴传统名菜"
    },
    "items": [
      {
        "name": {
          "ru": "Казан Кабоб (говядина / баранина)",
          "tj": "Қазон-кабоб (гов / гӯсфанд)",
          "en": "Kazan Kabob Braised Meat & Potatoes",
          "zh": "经典中亚大铜锅干煸炖牛羊肉配金黄脆土豆 (Kazan Kabob)"
        },
        "weight": "380g",
        "price": "95 / 100 TJS",
        "desc": {
          "ru": "Томлёное нежнейшее мясо с золотистым обжаренным картофелем, зирой и сладким луком в чугунном казане",
          "tj": "Гӯшти мулоими бирён бо картошкаи тиллоӣ, зира ва пиёз дар деги чуянӣ",
          "en": "Fork-tender braised meat cooked with golden-crusted whole potatoes, cumin, and sweet onions in heavy cast-iron cauldron",
          "zh": "传统铸铁大锅慢熬：鲜嫩大块牛腱肉或羊羔肉慢炖脱骨，裹满金黄脆皮小土豆与清甜洋葱丝"
        }
      },
      {
        "name": {
          "ru": "Кайла по-домашнему (говядина / баранина)",
          "tj": "Қайлаи хонагӣ (гов / гӯсфанд)",
          "en": "Traditional Homestyle Kayla Meat Stew",
          "zh": "慢火原汁传统香浓番茄土豆炖牛肉 (Kayla)"
        },
        "weight": "380g",
        "price": "90 / 95 TJS",
        "desc": {
          "ru": "Густое старинное блюдо длительного томления с сочным мясом, сезонными овощами и восточным зира-букетом",
          "tj": "Хӯроки ғализи суннатии дерина бо гӯшт, сабзавот ва бӯи хуши зира",
          "en": "Hearty historic stew slow-cooked for hours with succulent meat, root vegetables, and aromatic Silk Road cumin bouquet",
          "zh": "中亚古法慢煨家常浓炖肉，大块鲜肉与成熟番茄、彩椒慢炖出浓稠原汁，香气扑鼻"
        }
      },
      {
        "name": {
          "ru": "Бараньи семечки на углях (хрустящие рёбрышки)",
          "tj": "Қабурғаҳои хурди гӯсфандӣ",
          "en": "Crispy Charcoal Lamb Riblets",
          "zh": "酥炸香脆高山小羊排骨 (羊排籽)"
        },
        "weight": "280g",
        "price": "79 TJS",
        "desc": {
          "ru": "Хрустящие миниатюрные рёбрышки молодого ягнёнка с дымком, кольцами сладкого ялтинского лука и сумахом",
          "tj": "Қабурғаҳои хурди тунуки барра бо бӯи оташ, пиёзи ширин ва сумоқ",
          "en": "Crisp and crunchy baby lamb riblets charred over hardwood with thinly sliced sweet red onion and tart sumac",
          "zh": "小羊羔鲜嫩脆骨小肋排，炭火大火快烤至油脂微焦酥脆，如瓜子般越嚼越香，配酸甜红洋葱圈"
        }
      }
    ]
  },
  {
    "page": 20,
    "id": "desserts",
    "title": {
      "ru": "Десерты",
      "tj": "Шириниҳо ва меваҳо",
      "en": "Desserts",
      "zh": "手工甜品与水果冰淇淋"
    },
    "items": [
      {
        "name": {
          "ru": "Фруктовая ваза «Гранд Анзур» (3 яруса)",
          "tj": "Вазаи меваҳои «Гранд Анзур» (3 қабат)",
          "en": "Grand Anzur 3-Tier Luxury Fruit Tower",
          "zh": "安祖尔三层水晶塔豪华高山热带时令鲜果盘"
        },
        "weight": "2200g",
        "price": "350 TJS",
        "desc": {
          "ru": "Спелый ананас, виноград Кишмиш и Тайфи, сочные цитрусовые, рубиновый гранат, киви, бананы и свежие ягоды на хрустальном ярусе",
          "tj": "Ананаси пухта, ангури ширин, меваҳои ситрусӣ, анор, киви ва банан дар вазаи булӯрин",
          "en": "Sweet ripe pineapple, local seedless Kishmish and Tayfi grapes, citrus fruits, ruby pomegranate, kiwi, and berries",
          "zh": "多层奢华水晶果盘：金菠萝、塔吉克特产无籽葡萄、鲜多汁柑橘、红宝石石榴粒、奇异果、香蕉与时令草莓"
        }
      },
      {
        "name": {
          "ru": "Фруктовая тарелка сезонная",
          "tj": "Лаълии меваҳои мавсимӣ",
          "en": "Seasonal Fresh Fruit Platter",
          "zh": "时令鲜切果盘拼盘"
        },
        "weight": "800g",
        "price": "165 TJS",
        "desc": {
          "ru": "Идеальное освежающее ассорти сладких фруктов и сезонных ягод к чаю и напиткам",
          "tj": "Омехтаи ширини меваҳо ва буттамеваҳои мавсимӣ барои чой ва нӯшокиҳо",
          "en": "Refreshing selection of seasonal melon, sweet grapes, citrus slices, and mountain berries for sharing",
          "zh": "精选切盘新鲜蜜瓜、甜葡萄、橙瓣、苹果片与鲜果，清口解腻佐茶圣品"
        }
      },
      {
        "name": {
          "ru": "Мороженое домашнее в ассортименте (1 шарик)",
          "tj": "Яхмоси хонагӣ (1 дона)",
          "en": "Artisan Gelato Ice Cream (1 scoop)",
          "zh": "意大利手工冰淇淋球 (单球)"
        },
        "weight": "50g",
        "price": "11 TJS",
        "desc": {
          "ru": "Натуральный пломбир из фермерского молока: сливочный, шоколадный, фисташковый, клубничный",
          "tj": "Яхмоси табиӣ аз шири тоза: қаймоқӣ, шоколадӣ, пистагӣ ва қулфинай",
          "en": "Natural handmade gelato made from fresh whole milk: vanilla cream, dark chocolate, pistachio, or strawberry",
          "zh": "采用纯正天然鲜牛奶手工搅打：马达加斯加香草、纯黑巧克力、西西里开心果与草莓果茸"
        }
      },
      {
        "name": {
          "ru": "Дубайский шоколадный чизкейк",
          "tj": "Чизкейки дубайии шоколадӣ",
          "en": "Dubai Pistachio Chocolate Cheesecake",
          "zh": "迪拜风情浓郁开心果生巧克力芝士蛋糕"
        },
        "weight": "190g",
        "price": "99 TJS",
        "desc": {
          "ru": "Хрустящее тесто катаифи, 100% фисташковая паста, бельгийский молочный шоколад и сливочный сыр",
          "tj": "Хамири қад-қади катаифӣ, хамираи пистагӣ, шоколади белгиягӣ ва панири қаймоқӣ",
          "en": "Crunchy toasted kataifi pastry, 100% pure pistachio paste, Belgian milk chocolate, and cream cheese",
          "zh": "酥脆香炒卡达耶夫酥丝、100%纯天然香浓开心果酱、比利时顶级牛奶巧克力与醇滑奶油干酪"
        }
      },
      {
        "name": {
          "ru": "Чизкейк Сан-Себастьян",
          "tj": "Чизкейки Сан-Себастян",
          "en": "San Sebastian Basque Cheesecake",
          "zh": "巴斯克焦香流心重乳酪蛋糕 (San Sebastian)"
        },
        "weight": "180g",
        "price": "52 TJS",
        "desc": {
          "ru": "Знаменитый баскский обожжённый чизкейк с нежнейшей кремовой сердцевиной и тёплым шоколадным соусом",
          "tj": "Чизкейки машҳури баскӣ бо дили қаймоқӣ ва соуси гарми шоколад",
          "en": "Famous Basque burnt cheesecake with a melting creamy molten center and warm chocolate sauce",
          "zh": "风靡全球的西班牙巴斯克微焦烤芝士，内里如半熟芝士般丝滑流心，浇淋温热浓郁巧克力酱"
        }
      },
      {
        "name": {
          "ru": "Меренговый рулет со свежей малиной",
          "tj": "Рулети меренгагӣ бо малина",
          "en": "Meringue Roulade with Fresh Raspberries",
          "zh": "法式轻盈空气蛋白霜树莓鲜果瑞士卷"
        },
        "weight": "160g",
        "price": "58 TJS",
        "desc": {
          "ru": "Воздушное безе с хрустящей корочкой, сливочный сыр маскарпоне и отборная горная малина",
          "tj": "Безеи ҳавоӣ, панири қаймоқии маскарпоне ва малинаи тару тозаи кӯҳӣ",
          "en": "Airy meringue with a delicate crisp shell, velvety mascarpone cream, and fresh mountain raspberries",
          "zh": "外脆内软的轻盈云朵蛋白霜薄壳，裹入马斯卡彭特浓香缇奶油与高山新鲜树莓果实"
        }
      }
    ]
  }
];
