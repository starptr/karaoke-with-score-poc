import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

import { Abc } from "./Abc";

export const myCompSchema2 = z.object({
});

export const AbcExample: React.FC<z.infer<typeof myCompSchema2>> = ({
}) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const logoRotation = interpolate(
    frame,
    [0, videoConfig.durationInFrames],
    [0, 360],
  );
  const progress = interpolate(
    frame,
    [0, videoConfig.durationInFrames],
    [0, 100],
  )

  const abcSource =
//    `%%beginsvg
//<defs>
//<path id="x_head"
//d="m-3 -3l6 6m0 -6l-6 6"
//class="stroke" style="stroke-width:1.2"/>
//</defs>
//%%endsvg` +
    //"%%score (T1 T2)" +
    //"T: Cooley's\n" +
    "M: C|\n" +
    "L: 1/8\n" +
    //"R: reel\n" +
    "K: F#maj\n" +
    // Custom variable for x head
    //"%%map drum ^A, print=g heads=x_head" +
    // ============================== Voice 1
    "[V:T1] z4 z2 B2|c2 z2 z4| z4 z2 B2|c2 z2 z4|z4 z2 B2|c2 z2 z2 B2|c2 z2 z2 B2|=d2 =d2 =d2 =d2|c " +
    "z FF GF c2|F2 z2 z4|" + // Tsuyogaru Ga-ru!
    "z8|z8|z8|z8|z8|z8|z8|" +
    "AAAA AA-AA|AG-GF z " + // Mobukyara shiten no | hibi wa
    "F FF|G2 FG- GA- Az|z8|" + // sawagashi sugite (seishun dai sensō)
    "z F (FD) F2 A2|G2 z2 z4|z2 " + // go en ga nai (machigainai)
    "A2 (AF)FF |F3 F G4|" + // hīrō janaikara
    "A2 A2 AA-AA|AG-GF- F" + // ten'nen yurai no purinses
    "F-FF|G2 GG- GA- Az|z8|" + // kyō mo atchi kotchi (haiboku gunzō ge[ki]) <- overlap
    "z F F=D F2 A2|G2 z2 z4|" + // dokidoki shite (zukizukisu(ru)) <- skipped
    "A2 G2 F2 E2|G3 G F4|" + // kanawanukoi yo
    "cAcA cAcA|" + // guruguruguruguru
    "cAcA cAcA|" + // guruguruguruguru
    "z4 FG A2|cc A2 G2 F2|" + // (atama) no naka imi fumeide
    "cAcA cAcA|" + // guruguruguruguru
    "cAcA cAcA|" + // guruguruguruguru
    "cA c2 z4|cc A2 F4|" + // nazo ni (hashiri)taku natte
    "A4 (3:2:2 G2F4|E4 (3:2:2 E2F4|G4 (3:2:2 F2E4|=E4 z4|" + // namida ga koboreru made
    "z8|z8|" + // (ha o kuishibatte kuishibatte)
    "z4 " + // (pīsu shite!)
    "z(c F)G|" + // Sō sa
    "c3 A A4|d3 c c4|c2 B2 A2 G2|A2 z2 " + // nandomonandomo makete yare!
    "AG F2|F2 D2 F2 A2|G2 F2 G2 d2|c8|" + // Namida sono tabi tsuyokunaru
    "z2 (c2 F2) G2|c2- c/2c/2A A4|d2- d/2d/2c c4|e4 G4|A4 " + // kitto itsuka wa itsuka wa happīend
    "AG F2|F2 D2 F2 A2|B2 A2 (G2 F2)|F8-|F8|" + // hashire! Yuiitsu muni no unmei
    "AAAF B2 AA|G2 A2 z " + // tsuyo garu gāru wa saikyō!
    "C DF|z4 zF Gd-|ddAc- c4|" + // Fuzake (sawagi) kagayaite ku
    "AAAF BBA=d-|dAGF z4|" + // namida kirari nakiwarai
    "z(A G)F zF GF-|F8|" + // (sugoi) bīmu hanatsu
    "AAAF B2 AA|G2 A2 z " + // tsuyo garu gāru wa saikyō!
    "C DF|z4 zF Gd-|ddAc- c4|" + // Asu mo (kyō mo) makeikusa de
    "AAAF BBA=d-|dAGF z4|" + // dakedo supin'ofu janai
    "zA GF zF GF-|F4 " + // (boku-ra) shuyaku no hibi
    "z2 B2|c2 z2 z4| z4 z2 B2|c2 z2 z4|z4 z2 B2|c2 z2 z2 B2|c2 z2 z2 B2|=d2 =d2 =d2 =d2|c " +
    "z FF GF c2|F2 z2 z4|]" + // Tsuyogaru Ga-ru!
    "\n" + // ============================== First line of lyrics
    "w: Ma-ke! Ma-ke! Ma-ke! Ma-ke! Ma ke ke ke ke ke! " +
    "Tsu-yo ga-ru Gā-ru! " +
    "Mo-bu-kya-ra shi-ten * no hi-bi * wa " +
    "sa-wa-ga-shi su-gi-*te* " +
    "go en * ga na-i " +
    "hī-rō* ja-na-i-ka-ra " +
    "ten' nen yu-rai* no pu-rin-*se-su " +
    "kyō* mo at-chi kot-*chi* " +
    "do-ki do-ki shi-te " +
    "ka-na-wa-nu ko-i yo " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "no na-ka i-mi fu-mei-de " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "na-zo ni ta-ku na-tte " +
    "na-mi-da ga ko-bo-re-ru ma-de " +
    "Sō* sa " +
    "nan-do mo nan-do mo ma-ke-te ya-re! " +
    "Na-mi-da so-no ta-bi tsu-yo-ku na-ru " +
    "kit-*to i-*tsu-ka wa i-*tsu-ka wa hap-pī-end " +
    "ha-shi-re! Yui-i-tsu mu-ni no un-*mei* " +
    "tsu-yo-ga-ru gā-ru wa sai-kyō! " +
    "Fu-za-ke ka-ga-ya-*i-te ku* " +
    "na-mi-da ki-ra-ri na-ki-*wa-ra-i " +
    "bī-*mu ha-na-tsu* " +
    "tsu-yo-ga-ru gā-ru wa sai-kyō! " +
    "a-su mo ma-ke-i-*ku-sa de* " +
    "da-ke-do su-pi-n'-o-fu* ja-na-i " +
    "shu-ya-ku no hi-bi* " +
    "Ma-ke! Ma-ke! Ma-ke! Ma-ke! Ma ke ke ke ke ke! " +
    "Tsu-yo ga-ru Gā-ru! " +
    "\n" + // Hiragana line of lyrics
    "w: ま け！ ま け！ ま け！ ま け！ ま け け け け け！ " +
    "つ よ が る ガー ル！ " +
    "モ ブ キャ ラ し てん* の ひ び* は " +
    "さ わ が し す ぎ* て* " +
    "ご え ん が な い " +
    "ヒー ロー* じゃ な い か ら " +
    "てん ねん ゆ らい* の プ リン* セス* " +
    "きょう* も あっ ち こっ* ち* " +
    "ド キ ド キ し て " +
    "か な わ ぬ こ い よ " +
    "ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る " +
    "の な か " +
    "い み ふ めい で " +
    "ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る " +
    "な ぞ に " +
    "た く なっ て " +
    "な み だ が こ ぼ れ る ま で " +
    "そ う さ " +
    "なん ど も なん ど も ま け て や れ！ " +
    "な み だ そ の た び つ よ く な る " +
    "きっ* と い* つ か は い* つ か は ハッ ピー エンド " +
    "は し れ ゆ い つ む に の う ん めい* " +
    "つ よ が る ガー ル は さい きょう！ " +
    "ふ ざ け か が や* い て く* " +
    "な み だ キ ラ リ な き* わ ら い " +
    "ビー* ム は な つ* " +
    "つ よ が る ガー ル は さい きょう！ " +
    "あ す も ま け い* く さ で* " +
    "だ け ど ス ピ ン オ フ* じゃ な い " +
    "しゅ や く の ひ び* " +
    "ま け！ ま け！ ま け！ ま け！ ま け け け け け！ " +
    "つ よ が る ガー ル！ " +
    "\n" + // ============================== Voice 2
    "[V:T2] z4 z2 B2|c2 z2 z4| z4 z2 B2|c2 z2 z4|z4 z2 B2|c2 z2 z2 B2|c2 z2 z2 B2|=d2 =d2 =d2 =d2|c " +
    "z z2 z4|z8|" + // (Tsuyogaru Ga-ru!)
    "z8|z8|z8|z8|z8|z8|z8|" +
    "z8|z8|" + // (Mobukyara shiten no | hibi wa sawaga)
    "z4 z2 zC-|C2 (A,G,) A,2 C2|A,2 z2 z4|" + // (shisugite) seishun dai senso
    "z C CA, C2 D2|C2 " + // (^go en ga nai) machigainai
    "=E2 =EB,B,B,|D3 B, B,4|" + // hīrō janaikara
    "z8|z8|" + // (ten'nen yurai no purinsesu)
    "z4 z2 zC-|C2 A,G, A,2 C2|A,2 D,2 " + // (kyō mo atchi kotchi) haiboku gunzō geki
    "z4|z A, CA, C2 D2|" + // (dokidoki shite) zukizukisu(ru) <- skipped
    "F2 E2 D2 C2| E3 C C4|" + // kanawanukoi yo
    "CA,CA, CA,CA,|" + // guruguruguruguru
    "CA,CA, CA,CA,|" + // guruguruguruguru
    "FG A2 z4|cc A2 G2 F2|" + // atama (no naka) imi fumeide
    "CA,CA, CA,CA,|" + // guruguruguruguru
    "CA,CA, CA,CA,|" + // guruguruguruguru
    "z4 cA c2|cc A2 F4|" + // (nazo ni) hashiritaku natte
    "z8|z8|z8|" + // (namida ga koboreru made)
    "z4 F2 E2|DD DD- D2 F2|EE EE- E2 G2|" + // ha o kuishibatte kuishibatte
    "F2 Fd c2 " + // pīsu shite!
    "z2|" + // (Sō sa)
    "c3 A A4|d3 c c4|c2 B2 A2 G2|A2 z2 " + // nandomonandomo makete yare!
    "z4|z8|z8|z8|" + // (Namida sono tabi tsuyokunaru)
    "z8|c2- c/2c/2A A4|d2- d/2d/2c c4|e4 G4|A4 " + // (kitto) itsuka wa itsuka wa happīend
    "z4|z8|z8|z8|z8|" + // (hashire! Yuiitsu muni no unmei)
    "AAAF B2 AA|G2 A2 z4|" + // tsuyo garu gāru wa saikyō!
    "zA GF zF Gd-|ddAc- c4|" + // (Fuzake) sawagi kagayaite ku
    "z8|z4 " + // (namida kirari nakiwarai)
    "zA dc|zA GF zF GF-|F8|" + // sugoi bīmu hanatsu
    "AAAF B2 AA|G2 A2 z4|" + // tsuyo garu gāru wa saikyō!
    "z(A G)F zF Gd-|ddAc- c4|" + // Asu mo (kyō mo) makeikusa de
    "z8|z4 " + // (dakedo supin'ofu janai)
    "zA dc|zA GF zF GF-|F4 " + // boku-ra shuyaku no hibi
    "z2 B2|c2 z2 z4| z4 z2 B2|c2 z2 z4|z4 z2 B2|c2 z2 z2 B2|c2 z2 z2 B2|=d2 =d2 =d2 =d2|c " +
    "z z2 z4|z8|]" + // (Tsuyogaru Ga-ru!)
    "\n" + // ============================== First line of lyrics for Voice 2
    "w: Ma-ke! Ma-ke! Ma-ke! Ma-ke! Ma ke ke ke ke ke! " +
    "se-i-shun * dai sen-sō " +
    "ma-chi-ga-i na-i " +
    "hī-rō* ja-na-i-ka-ra " +
    "ha-i-bo-ku gun-zō ge-ki " +
    "zu-ki zu-ki su " +
    "ka-na-wa-nu ko-i yo " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "a-ta-ma i-mi fu-mei-de " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "gu-ru gu-ru gu-ru gu-ru " +
    "ha-shi-ri ta-ku na-tte " +
    "ha o ku-i-shi-bat-*te ku-i-shi-bat-*te " +
    "pī-su shi-te! " +
    "nan-do mo nan-do mo ma-ke-te ya-re! " +
    "i-*tsu-ka wa i-*tsu-ka wa hap-pī-end " +
    "tsu-yo-ga-ru gā-ru wa sai-kyō! " +
    "sa-wa-gi ka-ga-ya-*i-te ku* " +
    "su-go-i bī-*mu ha-na-tsu* " +
    "tsu-yo-ga-ru gā-ru wa sai-kyō! " +
    "kyō* mo ma-ke-i-*ku-sa de* " +
    "bo-ku-ra shu-ya-ku no hi-bi* " +
    "Ma-ke! Ma-ke! Ma-ke! Ma-ke! Ma ke ke ke ke ke! " +
    "\n" + // Hiragana line of lyrics for Voice 2
    "w: ま け！ ま け！ ま け！ ま け！ ま け け け け け！ " +
    "せ い しゅ ん だい せん そう " +
    "ま ち が い な い " +
    "ヒー ロー* じゃ な い か ら " +
    "は い ぼ く ぐん ぞう げ き " +
    "ズ キ ズ キ す " +
    "か な わ ぬ こ い よ " +
    "ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る " +
    "あ た ま " +
    "い み ふ めい で " +
    "ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る ぐ る " +
    "は し り " +
    "た く なっ て " +
    "は を く い し ばっ* て く い し ばっ* て " +
    "ピー ス し て！ " +
    "なん ど も なん ど も ま け て や れ！ " +
    "い* つ か は い* つ か は ハッ ピー エンド " +
    "つ よ が る ガー ル は さい きょう！ " +
    "さ わ ぎ か が や* い て く* " +
    "す ご い ビー* ム は な つ* " +
    "つ よ が る ガー ル は さい きょう！ " +
    "きょ う も ま け い* く さ で* " +
    "ぼ く ら しゅ や く の ひ び* " +
    "ま け！ ま け！ ま け！ ま け！ ま け け け け け！ " +
    "\n"
    ;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{
        backgroundColor: "black",
        color: "#FFFFFF",
        width: "4000%",
        transform: `translateX(-${progress}%)`,
      }}>
        <Abc abc={abcSource} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
