(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('衡阳', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430405","properties":{"name":"珠晖区","cp":[112.620209,26.894765],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@B@B@@@@@DBDBDBBHBB@B@D@D@HBFBD@F@HBB@B@@A@@B@BB@@B@@@@@B@@@B@@@B@B@B@@@B@@@D@@@@@B@@@@@B@@@@@@@B@@@@@@@@@B@B@@@B@@@B@@AB@@@B@@@B@@@@AB@@@@@@AB@@AB@@@@A@@@@@@@@@A@@@@@@@@@AB@@@@A@C@A@@@A@@@@@A@@@@@A@AB@@A@A@@@A@A@@@@@@@@BA@@@@@@@AB@@A@@B@@@@ABEBCBCBA@@@@@@@A@A@@@@@A@@@@@@@A@@B@@@@A@@@@@A@@@@@@@A@@B@@@@@@@@A@@@@@@@@B@@A@@@@@@@A@@B@@@@A@@@@@@@AB@@A@@@AB@@AB@@A@@@@@@B@@AB@@@B@@@B@@@@@@@B@@@BA@@B@@@B@@@B@@@@@B@B@@@BA@@@@B@B@@@B@@@B@BA@@B@@@B@B@@@@AB@@@@@@@@@B@@@@@B@@@B@@@@@D@B@@@@@B@B@@@B@@@@@B@DB@BD@BB@BB@@@BB@@@B@@BB@@BB@B@@@BB@@B@@@@@BB@@B@@@BB@@@@B@@@@@BBBBB@@@@@BBB@@@B@@BB@@BB@BB@@@@DDB@@B@@BB@@@@BBB@@BB@@B@@@@BBBBDBBBBBBBBBBB@@@BB@BB@@@@BB@B@@B@@BBB@@BD@@@B@@BB@@@B@B@@@B@B@@BB@@@@@B@@@@@B@@@@@@@@AB@@@@@B@@@B@B@@@B@@@B@BAB@@@@@@@B@B@B@@@@@@@B@B@@@@@BA@@B@@@B@@@B@@@BAB@@@B@@AB@B@B@B@BAB@@@B@@@B@@@B@@@BAB@@@B@B@@@DA@@B@B@B@@@B@@A@@@@@@B@@@@@@@@@@@@@B@@@@AB@@AF@D@RBD@BBFDDDBBB@@THBBJBLBFBPA@@LEB@DC@@BAFMBEDK@@B@@ABGBGDCDEBEDC@ADCDABCFAFCFAJAOIACGCCAA@GA@EBABC@GA@AAEAEDA@A@A@GAEG@EBC@C@CBABADCBCCCCCAEACAG@CBCB@HEJCPDRS@@QMDCCC@GDC@AJHDEBAFEBCBEDEDCBE@C@GACAECC@AECCCGCCCEECCCCEIAAAEAC@AACAEAEAC@C@E@A@C@A@A@ADM@A@O@C@@@C@@BCACAEEEA@CAG@E@C@ACAC@E@AACA@@@CAC@C@AAA@AEACCEACAA@@CAGCIEKEGCAAEAA@C@G@M@KDIBEDIDKFOHCBMHGDEFEBEFBD@@@@@@@@@B@@BB@@@B@@@@@B@@@@@@@BBB@@@B@@BB@B@@@BBB@@@@@@@@@@@@@@BB@@@@@B@@@@BB@BBB@@@BB@@@@B@@@BB@@@@BB@@B@@@@B@@B@@B@@BBDB@BBBB@@BB@@B@BB@BB@@@B@@BB@@@B@BB@@B@@@@BB@B@@BB@B@@@@@BB@@B@B@@@B@@@B@BBB@@@F@@@B@B@@@B@B@@@B@@@BAD@@@@@B@@@B@B@B@@@B@B@@@B@@@B@@@B@BA@@B@B@B@DA@@B@@@B@BA@@@@@@B@B@@A@@@@B@B@@@B@@@B@"],"encodeOffsets":[[115358,27451]]}},{"type":"Feature","id":"430406","properties":{"name":"雁峰区","cp":[112.6154,26.840602],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AA@@@A@@AAAA@@@AA@@AAAAA@AC@AA@@@@AA@@@@@@AA@@A@@A@@A@@@A@@A@@A@@AA@AAA@@@@@A@@@@AA@@@@@@@@@@@@@@AA@A@@@AAA@@@A@@AA@A@@@@@@@A@@@@@A@@AA@@@A@@@@@@@@ACGDC@ODCDCDADA@CBA@@CAAC@AAC@EDEFAFAF@F@DDDDNBFCDA@C@FDJNDD@D@FBDDBDDFHNTBBFF@DABADDDFFXNB@BBFBFDFDB@BBDD@F@D@B@D@B@D@@ADAB@BAB@D@@AD@B@@D@@@HBD@@@B@BBD@@@D@@@@@@@D@@@@@@@BA@@@@@A@A@@@AB@@A@A@@@A@@@A@A@@B@@A@@@A@A@@@@@A@@@A@@@AB@@A@@@A@@@@@@@A@@@A@@BA@@@A@@@@B@@@BA@@BA@@B@@@BA@@@@@@B@@@@@@AB@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@AB@@@@@@@B@@@@@B@@@@@@AB@@@@@@@B@@@@@B@B@@@@@@@B@DADAFABA@@@@@AB@@@BA@@@@@@B@@A@@@@@@B@B@@@B@B@@@BAB@@@@@B@@@@@B@@@B@D@B@@@@@BA@@@@@@@@B@@@@@@@@@B@@@@@BA@@BA@@@@@@BA@@@@@A@@@A@@BA@@@A@@@A@@@A@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@C@@@A@@@A@A@A@@@A@@@A@@@@@AA@@A@AB@@@@AAA@G@EACAE@G@C@C@AAAAGCACACA@@@@A@A@A@A@@@A@@@A@A@@@@@@BA@A@@@@@@@ABA@@@A@@@CBA@A@A@@@ABA@@@A@@@A@@@A@A@@@A@A@A@@@A@@@@@C@AB@@A@@@A@A@@@A@A@@@E@@@A@AAA@@@A@@@A@A@@@AA@@@@A@A@@AA@A@@A@@A@@@AAA@@@A@"],"encodeOffsets":[[115308,27451]]}},{"type":"Feature","id":"430407","properties":{"name":"石鼓区","cp":[112.597992,26.943755],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@AAA@@@C@GA@@C@AH@@@J@@@@BD@B@B@@@@BDBDA@ABA@@@ABCD@@CBA@C@@@G@A@A@A@C@@@ABEBGFEDEDA@@D@@ADC@EFKLCFEFINGLHFBD@FHDDB@DCHK@CBAD@JAB@BCDA@EBCDAD@BDHLBB@F@B@F@DAF@D@BBD@J@B@DADDBD@DFFFDFDB@BBD@B@B@FABABAB@BAFCD@FABBBBBB@@@B@BADAFBB@B@@DDFBF@@@B@B@D@B@@@B@BA@A@@@@AACAAA@AB@BAF@DADCBADBD@D@B@B@@@B@BBBBB@BABC@AB@B@@BBBB@BB@@BDBBF@BBBD@BB@B@B@HA@AAC@Q@CBE@@BA@@@@@A@@@@@@@@@@@@@A@@@@B@@@@A@@@A@A@AB@@C@@@A@A@@BA@A@@@A@@@A@@@A@@BA@A@A@A@ABA@@@A@@BA@A@@@A@@@A@@@AB@@A@@@@@A@A@@@@@@@A@A@A@@@@@@BA@A@A@@@A@@@A@A@@@A@@@@BA@@@@@@@@@A@@@@@A@@@@AA@@@A@A@@@A@A@@AA@@@A@@AC@@AA@AA@@@@AAA@@@@AAA@@A@@AAAAAAAAAACAAAAA@@@@@AA@@AA@AA@@@@AA@@@AA@CC@@@@AAA@@AA@@AA@@@A@AA@@@@A@AAAA@@@@A@@@@@AA@@A@@@AA@@@@A@@@AA@@A@A@@AA@@AA@@@A@@A@@AAA@@AACA@@C@A@@@@@A@@@A@A@@@@@A@C@@@@@A@@@A@@@@@A@@C@@@@@@@C@@@"],"encodeOffsets":[[115316,27543]]}},{"type":"Feature","id":"430408","properties":{"name":"蒸湘区","cp":[112.567107,26.911854],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MEIAEBEBC@EAACACAA@@E@CFBHHV@DEFGFIAA@KGIB@@CBCF@@ABGFAB@DBBBB@BCBCB@BBBHAF@BBBBBDABED@BB@HAJADAD@BBBD@@BBDAB@D@DBBBBB@B@J@@@D@BHFBD@B@B@BA@ABC@C@@BAB@DFNBB@FAF@BAB@DBB@BBD@FADEHCFCBE@CBAACBEBCBAD@F@FDBDDF@F@DE@CBCF@@@DDDD@H@LD\\BDF@DAJGF@BDBFAFBDB@B@FBDDDBB@B@FFDB@@HKJMFEDELKFED@BC@@@CB@FCFCHEFABA@@D@B@B@B@H@@@D@B@DA@@DCBA@@B@BAB@ACAC@@@@@A@AAC@@@@@I@@BG@@@ABC@@@CBA@ABABC@@@C@A@C@A@C@ECCAAA@ECECEAAAA@WMEECCBCBA@CEEAAMSEGCCCAAC@E@CCCIMECO@A@"],"encodeOffsets":[[115240,27455]]}},{"type":"Feature","id":"430412","properties":{"name":"南岳区","cp":[112.738604,27.232443],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@P@TGNIFK@AAOCECACIKAACAI@AAE@EBG@GDE@ECAU@KAAAAC@A@ADIDED@J@DA@MDMBAJI@E@C@A@ACCE@AA@AAABAB@@A@ABABAB@DA@CEAA@E@CBA@A@ABA@@@CDE@AACACAACE@@DADABC@AAAACC@@AAA@EAAD@BCFCFG@AB@@A@@@A@@@A@AB@@@@A@@@@@A@@@@@A@@@@B@@A@@@A@@@A@@@AB@@A@@@A@@@A@@@A@@@A@C@IAEAE@GAADCDCHE@I@I@GAEAIEECG@GC@@@D@BBB@D@@BB@@ABAAA@C@A@EBABA@C@C@CBCBCBCBCB@@CBABABABABADCBCDADE@CBE@EBEB@@E@A@A@C@CAA@A@CB@@ABCBCBC@EBE@EBA@ABABB@@BBBB@D@DBB@BBBBB@@B@BABAB@BA@ABA@FFVHN@JALCPGJGHCN@N@HH@F@L@L@FBBDBF@NENDBJ@JCBOFcD@@E@EDGJIH@FBFH@F@L@PAFDDBBF@@@FLDBBHBDDBF@BBHJTJ@D@F@HE@K@AD@F@DBDDBH@JB@HF@BLBD@DA@CFED@JBRJF@FBFABA@@@IBE@ANSVGF@B@"],"encodeOffsets":[[115461,27963]]}},{"type":"Feature","id":"430422","properties":{"name":"衡南县","cp":[112.677877,26.738247],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CBG@CACCEIIC@@@CA@@IAA@A@I@KAGBEDIBCBIFGNGPAJABAFGLCDABEBGAECECGKKMGKAAIIEM@AAEAE@AACCAGBA@CFGJADEFGFMHOD@BQBM@KCKAAA@BABCDCB@D@@@B@B@BDBFBB@B@HDBBFH@DFLBF@F@DAB@BEBCDCDC@CAE@ABBBBD@BABAAGG@AA@ABADAJC@C@KCE@EF@@CF@DFL@BCBG@@@C@A@ECA@A@CHABABA@CAAIACC@G@E@A@EDIHKDED@BA@BFDFDFHL@D@H@L@F@BCH@@C@C@IEECC@A@@BAD@D@D@H@BABG@C@CBABCHE@CBADBDABABCCC@C@BBDPBHABC@IACBCB@B@B@BCB@BBD@B@@E@@B@BA@AAA@AAACA@@DB@DH@BAF@DBDADCDCBAB@D@BBBFFFBFCDAD@D@H@FCB@F@F@D@D@HFF@@BF@FBHABB@DD@D@D@DDDHBBEBBBDFBB@BGF@BA@A@CB@BBBCHAH@@I@EBA@ADABAAAAE@ABBJBB@B@DDBDAFAHB@DABEBBBBBAFBD@@BCDAB@DBD@DF@@BBHA@BCFABADAHCDI@EBA@EBAB@DGDA@CBA@ECC@ABABADBBA@CACACBGBM@EBAD@BBB@DEBA@AAE@CDGBCBCBABEFGFAB@DABC@IEEBEBGAAB@B@JADADIDE@EAECA@@BCBADGFABCD@FEFGFGNCHCBCDAB@@@D@BB@BBB@B@BBBBDBBBBBFBHDDB@@HDLDBBLHFBBBDFDBDBB@@ACG@EBEFGB@BBBDBBBBFCF@BB@@@DBDD@BBBADADBBDD@DAB@DDDBDBDBBBBBFBD@D@D@BA@ADA@AB@D@BBHBD@DBDBHDDBB@FCDEDEDAD@D@HCB@DAHAHCDCD@@B@FDJDDD@HANEDCD@DBFDHFB@D@@CDAHCDCBCD@DAFCD@D@D@JED@D@J@@@DBLJD@FBF@FAFEHGBE@ABAB@F@DBFFBBBBB@@@BBB@D@B@@@B@BDBBDA@@@CBMBCB@B@B@BA@@@@@AAA@@@CB@@AD@@@B@DDHBBBB@BB@B@DBDBBH@H@F@DBLBDBBBAB@@@BCDAH@BBBLJ@BCFBBDD@BBHBDBDBBFBFBBBBD@DADA@CBDBFBB@D@JAHCLGDCBIAC@A@CFEFCDADBFBB@DADCBCDABADDBDBBDD@BB@B@BA@A@ABCDABAD@B@BBBB@@BD@DB@BBDAF@DADEFGBC@EAC@AAA@CBA@ABE@EAAEM@CBA@AD@D@BAB@@A@A@AACGE@A@C@@@I@AAAAACAC@A@CBAA@@ACAAC@CBIBGBA@@AFCBAACAAAAE@GBAA@ADADA@AAAAA@CBAHEBA@@DEDA@@JALHB@JBHEFE@CGUAGDEF@@@BBBDBDFBD@FAFAJBNFB@P@D@B@DCAECMCC@C@EBEBEFEFCD@BBD@BB@DB@DAB@BCDCDCPCD@HCFEFAFEHCNGDAPGLEJCFCJALCN@H@D@B@FBBBHDLFJFHDDB@@BBBDDFBDBFB@BBD@D@DB@@B@BD@B@FBDBDD@F@H@DBB@FFBFBDAD@@@D@@@D@P@BCN@B@B@B@D@B@F@DBDBFBFBD@BBDBFBBFJDDDDFFDDHDDDFD@BDDBFBD@H@DAFCDCFAFADEFABCFIG@BCD@HDDCDRN@@QTOCIDGFA@AD@DBHBDBFDDDDADCDABAB@D@DAD@FFHHBB@B@B@FCFBBBB@@HADAB@FHBB@DBHDBDPJ@@DAH@DAF@D@AC@AAE@CDA@@F@D@B@B@BBFFHDH@DCDEDE@ADGDADADEDCBCBCBCBC@EAE@C@A@ABCDCBAFA@CCCEACC@CDCDCDADEBEBCBCFAF@DADABAD@D@BACC@G@@@@BGDEDAJADA@C@C@cAE@ABABAD@BBDBFAD@DCFB@@B@B@@B@BBD@@@BDABAB@BABADC@ABAB@@BB@BBB@@@F@F@D@B@BBBFDD@@BBB@B@@BBB@BB@B@@@@C@@BAB@BBBB@BDBB@@BB@BBFFHFDBFFFHBFDFBNAD@DAD@F@B@BBF@D@DDF@DJDDBDB@@FBFBF@F@F@FDDFDFFDDDHFFBDBFBDBJBFDDBFBB@HBDBFBFDFDHDDBHBFBLDDBJFB@FBF@BABCBEDEBCFAF@D@H@F@BABADCFAHBDBDDDB@BFAFAF@F@F@DAH@DADCFCBC@E@E@CBE@CAEAGACAEAECAGECC@IBCAGBEFEDCDC@EAC@E@CHEF@DAJAFCFCAECACCCCEAICCEACBGBG@QCCAE@CDCFE@CAACEAAA@@ACEDIDCJCDBHAFEBCBEDCBE@CBC@GDEDCBCACBAAC@A@CBA@C@C@CAA@EAEDGBCHAFBHBFABABE@EDGDAD@JBJ@D@BA@EACCAICCCACAEAEFCF@HAH@JCBCCEE@BEBADEDCJCFADCDABEAGECGAE@C@EAC@CDGBABEDCFADCBABBB@B@BA@C@CCECCCAC@EACCACAA@A@E@A@ABA@ABCBGBEDCDC@AD@D@BCBCBE@GAEAECMCYAC@E@ECACACGCA@AAAAA@CC@@ECECGAADGDCBEBCBABEFABADCD@F@DG@EBEBG@ECCCCEG@GBGBIBGDE@CBG@EA@A@ADCDAHEFC@C@CEAA@EAACACBCBA@@FCDAB@DEDC@CDAFABEBC@GDA@AD@B@JAD@FCBCFA@EAC@CBG@A@A@@AOBCACAE@E@CAEAECCCCECEACA@CAC@@A@C@C@@@A@EAEBCBE@IDEDEDCDCBA@@BCFAFAB@@E@CEAA@AAA@@C@EBE@ECECCEECCCECEAG@EBEBGBMBAD@DDDBB@@DFBD@F@H@N@P@H@D@D@B@H@HADABABAB@@CBCBCBEDEBA@EBA@CBEB@@C@G@E@CAECEA@@E@G@CDBDBHBFDF@D@DEDCACCEAECACEAC@GCAG@C@C@CAGECEAGBCBA@AAAEBEBEAEEEAA@EDCAGAAACCEEECGCAECCCEACAAACC@CBE@CBCAE@CGIGAE@A@C@EAGAGCCACC@EBC@ECEEDGAEAAAA@CAMEC@A@@@@@@JAFABABABA@EAA@A@CBABAB@BBF@DAFEBE@C@E@EAE@GACAC@CAECAC@C@EAEE@G@E@E@@BDHBFBHBHBD@DAFEBCDE@C@E@ECEAEECCGECEA@ECAAC@CBABABADCFAFAD@DCBA@E@GACAA@C@A@EAI@A@EAC@C@EAC@A@EAE@A@GACAA@CAEACAEC@@CACAE@EACACECACEACCCAA@CCCAAEAE@E@CBEBC@EFA@CBEBABABGHABGD@@IB@@ACCECG@G"],"encodeOffsets":[[115193,27208]]}},{"type":"Feature","id":"430423","properties":{"name":"衡山县","cp":[112.868268,27.23029],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@GAAAC@E@CBG@CB@@BJBF@D@DDFDF@BB@D@D@BAB@@BB@DB@B@@@B@B@@@BA@C@A@@@@B@B@BA@ABA@@@A@E@@@A@@D@B@BDBDD@DADABAB@@A@CBCAE@GAC@AACCAAEA@AABA@@@@@@B@B@DBJ@D@B@F@B@@BB@@BFABAB@BCB@BBB@@BBBBBBHHDFBD@D@L@H@B@B@@@@ABAB@BDB@@BD@BAB@@ABAAAB@@@BBBBB@B@D@B@@@BCFADCDA@A@A@A@A@@@AB@B@@@D@BAB@DA@A@C@A@ACAAA@A@A@ABADABAFCDADCDCDABC@AAC@CACCA@CAAACACCA@AA@BA@ABCBCDABCBABC@C@C@CBABABCBCDCD@D@B@BBBBB@B@@BF@BBF@B@DBB@@BBBBB@DBD@B@FAD@B@DBBB@BBBBB@DAD@BABEBCBABABAB@B@B@B@B@D@BBD@BBD@B@D@@@B@D@F@D@D@BABADCBABABCDCDABABA@A@A@@B@BB@@B@D@B@BABABAB@DAD@BHDH@FDJFFBHBJ@J@F@DGDCBCHBF@FBJBD@B@@@B@@@B@@@B@@@B@@@BA@@B@@@B@@@B@@@@A@@B@@@@@B@@@@@B@@@@@BAB@@@B@@@B@@@BAH@DEDE@ABCFBB@BB@@DDBBBBD@BABC@CF@BDDBDBBBF@DC@@B@BAB@B@DAF@B@FB@DCBA@ABAB@B@BA@ABBB@BBBF@DD@B@B@D@FIJABCN@NCBI@C@CFCJ@B@BBDBBLBV@DB@FCF@HAH@FBF@BBJBDLBDJDBDFBP@BELMJSHO@A@E@UHMT@BAF@J@@ABEBEAE@QIIAC@EF@DCBC@KA@AGEA@@IAGCCCAE@C@@B@LGFE@C@I@ISAG@AAECCGAAAKC@E@@AECAECOBK@E@G@AE@EJGHIFCF@@@dCPEDA@IAIMCMFE@CAAA@E@K@K@EGGM@M@GDIHOHKDIBM@UGEEA@C@C@E@ABCBC@A@C@A@@@C@C@C@CB@BAB@BAB@@AAC@@@CBABCBABA@A@@AB@@A@@BCA@@@AAA@C@C@A@A@AD@@ADAD@@@B@D@BB@BBB@B@@@@B@B@B@B@DBBBB@B@B@@ABA@CBABABAB@BABBB@BBBBDBBBD@B@B@@@B@BA@ABABA@@B@D@B@BBB@F@B@B@BC@CBCB@@CDCBAD@B@D@B@B@DBB@BABA@ABCBABA@@BAB@DCBC@@@AB@@ABCB@B@@@B@B@B@BA@A@@@AB@B@BAD@BBB@@BB@@@B@@@B@@@@B@D@@@@B@@@DAB@@ABA@@@C@A@A@ABA@@BCACBA@AAA@@AA@@A@AA@A@A@ABA@@BA@ABE@A@A@A@@@ABAB@BCHA@@@@@CC@AA@ED@BA@A@@DB@DD@BBB@@@D@B@BBB@@BB@BBBBBB@@B@BB@@@B@@ABC@ABAB@D@B@@A@@@A@@B@B@BA@EB@@@BB@AB@@ABAB@B@B@BB@BBB@B@B@D@BAB@D@B@@B@@@BBB@BBFBD@D@BBBB@B@@@BABAF@B@B@B@@AB@@A@AB@@@@@BB@BB@B@BAFABAA@@ABADAB@B@BBBB@B@BCBAB@DB@@BBB@B@DB@BAD@@@@B@B@B@B@B@DAB@B@@D@BABCDADCBAD@@@DBBBBB@B@DBFBB@F@D@BBDB@B@D@DAB@BABD@FBD@B@B@BA@A@C@A@ABAB@DA@CBC@AB@BADBDBBBBDDDDDB@D@B@D@@@@@@DAD@@AB@BBBFDFDFDBBB@DDBBD@DAB@BABABABCBCB@FAD@BBDBBBBB@D@B@D@DBDDBBBDBB@AD@FABBB@@BBDADAD@B@F@DBD@@@DDDBDFBF@DB@@@@B@@B@BBB@FC@@D@B@D@B@B@B@@@B@BA@ABA@@B@B@BBBAB@BC@ABAB@BBB@@BBDB@@@BBB@@@B@B@DABA@@@AA@BA@ABADABCDADABABAB@B@DBBBDDBBD@D@B@B@@ABA@AB@F@FBD@B@D@F@@@B@@ABA@A@AACACAC@A@EAAAE@AAAAAA@AACAAA@AA@AABA@C@CAA@C@AAABC@ADADADC@ABC@A@C@AB@B@FBDBD@B@D@@@DAFBF@D@HAFCDADAFCD@BCDCBABAD@DBBFDB@BB@BBD@FAF@DADAB@F@DBB@DDDDBBBA@@BA@CBA@A@@DA@@DAFCBAB@@@BABC@CBA@CBE@A@A@CAA@A@ADADADADABCDEBABCDABABA@@B@DBDDB@B@HCFA@@@CBE@A@CBA@C@C@CAAC@CAAA@ABADCBABAB@D@BBBBBBDBBBDB@AB@BABCBCD@D@F@F@D@B@@B@BADADABBB@DBBBFBDB@DBD@F@FADBD@D@F@FADAD@DABAB@B@BBBDDBBBD@D@F@D@D@D@HBFBBBD@FBF@DBD@FAHAH@FADAD@B@ACCIBGFIBADELKBAJKJSBCHO@CBQ@C@CAEIKAAAAECECGCCAGCMGCCAAEGACCCAAECAAA@IEECAAKKCEGEACCCA@@ACACCGEGC@@GGQQACEMAC@G@EBIBADGDENOBADCDGDEBCBE@@@MAKCGEEAAIGMCE@I@C@O@EAOEA@AA@AGG@EEK@G@EFGBAHILIBE@AAEEEA@KCM@OBEBEBUFSFQDE@C@C@IAA@GEAAGM@AEO@C@@@OBEFQDGBG@AJUBGHMFKHGJGBAB@DCBE@A@GAAAE@ACACCAAAACACCEAGAEAAA"],"encodeOffsets":[[115461,27624]]}},{"type":"Feature","id":"430421","properties":{"name":"衡阳县","cp":[112.370546,26.969577],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@F@B@@@B@BAB@@A@A@A@@B@D@B@@A@@@A@A@@@ACAA@@AA@ABC@C@A@@ACECE@C@CAEAIIBEBEDEBADCBCD@BCDAFCFCDAHAH@BA@@@CLAFENAB@@CDA@KF@@OBEAKAIAAASG@@AACACCAEGBA@A@A@@AACAAE@AAAC@@AAA@AA@AA@A@@BADABA@AAAAA@@@A@A@C@C@CAABCDCBE@ABA@@BBBDBBB@@@@@BABA@@@A@C@A@A@@@E@EACC@@@AAABEBC@A@A@@AAAAAAEBC@EDABA@ABABEBA@A@C@AAA@ECECEE@CACCCCBA@I@C@AAC@E@CBE@A@E@A@KACG@ABCDCFAB@DC@ABA@IBCDAL@DG@CCAGC@EACGE@@CAEEA@A@CACCEAA@A@ACBEAEACE@IHCBE@ACC[@K@GCCCC@@E@AD@DCFE@E@CCCA@E@EBCDAFADAA@@CAC@@AAAAA@C@ABCBAD@B@BABA@A@@ACCAAACCCABCBADCDCBA@EACACBEDEF@D@BBDAJCDKHGDIBC@A@EACADAB@BC@CACAAEAEAAAACACAG@ACCAADE@AKIAA@ABGDC@A@@BAAACAKACAE@G@G@AAAC@C@AAAA@AAGACCA@@@C@@BA@@D@@BB@B@@@@ABA@A@A@ADAN@D@@CBAAACA@@@A@C@A@AA@@A@AAAAEECAE@A@AB@BAFGHEFEBE@EAC@KICA@@I@C@C@IFC@C@C@EDCBC@ADCDGDCB@DC@A@GEECCAC@CDMFGBC@CCCI@E@AC@CDGDGBCBA@GDC@C@CBCFCFEDA@CAGCCACAC@GAAAC@A@@BCB@BABC@C@C@EAAAAACACACACCA@CBC@ACCACBABAAC@AC@C@@AAE@EDAAAAACAAA@EHAF@FDH@BA@CACACEAAEAKGAAKCGC@@CAGCEAAAAACAA@@@CAA@EA@@CAABE@C@AAA@EBC@C@EAE@C@C@E@EAE@C@CBC@C@A@CBCBC@CBC@E@@@CBABC@AACAABA@@@C@IBEB@@AB@F@BADCBGDGDCBCDAFABADABA@C@AB@@@HABCHEHEFABADADAF@F@FAD@DADBDAD@@@@BBBDBBBB@BDFBBJ@DBBBDDBD@DBHDBD@FADBDDDDDDD@D@DAD@BBBBDBBB@D@H@F@D@DADADCB@D@BKB@B@@@@@@@@B@@@@@B@B@B@B@BB@@B@B@B@BBBB@@@D@B@BBB@@BBBBHHFBDBDADAFAFBF@B@HCFADBBBBBB@BDBDDF@D@F@DABCBAFBD@D@BCBCBEDAB@BABBDBBHD@B@BABC@E@ABAD@B@HAHADCDEBC@KDUFCDCD@BBDNDDD@D@D@B@@@BABADCFAH@@@F@FBDB@BDDF@@BBAH@DCFEDCDCD@BAD@F@BDFDFBDBB@B@@@@@B@BABCD@B@D@B@B@@@BBDBD@D@@@BBB@BBHBDBFFH@B@@@@B@@B@BBBBBDBBBBBBBFD@BA@@B@B@B@@BBDB@@@@B@@@@A@@B@@@B@@@@ABAB@@@@@@AA@AA@@@@@@B@@@B@@@BA@@B@B@@BD@FBB@@@B@@AB@B@@@B@B@BA@@BB@@B@@B@@@@B@@@A@@B@@@@@B@B@@A@@@A@@@AB@@@@AAAAA@@B@B@@@B@@B@B@B@@@BB@@B@@@@@@B@@BB@@@@@@AB@@A@@@@AA@@B@@@@AA@@@@@B@@@B@@BB@@@@@B@@@@BB@@@B@@@@@B@@@AB@@@BB@@@B@@B@@@B@@@@@@@C@@@@B@@@B@@@B@@@@@@@@BB@@@@@BBB@@B@@@@@BAB@@@@BBB@@@@@@BA@CB@@@B@@@AB@@BB@@@@BB@@@@DDBBBBBB@@BABA@AB@@AF@B@BB@@@BA@A@@BAB@B@B@B@B@BBB@@@B@B@BB@@@B@@@@A@@@@@@B@DBB@B@@@@AD@B@FCB@B@B@BBBB@@AB@BABAB@B@@BB@@@@BBB@B@B@BB@BBB@D@BBBBBD@B@B@HBDBDAD@DBDBBBDFBBDB@B@B@@CBC@CDADCDAF@D@H@BBDBBDBDBDBBDBDBBBBB@@BBDALAD@BCBADADCHCD@D@@@BBBB@B@BBDBBBBDAB@BA@CACCC@A@@@@DBDDDBBDDBB@DAD@DBBDBDBDAFANEDCDCBCBCBCBAB@D@HDBBB@@A@C@ABADCBA@ACAAC@ABABABADAD@D@DBD@BABEBA@CAAAC@A@A@ABAB@BABA@ABCB@FADA@@@AA@A@A@@@@G@ABC@ABAB@DADABADCBADBDBB@BBBBBB@F@BBBBBBBBB@D@BAB@BDD@B@B@DABBDBBJDFDBBBBDBD@B@DB@B@BBH@DED@DBBBDBBBADALGB@B@BB@B@DBBDBBBB@F@F@B@BBB@ABAB@DBFBBBBDBDD@BBD@DADADABADAB@@@BBBBDDDDDDDDB@BBDDDBBBBBB@BBDDBD@DAD@BBBB@BAB@DBBDBB@D@DAHADABBFFDDD@DBBAD@BAHEF@H@H@D@DAFCD@B@BB@BABBBB@BBD@F@DA@@BA@CAECE@A@AD@FB@@NBB@DBB@J@H@FBH@HBF@BBD@BAB@JEF@DABAFAD@B@F@DABABADMBAB@D@BBJDHDDBB@BA@ABA@@BBBB@B@BCF@B@BB@@@B@@@B@DA@@B@BB@@B@B@@AFCB@@BDD@@@@B@DG@ABABA@@B@B@B@F@BAB@@AB@BAB@B@B@@B@BB@@BB@BBB@DADB@AB@BAB@B@D@@@B@BA@@BA@C@@@A@@C@A@@@@@@A@@@A@@AA@@AA@ABC@A@ABA@@B@B@@A@A@A@A@@@ADABA@@BA@@D@DA@CBA@AB@BADABAB@BA@AAA@C@A@A@C@ABCDADC@@DADAD@@A@A@A@EAA@A@A@C@AB@BABAB@@A@A@@@A@AACAAACAA@AAABA@ABABABADAB@BA@@@A@AAAAA@C@A@A@A@A@@A@A@AAA@@A@C@A@@BCBC@@BCB@B@D@D@B@BB@@B@AD@@@BA@@BB@B@BADABADA@@D@BB@@BA@ABA@ADAD@D@D@@@B@D@B@D@DABAF@D@D@B@B@BAB@@ABABA@A@AA@AAAAA@CAC@A@AA@AA@BABAB@FAF@FAD@DADABA@@DAB@B@DBD@B@B@F@@@FAFAF@DAF@BCDCDABCBABABABADA@@DADADADADAD@D@B@BAFAB@D@B@BBBA@@AA@@@CAA@A@C@@@ABC@CBABABA@A@A@C@AA@@A@AB@B@B@BABADCDCBABADABCBA@A@C@C@E@C@A@@@C@AAC@AAC@A@C@A@A@A@ABABABADAFABA@ABC@CAAAA@AAACAA@C@EBA@C@CAA@AAAA@@AA@C@AAE@AAE@@@AAAAA@A@A@CDCDCDABABADAD@D@D@BADABADCDABAB@@ABBB@DDDBBBDBB@DDDBD@BBD@BADCDCBCDCBEBABCBAB@B@B@BBBDB@D@B@B@@CBA@A@C@@@ABA@@B@B@B@B@B@DCBCDE@A@@@A@C@AAAAA@A@@BABBBA@@BA@AAC@@CA@ABABA@@@@@A@A@G@K@CACCEGGAAAAAA@@AA@ADA@ABABAAE@@AA@@@A@E@A@CAI@C@A@A@@@@B@BA@BFBBBDDBBD@HBF@DBDAB@@@BABABC@CCCCA@A@A@CB@"],"encodeOffsets":[[115447,27652]]}},{"type":"Feature","id":"430424","properties":{"name":"衡东县","cp":[112.953168,27.08117],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCFABEACAC@EACGECAE@CAEACAEA@CCAEBAFCDKDABADBB@DADE@GBGDCBA@C@CBA@@BBB@BBBCBEC@@E@I@G@ECGAIACBE@MBC@G@ABABAFAFADGBC@E@CAA@@AAA@GAG@A@G@I@G@ADA@C@CAC@@BEDCFABC@E@@CCEAIAC@GCCAG@EBGCGAEAC@E@C@E@EACCG@ADCDCF@HAD@DAFCDAFADEFGBCAIDCDCJDF@BB@BBDFBB@DEFCD@DBFDD@RAHAHBDDFJDFBDDDDDBBFEDEDIBCBE@GF@D@FBD@FCDCDEFAFBHAD@JDDHFDBBFBFBDBHBF@DAF@D@F@FADEDCDCBG@CBE@E@E@EBEB@ACACCCAGAEBCDABABE@G@C@E@EBADCFAFADABE@EAA@IECAKCEAGACAGCECECEACAGAA@EACAECIACAEACAEAGECCECCECEECE@E@E@EAEA@@CACAIC@CCE@C@CAE@A@A@EBC@CBCAMCEAEEGEECAGEEEAAA@@AA@CA@AAAAAA@AB@@@D@@A@A@@AAA@AA@A@AA@@CCAEAAA@C@E@E@@@A@AAA@@AA@AB@BCDABABA@ABCB@A@@AC@A@AA@A@@@EACDC@EBCAAAC@ABAB@BBF@d@D@DCBIBCBCFAH@@@@@HDDABC@C@ABCBCBE@EBADADAFCFCBCDCD@DDDFBDD@DEBABCDAD@B@B@DBF@FADADADADCDCFCBCBCH@BCFCFCDG@GCEEAAA@A@C@E@@@CB@DBF@BBDBBHBB@BBFBHBFBDDDBBBBBDDDB@BBFBB@H@BAFCDA@ABIHGHELGNAHIV@BAHCHERAF@P@@@DFP@BHNBBHFB@JBD@D@F@RCTEVEFAFAPAN@LDB@FFBF@BAFKJGJABEH@F@HFL@FHH@BBBB@PFFBP@D@J@F@NDJHBBFFDHBL@N@@AFADCFCHCDABMPCFCHABAJ@F@HBDFNBDRRHH@@HDHFDDDB@BB@DDBDHFDFLLBBFDJFB@BBFDBBDDBDFHBBDDNHHDDBHDFDFDBBBBJLBF@D@DAR@DGPADITILABKLCFABEJAHDJBDFLDHAL@J@L@JAF@FAP@LADBF@D@BFFHFDDRFXFHBVHJDNFHBL@NABADADA@E@ECS@IACCMBM@@NMPGN@NEBC@AACAAAA@AAA@ABA@CBCBCBCDCDADCB@BABABC@ABABAB@BADABABA@AAAACCAEAAAA@@@AAAA@CBA@C@ABC@CAA@A@C@@@AB@F@D@DADADADABCBABA@A@CAC@C@AAAAAAAA@@@A@BCBABABC@A@C@C@C@CBCBC@CBABABAD@BABABABAD@DAD@B@D@DABABABCBABCDA@ADABABA@AB@B@D@DA@ABA@AAA@AAAACA@@A@A@@D@BA@@@AA@CA@A@ABABCDCBCFEBCBA@A@A@@AAC@A@AABABADADAB@B@D@@@D@BCBABAD@DCDABABA@AB@AA@AC@@@@@@ADCBADCBC@ABA@A@A@CBA@AD@D@F@DBB@BBBBBD@FBDBFBF@FBFBD@DBBBBBFBDDFBFDDBFBDBBBBB@B@BABABA@ADAD@DCBABCDCBCDABABADAB@DAD@@@@@BBFBDBBDDBBDB@D@D@DAD@DAF@D@F@F@D@D@F@F@F@F@D@DBD@B@D@BABAD@D@FBDBD@DBD@B@D@BABCDEBCBADC@A@A@@@A@C@A@@BCDADADCBABC@ABABABABCBABABA@@BABA@CBCBCBABE@@BCBABAB@@C@ABA@CBCBA@C@C@C@CAA@@@C@AAA@CA@@AC@ABA@C@E@C@ABABEBCBCBABA@A@AAACBC@C@CBA@C@A@@C@A@C@AAA@@C@AAA@A@@@@AAAAA@AAA@@A@A@C@C@A@C@AAA@AA@A@A@AD@BABABA@A@A@@@@A@A@A@@@AA@C@A@AACAEAAACA@AAAAACCA@A@A@@@EBA@EDCBADCBCBCBCBC@ABAAA@@A@A@A@A@A@@@AA@C@C@A@AAAAA@AAC@C@A@AAA@AA@AA@AAC@CAAA@@C@@AAC@ABA@ABCAA@AAAAC@A@A@A@C@AAC@C@A@CBAB@BAB@B@B@@@BA@ABCBCBEBCB@DAB@D@BABA@@BCDABABABADAB@BABA@A@AAC@ABC@ADA@CBABA@AACBABA@ABAA@@AAAA@@ABAB@BA@A@A@C@AAE@CACBAB@B@HAJ@DBD@BBB@B@@@@E@A@ABABCBA@CAA@@AA@AA@@A@@B@@AB@D@B@D@B@B@D@BABABABAD@BBBAB@BA@C@A@A@@@@@AA@EAC@EAC@AAA@AC@A@CA@AAACA@@A@@BABAD@BABABA@A@ABCACAA@IACBACE@ECGBCFCBCAE@E@E@EB@JCJEBE@@BA@ADCDCBCDEH@F@FBDBH@H@H@F@D@FBJADC@AACAACE@@@EEACAGIECAAG@IACCACBCBE@E@CAAAEEACAAAA@CAG@CC@ADABE@E@@AGAECCEDA@A@G@CAACBEDEBCB@@G@A@ABCDELIFCHKFEDEBE@EBE"],"encodeOffsets":[[115973,27475]]}},{"type":"Feature","id":"430426","properties":{"name":"祁东县","cp":[112.090356,26.799896],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@KEIAGAE@KBG@A@QDOHIDE@A@C@C@GAA@CAC@A@CBA@EFCDAH@HBFBFFFDFJHJFFBBBF@JAD@DAJBJDFFHL@B@DBL@L@FA@AFIHCFGDEDAB@@KDKBEAGACAAAKEEAMIECAAIG@@MIAAIGACECACEECEA@CCECACA@@@CBC@C@AB@BBFBBBD@D@B@B@@@FBD@DCD@B@D@@@BFBBDFD@DBBB@D@FAB@BDBBADCD@@C@EDA@GB@BCD@BB@B@DBBBDFBDBBBADC@@BDB@DA@@B@FBBD@BA@@B@BDBFBBB@B@BCB@BBDBB@@@B@@ADGBCB@BD@DDBDAFAFA@@BC@EDCBA@A@ABADE@K@E@EBEFBDAF@B@BD@BBBBBDAJ@D@BD@DBBBBDBF@B@DABCBC@ABABEDCBA@CAABEF@B@BA@A@EAC@@BABIDEFCBBD@FD@@B@@ADEBCA@AABABADC@CBAAECAE@E@AA@C@ABA@CAACBK@CAAAAA@CFGBABEDCDEDKBGBE@C@KDKEECC@CBQHADCBEBCAAAGBAACAG@I@AAEBECCAEACAAA@@@A@A@CBABCBABADCDABABC@C@CDADDBBDBD@ACAABADAF@BABC@CAAACAGCKEICCCCCBCDEFEDAB@BAF@BAFABABA@AB@DAH@BAD@BA@GDG@EBCBEDCHADA@ABCDCDCBAD@@AD@B@DBD@BADADCBABCDCDAD@B@D@F@FAFAD@BADAFADCDADADAF@DCFAB@@ADGDCB@BA@@@@@ABCDADADADADAF@@CFAD@@ADAB@@@DCD@D@D@DBD@D@D@D@BBDEBEBE@G@CBEBCDADAD@DCDABCBCDCD@B@@AB@DAFCB@BA@CD@BABA@CDCDAB@D@DADAFAB@BCDCDA@E@@@E@EAAACCCEACCCCACAA@A@EAE@C@C@E@ACCCACC@A@CDA@A@CBC@@DBD@B@BBBB@FB@DBD@F@@@D@FABA@A@E@A@E@IAGAEAAA@AAEAA@AAAAAEACAGAE@EAABCHA@ADGDCD@BBL@BADC@C@E@ABABCAAACCC@E@A@CBABABCBCBAB@DAD@BBD@B@B@DBDB@B@FD@@DB@@BD@BABA@CBA@@DFDBBAD@@ABC@A@ECEECGCAC@GBEDCD@BAHCDAB@BABCBA@ABEBC@AACCAACAE@C@AA@C@CDCAACAC@CBCBAACCCACACBGBCDC@ABEFEDC@A@CBAACAA@E@C@E@EACCAC@C@C@CAACEAA@@@E@CACAC@A@ABC@E@E@ABC@AC@CAC@AABADA@AAAC@C@CACCAC@CAACACBC@CBEBE@CAA@IGCAA@C@A@A@ADCB@BCBEBABC@@DADABI@EBC@ADAD@FAD@DEBA@C@CAS@I@CBAD@F@BAB@BBBEBADAB@FDFDH@@ADABCB@DABADB@BBDBBBBBBDBDBFCB@B@D@DBD@DDDBBD@B@DBD@DDDD@FBF@HBFBBBBD@D@BAD@BAB@BB@BBFBB@@DBB@BB@BBD@BDBDD@B@BAFCDCFAD@@@D@@@BBBAB@@@@AD@@B@@@BB@B@@@D@B@@DBC@@BAB@DMDA@ABCB@BCDCD@@CB@BBBHFJJBFBD@BBFBF@FBFBBB@BBDBBDD@BBBA@CBCBADAD@DAB@DADAF@B@DDD@DABAFABCBAD@D@FBDBDBDDBDDDDBDABAB@BBBBB@H@DA@@@BAD@BBDBDDFBDBHFL@B@BGFCFBBBDABAB@BA@ADAB@B@BDD@BBBBBD@DBD@BDBH@B@@DD@BADAB@BB@BBDBBB@@@BAB@B@B@@B@@BB@B@B@@@@@BBD@BA@BBAB@B@BBB@B@B@D@D@B@DA@@BA@@B@@@@BBFBB@BB@BBB@@@BBB@B@BBB@@B@B@BBB@DBB@BB@B@B@B@@@BBBBBBB@B@B@DBB@@BBB@B@BB@BBBBBB@BBBB@BBBB@@@B@B@BBBBBB@@BBB@@AF@@@@B@@AB@@ABAB@B@@AB@B@BABA@AB@FA@ABA@@B@B@B@B@@@BBBAB@@ABAB@BBB@D@F@BBBBB@B@B@@AAAEAAA@A@@@AB@FB@@B@D@B@B@BABBB@BBB@B@B@@@B@@@B@DA@AB@@CBCDM@AB@BAB@D@BAB@@@BCBABAD@D@FAB@BABCJ@D@BABABAD@BDBB@D@DCF@B@B@BBBD@F@DA@@BABCJKBA@ACEACAEACAE@A@AB@D@D@BADEB@D@BBDABAJEJGB@B@DBFBDBH@FADAD@@@BBHDDBB@BA@CBABAD@DABC@CAE@C@ABABBB@DD@@B@@A@@@@@A@@@@BA@@NCDCB@DEDCB@@A@C@AAACCAEBABEBA@@BGBI@GAG@EBG@C@AAC@ABE@A@C@A@E@AAC@A@@AAB@BEFCB@BAD@@@DBBBBDDFFDBDDBB@DBD@FA@@B@BBDDBB@BBF@@DH@@@BDHBBB@FBJBB@DAB@DBFBB@BADADADCD@B@BBHBBBBBBHD@BBD@@@JAD@BABA@A@C@ABA@CCA@ACAAACA@AACF@D@JBFBDBD@@@BAB@B@D@B@@@@@BCACBC@CBC@E@EBEBCBCBAFEFGDGBA@G@@BAD@B@BABCBABEDCDAHCHCDABC@A@EBA@@FAJAD@@@B@BADBBBD@BADA@@F@D@DAD@DADAB@D@D@DAD@F@FBF@D@D@F@FBD@D@FAB@BBD@F@BADB@@FBB@DB@@B@AAAAA@A@AAA@@A@C@@BADCDADGHMHEFE@EDCBAHEBCDA@AB@FDFBF@JCBCBC@I@ABAHBFAFAJFD@BA@CBAHEFEBADADAHADCF@BBB@FA@CAA@ABCFAN@HADADBDBB@AABCBABAD@FDB@DAB@HC@CBAFAB@FAJ@DCBGBCBADE@AGBAA@@CEC@CAA@CBAD@@ACBEAAAAFABA@CGAEBCBCA@C@AAAAIBAF@BBBBBABCB@FAJ@@@BGDGAA@ADAB@B@@AHE@AAACEAAFAAACGCCC@C@C@@CAAGBEAE@@AE@GEC@C@E@E@A@EDG@C@C@CBEDEAEEAA@A@CBADADCBCAC@CBE@ACGA@@CB@BDBBB@BBB@@A@AF@@@@AAC@ADA@A@A@ADADAJBD@BAAGCOAAD@D@DDBABAACBCDAF@DGBADAD@H@BA@A@G@C@CBC@AB@D@FDJFD@D@@@DG@A@E@K@G@CGKCECEAEB@@AFCLCJGFCB@F@H@D@BDBJDBB@BABADGB@B@FDB@D@@@H@DA@AEK@CDE@@FEF@LDD@D@BIBCBAB@@BHHBBBA@AACAABAF@DBD@DCDCFA@ABA@C@EAEEK@CEGAAGCA@A@EACA@A@A@A@@@CDADCBA@AMCKCEE@@AC@@@AA@@AAEBIFK@ABADKBA@CDIDKBA@CBA@G@EBEAAACACCE@ACECCCAA@AA@@GEAAA@MGQGA@@@GEGECAMC"],"encodeOffsets":[[114966,27104]]}},{"type":"Feature","id":"430481","properties":{"name":"耒阳市","cp":[112.859759,26.422277],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@E@GCCIEGCACAGBBBADBF@FBD@D@@AHC@E@AACACIAAGIAGDEHABAN@DCFCCCA@@AB@@CEAEAA@A@@AAAAE@CBEAA@E@IAA@@A@G@E@IBCB@FADC@A@GCAC@EDGBG@ABAAA@ACCECIBC@AD@@@PAHCBEBCCACAEEIEAEACCEGCAC@ADAD@FCBABC@CAAC@C@CAC@@CEGEICCAE@EACCABA@AB@D@B@B@@@D@D@@BDDD@@@DB@@BAD@D@D@BBDFF@B@B@DABAB@BAFAD@BCDABCF@@ADADAD@DABAD@@AD@D@@ADAD@B@BAFAFABCHCDEBGDGFEFAB@B@B@FADBB@DBB@DBFBFAD@BAFABA@ADAB@B@B@BBBBDDBBDBBBD@DAD@@@DAD@BCJ@BCH@FAF@BABAFCBCD@BAD@@@D@BDBBDDBHFDDBB@BADABC@A@OBEBA@ABCFADADEBADCB@@AD@DAD@DBDFL@@@BBD@@DF@D@DBBBBDBDDDDBDAFCJAFABABA@AD@FAFCFAD@B@F@BBBBBBBBBDDF@BBBD@BAD@D@DBD@BAFCFAD@F@BBDDBBBBDDDDHFDFHDFDDDBB@BBF@BBBBBB@D@@@FAFBH@HBHBHBDBDDDBB@B@DCFCDEBEDA@ABCBCD@D@@BDDDDFFDBFBFBDDF@DBBBHFHBD@DAFAF@D@BAH@F@DBBBD@B@B@FDJBH@F@H@FADADG@MDE@E@C@@@C@GACACAGCA@AAABA@@D@BBDDDDDDBDBDBDAFBD@FDBDBFF@F@H@F@BF@F@DBDFDDBD@DBHBF@FBF@D@F@FABE@CAE@ABABADAB@B@FBB@BABABABE@I@@@@B@D@NFDBB@BBFBHBFCDF@FAD@FDDDBHDHBFBD@B@F@HBHJ@DBFAD@DAF@DDDBBDBFBDDFDDBDHFFDFBDBBBHCD@FBBFFBFAFAFBFBBB@DAHAFBFDBH@D@D@DBHHDD@FBBDFDFBDDDBFC@C@CCEAEAGACDCH@F@@@FBFDDBF@H@D@@@FADAB@FAB@FAFCDADADA@@BABABABC@G@G@A@C@C@G@O@M@G@EACCE@@AACC@CBCNAHAFAFAH@FBFDDDFDDFFDFDF@FAD@@@BB@BBBDFF@@@BABEDE@AB@DADCFCFCJCF@DAFAFBB@@@D@D@B@@@BD@DDBFBFDDDDDBFBF@D@FBFBDADBP@@@B@BAH@DBD@FEBADEDC@IBA@C@@BCB@HADAFEBCB@DCDCFA@CBED@@ABADBDBDFBB@FB@D@DEDGFCBCD@B@BFBH@DAF@HCJAHAHAH@DFDDFDH@FAFAH@@C@EDCBCBAFEBADAFADAHCBCHBFDFD@@DDB@BBBBB@HDBDBDFDF@D@ZBNDFDFBHBF@DADA@A@CBCD@DCFCHADABAB@BAB@F@B@B@DBDBBD@FBDDDFDDDD@B@@A@AAABADABCDEFCBAHADCD@FBD@F@HBFDBHB@@ADCDEDABEDAF@DBFBD@DBH@FADAAG@EBCDC@G@EBCBG@@BC@CAE@GACACACAEACCGAA@C@E@EDEBEBEBCAEACBEDCDC@GEA@C@G@G@AAC@EAECKA@@G@A@E@E@GACCECC@@AAAACCECECCECCAE@C@E@CDCBADADCDABCBEBCF@FADADABEDCFADABC@EBCD@DAF@F@F@FBFBFCDADEDADEDCDCDGDADIAG@GAC@EACCCE@CCEACBID@@EAECGIKKEI@AFCFCDCFCFADAHEDEAIKIOOCCKIKCKBONEBC@EE@E@AAAAC@G@EAEAEBCBCDCDEDE@C@CGCCAAAA@CCAC@GBGDCFEDADADE@CEAACBEBEBCFEDEB@@AAC@AA@E@C@A@CAAACBCBCCCAEAC@GBCBCBGAAACCCCIGACBEDC@EAACEAC@EBEBAACE@EBCBAAAEACE@GBABC@EBGACACEACACCECCCCAAAE@C@EDC@E@CBCBEBC@C@AAAC@C@CBE@E@EAC@CBCDCDCAG@EACAEACAED@@CDCDEBE@CAEAEACEEEAAAEBGDEDADC@CBC@EBCBEDEDCBECCCAAGBCBCBE@G@A@@ACACBE@G@ABGAC@CAEA@AAABABABAAAAAECGEC@@GAECAAAECAC@C@ABAB@@A@CFCBGBE@C@ACCAGCAAKCGAG@E@EDMHC@A@E@EBA@ADAHGHEDEBABABIDC@E@E@AE@@@WAISMGEEB@@GDCDC@ABCDABEBAAECEAGEEAAB@FCBEBG@GAC@CAEBEBEBEDGCA@@@EAE@CDCDEBEAEAEBADBD@D@@BN@HAFALGJGD"],"encodeOffsets":[[115519,26821]]}},{"type":"Feature","id":"430482","properties":{"name":"常宁市","cp":[112.399878,26.421956],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCCCEAEAE@C@A@A@@C@G@AAAI@A@A@@F@BABA@@AA@@@AAACCACAEACAEA@AAB@B@BBB@B@D@D@HAB@B@B@BA@C@@@A@ADEF@BAJ@HAD@BA@AA@@AA@@A@GBC@@B@B@D@DBDBDDFBDCDC@CACAC@A@CBCBEBCDCDCBADAFCDADCDAD@D@BHDBBDDBDBD@D@F@D@B@BAFCD@DAD@F@D@DADBBBBDBBDBBBD@D@BBD@D@BBDAH@FBH@F@FBDBDADAD@D@B@@AD@FADBBBDBBDDDBBFDDBDBDBFBD@F@D@BBDBB@B@DADADCDCBC@CAAA@AACACAAC@ABABADABE@CAEACA@ECC@@CAAB@D@B@F@DAF@D@B@D@D@F@BBDBDBDBFBD@F@DAD@BCDCDC@EBEA@AAAAB@B@D@BA@EBABC@@@C@CCAAEA@BABAD@BABABAB@D@@DH@D@J@BAD@B@DDDBF@D@BA@ABEDA@EBA@ABAB@DBD@@@D@B@D@NAB@B@BBB@@B@DABCBADCDAD@BBBB@@@BCDAB@BBB@BBBCF@@@BAB@BB@BBB@B@B@@DABAD@B@DBDADCBC@EB@BBFEBAB@B@B@DBBDBDBD@D@D@B@DBBDDBDDBD@DB@ADCBCBA@ABBF@FABABC@CB@@@BBBDBDBBDBBDBD@D@DB@B@FABA@ABCDABA@@DAF@DBBDDD@D@@@F@D@BBBDDBBBDADABABCBABAB@BADCB@BAB@DABA@CACBCDCBGDCFEB@DAB@D@DBB@HBD@D@B@F@JCPGRCB@H@LAF@HBJBLFNDDBHFHF@@B@RHNHB@BBHF@@BBB@DBDDDF@BDFBDBDBBAF@F@HAB@DABCLCJ@DABCLAB@BELAJBF@BB@@B@@BD@@FFLDNDBBLBLDN@RA@APCNGHEFEBCHIDEB@HADBBD@BBFBF@BFNJJBBHLLNHLFDFDHBFABADCHKBEBABIHOHMJEDAJAFCHALBJ@B@B@JB@@DB@@D@JJDFBD@DAH@D@HDHDFBD@@JA@@HCBAHGBABAFADAB@FED@FADAF@F@FBBBDD@DBBDDBDDFDBDFDBFBF@DBDB@@FDDBFBDBB@DBHBB@F@FBB@D@FBD@D@FBB@J@FBB@D@B@DBHBF@B@DA@CBCBEDEBCBABADAD@BBFDB@DFHFDDFFFBFDF@D@F@DCFABE@CACAGAGAECG@AAEACECC@EACBCACACACCCCAC@A@CB@BABBB@HDDBDBHBD@@@D@F@F@NCH@BCBC@E@G@EAGCI@E@A@AACAA@C@EBG@A@CBEBE@CACEGAGAA@CCEACAEAEECCECCAC@@@CDCDABAB@FCFADCDE@C@AAACCACACAGAG@GAGBE@E@@@CAAAAAAE@AAA@CACCCEEGECCGCCACAACAAC@A@EBCDEBE@AAC@C@CBC@AACAAE@CCAAAAAAAA@A@E@ABCDEBE@EBCB@BABABEDIBEACCCCCCAAAAA@C@CCE@@AC@A@@EKAC@CBC@CBC@@DABCFABCBCDEBAB@FAPAB@D@BABC@AAACCGECAACCA@A@C@@BC@ADCDABEBA@ABE@EDG@ADI@ABC@C@@BC@CACAAACCAACAA@A@A@ABABCB@BABE@ABCAEAE@CAA@CAABC@E@A@ABAFEHEHCFADCDGBABEBE@A@ABCBC@@@CBC@@BCBA@CBCBCBC@@DEBADC@ABCBE@ABABA@C@A@AEEAC@A@C@CBC@AA@@C@@CCACABAB@@ABA@@BA@A@CBA@@@AC@I@GAGCEAAGBEAEKCAKCOFGDA@@DBDBBDDH@JBHBTTDF@DCAA@A@ABAD@@A@AA@A@@E@A@EBC@ABCAABA@AB@BA@C@A@ABA@AA@@@@@DAFEBADADAF@@CDCD@D@FBFBFBF@DAFAD@FABCF@DADAH@FADCDCBA@G@EDIHCHAJAB@JCHEFC@SBGAEAAC@G@GEKCGCGA@@CBE@C@CDEDC@CAE@C@C@E@CDGDEDC@ECCCAE@CDAD@D@@A@E@CAEECA@AECCCCEE@ADE@C@EACAE@E@EBG@AC@E@CACCCA@C@EAE@EACDAFCH@BDJAJAHABA@A@@@AAAAC@A@C@CAAA@AACCAC@CAC@ABCDAB@DAD@DBDDF@F@BADA@CFADCBCBC@C@E@CAE@C@CB@BC@CBCBC@CACAAACCA@@@CDABCDABCBE@CBC@@B@DAB@DC@A@CAECEAE@ABABE@AACCC@C@A@CBC@C@C@ABABABAB@F@@@BAD@FAFADCDABC@C@CCAAACAC@CAC@E@CCCECCCCCCCCCAC@CAE@GACAECCEAEBEDCBEBEDE@C@EAECCCACE@GBG@GCCA@EA@DIBCCEAEAGAECCAAEAA@CBCB@F@BA@AAACAAA@@@ADBJ@DABE@A@A@A@ECECCCEC"],"encodeOffsets":[[114969,26764]]}}],"UTF8Encoding":true});}));