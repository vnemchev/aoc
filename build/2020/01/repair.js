"use strict";
function repair(input) {
    var numbers = input.split('\n').map(Number);
    var numbersL = numbers.length;
    for (var i = 0; i < numbersL - 2; i++) {
        var fNum = numbers[i];
        for (var j = i + 1; j < numbersL - 1; j++) {
            var sNum = numbers[j];
            for (var k = j + 1; k < numbersL; k++) {
                var tNum = numbers[k];
                if (fNum + sNum + tNum == 2020) {
                    return fNum * sNum * tNum;
                }
            }
        }
    }
}
console.log(repair("1742\n1763\n1238\n1424\n1736\n1903\n1580\n1847\n1860\n1933\n1779\n1901\n1984\n1861\n1769\n1896\n1428\n2010\n1673\n1491\n1996\n1746\n1973\n1696\n1616\n2006\n1890\n1600\n1991\n1724\n1804\n1794\n462\n1706\n2002\n1939\n1834\n1312\n1943\n1465\n1405\n1459\n1659\n1288\n1241\n1935\n1294\n1388\n1772\n1945\n1649\n813\n1956\n1274\n1686\n1404\n1770\n1631\n1366\n1321\n1353\n1685\n1365\n1738\n1911\n1235\n1495\n1837\n1456\n1283\n1929\n1326\n1735\n1604\n1223\n1261\n1844\n1850\n1429\n277\n1848\n1818\n1395\n1522\n1863\n1475\n1562\n1351\n1538\n1313\n1416\n1690\n1539\n1338\n1982\n1297\n1821\n780\n1859\n1420\n1934\n1303\n1731\n1714\n1702\n1417\n1872\n1998\n1908\n1957\n1270\n1359\n1760\n1997\n1773\n2000\n1203\n1880\n1955\n1273\n1775\n1893\n1237\n1707\n1885\n1900\n1801\n1367\n1561\n1524\n1678\n1511\n1623\n1464\n1477\n1733\n1423\n1575\n1851\n2007\n1651\n804\n1836\n1849\n1713\n1401\n1502\n1806\n1506\n1646\n1968\n1253\n1889\n1759\n1734\n1611\n1558\n1256\n1657\n1778\n1953\n1578\n1717\n1498\n1381\n1919\n1512\n1391\n384\n1802\n1573\n1940\n1323\n2003\n1689\n1936\n1368\n1962\n1964\n1586\n1619\n1482\n1445\n372\n1792\n96\n1468\n1999\n1301\n1757\n1613\n1807\n1941\n1642\n1557\n1884\n1626\n489\n1989\n1327"));
//# sourceMappingURL=repair.js.map