const { PDFDocument, StandardFonts, rgb } = require('pdf-lib')
let fs = require('fs');

module.exports = {
    process: async function() {
        const filename = Math.floor(new Date().getTime() / 1000);
        const fs = require('fs');
        //fs.copyFileSync('base.pdf', filename + '.pdf' );
        //console.log('source PDF was copied to ' + filename + '.pdf');
        let pdfDoc = await PDFDocument.load(fs.readFileSync('base.pdf'));
        let pages = pdfDoc.getPages()
        console.log(pages.length);
        //下面是要填充的内容
        //总览: index 9 page 7

        //糖尿病 index 12 13 14 Page 10 11 12
        //分别是风险原因  个性化干预方案  推荐方案
        const page = pdfDoc.getPage(12);
        page.drawText('T', {
            x: 40,
            y: page.getHeight() / 2 + 250,
            size: 50,
            color: rgb(0.95, 0.1, 0.1),
        });
        console.log("糖尿病 Processed");
        //痛风 index   Page 15 16 17
        //分别是风险原因  个性化干预方案  推荐方案

        //非酒精性脂肪性肝病 index   Page 20 21 22
        //分别是风险原因  个性化干预方案  推荐方案

        //肥胖 index   Page 26 27 28
        //分别是风险原因  个性化干预方案  推荐方案

        //便秘 index   Page 31 32 33
        //分别是风险原因  个性化干预方案  推荐方案

        //炎症性肠病 index   Page 36 37 38
        //分别是风险原因  个性化干预方案  推荐方案

        //炎症性肠病 index   Page 36 37 38
        //分别是风险原因  个性化干预方案  推荐方案

        //克罗恩病 index   Page 41 42 43
        //分别是风险原因  个性化干预方案  推荐方案

        //抑郁症 index   Page 46 47 48
        //分别是风险原因  个性化干预方案  推荐方案

        //自闭症 index   Page 51 52 53
        //分别是风险原因  个性化干预方案  推荐方案

        //结肠疾病 index   Page 57 58 59
        //分别是风险原因  个性化干预方案  推荐方案

        //一型糖尿病 index   Page 62 63 64
        //分别是风险原因  个性化干预方案  推荐方案

        //肠道菌群组成和丰度 index  page 65

        fs.writeFileSync(filename + '.pdf', await pdfDoc.save());
        console.log("Report Saved");
    }
}