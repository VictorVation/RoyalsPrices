var prices = [
    {"value": "One-Hand Sword ATT 10%", "data": {"Plenty Prices": "0.5M", "Kaizoku Prices": "~"}},
    {"value": "One-Hand Sword ATT 30%", "data": {"Plenty Prices": "10M", "Kaizoku Prices": "~"}},
    {"value": "One-Hand Sword ATT 60%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "One-Hand Sword ATT 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Two-Hand Sword ATT 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Two-Hand Sword ATT 30%", "data": {"Plenty Prices": "10M", "Kaizoku Prices": "~"}},
    {"value": "Two-Hand Sword ATT 60%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Two-Hand Sword ATT 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "One Hand Axe ATT 10%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "One Hand Axe ATT 30%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "One Hand Axe ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "One Hand Axe ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Axe ATT 10%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Axe ATT 30%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Axe ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Axe ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "One Hand Blunt ATT 10%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "One Hand Blunt ATT 30%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "One Hand Blunt ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "One Hand Blunt ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Blunt ATT 10%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Blunt ATT 30%", "data": {"Plenty Prices": "750k", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Blunt ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Two Hand Blunt ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Bow ATT 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Bow ATT 30%", "data": {"Plenty Prices": "18M", "Kaizoku Prices": "~"}},
    {"value": "Bow ATT 60%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Bow ATT 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Crossbow ATT 10%", "data": {"Plenty Prices": "200k", "Kaizoku Prices": "~"}},
    {"value": "Crossbow ATT 30%", "data": {"Plenty Prices": "1.5M", "Kaizoku Prices": "~"}},
    {"value": "Crossbow ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Crossbow ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Claw ATT 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Claw ATT 30%", "data": {"Plenty Prices": "20M", "Kaizoku Prices": "~"}},
    {"value": "Claw ATT 60%", "data": {"Plenty Prices": "1.5M", "Kaizoku Prices": "~"}},
    {"value": "Claw ATT 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Dagger ATT 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Dagger ATT 30%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Dagger ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Dagger ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Spear ATT 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Spear ATT 30%", "data": {"Plenty Prices": "8M", "Kaizoku Prices": "~"}},
    {"value": "Spear ATT 60%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Spear ATT 70%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Polearm ATT 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Polearm ATT 30%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Polearm ATT 60%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Polearm ATT 70%", "data": {"Plenty Prices": "200k", "Kaizoku Prices": "~"}},
    {"value": "Wand M.ATT 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Wand M.ATT 30%", "data": {"Plenty Prices": "21M", "Kaizoku Prices": "~"}},
    {"value": "Wand M.ATT 60%", "data": {"Plenty Prices": "400k", "Kaizoku Prices": "~"}},
    {"value": "Wand M.ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Staff M.ATT 10%", "data": {"Plenty Prices": "300k", "Kaizoku Prices": "~"}},
    {"value": "Staff M.ATT 30%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Staff M.ATT 60%", "data": {"Plenty Prices": "2.5M", "Kaizoku Prices": "~"}},
    {"value": "Staff M.ATT 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Knuckle ATT 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Knuckle ATT 30%", "data": {"Plenty Prices": "9M", "Kaizoku Prices": "~"}},
    {"value": "Knuckle ATT 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Knuckle ATT 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Gun ATT 10%", "data": {"Plenty Prices": "100k", "Kaizoku Prices": "~"}},
    {"value": "Gun ATT 30%", "data": {"Plenty Prices": "6M", "Kaizoku Prices": "~"}},
    {"value": "Gun ATT 60%", "data": {"Plenty Prices": "300k", "Kaizoku Prices": "~"}},
    {"value": "Gun ATT 70%", "data": {"Plenty Prices": "300k", "Kaizoku Prices": "~"}},
    {"value": "Eye INT 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Eye INT 30%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Eye INT 60%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Eye INT 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Eye INT 100%", "data": {"Plenty Prices": "35M", "Kaizoku Prices": "~"}},
    {"value": "Eye Acc 10%", "data": {"Plenty Prices": "250k", "Kaizoku Prices": "~"}},
    {"value": "Eye Acc 30%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Eye Acc 60%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Eye Acc 70%", "data": {"Plenty Prices": "250k", "Kaizoku Prices": "~"}},
    {"value": "Eye Acc 100%", "data": {"Plenty Prices": "100k", "Kaizoku Prices": "~"}},
    {"value": "Earring DEX 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Earring DEX 30%", "data": {"Plenty Prices": "11M", "Kaizoku Prices": "~"}},
    {"value": "Earring DEX 60%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Earring DEX 70%", "data": {"Plenty Prices": "6M", "Kaizoku Prices": "~"}},
    {"value": "Earring DEX 100%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Earring INT 10%", "data": {"Plenty Prices": "6M", "Kaizoku Prices": "~"}},
    {"value": "Earring INT 30%", "data": {"Plenty Prices": "30M", "Kaizoku Prices": "~"}},
    {"value": "Earring INT 60%", "data": {"Plenty Prices": "12M", "Kaizoku Prices": "~"}},
    {"value": "Earring INT 70%", "data": {"Plenty Prices": "8M", "Kaizoku Prices": "~"}},
    {"value": "Earring INT 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Earring LUK 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Earring LUK 30%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Earring LUK 60%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Earring LUK 70%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Earring LUK 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Face Avoid 10%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Face Avoid 30%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Face Avoid 60%", "data": {"Plenty Prices": "30M", "Kaizoku Prices": "~"}},
    {"value": "Face Avoid 70%", "data": {"Plenty Prices": "15M", "Kaizoku Prices": "~"}},
    {"value": "Face Avoid 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Shield ATT 10%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Shield ATT 30%", "data": {"Plenty Prices": "12M", "Kaizoku Prices": "~"}},
    {"value": "Shield ATT 60%", "data": {"Plenty Prices": "17M", "Kaizoku Prices": "~"}},
    {"value": "Shield ATT 70%", "data": {"Plenty Prices": "8.5M", "Kaizoku Prices": "~"}},
    {"value": "Shield ATT 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Shield M.ATT 10%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Shield M.ATT 30%", "data": {"Plenty Prices": "35M", "Kaizoku Prices": "~"}},
    {"value": "Shield M.ATT 60%", "data": {"Plenty Prices": "70M", "Kaizoku Prices": "~"}},
    {"value": "Shield M.ATT 70%", "data": {"Plenty Prices": "25M", "Kaizoku Prices": "~"}},
    {"value": "Shield M.ATT 100%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Glove ATT 10%", "data": {"Plenty Prices": "1.5M", "Kaizoku Prices": "~"}},
    {"value": "Glove ATT 30%", "data": {"Plenty Prices": "10M", "Kaizoku Prices": "~"}},
    {"value": "Glove ATT 60%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Glove ATT 70%", "data": {"Plenty Prices": "8M", "Kaizoku Prices": "~"}},
    {"value": "Glove M.ATT 10%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Glove M.ATT 30%", "data": {"Plenty Prices": "28M", "Kaizoku Prices": "~"}},
    {"value": "Glove M.ATT 60%", "data": {"Plenty Prices": "19M", "Kaizoku Prices": "~"}},
    {"value": "Glove M.ATT 70%", "data": {"Plenty Prices": "13M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX 30%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX 60%", "data": {"Plenty Prices": "13M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX 70%", "data": {"Plenty Prices": "9M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX 100%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX (With ACC) 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX (With ACC) 30%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX (With ACC) 60%", "data": {"Plenty Prices": "13M", "Kaizoku Prices": "~"}},
    {"value": "Bottomwear DEX (With ACC) 70%", "data": {"Plenty Prices": "9M", "Kaizoku Prices": "~"}},
    {"value": "Topwear STR 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Topwear STR 30%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Topwear STR 60%", "data": {"Plenty Prices": "10M", "Kaizoku Prices": "~"}},
    {"value": "Topwear STR 70%", "data": {"Plenty Prices": "6M", "Kaizoku Prices": "~"}},
    {"value": "Topwear STR 100%", "data": {"Plenty Prices": "1.5M", "Kaizoku Prices": "~"}},
    {"value": "Topwear LUK 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Topwear LUK 30%", "data": {"Plenty Prices": "2.5M", "Kaizoku Prices": "~"}},
    {"value": "Topwear LUK 60%", "data": {"Plenty Prices": "10M", "Kaizoku Prices": "~"}},
    {"value": "Topwear LUK 70%", "data": {"Plenty Prices": "6M", "Kaizoku Prices": "~"}},
    {"value": "Topwear LUK 100%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Cape STR 10%", "data": {"Plenty Prices": "250k", "Kaizoku Prices": "~"}},
    {"value": "Cape STR 30%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape STR 60%", "data": {"Plenty Prices": "250k", "Kaizoku Prices": "~"}},
    {"value": "Cape STR 70%", "data": {"Plenty Prices": "250k", "Kaizoku Prices": "~"}},
    {"value": "Cape STR 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Cape DEX 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape DEX 30%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Cape DEX 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape DEX 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape DEX 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Cape INT 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape INT 30%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Cape INT 60%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Cape INT 70%", "data": {"Plenty Prices": "3.5M", "Kaizoku Prices": "~"}},
    {"value": "Cape INT 100%", "data": {"Plenty Prices": "100k", "Kaizoku Prices": "~"}},
    {"value": "Cape LUK 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape LUK 30%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Cape LUK 60%", "data": {"Plenty Prices": "750k", "Kaizoku Prices": "~"}},
    {"value": "Cape LUK 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Cape LUK 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Shoe Jump 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Shoe Jump 30%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Shoe Jump 60%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Shoe Jump 70%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Shoe Speed 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Shoe Speed 30%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Shoe Speed 60%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Shoe Speed 70%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Overall STR 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Overall STR 30%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Overall STR 60%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Overall STR 70%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Overall STR 100%", "data": {"Plenty Prices": "750k", "Kaizoku Prices": "~"}},
    {"value": "Overall DEX 10%", "data": {"Plenty Prices": "1.5M", "Kaizoku Prices": "~"}},
    {"value": "Overall DEX 30%", "data": {"Plenty Prices": "7M", "Kaizoku Prices": "~"}},
    {"value": "Overall DEX 60%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Overall DEX 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Overall DEX 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Overall INT 10%", "data": {"Plenty Prices": "8M", "Kaizoku Prices": "~"}},
    {"value": "Overall INT 30%", "data": {"Plenty Prices": "30M", "Kaizoku Prices": "~"}},
    {"value": "Overall INT 60%", "data": {"Plenty Prices": "19M", "Kaizoku Prices": "~"}},
    {"value": "Overall INT 70%", "data": {"Plenty Prices": "13M", "Kaizoku Prices": "~"}},
    {"value": "Overall INT 100%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Overall LUK 10%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Overall LUK 30%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Overall LUK 60%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Overall LUK 70%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Overall LUK 100%", "data": {"Plenty Prices": "~", "Kaizoku Prices": "~"}},
    {"value": "Helm INT 10%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Helm INT 30%", "data": {"Plenty Prices": "8M", "Kaizoku Prices": "~"}},
    {"value": "Helm INT 60%", "data": {"Plenty Prices": "15M", "Kaizoku Prices": "~"}},
    {"value": "Helm INT 70%", "data": {"Plenty Prices": "8M", "Kaizoku Prices": "~"}},
    {"value": "Helm INT 100%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Helm DEX 10%", "data": {"Plenty Prices": "1M", "Kaizoku Prices": "~"}},
    {"value": "Helm DEX 30%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Helm DEX 60%", "data": {"Plenty Prices": "9M", "Kaizoku Prices": "~"}},
    {"value": "Helm DEX 70%", "data": {"Plenty Prices": "4M", "Kaizoku Prices": "~"}},
    {"value": "Helm DEX 100%", "data": {"Plenty Prices": "2M", "Kaizoku Prices": "~"}},
    {"value": "Helm ACC 10%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}},
    {"value": "Helm ACC 30%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Helm ACC 60%", "data": {"Plenty Prices": "5M", "Kaizoku Prices": "~"}},
    {"value": "Helm ACC 70%", "data": {"Plenty Prices": "3M", "Kaizoku Prices": "~"}},
    {"value": "Helm ACC 100%", "data": {"Plenty Prices": "500k", "Kaizoku Prices": "~"}}
];
