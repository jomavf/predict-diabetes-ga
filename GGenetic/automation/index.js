const {Builder, By, Key, until} = require('selenium-webdriver');
const uuidv1 = require('uuid/v1');
const fs = require('fs');

async function main() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5500');
    await driver.findElement(By.xpath('/html/body/input[1]')).sendKeys('1');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[2]')).sendKeys('120');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[3]')).sendKeys('90');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[4]')).sendKeys('51');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[5]')).sendKeys('220');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[6]')).sendKeys('50');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[7]')).sendKeys('0');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/input[8]')).sendKeys('31');
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/button[1]')).click();
    await driver.sleep(100);
    await driver.findElement(By.xpath('/html/body/button[2]')).click();
    await driver.sleep(20000);
    // await driver.sleep(100);
    // driver.wait(function () {
    //     return driver.isElementPresent(driver.By.xpath("/html/body/div[12]"));
    // }, 60000);
  } finally {
    let base64Image = await driver.takeScreenshot()
    fs.writeFile(`./images/${uuidv1()}.png`, base64Image, {encoding: 'base64'}, function(err) {
        console.log(err)
    });
    setTimeout(()=>{
      driver.quit()
    },2000)
  }
};

(async function (){
    for (let i = 0; i < 10; i++) {
        await main()
    }
})();