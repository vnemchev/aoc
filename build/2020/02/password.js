"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function passPhilosophy(input) {
    var totalValid = 0;
    input.split('\n').forEach(function (row) {
        var _a = __read(row.split(' '), 3), range = _a[0], criteria = _a[1], string = _a[2];
        var _b = __read(range.split('-').map(Number), 2), min = _b[0], max = _b[1];
        var key = criteria[0];
        var pos1 = min - 1;
        var pos2 = max - 1;
        // if (isValid(min, max, key, string)) totalValid++;
        if (isReallyValid(pos1, pos2, key, string))
            totalValid++;
    });
    return totalValid;
}
function isValid(min, max, key, string) {
    var e_1, _a;
    var total = 0;
    try {
        for (var string_1 = __values(string), string_1_1 = string_1.next(); !string_1_1.done; string_1_1 = string_1.next()) {
            var char = string_1_1.value;
            if (char == key)
                total++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (string_1_1 && !string_1_1.done && (_a = string_1.return)) _a.call(string_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return total >= min && total <= max;
}
function isReallyValid(pos1, pos2, key, string) {
    return ((string[pos1] === key && string[pos2] !== key) ||
        (string[pos1] !== key && string[pos2] === key));
}
console.log(passPhilosophy("13-16 k: kkkkkgmkbvkkrskhd\n5-6 p: qpppvzp\n3-4 p: psppxhlfpvkh\n3-10 w: wwwwwwwwwwdwww\n4-5 r: rcgrrcr\n3-4 c: clvccc\n1-5 x: xfsfxmctb\n9-14 k: kpkmkkckhkkkkvkk\n5-6 s: gsfsss\n4-8 c: cccdcqdcr\n2-5 k: kmkpkkfgkkkkdkkk\n9-11 f: pfnsfffwxsn\n8-9 w: wjwnwcwxc\n7-8 q: rrxhplqs\n5-10 n: gpnkqnxnbjzgjnb\n18-19 p: fvpkgfkfjgwllqwhrjd\n12-13 v: kvvvbmdvvvvvvcvvvv\n3-5 m: mdmkmvhszpjcxl\n2-7 v: qjmvzdwxc\n1-4 b: bbbbbbbb\n2-5 c: fzcdccfkcsjhckccrcx\n2-10 d: fhdwdbdddrsldrtdjdr\n1-7 z: ztszzfzztcqzrz\n4-6 j: mmjjjrj\n11-12 b: smbgkbbmbpbbmkbbbb\n3-5 r: jxzrk\n13-15 d: fppsvgqrdgrbddd\n12-14 w: wwwwkcwwwpwzwzwwsz\n5-6 v: lmcvvv\n12-14 x: xxxxxxvxxmxbjnx\n1-2 p: hpgpt\n10-11 k: qmktzklkgkcknfwkh\n6-7 r: ntcrrrjrznk\n7-8 v: vshxvzxw\n9-13 c: cncccccclcdwccwmc\n5-6 r: srrrgv\n6-9 w: bwfswqthk\n5-7 f: hfvsfjf\n11-14 v: zbksgqcrclvvwpfvfr\n8-9 v: vvvvvmvvvkv\n1-12 n: gnnnnnnndnqnd\n10-11 j: jtjjjvbjjhj\n3-10 x: vgxxxwqxkxn\n5-6 z: zzzztr\n2-4 z: rzdhz\n10-11 m: mmmmmmmmmmvj\n2-4 z: jzczpvzzs\n1-4 k: rkkhk\n4-8 n: nwcwmnflpbnnl\n2-4 w: dwwgwwssf\n1-3 m: smzm\n2-6 d: dsddwwljd\n13-15 w: wwwwrwwwdvwwpwg\n7-10 f: bhsfffzfjdbfmf\n6-7 w: wwwwtwww\n3-6 b: bbbbbbxb\n7-9 d: dvwdxjgdhf\n12-14 n: znnnnnnnnlnfnrn\n1-7 v: qvkvvvgv\n2-15 x: xsxxxxxxxxxxxxbx\n5-11 n: nckpwnmmnzg\n4-13 d: dzdddcdkxgqddqdp\n5-17 m: mkxmzbmmmmvfvmmjvmmm\n11-13 p: pppzppppswhqhpppp\n4-5 b: bbbgg\n5-8 v: vvvvvvsv\n9-10 j: jnlkmhmvjvnbjcsvlwb\n2-4 x: zxxxxv\n1-17 r: drrrrrrrrrrrrrrrcr\n11-17 w: wqmwlszsnnwwwzwwwww\n2-3 m: mmmmmmmmm\n9-10 n: nrnngngnvr\n4-8 z: bxjtzkdzwkzz\n5-8 g: vjtvqtgqjgtggggmj\n2-5 q: qfgcqw\n6-11 c: cgccccchcccvc\n6-8 t: tpjgfjpr\n5-10 h: hhhnhbhhczhh\n11-14 d: gdddddddddwdddr\n1-2 l: twngrmgrckmlmh\n10-12 r: rrrrrrfprfrr\n7-8 m: bmmmmsrhqm\n2-11 w: wlwwwwdnqsvw\n10-13 j: jjjjjjtjzjjjj\n4-16 f: fdvgffxfzcffffff\n2-6 q: wbfvkm\n4-6 d: ddddddd\n2-4 p: jpxprdpn\n5-6 s: tgssrrpbvsgs\n3-10 j: spjgjjjcbjsjxj\n5-10 w: wwqrdvwwwpwwwr\n3-4 x: hpxxxzf\n4-8 d: dxcpddddddrddddddqj\n15-16 z: zhfxlzzkzzgzhzzz\n3-5 s: ssslsnc\n2-3 j: rrjrwg\n7-13 x: xxxxxxpxxxxxtxx\n5-8 x: xxxxxxxrxxxxxxxgx\n4-10 g: dmhcmbwnwwggcw\n6-8 s: qtsxflsfshzvsgpxg\n7-9 c: cbvccckcwc\n15-16 r: rlrrrrrrnrrrrrsx\n8-10 r: kjrbrrrbrnvrrx\n6-7 q: zpsmcjmmr\n5-10 p: ppgpsppppkpp\n3-4 k: kbkkk\n1-2 b: bbbbb\n8-11 s: sssvssssbsw\n5-7 m: lmwrmmmmgmfhd\n16-18 j: jjjjjjjjjjjjjljsjt\n1-14 b: bcjlbbcwbjbxbbvbf\n2-5 z: qzzrfv\n4-17 t: tttrtzttttttttttxttt\n5-6 w: kwwwjw\n7-9 l: bclgtbghdtd\n1-8 h: mqhbhhhhhhh\n5-6 j: zznjjfvvjwcths\n5-7 t: tttbmttd\n5-14 v: vvvvpjvvvvvvhm\n2-4 x: vxlx\n5-15 g: gfgfnnqkbgngpdpp\n1-8 n: jnnnnpnvntrp\n3-4 b: bbbb\n6-7 z: frszzzfz\n6-9 f: pbbmlvfpwvw\n4-15 g: gbjgggfgvggggdgbq\n1-9 w: tgwljtgwlm\n14-15 k: kkkkkkkkkkkkkzk\n11-12 p: ppppppppppklp\n4-8 n: nnnvpkzsn\n13-16 m: fmjsqwtmwbdxmnwmlmb\n2-7 c: qccgccczcc\n8-11 x: xxxxkxxbxxx\n1-4 g: gcgb\n6-7 l: pkjllll\n2-3 n: mnntpwsrlqkxkgnlb\n9-10 s: sssssssscss\n6-16 n: rtthnbsrfvndnsnnj\n1-2 h: hjdhh\n1-3 f: ffff\n6-9 l: xqtvlllllpmlxtl\n6-11 r: rrrrrrrrrrr\n1-6 z: fzzzzzzzzzz\n2-7 q: qqdqqqgqqqqtxqqqq\n9-13 k: dbfkszjjmkkkfkdkklxk\n5-6 j: mdjjljdfzjvqd\n5-10 s: tsbskgsbtsqdd\n12-14 j: tjjsjdjfjtjjfjj\n9-10 x: xxxxxxxxgx\n8-11 r: rrgrrrrbrrcrrr\n6-18 m: vmnmhmbmmmmmmmmmmz\n6-8 k: llkkqrkc\n1-2 c: cccc\n2-8 x: xxxxxxxxxx\n7-10 p: ppzppppppwp\n9-17 v: cdjwncwrbcgkfvwzvkf\n6-11 w: wwftwjwwwcwwvwwvw\n12-16 g: gggggggggxggggggggh\n1-4 z: kzxzcdnpgczhn\n3-5 t: tttmtttvxtd\n4-5 h: hhhwh\n4-8 d: dvddddln\n8-15 l: lvllfllllxllllwmpl\n7-9 s: dbsksbwtj\n8-15 q: qkbqmqqqqqqqccqhq\n2-6 r: grcsrrqz\n14-18 s: sssssssssssssssssss\n7-10 r: ffrrttnrrrrs\n2-11 c: csccccccfdgccgcccccc\n3-5 r: rrrrr\n3-4 h: qrhh\n7-9 k: kkzqkrkwk\n1-5 k: khkkfgkj\n3-6 l: pplnxl\n10-13 k: chsxfrtrkkjgq\n6-9 b: lbbblnbrbbb\n3-5 n: hqnlfpnj\n5-8 f: shffkcnfdmswfrnsfrpg\n2-7 j: jjjjcdcnwxnbr\n4-13 z: dvxnzpcbfkngk\n11-13 h: hwzpzbphjhrhk\n1-10 v: vqptqpbbtq\n1-4 b: bdfpt\n13-18 p: pppppppppppppppppp\n14-15 h: hhhfhhhhhhhhhnmhh\n4-14 x: wxsbxxxjvxxbxx\n9-10 m: mmdmmxsrjdmpdmzsmm\n11-16 s: szsbssssssszsxss\n9-13 h: hhhhbhvhthhvnh\n5-6 q: qqqqqq\n1-3 d: ddldcqrdmd\n11-17 f: ffcfkfffffpwfqffm\n3-6 m: rmmmqm\n9-11 l: vlblgszllwbvpn\n13-15 z: ghzvdlzrvrzzcnz\n3-5 l: bglllcll\n1-8 h: hhhhhhhhhh\n2-7 j: qjsgtjjt\n1-2 d: ddbctlvpdf\n11-14 v: vvvbvvvvvvtvvvvv\n14-15 g: ggzgggggggswgrjggm\n9-13 v: hqtcqvnbvqnmv\n12-13 b: bbbbbbbbbbbjzbbbbb\n5-6 r: rrfrcv\n4-6 p: pppppppppppp\n6-12 d: fdddddddddddrd\n12-17 g: ggghgggggggxggggfgp\n2-7 h: hqhhhhjhh\n8-12 v: vvvlvvvvvvvv\n4-5 n: nnkpg\n3-12 m: mmzmmmmmmmmmmmm\n11-14 b: bbbbbpbbbbbbdbbbb\n6-7 z: zzzzzzr\n4-7 n: snnnnfnkn\n1-2 h: hnshhqvmjpghntx\n15-16 b: bbbbbbbbbbbrbbbb\n4-6 n: nxnnpnnnh\n2-9 v: sdghvmxtkz\n5-7 j: jjjjjjj\n4-10 l: plbhsmlllrl\n12-18 g: ggtggdlghcjwqwggggg\n5-7 b: bzbxrbxgwcdbb\n5-15 m: mmmmmmmmmmmmmmmmm\n4-13 j: jjjjjjjjjjjjjjj\n4-11 k: kshkkwlkkkkkdkbk\n1-15 w: bwwwzbwwwnwwwmcww\n19-20 l: pblvxmgslllnnsplldnv\n3-4 z: skzx\n1-5 x: xxqdxgb\n2-3 g: wgggc\n5-9 d: dgcddwrdf\n3-6 m: mfkzjg\n5-8 s: hmssmgwxhssg\n10-11 s: ssssshqssll\n17-19 v: vvsvfvvvvxvvvgvvvbv\n11-12 t: cwssdtfqkdttjv\n1-5 b: hcptprhlpbwkg\n2-8 j: ljjxjjjljp\n2-5 q: qqqlqr\n2-8 r: jrcwdbhrcltrnsgswpm\n3-4 f: ffvff\n5-10 h: hhhhhhhhhhzph\n5-6 z: mzzmctzz\n10-13 w: wwwwwjwqwwwwwwwwww\n1-4 m: mmtm\n11-12 z: tddzcrptcnlmbjj\n3-6 l: llmllpl\n2-4 f: ffsf\n5-11 g: gggrvgggggg\n2-10 k: zbmpktfnddfs\n5-9 l: lsbblgpjlms\n1-12 s: sssssssssssss\n5-7 f: fffdrsc\n9-11 z: rzzzzkfzzwqzrz\n3-6 z: zwzrbzv\n17-18 r: rrrrrrrrrrrrrrrrrg\n2-4 n: nnnrgnnn\n3-4 n: nfqq\n2-3 h: khhc\n9-10 x: xxxffbxxxnr\n5-6 d: mtgnrjdnmzhddks\n3-4 b: bbbb\n11-15 p: kppxppppppppppppp\n13-18 t: tttdtttttttttttttttt\n1-7 p: frjpppwgdpzvvfwds\n1-6 k: qkzkkvpk\n4-15 n: nnnxnnnnnnnnnnpqn\n6-7 l: ndlrqrl\n4-5 r: rchrwr\n11-12 f: ffffffffhfff\n1-3 j: xjjjj\n9-10 z: zzzzlzzzgn\n6-17 g: tgrhpggcqbjwjggmgql\n11-15 v: vvvvvvvvvvlvvvhv\n10-13 w: wwwwwwwtwwwwswwfwww\n1-2 l: plllllllllllpll\n8-9 k: kkckklwkc\n2-4 b: bvbp\n1-6 r: rrrnqrrrrrrrrrrrrr\n8-10 d: pwnvkxddpddd\n3-6 k: kkkwkf\n8-15 v: vvvvvvvvvvvvvvvvvvv\n13-17 g: lhqgggcxlgcvgwgdg\n6-13 x: kxxxxsxxxmxxxx\n3-4 r: rrrqr\n2-3 r: kvrsxjrmtvtr\n1-2 h: jtbh\n8-9 w: wwwwwdfckw\n13-18 v: vvqwvvvnvvvvvvvsvv\n6-14 t: mpfthffdnmtxmx\n4-5 d: dddcsd\n6-7 m: mlmmmnfmmh\n5-7 x: xhxpkpqxqnx\n9-11 v: vgvvqgvvwmkpfvvlv\n15-18 l: jlxqvmjgrrnbhccpdl\n2-9 k: kkkkznkkbf\n14-15 w: wwwwwwwwwwwwwbwww\n9-10 k: wkkvvmkkvgfkkk\n10-15 g: bfggggggggggggg\n7-8 x: xxxxxxxx\n12-14 t: dmtmwtztltfsthtb\n6-7 k: kkkkkwk\n4-5 c: ccvsz\n3-4 c: mclvcfjcqh\n16-17 k: skkpknhxxsrqmcvkj\n12-13 v: vvvvrfdfsdtvf\n1-2 q: fpqp\n7-8 b: bwbbbqbbb\n5-6 h: hhhhhh\n5-7 z: zzvzdzzxzwz\n17-18 w: wwwwjhggnwbwwwwwzb\n6-8 g: gggggtggg\n4-8 n: lnnnzhbn\n17-18 g: lggggggggcggglgggg\n2-8 v: vbvvvvvkv\n1-9 v: vvxvrvvtvvvvv\n13-15 j: fhvxdngcrjdqxmnz\n5-17 n: nnnnnnnznnnnnnwnnn\n1-4 f: fnxdmjdsqbfffnjsnkf\n3-8 q: dqqgbnbrpxqclq\n4-6 b: xkpbbbk\n11-12 l: llqllllllldjll\n9-10 c: cwvlcdnmzr\n6-8 l: zkjlllvlgvlnlblspm\n4-9 b: lbbbbbbbbbwbbbw\n9-12 g: gfgrggvgbggg\n16-17 r: rrrrrrrrrrprrrrtc\n2-16 r: mrbmrrxgrrbzrrmrrj\n16-17 v: vnsvvczmjwfkvjvvvsrv\n2-11 l: lglrllnlllqlll\n2-8 t: sllgjrxkthl\n3-7 d: ddldddk\n8-13 c: ccckchmcdxccccccsf\n8-9 t: cttbtztttfqdqh\n4-5 b: tbbxh\n12-17 w: wwwwwwwwlwwtwwwvtww\n1-5 t: krfwxtzxcwphw\n3-10 w: wwwwwwwwwwwww\n1-2 n: nnjqqkspswql\n9-13 w: wwwwwwwwfwwwwww\n1-3 s: ssss\n13-14 x: xfxxxxxtxxxxnx\n4-5 x: xxxcj\n5-15 k: kkkktkkkkkkkkkf\n14-16 l: lrlzjxlllpqltlblvlll\n5-6 t: ttttfct\n11-14 z: zzzzzzrczdkzzz\n6-8 f: ffffftfj\n9-11 d: ljdngglsdvdsv\n10-15 c: ccrqhcqzccnnjvcfcj\n11-15 w: jwvwnccwwxzcwwww\n9-10 s: ssssssssss\n2-4 r: vzfmrr\n5-8 l: blhlnlsqb\n6-7 c: ccxxcfxldckpcc\n2-4 j: czjkj\n2-14 d: rlxksvpqsnhhpkds\n16-19 k: kkkkkkkkkkkckvkjkkwp\n3-9 j: kcjcbjjjjjjjjgljml\n2-7 l: ljjzdll\n4-8 r: fqnqjbsssqrrwrrrrr\n5-15 t: xtnvhtttdsrhtttt\n1-3 l: xlzl\n6-10 g: ggggncchghgggghgg\n10-11 m: msmmmmmcmgj\n4-6 c: mcnprhmcfcclcl\n12-13 s: ssssswssssstsss\n13-14 m: mmmmmmmmmmmmmmmmm\n9-11 p: kqvrdbpppcpgqh\n6-7 q: qqqqqqq\n9-10 b: bpbbnbbbkdbbsbblqrfb\n12-13 b: bbbbbbbbbbstsb\n8-11 g: ggbbfrsgdxhldnt\n7-8 d: dddwddssdbd\n6-7 b: bbbbkbfj\n3-5 z: jtdklzthgz\n5-6 l: hlnlllltmvhmlmq\n3-6 q: qqpxqvqp\n1-3 z: zskzmzzzhzzzhzvzrzzq\n2-8 h: sskhzhlhkht\n2-9 r: rltcgrrrrrrr\n3-16 f: zrxffkfcvffffncffgff\n1-2 r: rrcrhkns\n14-17 b: bbbbbbbbbbbhjbgbdblb\n4-15 c: cccccccwcckclccrcc\n13-14 l: lkzlclbnlhlcnk\n13-14 r: rrrrrrrrrrbrrr\n4-5 k: cvhkkkbj\n2-5 m: kmfnmzh\n14-15 n: nnnnfnnnxnnnnnnndnnn\n7-10 t: wttwkbhtpf\n3-9 n: qjgzpnkpn\n6-7 n: nhnnnzn\n5-10 n: nngtndngcn\n2-5 x: rdxnp\n10-13 s: sssssssssxssssssss\n6-8 n: mnjnnxnnvckn\n2-10 p: gpxpglqwpppp\n5-7 t: twtktdts\n18-20 c: cccccccccccccccccccc\n6-7 d: dddddddw\n10-11 x: xxxjxxxxxvzxxxx\n4-7 z: zrphzzlzhgfwd\n4-8 l: lllnlllkl\n2-7 q: kkwsgndmdrmsvfqj\n4-7 m: mmnmjfmm\n2-5 s: flhkzzs\n12-15 x: xxxxxlxxxxxmxxs\n9-11 v: vvvvvhvkbndjvx\n1-9 n: kpqgbxnkx\n5-10 f: ffdfrpfffffwfffff\n1-3 f: jsvqkff\n5-7 j: jsjjjfxl\n8-14 z: zzznrzzzzzqzzz\n1-12 d: dzlbdzhgmrdddc\n12-13 k: kkkkkkkkkkkbk\n7-8 m: pmmmmmmmm\n1-6 s: bsssssvslx\n6-8 d: dddgdgrtbfdm\n11-14 k: gkplwxkmskwmdpm\n6-10 x: xxxxxkxxlr\n4-10 l: lllxlllllklllll\n1-2 t: ttstmpksrrp\n10-12 s: ssssdsssshscs\n10-12 z: zzzzzzzzpwjszzzz\n2-4 r: grrrctkzmw\n1-2 l: fspl\n3-5 k: kkkkk\n5-12 b: bcbbbbjbbbbb\n8-9 c: ccccccctcc\n3-8 p: pmplmhpp\n6-7 b: bjhfsbbx\n16-19 d: dddddddddwdvddddkdg\n5-6 j: sjrzcj\n5-8 f: mfdffdgf\n1-3 q: qcqqq\n9-10 s: sbsssssspm\n2-4 f: dffl\n3-4 n: nnnn\n4-10 t: wttthjpdmtlthttgwtkt\n9-10 d: jpxdmbnddddd\n10-19 q: sqhswtjrpqbxwjqzfqmr\n2-6 w: swwzvgwbww\n1-2 m: cfmmsl\n9-14 w: pwdbjwwhbnpwllm\n4-5 q: qqqqqqqqk\n8-15 m: mmkdmwzkrvlmpmnmmmmf\n17-18 q: qqqqqqqqqqqqgqqqnvq\n3-6 g: gkkngh\n1-8 g: gghdzwkg\n3-11 j: vxdspqtvkpj\n5-7 q: qqtqgpmqdq\n6-8 d: bdmddddvd\n5-6 w: zwwwwwvwxfw\n2-11 n: bnplrmpvbpn\n7-14 k: kkktbkkkkkkkkk\n3-11 b: fmkqvvbztnxzqvjc\n3-6 q: sscqqq\n4-7 c: cfrrdrzbjmvpk\n6-9 w: pwrtzwrww\n2-5 v: vvcvv\n2-4 f: ffmf\n8-10 k: kkkkkkkpkd\n6-7 v: mvjvvvv\n8-11 c: vccvcckccfk\n7-8 b: bbbbbbbsr\n2-3 x: xxxmvx\n6-7 l: llbllwsl\n8-10 r: rrrrrbrrgrrrrnrb\n12-16 g: ggggggzsggmwgggv\n18-19 p: pprppppppppppppppppp\n3-6 s: ssssssss\n2-6 x: lwxkdx\n2-3 n: xgbnf\n2-4 p: dzrk\n2-4 h: hlhpjhh\n4-5 b: bmnbb\n1-7 z: zczvzczsxmxpzznp\n2-9 l: nlwxdwlblzl\n1-4 r: xbtcqrfkv\n13-16 k: skkkkkkvkkjkxrkfqk\n9-14 b: bbbfcbwfjbbcbg\n1-13 r: frrrrrrrrrrrfr\n1-4 w: hwwxwnvvt\n2-6 l: zzhlrx\n3-8 v: vmzvggqtslnlqrj\n15-16 s: dhssknsjztzssssssss\n2-6 q: qqqqqqqq\n2-3 t: mkktlt\n7-17 b: bbbbbbbbbbbbbbbbdb\n11-17 s: sssssszfssxssssskj\n2-7 h: hnhkhshhhhhhhh\n2-15 x: xzxjxnxxpxxkzxxxxj\n15-16 p: pmcmpclzphppxplp\n8-9 k: kkkkkkkdpkks\n2-4 r: vrwt\n8-12 r: qrrrhhwjrrrhrrr\n3-4 j: vjjzq\n8-10 q: qqqqqqqqgs\n6-7 j: zjjjjjjj\n1-11 m: mdgkdkmqzmmsrhxxmmj\n1-7 x: pxxxrbq\n3-4 z: zrhkzz\n4-5 s: ssqlss\n5-8 f: vtrfffffff\n7-13 j: jjjjjjdjjjjjtj\n1-7 n: dnnfxwz\n2-11 n: nzgnqncnnnjg\n4-5 x: xxxxx\n5-7 v: rhbvvvvhvxvpz\n10-11 z: zlbbddzlzwzv\n10-13 v: vvvvvvvvvvvvvv\n3-4 s: ssrs\n11-12 m: mmmcmmfdmmsmmmmnm\n5-7 s: sdstsssssrs\n1-3 w: bwzw\n3-4 h: hphq\n7-16 q: qqqfqqdwksqlfcqjxq\n6-7 x: kndcxfv\n10-11 m: mmmmmmmmmmm\n1-4 n: fvsvnfhgwcgcnp\n13-14 s: ssssssssrssswrss\n5-9 x: xmvkxwgrxrtwxmrxhxx\n3-5 q: jdbvvxvdg\n3-15 w: zlzcksssjbwcvgp\n16-19 x: bxxxxxxxxxxxxxxxxxx\n3-5 z: rzzhz\n4-10 f: hpttvbtjmq\n3-6 n: wsngjn\n4-5 p: ppphg\n10-12 c: bqlccfctmchqbchhcg\n9-10 z: zzzzdzzzzhzzvz\n7-9 w: nwgwcvdcxqqwmzq\n14-19 x: pxtxxlbrxdpvspwmxxx\n2-8 t: ssktwbft\n8-9 j: jjjjjgjsjzjj\n7-9 v: vvvvvvdvlvvwv\n4-6 x: qxxkssx\n11-13 g: ggggggggkgvgg\n8-9 t: tttttvttjttwt\n2-8 b: pfbbcsbwbbbb\n8-16 r: mkrcrtsrrrrbxmprftvx\n9-10 k: hvwlqvktkkb\n1-6 w: wsbwwvjwwrwh\n10-19 f: nfftfffrdhjffjsnffd\n13-16 h: hhzghvhhhfhhhhhhhhh\n14-16 x: kskxbwrwrvjxfvfg\n1-4 k: rflk\n6-7 b: bbbbbbgb\n4-17 v: vvvvvvvvvvvvvvvvv\n12-13 s: sdstmsspfwsssscqf\n9-11 z: zzwzvmrzzczzzz\n4-8 s: skslmgsqtszbswsssscs\n4-12 h: bdshxnpgvwhktdwgdp\n3-5 t: tltst\n4-5 h: hhhhh\n9-11 w: wwwwwnwxxwwwwwww\n6-7 n: dcnngffnnzn\n1-3 l: clflll\n6-7 x: xxxzxxgx\n6-7 n: nnnnnkgnnnnnn\n1-6 m: mmmmmmmm\n5-7 t: tktttpt\n4-8 v: zpcvqvzvrvgttntrbl\n6-7 d: dddrddd\n3-5 k: jskdkswqjfftgkfr\n5-6 f: ffffgrffn\n6-8 l: lwlkllgl\n10-13 p: ppppkpppppppd\n4-5 d: hbjdd\n9-15 r: rrxrrrrrrrrrrrrrgr\n4-5 b: bbbbtbx\n8-11 b: brbbtlvvlbdbbbqjsb\n6-8 g: zgzqgwmg\n4-9 r: qstrmxrtr\n5-8 m: mbmjmmmmmr\n5-7 v: tvvzqvgrvqvmvncshv\n17-18 g: fgggggggggggggggwr\n2-12 t: nttpgcjtkdjt\n6-10 k: kkkkklkkkk\n2-7 q: qqqmtgqq\n3-6 n: npccknvnn\n5-16 k: rtlhkbtdkmmntdbl\n2-3 b: wwkb\n7-17 q: qqqqqqqqqqqqqqqqqq\n1-4 g: ltgc\n2-6 l: lxlnln\n13-15 q: qqqqqqqqqqqqqqxq\n3-4 j: jvjj\n5-15 c: cpmzlhcckwlnhwmwgzw\n3-8 b: qvblmmchbcc\n5-8 b: fqhdwtcxb\n4-15 k: kkvkkkcwgkkbkkdkkkkn\n11-12 f: fnffffffffffffff\n9-10 t: tttttttpfvt\n4-10 f: nfffpftfffffffnf\n2-4 m: scgxnm\n7-8 z: zzzzzzxhbz\n6-9 z: vznwkzzzz\n3-5 k: hkcdn\n3-10 k: kkskkkkkkz\n2-3 p: pbdf\n1-4 m: mdhmm\n6-10 b: lfbbwdbbtv\n8-10 g: gggggggggggg\n2-3 t: qgthtztbwtppb\n15-17 n: nnnnnnnnnnnnnnbnjn\n8-17 v: vvvvvvgkvfvvzvvvpv\n4-5 f: vwffff\n8-15 w: wwbvwwwwdwwkzwwwwwwf\n7-13 n: srmzrmnvcgshljkchp\n5-15 q: dqjvfqvpwqnmpwqzh\n1-2 h: hhfs\n2-6 h: jhqwhh\n3-4 t: tthg\n2-4 b: sxsqrrxkjb\n6-8 q: qqqqqqqqqq\n6-7 c: rqcxcclxccwqcgwq\n4-5 v: vvmfv\n6-7 m: mmmcmmmm\n2-4 j: bqfj\n2-12 k: kkkkvkkkkskkkkkk\n5-9 q: xjtqqrnnkdplrnqq\n1-6 k: bqkrfpkcrwwkk\n1-4 r: mrblr\n12-18 s: ssssbfdlqbbssplswpsl\n8-9 b: bhbhhbbkbzbnbcbh\n3-7 t: tsdtthx\n12-15 f: xcmghffxtgfffjf\n12-16 n: bxnnhnhnnzfnnnwrtgl\n7-9 q: qqqcqmnqdq\n2-3 m: rpbjgkxqtmjrzm\n11-12 s: hssssssssshc\n3-5 x: xxldx\n3-4 k: kkkxt\n7-9 k: wlgkqndkz\n5-7 l: llmtllv\n2-6 v: svzvfv\n5-6 d: djdddvddd\n5-6 k: mhkkkkkwvkkcfk\n3-4 c: rjcc\n4-8 t: ttttzfttc\n10-11 g: ggzggngbzgg\n14-16 w: qzqwdwbcwwwmllndzlsm\n2-4 z: zzpz\n12-13 g: gwxpwcbsvwgtthn\n1-4 b: bbbbmzc\n5-7 f: cnxlfdffmt\n3-4 z: znsdz\n10-13 c: mrckljhmrcmnc\n2-9 m: dxmdhndrwpmpgc\n7-16 z: zzzzzzzzzzzzzzzzz\n1-3 j: jjjjjjjjjjjjjjjj\n15-18 g: mmglvtgzggzgnggggg\n4-10 c: cccncccccz\n1-8 n: mnnnnnntn\n10-13 l: llllllltzhlvvld\n2-3 r: gnnd\n3-7 v: vcnfzzbd\n6-7 p: pprpctdp\n5-8 g: gggggqgggg\n1-13 f: wfffdfpbfjlfhb\n3-8 j: dmjjkqwj\n4-10 j: vfjhnswwwtzlfvmcdn\n2-4 v: bnjd\n4-7 w: btwwlfwkwzmzhhlsvs\n14-15 g: gggggggggggggpgg\n10-11 w: zwwwwwwpwgrww\n2-3 b: dbbcgwqfzlhwcbs\n1-9 f: qfpfvffffffmfxbcpf\n9-10 t: tttbpttttmttcnt\n2-3 l: lgll\n8-9 s: vzgvjsnns\n6-8 w: wwwdwsbtswrww\n13-14 h: dhhhxhdjnvhrhrflhh\n7-8 d: dddddvjd\n14-15 l: lllqlllllllllnlxlh\n12-13 d: ddddzdjdddhhkdd\n9-14 p: pvtplhjvpzdvqjqvh\n9-10 r: rjrrrrrtrrrr\n6-8 g: gjjgfwgg\n9-14 j: jjjjjjtjcjjjjhjjj\n8-9 q: phxjqqnqq\n5-6 k: lkkkkk\n14-15 x: xxxxxgwxxxxxxtwxq\n1-4 x: xqfxx\n1-8 m: mmgmnmvm\n2-3 n: hnwr\n14-15 z: zzzzzzzzzzzzssz\n2-6 p: pspppp\n1-6 z: zzxzzx\n9-18 z: zzzzzzgzzzzzzzzzzgz\n6-11 z: wzhtdzzfxjz\n3-4 v: vzvv\n16-19 q: qqqqqqqlqqqqqxqqqqq\n2-4 v: vvhvvvv\n2-9 p: lpxppwppppgppspb\n11-12 m: mmmmmmmmmmndm\n8-9 v: vvvpjvvvpvv\n16-19 k: kkkkkkkkkkkkkkfkkkk\n9-10 z: zxlzfzczzzczrdn\n12-18 p: ppppppppppbjpplpphp\n1-3 p: pvpppx\n1-2 x: vxlx\n10-12 l: lllnlllllwlll\n4-5 b: bphwg\n7-10 c: gcjjpprxxjcwvk\n6-9 l: llwqklmpxlszgzlvl\n9-15 s: fsxsscswksvrmsh\n15-16 q: lqxqqwqpqwptqqmg\n10-13 r: xmpmqrdjkrzkpzc\n3-5 c: kcbcclt\n17-18 f: jffffsffffffffffbsff\n1-3 t: vqcqdmmgc\n1-2 n: qnnn\n16-18 n: nnjzhnznnnxlrmmnsn\n13-19 q: srxlcdznhbfxqtsqtsqx\n2-7 m: vmmmnjmmmmz\n6-7 v: vlvmjvg\n7-15 k: xnpkbtzwgntptwkgmxm\n15-19 g: wggggggggggsggkggxg\n8-17 h: hhhhhhhwhhhhhhhhhh\n2-5 w: kwwwww\n4-12 k: kkkqkkkkkkkqkkkkkkk\n7-11 d: hddcndsgddgz\n2-7 t: tdzxnth\n1-7 z: lzzcrvz\n5-10 h: shvchmxxdh\n12-13 f: kffwgtfsssfqnvff\n1-9 b: mbbbbtxbrbbc\n4-12 r: rnfvrprrrrzrrr\n2-6 p: qzltppwqljg\n2-4 w: hwdxwmmqphfkhthczx\n3-4 r: rrwj\n3-4 b: lbbbpldfj\n4-12 g: gggggggggggggkv\n4-5 r: rrqjtrrr\n4-8 n: nnnrfhnfn\n4-11 h: lrnxkwkbhgnhh\n1-8 l: lvjlhbffl\n6-10 g: ggtgghghghpfgg\n1-2 s: szsss\n3-6 s: dszxsdsssskssbs\n11-14 x: xxxncxxxxxxxxq\n5-10 m: mtmmmmmmmdmm\n1-3 r: qrgr\n2-7 m: gmhmmtd\n1-3 c: cccswmjcmnm\n2-9 x: qbcdsxxlx\n6-7 s: nsswzssv\n1-14 m: trmlzmsmgqmmmnfdsmtm\n5-7 d: cdddzdtdd\n3-4 k: tvczkxvvrw\n2-8 s: slvmswvs\n10-16 p: pppppppppgpptpptpp\n2-11 l: jqxsjlvpzkgzjdmt\n4-7 t: ttmtpttp\n4-11 r: twbrxccwcrtffpnv\n6-8 k: kkckkkkqkk\n10-12 v: vvvvvvvvvvvv\n4-6 k: gqzkkk\n3-4 r: rrmxr\n12-13 p: npgppsppppqnw\n1-16 x: mxxxxxxxxxxxxxxv\n5-6 l: llllll\n1-4 k: bkkckkkkk\n10-11 v: vkvtvkjltmlvtxlnlrsj\n3-11 h: mzhrhlhhhhhwl\n5-6 p: pppppp\n1-17 m: mmmmmmmmmmmmmzmjmmmm\n2-6 v: cvvcvfbgcvvvcq\n4-7 n: nnsnnwj\n2-3 k: xvkxkksvb\n16-17 x: xxtxxxxxxxxxxxxxr\n1-13 w: lwwwwwwwwwwwxw\n3-14 d: ddjdddbddddddtdddd\n4-10 g: jrxggnqmjg\n1-3 b: bbfbbbbb\n4-5 d: pdhdm\n5-7 d: mvdsdnd\n17-19 m: mlmmmmmmmmhmmmmmmmm\n4-6 g: gtlgxggggsgc\n6-7 m: mzvmhglmmmpmmxf\n10-14 j: jrjjjxcjjtjjjhpljl\n9-15 w: wwwwlwwwwwwwwwjwwdw\n1-3 g: wtzgjgr\n5-7 m: dmmmtmm\n1-8 g: ggkdgpggg\n5-6 x: xnjhmx\n1-7 b: bbbbbbbfbbbb\n3-11 n: mnnnngnnnvnnqnnvn\n2-3 l: jglgdrczl\n12-14 f: tffpffsmfffffg\n10-13 d: mndmdwdxjdxpd\n9-10 m: mlmmmmmmzvxm\n6-8 l: ptpjwltl\n7-8 r: rrdrprlqrr\n8-9 n: nnnnnnnrc\n6-7 p: ppppphn\n4-8 t: smtptgwtmlttw\n4-10 j: jsjjjjjjjj\n15-18 k: kkhwkkkkkkkkkkkkkk\n1-2 s: sksxb\n2-10 g: sggchblktg\n8-12 r: rrrrrrrrbwrr\n13-14 v: vvvvvvvvzvcvvvvv\n3-4 p: kppp\n4-14 m: mmmsmmmmmmmmmzm\n5-6 n: kndmnnnnpnznjqb\n3-10 d: xlddcdbdlddpqdkdl\n17-18 n: tnmcvdcznnnfnznldt\n6-11 g: wgbgzgggggg\n16-18 z: zzzzzttzzzzzzzzkzq\n11-13 x: pxxlgmtvbjrlb\n2-13 p: bmphpwxpsmmthppprdk\n14-16 r: rmrrrrrdmrrrrztrjr\n1-5 x: xdxxx\n1-3 d: dgdddfzddfd\n1-9 m: ddfmgwfgf\n7-11 x: xwnqqtxdmns\n5-6 v: ffvvvv\n3-15 g: dggggggzggggggb\n10-13 p: pptpppkdpwcngppf\n11-12 x: xxngxbxxdxxxxnzxbxx\n3-4 n: nxqc\n1-2 x: dvxxx\n4-5 h: zhvhh\n3-5 j: jqpjj\n2-7 f: ffffffpfz\n8-10 k: kkkkkkkkkk\n5-12 x: xxtxxxxxxxxxxx\n12-14 c: cccccccccccccc\n8-9 s: vhlssssws\n1-4 k: dqkk\n4-10 r: rrbrrrrrrdrr\n1-3 r: hqljfr\n8-12 c: qcccccszgjgcccddccw\n6-14 m: mmmmmxmmpmmqmcmmdm\n5-6 r: mwrrdtm\n1-5 t: rdjtts\n6-14 c: gpcbczvfbcbcckblzc\n5-6 w: wxwwww\n3-4 p: rjppp\n10-13 t: ttttttctdtgtttts\n3-14 c: cvlcpqscwgzgxzxvkmh\n3-7 h: kxqfwfddhllhj\n10-18 r: mdqrrmrdxkkvxftrrr\n13-14 m: cmmmcgmmmmhvmm\n2-7 h: khvhhjhhjbv\n5-9 r: rrrzgrrrlr\n1-8 c: gccccccsccc\n15-17 v: vvvvvvvvvvvvvvdvn\n9-13 v: vbvdgpvjvhvhwxv\n6-9 z: zzxbqznzqjzh\n3-6 r: rrrrrrrrrrrrrrrrrrrr\n3-4 x: nxxxxst\n7-10 q: qqqqqqfqqf\n9-10 j: jjbjdjqcqw\n9-13 z: dhzzzzzzzzzwxkzzzzjk\n3-9 q: pqxgqqcqqjql\n10-11 h: ljhgjwhzdrhhhh\n18-19 v: vvvvvvvvvvvvvvvvvvvv\n10-11 l: vgxrhvtfblwl\n2-3 v: rvvvvpj\n8-9 c: smchcscccdmf\n2-3 n: nqmnn\n15-17 x: xxxxxxxxxxxxxxqxrxk\n11-14 j: jjjjjjjjjjljjvj\n7-9 z: zvzzmzjkfbvzzczczlzm\n2-6 z: zzzjzjzzmfzk\n9-11 m: mvcmmbmlzrmmz\n6-7 r: rrrrrrr\n3-6 c: jtcfscccvvf\n2-5 s: cssbntxggkwvwnchn\n8-10 x: xxsxjzxqxx\n6-7 n: ndnnnbg\n9-16 j: jgzxxsmljbhbttqjw\n3-4 k: gjsk\n9-10 q: qqcrqqqpqq\n2-4 t: thtt\n3-4 w: wrfxww\n9-14 v: vvsvvkqgzvmvvvvvlvvv\n9-15 m: mmmmkmxdmdmmhmmwjw\n3-9 b: bbbbwcwbb\n3-6 c: ctdccs\n7-8 k: kkqrkkkk\n5-7 l: llmllcqjljlh\n5-7 w: wnzbwgw\n15-17 f: fcffffffffffffffpf\n1-2 t: tttft\n1-7 n: zctqhnxvbn\n3-8 z: hdpqzzzlzsw\n3-15 l: llslllllllllllml\n8-19 w: rwtbwrwjwtwxcclthdw\n4-5 g: zggggg\n5-14 v: vvvvhvvvvvvvmlvv\n1-7 l: mlgxllpgl\n2-12 b: mvwbfjcddqjb\n1-3 m: qmzm\n2-3 r: rrrrrffr\n1-7 x: xxsgxxv\n8-10 d: tdrrqdzcdddddxddl\n2-4 n: crnnfdcnnnzn\n3-4 n: nnnz\n9-10 z: zzzzqfzzzzz\n10-16 n: nnnhmnnznsnntnnc\n9-16 s: vssssbsscssssssjss\n9-13 w: wwkwwwqqwvwwww\n4-5 d: hkdhwddtdkqwvl\n3-4 l: llll\n4-5 f: ffzffftld\n7-9 d: ddddddddgd\n6-7 t: ttthptttqxlfddstsq\n5-16 c: clhwccvlnmttjqcc\n4-5 k: pkkkk\n7-11 m: xwmmmmchmmt\n16-17 n: nnnnnnnnnnhnnnnrm\n5-8 b: bbbbbbbbb\n1-4 s: jsss\n3-4 h: rhhhtjwfvdhz\n9-10 r: rrrprlrwrrw\n1-6 n: nnnnnkn\n18-19 p: ppppppppppppppppppp\n4-5 l: ljlrcl\n3-7 m: mmmmmjmdmtm\n12-13 b: bbbbbbbbbbbvf\n6-11 g: hcghdwfpcqk\n4-6 q: krpfvw\n10-13 j: jsjkvjjjjjzjjfj\n5-6 n: lcnnnnzndqkfnsq\n2-4 j: nvdj\n2-5 p: hppnpmpq\n2-4 w: wnwbw\n2-7 f: fwfxfmfszmcxf\n6-8 d: dqrdbsnjds\n1-3 f: ffffffmff\n5-8 s: lnbwqnkxws\n10-12 n: nnnnnnjnnnnnjcn\n9-12 c: pccvnbccxrncrcclccc\n14-18 s: ssssssssslsssstsssss\n3-6 l: lldllczl\n6-11 g: gggggwgggghg\n11-12 h: chhhmjhzhqfh\n5-6 n: qhnvcw\n6-7 k: nckkkkmnkkkzkkk\n6-8 d: wddgbdpdzdqxrwddjlz\n1-3 h: qghp\n3-5 j: mnjjjxjkgnrdzjbtdr\n1-9 g: gfgcgggxgjggggggf\n8-20 b: vptprmjbwwtnbhwjtnjb\n7-8 j: jjjjjjjj\n3-4 t: tqtt\n5-10 f: fffzbxxszjjvjfhn\n3-4 t: tttttttbtt\n4-7 p: wjrgpnj\n1-9 g: pgzllxgfg\n14-15 c: cccccccccccccqm\n11-12 b: btmcbzbnzcbbxr\n5-6 h: hhhhhhh\n1-6 s: nssmsssss\n11-12 d: ddddddbddthfdddd\n11-13 j: jtjjjjjjpjjjjwfjj\n2-4 j: gjjj\n3-9 v: vvgvvvvvrv\n1-2 l: tqjjljxcsl\n5-6 q: nqqqqr\n12-16 h: hkhhhhhjhhhhqxhhhhhh\n2-6 p: lpppkpbpzg\n2-7 v: vzvvvvfv\n13-16 g: ggggggggggggwggb\n3-14 j: ghsjjcgmkwsdchlslpf\n1-3 s: ssplw\n7-8 x: xxxnxxxxxxx\n3-4 h: zghhvtwtmlplvxxhsbf\n4-5 g: sqgsnf\n14-17 z: zzzzzzzzzzzzzwczc\n1-2 z: cpzzzzk\n16-17 s: ssssssssssfsqssss\n3-9 j: jvjjfjdjjjjjh\n1-6 v: vtvrvvj\n4-8 c: clzcccccccf\n4-5 d: dwldw\n2-4 l: lwlrllllllll\n6-11 s: zxgcsdxkrcns\n14-17 r: vrhvhrprrfrsrrrrr\n3-6 p: mrcztppnl\n4-6 w: wwwwwwwwww\n1-6 w: zwjccrqpwmnthz\n2-7 t: mnjntdcq\n1-5 b: bbjbbbbb\n10-11 w: wwwwwtwwwwww\n4-6 d: dddxdfd\n2-4 f: fjfff\n13-15 b: vbbbbbbbbbbbbbb\n8-9 n: ncbnnnnnn\n2-6 d: hdfphnnmbbdt\n1-4 f: wffz\n7-15 f: ffsffffffffffvzff\n8-10 c: zchrckkcqcr\n2-6 h: thvbvh"));
//# sourceMappingURL=password.js.map