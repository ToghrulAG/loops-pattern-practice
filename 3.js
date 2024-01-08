//                                        * * * * * * * *
//                                        *             *
//                                        *             *
//                                        *             *
//                                        *             *
//                                        *             *
//                                        * * * * * * * *

// HOCAM MEN BU YAZDIGIM BERBAD KODU BASA SALMAGA CALISSAM SEHERE QEDER DERDLESERIK SIZINLE...
// BILMIREM YOXLAYANDA NE ISE BASA DUSECEKSINIZ YA YOX, AMMA ESAS ODUR OZUM YAZMISAM :D


for(let i = 1; i <= 8; i++) {
    let result = ''
    if(i === 1 || i === 8) {
        result = '* '.repeat(8)
    }
    else if (i !== 8 && i !== 1) {
        for(let j = 1; j <= 8; j++) {
            if(j == 8 || j == 1) {
                result += '* '
            }
            else {
                result += '  '
            }
        }
        
    }
    console.log(result)
}