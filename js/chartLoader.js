/**
 * Created by ddcjoshuad on 10/11/14.
 */

//$(document).ready(function(){
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function(){
    drawChart("Ascutney")
});



var ascutney = [["Year", "MWh"], [201212,6.099],[201211,13.231],[201210,9.043],[201209,5.419],[201208,12.854],[201207,27.013],[201206,34.135],[201205,7.159],[201204,5.961],[201203,7.495],[201202,5.821],[201201,27.77],[201112,0],[201111,0],[201110,0],[201109,0],[201108,0],[201107,0],[201106,0],[201105,0],[201104,0],[201103,0],[201102,0],[201101,0],[201012,11.943],[201011,7.95],[201010,6.283],[201009,15.211],[201008,20.606],[201007,34.823],[201006,9.194],[201005,9.552],[201004,3.363],[201003,5.814],[201002,6.3],[201001,5.961],[200912,6.401],[200911,3.367],[200910,2.618],[200909,1.867],[200908,10.567],[200907,3.418],[200906,2.081],[200905,3.249],[200904,3.684],[200903,15.012],[200902,15.461],[200901,58.275],[200812,44.534],[200811,20.384],[200810,17.048],[200809,25.939],[200808,22.172],[200807,37.265],[200806,39.276],[200805,17.65],[200804,20.13],[200803,35.778],[200802,34.458],[200801,45.366],[200712,27.768],[200711,8.133],[200710,11.528],[200709,12.637],[200708,16.715],[200707,13.485],[200706,16.156],[200705,12.247],[200704,13.091],[200703,27.488],[200702,51.419],[200701,33.333],[200612,22.737],[200611,20.521],[200610,17.427],[200609,16.498],[200608,35.911],[200607,37.021],[200606,25.558],[200605,28.119],[200604,30.082],[200603,15.704],[200602,18.695],[200601,35.727],[200512,49.072],[200511,23.207],[200510,28.868],[200509,25.995],[200508,39.711],[200507,33.804],[200506,33.21],[200505,25.587],[200504,27.551],[200503,22.745],[200502,20.521],[200501,59.729],[200412,69.841],[200411,0],[200410,6.278],[200409,0],[200408,44.73],[200407,0],[200406,123.203],[200405,0],[200404,0],[200403,2.354],[200402,57.285],[200401,323.309],[200312,120.628],[200311,116.621],[200310,105.367],[200309,88.289],[200308,111.479],[200307,104.09],[200306,106.885],[200305,121.043],[200304,117.346],[200303,113.147],[200302,99.355],[200301,116.751],[200212,10.343],[200211,7.701],[200210,7.916],[200209,7.946],[200208,8.262],[200207,115.753],[200206,118.62],[200205,71.944],[200204,107.468],[200203,115.893],[200202,109.665],[200201,120.49],[200112,117.266],[200111,125.068],[200110,125.749],[200109,121.743],[200108,126.088],[200107,124.379],[200106,123.499],[200105,51.039],[200104,110.872],[200103,119.908],[200102,120.637],[200101,137.752]];
var beldens = [["Year", "MWh"], [201212, 2017.72],[201211,1364.599],[201210,1677.501],[201209,545.509],[201208,408.511],[201207,573.239],[201206,1164.276],[201205,2134.023],[201204,1961.016],[201203,2220.112],[201202,1376.602],[201201,1581.892],[201112,2145.514],[201111,1319.114],[201110,2196.532],[201109,1445.05],[201108,432.044],[201107,565.335],[201106,2183.203],[201105,2507.236],[201104,2302.245],[201103,2454.839],[201102,1195.016],[201101,1634.872],[201012,1799.394],[201011,2775.731],[201010,2351.303],[201009,496.768],[201008,940.42],[201007,1207.015],[201006,1752.854],[201005,2271.88],[201004,2860.718],[201003,2333.091],[201002,1600.585],[201001,1786.241],[200912,2478.756],[200911,1887.975],[200910,1119.54],[200909,594.46],[200908,1569.984],[200907,2706.869],[200906,2056.695],[200905,2813.041],[200904,2896.087],[200903,3120.521],[200902,1930.549],[200901,1950.523],[200812,2233.424],[200811,2169.69],[200810,1287.428],[200809,567.233],[200808,2138.278],[200807,1590.62],[200806,1703.521],[200805,1894.723],[200804,2471.516],[200803,2467.419],[200802,2066.805],[200801,2239.343],[200712,1948.127],[200711,1888.167],[200710,1170.445],[200709,458.686],[200708,653.528],[200707,1322.304],[200706,957.554],[200705,1888.203],[200704,2108.253],[200703,1636.954],[200702,1196.263],[200701,1888.514],[200612,1836.824],[200611,1734.613],[200610,1480.891],[200609,1679.833],[200608,2587.868],[200607,2606.705],[200606,2485.803],[200605,2529.912],[200604,2139.763],[200603,1965.85],[200602,2231.349],[200601,2474.59],[200512,1208.667],[200511,987.458],[200510,922.687],[200509,1081.083],[200508,1306.531],[200507,1544.135],[200506,1438.577],[200505,1277.14],[200504,1411.846],[200503,1478.056],[200502,1349.258],[200501,1560.562],[200412,923.328],[200411,596.868],[200410,265.106],[200409,757.699],[200408,843.291],[200407,660.746],[200406,816.023],[200405,1195.756],[200404,1356.082],[200403,1154.096],[200402,419.121],[200401,674.885],[200312,1678.833],[200311,1623.077],[200310,1466.438],[200309,1228.755],[200308,1551.51],[200307,1448.666],[200306,1487.574],[200305,1684.62],[200304,1633.159],[200303,1574.719],[200302,1382.769],[200301,1624.88],[200212,195.541],[200211,145.601],[200210,149.657],[200209,150.235],[200208,156.2],[200207,2188.487],[200206,2242.682],[200205,1360.206],[200204,2031.851],[200203,2191.132],[200202,2073.374],[200201,2278.035],[200112,789.126],[200111,841.623],[200110,846.209],[200109,819.251],[200108,848.493],[200107,836.991],[200106,831.066],[200105,343.46],[200104,746.093],[200103,806.901],[200102,811.806],[200101,926.981]];
var bellowsFalls = [["Year", "MWh"], [201212, 26767.109],[201211,18102.802],[201210,22253.762],[201209,7236.728],[201208,5419.31],[201207,7604.604],[201206,15445.308],[201205,28309.992],[201204,26014.884],[201203,29452.056],[201202,18262.032],[201201,20985.413],[201112,29489.679],[201111,18130.972],[201110,30190.912],[201109,19861.943],[201108,5938.367],[201107,7770.417],[201106,30007.707],[201105,34461.482],[201104,31643.917],[201103,33741.297],[201102,16425.271],[201101,22471.036],[201012,21392.632],[201011,33000.105],[201010,27954.162],[201009,5905.978],[201008,11180.462],[201007,14349.964],[201006,20839.323],[201005,27009.927],[201004,34010.496],[201003,27737.65],[201002,19029.038],[201001,21236.263],[200912,28600.061],[200911,21783.592],[200910,12917.33],[200909,6858.92],[200908,18114.585],[200907,31232.043],[200906,23730.288],[200905,32457.066],[200904,33415.253],[200903,36004.784],[200902,22274.814],[200901,22505.264],[200812,27599.173],[200811,26811.589],[200810,15909.185],[200809,7009.492],[200808,26423.423],[200807,19655.831],[200806,21050.979],[200805,23413.729],[200804,30541.359],[200803,30490.729],[200802,25540.205],[200801,27672.306],[200712,1889.4],[200711,1831.248],[200710,1135.161],[200709,444.859],[200708,633.827],[200707,1282.443],[200706,928.688],[200705,1831.283],[200704,2044.699],[200703,1587.607],[200702,1160.201],[200701,1831.584],[200612,20912.572],[200611,19748.886],[200610,16860.218],[200609,19125.201],[200608,29463.351],[200607,29677.808],[200606,28301.324],[200605,28803.509],[200604,24361.594],[200603,22381.56],[200602,25404.315],[200601,28173.661],[200512,26939.237],[200511,25471.508],[200510,23195.208],[200509,11403.598],[200508,13201.099],[200507,16742.32],[200506,19718.718],[200505,22008.934],[200504,29705.05],[200503,23695.711],[200502,21687.413],[200501,26688.204],[200412,22644.027],[200411,14637.812],[200410,6501.566],[200409,18582.096],[200408,20681.173],[200407,16204.38],[200406,20012.441],[200405,29325.161],[200404,33257.06],[200403,28303.486],[200402,10278.667],[200401,16551.131],[200312,21075],[200311,21827],[200310,19343],[200309,12054],[200308,17588],[200307,9968],[200306,18732],[200305,29057],[200304,30227],[200303,16099],[200302,10238],[200301,13951],[200212,0],[200211,15833],[200210,10707],[200209,7205],[200208,6141],[200207,14640],[200206,30568],[200205,30500],[200204,28194],[200203,32180],[200202,17220],[200201,0],[200112,11737],[200111,8198],[200110,4990],[200109,4603],[200108,4423],[200107,12227],[200106,20783],[200105,25082],[200104,23534],[200103,14812],[200102,14893],[200101,18371]];
var berlinFive = [["Year", "MWh"], [201212, 60.882],[201211,132.063],[201210,90.26],[201209,54.089],[201208,128.299],[201207,269.625],[201206,340.722],[201205,71.462],[201204,59.503],[201203,74.808],[201202,58.1],[201201,277.187],[201112,83.912],[201111,302.349],[201110,315.478],[201109,550.179],[201108,534.8],[201107,953.543],[201106,99.168],[201105,53.398],[201104,190.709],[201103,266.992],[201102,511.099],[201101,854.373],[201012,222.297],[201011,147.973],[201010,116.946],[201009,283.117],[201008,383.543],[201007,648.159],[201006,171.121],[201005,177.787],[201004,62.588],[201003,108.215],[201002,117.257],[201001,110.997],[200912,63.347],[200911,33.322],[200910,25.912],[200909,18.481],[200908,104.576],[200907,33.823],[200906,20.6],[200905,32.156],[200904,36.462],[200903,148.572],[200902,153.016],[200901,576.733],[200812,219.575],[200811,100.502],[200810,84.056],[200809,127.893],[200808,109.318],[200807,183.735],[200806,193.654],[200805,87.023],[200804,99.25],[200803,176.406],[200802,169.898],[200801,223.69],[200712,566.056],[200711,165.795],[200710,234.998],[200709,257.603],[200708,340.739],[200707,274.898],[200706,329.342],[200705,249.665],[200704,266.864],[200703,560.347],[200702,1048.197],[200701,679.496],[200612,373.298],[200611,336.908],[200610,286.114],[200609,270.858],[200608,589.571],[200607,607.808],[200606,419.605],[200605,461.647],[200604,493.873],[200603,257.824],[200602,306.93],[200601,586.563],[200512,799.742],[200511,378.223],[200510,470.477],[200509,423.657],[200508,647.19],[200507,550.913],[200506,541.238],[200505,417.009],[200504,449.003],[200503,370.683],[200502,334.438],[200501,973.427],[200412,1302.363],[200411,0],[200410,117.066],[200409,0],[200408,834.098],[200407,0],[200406,2297.427],[200405,0],[200404,0],[200403,43.9],[200402,1068.23],[200401,6028.916],[200312,189],[200311,154],[200310,202],[200309,628],[200308,809],[200307,130],[200306,289],[200304,520],[200303,590],[200302,4079],[200301,2884],[200212,222],[200211,0],[200210,81],[200209,239],[200208,1258],[200207,353],[200206,26],[200205,108],[200204,0],[200203,104],[200202,970],[200201,21],[200112,0],[200111,0],[200110,0],[200109,406],[200108,725],[200107,904],[200106,116],[200105,1148],[200104,660],[200103,183],[200102,2050],[200101,7234]];
var bolton = [["Year", "MWh"], [201212, 2664.812],[201211,1802.233],[201210,2215.484],[201209,720.456],[201208,539.522],[201207,757.08],[201206,1537.665],[201205,2818.414],[201204,2589.924],[201203,2932.113],[201202,1818.085],[201201,2089.212],[201112,2495.643],[201111,1534.382],[201110,2554.986],[201109,1680.87],[201108,502.55],[201107,657.592],[201106,2539.482],[201105,2916.395],[201104,2677.951],[201103,2855.447],[201102,1390.032],[201101,1901.67],[201012,2532.832],[201011,3907.127],[201010,3309.7],[201009,699.252],[201008,1323.738],[201007,1698.998],[201006,2467.322],[201005,3197.905],[201004,4026.754],[201003,3284.066],[201002,2252.989],[201001,2514.317],[200912,3376.929],[200911,2572.08],[200910,1525.203],[200909,809.861],[200908,2138.865],[200907,3687.698],[200906,2801.935],[200905,3832.342],[200904,3945.479],[200903,4251.236],[200902,2630.081],[200901,2657.291],[200812,2424.385],[200811,2355.202],[200810,1397.505],[200809,615.733],[200808,2321.104],[200807,1726.621],[200806,1849.174],[200805,2056.725],[200804,2682.835],[200803,2678.387],[200802,2243.52],[200801,2430.809],[200712,2899.485],[200711,2810.244],[200710,1742.026],[200709,682.683],[200708,972.676],[200707,1968.045],[200706,1425.17],[200705,2810.298],[200704,3137.808],[200703,2436.352],[200702,1780.452],[200701,2810.76],[200612,2747.105],[200611,2594.241],[200610,2214.782],[200609,2512.313],[200608,3870.347],[200607,3898.518],[200606,3717.701],[200605,3783.669],[200604,3200.173],[200603,2940.073],[200602,3337.146],[200601,3700.931],[200512,1915.108],[200511,1564.607],[200510,1461.977],[200509,1712.953],[200508,2070.172],[200507,2446.649],[200506,2279.396],[200505,2023.601],[200504,2237.04],[200503,2341.948],[200502,2137.871],[200501,2472.678],[200412,1609.779],[200411,1040.612],[200410,462.201],[200409,1321.014],[200408,1470.239],[200407,1151.981],[200406,1422.698],[200405,2084.746],[200404,2364.267],[200403,2012.114],[200402,730.717],[200401,1176.631],[200312,2372],[200311,2308],[200310,1807],[200309,399],[200308,1492],[200307,770],[200306,2029],[200305,4173],[200304,3553],[200303,1396],[200302,777],[200301,1542],[200212,1964],[200211,2233],[200210,600],[200209,284],[200208,56],[200207,2263],[200206,3747],[200205,4131],[200204,4333],[200203,3260],[200202,1429],[200201,422],[200112,648],[200111,637],[200110,277],[200109,286],[200108,32],[200107,243],[200106,1363],[200105,2737],[200104,2270],[200103,1596]];
var boltonville = [["Year", "MWh"],[201212, 446.802],[201211,302.176],[201210,371.464],[201209,120.797],[201208,90.46],[201207,126.938],[201206,257.816],[201205,472.556],[201204,434.246],[201203,491.62],[201202,304.833],[201201,350.292],[201112,536.142],[201111,329.633],[201110,548.89],[201109,361.103],[201108,107.963],[201107,141.271],[201106,545.56],[201105,626.532],[201104,575.307],[201103,613.439],[201102,298.622],[201101,408.538],[201012,392.076],[201011,604.813],[201010,512.333],[201009,108.242],[201008,204.911],[201007,263],[201006,381.935],[201005,495.027],[201004,623.331],[201003,508.365],[201002,348.757],[201001,389.21],[200912,508.667],[200911,387.433],[200910,229.742],[200909,121.99],[200908,322.178],[200907,555.479],[200906,422.056],[200905,577.266],[200904,594.308],[200903,640.364],[200902,396.169],[200901,400.268],[200812,562.118],[200811,546.078],[200810,324.026],[200809,142.764],[200808,538.172],[200807,400.335],[200806,428.75],[200805,476.873],[200804,622.043],[200803,621.011],[200802,520.183],[200801,563.607],[200712,501.288],[200711,485.859],[200710,301.176],[200709,118.028],[200708,168.165],[200707,340.253],[200706,246.396],[200705,485.868],[200704,542.491],[200703,421.218],[200702,307.82],[200701,485.948],[200612,424.722],[200611,401.088],[200610,342.421],[200609,388.421],[200608,598.383],[200607,602.738],[200606,574.783],[200605,584.982],[200604,494.769],[200603,454.556],[200602,515.946],[200601,572.19],[200512,494.295],[200511,467.364],[200510,425.598],[200509,209.239],[200508,242.221],[200507,307.197],[200506,361.809],[200505,403.831],[200504,545.044],[200503,434.781],[200502,397.932],[200501,489.689],[200412,420.337],[200411,271.719],[200410,120.687],[200409,344.936],[200408,383.901],[200407,300.799],[200406,371.487],[200405,544.358],[200404,617.345],[200403,525.393],[200402,190.801],[200401,307.236],[200312,405.531],[200311,392.063],[200310,354.226],[200309,296.813],[200308,374.776],[200307,349.933],[200306,359.332],[200305,406.929],[200304,394.499],[200303,380.382],[200302,334.016],[200301,392.499],[200212,731.281],[200211,707.901],[200210,218.32],[200209,614.294],[200208,643.632],[200207,106.845],[200206,157.277],[200205,148.405],[200204,144.637],[200203,142.807],[200202,103.585],[200201,65.016],[200112,154.575],[200111,125.761],[200110,98.014],[200109,96.25],[200108,108.391],[200107,163.745],[200106,226.581],[200105,229.585],[200104,260.292],[200103,187.799],[200102,197.506]];
var burlingtonGt = [["Year", "MWh"],[201212, 5.572],[201211,12.087],[201210,8.261],[201209,4.951],[201208,11.743],[201207,24.678],[201206,31.185],[201205,6.541],[201204,5.446],[201203,6.847],[201202,5.318],[201201,25.371],[201112,4.003],[201111,14.425],[201110,15.051],[201109,26.249],[201108,25.515],[201107,45.493],[201106,4.731],[201105,2.548],[201104,9.099],[201103,12.738],[201102,24.384],[201101,40.764],[201012,17.086],[201011,11.374],[201010,8.989],[201009,21.761],[201008,29.48],[201007,49.819],[201006,13.153],[201005,13.665],[201004,4.811],[201003,8.318],[201002,9.013],[201001,8.531],[200912,9.957],[200911,5.237],[200910,4.073],[200909,2.905],[200908,16.437],[200907,5.316],[200906,3.238],[200905,5.054],[200904,5.731],[200903,23.352],[200902,24.051],[200901,90.649],[200812,40.451],[200811,18.515],[200810,15.485],[200809,23.561],[200808,20.139],[200807,33.849],[200806,35.676],[200805,16.032],[200804,18.284],[200803,32.498],[200802,31.299],[200801,41.211],[200712,1],[200711,0],[200710,0],[200709,56],[200708,0],[200707,52],[200706,0],[200705,0],[200704,0],[200703,6],[200702,0],[200701,54],[200612,13],[200611,1],[200610,0],[200609,58],[200608,182],[200607,13],[200606,27],[200605,0],[200604,0],[200603,8],[200602,57],[200601,61],[200512,0],[200511,44],[200510,22],[200509,0],[200508,57],[200507,46],[200506,11],[200505,0],[200504,0],[200503,59],[200502,29],[200501,0],[200412,89],[200411,0],[200410,8],[200409,0],[200408,57],[200407,0],[200406,157],[200405,0],[200404,0],[200403,3],[200402,73],[200401,412],[200312,50],[200311,0],[200310,6],[200309,0],[200308,149],[200307,9],[200306,49],[200305,29],[200304,143],[200303,166],[200302,0],[200301,122],[200212,18],[200211,0],[200210,0],[200209,103],[200208,206],[200207,144],[200206,0],[200205,66],[200204,47],[200203,9],[200202,55],[200201,83],[200112,84],[200111,47],[200110,426],[200109,132],[200108,1463],[200107,339],[200106,612],[200105,8],[200104,0]];
var cadysFalls = [["Year", "MWh"],[201212, 127.404],[201211,86.164],[201210,105.922],[201209,34.445],[201208,25.794],[201207,36.196],[201206,73.515],[201205,134.747],[201204,123.823],[201203,140.183],[201202,86.922],[201201,99.885],[201112,113.166],[201111,69.577],[201110,115.857],[201109,76.219],[201108,22.788],[201107,29.819],[201106,115.153],[201105,132.245],[201104,121.432],[201103,129.481],[201102,63.031],[201101,86.232],[201012,222.49],[201011,343.211],[201010,290.732],[201009,61.424],[201008,116.28],[201007,149.244],[201006,216.735],[201005,280.912],[201004,353.72],[201003,288.48],[201002,197.908],[201001,220.864],[200912,298.832],[200911,227.609],[200910,134.969],[200909,71.666],[200908,189.273],[200907,326.333],[200906,247.949],[200905,339.132],[200904,349.144],[200903,376.201],[200902,232.742],[200901,235.15],[200812,395.912],[200811,384.614],[200810,228.218],[200809,100.552],[200808,379.046],[200807,281.964],[200806,301.978],[200805,335.871],[200804,438.118],[200803,437.391],[200802,366.376],[200801,396.96],[200712,225.462],[200711,218.523],[200710,135.459],[200709,53.085],[200708,75.635],[200707,153.034],[200706,110.82],[200705,218.527],[200704,243.994],[200703,189.449],[200702,138.447],[200701,218.563],[200612,219.814],[200611,207.582],[200610,177.219],[200609,201.027],[200608,309.692],[200607,311.946],[200606,297.478],[200605,302.756],[200604,256.067],[200603,235.255],[200602,267.027],[200601,296.136],[200512,231.701],[200511,189.296],[200510,176.879],[200509,207.243],[200508,250.462],[200507,296.01],[200506,275.775],[200505,244.828],[200504,270.651],[200503,283.343],[200502,258.653],[200501,299.16],[200412,315.038],[200411,203.65],[200410,90.454],[200409,258.526],[200408,287.729],[200407,225.445],[200406,278.426],[200405,407.99],[200404,462.693],[200403,393.776],[200402,143.003],[200401,230.27],[200312,228.745],[200311,221.148],[200310,199.806],[200309,167.421],[200308,211.397],[200307,197.384],[200306,202.685],[200305,229.533],[200304,222.522],[200303,214.559],[200302,188.406],[200301,221.394],[200212,54.589],[200211,40.647],[200210,41.779],[200209,41.94],[200208,43.606],[200207,610.952],[200206,626.081],[200205,379.724],[200204,567.225],[200203,611.691],[200202,578.816],[200201,635.951],[200112,229.271],[200111,244.523],[200110,245.856],[200109,238.023],[200108,246.519],[200107,243.177],[200106,241.456],[200105,99.788],[200104,216.768],[200103,234.435],[200102,235.86]];
var canaan = [["Year", "MWh"],[201212,659.418],[201211,445.969],[201210,548.23],[201209,178.28],[201208,133.507],[201207,187.342],[201206,380.501],[201205,697.428],[201204,640.887],[201203,725.563],[201202,449.892],[201201,516.983],[201112,633.306],[201111,389.372],[201110,648.365],[201109,426.545],[201108,127.529],[201107,166.874],[201106,644.431],[201105,740.078],[201104,679.569],[201103,724.612],[201102,352.741],[201101,482.578],[201012,574.725],[201011,886.567],[201010,751.004],[201009,158.667],[201008,300.369],[201007,385.52],[201006,559.86],[201005,725.637],[201004,913.711],[201003,745.188],[201002,511.226],[201001,570.526],[200912,553.17],[200911,421.328],[200910,249.841],[200909,132.662],[200908,350.364],[200907,604.076],[200906,458.981],[200905,627.77],[200904,646.303],[200903,696.388],[200902,430.829],[200901,435.288],[200812,842.694],[200811,818.647],[200810,485.76],[200809,214.023],[200808,806.795],[200807,600.158],[200806,642.756],[200805,714.899],[200804,932.529],[200803,930.983],[200802,779.827],[200801,844.929],[200712,812],[200711,735],[200710,605],[200709,642],[200708,662],[200707,202],[200706,436],[200705,745],[200704,719],[200703,543],[200702,431],[200701,732],[200612,755],[200611,764],[200610,669],[200609,398],[200608,797],[200607,801],[200606,607],[200605,762],[200604,705],[200603,709],[200602,715],[200601,807],[200512,746],[200511,769],[200510,623],[200509,445],[200508,550],[200507,657],[200506,770],[200505,342],[200504,570],[200503,224],[200502,467],[200501,626],[200412,663.041],[200411,428.611],[200410,190.373],[200409,544.104],[200408,605.567],[200407,474.482],[200406,585.986],[200405,858.672],[200404,973.802],[200403,828.757],[200402,300.97],[200401,484.635],[200312,703],[200311,751],[200310,514],[200309,436],[200308,545],[200307,168],[200306,314],[200305,517],[200304,632],[200303,235],[200302,33],[200301,377],[200212,615],[200211,628],[200210,438],[200209,402],[200208,736],[200207,663],[200206,710],[200205,770],[200204,740],[200203,558],[200202,613],[200201,765],[200112,462],[200111,483],[200110,327],[200109,220],[200108,633],[200107,715],[200106,609],[200105,484],[200104,648],[200103,124],[200102,477]];
var cavendish = [["Year", "MWh"],[201212, 582.857],[201211,394.191],[201210,484.579],[201209,157.581],[201208,118.006],[201207,165.591],[201206,336.324],[201205,616.454],[201204,566.477],[201203,641.322],[201202,397.658],[201201,456.96],[201112,760.683],[201111,467.686],[201110,778.771],[201109,512.337],[201108,153.18],[201107,200.437],[201106,774.046],[201105,888.93],[201104,816.251],[201103,870.353],[201102,423.688],[201101,579.638],[201012,434.35],[201011,670.026],[201010,567.574],[201009,119.913],[201008,227.005],[201007,291.358],[201006,423.116],[201005,548.403],[201004,690.54],[201003,563.178],[201002,386.361],[201001,431.176],[200912,637.521],[200911,485.576],[200910,287.939],[200909,152.892],[200908,403.791],[200907,696.191],[200906,528.97],[200905,723.497],[200904,744.856],[200903,802.579],[200902,496.526],[200901,501.662],[200812,652.125],[200811,633.515],[200810,375.909],[200809,165.623],[200808,624.343],[200807,464.436],[200806,497.401],[200805,553.229],[200804,721.644],[200803,720.447],[200802,603.474],[200801,653.854],[200712,627.448],[200711,608.136],[200710,376.974],[200709,147.733],[200708,210.487],[200707,425.884],[200706,308.407],[200705,608.148],[200704,679.021],[200703,527.226],[200702,385.289],[200701,608.248],[200612,545.042],[200611,514.713],[200610,439.426],[200609,498.458],[200608,767.9],[200607,773.489],[200606,737.614],[200605,750.702],[200604,634.933],[200603,583.328],[200602,662.109],[200601,734.287],[200512,462.937],[200511,378.211],[200510,353.402],[200509,414.07],[200508,500.42],[200507,591.426],[200506,550.996],[200505,489.163],[200504,540.757],[200503,566.116],[200502,516.785],[200501,597.718],[200412,520.477],[200411,336.452],[200410,149.44],[200409,427.112],[200408,475.36],[200407,372.46],[200406,459.989],[200405,674.043],[200404,764.419],[200403,650.56],[200402,236.257],[200401,380.43],[200312,597.02],[200311,577.192],[200310,521.489],[200309,436.965],[200308,551.742],[200307,515.169],[200306,529.005],[200305,599.078],[200304,580.777],[200303,559.995],[200302,491.735],[200301,577.833],[200212,72.707],[200211,54.138],[200210,55.646],[200209,55.861],[200208,58.079],[200207,813.737],[200206,833.888],[200205,505.76],[200204,755.495],[200203,814.72],[200202,770.935],[200201,847.033],[200112,322.817],[200111,344.292],[200110,346.168],[200109,335.14],[200108,347.102],[200107,342.397],[200106,339.973],[200105,140.503],[200104,305.213],[200103,330.088],[200102,332.095]];
var chaseMill = [["Year", "MWh"],[201212, 3330.274],[201211,2252.29],[201210,2768.739],[201209,900.37],[201208,674.252],[201207,946.139],[201206,1921.654],[201205,3522.235],[201204,3236.685],[201203,3664.326],[201202,2272.101],[201201,2610.935],[201112,3690.987],[201111,2269.308],[201110,3778.754],[201109,2485.96],[201108,743.258],[201107,972.561],[201106,3755.824],[201105,4313.267],[201104,3960.615],[201103,4223.127],[201102,2055.819],[201101,2812.52],[201012,2727.247],[201011,4207.03],[201010,3563.746],[201009,752.926],[201008,1425.345],[201007,1829.41],[201006,2656.708],[201005,3443.37],[201004,4335.84],[201003,3536.144],[201002,2425.923],[201001,2707.311],[200912,3495.909],[200911,2662.703],[200910,1578.941],[200909,838.396],[200908,2214.224],[200907,3817.628],[200906,2900.656],[200905,3967.368],[200904,4084.491],[200903,4401.021],[200902,2722.747],[200901,2750.916],[200812,3587.37],[200811,3484.999],[200810,2067.893],[200809,911.101],[200808,3434.545],[200807,2554.886],[200806,2736.229],[200805,3043.342],[200804,3969.799],[200803,3963.218],[200802,3319.743],[200801,3596.875],[200712,3246.044],[200711,3146.137],[200710,1950.24],[200709,764.281],[200708,1088.934],[200707,2203.274],[200706,1595.513],[200705,3146.197],[200704,3512.852],[200703,2727.555],[200702,1993.259],[200701,3146.714],[200612,2873.487],[200611,2713.591],[200610,2316.674],[200609,2627.894],[200608,4048.405],[200607,4077.872],[200606,3888.737],[200605,3957.739],[200604,3347.399],[200603,3075.333],[200602,3490.674],[200601,3871.195],[200512,3371.322],[200511,3187.642],[200510,2902.774],[200509,1427.108],[200508,1652.057],[200507,2095.225],[200506,2467.707],[200505,2754.317],[200504,3717.451],[200503,2965.41],[200502,2714.08],[200501,3339.906],[200412,2748.483],[200411,1776.706],[200410,789.146],[200409,2255.455],[200408,2510.236],[200407,1966.853],[200406,2429.067],[200405,3559.425],[200404,4036.67],[200403,3435.416],[200402,1247.602],[200401,2008.941],[200312,2727.315],[200311,2636.738],[200310,2382.273],[200309,1996.151],[200308,2520.476],[200307,2353.403],[200306,2416.61],[200305,2736.717],[200304,2653.117],[200303,2558.179],[200302,2246.351],[200301,2639.668],[200212,5139.451],[200211,4975.14],[200210,1534.355],[200209,4317.268],[200208,4523.456],[200207,750.908],[200206,1105.344],[200205,1042.99],[200204,1016.51],[200203,1003.647],[200202,727.998],[200201,456.933],[200112,1226.655],[200111,997.991],[200110,777.806],[200109,763.807],[200108,860.15],[200107,1299.422],[200106,1798.064],[200105,1821.901],[200104,2065.584],[200103,1490.301],[200102,1567.334]];
var chitCoSolar = [["Year", "MWh"],[201212,219.01],[201211,251.249],[201210,340.283],[201209,364.312],[201208,367.118],[201207,402.425],[201206,428.119],[201205,400.882],[201204,264.657],[201203,183.546],[201202,100.305],[201201,66.094],[201112,87.642],[201111,102.949],[201110,184.795],[201109,223.853],[201108,300.921],[201107,287.329],[201106,337.686],[201105,289.825],[201104,0],[201103,0],[201102,0],[201101,0]];


function drawChart(stationName) {
    console.log(stationName);
    var stationMap = {"Bellows Falls": bellowsFalls, "Ascutney" : ascutney};


    var data = google.visualization.arrayToDataTable(stationMap[stationName]);

    var options = {
        title: 'Total Generation: '+stationName,
        legend: {position: 'none'}
    };

    var chart = new google.visualization.LineChart(document.getElementById('powerplantChart'));

    chart.draw(data, options);
    drawPieChart()
}

function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Source', ''],
        ['Nuclear', 6.5],
        ['Hydro',    46.8],
        ['Oil & Nat. Gas',  0.8],
        ['Wood', 3.8],
        ['Methane',    1.4],
        ['Wind', 9.3],
        ['Solar', 0.5],
        ['Other', 30.8]
    ]);

    var options = {
//        title: 'Total Generation By Type',
        titlePosition: 'none',
        pieHole: 0.4,
        height: 300,
        chartArea: 0,
        legend: {position: 'none'}


    };

    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
    chart.draw(data, options);
}
//});